// Enemy configuration
const ENEMY_TYPES = {
    square: {
        role: 'regular',
        health: 200,
        speed: 3.5,
        size: 30,
        points: 5,
        damage: 10,
        xp: 10,
        fillColor: '#ff0000',
        strokeColor: '#cc0000'
    },
    dash_square: {
        role: 'regular',
        health: 300,
        speed: 3.5,
        size: 35,
        points: 15,
        damage: 15,
        xp: 15,
        fillColor: '#ff0000',
        strokeColor: '#cc0000',
        dashCooldownMs: 1500,
        dashDistance: 200,
        dashDurationMs: 180,
        displayName: 'DashSquare'
    },
    triangle: {
        role: 'regular',
        health: 45,
        speed: 5.5,
        size: 15,
        points: 10,
        damage: 10,
        xp: 15,
        fillColor: '#ff6666',
        strokeColor: '#cc3333'
      },
      killer_triangle: {
          role: 'elite',
          health: 100,
          speed: 5,
          size: 20,
          points: 25,
          damage: 35,
          xp: 25,
          fillColor: '#ff6666',
          strokeColor: '#cc0000',
          glowColor: 'rgb(254, 0, 26)',
          trailIntervalMs: 25,
          trailLife: 120,
          trailShrinkFactor: 0.9,
          trailFadeExponent: 1.5,
          orbitRadiusMin: 140,
          orbitRadiusMax: 220,
          orbitDurationFrames: 150,
          orbitDurationRange: 120,
          orbitAngularSpeedMin: 0.018,
          orbitAngularSpeedMax: 0.032,
          dashDurationFrames: 120,
          dashSpeedMultiplier: 1.3,
          wobbleStrength: 0.55,
          explosionRadius: 150,
          explosionDamage: 35,
          deathSound: 'killerTriangleDie',
          displayName: 'Killer Triangle'
    },
    octagon: {
        role: 'regular',
        health: 700,
        speed: 2,
        size: 50,
        points: 15,
        damage: 20,
        xp: 30,
        fillColor: '#990000',
        strokeColor: '#660000',
        shootDelay: 2500
    },
    super_octagon: {
        role: 'elite',
        health: 1200,
        speed: 1.5,
        size: 80,
        points: 150,
        damage: 20,
        xp: 50,
        fillColor: '#ff6a00',
        strokeColor: '#cc3300',
        shootDelay: 1333,
        shieldRadiusOffset: 24,
        shieldColor: 'rgba(255, 160, 0, 0.18)',
        shieldLineColor: 'rgba(255, 210, 0, 0.85)',
        glowColor: 'rgba(255, 32, 0, 0.65)',
        bulletTrailColor: '#ff9448',
        bulletTrailLifeMultiplier: 1.8,
        bulletTrailSizeMultiplier: 1.2,
        enemyBulletRadius: 7,
        enemyBulletFillColor: '#ff6a00',
        enemyBulletStrokeColor: '#ff3200',
        enemyBulletGlowColor: 'rgba(255, 96, 0, 0.75)',
        enemyBulletDamage: 18,
        enemyBulletSpeed: 9,
        displayName: 'Super Octagon'
    },
    rhombus: {
        role: 'regular',
        health: 500,
        speed: 3.2,
        size: 45,
        points: 30,
        damage: 15,
        xp: 25,
        fillColor: '#ff9999',
        strokeColor: '#ff6666'
    },
    rhombus_boss: {
        role: 'boss',
        health: 3500,
        speed: 2,
        size: 45 * 3,
        points: 950,
        damage: 500,
        xp: 100,
        fillColor: '#ff5555',
        strokeColor: '#dd0000',
        isBoss: true,
        bossBaseType: 'rhombus',
        bossTriangleSpawnIntervalMs: 2700,
        deathSound: 'bossDefeated',
        bossRotationEnabled: true
    }
};

ENEMY_TYPES['vector_snake_boss'] = {
    role: 'boss',
    health: 4500, // Head health; custom boss logic handles per-segment health
    speed: 0,
    size: 78,
    points: 950,
    damage: 100,
    xp: 0,
    fillColor: '#33ffdd',
    strokeColor: '#33ffdd',
    isBoss: true,
    bossBaseType: 'vector_snake',
    bossRotationEnabled: true
};

ENEMY_TYPES['player_2_boss'] = {
    role: 'boss',
    health: 2000,
    speed: 3.5,
    size: 40,
    points: 950,
    damage: 0,
    xp: 150,
    fillColor: '#ff2e2e',
    strokeColor: '#c40000',
    glowColor: 'rgba(255, 64, 64, 0.85)', opacity: 0.5,
    dashColor: '#ff2e2e', opacity: 0.5, 
    dashGlowColor: 'rgba(255, 48, 48, 0.9)', opacity: 0.5,
    enemyBulletDamage: 10,
    rocketDamage: 20,
    mineDamage: 20,
    isBoss: true,
    bossBaseType: 'player_clone',
    displayName: 'PLAYER #2',
    bossRotationEnabled: true
};

