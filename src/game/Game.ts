import * as THREE from 'three';

export type ZoneOwner = 'neutral' | 'blue' | 'red';
export type ZoneState = 'neutral' | 'capturing' | 'captured';
export type ZoneStatus = {
  id: number;
  label: string;
  x: number;
  z: number;
  state: ZoneState;
  owner: ZoneOwner;
  progress: number;
};

export type EntityHealth = {
  id: string;
  label: string;
  maxHealth: number;
  health: number;
  team: 'blue' | 'red';
};

export type PlayerMapPositions = {
  playerOne: { x: number; z: number };
  playerTwo: { x: number; z: number };
};

export type PlayerClass = 'attacker' | 'defender' | 'runner';
export type MatchWinner = 'blue' | 'red' | 'draw' | null;

type PlayerClassStats = {
  maxHealth: number;
  speedMultiplier: number;
  damageMultiplier: number;
  captureMultiplier: number;
};

type CaptureZone = {
  id: number;
  label: string;
  position: THREE.Vector3;
  radius: number;
  progress: number;
  state: ZoneState;
  owner: ZoneOwner;
  ringMesh: THREE.Mesh;
  ringMaterial: THREE.MeshBasicMaterial;
  glowMesh: THREE.Mesh;
  glowMaterial: THREE.MeshBasicMaterial;
  flagMaterial: THREE.MeshStandardMaterial;
  light: THREE.PointLight;
};

type HealthBar = {
  group: THREE.Group;
  bgMesh: THREE.Mesh;
  fillMesh: THREE.Mesh;
  fillMaterial: THREE.MeshBasicMaterial;
};

type Enemy = {
  mesh: THREE.Mesh;
  cone: THREE.Mesh;
  velocity: THREE.Vector3;
  rotation: number;
  health: number;
  maxHealth: number;
  healthBar: HealthBar;
  targetZoneId: number | null;
  attackCooldown: number;
};

type CollisionRect = {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
};

type CombatEffect = {
  group: THREE.Group;
  geometry: THREE.BufferGeometry;
  material: THREE.MeshBasicMaterial;
  elapsed: number;
  duration: number;
  startScale: number;
  endScale: number;
  opacity: number;
};

type FloatingDamageText = {
  sprite: THREE.Sprite;
  material: THREE.SpriteMaterial;
  elapsed: number;
  duration: number;
  startY: number;
};

type BulletProjectile = {
  mesh: THREE.Mesh;
  geometry: THREE.SphereGeometry;
  material: THREE.MeshBasicMaterial;
  velocity: THREE.Vector3;
  owner: 'blue' | 'red';
  remainingRange: number;
};

type PowerOrb = {
  group: THREE.Group;
  phase: number;
};

type GameCallbacks = {
  onZoneStatusUpdate?: (statuses: ZoneStatus[]) => void;
  onCapture?: (label: string, team: 'blue' | 'red') => void;
  onHealthUpdate?: (entities: EntityHealth[]) => void;
  onAttack?: () => void;
};

