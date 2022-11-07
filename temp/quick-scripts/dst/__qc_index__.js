
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/load/Loading');
require('./assets/scripts/BombEffectSc');
require('./assets/scripts/BrickSc');
require('./assets/scripts/CheckOverSc');
require('./assets/scripts/DelayDelSc');
require('./assets/scripts/GameOverSc');
require('./assets/scripts/GameSc');
require('./assets/scripts/GameTouchSc');
require('./assets/scripts/IceEffectSc');
require('./assets/scripts/IconCooldownSc');
require('./assets/scripts/MessageBoxSc');
require('./assets/scripts/Msger');
require('./assets/scripts/PropUISc');
require('./assets/scripts/SceneManagerSc');
require('./assets/scripts/SoundConctrollerSc');
require('./assets/scripts/SplinteringConctrollerSc');
require('./assets/scripts/StartSc');
require('./assets/scripts/WXManager');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();