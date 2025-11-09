/**
 * Centralized sound controller configuration.
 */
(function (global) {
    'use strict';

    const SOUND_CONTROLLER = {
        basePath: 'Sounds/',
        files: {
            lobbyMusic: { file: 'lobby-music.mp3', loop: true, isMusic: true },
            backgroundMusic: { file: 'background-music.mp3', loop: true, isMusic: true },
            buttonClick: { file: 'button-click.wav', loop: false },
            pauseActivate: { file: 'pause-activate.wav', loop: false },
            pauseDeactivate: { file: 'pause-deactivate.wav', loop: false },
            dash: { file: 'dash.wav', loop: false },
            enemyDash: { file: 'enemy-dash.wav', loop: false },
            XP_collect: { file: 'xp-collect.wav', loop: false },
            Level_UP: { file: 'level-up.wav', loop: false },
            UpgradeSelected: { file: 'level-up.wav', loop: false },
            BossAlertSound: { file: 'boss-alert.wav', loop: true },
            playerDamage: { file: 'player-damage.wav', loop: false },
            bulletShoot: { file: 'bullet-shoot.wav', loop: false },
            railgunShoot: { file: 'railgun-shoot.wav', loop: false },
            MaxRailgunShot: { file: 'max-railgun-shot.wav', loop: false },
            railgunCharge: { file: 'railgun-charge.wav', loop: true },
            railgunChargeMax: { file: 'railgun-charge-max.wav', loop: false },
            RocketLaunch: { file: 'rocket-launch.wav', loop: false },
            RocketExplotion: { file: 'rocket-explosion.wav', loop: false },
            RocketReload: { file: 'rocket-reload.wav', loop: false },
            mine_placed: { file: 'mine-placed.wav', loop: false },
            enemyHit: { file: 'enemy-hit.wav', loop: false },
            enemyShoot: { file: 'enemy-shoot.wav', loop: false },
            enemyDeath: { file: 'enemy-death.wav', loop: false },
            boss_hit: { file: 'boss-hit.wav', loop: false },
            SnakeEatsApple: { file: 'snake-eats-apple.wav', loop: false },
            bossDefeated: { file: 'boss-killed.wav', loop: false },
            gameOver: { file: 'game-over.wav', loop: false }
        },
        settings: {
            defaultVolume: 0.7,
            musicVolume: 0.4,
            concurrencyWindowMs: 250,
            maxVoices: {
                default: 8,
                bulletShoot: 4,
                enemyHit: 4
            }
        }
    };

    global.SOUND_CONTROLLER = SOUND_CONTROLLER;
})(typeof window !== 'undefined' ? window : globalThis);