const NEUTRAL_COLOR = 0xffd644;
const BLUE_COLOR = 0x2a7fff;
const RED_COLOR = 0xff3a3a;
const ORANGE_COLOR = 0xff9f24;
const ATTACK_DAMAGE = 20;
const ATTACK_COOLDOWN = 0.6;
const BULLET_SPEED = 50;
const BULLET_RANGE = 70;
const POWER_ORB_INTERVAL = 15;
const POWER_ORB_PICKUP_RADIUS = 1.8;
const CAPSULE_RADIUS = 0.6;
const ARENA_LIMIT = 95;
const SKILL_RANGE = 12;
const SKILL_DAMAGE = 45;
const SKILL_COOLDOWN = 7;
const DASH_COOLDOWN = 2.5;
const DASH_DURATION = 0.15;
const DASH_SPEED_MULTIPLIER = 4.5;
const ZONE_CAPTURE_DURATION = 5;
const MATCH_DURATION = 120;
const ALL_FLAGS_HOLD_DURATION = 10;
const PLAYER_CLASS_STATS: Record<PlayerClass, PlayerClassStats> = {
  attacker: { maxHealth: 100, speedMultiplier: 1, damageMultiplier: 1.5, captureMultiplier: 1 },
  defender: { maxHealth: 200, speedMultiplier: 0.75, damageMultiplier: 1, captureMultiplier: 1 },
  runner: { maxHealth: 100, speedMultiplier: 1.4, damageMultiplier: 1, captureMultiplier: 2 },
};

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();

  private player: THREE.Mesh;
  private readonly playerStats: PlayerClassStats;
  private readonly enemyStats: PlayerClassStats;
  private playerVelocity = new THREE.Vector3();
  private playerRotation = 0;
  private playerHealth = 100;
  private playerMaxHealth = 100;
  private playerHealthBar!: HealthBar;
  private playerDead = false;
  private playerRespawnTimer = 0;
  private readonly playerSpawnPosition = new THREE.Vector3(-55, 1.5, 0);
  private playerAttackCooldown = 0;
  private playerSkillCooldown = 0;
  private playerDashCooldown = 0;
  private playerDashTimer = 0;
  private playerDashDirection = new THREE.Vector3();

  private enemy!: Enemy;
  private enemyDead = false;
  private enemyRespawnTimer = 0;
  private enemySkillCooldown = 0;
  private enemyDashCooldown = 0;
  private enemyDashTimer = 0;
  private enemyDashDirection = new THREE.Vector3();
  private readonly enemySpawnPosition = new THREE.Vector3(55, 1.5, 0);
  private playerFlashTimer = 0;
  private enemyFlashTimer = 0;
  private combatEffects: CombatEffect[] = [];
  private floatingDamageTexts: FloatingDamageText[] = [];
  private projectiles: BulletProjectile[] = [];
  private powerOrbs: PowerOrb[] = [];
  private powerOrbSpawnTimer = 0;
  private playerBulletCount = 1;
  private enemyBulletCount = 1;

  private keys: Record<string, boolean> = {};
  private spacePressed = false;
  private playerTwoAttackPressed = false;

  private cameraAngle = 0;
  private cameraTarget = new THREE.Vector3();
  private cameraTwo: THREE.PerspectiveCamera;
  private cameraTwoTarget = new THREE.Vector3();

  private animationId: number | null = null;
  private container: HTMLElement;

  private zones: CaptureZone[] = [];
  private obstacles: CollisionRect[] = [];
  private routeObstacles: CollisionRect[] = [];
  private playerOneActiveZoneId: number | null = null;
  private playerTwoActiveZoneId: number | null = null;
  private captureMessageTimer = 0;
  private callbacks: GameCallbacks;

  private elapsed = 0;
  private matchTimeRemaining = MATCH_DURATION;
  private suddenDeathTeam: 'blue' | 'red' | null = null;
  private suddenDeathRemaining = 0;
  private matchWinner: MatchWinner = null;
  private matchEnded = false;

  constructor(
    container: HTMLElement,
    playerClass: PlayerClass,
    playerTwoClass: PlayerClass,
    callbacks: GameCallbacks = {}
  ) {
    this.container = container;
    this.callbacks = callbacks;
    this.playerStats = PLAYER_CLASS_STATS[playerClass];
    this.enemyStats = PLAYER_CLASS_STATS[playerTwoClass];
    this.playerMaxHealth = this.playerStats.maxHealth;
    this.playerHealth = this.playerMaxHealth;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a24);
    this.scene.fog = new THREE.Fog(0x1a1a24, 40, 120);

    this.camera = new THREE.PerspectiveCamera(
      60,
      (container.clientWidth / 2) / container.clientHeight,
      0.1,
      500
    );
    this.cameraTwo = new THREE.PerspectiveCamera(
      60,
      (container.clientWidth / 2) / container.clientHeight,
      0.1,
      500
    );

    this.setupLights();
    this.setupFloor();
    this.setupGrid();
    this.setupZones();
    this.setupArenaWalls();

    // Player — blue capsule
    const capsuleGeo = new THREE.CapsuleGeometry(0.6, 1.2, 8, 24);
    const capsuleMat = new THREE.MeshStandardMaterial({
      color: BLUE_COLOR,
      roughness: 0.35,
      metalness: 0.15,
    });
    this.player = new THREE.Mesh(capsuleGeo, capsuleMat);
    this.player.castShadow = true;
    this.player.position.copy(this.playerSpawnPosition);
    this.scene.add(this.player);

    // Direction indicator — small cone pointing forward
    const coneGeo = new THREE.ConeGeometry(0.25, 0.5, 12);
    const coneMat = new THREE.MeshStandardMaterial({ color: 0x8ebcff });
    const cone = new THREE.Mesh(coneGeo, coneMat);
    cone.position.set(0, 0.2, -0.9);
    cone.rotation.x = -Math.PI / 2;
    this.player.add(cone);

    // Player health bar
    this.playerHealthBar = this.createHealthBar(0x44ff66);
    this.player.add(this.playerHealthBar.group);
    this.playerHealthBar.group.position.set(0, 2.0, 0);

    // Enemy — red capsule
    this.setupEnemy();

    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('resize', this.onResize);

    this.emitZoneStatus();
    this.emitHealth();
    this.animate();
  }

  private setupLights() {
    const ambient = new THREE.AmbientLight(0x6a6a8a, 0.5);
    this.scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0x9999bb, 0x444455, 0.4);
    this.scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(20, 40, 20);
    dir.castShadow = true;
    dir.shadow.mapSize.width = 2048;
    dir.shadow.mapSize.height = 2048;
    dir.shadow.camera.left = -60;
    dir.shadow.camera.right = 60;
    dir.shadow.camera.top = 60;
    dir.shadow.camera.bottom = -60;
    dir.shadow.camera.near = 1;
    dir.shadow.camera.far = 120;
    this.scene.add(dir);
  }

  private setupFloor() {
    const floorGeo = new THREE.PlaneGeometry(200, 200);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: this.createCloudTexture(),
      roughness: 0.95,
      metalness: 0.0,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }

  private createCloudTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const context = canvas.getContext('2d');
    if (!context) return new THREE.CanvasTexture(canvas);

    context.fillStyle = '#8dd2f2';
    context.fillRect(0, 0, canvas.width, canvas.height);

    let seed = 481516;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let cluster = 0; cluster < 95; cluster += 1) {
      const centerX = random() * canvas.width;
      const centerY = random() * canvas.height;
      const puffs = 4 + Math.floor(random() * 7);
      for (let puff = 0; puff < puffs; puff += 1) {
        const radiusX = 24 + random() * 52;
        const radiusY = radiusX * (0.42 + random() * 0.4);
        const x = centerX + (random() - 0.5) * 110;
        const y = centerY + (random() - 0.5) * 55;
        const gradient = context.createRadialGradient(x, y, 0, x, y, radiusX);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.94)');
        gradient.addColorStop(0.58, 'rgba(244, 251, 255, 0.72)');
        gradient.addColorStop(1, 'rgba(225, 244, 255, 0)');
        context.fillStyle = gradient;
        context.beginPath();
        context.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
        context.fill();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  private setupGrid() {
    const grid = new THREE.GridHelper(200, 100, 0x888899, 0x444466);
    (grid.material as THREE.Material).opacity = 0.14;
    (grid.material as THREE.Material).transparent = true;
    grid.position.y = 0.01;
    this.scene.add(grid);
  }

  private setupArenaWalls() {
    const ruinMaterial = new THREE.MeshStandardMaterial({ color: 0x922c35, roughness: 0.92 });
    const ruins = [
      { x: -18, z: -13, width: 10, depth: 3, height: 6 },
      { x: -16, z: 16, width: 3, depth: 9, height: 5 },
      { x: 17, z: -16, width: 3, depth: 9, height: 7 },
      { x: 18, z: 15, width: 10, depth: 3, height: 6 },
      { x: 0, z: 26, width: 12, depth: 3, height: 8 },
    ];

    for (const ruin of ruins) {
      this.addArenaWall(ruin.x, ruin.z, ruin.width, ruin.height, ruin.depth, ruinMaterial, true);
    }

    const borderMaterial = new THREE.MeshStandardMaterial({ color: 0x641d28, roughness: 0.95 });
    this.addArenaWall(0, -99, 200, 4, 2, borderMaterial, false);
    this.addArenaWall(0, 99, 200, 4, 2, borderMaterial, false);
    this.addArenaWall(-99, 0, 2, 4, 200, borderMaterial, false);
    this.addArenaWall(99, 0, 2, 4, 200, borderMaterial, false);
    this.setupPalmTrees();
  }

  private setupPalmTrees() {
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x76502c, roughness: 0.92 });
    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x278d56,
      roughness: 0.8,
      side: THREE.DoubleSide,
    });
    const veinMaterial = new THREE.MeshStandardMaterial({ color: 0x8cbf63, roughness: 0.8 });
    const frondShape = new THREE.Shape();
    frondShape.moveTo(0, 0);
    frondShape.bezierCurveTo(0.35, 0.62, 1.25, 0.85, 2.5, 1.15);
    frondShape.bezierCurveTo(1.8, 0.46, 0.98, 0.12, 0.35, -0.42);
    frondShape.bezierCurveTo(0.1, -0.28, 0.02, -0.12, 0, 0);
    const frondGeometry = new THREE.ShapeGeometry(frondShape, 12);
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.06, 1.5, 0),
      new THREE.Vector3(0.2, 3, 0),
      new THREE.Vector3(0.42, 4.6, 0),
      new THREE.Vector3(0.34, 6.2, 0),
    ]);
    const trunkGeometry = new THREE.TubeGeometry(trunkCurve, 24, 0.28, 9, false);
    const leafSpineCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.45, 0.36, 0),
      new THREE.Vector3(1.35, 0.72, 0),
      new THREE.Vector3(2.5, 1.15, 0),
    ]);
    const leafSpineGeometry = new THREE.TubeGeometry(leafSpineCurve, 12, 0.035, 5, false);
    const treePositions = [
      [-78, -72], [-78, 72], [78, -72], [78, 72], [-28, -82], [28, 82],
      [-54, -48], [-54, 48], [54, -48], [54, 48], [-7, -58], [7, 58],
      [-68, -8], [68, 8],
    ];

    for (const [x, z] of treePositions) {
      const tree = new THREE.Group();
      tree.position.set(x, 0, z);
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.castShadow = true;
      tree.add(trunk);

      for (let index = 0; index < 8; index += 1) {
        const angle = (index / 8) * Math.PI * 2;
        const frond = new THREE.Group();
        frond.position.set(0.34, 5.95, 0);
        frond.rotation.y = angle;
        const leaf = new THREE.Mesh(frondGeometry, leafMaterial);
        const spine = new THREE.Mesh(leafSpineGeometry, veinMaterial);
        leaf.castShadow = true;
        frond.add(leaf, spine);
        tree.add(frond);
      }

      const coconutGeometry = new THREE.SphereGeometry(0.24, 10, 8);
      const coconutMaterial = new THREE.MeshStandardMaterial({ color: 0x4c3120, roughness: 0.9 });
      for (let index = 0; index < 3; index += 1) {
        const coconut = new THREE.Mesh(coconutGeometry, coconutMaterial);
        const angle = (index / 3) * Math.PI * 2;
        coconut.position.set(0.34 + Math.cos(angle) * 0.24, 5.72, Math.sin(angle) * 0.24);
        tree.add(coconut);
      }

      this.scene.add(tree);
    }
  }

  private addArenaWall(
    x: number,
    z: number,
    width: number,
    height: number,
    depth: number,
    material: THREE.MeshStandardMaterial,
    routeAround: boolean
  ) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    mesh.position.set(x, height / 2, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);

    const rect = {
      minX: x - width / 2,
      maxX: x + width / 2,
      minZ: z - depth / 2,
      maxZ: z + depth / 2,
    };
    this.obstacles.push(rect);
    if (routeAround) this.routeObstacles.push(rect);
  }

  private moveWithCollisions(position: THREE.Vector3, velocity: THREE.Vector3, dt: number, radius: number) {
    position.x += velocity.x * dt;
    this.constrainPosition(position, radius);
    position.z += velocity.z * dt;
    this.constrainPosition(position, radius);
  }

  private constrainPosition(position: THREE.Vector3, radius: number) {
    for (let iteration = 0; iteration < 4; iteration += 1) {
      for (const obstacle of this.obstacles) {
        const closestX = THREE.MathUtils.clamp(position.x, obstacle.minX, obstacle.maxX);
        const closestZ = THREE.MathUtils.clamp(position.z, obstacle.minZ, obstacle.maxZ);
        const dx = position.x - closestX;
        const dz = position.z - closestZ;
        const distanceSquared = dx * dx + dz * dz;
        if (distanceSquared >= radius * radius) continue;

        if (distanceSquared > 1e-8) {
          const distance = Math.sqrt(distanceSquared);
          const push = (radius - distance + 0.001) / distance;
          position.x += dx * push;
          position.z += dz * push;
          continue;
        }

        const distances = [
          { distance: position.x - obstacle.minX, axis: 'x', value: obstacle.minX - radius - 0.001 },
          { distance: obstacle.maxX - position.x, axis: 'x', value: obstacle.maxX + radius + 0.001 },
          { distance: position.z - obstacle.minZ, axis: 'z', value: obstacle.minZ - radius - 0.001 },
          { distance: obstacle.maxZ - position.z, axis: 'z', value: obstacle.maxZ + radius + 0.001 },
        ].sort((a, b) => a.distance - b.distance)[0];
        if (distances.axis === 'x') position.x = distances.value;
        else position.z = distances.value;
      }
    }

    position.x = THREE.MathUtils.clamp(position.x, -ARENA_LIMIT, ARENA_LIMIT);
    position.z = THREE.MathUtils.clamp(position.z, -ARENA_LIMIT, ARENA_LIMIT);
  }

  private isPathSegmentClear(start: THREE.Vector3, end: THREE.Vector3, obstacles: CollisionRect[]) {
    for (const obstacle of obstacles) {
      const xInterval = this.segmentInterval(
        start.x,
        end.x - start.x,
        obstacle.minX,
        obstacle.maxX
      );
      const zInterval = this.segmentInterval(
        start.z,
        end.z - start.z,
        obstacle.minZ,
        obstacle.maxZ
      );
      if (!xInterval || !zInterval) continue;
      const enter = Math.max(xInterval[0], zInterval[0], 0);
      const exit = Math.min(xInterval[1], zInterval[1], 1);
      if (exit - enter > 1e-5 && enter < 1 - 1e-5 && exit > 1e-5) return false;
    }
    return true;
  }

  private segmentInterval(origin: number, direction: number, minimum: number, maximum: number) {
    if (Math.abs(direction) < 1e-8) {
      if (origin <= minimum || origin >= maximum) return null;
      return [-Infinity, Infinity];
    }
    const first = (minimum - origin) / direction;
    const second = (maximum - origin) / direction;
    return [Math.min(first, second), Math.max(first, second)];
  }

  private createHealthBar(color: number): HealthBar {
    const group = new THREE.Group();

    const bgGeo = new THREE.PlaneGeometry(1.8, 0.28);
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.8, depthTest: false });
    const bgMesh = new THREE.Mesh(bgGeo, bgMat);
    bgMesh.renderOrder = 999;
    group.add(bgMesh);

    const fillGeo = new THREE.PlaneGeometry(1.7, 0.18);
    fillGeo.translate(0, 0, 0.001);
    const fillMaterial = new THREE.MeshBasicMaterial({ color, depthTest: false });
    const fillMesh = new THREE.Mesh(fillGeo, fillMaterial);
    fillMesh.renderOrder = 1000;
    group.add(fillMesh);

    // Set pivot to left edge so it shrinks from the right
    fillMesh.geometry.translate(0.85, 0, 0);
    fillMesh.position.x = -0.85;

    return { group, bgMesh, fillMesh, fillMaterial };
  }

  private updateHealthBar(bar: HealthBar, ratio: number, color: number) {
    const clamped = Math.max(0, Math.min(1, ratio));
    bar.fillMesh.scale.x = clamped;
    if (clamped <= 0) {
      bar.fillMesh.visible = false;
    } else {
      bar.fillMesh.visible = true;
    }
    bar.fillMaterial.color.setHex(color);
  }

  private setupEnemy() {
    const capsuleGeo = new THREE.CapsuleGeometry(0.6, 1.2, 8, 24);
    const capsuleMat = new THREE.MeshStandardMaterial({
      color: ORANGE_COLOR,
      roughness: 0.35,
      metalness: 0.15,
    });
    const mesh = new THREE.Mesh(capsuleGeo, capsuleMat);
    mesh.castShadow = true;
    mesh.position.copy(this.enemySpawnPosition);
    this.scene.add(mesh);

    // Direction cone
    const coneGeo = new THREE.ConeGeometry(0.25, 0.5, 12);
    const coneMat = new THREE.MeshStandardMaterial({ color: 0xffca85 });
    const cone = new THREE.Mesh(coneGeo, coneMat);
    cone.position.set(0, 0.2, -0.9);
    cone.rotation.x = -Math.PI / 2;
    mesh.add(cone);

    const healthBar = this.createHealthBar(ORANGE_COLOR);
    mesh.add(healthBar.group);
    healthBar.group.position.set(0, 2.0, 0);

    this.enemy = {
      mesh,
      cone,
      velocity: new THREE.Vector3(),
      rotation: 0,
      health: this.enemyStats.maxHealth,
      maxHealth: this.enemyStats.maxHealth,
      healthBar,
      targetZoneId: null,
      attackCooldown: 0,
    };
  }

  private setupZones() {
    const zoneDefs = [
      { id: 0, label: 'Center Vault', x: 0, z: 0 },
      { id: 1, label: 'East Reliquary', x: 35, z: 0 },
      { id: 2, label: 'West Reliquary', x: -35, z: 0 },
      { id: 3, label: 'North Shrine', x: 0, z: -35 },
      { id: 4, label: 'South Shrine', x: 0, z: 35 },
    ];

    for (const def of zoneDefs) {
      const radius = 4;
      const position = new THREE.Vector3(def.x, 0, def.z);

      const ringGeo = new THREE.RingGeometry(radius - 0.4, radius, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: NEUTRAL_COLOR,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMaterial);
      ringMesh.rotation.x = -Math.PI / 2;
      ringMesh.position.copy(position);
      ringMesh.position.y = 0.02;
      this.scene.add(ringMesh);

      const glowGeo = new THREE.CircleGeometry(radius - 0.5, 64);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: NEUTRAL_COLOR,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide,
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMaterial);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.copy(position);
      glowMesh.position.y = 0.015;
      this.scene.add(glowMesh);

      const light = new THREE.PointLight(NEUTRAL_COLOR, 1.2, 20, 2);
      light.position.copy(position);
      light.position.y = 4;
      this.scene.add(light);

      const flag = new THREE.Group();
      flag.position.copy(position);
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.085, 2.5, 8),
        new THREE.MeshStandardMaterial({ color: 0xd5d8d7, metalness: 0.35, roughness: 0.55 })
      );
      pole.position.y = 1.25;
      flag.add(pole);
      const flagMaterial = new THREE.MeshStandardMaterial({
        color: NEUTRAL_COLOR,
        roughness: 0.75,
        side: THREE.DoubleSide,
      });
      const flagCloth = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.7), flagMaterial);
      flagCloth.position.set(0.52, 2.05, 0);
      flag.add(flagCloth);
      this.scene.add(flag);

      this.zones.push({
        id: def.id,
        label: def.label,
        position,
        radius,
        progress: 0,
        state: 'neutral',
        owner: 'neutral',
        ringMesh,
        ringMaterial,
        glowMesh,
        glowMaterial,
        flagMaterial,
        light,
      });
    }
  }

  private onKeyDown = (e: KeyboardEvent) => {
    this.keys[e.code] = true;
    if (e.code.startsWith('Arrow')) e.preventDefault();
    if (e.code === 'Space') {
      e.preventDefault();
      if (!this.spacePressed) {
        this.spacePressed = true;
        this.tryAttack();
      }
    }
    if (e.code === 'KeyE' && !e.repeat) {
      this.trySkill();
    }
    if (e.code === 'KeyQ' && !e.repeat) {
      this.tryPlayerOneDash();
    }
    if ((e.code === 'Numpad0' || e.code === 'KeyM') && !this.playerTwoAttackPressed) {
      this.playerTwoAttackPressed = true;
      this.tryPlayerTwoAttack();
    }
    if (e.code === 'KeyK' && !e.repeat) {
      this.tryPlayerTwoSkill();
    }
    if (e.code === 'KeyN' && !e.repeat) {
      this.tryPlayerTwoDash();
    }
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys[e.code] = false;
    if (e.code === 'Space') {
      this.spacePressed = false;
    }
    if (e.code === 'Numpad0' || e.code === 'KeyM') {
      this.playerTwoAttackPressed = false;
    }
  };

  private onResize = () => {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = (w / 2) / h;
    this.camera.updateProjectionMatrix();
    this.cameraTwo.aspect = (w / 2) / h;
    this.cameraTwo.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  // Public method for button click
  performAttack() {
    this.tryAttack();
  }

  performSkill() {
    this.trySkill();
  }

  performPlayerTwoAttack() {
    this.tryPlayerTwoAttack();
  }

  performPlayerTwoSkill() {
    this.tryPlayerTwoSkill();
  }

  performPlayerOneDash() {
    this.tryPlayerOneDash();
  }

  performPlayerTwoDash() {
    this.tryPlayerTwoDash();
  }

  private tryPlayerOneDash() {
    if (this.matchEnded || this.playerDashCooldown > 0 || this.playerDead) return;
    this.playerDashCooldown = DASH_COOLDOWN;
    this.playerDashTimer = DASH_DURATION;
    this.playerDashDirection.copy(this.getMovementDirection('playerOne'));
  }

  private tryPlayerTwoDash() {
    if (this.matchEnded || this.enemyDashCooldown > 0 || this.enemyDead) return;
    this.enemyDashCooldown = DASH_COOLDOWN;
    this.enemyDashTimer = DASH_DURATION;
    this.enemyDashDirection.copy(this.getMovementDirection('playerTwo'));
  }

  private getMovementDirection(player: 'playerOne' | 'playerTwo') {
    const isPlayerOne = player === 'playerOne';
    const forwardKey = isPlayerOne ? 'KeyW' : 'ArrowUp';
    const backwardKey = isPlayerOne ? 'KeyS' : 'ArrowDown';
    const leftKey = isPlayerOne ? 'KeyA' : 'ArrowLeft';
    const rightKey = isPlayerOne ? 'KeyD' : 'ArrowRight';
    let forward = Number(Boolean(this.keys[forwardKey])) - Number(Boolean(this.keys[backwardKey]));
    let strafe = Number(Boolean(this.keys[rightKey])) - Number(Boolean(this.keys[leftKey]));

    const direction = new THREE.Vector3()
      .addScaledVector(new THREE.Vector3(-Math.sin(this.cameraAngle), 0, -Math.cos(this.cameraAngle)), forward)
      .addScaledVector(new THREE.Vector3(Math.cos(this.cameraAngle), 0, -Math.sin(this.cameraAngle)), strafe);
    if (direction.lengthSq() === 0) {
      const rotation = isPlayerOne ? this.player.rotation.y : this.enemy.mesh.rotation.y;
      direction.set(-Math.sin(rotation), 0, -Math.cos(rotation));
    }
    return direction.normalize();
  }

  private tryAttack() {
    if (this.matchEnded || this.playerAttackCooldown > 0 || this.enemyDead || this.playerDead) return;
    this.playerAttackCooldown = ATTACK_COOLDOWN;
    this.callbacks.onAttack?.();
    this.spawnBullet(this.player, 'blue', this.playerBulletCount);
  }

  private trySkill() {
    if (this.matchEnded || this.playerSkillCooldown > 0 || this.enemyDead || this.playerDead) return;
    this.playerSkillCooldown = SKILL_COOLDOWN;
    this.callbacks.onAttack?.();
    this.spawnShockwave(this.player, BLUE_COLOR);

    const dx = this.enemy.mesh.position.x - this.player.position.x;
    const dz = this.enemy.mesh.position.z - this.player.position.z;
    if (
      Math.hypot(dx, dz) <= SKILL_RANGE &&
      this.isPathSegmentClear(this.player.position, this.enemy.mesh.position, this.routeObstacles)
    ) {
      this.damageEnemy(SKILL_DAMAGE, 4);
    }
  }

  private tryPlayerTwoAttack() {
    if (this.matchEnded || this.enemy.attackCooldown > 0 || this.enemyDead || this.playerDead) return;
    this.enemy.attackCooldown = ATTACK_COOLDOWN;
    this.spawnBullet(this.enemy.mesh, 'red', this.enemyBulletCount);
    this.callbacks.onAttack?.();
  }

  private tryPlayerTwoSkill() {
    if (this.matchEnded || this.enemySkillCooldown > 0 || this.enemyDead || this.playerDead) return;
    this.enemySkillCooldown = SKILL_COOLDOWN;
    this.spawnShockwave(this.enemy.mesh, ORANGE_COLOR);
    const dx = this.player.position.x - this.enemy.mesh.position.x;
    const dz = this.player.position.z - this.enemy.mesh.position.z;
    if (
      Math.hypot(dx, dz) <= SKILL_RANGE &&
      this.isPathSegmentClear(this.enemy.mesh.position, this.player.position, this.routeObstacles)
    ) {
      this.damagePlayer(SKILL_DAMAGE, 4);
    }
    this.callbacks.onAttack?.();
  }

  private damageEnemy(damage: number, knockback: number) {
    if (this.enemyDead) return;
    const dealtDamage = Math.round(damage * this.playerStats.damageMultiplier);
    this.enemy.health = Math.max(0, this.enemy.health - dealtDamage);
    (this.enemy.mesh.material as THREE.MeshStandardMaterial).color.setHex(0xff1616);
    this.enemyFlashTimer = 0.16;
    this.spawnDamageText(this.enemy.mesh, dealtDamage);
    const knockDir = new THREE.Vector3(
      this.enemy.mesh.position.x - this.player.position.x,
      0,
      this.enemy.mesh.position.z - this.player.position.z
    ).normalize().multiplyScalar(knockback);
    this.enemy.mesh.position.add(knockDir);
    this.constrainPosition(this.enemy.mesh.position, CAPSULE_RADIUS);

    if (this.enemy.health <= 0) {
      this.enemyDead = true;
      this.enemyRespawnTimer = 3;
      this.enemyBulletCount = 1;
      this.enemy.mesh.visible = false;
    }

    this.emitHealth();
  }

  private damagePlayer(damage: number, knockback: number) {
    if (this.playerDead) return;
    const dealtDamage = Math.round(damage * this.enemyStats.damageMultiplier);
    this.playerHealth = Math.max(0, this.playerHealth - dealtDamage);
    (this.player.material as THREE.MeshStandardMaterial).color.setHex(0xff1616);
    this.playerFlashTimer = 0.16;
    this.spawnDamageText(this.player, dealtDamage);
    const knockDir = new THREE.Vector3(
      this.player.position.x - this.enemy.mesh.position.x,
      0,
      this.player.position.z - this.enemy.mesh.position.z
    ).normalize().multiplyScalar(knockback);
    this.player.position.add(knockDir);
    this.constrainPosition(this.player.position, CAPSULE_RADIUS);

    if (this.playerHealth <= 0) {
      this.playerDead = true;
      this.playerRespawnTimer = 3;
      this.playerBulletCount = 1;
      this.player.visible = false;
    }
    this.emitHealth();
  }

  private spawnBullet(attacker: THREE.Mesh, owner: 'blue' | 'red', bulletCount: number) {
    const spread = Math.min(0.5, Math.max(0, bulletCount - 1) * 0.1);
    for (let bulletIndex = 0; bulletIndex < bulletCount; bulletIndex += 1) {
      const offset = bulletCount === 1 ? 0 : -spread / 2 + (spread * bulletIndex) / (bulletCount - 1);
      this.spawnSingleBullet(attacker, owner, offset);
    }
  }

  private spawnSingleBullet(attacker: THREE.Mesh, owner: 'blue' | 'red', angleOffset: number) {
    const direction = new THREE.Vector3(-Math.sin(attacker.rotation.y), 0, -Math.cos(attacker.rotation.y))
      .applyAxisAngle(new THREE.Vector3(0, 1, 0), angleOffset);
    const geometry = new THREE.SphereGeometry(0.19, 12, 10);
    const material = new THREE.MeshBasicMaterial({
      color: owner === 'blue' ? 0x8acaff : 0xffc17a,
      toneMapped: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(attacker.position).addScaledVector(direction, 0.85);
    mesh.position.y += 0.2;
    mesh.renderOrder = 4;
    this.scene.add(mesh);
    this.projectiles.push({
      mesh,
      geometry,
      material,
      velocity: direction.multiplyScalar(BULLET_SPEED),
      owner,
      remainingRange: BULLET_RANGE,
    });
  }

  private projectileHitsTarget(start: THREE.Vector3, end: THREE.Vector3, target: THREE.Vector3) {
    const segmentX = end.x - start.x;
    const segmentZ = end.z - start.z;
    const lengthSquared = segmentX * segmentX + segmentZ * segmentZ;
    const projection = lengthSquared > 0
      ? THREE.MathUtils.clamp(
        ((target.x - start.x) * segmentX + (target.z - start.z) * segmentZ) / lengthSquared,
        0,
        1
      )
      : 0;
    const closestX = start.x + segmentX * projection;
    const closestZ = start.z + segmentZ * projection;
    return Math.hypot(target.x - closestX, target.z - closestZ) <= 0.95;
  }

  private removeProjectile(index: number) {
    const [projectile] = this.projectiles.splice(index, 1);
    this.scene.remove(projectile.mesh);
    projectile.geometry.dispose();
    projectile.material.dispose();
  }

  private updateProjectiles(dt: number) {
    if (this.matchEnded) {
      while (this.projectiles.length > 0) this.removeProjectile(this.projectiles.length - 1);
      return;
    }

    for (let index = this.projectiles.length - 1; index >= 0; index -= 1) {
      const projectile = this.projectiles[index];
      const targetDead = projectile.owner === 'blue' ? this.enemyDead : this.playerDead;
      if (targetDead) {
        this.removeProjectile(index);
        continue;
      }

      const stepDistance = Math.min(BULLET_SPEED * dt, projectile.remainingRange);
      const start = projectile.mesh.position.clone();
      const end = start.clone().addScaledVector(projectile.velocity.clone().normalize(), stepDistance);
      if (!this.isPathSegmentClear(start, end, this.obstacles)) {
        this.removeProjectile(index);
        continue;
      }

      const target = projectile.owner === 'blue' ? this.enemy.mesh : this.player;
      if (this.projectileHitsTarget(start, end, target.position)) {
        if (projectile.owner === 'blue') this.damageEnemy(ATTACK_DAMAGE, 1.1);
        else this.damagePlayer(ATTACK_DAMAGE, 1.1);
        this.removeProjectile(index);
        continue;
      }

      projectile.mesh.position.copy(end);
      projectile.remainingRange -= stepDistance;
      if (projectile.remainingRange <= 0) this.removeProjectile(index);
    }
  }

  private spawnPowerOrb() {
    for (let attempt = 0; attempt < 40; attempt += 1) {
      const position = new THREE.Vector3(
        THREE.MathUtils.randFloat(-86, 86),
        0,
        THREE.MathUtils.randFloat(-86, 86)
      );
      const blocked = this.obstacles.some(
        (obstacle) => position.x > obstacle.minX - 1 && position.x < obstacle.maxX + 1 &&
          position.z > obstacle.minZ - 1 && position.z < obstacle.maxZ + 1
      );
      const nearZone = this.zones.some((zone) => position.distanceTo(zone.position) < zone.radius + 3);
      const nearPlayerOne = position.distanceTo(this.player.position) < 8;
      const nearPlayerTwo = position.distanceTo(this.enemy.mesh.position) < 8;
      if (blocked || nearZone || nearPlayerOne || nearPlayerTwo) continue;

      const group = new THREE.Group();
      group.position.set(position.x, 0.9, position.z);
      const orbMaterial = new THREE.MeshStandardMaterial({
        color: 0xeaff76,
        emissive: 0x8cae18,
        emissiveIntensity: 1.8,
        roughness: 0.25,
        metalness: 0.15,
      });
      const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), orbMaterial);
      orb.castShadow = true;
      group.add(orb);

      const haloMaterial = new THREE.MeshBasicMaterial({
        color: 0xf2ff9a,
        transparent: true,
        opacity: 0.72,
        side: THREE.DoubleSide,
      });
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.055, 8, 32), haloMaterial);
      halo.rotation.x = Math.PI / 2;
      halo.position.y = -0.45;
      group.add(halo);

      const light = new THREE.PointLight(0xd9ff59, 1.3, 7, 2);
      light.position.y = 0.15;
      group.add(light);
      this.scene.add(group);
      this.powerOrbs.push({ group, phase: Math.random() * Math.PI * 2 });
      return true;
    }
    return false;
  }

  private removePowerOrb(index: number) {
    const [powerOrb] = this.powerOrbs.splice(index, 1);
    this.scene.remove(powerOrb.group);
    powerOrb.group.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) material.dispose();
    });
  }

  private updatePowerOrbs(dt: number) {
    if (this.matchEnded) {
      while (this.powerOrbs.length > 0) this.removePowerOrb(this.powerOrbs.length - 1);
      return;
    }

    this.powerOrbSpawnTimer -= dt;
    if (this.powerOrbSpawnTimer <= 0 && this.powerOrbs.length === 0) {
      this.powerOrbSpawnTimer = this.spawnPowerOrb() ? POWER_ORB_INTERVAL : 2;
    }

    for (let index = this.powerOrbs.length - 1; index >= 0; index -= 1) {
      const powerOrb = this.powerOrbs[index];
      powerOrb.phase += dt;
      powerOrb.group.rotation.y += dt * 1.4;
      powerOrb.group.position.y = 0.9 + Math.sin(powerOrb.phase * 2) * 0.16;

      if (!this.playerDead && Math.hypot(
        powerOrb.group.position.x - this.player.position.x,
        powerOrb.group.position.z - this.player.position.z
      ) <= POWER_ORB_PICKUP_RADIUS) {
        this.playerBulletCount += 1;
        this.removePowerOrb(index);
        continue;
      }

      if (!this.enemyDead && Math.hypot(
        powerOrb.group.position.x - this.enemy.mesh.position.x,
        powerOrb.group.position.z - this.enemy.mesh.position.z
      ) <= POWER_ORB_PICKUP_RADIUS) {
        this.enemyBulletCount += 1;
        this.removePowerOrb(index);
      }
    }
  }

  private spawnShockwave(attacker: THREE.Mesh, color: number) {
    const geometry = new THREE.RingGeometry(0.92, 1, 64);
    this.spawnCombatEffect(attacker, geometry, color, 0.55, 0.12, SKILL_RANGE, 0.72);
  }

  private spawnCombatEffect(
    attacker: THREE.Mesh,
    geometry: THREE.BufferGeometry,
    color: number,
    duration: number,
    startScale: number,
    endScale: number,
    opacity: number
  ) {
    const group = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.renderOrder = 3;
    group.add(mesh);
    group.position.set(attacker.position.x, 0.04, attacker.position.z);
    group.rotation.y = attacker.rotation.y;
    group.scale.setScalar(startScale);
    this.scene.add(group);
    this.combatEffects.push({ group, geometry, material, elapsed: 0, duration, startScale, endScale, opacity });
  }

  private spawnDamageText(target: THREE.Mesh, damage: number) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (!context) return;

    const label = `-${Math.round(damage)}`;
    context.font = 'bold 68px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.lineJoin = 'round';
    context.lineWidth = 10;
    context.strokeStyle = '#3b1010';
    context.strokeText(label, 128, 66);
    context.fillStyle = '#ff3026';
    context.fillText(label, 128, 66);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(target.position.x, target.position.y + 2.8, target.position.z);
    sprite.scale.set(2.5, 1.25, 1);
    this.scene.add(sprite);
    this.floatingDamageTexts.push({
      sprite,
      material,
      elapsed: 0,
      duration: 0.9,
      startY: sprite.position.y,
    });
  }

  private updateCombatFeedback(dt: number) {
    if (this.playerFlashTimer > 0) {
      this.playerFlashTimer = Math.max(0, this.playerFlashTimer - dt);
      if (this.playerFlashTimer === 0) {
        (this.player.material as THREE.MeshStandardMaterial).color.setHex(BLUE_COLOR);
      }
    }
    if (this.enemyFlashTimer > 0) {
      this.enemyFlashTimer = Math.max(0, this.enemyFlashTimer - dt);
      if (this.enemyFlashTimer === 0) {
        (this.enemy.mesh.material as THREE.MeshStandardMaterial).color.setHex(ORANGE_COLOR);
      }
    }

    for (let index = this.combatEffects.length - 1; index >= 0; index -= 1) {
      const effect = this.combatEffects[index];
      effect.elapsed += dt;
      const progress = Math.min(1, effect.elapsed / effect.duration);
      const scale = THREE.MathUtils.lerp(effect.startScale, effect.endScale, progress);
      effect.group.scale.setScalar(scale);
      effect.material.opacity = effect.opacity * (1 - progress);
      if (progress >= 1) {
        this.scene.remove(effect.group);
        effect.geometry.dispose();
        effect.material.dispose();
        this.combatEffects.splice(index, 1);
      }
    }

    for (let index = this.floatingDamageTexts.length - 1; index >= 0; index -= 1) {
      const text = this.floatingDamageTexts[index];
      text.elapsed += dt;
      const progress = Math.min(1, text.elapsed / text.duration);
      text.sprite.position.y = text.startY + progress * 1.8;
      text.material.opacity = 1 - progress;
      if (progress >= 1) {
        this.scene.remove(text.sprite);
        text.material.map?.dispose();
        text.material.dispose();
        this.floatingDamageTexts.splice(index, 1);
      }
    }
  }

  private disposeCombatFeedback() {
    while (this.projectiles.length > 0) this.removeProjectile(this.projectiles.length - 1);
    while (this.powerOrbs.length > 0) this.removePowerOrb(this.powerOrbs.length - 1);
    for (const effect of this.combatEffects) {
      this.scene.remove(effect.group);
      effect.geometry.dispose();
      effect.material.dispose();
    }
    for (const text of this.floatingDamageTexts) {
      this.scene.remove(text.sprite);
      text.material.map?.dispose();
      text.material.dispose();
    }
    this.combatEffects = [];
    this.floatingDamageTexts = [];
  }

  private updatePlayer(dt: number) {
    if (this.playerAttackCooldown > 0) this.playerAttackCooldown -= dt;
    if (this.playerSkillCooldown > 0) this.playerSkillCooldown = Math.max(0, this.playerSkillCooldown - dt);
    if (this.playerDashCooldown > 0) this.playerDashCooldown = Math.max(0, this.playerDashCooldown - dt);

    if (this.playerDead) {
      this.playerRespawnTimer -= dt;
      if (this.playerRespawnTimer <= 0) {
        this.playerHealth = this.playerMaxHealth;
        this.player.position.copy(this.playerSpawnPosition);
        this.playerVelocity.set(0, 0, 0);
        this.player.rotation.y = 0;
        this.player.visible = true;
        this.playerDead = false;
        this.emitHealth();
      }
      return;
    }

    const moveSpeed = 12 * this.playerStats.speedMultiplier;
    let forward = 0;
    let strafe = 0;

    if (this.keys['KeyW']) forward += 1;
    if (this.keys['KeyS']) forward -= 1;
    if (this.keys['KeyA']) strafe -= 1;
    if (this.keys['KeyD']) strafe += 1;

    if (this.playerDashTimer > 0) {
      this.playerDashTimer = Math.max(0, this.playerDashTimer - dt);
      this.player.rotation.y = Math.atan2(-this.playerDashDirection.x, -this.playerDashDirection.z);
      this.playerRotation = this.player.rotation.y;
      this.playerVelocity.copy(this.playerDashDirection).multiplyScalar(moveSpeed * DASH_SPEED_MULTIPLIER);
      this.moveWithCollisions(this.player.position, this.playerVelocity, dt, CAPSULE_RADIUS);
      return;
    }

    const camForward = new THREE.Vector3(-Math.sin(this.cameraAngle), 0, -Math.cos(this.cameraAngle));
    const camRight = new THREE.Vector3(Math.cos(this.cameraAngle), 0, -Math.sin(this.cameraAngle));

    const moveDir = new THREE.Vector3()
      .addScaledVector(camForward, forward)
      .addScaledVector(camRight, strafe);

    const speed = moveDir.length();
    if (speed > 0) {
      moveDir.normalize();
      this.playerVelocity.lerp(moveDir.clone().multiplyScalar(moveSpeed), Math.min(1, dt * 10));
      this.playerRotation = Math.atan2(-moveDir.x, -moveDir.z);
    } else {
      this.playerVelocity.lerp(new THREE.Vector3(0, 0, 0), Math.min(1, dt * 10));
    }

    let diff = this.playerRotation - this.player.rotation.y;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.player.rotation.y += diff * Math.min(1, dt * 10);

    this.moveWithCollisions(this.player.position, this.playerVelocity, dt, CAPSULE_RADIUS);
  }

  private updatePlayerTwo(dt: number) {
    if (this.enemy.attackCooldown > 0) this.enemy.attackCooldown = Math.max(0, this.enemy.attackCooldown - dt);
    if (this.enemySkillCooldown > 0) this.enemySkillCooldown = Math.max(0, this.enemySkillCooldown - dt);
    if (this.enemyDashCooldown > 0) this.enemyDashCooldown = Math.max(0, this.enemyDashCooldown - dt);

    if (this.enemyDead) {
      this.enemyRespawnTimer -= dt;
      if (this.enemyRespawnTimer <= 0) {
        this.enemy.health = this.enemy.maxHealth;
        this.enemy.mesh.position.copy(this.enemySpawnPosition);
        this.enemy.velocity.set(0, 0, 0);
        this.enemy.rotation = 0;
        this.enemy.mesh.rotation.y = 0;
        this.enemy.attackCooldown = 0;
        this.enemy.mesh.visible = true;
        this.enemyDead = false;
        this.emitHealth();
      }
      return;
    }

    let forward = 0;
    let strafe = 0;
    if (this.keys['ArrowUp']) forward += 1;
    if (this.keys['ArrowDown']) forward -= 1;
    if (this.keys['ArrowLeft']) strafe -= 1;
    if (this.keys['ArrowRight']) strafe += 1;

    if (this.enemyDashTimer > 0) {
      this.enemyDashTimer = Math.max(0, this.enemyDashTimer - dt);
      this.enemy.rotation = Math.atan2(-this.enemyDashDirection.x, -this.enemyDashDirection.z);
      this.enemy.mesh.rotation.y = this.enemy.rotation;
      this.enemy.velocity.copy(this.enemyDashDirection).multiplyScalar(12 * this.enemyStats.speedMultiplier * DASH_SPEED_MULTIPLIER);
      this.moveWithCollisions(this.enemy.mesh.position, this.enemy.velocity, dt, CAPSULE_RADIUS);
      return;
    }

    const camForward = new THREE.Vector3(-Math.sin(this.cameraAngle), 0, -Math.cos(this.cameraAngle));
    const camRight = new THREE.Vector3(Math.cos(this.cameraAngle), 0, -Math.sin(this.cameraAngle));
    const moveDir = new THREE.Vector3()
      .addScaledVector(camForward, forward)
      .addScaledVector(camRight, strafe);

    if (moveDir.lengthSq() > 0) {
      moveDir.normalize();
      this.enemy.velocity.lerp(moveDir.clone().multiplyScalar(12 * this.enemyStats.speedMultiplier), Math.min(1, dt * 10));
      this.enemy.rotation = Math.atan2(-moveDir.x, -moveDir.z);
    } else {
      this.enemy.velocity.lerp(new THREE.Vector3(), Math.min(1, dt * 10));
    }

    // Smooth rotation
    let diff = this.enemy.rotation - this.enemy.mesh.rotation.y;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.enemy.mesh.rotation.y += diff * Math.min(1, dt * 10);

    this.moveWithCollisions(this.enemy.mesh.position, this.enemy.velocity, dt, CAPSULE_RADIUS);
  }

  private updateCamera(
    dt: number,
    camera: THREE.PerspectiveCamera,
    subject: THREE.Vector3,
    cameraTarget: THREE.Vector3
  ) {
    const distance = 12;
    const height = 8;
    const behindOffset = new THREE.Vector3(
      Math.sin(this.cameraAngle) * distance,
      height,
      Math.cos(this.cameraAngle) * distance
    );

    const desiredPos = subject.clone().add(behindOffset);
    camera.position.lerp(desiredPos, Math.min(1, dt * 4));

    cameraTarget.lerp(subject.clone().add(new THREE.Vector3(0, 1.5, 0)), Math.min(1, dt * 6));
    camera.lookAt(cameraTarget);
  }

  private updateZones(dt: number) {
    let playerOneActiveZoneId: number | null = null;
    let playerTwoActiveZoneId: number | null = null;
    let statusChanged = false;

    for (const zone of this.zones) {
      const playerInside = this.isPlayerInZone(zone);
      const enemyInside = !this.enemyDead && this.isEnemyInZone(zone);

      // Enemy captures: if enemy is inside and zone is not red
      if (enemyInside && !playerInside && zone.owner !== 'red') {
        playerTwoActiveZoneId = zone.id;
        if (zone.owner === 'blue' && zone.state === 'captured') {
          zone.progress = 0;
        }
        zone.state = 'capturing';
        zone.progress = Math.min(
          1,
          zone.progress + (dt * this.enemyStats.captureMultiplier) / ZONE_CAPTURE_DURATION
        );
        statusChanged = true;

        if (zone.progress >= 1) {
          zone.state = 'captured';
          zone.owner = 'red';
          this.setZoneColor(zone, RED_COLOR);
          this.callbacks.onCapture?.(zone.label, 'red');
          statusChanged = true;
        }
      }

      // Player captures: if player is inside and zone is not blue
      if (playerInside && !enemyInside && zone.owner !== 'blue') {
        // If enemy is also inside, they contest — don't progress
        playerOneActiveZoneId = zone.id;
        if (zone.owner === 'red' && zone.state === 'captured') {
          zone.progress = 0;
        }
        zone.state = 'capturing';
        zone.progress = Math.min(
          1,
          zone.progress + (dt * this.playerStats.captureMultiplier) / ZONE_CAPTURE_DURATION
        );
        statusChanged = true;

        if (zone.progress >= 1) {
          zone.state = 'captured';
          zone.owner = 'blue';
          this.setZoneColor(zone, BLUE_COLOR);
          this.callbacks.onCapture?.(zone.label, 'blue');
          statusChanged = true;
        }
      }

      // Decay if nobody is inside and not fully captured
      if (!playerInside && !enemyInside && zone.progress > 0 && zone.state !== 'captured') {
        zone.progress = Math.max(0, zone.progress - dt / 2);
        if (zone.progress === 0) {
          zone.state = 'neutral';
        }
        statusChanged = true;
      }

    }

    this.playerOneActiveZoneId = playerOneActiveZoneId;
    this.playerTwoActiveZoneId = playerTwoActiveZoneId;

    // Animate glow pulsing
    for (const zone of this.zones) {
      const pulse = 0.5 + 0.5 * Math.sin(this.elapsed * 3 + zone.id * 1.5);
      const baseOpacity = zone.state === 'capturing' ? 0.15 + pulse * 0.15 : 0.08 + pulse * 0.08;
      const baseIntensity = zone.state === 'capturing' ? 1.5 + pulse * 1.0 : 0.8 + pulse * 0.6;
      zone.glowMaterial.opacity = baseOpacity;
      zone.light.intensity = baseIntensity;
    }

    if (statusChanged) this.emitZoneStatus();

    if (this.captureMessageTimer > 0) {
      this.captureMessageTimer -= dt;
    }
  }

  private isPlayerInZone(zone: CaptureZone): boolean {
    const dx = this.player.position.x - zone.position.x;
    const dz = this.player.position.z - zone.position.z;
    return Math.sqrt(dx * dx + dz * dz) < zone.radius;
  }

  private isEnemyInZone(zone: CaptureZone): boolean {
    const dx = this.enemy.mesh.position.x - zone.position.x;
    const dz = this.enemy.mesh.position.z - zone.position.z;
    return Math.sqrt(dx * dx + dz * dz) < zone.radius;
  }

  private updateHealthBars() {
    if (!this.playerDead) {
      const playerRatio = this.playerHealth / this.playerMaxHealth;
      const playerColor = playerRatio > 0.5 ? 0x44ff66 : playerRatio > 0.25 ? 0xffd644 : 0xff4444;
      this.updateHealthBar(this.playerHealthBar, playerRatio, playerColor);
    }

    if (!this.enemyDead) {
      const enemyRatio = this.enemy.health / this.enemy.maxHealth;
      const enemyColor = enemyRatio > 0.5 ? 0xffb45e : 0xff7b24;
      this.updateHealthBar(this.enemy.healthBar, enemyRatio, enemyColor);
    }
  }

  private setZoneColor(zone: CaptureZone, color: number) {
    zone.ringMaterial.color.setHex(color);
    zone.glowMaterial.color.setHex(color);
    zone.flagMaterial.color.setHex(color);
    zone.light.color.setHex(color);
  }

  private emitZoneStatus() {
    if (!this.callbacks.onZoneStatusUpdate) return;
    this.callbacks.onZoneStatusUpdate(
      this.zones.map((z) => ({
        id: z.id,
        label: z.label,
        x: z.position.x,
        z: z.position.z,
        state: z.state,
        owner: z.owner,
        progress: z.progress,
      }))
    );
  }

  private emitHealth() {
    if (!this.callbacks.onHealthUpdate) return;
    const entities: EntityHealth[] = [];
    if (!this.playerDead) {
      entities.push({
        id: 'player',
        label: 'Player 1',
        maxHealth: this.playerMaxHealth,
        health: this.playerHealth,
        team: 'blue',
      });
    }
    if (!this.enemyDead) {
      entities.push({
        id: 'enemy',
        label: 'Player 2',
        maxHealth: this.enemyStats.maxHealth,
        health: this.enemy.health,
        team: 'red',
      });
    }
    this.callbacks.onHealthUpdate(entities);
  }

  getActiveZoneProgress(player: 'playerOne' | 'playerTwo'): number | null {
    const activeZoneId = player === 'playerOne' ? this.playerOneActiveZoneId : this.playerTwoActiveZoneId;
    if (activeZoneId === null) return null;
    const zone = this.zones.find((z) => z.id === activeZoneId);
    if (!zone) return null;
    return zone.progress;
  }

  getPlayerMapPositions(): PlayerMapPositions {
    return {
      playerOne: { x: this.player.position.x, z: this.player.position.z },
      playerTwo: { x: this.enemy.mesh.position.x, z: this.enemy.mesh.position.z },
    };
  }

  getPowerOrbPositions(): { x: number; z: number }[] {
    return this.powerOrbs.map((powerOrb) => ({
      x: powerOrb.group.position.x,
      z: powerOrb.group.position.z,
    }));
  }

  getSkillCooldown(): number {
    return this.playerSkillCooldown;
  }

  getPlayerTwoSkillCooldown(): number {
    return this.enemySkillCooldown;
  }

  getPlayerOneDashCooldown(): number {
    return this.playerDashCooldown;
  }

  getPlayerTwoDashCooldown(): number {
    return this.enemyDashCooldown;
  }

  getPlayerOneBulletCount(): number {
    return this.playerBulletCount;
  }

  getPlayerTwoBulletCount(): number {
    return this.enemyBulletCount;
  }

  getMatchTimeRemaining(): number {
    return this.matchTimeRemaining;
  }

  getSuddenDeathTeam(): 'blue' | 'red' | null {
    return this.suddenDeathTeam;
  }

  getSuddenDeathRemaining(): number {
    return this.suddenDeathRemaining;
  }

  getMatchWinner(): MatchWinner {
    return this.matchWinner;
  }

  getEnemyHealth(): number {
    return this.enemyDead ? 0 : this.enemy.health;
  }

  isEnemyDead(): boolean {
    return this.enemyDead;
  }

  private updateMatch(dt: number) {
    if (this.matchEnded) return;
    this.matchTimeRemaining = Math.max(0, this.matchTimeRemaining - dt);

    const blueFlags = this.zones.filter((zone) => zone.owner === 'blue').length;
    const redFlags = this.zones.filter((zone) => zone.owner === 'red').length;
    if (this.matchTimeRemaining <= 0) {
      this.matchWinner = blueFlags === redFlags ? 'draw' : blueFlags > redFlags ? 'blue' : 'red';
      this.matchEnded = true;
      return;
    }

    const allFlagsTeam: 'blue' | 'red' | null = this.zones.length > 0 && blueFlags === this.zones.length
      ? 'blue'
      : this.zones.length > 0 && redFlags === this.zones.length
        ? 'red'
        : null;

    if (allFlagsTeam === null) {
      this.suddenDeathTeam = null;
      this.suddenDeathRemaining = 0;
      return;
    }

    if (this.suddenDeathTeam !== allFlagsTeam) {
      this.suddenDeathTeam = allFlagsTeam;
      this.suddenDeathRemaining = ALL_FLAGS_HOLD_DURATION;
    }
    this.suddenDeathRemaining = Math.max(0, this.suddenDeathRemaining - dt);
    if (this.suddenDeathRemaining <= 0) {
      this.matchWinner = allFlagsTeam;
      this.matchEnded = true;
    }
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    const dt = Math.min(this.clock.getDelta(), 0.1);
    this.elapsed += dt;

    if (!this.matchEnded) {
      this.updatePlayer(dt);
      this.updatePlayerTwo(dt);
      this.updatePowerOrbs(dt);
      this.updateZones(dt);
      this.updateMatch(dt);
    } else {
      this.updatePowerOrbs(dt);
    }
    this.updateCamera(dt, this.camera, this.player.position, this.cameraTarget);
    this.updateCamera(dt, this.cameraTwo, this.enemy.mesh.position, this.cameraTwoTarget);
    this.updateProjectiles(dt);
    this.updateCombatFeedback(dt);
    this.updateHealthBars();

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    const leftWidth = Math.floor(width / 2);
    this.renderer.setScissorTest(true);
    this.renderer.setViewport(0, 0, leftWidth, height);
    this.renderer.setScissor(0, 0, leftWidth, height);
    this.playerHealthBar.group.lookAt(this.camera.position);
    this.enemy.healthBar.group.lookAt(this.camera.position);
    this.renderer.render(this.scene, this.camera);

    this.renderer.setViewport(leftWidth, 0, width - leftWidth, height);
    this.renderer.setScissor(leftWidth, 0, width - leftWidth, height);
    this.playerHealthBar.group.lookAt(this.cameraTwo.position);
    this.enemy.healthBar.group.lookAt(this.cameraTwo.position);
    this.renderer.render(this.scene, this.cameraTwo);
    this.renderer.setScissorTest(false);
  };

  dispose() {
    if (this.animationId !== null) cancelAnimationFrame(this.animationId);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('resize', this.onResize);
    this.disposeCombatFeedback();
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