ENEMY_TYPES['ping_and_pong_boss'] = {
    role: 'boss',
    health: 5000,
    speed: 0,
    size: 80,
    points: 950,
    damage: 0,
    xp: 150,
    fillColor: '#ff3344',
    strokeColor: '#aa0011',
    glowColor: 'rgba(255, 48, 48, 0.85)',
    isBoss: true,
    bossBaseType: 'ping_and_pong',
    displayName: 'PING & PONG',
    paddleWidth: 20,
    paddleHeight: 80,
    paddleGlowColor: 'rgba(255, 32, 32, 0.9)',
    paddleFollowLerp: 0.18,
    paddleDamage: 300,
    ballRadius: 40,
    ballHealth: 5000,
    ballBaseSpeed: 6,
    ballSpeedIncrement: 0.5,
    ballMaxSpeed: 14,
    ballContactDamage: 25,
    energyWaveIntervalMs: 4000,
    energyWaveRadius: 150,
    energyWaveDamage: 25,
    extraBallSpawnDelayMs: 10000,
    extraBallHealth: 100,
    extraBallRadius: 26,
    extraBallSpeed: 7.5,
    extraBallContactDamage: 25,
    extraBallExplosionRadius: 120,
    extraBallExplosionDamage: 25,
    extraBallMaxBounces: 8,
    maxExtraBalls: 4,
    barrierInset: 56,
    bossRotationEnabled: false
};

// Boss: Tetris Cross (cross made of squares)
// Declared as a boss type so it appears in the boss pool, but it has a custom class/behavior elsewhere
ENEMY_TYPES['tetris_cross_boss'] = {
    role: 'boss',
    health: 4500,
    speed: 0, // handled by custom boss class
    size: 60, // collision radius approximation
    points: 950,
    damage: 0,
    xp: 0,
    fillColor: '#ff3333',
    strokeColor: '#ff3333',
    isBoss: true,
    bossBaseType: 'tetris_cross',
    bossRotationEnabled: true
};

// Vector Snake boss config
const VECTOR_SNAKE_SETTINGS = Object.freeze({
    headHp: 5000,
    segmentHp: 700,
    headRadius: 29,
    headSize: 58,
    segmentRadius: 29,
    segmentSize: 58,
    segmentSpacing: 58,
    movementSpeed: 4,
    gridSize: 58,
    turnIntervalMs: 1200,
    turnIntervalVarianceMs: 500,
    margin: 0,
    edgePadding: 34,
    edgeTolerance: 4,
    ignoreBossSafeZone: true,
    headCollisionDamage: 100,
    segmentCollisionDamage: 25,
    playerStalkDistance: 140,
    directionRandomnessChance: 0.35,
    playerChaseJitterDistance: 90,
    playerChaseJitterMinDistance: 30,
    playerChaseJitterIntervalMs: 900,
    appleRadius: 20,
    appleHp: 1000,
    appleLifetimeMs: 12000,
    appleSpawnIntervalMs: 4000,
    appleSpawnIntervalVarianceMs: 500,
    appleSpawnReductionIntervalMs: 6000,
    appleSpawnReductionPercent: 0.03,
    appleMinSpawnIntervalMs: 2000,
    appleSpawnRampDurationMs: 90000,
    growthPerApple: 3,
    maxApples: 5,
    speedIncreaseIntervalMs: 5000,
    speedIncreasePercent: 0.02,
    appleShootIntervalMs: 500,
    appleBulletSpeed: 5,
    appleBulletDamage: 25,
    appleBlastRadius: 100,
    appleBlastDamage: 25,
    appleSpawnNearPlayerMinDistance: 80,
    appleSpawnNearPlayerMaxDistance: 200
});

const FIRST_BOSS_LOCK = Object.freeze({
    // Set enabled to true and bossKey to any valid enemy key (e.g., 'player_2_boss') to lock that boss as the first encounter
    enabled: false,
    bossKey: ''
});

const BOSS_SELECTION = Object.freeze({
    firstBossKey: FIRST_BOSS_LOCK.enabled ? FIRST_BOSS_LOCK.bossKey : null
});

const BOSS_NAME_MAP = Object.freeze({
    vector_snake_boss: 'VECTOR SNAKE',
    tetris_cross_boss: 'TETRIS+',
    rhombus_boss: 'RHOMBOSS',
    player_2_boss: 'PLAYER #2',
    ping_and_pong_boss: 'PING & PONG'
});

