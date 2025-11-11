/**
 * Player leveling and upgrade configuration.
 */
(function (global) {
    'use strict';

    const xpLevels = [
        50, // Level 1 -> 2
        125, // Level 2 -> 3
        175, // Level 3 -> 4
        225, // Level 4 -> 5
        275, // Level 5 -> 6
        325, // Level 6 -> 7
        375, // Level 7 -> 8
        425, // Level 8 -> 9
        475, // Level 9 -> 10
        525, // Level 10 -> 11
        575, // Level 11 -> 12
        625, // Level 12 -> 13
        675, // Level 13 -> 14
        725, // Level 14 -> 15
        775, // Level 15 -> 16
        825, // Level 16 -> 17
        875, // Level 17 -> 18
        925, // Level 18 -> 19
        975, // Level 19 -> 20
        1025 // Level 20 -> 21+
    ];

    function getRequiredXpForLevel(level) {
        if (level <= 0) return xpLevels[0] || 100;
        if (level - 1 < xpLevels.length) return xpLevels[level - 1];
        return xpLevels[xpLevels.length - 1];
    }

    function applyExplosionAreaToEntities(game, player) {
        if (!game || !player) return;

        const applyArea = (explosive) => {
            if (!explosive || typeof explosive._baseAoeRadius !== 'number') return;
            explosive.aoeRadius = explosive._baseAoeRadius * Math.sqrt(player.explosionAreaMultiplier);
        };

        if (Array.isArray(game.rockets)) {
            game.rockets.forEach(applyArea);
        }
        if (Array.isArray(game.mines)) {
            game.mines.forEach(applyArea);
        }
    }

    const playerUpgrades = [
        {
            key: 'health_1',
            level: 1,
            title: 'HEALTH',
            desc: 'Add 15 Health Points',
            image: 'Upgrade Icons/health.png',
            category: 'health',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.maxHealth += 15;
                player.health = Math.min(player.maxHealth, player.health + 15);
            }
        },
        {
            key: 'health_2',
            level: 4,
            title: 'HEALTH 2',
            desc: 'Add 15 Health Points',
            image: 'Upgrade Icons/health.png',
            category: 'health',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.maxHealth += 15;
                player.health = Math.min(player.maxHealth, player.health + 15);
            }
        },
        {
            key: 'health_3',
            level: 7,
            title: 'HEALTH 3',
            desc: 'Add 15 Health Points',
            image: 'Upgrade Icons/health.png',
            category: 'health',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.maxHealth += 15;
                player.health = Math.min(player.maxHealth, player.health + 15);
            }
        },
        {
            key: 'health_4',
            level: 10,
            title: 'HEALTH 4',
            desc: 'Add 15 Health Points',
            image: 'Upgrade Icons/health.png',
            category: 'health',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.maxHealth += 15;
                player.health = Math.min(player.maxHealth, player.health + 15);
            }
        },
        {
            key: 'speed_1',
            level: 1,
            title: 'SPEED',
            desc: '+5% Speed',
            image: 'Upgrade Icons/speed.png',
            category: 'speed',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.speedMultiplier = (player.speedMultiplier || 1) * 1.05;
            }
        },
        {
            key: 'speed_2',
            level: 3,
            title: 'SPEED 2',
            desc: '+5% Speed',
            image: 'Upgrade Icons/speed.png',
            category: 'speed',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.speedMultiplier = (player.speedMultiplier || 1) * 1.05;
            }
        },
        {
            key: 'speed_3',
            level: 6,
            title: 'SPEED 3',
            desc: '+5% Speed',
            image: 'Upgrade Icons/speed.png',
            category: 'speed',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.speedMultiplier = (player.speedMultiplier || 1) * 1.05;
            }
        },
        {
            key: 'damage_1',
            level: 1,
            title: 'DAMAGE',
            desc: '+10% of Weapons Damage',
            image: 'Upgrade Icons/damage.png',
            category: 'damage',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.bulletDamageMultiplier = (player.bulletDamageMultiplier || 1) * 1.1;
            }
        },
        {
            key: 'damage_2',
            level: 5,
            title: 'DAMAGE 2',
            desc: '+10% of Weapons Damage',
            image: 'Upgrade Icons/damage.png',
            category: 'damage',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.bulletDamageMultiplier = (player.bulletDamageMultiplier || 1) * 1.1;
            }
        },
        {
            key: 'damage_3',
            level: 8,
            title: 'DAMAGE 3',
            desc: '+10% of Weapons Damage',
            image: 'Upgrade Icons/damage.png',
            category: 'damage',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.bulletDamageMultiplier = (player.bulletDamageMultiplier || 1) * 1.1;
            }
        },
        {
            key: 'damage_4',
            level: 10,
            title: 'DAMAGE 4',
            desc: '+10% of Weapons Damage',
            image: 'Upgrade Icons/damage.png',
            category: 'damage',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.bulletDamageMultiplier = (player.bulletDamageMultiplier || 1) * 1.1;
            }
        },
        {
            key: 'explosion_area_1',
            level: 4,
            title: 'EXPLOSION AREA',
            desc: '+10% Mine & Rocket Area',
            image: 'Upgrade Icons/area_damage_size.png',
            category: 'explosion_area',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.explosionAreaMultiplier = (player.explosionAreaMultiplier || 1) * 1.1;
                applyExplosionAreaToEntities(game, player);
            }
        },
        {
            key: 'explosion_area_2',
            level: 8,
            title: 'EXPLOSION AREA 2',
            desc: '+10% Mine & Rocket Area',
            image: 'Upgrade Icons/area_damage_size.png',
            category: 'explosion_area',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.explosionAreaMultiplier = (player.explosionAreaMultiplier || 1) * 1.1;
                applyExplosionAreaToEntities(game, player);
            }
        },
        {
            key: 'explosion_area_3',
            level: 12,
            title: 'EXPLOSION AREA 3',
            desc: '+10% Mine & Rocket Area',
            image: 'Upgrade Icons/area_damage_size.png',
            category: 'explosion_area',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.explosionAreaMultiplier = (player.explosionAreaMultiplier || 1) * 1.1;
                applyExplosionAreaToEntities(game, player);
            }
        },
        {
            key: 'railgun_charge_1',
            level: 3,
            title: 'RAILGUN CHARGE',
            desc: '10% Faster Railgun Charge',
            image: 'Upgrade Icons/railgun_charge.png',
            category: 'railgun_charge',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.railgunChargeSpeedMultiplier = (player.railgunChargeSpeedMultiplier || 1) * 1.1;
            }
        },
        {
            key: 'railgun_charge_2',
            level: 7,
            title: 'RAILGUN CHARGE 2',
            desc: '10% Faster Railgun Charge',
            image: 'Upgrade Icons/railgun_charge.png',
            category: 'railgun_charge',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.railgunChargeSpeedMultiplier = (player.railgunChargeSpeedMultiplier || 1) * 1.1;
            }
        },
        {
            key: 'railgun_charge_3',
            level: 10,
            title: 'RAILGUN CHARGE 3',
            desc: '10% Faster Railgun Charge',
            image: 'Upgrade Icons/railgun_charge.png',
            category: 'railgun_charge',
            apply(game) {
                const player = game && game.player;
                if (!player) return;
                player.railgunChargeSpeedMultiplier = (player.railgunChargeSpeedMultiplier || 1) * 1.1;
            }
        }
    ];

    global.XP_LEVELS = xpLevels;
    global.getRequiredXpForLevel = getRequiredXpForLevel;
    global.PLAYER_UPGRADES = playerUpgrades;
})(typeof window !== 'undefined' ? window : globalThis);
