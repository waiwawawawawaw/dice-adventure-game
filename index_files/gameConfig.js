// 游戏基础配置
window.GameConfig = {
    // 玩家相关
    PLAYER: {
        INITIAL_HEALTH: 100,          // 初始血量
        INITIAL_GOLD: 12,              // 初始金币（进一步提高）
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
            ROCKET: {                // 火箭配置
                IMAGE: 'rocket.png',  // 火箭图片
                DAMAGE: {
                    NORMAL: 60,      // 对普通怪物伤害
                    BOSS: 80        // 对BOSS伤害（降低以平衡游戏）
                },
                PROJECTILE_SPEED: 400,    // 火箭飞行速度
                ANIMATION_DURATION: 500,   // 发射动画持续时间
                STACK: {
                    MAX_COUNT: 5,         // 最大叠加数量
                    TEXT_STYLE: {
                        COLOR: '#FF4444',  // 叠加数字颜色
                        FONT: '12px Arial', // 叠加数字字体
                        OFFSET_X: 15,      // 文字X偏移
                        OFFSET_Y: 15       // 文字Y偏移
                    },
                    LAUNCH_DELAY: 200     // 多个火箭发射间隔(毫秒)
                },
                UI: {
                    COUNTER: {
                        FONT_SIZE: 14,     // 数字字体大小
                        PADDING: {
                            X: 4,          // 水平内边距
                            Y: 1           // 垂直内边距
                        },
                        BORDER_RADIUS: 8,  // 圆角大小
                        SCALE: 0.9,        // 整体缩放
                        OFFSET: {
                            X: 33,          // 水平偏移
                            Y: 13           // 垂直偏移
                        },
                        BACKGROUND: 'rgba(0, 0, 0, 0.7)',  // 背景色
                        BORDER: {
                            COLOR: 'rgb(107, 73, 73)',     // 边框颜色
                            WIDTH: 1                       // 边框宽度
                        }
                    },
                    WATER_EFFECT: {
                        COLOR: 'rgba(0, 174, 255, 0.6)',  // 水位效果颜色
                        LEVELS: {          // 水位等级
                            LEVEL1: 33,    // 33% 高度
                            LEVEL2: 66,    // 66% 高度
                            LEVEL3: 100    // 100% 高度
                        }
                    }
                }
            }
        },
        STYLES: {
            CELL_ACTIVE: {
                SCALE: 1.1,           // 激活时的缩放比例
                Z_INDEX: 2            // 激活时的层级
            },
            WATER_EFFECT: {
                COLOR: 'rgba(0, 255, 255, 0.6)',  // 水位效果颜色
                TRANSITION: '0.5s ease-out'        // 水位变化过渡效果
            },
            RIPPLE_EFFECT: {
                COLOR: 'rgba(0, 174, 255, 0.6)',  // 涟漪效果颜色
                DURATION: 500                      // 涟漪动画持续时间(毫秒)
            }
        }
    },

    // 怪物相关
    MONSTER: {
        INITIAL_HEALTH: 40,           // 怪物初始血量（降低）
        MOVEMENT_SPEED: 1,            // 移动速度
        DAMAGE_TO_PLAYER: 4,         // 对玩家造成的伤害（降低）
        KILL_GOLD_REWARD: 6,          // 击杀金币奖励（提高）
        SIZE: {
            WIDTH: 60,                // 怪物宽度
            HEIGHT: 60                // 怪物高度
        },
        SPAWN_DISTANCE: 300,          // 生成距离
        BOSS: {
            WAVE: 3,
            HEALTH: 80,              // BOSS血量（大幅降低）
            DAMAGE: 6,                // BOSS伤害（降低）
            GOLD_REWARD: 25,          // BOSS金币奖励（提高）
            SIZE: {
                WIDTH: 80,            // BOSS宽度
                HEIGHT: 80            // BOSS高度
            },
            IMAGES: ['BOSS.png', 'BOSS1.png', 'BOSS2.png'],  // BOSS图片
            ANIMATION_INTERVAL: 500   // BOSS动画间隔(毫秒)
        }
    },

    // 技能相关
    SKILLS: {
        GEM1: {
            MAX_COUNT: 6             // 最大计数
        },
        GEM2: {
            MAX_COUNT: 2,             // 最大计数
            DAMAGE: 50,               // 技能伤害
            PROJECTILE_SPEED: 300     // 技能飞行速度
        }
    },

    // 波次相关
    WAVE: {
        MAX_WAVES: 7                 // 最大波数
    },

    // 升级选项
    UPGRADES: {
        REFRESH: {
            COST: 10,                 // 刷新消耗
            BUTTON_COUNT: 3           // 显示按钮数量
        },
        BUTTONS: {
            GOLD_BOOST: {
                ID: 'gold',
                NAME: '+金币',
                COST: 10,             // 消耗
                REWARD: 11,           // 奖励
                IMAGE: 'pt-button.png'
            },
            HEALTH_BOOST: {
                ID: 'health',
                NAME: '+20血量',
                COST: 12,             // 消耗
                AMOUNT: 20,           // 回复量
                IMAGE: 'wn-button.png'
            },
            HERO_BOOST: {
                ID: 'hero',
                NAME: '升级英雄',
                COST: 15,             // 消耗
                EFFECT: {
                    TYPE: 'ADD_GEM2', // 效果类型：添加GEM2
                    CONVERT_CELLS: [0, 1, 3, 5, 7, 8]
                },
                IMAGE: 'jy-button.png'
            },
            ROCKET_BOOST: {
                ID: 'rocket',
                NAME: '升级火箭',
                COST: 13,
                EFFECT: {
                    TYPE: 'ADD_ROCKET',  // 效果类型：添加火箭
                    CONVERT_CELLS: [0, 1, 3, 5, 7, 8],  // 可转换的格子位置
                    STACK_TEXT: '+',     // 叠加效果显示前缀
                    STACK_INCREASE: 1    // 每次增加的叠加数量
                },
                IMAGE: 'rocket-button.png'
            },
            SHIELD_BOOST: {
                ID: 'shield',
                NAME: '+盾牌',
                COST: 14,
                IMAGE: 'shield-button.png'
            },
            SPEED_BOOST: {
                ID: 'speed',
                NAME: '+速度',
                COST: 11,
                IMAGE: 'speed-button.png'
            }
        }
    },

    // 界面相关
    UI: {
        GRID: {
            CELL_SIZE: 57,           // 格子大小
            GAP: 3,                  // 格子间距
            BORDER: {
                WIDTH: 2,            // 边框宽度
                COLOR: 'rgba(151, 53, 53, 0.5)',  // 边框颜色
                RADIUS: 2            // 边框圆角
            }
        },
        UPGRADE_DIALOG: {
            WIDTH: 380,              // 对话框宽度
            TOP_OFFSET: 100,         // 顶部偏移
            PADDING: {
                NORMAL: 20,          // 普通内边距
                BOTTOM: 60           // 底部内边距
            },
            BUTTONS: {
                HORIZONTAL_OFFSET: 90,  // 按钮水平偏移
                BOTTOM_OFFSET: 30,      // 按钮底部偏移
                CLOSE: {
                    WIDTH: 90,          // 关闭按钮宽度
                    HEIGHT: 30          // 关闭按钮高度
                },
                UPGRADE: {
                    WIDTH: 105,         // 升级按钮宽度
                    HEIGHT: 54,         // 升级按钮高度
                    BORDER_RADIUS: 2,   // 升级按钮圆角
                    FONT_SIZE: 14,      // 升级按钮字体大小
                    TEXT_SHADOW: '1px 1px 2px rgba(0, 0, 0, 0.8)',  // 文字阴影
                    COST_INDICATOR: {
                        BOTTOM_OFFSET: -25,  // 成本指示器底部偏移
                        PADDING: '2px 8px',  // 内边距
                        BORDER_RADIUS: 10,   // 圆角
                        BACKGROUND: 'rgba(0, 0, 0, 0.7)',  // 背景色
                        COIN_SIZE: 20,       // 金币图标大小
                        TEXT_COLOR: '#FFD700',  // 文字颜色
                        FONT_SIZE: 18         // 文字大小
                    }
                },
                REFRESH: {
                    FONT_SIZE: 14,      // 刷新按钮字体大小
                    TEXT_COLOR: '#FFD700',  // 文字颜色
                    INSUFFICIENT_COLOR: '#ff4444'  // 金币不足时的颜色
                }
            },
            TITLE: {
                COLOR: 'white',      // 标题颜色
                FONT_SIZE: 24,       // 标题字体大小
                MARGIN_TOP: -20      // 标题上边距
            },
            BACKGROUND: 'rgba(0, 0, 0, 0.9)',  // 对话框背景色
            BORDER: {
                WIDTH: 2,            // 边框宽度
                COLOR: 'rgb(107, 73, 73)',  // 边框颜色
                RADIUS: 4            // 边框圆角
            }
        },
        HEALTH_DISPLAY: {
            BAR_TOP: 1000,          // 血条顶部位置
            TEXT_TOP: 970           // 血量文字顶部位置
        }
    },

    // 动画相关
    ANIMATION: {
        COIN_FLOAT_DURATION: 500,    // 金币飘动时间(毫秒)
        DAMAGE_TEXT_DURATION: 1000    // 伤害数字显示时间(毫秒)
    },

    // 动态平衡配置
    BALANCE: {
        WAVE_SCALING: {
            MONSTER_HEALTH: 0.05,    // 每波血量增长5%（进一步降低）
            MONSTER_DAMAGE: 0.04,    // 每波伤害增长4%（进一步降低）
            GOLD_REWARD: 0.20,       // 每波奖励增长20%（进一步提高）
            BOSS_MULTIPLIER: 1.5     // BOSS数值倍数（大幅降低）
        },
        COST_SCALING: {
            UPGRADE_BASE: 1.10,      // 升级成本递增基数（进一步降低）
            REFRESH_LINEAR: 6        // 刷新线性递增（进一步降低）
        }
    },

    // 天赋系统UI配置
    TALENT_SYSTEM: {
        // 天赋系统容器
        CONTAINER: {
            SIZE: {
                WIDTH: 720,
                HEIGHT: 1280
            },
            BACKGROUND: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            Z_INDEX: 10002
        },
        // 头部区域（金币显示）
        HEADER: {
            POSITION: {
                TOP: 20,
                RIGHT: 20
            },
            Z_INDEX: 10003
        },
        // 关卡配置
        LEVELS: [
            {
                ID: 1,
                NAME: "沙漠之地",
                IMAGE: "./index_files/light1.png"
            },
            {
                ID: 2,
                NAME: "精灵森林",
                IMAGE: "./index_files/light2.png"
            }
        },
        // 金币显示
        GOLD_DISPLAY: {
            BACKGROUND: 'rgba(255, 215, 0, 0.2)',
            BORDER: {
                WIDTH: 2,
                COLOR: '#ffd700',
                RADIUS: 15
            },
            PADDING: {
                VERTICAL: 10,
                HORIZONTAL: 15
            },
            ICON: {
                SIZE: 24,
                MARGIN_RIGHT: 8
            },
            TEXT: {
                COLOR: '#ffd700',
                FONT_SIZE: 18,
                FONT_WEIGHT: 'bold'
            }
        },
        // 内容区域
        CONTENT: {
            PADDING: {
                TOP: 80,
                BOTTOM: 20,
                LEFT: 20,
                RIGHT: 20
            }
        },
        // 天赋地图
        MAP: {
            SIZE: {
                WIDTH: 270,
                HEIGHT: 147
            },
            MARGIN_TOP: -200,
            MARGIN_BOTTOM: 30,
            BORDER: {
                WIDTH: 0,
                COLOR: '#ffd700',
                RADIUS: 0
            },
            IMAGE: './index_files/light1.png'
        },
        // 开始游戏按钮
        START_BUTTON: {
            PADDING: {
                VERTICAL: 15,
                HORIZONTAL: 40
            },
            FONT_SIZE: 30,
            COLOR: '#ffffff',
            BACKGROUND: 'linear-gradient(45deg, #ff6b6b, #ff8e53)',
            BORDER_RADIUS: 50,
            MARGIN_BOTTOM: 40,
            HOVER: {
                BACKGROUND: 'linear-gradient(45deg, #ff8e53, #ff6b6b)',
                TRANSFORM: 'translateY(-2px)'
            }
        },
        // 天赋按钮容器
        BUTTONS_CONTAINER: {
            GAP: 20
        },
        // 天赋按钮
        BUTTON: {
            SIZE: {
                WIDTH: 100,
                HEIGHT: 160
            },
            BACKGROUND: 'linear-gradient(135deg, #667eea, #764ba2)',
            BORDER: {
                WIDTH: 2,
                COLOR: '#ffd700',
                RADIUS: 10
            },
            PADDING: {
                VERTICAL: 10,
                HORIZONTAL: 5
            },
            ICON: {
                SIZE: 30
            },
            TEXT: {
                COLOR: 'white',
                FONT_SIZE: 10
            },
            COST: {
                COLOR: '#ffd700',
                FONT_WEIGHT: 'bold',
                MARGIN_TOP: 2,
                INSUFFICIENT_COLOR: '#ff6b6b'
            },
            HOVER: {
                TRANSFORM: 'translateY(-3px)',
                SHADOW: '0 8px 20px rgba(102, 126, 234, 0.4)'
            },
            // 按钮图片配置
            BUTTON_ICON: {
                WIDTH: 40,
                HEIGHT: 40,
                POSITION: 'absolute',
                TOP: 100,
                RIGHT: 10
                
            }
            MAPS: {
                1: {
                  NAME: "热带岛屿",
                  BACKGROUND: "light1",
                  MONSTER_IMAGES: ["monster1.png", "xiao.png"]
                },
                2: {
                  NAME: "冰雪战场",
                  BACKGROUND: "light2",
                  MONSTER_IMAGES: ["monster1.png", "xiao.png"]
                }
              }
              
        }
    }
};