// Tetris Cross boss config
const TETRIS_SETTINGS = {
    // Playfield
    cols: 36,
    cellSize: null, // computed from canvas width
    // Piece/boss stats
    pieceHp: 250,
    bossHp: 2500,
    playerCollisionDamage: 25,
    // Spawning & speeds
    spawnIntervalMs: 1200,
    minSpawnIntervalMs: 650,
    spawnAccelerationMsPerSec: 4, // decreases interval slowly
    fallSpeedPxPerSec: 40,
    enrageSpeedPxPerSec2: 5 // adds per second
};

const INITIAL_ENEMY_SPAWN_DELAY_MS = 2500;

// Option: use grouped wave randomization (set to true to enable)
const USE_WAVE_GROUPS = true;

// Wave groups: each inner array is a group; order across groups is fixed (1, 2, 3, ...)
// Waves inside a group are randomly ordered each session
const WAVE_GROUPS = [
    // Group 1 (example: original waves 1-3)
    [
        { enemies: { cubes: 8 }, spawnTime: 10000, simultaneousSpawns: 1 },
        { enemies: { octagons: 4 }, spawnTime: 10000, simultaneousSpawns: 1 },
        { enemies: { triangles: 10 }, spawnTime: 10000, simultaneousSpawns: 1 }
    ],
    // Group 2 (example: original waves 4-6)
    [
        { enemies: { cubes: 10, rhombuses: 3 }, spawnTime: 10000, simultaneousSpawns: 1 },
        { enemies: { triangles: 12 }, spawnTime: 15000, simultaneousSpawns: 1, eliteSpawns: 
            [
                { type: 'killer_triangle', count: 3, initialDelayMs: 3000, repeatDelayMs: 4000 }
            ]
        },
        { enemies: { dashSquares: 12 }, spawnTime: 15000, simultaneousSpawns: 2 }
    ],
    // Group 3 (example: original waves 7-9)
    [
        { enemies: { cubes: 5, dashSquares: 5, triangles: 0, octagons: 5, rhombuses: 5 }, spawnTime: 15000, simultaneousSpawns: 1 },
        { enemies: { cubes: 0, triangles: 12, octagons: 0, rhombuses: 5 }, spawnTime: 25000, simultaneousSpawns: 1, eliteSpawns: 
            [
                { type: 'killer_triangle', count: 3, initialDelayMs: 4000, repeatDelayMs: 6000 }
            ]
        },
        { enemies: { cubes: 0, triangles: 0, octagons: 20, rhombuses: 0 }, spawnTime: 25000, simultaneousSpawns: 1, eliteSpawns: 
            [
                { type: 'super_octagon', count: 1, initialDelayMs: 10000 }
            ]
        }
    ],
    // Group 4 (example: original waves 10-12)
    [
        { enemies: { cubes: 25, dashSquares: 0, triangles: 25, killerTriangles: 0, octagons: 0, rhombuses: 0 }, spawnTime: 25000, simultaneousSpawns: 2 },
        { enemies: { cubes: 0, dashSquares: 20 }, spawnTime: 20000, simultaneousSpawns: 2, eliteSpawns: 
            [
                { type: 'killer_triangle', count: 8, initialDelayMs: 3000, repeatDelayMs: 2000 },
                { type: 'super_octagon', count: 1, initialDelayMs: 9000 }
            ]
        },
        { enemies: { cubes: 30, triangles: 0, octagons: 0, rhombuses: 0 }, spawnTime: 20000, simultaneousSpawns: 2, eliteSpawns: 
            [
                { type: 'super_octagon', count: 3, initialDelayMs: 4000, repeatDelayMs: 6000 }
            ]
        }
    ],
    // Group 5 (example: original waves 13-15)
    [
        { enemies: { cubes: 30, dashSquares: 30, triangles: 0, killerTriangles: 0, octagons: 0, rhombuses: 0 }, spawnTime: 25000, simultaneousSpawns: 3 },
        { enemies: { cubes: 0, dashSquares: 0, triangles: 15, octagons: 0, rhombuses: 0 }, spawnTime: 20000, simultaneousSpawns: 3, eliteSpawns: 
            [
                { type: 'killer_triangle', count: 8, initialDelayMs: 3000, repeatDelayMs: 2000 },
                { type: 'super_octagon', count: 1, initialDelayMs: 9000 }
            ]
        },
        { enemies: { cubes: 0, dashSquares: 0, triangles: 0, octagons: 15, rhombuses: 0 }, spawnTime: 20000, simultaneousSpawns: 3, eliteSpawns: 
            [
                { type: 'super_octagon', count: 3, initialDelayMs: 4000, repeatDelayMs: 6000 }
            ]
        }
    ]
];
