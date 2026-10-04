import { useEffect, useRef, useState, useCallback } from 'react';
import { Game, type ZoneStatus, type ZoneOwner, type EntityHealth, type PlayerClass, type MatchWinner, type PlayerMapPositions } from './game/Game';
import { Gem, MapPin, Trophy, Sword, Skull, Shield, Zap, RotateCcw, Clock } from 'lucide-react';

const formatMatchTime = (seconds: number) => {
  const remaining = Math.ceil(seconds);
  return `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`;
};

const minimapPosition = (x: number, z: number) => ({
  left: `${((x + 100) / 200) * 100}%`,
  top: `${((z + 100) / 200) * 100}%`,
});

const roleOptions: { playerClass: PlayerClass; title: string; description: string; accent: string }[] = [
  { playerClass: 'attacker', title: 'Attacker', description: '+50% attack damage', accent: 'border-red-400/30 bg-red-500/10 hover:bg-red-500/20 text-red-200' },
  { playerClass: 'defender', title: 'Defender', description: '200 health, 25% slower', accent: 'border-green-400/30 bg-green-500/10 hover:bg-green-500/20 text-green-200' },
  { playerClass: 'runner', title: 'Runner', description: '+40% speed, 2x capture', accent: 'border-amber-400/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200' },
];

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Game | null>(null);
  const rafRef = useRef<number | null>(null);

  const [zoneStatuses, setZoneStatuses] = useState<ZoneStatus[]>([]);
  const [playerOneProgress, setPlayerOneProgress] = useState<number | null>(null);
  const [playerTwoProgress, setPlayerTwoProgress] = useState<number | null>(null);
  const [captureMessage, setCaptureMessage] = useState<{ text: string; team: 'blue' | 'red' } | null>(null);
  const [messageKey, setMessageKey] = useState(0);
  const [healthEntities, setHealthEntities] = useState<EntityHealth[]>([]);
  const [attackFlash, setAttackFlash] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedClass, setSelectedClass] = useState<PlayerClass | null>(null);
  const [selectedPlayerTwoClass, setSelectedPlayerTwoClass] = useState<PlayerClass | null>(null);
  const [roleSelectionPlayer, setRoleSelectionPlayer] = useState<'playerOne' | 'playerTwo'>('playerOne');
  const [skillCooldown, setSkillCooldown] = useState(0);
  const [playerTwoSkillCooldown, setPlayerTwoSkillCooldown] = useState(0);
  const [playerOneDashCooldown, setPlayerOneDashCooldown] = useState(0);
  const [playerTwoDashCooldown, setPlayerTwoDashCooldown] = useState(0);
  const [playerOneBulletCount, setPlayerOneBulletCount] = useState(1);
  const [playerTwoBulletCount, setPlayerTwoBulletCount] = useState(1);
  const [teamScores, setTeamScores] = useState({ blue: 0, red: 0 });
  const [mapPositions, setMapPositions] = useState<PlayerMapPositions>({
    playerOne: { x: -55, z: 0 },
    playerTwo: { x: 55, z: 0 },
  });
  const [powerOrbPositions, setPowerOrbPositions] = useState<{ x: number; z: number }[]>([]);
  const [matchTimeRemaining, setMatchTimeRemaining] = useState(120);
  const [suddenDeathTeam, setSuddenDeathTeam] = useState<'blue' | 'red' | null>(null);
  const [suddenDeathRemaining, setSuddenDeathRemaining] = useState(0);
  const [matchWinner, setMatchWinner] = useState<MatchWinner>(null);

  const handleCapture = useCallback((label: string, team: 'blue' | 'red') => {
    setTeamScores((scores) => ({ ...scores, [team]: scores[team] + 1 }));
    const text = team === 'blue'
      ? `Player 1 captured ${label}!`
      : `Player 2 captured ${label}!`;
    setCaptureMessage({ text, team });
    setMessageKey((k) => k + 1);
  }, []);

  const handleAttack = useCallback(() => {
    setAttackFlash(true);
    setTimeout(() => setAttackFlash(false), 200);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !selectedClass || !selectedPlayerTwoClass) return;
    const game = new Game(containerRef.current, selectedClass, selectedPlayerTwoClass, {
      onZoneStatusUpdate: setZoneStatuses,
      onCapture: handleCapture,
      onHealthUpdate: setHealthEntities,
      onAttack: handleAttack,
    });
    gameRef.current = game;

    let mapPollFrame = 0;
    const poll = () => {
      mapPollFrame += 1;
      setPlayerOneProgress(game.getActiveZoneProgress('playerOne'));
      setPlayerTwoProgress(game.getActiveZoneProgress('playerTwo'));
      setSkillCooldown(Math.ceil(game.getSkillCooldown()));
      setPlayerTwoSkillCooldown(Math.ceil(game.getPlayerTwoSkillCooldown()));
      setPlayerOneDashCooldown(Math.ceil(game.getPlayerOneDashCooldown()));
      setPlayerTwoDashCooldown(Math.ceil(game.getPlayerTwoDashCooldown()));
      setPlayerOneBulletCount(game.getPlayerOneBulletCount());
      setPlayerTwoBulletCount(game.getPlayerTwoBulletCount());
      setMatchTimeRemaining(Math.ceil(game.getMatchTimeRemaining()));
      setSuddenDeathTeam(game.getSuddenDeathTeam());
      setSuddenDeathRemaining(Math.ceil(game.getSuddenDeathRemaining()));
      setMatchWinner(game.getMatchWinner());
      if (mapPollFrame % 6 === 0) {
        setMapPositions(game.getPlayerMapPositions());
        setPowerOrbPositions(game.getPowerOrbPositions());
      }
      rafRef.current = requestAnimationFrame(poll);
    };
    rafRef.current = requestAnimationFrame(poll);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      game.dispose();
      gameRef.current = null;
    };
  }, [handleCapture, handleAttack, selectedClass, selectedPlayerTwoClass]);

  useEffect(() => {
    if (captureMessage === null) return;
    const t = setTimeout(() => setCaptureMessage(null), 3500);
    return () => clearTimeout(t);
  }, [captureMessage, messageKey]);

  const blueCount = zoneStatuses.filter((z) => z.owner === 'blue').length;
  const redCount = zoneStatuses.filter((z) => z.owner === 'red').length;
  const totalCount = zoneStatuses.length;
  const allBlue = totalCount > 0 && blueCount === totalCount;

  const playerEntity = healthEntities.find((e) => e.id === 'player');
  const enemyEntity = healthEntities.find((e) => e.id === 'enemy');

  const handleAttackClick = () => {
    gameRef.current?.performAttack();
  };

  const handleSkillClick = () => {
    gameRef.current?.performSkill();
  };

  const handlePlayerTwoAttackClick = () => {
    gameRef.current?.performPlayerTwoAttack();
  };

  const handlePlayerTwoSkillClick = () => {
    gameRef.current?.performPlayerTwoSkill();
  };

  const handlePlayerOneDashClick = () => {
    gameRef.current?.performPlayerOneDash();
  };

  const handlePlayerTwoDashClick = () => {
    gameRef.current?.performPlayerTwoDash();
  };

  const handleReset = () => {
    setShowIntro(true);
    setSelectedClass(null);
    setSelectedPlayerTwoClass(null);
    setRoleSelectionPlayer('playerOne');
    setZoneStatuses([]);
    setPlayerOneProgress(null);
    setPlayerTwoProgress(null);
    setCaptureMessage(null);
    setHealthEntities([]);
    setAttackFlash(false);
    setSkillCooldown(0);
    setPlayerTwoSkillCooldown(0);
    setPlayerOneDashCooldown(0);
    setPlayerTwoDashCooldown(0);
    setPlayerOneBulletCount(1);
    setPlayerTwoBulletCount(1);
    setTeamScores({ blue: 0, red: 0 });
    setMapPositions({ playerOne: { x: -55, z: 0 }, playerTwo: { x: 55, z: 0 } });
    setPowerOrbPositions([]);
    setMatchTimeRemaining(120);
    setSuddenDeathTeam(null);
    setSuddenDeathRemaining(0);
    setMatchWinner(null);
  };

  const handleRoleSelect = (playerClass: PlayerClass) => {
    if (roleSelectionPlayer === 'playerOne') {
      setSelectedClass(playerClass);
      setRoleSelectionPlayer('playerTwo');
    } else {
      setSelectedPlayerTwoClass(playerClass);
    }
  };

  const ownerStyle = (owner: ZoneOwner) => {
    if (owner === 'blue') return 'bg-blue-500/20 border-blue-400/40 text-blue-200';
    if (owner === 'red') return 'bg-red-500/20 border-red-400/40 text-red-200';
    return 'bg-white/5 border-white/10 text-white/70';
  };

  const ownerIcon = (owner: ZoneOwner) => {
    if (owner === 'blue') return <Trophy className="w-4 h-4 text-blue-300" />;
    if (owner === 'red') return <Skull className="w-4 h-4 text-red-300" />;
    return <MapPin className="w-4 h-4 text-yellow-300/80" />;
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a1a24] select-none">
      <div ref={containerRef} className="w-full h-full" />

      {showIntro ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
          <section className="w-full max-w-3xl rounded-xl border border-white/15 bg-[#20202c]/95 p-6 shadow-2xl sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-300/25 bg-amber-400/10">
                <Trophy className="h-5 w-5 text-amber-300" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Before the match</p>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">How To Play</h1>
              </div>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-white/70">
              Stand inside a flag circle to capture it. If both players are inside, capture progress pauses.
              Own more flags when the 2-minute timer ends to win. Capture all five and hold them for 10 seconds
              to win early; losing even one flag cancels that countdown.
            </p>
            <p className="mt-4 flex items-start gap-2 rounded-lg border border-lime-300/20 bg-lime-300/5 p-3 text-xs leading-5 text-lime-100/80">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
              Collect the glowing orb that appears at the start and every 15 seconds to add one bullet to each shot.
              When you are defeated, your volley resets to one bullet.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-blue-400/20 bg-blue-500/10 p-4">
                <p className="mb-2 text-sm font-bold text-blue-200">Player 1 · Blue</p>
                <p className="text-xs leading-5 text-white/65">Move: WASD · Attack: Space · Skill: E · Dash: Q</p>
              </div>
              <div className="rounded-lg border border-orange-400/20 bg-orange-500/10 p-4">
                <p className="mb-2 text-sm font-bold text-orange-200">Player 2 · Orange</p>
                <p className="text-xs leading-5 text-white/65">Move: Arrow keys · Attack: M or Numpad 0 · Skill: K · Dash: N</p>
              </div>
            </div>
            <button
              onClick={() => setShowIntro(false)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-amber-300/30 bg-amber-400/15 px-5 py-3 text-sm font-bold text-amber-100 transition-colors hover:bg-amber-400/25"
            >
              Choose Roles
            </button>
          </section>
        </div>
      ) : !selectedClass || !selectedPlayerTwoClass ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
          <section className="w-full max-w-3xl rounded-xl border border-white/15 bg-[#20202c]/95 p-6 shadow-2xl sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              {roleSelectionPlayer === 'playerOne' ? 'Player 1 · Step 1 of 2' : 'Player 2 · Step 2 of 2'}
            </p>
            <h1 className="mb-3 text-3xl font-bold text-white">
              {roleSelectionPlayer === 'playerOne' ? 'Player 1, choose your role' : 'Player 2, choose your role'}
            </h1>
            {selectedClass && (
              <p className="mb-6 text-sm text-blue-200/70">Player 1 selected {selectedClass}.</p>
            )}
            {!selectedClass && <div className="mb-3" />}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {roleOptions.map((choice) => (
                <button
                  key={choice.playerClass}
                  onClick={() => handleRoleSelect(choice.playerClass)}
                  className={`flex min-h-28 flex-col items-start justify-center rounded-lg border p-5 text-left transition-colors ${choice.accent}`}
                >
                  <span className="text-lg font-bold">{choice.title}</span>
                  <span className="mt-1 text-sm opacity-75">{choice.description}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <>

      <div className="pointer-events-none absolute right-4 top-6 z-10 w-32 sm:w-40">
        <div className="mb-1 flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-widest text-white/65">
          <span>Arena map</span>
          <span className="text-white/40">N</span>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg border border-white/20 bg-[#5992b0] shadow-lg shadow-black/30">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)',
              backgroundSize: '25% 25%',
            }}
          />
          <div className="absolute inset-[5%] rounded-sm border border-white/40" />
          {zoneStatuses.map((zone) => (
            <div
              key={`map-zone-${zone.id}`}
              title={`${zone.label}: ${zone.owner}`}
              className={`absolute z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/80 shadow-sm sm:h-3 sm:w-3 ${
                zone.owner === 'blue'
                  ? 'bg-blue-400'
                  : zone.owner === 'red'
                    ? 'bg-orange-400'
                    : 'bg-amber-300'
              } ${zone.state === 'capturing' ? 'animate-pulse ring-2 ring-white/60' : ''}`}
              style={minimapPosition(zone.x, zone.z)}
            />
          ))}
          {powerOrbPositions.map((orb, index) => (
            <div
              key={`map-orb-${index}`}
              title="Fire-rate power-up"
              className="absolute z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-lime-300 shadow-[0_0_8px_3px_rgba(217,255,89,0.75)] animate-pulse sm:h-3 sm:w-3"
              style={minimapPosition(orb.x, orb.z)}
            />
          ))}
          <div
            title="Player 1"
            className="absolute z-20 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-blue-600 text-[8px] font-black text-white shadow sm:h-[18px] sm:w-[18px]"
            style={minimapPosition(mapPositions.playerOne.x, mapPositions.playerOne.z)}
          >
            1
          </div>
          <div
            title="Player 2"
            className="absolute z-20 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-orange-500 text-[8px] font-black text-white shadow sm:h-[18px] sm:w-[18px]"
            style={minimapPosition(mapPositions.playerTwo.x, mapPositions.playerTwo.z)}
          >
            2
          </div>
        </div>
        <div className="mt-1 flex justify-end gap-2 text-[9px] font-semibold text-white/70">
          <span><span className="text-blue-300">1</span> P1</span>
          <span><span className="text-orange-300">2</span> P2</span>
          <span className="text-amber-200">◆</span> Flag
          <span className="text-lime-300">●</span> Orb
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px bg-white/25" />

      {/* Attack flash overlay */}
      {attackFlash && (
        <div className="pointer-events-none absolute inset-0 bg-white/5" />
      )}

      {/* Top hint */}
      <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-wide font-light">
        <span className="font-semibold text-blue-300">P1</span> WASD / Space / E / Q
        <span className="mx-3 text-white/30">|</span>
        <span className="font-semibold text-orange-300">P2</span> Arrows / M or Num0 / K / N
      </div>

      {/* Score tracker — top right */}
      <div className="absolute right-6 top-48 flex max-h-[calc(100vh-14rem)] flex-col items-end gap-2.5 overflow-y-auto sm:top-52">
        {/* Score header */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg backdrop-blur-md bg-black/30 border border-white/10 mb-1">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-bold tabular-nums">{teamScores.blue}</span>
            <span className="text-blue-200/60 text-[10px]">P1</span>
          </div>
          <span className="text-white/30 text-xs">vs</span>
          <div className="flex items-center gap-1.5">
            <span className="text-orange-300 text-sm font-bold tabular-nums">{teamScores.red}</span>
            <span className="text-orange-200/60 text-[10px]">P2</span>
            <Skull className="w-4 h-4 text-orange-400" />
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-mono text-white/80 tabular-nums">
          <Clock className="h-3.5 w-3.5 text-amber-300" />
          <span>{formatMatchTime(matchTimeRemaining)}</span>
          <span className="text-white/40">remaining</span>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/65">
          Flags held <span className="ml-1 font-mono font-bold text-blue-300">{blueCount}</span>
          <span className="mx-1 text-white/30">:</span>
          <span className="font-mono font-bold text-orange-300">{redCount}</span>
        </div>
        {suddenDeathTeam && (
          <div className={`rounded-lg border px-3 py-2 text-xs font-bold tabular-nums ${
            suddenDeathTeam === 'blue'
              ? 'border-blue-300/30 bg-blue-500/20 text-blue-100'
              : 'border-orange-300/30 bg-orange-500/20 text-orange-100'
          }`}>
            Hold all flags: {formatMatchTime(suddenDeathRemaining)}
          </div>
        )}
        {zoneStatuses.map((zone) => {
          const isContested = zone.state === 'capturing';
          return (
            <div
              key={zone.id}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg backdrop-blur-md border transition-all duration-300 ${ownerStyle(zone.owner)} ${
                isContested ? 'ring-2 ring-yellow-400/30 animate-pulse' : ''
              }`}
            >
              {ownerIcon(zone.owner)}
              <span className="text-xs font-medium tracking-wide">
                {zone.label}
              </span>
            </div>
          );
        })}
        <button
          onClick={handleReset}
          className="mt-1 flex items-center gap-2 rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Game
        </button>
      </div>

      {/* Health bars — top left */}
      <div className="pointer-events-none absolute top-6 left-6 flex flex-col gap-3 w-56">
        {playerEntity && (
          <div className="px-4 py-3 rounded-lg backdrop-blur-md bg-blue-500/10 border border-blue-400/25">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-200 text-xs font-bold tracking-wide">PLAYER 1</span>
              <span className="text-white/50 text-xs font-mono ml-auto tabular-nums">
                {playerEntity.health}/{playerEntity.maxHealth}
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-black/50 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300"
                style={{ width: `${(playerEntity.health / playerEntity.maxHealth) * 100}%` }}
              />
            </div>
          </div>
        )}
        {enemyEntity && (
          <div className="px-4 py-3 rounded-lg backdrop-blur-md bg-orange-500/10 border border-orange-400/25">
            <div className="flex items-center gap-2 mb-2">
              <Skull className="w-4 h-4 text-orange-400" />
              <span className="text-orange-200 text-xs font-bold tracking-wide">PLAYER 2</span>
              <span className="text-white/50 text-xs font-mono ml-auto tabular-nums">
                {enemyEntity.health}/{enemyEntity.maxHealth}
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-black/50 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300"
                style={{ width: `${(enemyEntity.health / enemyEntity.maxHealth) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-44 grid grid-cols-2 gap-3 px-3 sm:bottom-24 sm:gap-6 sm:px-6">
        {playerOneProgress !== null ? (
          <div className="w-full max-w-sm justify-self-center">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 sm:text-xs">P1 capturing</span>
              <span className="font-mono text-[10px] tabular-nums text-white/80 sm:text-xs">{Math.round(playerOneProgress * 100)}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full border border-blue-200/20 bg-black/60 sm:h-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 transition-[width] duration-75 ease-linear shadow-[0_0_12px_rgba(70,160,255,0.55)]"
                style={{ width: `${playerOneProgress * 100}%` }}
              />
            </div>
          </div>
        ) : <div />}
        {playerTwoProgress !== null ? (
          <div className="w-full max-w-sm justify-self-center">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-200 sm:text-xs">P2 capturing</span>
              <span className="font-mono text-[10px] tabular-nums text-white/80 sm:text-xs">{Math.round(playerTwoProgress * 100)}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full border border-orange-200/20 bg-black/60 sm:h-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-300 transition-[width] duration-75 ease-linear shadow-[0_0_12px_rgba(255,150,60,0.55)]"
                style={{ width: `${playerTwoProgress * 100}%` }}
              />
            </div>
          </div>
        ) : <div />}
      </div>

      {/* Capture message — center */}
      {captureMessage && (
        <div
          key={messageKey}
          className={`pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-lg border ${
            captureMessage.team === 'blue'
              ? 'bg-blue-500/20 border-blue-400/40 shadow-[0_0_30px_rgba(42,127,255,0.3)]'
              : 'bg-red-500/20 border-red-400/40 shadow-[0_0_30px_rgba(255,58,58,0.3)]'
          }`}
          style={{ animation: 'capturePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          {captureMessage.team === 'blue' ? (
            <Gem className="w-6 h-6 text-blue-300" />
          ) : (
            <Skull className="w-6 h-6 text-red-300" />
          )}
          <span
            className={`text-lg font-bold tracking-wide ${
              captureMessage.team === 'blue' ? 'text-blue-100' : 'text-red-100'
            }`}
          >
            {captureMessage.text}
          </span>
        </div>
      )}

      {/* All blue captured banner */}
      {allBlue && (
        <div className="pointer-events-none absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500/15 backdrop-blur-md border border-amber-400/30">
          <Trophy className="w-5 h-5 text-amber-300" />
          <span className="text-amber-200 text-sm font-semibold tracking-wide">
            All treasures secured — {blueCount}/{totalCount}
          </span>
        </div>
      )}

      {matchWinner && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <section className="w-full max-w-md rounded-xl border border-white/15 bg-[#20202c]/95 p-8 text-center shadow-2xl">
            <Trophy className={`mx-auto mb-4 h-10 w-10 ${
              matchWinner === 'blue' ? 'text-blue-300' : matchWinner === 'red' ? 'text-orange-300' : 'text-amber-300'
            }`} />
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/45">Match complete</p>
            <h2 className="text-3xl font-bold text-white">
              {matchWinner === 'blue' ? 'Player 1 Wins' : matchWinner === 'red' ? 'Player 2 Wins' : 'Draw'}
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Final flags: <span className="font-mono text-blue-300">{blueCount}</span>
              <span className="mx-2 text-white/30">to</span>
              <span className="font-mono text-orange-300">{redCount}</span>
            </p>
            <button
              onClick={handleReset}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              <RotateCcw className="h-4 w-4" />
              Play Again
            </button>
          </section>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-4 grid grid-cols-2 gap-2 px-2 sm:gap-4 sm:px-4">
        <div className="flex flex-col items-stretch justify-center gap-2 sm:flex-row">
          <button
            onClick={handleAttackClick}
            className="flex items-center justify-center gap-2 rounded-xl border border-blue-300/30 bg-gradient-to-b from-blue-500 to-blue-800 px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all hover:from-blue-400 hover:to-blue-700 active:scale-95 sm:px-4 sm:text-sm"
          >
            <Sword className="h-4 w-4" />
            <span>Attack</span>
            <span className="font-mono text-[10px] text-blue-100/70 sm:text-xs">{playerOneBulletCount}x</span>
            <span className="font-mono text-[10px] text-blue-100/70 sm:text-xs">SPACE</span>
          </button>
          <button
            onClick={handleSkillClick}
            disabled={skillCooldown > 0}
            className={`flex items-center justify-center gap-2 rounded-xl border px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all sm:px-4 sm:text-sm ${
              skillCooldown > 0
                ? 'cursor-not-allowed border-blue-400/15 bg-slate-700/90 text-white/60'
                : 'border-blue-300/30 bg-gradient-to-b from-cyan-600 to-blue-800 hover:from-cyan-500 hover:to-blue-700 active:scale-95'
            }`}
          >
            <Zap className="h-4 w-4" />
            <span>Skill 1</span>
            <span className="font-mono text-[10px] text-blue-100/70 sm:text-xs">E</span>
            {skillCooldown > 0 && <span className="font-mono text-[10px] tabular-nums sm:text-xs">{skillCooldown}s</span>}
          </button>
          <button
            onClick={handlePlayerOneDashClick}
            disabled={playerOneDashCooldown > 0}
            className={`flex items-center justify-center gap-2 rounded-xl border px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all sm:px-4 sm:text-sm ${
              playerOneDashCooldown > 0
                ? 'cursor-not-allowed border-blue-400/15 bg-slate-700/90 text-white/60'
                : 'border-blue-300/30 bg-gradient-to-b from-blue-500 to-indigo-800 hover:from-blue-400 hover:to-indigo-700 active:scale-95'
            }`}
          >
            <span>Dash</span>
            <span className="font-mono text-[10px] text-blue-100/70 sm:text-xs">Q</span>
            {playerOneDashCooldown > 0 && <span className="font-mono text-[10px] tabular-nums sm:text-xs">{playerOneDashCooldown}s</span>}
          </button>
        </div>
        <div className="flex flex-col items-stretch justify-center gap-2 sm:flex-row">
          <button
            onClick={handlePlayerTwoAttackClick}
            className="flex items-center justify-center gap-2 rounded-xl border border-orange-300/30 bg-gradient-to-b from-orange-500 to-orange-800 px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all hover:from-orange-400 hover:to-orange-700 active:scale-95 sm:px-4 sm:text-sm"
          >
            <Sword className="h-4 w-4" />
            <span>Attack</span>
            <span className="font-mono text-[10px] text-orange-100/70 sm:text-xs">{playerTwoBulletCount}x</span>
            <span className="font-mono text-[10px] text-orange-100/70 sm:text-xs">M / 0</span>
          </button>
          <button
            onClick={handlePlayerTwoSkillClick}
            disabled={playerTwoSkillCooldown > 0}
            className={`flex items-center justify-center gap-2 rounded-xl border px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all sm:px-4 sm:text-sm ${
              playerTwoSkillCooldown > 0
                ? 'cursor-not-allowed border-orange-400/15 bg-slate-700/90 text-white/60'
                : 'border-orange-300/30 bg-gradient-to-b from-amber-600 to-orange-800 hover:from-amber-500 hover:to-orange-700 active:scale-95'
            }`}
          >
            <Zap className="h-4 w-4" />
            <span>Skill 1</span>
            <span className="font-mono text-[10px] text-orange-100/70 sm:text-xs">K</span>
            {playerTwoSkillCooldown > 0 && <span className="font-mono text-[10px] tabular-nums sm:text-xs">{playerTwoSkillCooldown}s</span>}
          </button>
          <button
            onClick={handlePlayerTwoDashClick}
            disabled={playerTwoDashCooldown > 0}
            className={`flex items-center justify-center gap-2 rounded-xl border px-2 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition-all sm:px-4 sm:text-sm ${
              playerTwoDashCooldown > 0
                ? 'cursor-not-allowed border-orange-400/15 bg-slate-700/90 text-white/60'
                : 'border-orange-300/30 bg-gradient-to-b from-orange-500 to-rose-800 hover:from-orange-400 hover:to-rose-700 active:scale-95'
            }`}
          >
            <span>Dash</span>
            <span className="font-mono text-[10px] text-orange-100/70 sm:text-xs">N</span>
            {playerTwoDashCooldown > 0 && <span className="font-mono text-[10px] tabular-nums sm:text-xs">{playerTwoDashCooldown}s</span>}
          </button>
        </div>
      </div>

        </>
      )}

      <style>{`
        @keyframes capturePop {
          0% { opacity: 0; transform: translate(-50%, 10px) scale(0.85); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>
    </div>
  );
}

export default App;
