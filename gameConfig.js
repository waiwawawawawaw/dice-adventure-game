// 游戏配置文件
window.GameConfig = {
    // 玩家相关
    PLAYER: {
        INITIAL_HEALTH: 100,          // 初始血量
        INITIAL_GOLD: 12,              // 初始金币
        MOVEMENT_INTERVAL: 500        // 移动间隔(毫秒)
    },

    // 格子类型配置
    GRID_CELLS: {
        MOVEMENT_PATH: [0, 1, 2, 5, 8, 7, 6, 3],  // 移动路径
        EMPTY_CELL: 4,                // 中心空格位置
        SPECIAL_CELLS: {
            GEM1: {
                POSITION: 2,          // Gem1位置
                IMAGE: 'gem1.png',    // Gem1图片
                WAVE_LEVELS: {        // 水位等级效果
                    LEVEL1: 20,       // 20% 高度
                    LEVEL2: 40,       // 40% 高度
                    LEVEL3: 60,       // 60% 高度
                    LEVEL4: 80,       // 80% 高度
                    LEVEL5: 100       // 100% 高度
                }
            },
            GEM2: {
                POSITION: 6,          // Gem2位置
                IMAGE: 'gem2.png',    // Gem2图片
                WAVE_LEVELS: {        // 水位等级效果
                    LEVEL1: 50,       // 50% 高度
                    LEVEL2: 100       // 100% 高度
                }
            },
            ROCKET: {
                IMAGE: 'rocket.png',  // 火箭图片
                DAMAGE: {
                    NORMAL: 60,      // 对普通怪物伤害
                    BOSS: 80        // 对BOSS伤害
                },
                PROJECTILE_SPEED: 400,    // 火箭飞行速度
                ANIMATION_DURATION: 500,   // 发射动画持续时间
                STACK: {
                    MAX_COUNT: 5,         // 最大叠加数量
                    LAUNCH_DELAY: 200     // 多个火箭发射间隔(毫秒)
                }
            }
        }
    },

    // 怪物相关
    MONSTER: {
        INITIAL_HEALTH: 40,           // 怪物初始血量
        MOVEMENT_SPEED: 2,            // 移动速度
        DAMAGE: 10,                   // 攻击伤害
        GOLD_REWARD: 5,               // 金币奖励
        SIZE: { width: 32, height: 32 },
        SPAWN_DISTANCE: 100
    },

    // BOSS配置
    BOSS: {
        WAVE: 10,
        HEALTH: 500,
        DAMAGE: 25,
        GOLD_REWARD: 100,
        SIZE: { width: 64, height: 64 },
        IMAGES: ['BOSS.png', 'BOSS1.png', 'BOSS2.png'],
        ANIMATION_INTERVAL: 200
    },

    // 技能配置
    SKILLS: {
        GEM1: {
            MAX_COUNT: 4
        },
        GEM2: {
            MAX_COUNT: 4,
            DAMAGE: 20,
            PROJECTILE_SPEED: 8
        }
    },

    // 波次配置
    WAVE: {
        MAX_WAVES: 50
    },

    // 升级配置
    UPGRADE: {
        REFRESH_COST: 2,
        BUTTON_COUNT: 6,
        BUTTONS: {
            GOLD: {
                ID: 'gold',
                NAME: '金币',
                COST: 5,
                REWARD: 10,
                IMAGE: 'gold.png'
            },
            HEALTH: {
                ID: 'health',
                NAME: '生命值',
                COST: 8,
                AMOUNT: 20,
                IMAGE: 'health.png'
            },
            HERO: {
                ID: 'hero',
                NAME: '英雄',
                COST: 15,
                EFFECT: 'upgrade_hero',
                IMAGE: 'player.png'
            },
            ROCKET: {
                ID: 'rocket',
                NAME: '火箭',
                COST: 12,
                EFFECT: 'add_rocket',
                IMAGE: 'rocket.png'
            },
            SHIELD: {
                ID: 'shield',
                NAME: '护盾',
                COST: 10,
                EFFECT: 'add_shield',
                IMAGE: 'shield.png'
            },
            SPEED: {
                ID: 'speed',
                NAME: '速度',
                COST: 6,
                EFFECT: 'increase_speed',
                IMAGE: 'speed.png'
            }
        }
    },

    // UI配置
    UI: {
        GRID_CELL: {
            SIZE: 48,
            BORDER: 2
        },
        UPGRADE_DIALOG: {
            WIDTH: 400,
            PADDING: 20
        },
        HEALTH_DISPLAY: {
            POSITION: { x: 10, y: 10 },
            FONT_SIZE: '16px',
            COLOR: '#ff0000'
        }
    }
};

// 导出配置（如果在Node.js环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.GameConfig;
}