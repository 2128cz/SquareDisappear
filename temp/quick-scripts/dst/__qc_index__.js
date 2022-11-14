
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
require('./assets/scripts/base/class/ActorClass');
require('./assets/scripts/base/class/DevelopersToolClass');
require('./assets/scripts/base/class/DevelopersToolGlobal');
require('./assets/scripts/base/class/DiologClass');
require('./assets/scripts/base/class/DynamicPanelClass');
require('./assets/scripts/base/class/GridAdsorb');
require('./assets/scripts/base/class/PanelTool');
require('./assets/scripts/base/class/PawnClass');
require('./assets/scripts/base/class/PawnMovement');
require('./assets/scripts/base/class/RigorousLibrary');
require('./assets/scripts/base/class/RigorousType');
require('./assets/scripts/base/tool/NoRootTree');
require('./assets/scripts/game/GameLevel');
require('./assets/scripts/game/block');
require('./assets/scripts/widget/Botton_LoadEff');
require('./assets/scripts/widget/GameUI');

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