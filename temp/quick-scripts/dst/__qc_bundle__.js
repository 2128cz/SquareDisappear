
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
require('./assets/scripts/base/class/PawnClass');
require('./assets/scripts/base/core/RigorousLibrary');
require('./assets/scripts/base/core/RigorousType');
require('./assets/scripts/base/core/UObject');
require('./assets/scripts/base/core/UObjectBaseUtility');
require('./assets/scripts/base/tool/EventReflect');
require('./assets/scripts/base/tool/GridAdsorb');
require('./assets/scripts/base/tool/NoRootTree');
require('./assets/scripts/base/tool/PanelTool');
require('./assets/scripts/base/tool/PawnMovement');
require('./assets/scripts/game/Block');
require('./assets/scripts/game/BlockGroup');
require('./assets/scripts/game/GL');
require('./assets/scripts/game/GameLevel');
require('./assets/scripts/game/Setting');
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3364aqqOgFIq4CCAllydcf6', 'DevelopersToolGlobal');
// scripts/base/class/DevelopersToolGlobal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAnimPhySimSpace = exports.EWidgetCoordinateSpace = exports.ESceneCoordinateSpace = exports.panelType = exports.mathMacro = exports.DevelopersToolGlobal = void 0;
// import { DevelopersToolGlobal as ccvv } from './DevelopersToolGlobal';
var DevelopersToolGlobal = /** @class */ (function () {
    function DevelopersToolGlobal() {
    }
    Object.defineProperty(DevelopersToolGlobal, "warehouse", {
        get: function () {
            this._Global_Warehouse = this._Global_Warehouse || {};
            return this._Global_Warehouse;
        },
        set: function (value) {
            this._Global_Warehouse = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "loadResourcescatalog", {
        /**
         * 加载资源目录
         */
        get: function () {
            return {
                // "url": { type: res type, url: "save url" },
                //加载音乐音效资源
                "sounds": { type: cc.AudioClip, url: "sounds" },
                //加载预制件资源
                "prefabs": { type: cc.Prefab, url: "prefabs" },
                //加载图集资源
                // "atlas": { type: cc.SpriteAtlas, url: "atlas" },
                //加载单个精灵资源
                "frames": { type: cc.SpriteFrame, url: "frames" },
                //加载分享图
                "share": { type: cc.SpriteFrame, url: "share" },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "tool", {
        get: function () {
            this._Global_Tool = this._Global_Tool || {};
            return this._Global_Tool;
        },
        set: function (value) {
            this._Global_Tool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "other", {
        get: function () {
            this._Global_Other = this._Global_Other || {};
            return this._Global_Other;
        },
        set: function (value) {
            this._Global_Other = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "layers", {
        /**
         * 获取所有层
         */
        get: function () {
            this._Global_GenralLayer = this._Global_GenralLayer || {};
            return this._Global_GenralLayer;
        },
        /**
         * 设置所有层
         */
        set: function (value) {
            this._Global_GenralLayer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "layer", {
        /**
         * 获取底层
         */
        get: function () {
            return this.layers[0];
        },
        /**
         * 添加的新节点
         */
        set: function (value) {
            var key = Object.keys(this._Global_GenralLayer || {}).length;
            this.layers[key.toString()] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "scripts", {
        get: function () {
            this._Global_OpenScript = this._Global_OpenScript || {};
            return this._Global_OpenScript;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "script", {
        set: function (value) {
            if (!value)
                return;
            var key;
            if (typeof value === 'object') {
                key = value.name;
                if (!this._OpenScript_FristName)
                    this._OpenScript_FristName = key;
            }
            else {
                key = (Object.keys(this._Global_OpenScript || {}).length).toString();
            }
            this.scripts[key] = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 清空脚本
     */
    DevelopersToolGlobal.script_Clean = function () {
        this._OpenScript_FristName = null;
        this._Global_OpenScript = {};
    };
    Object.defineProperty(DevelopersToolGlobal, "scriptName", {
        /**
         * 获得所有脚本名称
         */
        get: function () {
            if (!this._Global_OpenScript)
                return null;
            return Object.keys(this._Global_OpenScript);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "fristScript", {
        /**
         * 获取第一个加入的脚本
         */
        get: function () {
            return this._Global_OpenScript[this._OpenScript_FristName];
        },
        enumerable: false,
        configurable: true
    });
    DevelopersToolGlobal.getName = function (inst) {
        return inst.name + inst['_id'].replace(/\./g, "");
    };
    Object.defineProperty(DevelopersToolGlobal, "instances", {
        /**
         * 获取全部实例
         */
        get: function () {
            this._Global_Instance = this._Global_Instance || {};
            return this._Global_Instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "instance", {
        /**
         * 添加实例，用实例的名称与ID作键名
         */
        set: function (value) {
            this.instance[this.getName(value)] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "instance_remove", {
        /**
         * 删除实例
         * 如果未指定有效值则为清除
         */
        set: function (value) {
            if (!value)
                this._Global_Instance = {};
            else
                this.instance[this.getName(value)] = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 根据名称获取实例
     * 如果没有使用自定义名称，则默认用实例ID作为名称，这可能与任何名称常量不符
     */
    DevelopersToolGlobal.getInstanceByName = function (name) {
        return this._Global_Instance[name];
    };
    /**
     * 根据名称设置实例
     */
    DevelopersToolGlobal.setInstanceByName = function (name, inst) {
        this._Global_Instance[name] = inst;
    };
    Object.defineProperty(DevelopersToolGlobal, "tuple", {
        /**
         * 获取元组
         */
        get: function () {
            return this._Global_Tuple;
        },
        /**
         * 元组加入一个项目
         * 如果加入一个无效的值，比如布尔，undefined，unll，将清空这个元组
         * 加入一个空数组或是空对象是有效的，所以会作为元组的一个值加入
         */
        set: function (value) {
            if (!value || typeof value == 'boolean')
                this._Global_Tuple = [];
            this._Global_Tuple.push(value);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 元组加入独有项目
     * 返回这个项目是否存在
     */
    DevelopersToolGlobal.tupleOnly = function (value) {
        if (this._Global_Tuple.indexOf(value))
            return true;
        else
            this.tuple = value;
        return false;
    };
    Object.defineProperty(DevelopersToolGlobal, "tuple_remove", {
        /**
         * 移除元组一个项目
         */
        set: function (value) {
            this._Global_Tuple.filter(function (element, index, array) { element != value; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 仓库全局实例
     * 存放load时载入的数据
     */
    DevelopersToolGlobal._Global_Warehouse = null;
    /**
     * 工具全局实例
     * 可以注入其他工具类
     */
    DevelopersToolGlobal._Global_Tool = null;
    /**
     * 杂项全局实例
     * 可以注入其他项目
     */
    DevelopersToolGlobal._Global_Other = null;
    /**
     * 游戏基本层全局实例
     * 只能注入cc.Node
     */
    DevelopersToolGlobal._Global_GenralLayer = null;
    /**
     * 游戏基本层全局脚本
     * 只能注入cc.component，不过实际上并没有进行限制
     */
    DevelopersToolGlobal._Global_OpenScript = null;
    DevelopersToolGlobal._OpenScript_FristName = null;
    /**
     * 全局实例
     */
    DevelopersToolGlobal._Global_Instance = {};
    /**
     * 全局元组
     */
    DevelopersToolGlobal._Global_Tuple = [];
    return DevelopersToolGlobal;
}());
exports.DevelopersToolGlobal = DevelopersToolGlobal;
// import { mathMacro as mm } from '../base/class/DevelopersToolGlobal';
var mathMacro = /** @class */ (function () {
    function mathMacro() {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        this.mnum = {};
        this._IsMat = false;
        var isNumber = function (value) { return typeof value === 'number' && !isNaN(value); };
        if (!num[0]) {
            this.mnum['x'] = 0;
            this.mnum['y'] = 0;
            this.mnum['z'] = 0;
            this.mnum['w'] = 0;
        }
        else if (num[0].x) {
            this.mnum['x'] = isNumber(num[0].x) ? num[0].x : 0;
            this.mnum['y'] = isNumber(num[0].y) ? num[0].y : 0;
            this.mnum['z'] = isNumber(num[0].z) ? num[0].z : 0;
            this.mnum['w'] = isNumber(num[0].w) ? num[0].w : 0;
        }
        else if (num[0][0]) {
            this.mnum['x'] = isNumber(num[0][0]) ? num[0][0] : 0;
            this.mnum['y'] = isNumber(num[0][1]) ? num[0][1] : 0;
            this.mnum['z'] = isNumber(num[0][2]) ? num[0][2] : 0;
            this.mnum['w'] = isNumber(num[0][3]) ? num[0][3] : 0;
        }
        else if (num[0] instanceof cc.Size) {
            this.mnum['x'] = isNumber(num[0].width) ? num[0].width : 0;
            this.mnum['y'] = isNumber(num[0].height) ? num[0].height : 0;
        }
        else if (num[0] instanceof cc.Color) {
            this.mnum['x'] = isNumber(num[0].r) ? num[0].r : 0;
            this.mnum['y'] = isNumber(num[0].g) ? num[0].g : 0;
            this.mnum['z'] = isNumber(num[0].b) ? num[0].b : 0;
            this.mnum['w'] = isNumber(num[0].a) ? num[0].a : 0;
        }
        else if (num[0] instanceof cc.Mat3) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
        }
        else if (num[0] instanceof cc.Mat4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
            this.mnum['m09'] = num[0]['m09'];
            this.mnum['m10'] = num[0]['m10'];
            this.mnum['m11'] = num[0]['m11'];
            this.mnum['m12'] = num[0]['m12'];
            this.mnum['m13'] = num[0]['m13'];
            this.mnum['m14'] = num[0]['m14'];
            this.mnum['m15'] = num[0]['m15'];
        }
        else if (num.length <= 4) {
            this.mnum['x'] = num[0];
            this.mnum['y'] = num[1];
            this.mnum['z'] = num[2];
            this.mnum['w'] = num[3];
        }
        else if (num.length >= 4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0];
            this.mnum['m01'] = num[1];
            this.mnum['m02'] = num[2];
            this.mnum['m03'] = num[3];
            this.mnum['m04'] = num[4];
            this.mnum['m05'] = num[5];
            this.mnum['m06'] = num[6];
            this.mnum['m07'] = num[7];
            this.mnum['m08'] = num[8];
            this.mnum['m09'] = num[9];
            this.mnum['m10'] = num[10];
            this.mnum['m11'] = num[11];
            this.mnum['m12'] = num[12];
            this.mnum['m13'] = num[13];
            this.mnum['m14'] = num[14];
            this.mnum['m15'] = num[15];
        }
        // let out = { lrc: '2128cz' };
        // if (num[0] && typeof num[0] === 'object') { out['m00'] = isNumber(num[0].x) ? num[0].x : num[0].x || (isNumber(num[0][0]) ? num[0][0] : num[0].width || num[0].r || (isNumber(num[0]) ? num[0] : 0)); out['m01'] = isNumber(num[0].y) ? num[0].y : num[0].y || (isNumber(num[0][1]) ? num[0][1] : num[0].height || num[0].g || (isNumber(num[0]) ? num[0] : 0)); out['m02'] = isNumber(num[0].z) ? num[0].z : num[0].z || (isNumber(num[0][2]) ? num[0][2] : num[0].b || (isNumber(num[0]) ? num[0] : 0)); out['m03'] = isNumber(num[0].w) ? num[0].w : num[0].w || (isNumber(num[0][3]) ? num[0][3] : num[0].a || (isNumber(num[0]) ? num[0] : 0)); }
        // else { out['m00'] = num[0]; out['m01'] = num[1]; out['m02'] = num[2]; out['m03'] = num[3]; out['m04'] = num[4]; out['m05'] = num[5]; out['m06'] = num[6]; out['m07'] = num[7]; out['m08'] = num[8]; out['m09'] = num[9]; out['m10'] = num[10]; out['m11'] = num[11]; out['m12'] = num[12]; out['m13'] = num[13]; out['m14'] = num[14]; out['m15'] = num[15]; }
        // this.mnum = out;
    }
    Object.defineProperty(mathMacro, "random_uint2", {
        // 返回随机的整数，范围在[0, x)
        get: function () { return Math.floor(Math.random() * 2); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint3", {
        get: function () { return Math.floor(Math.random() * 3); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint4", {
        get: function () { return Math.floor(Math.random() * 4); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint5", {
        get: function () { return Math.floor(Math.random() * 5); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint6", {
        get: function () { return Math.floor(Math.random() * 6); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint7", {
        get: function () { return Math.floor(Math.random() * 7); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint8", {
        get: function () { return Math.floor(Math.random() * 8); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint9", {
        get: function () { return Math.floor(Math.random() * 9); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint1", {
        get: function () { return Math.floor(Math.random() * 10); },
        enumerable: false,
        configurable: true
    });
    /**
     * 一维限制在范围中
     * @param {number} num 输入值
     * @param {number} size 范围
     * @param {number} align 对齐位置，默认0表示在范围的中间，-1表示与左对齐，最小为0，最大为size，1相反
     * @param {number} offset 范围偏移
     * @returns 返回限制后的值
     */
    mathMacro.clamp = function (num, size, align, offset) {
        var sature = ((align || 0) + 1) / 2;
        var min = 0 - (sature * size) + (offset || 0);
        var max = (1 - sature) * size + (offset || 0);
        return Math.max(Math.min(num, max), min);
    };
    Object.defineProperty(mathMacro.prototype, "isVec", {
        get: function () { return !this._IsMat; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "x", {
        get: function () { return this.mnum['x']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "y", {
        get: function () { return this.mnum['y']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "z", {
        get: function () { return this.mnum['z']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "w", {
        get: function () { return this.mnum['w']; },
        enumerable: false,
        configurable: true
    });
    /**
     * 判断是否在盒体范围内
     * @param {*} origin 盒体坐标原点
     * @param {*} extent 盒体范围，这是盒体的各轴半径
     * @return
     */
    mathMacro.prototype.isInBox2 = function (origin, extent) {
        if (this.isVec) {
            var vec = mathMacro.meanwhileAll(function (a) {
                var b = a[0] - a[1];
                return b >= -a[2] && b <= a[2];
            }, this.mnum, origin, extent);
            return vec['x'] && vec['y'];
        }
        return false;
    };
    /**
     * 模取正
     */
    mathMacro.PMod = function (a, b) {
        var bb = Math.abs(b);
        var aa = a % bb;
        var out = a < 0 ? (1 - Math.abs(aa) / bb) * bb % bb : aa;
        return isNaN(out) ? 0 : out;
    };
    /**
     * 快捷定义
     * 但是就不支持逐个定义了
     * @param num
     * @returns
     */
    mathMacro.v = function (num) {
        return new mathMacro(num);
    };
    mathMacro.meanwhileAll = function (func) {
        var obj = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            obj[_i - 1] = arguments[_i];
        }
        var out = {};
        Object.keys(obj[0]).forEach(function (element) {
            var array = [];
            for (var index = 0; index < obj.length; index++) {
                array.push(obj[index][element]);
            }
            ;
            out[element] = func(array, obj.length);
        });
        return out;
    };
    return mathMacro;
}());
exports.mathMacro = mathMacro;
/**
 * 全局枚举
 * 对象可移动性
 */
var panelType;
(function (panelType) {
    panelType[panelType["staitc"] = 0] = "staitc";
    panelType[panelType["stationary"] = 1] = "stationary";
    panelType[panelType["Moveable"] = 2] = "Moveable";
})(panelType = exports.panelType || (exports.panelType = {}));
/**
 * 全局枚举
 * 场景坐标空间枚举
 */
var ESceneCoordinateSpace;
(function (ESceneCoordinateSpace) {
    ESceneCoordinateSpace[ESceneCoordinateSpace["simulation"] = 0] = "simulation";
    ESceneCoordinateSpace[ESceneCoordinateSpace["world"] = 1] = "world";
    ESceneCoordinateSpace[ESceneCoordinateSpace["local"] = 2] = "local";
})(ESceneCoordinateSpace = exports.ESceneCoordinateSpace || (exports.ESceneCoordinateSpace = {}));
/**
 * 全局枚举
 * 控件坐标空间枚举
 */
var EWidgetCoordinateSpace;
(function (EWidgetCoordinateSpace) {
    EWidgetCoordinateSpace[EWidgetCoordinateSpace["screen"] = 0] = "screen";
    EWidgetCoordinateSpace[EWidgetCoordinateSpace["scene"] = 1] = "scene";
})(EWidgetCoordinateSpace = exports.EWidgetCoordinateSpace || (exports.EWidgetCoordinateSpace = {}));
/**
 * 全局枚举
 * 动画物理空间枚举
 */
var EAnimPhySimSpace;
(function (EAnimPhySimSpace) {
    EAnimPhySimSpace[EAnimPhySimSpace["component"] = 0] = "component";
    EAnimPhySimSpace[EAnimPhySimSpace["actor"] = 1] = "actor";
    EAnimPhySimSpace[EAnimPhySimSpace["scene"] = 2] = "scene";
    EAnimPhySimSpace[EAnimPhySimSpace["relativeRoot"] = 3] = "relativeRoot";
    EAnimPhySimSpace[EAnimPhySimSpace["relativeNode"] = 4] = "relativeNode";
})(EAnimPhySimSpace = exports.EAnimPhySimSpace || (exports.EAnimPhySimSpace = {}));
// 测试语句，可以在控制台中能够看到这里
cc["vv"] = cc["vv"] || DevelopersToolGlobal;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSx5RUFBeUU7QUFDekU7SUFBQTtJQW1PQSxDQUFDO0lBM05HLHNCQUFrQixpQ0FBUzthQUEzQjtZQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUE0QixLQUFnQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBUUQsc0JBQWtCLDRDQUFvQjtRQUh0Qzs7V0FFRzthQUNIO1lBQ0ksT0FBTztnQkFDSCw4Q0FBOEM7Z0JBQzlDLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUM5QyxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsVUFBVTtnQkFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUNqRCxPQUFPO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7YUFDbEQsQ0FBQTtRQUNMLENBQUM7OztPQUFBO0lBVUQsc0JBQWtCLDRCQUFJO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FB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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFDSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7YUFDSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO2FBQ0ksSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMz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QU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDLENBQUE7SUF1Q0wsZ0JBQUM7Q0F6UEQsQUF5UEMsSUFBQTtBQXpQWSw4QkFBUztBQTBQdEI7OztHQUdHO0FBQ0gsSUFBWSxTQUVYO0FBRkQsV0FBWSxTQUFTO0lBQ2pCLDZDQUFNLENBQUE7SUFBRSxxREFBVSxDQUFBO0lBQUUsaURBQVEsQ0FBQTtBQUNoQyxDQUFDLEVBRlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFFcEI7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLHFCQUVYO0FBRkQsV0FBWSxxQkFBcUI7SUFDN0IsNkVBQVUsQ0FBQTtJQUFFLG1FQUFLLENBQUE7SUFBRSxtRUFBSyxDQUFBO0FBQzVCLENBQUMsRUFGVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUVoQztBQUNEOzs7R0FHRztBQUNILElBQVksc0JBRVg7QUFGRCxXQUFZLHNCQUFzQjtJQUM5Qix1RUFBTSxDQUFBO0lBQUUscUVBQUssQ0FBQTtBQUNqQixDQUFDLEVBRlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFFakM7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIsaUVBQVMsQ0FBQTtJQUFFLHlEQUFLLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdUVBQVksQ0FBQTtJQUFFLHVFQUFZLENBQUE7QUFDdkQsQ0FBQyxFQUZXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRTNCO0FBSUQscUJBQXFCO0FBQ3JCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQW9CLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogY2MuTm9kZSB8XHJcbiAgICBjYy5UaWxlZE1hcCB8XHJcbiAgICBjYy5QYXJ0aWNsZVN5c3RlbSB8XHJcbiAgICBjYy5WaWRlb1BsYXllciB8XHJcbiAgICBjYy5XZWJWaWV3IHxcclxuICAgIGNjLlNwcml0ZSB8XHJcbiAgICBjYy5SZW5kZXJUZXh0dXJlIHxcclxuICAgIGNjLlRleHR1cmUyRCB8XHJcbiAgICBjYy5QcmVmYWIgfFxyXG4gICAgY2MuQXNzZXRNYW5hZ2VyIHwge307XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJVG9vbEdsb2JhbEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJT3RoZXJHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSWdhbmVyYWxMYXllckludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBjYy5Ob2RlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW9wZW5TY3JpcHRJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSWluc3RhbmNlSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IG51bWJlcl06IGNjLkNvbXBvbmVudCB8IGNjLk5vZGU7XHJcbn1cclxuLy8gaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgY2xhc3MgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuT5bqT5YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlrZjmlL5sb2Fk5pe26L295YWl55qE5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9XYXJlaG91c2U6IElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHdhcmVob3VzZSgpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlID0gdGhpcy5fR2xvYmFsX1dhcmVob3VzZSB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1dhcmVob3VzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB3YXJlaG91c2UodmFsdWU6IElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kOebruW9lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2FkUmVzb3VyY2VzY2F0YWxvZygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBcInVybFwiOiB7IHR5cGU6IHJlcyB0eXBlLCB1cmw6IFwic2F2ZSB1cmxcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9vemfs+S5kOmfs+aViOi1hOa6kFxyXG4gICAgICAgICAgICBcInNvdW5kc1wiOiB7IHR5cGU6IGNjLkF1ZGlvQ2xpcCwgdXJsOiBcInNvdW5kc1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L296aKE5Yi25Lu26LWE5rqQXHJcbiAgICAgICAgICAgIFwicHJlZmFic1wiOiB7IHR5cGU6IGNjLlByZWZhYiwgdXJsOiBcInByZWZhYnNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWbvumbhui1hOa6kFxyXG4gICAgICAgICAgICAvLyBcImF0bGFzXCI6IHsgdHlwZTogY2MuU3ByaXRlQXRsYXMsIHVybDogXCJhdGxhc1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L295Y2V5Liq57K+54G16LWE5rqQXHJcbiAgICAgICAgICAgIFwiZnJhbWVzXCI6IHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHVybDogXCJmcmFtZXNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWIhuS6q+WbvlxyXG4gICAgICAgICAgICBcInNoYXJlXCI6IHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHVybDogXCJzaGFyZVwiIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6XlhbflhajlsYDlrp7kvotcclxuICAgICAqIOWPr+S7peazqOWFpeWFtuS7luW3peWFt+exu1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfVG9vbDogSVRvb2xHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRvb2woKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1Rvb2wgPSB0aGlzLl9HbG9iYWxfVG9vbCB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1Rvb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB0b29sKHZhbHVlOiBJVG9vbEdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9Ub29sID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOadgumhueWFqOWxgOWunuS+i1xyXG4gICAgICog5Y+v5Lul5rOo5YWl5YW25LuW6aG555uuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9PdGhlcjogSU90aGVyR2xvYmFsSW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBvdGhlcigpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfT3RoZXIgPSB0aGlzLl9HbG9iYWxfT3RoZXIgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PdGhlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG90aGVyKHZhbHVlOiBJT3RoZXJHbG9iYWxJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfT3RoZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Z+65pys5bGC5YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlj6rog73ms6jlhaVjYy5Ob2RlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9HZW5yYWxMYXllcjogSWdhbmVyYWxMYXllckludGVyZmFjZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOacieWxglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsYXllcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX0dlbnJhbExheWVyID0gdGhpcy5fR2xvYmFsX0dlbnJhbExheWVyIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaJgOacieWxglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBsYXllcnModmFsdWU6IElnYW5lcmFsTGF5ZXJJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5bqV5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyc1swXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg55qE5paw6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxheWVyKHZhbHVlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllciB8fCB7fSkubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2tleS50b1N0cmluZygpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDohJrmnKxcclxuICAgICAqIOWPquiDveazqOWFpWNjLmNvbXBvbmVudO+8jOS4jei/h+WunumZheS4iuW5tuayoeaciei/m+ihjOmZkOWItlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfT3BlblNjcmlwdDogSW9wZW5TY3JpcHRJbnRlcmZhY2UgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfT3BlblNjcmlwdF9GcmlzdE5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JpcHRzKCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NyaXB0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBrZXkgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX09wZW5TY3JpcHRfRnJpc3ROYW1lKSB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGtleSA9IChPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCB8fCB7fSkubGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcmlwdHNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrohJrmnKxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzY3JpcHRfQ2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+aJgOacieiEmuacrOWQjeensFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JpcHROYW1lKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluesrOS4gOS4quWKoOWFpeeahOiEmuacrFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBmcmlzdFNjcmlwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHRbdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWVdO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX0luc3RhbmNlID0gPElpbnN0YW5jZUludGVyZmFjZT57fTtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2V0TmFtZShpbnN0OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3QubmFtZSArIGluc3RbJ19pZCddLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWo6YOo5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlcygpOiBJaW5zdGFuY2VJbnRlcmZhY2Uge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9JbnN0YW5jZSA9IHRoaXMuX0dsb2JhbF9JbnN0YW5jZSB8fCA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfSW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWunuS+i++8jOeUqOWunuS+i+eahOWQjeensOS4jklE5L2c6ZSu5ZCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGluc3RhbmNlKHZhbHVlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZVt0aGlzLmdldE5hbWUodmFsdWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTlrp7kvotcclxuICAgICAqIOWmguaenOacquaMh+WumuacieaViOWAvOWImeS4uua4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBpbnN0YW5jZV9yZW1vdmUodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB0aGlzLl9HbG9iYWxfSW5zdGFuY2UgPSA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZVt0aGlzLmdldE5hbWUodmFsdWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7lkI3np7Dojrflj5blrp7kvosgXHJcbiAgICAgKiDlpoLmnpzmsqHmnInkvb/nlKjoh6rlrprkuYnlkI3np7DvvIzliJnpu5jorqTnlKjlrp7kvotJROS9nOS4uuWQjeensO+8jOi/meWPr+iDveS4juS7u+S9leWQjeensOW4uOmHj+S4jeesplxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlQnlOYW1lKG5hbWU6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfSW5zdGFuY2VbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOagueaNruWQjeensOiuvue9ruWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlQnlOYW1lKG5hbWU6IHN0cmluZyB8IG51bWJlciwgaW5zdDogY2MuQ29tcG9uZW50IHwgY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9JbnN0YW5jZVtuYW1lXSA9IGluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlhYPnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfR2xvYmFsX1R1cGxlID0gW107XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFg+e7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB0dXBsZSgpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9UdXBsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWD57uE5Yqg5YWl5LiA5Liq6aG555uuICBcclxuICAgICAqIOWmguaenOWKoOWFpeS4gOS4quaXoOaViOeahOWAvO+8jOavlOWmguW4g+WwlO+8jHVuZGVmaW5lZO+8jHVubGzvvIzlsIbmuIXnqbrov5nkuKrlhYPnu4QgIFxyXG4gICAgICog5Yqg5YWl5LiA5Liq56m65pWw57uE5oiW5piv56m65a+56LGh5piv5pyJ5pWI55qE77yM5omA5Lul5Lya5L2c5Li65YWD57uE55qE5LiA5Liq5YC85Yqg5YWlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHR1cGxlKHZhbHVlOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PSAnYm9vbGVhbicpIHRoaXMuX0dsb2JhbF9UdXBsZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9UdXBsZS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWD57uE5Yqg5YWl54us5pyJ6aG555uuXHJcbiAgICAgKiDov5Tlm57ov5nkuKrpobnnm67mmK/lkKblrZjlnKhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0dXBsZU9ubHkodmFsdWU6IG9iamVjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9HbG9iYWxfVHVwbGUuaW5kZXhPZih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50dXBsZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5YWD57uE5LiA5Liq6aG555uuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHR1cGxlX3JlbW92ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9UdXBsZS5maWx0ZXIoKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4geyBlbGVtZW50ICE9IHZhbHVlIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIGltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgY2xhc3MgbWF0aE1hY3JvIHtcclxuICAgIC8vIOi/lOWbnumaj+acuueahOaVtOaVsO+8jOiMg+WbtOWcqFswLCB4KVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQyKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQzKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ0KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ1KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ2KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ3KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ4KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ5KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQxKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IH1cclxuICAgIC8qKlxyXG4gICAgICog5LiA57u06ZmQ5Yi25Zyo6IyD5Zu05LitXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIOi+k+WFpeWAvFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUg6IyD5Zu0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYWxpZ24g5a+56b2Q5L2N572u77yM6buY6K6kMOihqOekuuWcqOiMg+WbtOeahOS4remXtO+8jC0x6KGo56S65LiO5bem5a+56b2Q77yM5pyA5bCP5Li6MO+8jOacgOWkp+S4unNpemXvvIwx55u45Y+NXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IOiMg+WbtOWBj+enu1xyXG4gICAgICogQHJldHVybnMg6L+U5Zue6ZmQ5Yi25ZCO55qE5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAobnVtLCBzaXplLCBhbGlnbiwgb2Zmc2V0KSB7XHJcbiAgICAgICAgbGV0IHNhdHVyZSA9ICgoYWxpZ24gfHwgMCkgKyAxKSAvIDI7XHJcbiAgICAgICAgbGV0IG1pbiA9IDAgLSAoc2F0dXJlICogc2l6ZSkgKyAob2Zmc2V0IHx8IDApO1xyXG4gICAgICAgIGxldCBtYXggPSAoMSAtIHNhdHVyZSkgKiBzaXplICsgKG9mZnNldCB8fCAwKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obnVtLCBtYXgpLCBtaW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAw55+i6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIFJHQkEgY29sb3JzLjxici8+XHJcbiAgICAgKiBFYWNoIGNvbG9yIGNvbXBvbmVudCBpcyBhbiBpbnRlZ2VyIHZhbHVlIHdpdGggYSByYW5nZSBmcm9tIDAgdG8gMjU1Ljxici8+XHJcbiAgICAgKiBAemgg6YCa6L+HIFJlZOOAgUdyZWVu44CBQmx1ZSDpopzoibLpgJrpgZPooajnpLrpopzoibLvvIzlubbpgJrov4cgQWxwaGEg6YCa6YGT6KGo56S65LiN6YCP5piO5bqm44CCPGJyLz5cclxuICAgICAqIOavj+S4qumAmumBk+mDveS4uuWPluWAvOiMg+WbtCBbMCwgMjU1XSDnmoTmlbTmlbDjgII8YnIvPlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLkNvbG9yKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gTWF0aGVtYXRpY2FsIDN4MyBtYXRyaXguXHJcbiAgICAgKiBAemgg6KGo56S65LiJ57u077yIM3gz77yJ55+p6Zi144CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuTWF0MylcclxuICAgIC8qKlxyXG4gICAgICogQGVuIE1hdGhlbWF0aWNhbCA0eDQgbWF0cml4LlxyXG4gICAgICogQHpoIOihqOekuuWbm+e7tO+8iDR4NO+8ieefqemYteOAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLk1hdDQpXHJcbiAgICAvKipcclxuICAgICAqIEBlblxyXG4gICAgICogQSAyRCByZWN0YW5nbGUgZGVmaW5lZCBieSB4LCB5IHBvc2l0aW9uIGFuZCB3aWR0aCwgaGVpZ2h0LlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDovbTlr7npvZDnn6nlvaLjgIJcclxuICAgICAqIOefqeW9ouWGheeahOaJgOacieeCuemDveWkp+S6juetieS6juefqeW9oueahOacgOWwj+eCuSAoeE1pbiwgeU1pbikg5bm25LiU5bCP5LqO562J5LqO55+p5b2i55qE5pyA5aSn54K5ICh4TWF4LCB5TWF4KeOAglxyXG4gICAgICog55+p5b2i55qE5a695bqm5a6a5LmJ5Li6IHhNYXggLSB4TWlu77yb6auY5bqm5a6a5LmJ5Li6IHlNYXggLSB5TWlu44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuUmVjdClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIHF1YXRlcm5pb25cclxuICAgICAqIEB6aCDlm5vlhYPmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5RdWF0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gVHdvIGRpbWVuc2lvbmFsIHNpemUgdHlwZSByZXByZXNlbnRpbmcgdGhlIHdpZHRoIGFuZCBoZWlnaHQuXHJcbiAgICAgKiBAemgg5LqM57u05bC65a+444CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuU2l6ZSlcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIDJEIHZlY3RvcnMgYW5kIHBvaW50cy5cclxuICAgICAqIEB6aCDkuoznu7TlkJHph4/jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5WZWMyKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgM0QgdmVjdG9ycyBhbmQgcG9pbnRzLlxyXG4gICAgICogQHpoIOS4iee7tOWQkemHj+OAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlZlYzMpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBSZXByZXNlbnRhdGlvbiBvZiBmb3VyLWRpbWVuc2lvbmFsIHZlY3RvcnMuXHJcbiAgICAgKiBAemgg5Zub57u05ZCR6YeP44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuVmVjNClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIG9iamVjdC5cclxuICAgICAqIEB6aCDljIXlkKt4LHkseix3562J5bGe5oCn5ZCN55qE5a+56LGh44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogb2JqZWN0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gYXJyYXkuXHJcbiAgICAgKiBAemgg5pWw57uE44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogbnVtYmVyW10pXHJcbiAgICAvKipcclxuICAgICAqIEBlbiA6KVxyXG4gICAgICogQHpoIOmAkOS4quWumuS5ieWTpu+8jOS6suOAglxyXG4gICAgICovXHJcbiAgICAvLyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyLCB3PzogbnVtYmVyKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gdGhpcyBpcyBnb25uYS4uLiBJcyB0aGlzIHN1cHBvc2VkIHRvLi4uIERlZmluZSBvbmUgYnkgb25lISA/IC4gT2gsIGRvbid0IHdvcnJ5IGFib3V0IG1lLiBJIGNvcGllZCBpdCBmcm9tIGFuIG9mZmljaWFsIGRvY3VtZW50IDtQXHJcbiAgICAgKiBAemgg6YCQ5Liq5a6a5LmJ77yM5Y2D5LiH5LiN6KaB6L+Z5LmI5YGa77yM5L2G5aaC5p6c5L2g5YGa5LqG77yM6YKj5bCx5Lya5Y+R55Sf5b6I5Y+v5oCV55qE5LqL5oOF77yM5q+U5aaC6K+0Li4u5Y+Y5oiQ55+p6Zi1XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG0wMD86IG51bWJlciwgbTAxPzogbnVtYmVyLCBtMDI/OiBudW1iZXIsIG0wMz86IG51bWJlciwgbTEwPzogbnVtYmVyLCBtMTE/OiBudW1iZXIsIG0xMj86IG51bWJlciwgbTEzPzogbnVtYmVyLCBtMjA/OiBudW1iZXIsIG0yMT86IG51bWJlciwgbTIyPzogbnVtYmVyLCBtMjM/OiBudW1iZXIsIG0zMD86IG51bWJlciwgbTMxPzogbnVtYmVyLCBtMzI/OiBudW1iZXIsIG0zMz86IG51bWJlciwpXHJcbiAgICBjb25zdHJ1Y3RvciguLi5udW0pIHtcclxuICAgICAgICBsZXQgaXNOdW1iZXIgPSAodmFsdWUpID0+IHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKTsgfVxyXG4gICAgICAgIGlmICghbnVtWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsndyddID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdLngpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ueCkgPyBudW1bMF0ueCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLnkpID8gbnVtWzBdLnkgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSBpc051bWJlcihudW1bMF0udykgPyBudW1bMF0udyA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXVswXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3knXSA9IGlzTnVtYmVyKG51bVswXVsxXSkgPyBudW1bMF1bMV0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5TaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gaXNOdW1iZXIobnVtWzBdLndpZHRoKSA/IG51bVswXS53aWR0aCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLmhlaWdodCkgPyBudW1bMF0uaGVpZ2h0IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdIGluc3RhbmNlb2YgY2MuQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ucikgPyBudW1bMF0uciA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLmcpID8gbnVtWzBdLmcgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXS5iKSA/IG51bVswXS5iIDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSBpc051bWJlcihudW1bMF0uYSkgPyBudW1bMF0uYSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXSBpbnN0YW5jZW9mIGNjLk1hdDMpIHtcclxuICAgICAgICAgICAgdGhpcy5fSXNNYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMCddID0gbnVtWzBdWydtMDAnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVswXVsnbTAxJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAyJ10gPSBudW1bMF1bJ20wMiddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMyddID0gbnVtWzBdWydtMDMnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVswXVsnbTA0J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA1J10gPSBudW1bMF1bJ20wNSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNiddID0gbnVtWzBdWydtMDYnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVswXVsnbTA3J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA4J10gPSBudW1bMF1bJ20wOCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5NYXQ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0lzTWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDAnXSA9IG51bVswXVsnbTAwJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAxJ10gPSBudW1bMF1bJ20wMSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMiddID0gbnVtWzBdWydtMDInXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDMnXSA9IG51bVswXVsnbTAzJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA0J10gPSBudW1bMF1bJ20wNCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNSddID0gbnVtWzBdWydtMDUnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDYnXSA9IG51bVswXVsnbTA2J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA3J10gPSBudW1bMF1bJ20wNyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOCddID0gbnVtWzBdWydtMDgnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDknXSA9IG51bVswXVsnbTA5J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEwJ10gPSBudW1bMF1bJ20xMCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMSddID0gbnVtWzBdWydtMTEnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTInXSA9IG51bVswXVsnbTEyJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEzJ10gPSBudW1bMF1bJ20xMyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNCddID0gbnVtWzBdWydtMTQnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTUnXSA9IG51bVswXVsnbTE1J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bS5sZW5ndGggPD0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IG51bVswXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBudW1bMV07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gbnVtWzJdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IG51bVszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0lzTWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDAnXSA9IG51bVswXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVsxXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDInXSA9IG51bVsyXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDMnXSA9IG51bVszXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVs0XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDUnXSA9IG51bVs1XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDYnXSA9IG51bVs2XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVs3XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDgnXSA9IG51bVs4XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDknXSA9IG51bVs5XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTAnXSA9IG51bVsxMF07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTExJ10gPSBudW1bMTFdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMiddID0gbnVtWzEyXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTMnXSA9IG51bVsxM107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTE0J10gPSBudW1bMTRdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNSddID0gbnVtWzE1XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IG91dCA9IHsgbHJjOiAnMjEyOGN6JyB9O1xyXG4gICAgICAgIC8vIGlmIChudW1bMF0gJiYgdHlwZW9mIG51bVswXSA9PT0gJ29iamVjdCcpIHsgb3V0WydtMDAnXSA9IGlzTnVtYmVyKG51bVswXS54KSA/IG51bVswXS54IDogbnVtWzBdLnggfHwgKGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiBudW1bMF0ud2lkdGggfHwgbnVtWzBdLnIgfHwgKGlzTnVtYmVyKG51bVswXSkgPyBudW1bMF0gOiAwKSk7IG91dFsnbTAxJ10gPSBpc051bWJlcihudW1bMF0ueSkgPyBudW1bMF0ueSA6IG51bVswXS55IHx8IChpc051bWJlcihudW1bMF1bMV0pID8gbnVtWzBdWzFdIDogbnVtWzBdLmhlaWdodCB8fCBudW1bMF0uZyB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDInXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogbnVtWzBdLnogfHwgKGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiBudW1bMF0uYiB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDMnXSA9IGlzTnVtYmVyKG51bVswXS53KSA/IG51bVswXS53IDogbnVtWzBdLncgfHwgKGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiBudW1bMF0uYSB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgfVxyXG4gICAgICAgIC8vIGVsc2UgeyBvdXRbJ20wMCddID0gbnVtWzBdOyBvdXRbJ20wMSddID0gbnVtWzFdOyBvdXRbJ20wMiddID0gbnVtWzJdOyBvdXRbJ20wMyddID0gbnVtWzNdOyBvdXRbJ20wNCddID0gbnVtWzRdOyBvdXRbJ20wNSddID0gbnVtWzVdOyBvdXRbJ20wNiddID0gbnVtWzZdOyBvdXRbJ20wNyddID0gbnVtWzddOyBvdXRbJ20wOCddID0gbnVtWzhdOyBvdXRbJ20wOSddID0gbnVtWzldOyBvdXRbJ20xMCddID0gbnVtWzEwXTsgb3V0WydtMTEnXSA9IG51bVsxMV07IG91dFsnbTEyJ10gPSBudW1bMTJdOyBvdXRbJ20xMyddID0gbnVtWzEzXTsgb3V0WydtMTQnXSA9IG51bVsxNF07IG91dFsnbTE1J10gPSBudW1bMTVdOyB9XHJcbiAgICAgICAgLy8gdGhpcy5tbnVtID0gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW51bTogb2JqZWN0ID0ge307XHJcbiAgICBwcml2YXRlIF9Jc01hdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdldCBpc1ZlYygpIHsgcmV0dXJuICF0aGlzLl9Jc01hdDsgfVxyXG4gICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3gnXSB9XHJcbiAgICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubW51bVsneSddIH1cclxuICAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tbnVtWyd6J10gfVxyXG4gICAgcHVibGljIGdldCB3KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3cnXSB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWVhbndoaWxlQWxsID0gZnVuY3Rpb24gPEZVTkMgZXh0ZW5kcyBGdW5jdGlvbiwgVCBleHRlbmRzIG9iamVjdD4oZnVuYzogRlVOQywgLi4ub2JqOiBUW10pIHtcclxuICAgICAgICBsZXQgb3V0ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqWzBdKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gob2JqW2luZGV4XVtlbGVtZW50XSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG91dFtlbGVtZW50XSA9IGZ1bmMoYXJyYXksIG9iai5sZW5ndGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKblnKjnm5LkvZPojIPlm7TlhoVcclxuICAgICAqIEBwYXJhbSB7Kn0gb3JpZ2luIOebkuS9k+WdkOagh+WOn+eCuVxyXG4gICAgICogQHBhcmFtIHsqfSBleHRlbnQg55uS5L2T6IyD5Zu077yM6L+Z5piv55uS5L2T55qE5ZCE6L205Y2K5b6EXHJcbiAgICAgKiBAcmV0dXJuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNJbkJveDI8VCBleHRlbmRzIGNjLlZlYzI+KG9yaWdpbjogVCwgZXh0ZW50OiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWZWMpIHtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG1hdGhNYWNyby5tZWFud2hpbGVBbGwoKGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBiID0gYVswXSAtIGFbMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYiA+PSAtYVsyXSAmJiBiIDw9IGFbMl07XHJcbiAgICAgICAgICAgIH0sIHRoaXMubW51bSwgb3JpZ2luLCBleHRlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjWyd4J10gJiYgdmVjWyd5J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaooeWPluato1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBNb2QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBiYiA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgIGxldCBhYSA9IGEgJSBiYjtcclxuICAgICAgICBsZXQgb3V0ID0gYSA8IDAgPyAoMSAtIE1hdGguYWJzKGFhKSAvIGJiKSAqIGJiICUgYmIgOiBhYVxyXG4gICAgICAgIHJldHVybiBpc05hTihvdXQpID8gMCA6IG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW/q+aNt+WumuS5iSBcclxuICAgICAqIOS9huaYr+WwseS4jeaUr+aMgemAkOS4quWumuS5ieS6hlxyXG4gICAgICogQHBhcmFtIG51bSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHYobnVtOiBhbnkpOiBtYXRoTWFjcm8ge1xyXG4gICAgICAgIHJldHVybiBuZXcgbWF0aE1hY3JvKG51bSk7XHJcbiAgICB9XHJcblxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5a+56LGh5Y+v56e75Yqo5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBwYW5lbFR5cGUge1xyXG4gICAgc3RhaXRjLCBzdGF0aW9uYXJ5LCBNb3ZlYWJsZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Zy65pmv5Z2Q5qCH56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFU2NlbmVDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2ltdWxhdGlvbiwgd29ybGQsIGxvY2FsXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDmjqfku7blnZDmoIfnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVXaWRnZXRDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2NyZWVuLCBzY2VuZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Yqo55S754mp55CG56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFQW5pbVBoeVNpbVNwYWNlIHtcclxuICAgIGNvbXBvbmVudCwgYWN0b3IsIHNjZW5lLCByZWxhdGl2ZVJvb3QsIHJlbGF0aXZlTm9kZVxyXG59XHJcblxyXG5cclxuXHJcbi8vIOa1i+ivleivreWPpe+8jOWPr+S7peWcqOaOp+WItuWPsOS4reiDveWkn+eci+WIsOi/memHjFxyXG5jY1tcInZ2XCJdID0gY2NbXCJ2dlwiXSB8fCBEZXZlbG9wZXJzVG9vbEdsb2JhbDtcclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/load/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d4fYAyCZEeID+WJLUyKeU', 'Loading');
// load/Loading.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// SIGNPOST 加载页面，但不属于开发类
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolGlobal_1 = require("../scripts/base/class/DevelopersToolGlobal");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logoNode = null;
        _this.progressBar = null;
        // SIGNPOST 进度条部分
        _this.progressUpdateRate = 1;
        _this.progressRandomChangeTime = .2;
        _this.progressWaitForLoad = .85;
        _this.readyToShow = null;
        // SIGNPOST 目标场景部分
        _this.readyToGoSence = null;
        // TAG 自定义数值                                                                                         
        /**
         * 进度条数值
         * 数值应该在0-100
         */
        _this.ProgressValue = 0;
        /**
         * 加载进度，以资源载入完成+1
         * 当载入计数等于资源数时，完成加载
         */
        _this.loadProgressCount = 0;
        _this.loadPorgressCountMax = Object.keys(DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog).length;
        /**
         * 动画播放完毕标记
         * 数值应该在0-100
         */
        _this.animationOver = false;
        return _this;
    }
    // TAG LIFE-CYCLE callbacks                                                                              
    Loading.prototype.onLoad = function () {
        // 播放动画
        this.playLogoAnimation();
        //检查游戏更新
        this.checkGameNewVersion();
    };
    Loading.prototype.start = function () {
        // 开始加载所有资源
        this.loadAllResources();
    };
    Loading.prototype.update = function (dt) {
        // 等待动画播放完毕
        if (!this.animationOver)
            return;
        // 如果有定义其他组件（比如按钮）来完成场景载入触发时，等待组件响应
        if (this.readyToShow != null)
            return;
        // 否则加载完成后直接进入场景
        if (this.loadProgressCount >= this.loadPorgressCountMax) {
            this.onLoadScene();
        }
    };
    // TAG USER FUNCTION:                                                                                    
    // tag 用户方法 
    /**
     * 播放开始动画
     */
    Loading.prototype.playLogoAnimation = function () {
        var _this = this;
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
            .call(function () {
            _this.animationOver = true;
        })
            .start();
    };
    /**
     * 如果此场景内有其他按钮等组件触发时
     * 可以通过这里进行中转
     * 要求格式为 on + todo
     */
    Loading.prototype.onButtonClick = function (event, customDate) {
        if (customDate.indexOf("on") <= 0)
            this[customDate]();
        else
            this.onLoadScene();
    };
    /**
     * 加载场景
     * @param sceneTarget 可选场景目标
     */
    Loading.prototype.onLoadScene = function (sceneTarget) {
        var self = this;
        cc.director.loadScene((function () {
            return sceneTarget ?
                sceneTarget instanceof String ?
                    sceneTarget :
                    sceneTarget.name :
                self.readyToGoSence.name;
        })());
    };
    // tag 客户端方法 
    /**
     * 加载全部资源包
     */
    Loading.prototype.loadAllResources = function () {
        var _this = this;
        var resKeys = Object.keys(DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog);
        resKeys.forEach(function (url) {
            var resLog = DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog[url];
            DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[resLog.url] = DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[resLog.url] || {};
            _this.loadResources(url, resLog.type, resLog.url);
        });
    };
    /**
     * 按类加载资源包
     * @param url
     * @param type
     * @param saveUrl
     */
    Loading.prototype.loadResources = function (url, type, saveUrl) {
        var self = this;
        cc.resources.loadDir(url, type, function (completedCount, totalCount, item) {
            // cc.log("正在加载:" + item.url);
            self.ProgressValue = completedCount / totalCount;
            // cc.log(`加载进度: ${self.ProgressValue * 100}%`);
        }, function (err, data) {
            if (err) {
                cc.log("\u52A0\u8F7D" + type + "\u65F6\u53D1\u751F\u9519\u8BEF");
            }
            else {
                for (var i in data) {
                    var name = (data[i] instanceof cc.SpriteAtlas) ? data[i].name.slice(0, -6) : data[i].name;
                    if (data[i] instanceof cc.JsonAsset) {
                        DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[saveUrl][name] = data[i]['json'];
                    }
                    else {
                        DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[saveUrl][name] = data[i];
                    }
                }
            }
            self.loadProgressCount++;
        });
    };
    // tag 微信平台更新 
    /**
     * 检查游戏新版本
     */
    Loading.prototype.checkGameNewVersion = function () {
        // 仅关注微信平台
        if (!(cc.sys.platform == cc.sys.WECHAT_GAME))
            return false;
        // 尝试获取微信更新管理器
        var updateManager;
        try {
            updateManager = wx.getUpdateManager();
            if (!updateManager)
                return false;
        }
        catch (_a) {
            return false;
        }
        // 获取全局唯一的版本更新管理器，用于管理小程序更新
        updateManager.onCheckForUpdate(function (res) {
            // 监听向微信后台请求检查更新结果事件 
            console.log("是否有新版本：" + res.hasUpdate);
            if (res.hasUpdate) {
                //如果有新版本                
                // 小程序有新版本，会主动触发下载操作        
                updateManager.onUpdateReady(function () {
                    //当新版本下载完成，会进行回调          
                    wx.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，单击确定重启小程序',
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启小程序               
                                updateManager.applyUpdate();
                            }
                        }
                    });
                });
                // 小程序有新版本，会主动触发下载操作（无需开发者触发）        
                updateManager.onUpdateFailed(function () {
                    //当新版本下载失败，会进行回调          
                    wx.showModal({
                        title: '提示',
                        content: '检查到有新版本，但下载失败，请稍后尝试',
                        showCancel: false,
                    });
                });
            }
        });
        return true;
    };
    //微信分包
    Loading.prototype.wxSubpackage = function () {
        var self = this;
        wx.loadSubpackage({
            name: 'resources',
            success: function (res) {
                // 分包加载成功后通过 success 回调
                self.loadAllResources();
            },
            fail: function (err) {
                // 分包加载失败通过 fail 回调
                console.error("load " + name + " fail", err);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "logoNode", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "进度条目标(可选)",
            tooltip: "进度条目标设定后可以指定动画",
        })
    ], Loading.prototype, "progressBar", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画速率",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressUpdateRate", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画随机变化间隔",
            tooltip: "进度条动画随机变化间隔",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressRandomChangeTime", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画等待加载完成位置",
            tooltip: "进度条动画等待加载完成位置",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressWaitForLoad", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "完成后显示",
            tooltip: "当加载完成时，被启用的节点",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "readyToShow", void 0);
    __decorate([
        property({
            type: cc.SceneAsset,
            displayName: "完成后加载目标",
            tooltip: "当加载完成时，加载的场景，如果有启用节点，则等待节点触发",
        })
    ], Loading.prototype, "readyToGoSence", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsbUZBQTBGO0FBTTFGO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMFFDO1FBdlFHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFPekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQWlCO1FBUWpCLHdCQUFrQixHQUFHLENBQUMsQ0FBQztRQVV2Qiw4QkFBd0IsR0FBRyxFQUFFLENBQUM7UUFVOUIseUJBQW1CLEdBQUcsR0FBRyxDQUFDO1FBUTFCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGtCQUFrQjtRQU1sQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQTJCdEIscUdBQXFHO1FBRXJHOzs7V0FHRztRQUNILG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCOzs7V0FHRztRQUNILHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QiwwQkFBb0IsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLDJDQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFN0U7OztXQUdHO1FBQ0gsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBb0tuQyxDQUFDO0lBaE5HLHlHQUF5RztJQUV6Ryx3QkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLFFBQVE7UUFDUixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEVBQUU7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QUFJO1lBQ1gsV0FBVyxFQUFFLGVBQWU7WUFDNUIsT0FBTyxFQUFFLGVBQWU7WUFDeEIsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqRCxDQUFDO3dEQUN3QjtJQVExQjtRQU5DLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakQsQ0FBQztnREFDaUI7SUFRbkI7UUFMQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVU7WUFDbkIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsT0FBTyxFQUFFLDhCQUE4QjtTQUMxQyxDQUFDO21EQUNvQjtJQXhETCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBMFEzQjtJQUFELGNBQUM7Q0ExUUQsQUEwUUMsQ0ExUW9DLEVBQUUsQ0FBQyxTQUFTLEdBMFFoRDtrQkExUW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqDovb3pobXpnaLvvIzkvYbkuI3lsZ7kuo7lvIDlj5HnsbtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4uL3NjcmlwdHMvYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG4vLyDorqnnvJbor5Hlmajlv73nlaXlubPlj7BBUEnmiqXplJlcclxuZGVjbGFyZSB2YXIgd3g6IGFueTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nb05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHnm67moIco5Y+v6YCJKVwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h55uu5qCH6K6+5a6a5ZCO5Y+v5Lul5oyH5a6a5Yqo55S7XCIsXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOi/m+W6puadoemDqOWIhlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+mAn+eOh1wiLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7IH0sXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NVcGRhdGVSYXRlID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S76ZqP5py65Y+Y5YyW6Ze06ZqUXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHliqjnlLvpmo/mnLrlj5jljJbpl7TpmpRcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzUmFuZG9tQ2hhbmdlVGltZSA9IC4yO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvnrYnlvoXliqDovb3lrozmiJDkvY3nva5cIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeWKqOeUu+etieW+heWKoOi9veWujOaIkOS9jee9rlwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7IH0sXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NXYWl0Rm9yTG9hZCA9IC44NTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5a6M5oiQ5ZCO5pi+56S6XCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLlvZPliqDovb3lrozmiJDml7bvvIzooqvlkK/nlKjnmoToioLngrlcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHJlYWR5VG9TaG93ID0gbnVsbDtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnm67moIflnLrmma/pg6jliIZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuU2NlbmVBc3NldCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLlrozmiJDlkI7liqDovb3nm67moIdcIixcclxuICAgICAgICB0b29sdGlwOiBcIuW9k+WKoOi9veWujOaIkOaXtu+8jOWKoOi9veeahOWcuuaZr++8jOWmguaenOacieWQr+eUqOiKgueCue+8jOWImeetieW+heiKgueCueinpuWPkVwiLFxyXG4gICAgfSlcclxuICAgIHJlYWR5VG9Hb1NlbmNlID0gbnVsbDtcclxuXHJcbiAgICAvLyBUQUcgTElGRS1DWUNMRSBjYWxsYmFja3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgdGhpcy5wbGF5TG9nb0FuaW1hdGlvbigpO1xyXG4gICAgICAgIC8v5qOA5p+l5ri45oiP5pu05pawXHJcbiAgICAgICAgdGhpcy5jaGVja0dhbWVOZXdWZXJzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g5byA5aeL5Yqg6L295omA5pyJ6LWE5rqQXHJcbiAgICAgICAgdGhpcy5sb2FkQWxsUmVzb3VyY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g562J5b6F5Yqo55S75pKt5pS+5a6M5q+VXHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGlvbk92ZXIpIHJldHVybjtcclxuICAgICAgICAvLyDlpoLmnpzmnInlrprkuYnlhbbku5bnu4Tku7bvvIjmr5TlpoLmjInpkq7vvInmnaXlrozmiJDlnLrmma/ovb3lhaXop6blj5Hml7bvvIznrYnlvoXnu4Tku7blk43lupRcclxuICAgICAgICBpZiAodGhpcy5yZWFkeVRvU2hvdyAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgLy8g5ZCm5YiZ5Yqg6L295a6M5oiQ5ZCO55u05o6l6L+b5YWl5Zy65pmvXHJcbiAgICAgICAgaWYgKHRoaXMubG9hZFByb2dyZXNzQ291bnQgPj0gdGhpcy5sb2FkUG9yZ3Jlc3NDb3VudE1heCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZFNjZW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyDoh6rlrprkuYnmlbDlgLwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+b5bqm5p2h5pWw5YC8XHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBQcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqm77yM5Lul6LWE5rqQ6L295YWl5a6M5oiQKzFcclxuICAgICAqIOW9k+i9veWFpeiuoeaVsOetieS6jui1hOa6kOaVsOaXtu+8jOWujOaIkOWKoOi9vVxyXG4gICAgICovXHJcbiAgICBsb2FkUHJvZ3Jlc3NDb3VudDogbnVtYmVyID0gMDtcclxuICAgIGxvYWRQb3JncmVzc0NvdW50TWF4OiBudW1iZXIgPSBPYmplY3Qua2V5cyhjY3Z2LmxvYWRSZXNvdXJjZXNjYXRhbG9nKS5sZW5ndGg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjnlLvmkq3mlL7lrozmr5XmoIforrBcclxuICAgICAqIOaVsOWAvOW6lOivpeWcqDAtMTAwXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvbk92ZXI6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBUQUcgVVNFUiBGVU5DVElPTjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyB0YWcg55So5oi35pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5byA5aeL5Yqo55S7XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGxheUxvZ29BbmltYXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2dvTm9kZSlcclxuICAgICAgICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5kZWxheSgxKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aaC5p6c5q2k5Zy65pmv5YaF5pyJ5YW25LuW5oyJ6ZKu562J57uE5Lu26Kem5Y+R5pe2XHJcbiAgICAgKiDlj6/ku6XpgJrov4fov5nph4zov5vooYzkuK3ovaxcclxuICAgICAqIOimgeaxguagvOW8j+S4uiBvbiArIHRvZG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY3VzdG9tRGF0ZS5pbmRleE9mKFwib25cIikgPD0gMClcclxuICAgICAgICAgICAgdGhpc1tjdXN0b21EYXRlXSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRTY2VuZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lnLrmma9cclxuICAgICAqIEBwYXJhbSBzY2VuZVRhcmdldCDlj6/pgInlnLrmma/nm67moIdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvbkxvYWRTY2VuZShzY2VuZVRhcmdldD86IHN0cmluZyB8IGNjLlNjZW5lQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY2VuZVRhcmdldCA/XHJcbiAgICAgICAgICAgICAgICBzY2VuZVRhcmdldCBpbnN0YW5jZW9mIFN0cmluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVUYXJnZXQgOlxyXG4gICAgICAgICAgICAgICAgICAgIChzY2VuZVRhcmdldCBhcyBjYy5TY2VuZUFzc2V0KS5uYW1lIDpcclxuICAgICAgICAgICAgICAgIHNlbGYucmVhZHlUb0dvU2VuY2UubmFtZTtcclxuICAgICAgICB9KSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5a6i5oi356uv5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YWo6YOo6LWE5rqQ5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEFsbFJlc291cmNlcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzS2V5cyA9IE9iamVjdC5rZXlzKGNjdnYubG9hZFJlc291cmNlc2NhdGFsb2cpO1xyXG4gICAgICAgIHJlc0tleXMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzTG9nID0gY2N2di5sb2FkUmVzb3VyY2VzY2F0YWxvZ1t1cmxdO1xyXG4gICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtyZXNMb2cudXJsXSA9IGNjdnYud2FyZWhvdXNlW3Jlc0xvZy51cmxdIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCByZXNMb2cudHlwZSwgcmVzTG9nLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInnsbvliqDovb3otYTmupDljIVcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSBzYXZlVXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRSZXNvdXJjZXModXJsLCB0eXBlLCBzYXZlVXJsKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKHVybCwgdHlwZSxcclxuXHJcbiAgICAgICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5Zyo5Yqg6L29OlwiICsgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc1ZhbHVlID0gY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGDliqDovb3ov5vluqY6ICR7c2VsZi5Qcm9ncmVzc1ZhbHVlICogMTAwfSVgKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vSR7dHlwZX3ml7blj5HnlJ/plJnor69gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gKGRhdGFbaV0gaW5zdGFuY2VvZiBjYy5TcHJpdGVBdGxhcykgPyBkYXRhW2ldLm5hbWUuc2xpY2UoMCwgLTYpIDogZGF0YVtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLkpzb25Bc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2N2di53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldWydqc29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtzYXZlVXJsXVtuYW1lXSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRQcm9ncmVzc0NvdW50Kys7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOW+ruS/oeW5s+WPsOabtOaWsCBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpea4uOaIj+aWsOeJiOacrFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrR2FtZU5ld1ZlcnNpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8g5LuF5YWz5rOo5b6u5L+h5bmz5Y+wXHJcbiAgICAgICAgaWYgKCEoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDlsJ3or5Xojrflj5blvq7kv6Hmm7TmlrDnrqHnkIblmahcclxuICAgICAgICBsZXQgdXBkYXRlTWFuYWdlcjogYW55O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIGlmICghdXBkYXRlTWFuYWdlcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICAvLyDojrflj5blhajlsYDllK/kuIDnmoTniYjmnKzmm7TmlrDnrqHnkIblmajvvIznlKjkuo7nrqHnkIblsI/nqIvluo/mm7TmlrBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyDnm5HlkKzlkJHlvq7kv6HlkI7lj7Dor7fmsYLmo4Dmn6Xmm7TmlrDnu5Pmnpzkuovku7YgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5pyJ5paw54mI5pys77yaXCIgKyByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pyJ5paw54mI5pysICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2cICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lvZPmlrDniYjmnKzkuIvovb3lrozmiJDvvIzkvJrov5vooYzlm57osIMgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2V5Ye756Gu5a6a6YeN5ZCv5bCP56iL5bqPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK/lsI/nqIvluo8gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIOWwj+eoi+W6j+acieaWsOeJiOacrO+8jOS8muS4u+WKqOinpuWPkeS4i+i9veaTjeS9nO+8iOaXoOmcgOW8gOWPkeiAheinpuWPke+8iSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWksei0pe+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmo4Dmn6XliLDmnInmlrDniYjmnKzvvIzkvYbkuIvovb3lpLHotKXvvIzor7fnqI3lkI7lsJ3or5UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b6u5L+h5YiG5YyFXHJcbiAgICBwcml2YXRlIHd4U3VicGFja2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3gubG9hZFN1YnBhY2thZ2Uoe1xyXG4gICAgICAgICAgICBuYW1lOiAncmVzb3VyY2VzJywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3miJDlip/lkI7pgJrov4cgc3VjY2VzcyDlm57osINcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3lpLHotKXpgJrov4cgZmFpbCDlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWQgJHtuYW1lfSBmYWlsYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/widget/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef6e5GNu+9AR4+39J31rBZr', 'GameUI');
// scripts/widget/GameUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // cc.find("Canvas").getComponent("Game").addTimeCount();
    };
    NewClass.prototype.start = function () {
        // ccvv.fristScript
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd2lkZ2V0XFxHYW1lVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBYUEsQ0FBQztJQVhHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0kseURBQXlEO0lBQzdELENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksbUJBQW1CO0lBQ3ZCLENBQUM7SUFWZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWE1QjtJQUFELGVBQUM7Q0FiRCxBQWFDLENBYnFDLEVBQUUsQ0FBQyxTQUFTLEdBYWpEO2tCQWJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkdhbWVcIikuYWRkVGltZUNvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gY2N2di5mcmlzdFNjcmlwdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DynamicPanelClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f421fvcjy9HCrRL+vgHKjyG', 'DynamicPanelClass');
// scripts/base/class/DynamicPanelClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DynamicPanelClass = /** @class */ (function (_super) {
    __extends(DynamicPanelClass, _super);
    function DynamicPanelClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DynamicPanelClass.prototype.start = function () {
    };
    DynamicPanelClass = __decorate([
        ccclass
    ], DynamicPanelClass);
    return DynamicPanelClass;
}(DevelopersToolClass_1.default));
exports.default = DynamicPanelClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXER5bmFtaWNQYW5lbENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQyxxQ0FBbUI7SUFBbEU7O0lBWUEsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsaUNBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FZckM7SUFBRCx3QkFBQztDQVpELEFBWUMsQ0FaOEMsNkJBQW1CLEdBWWpFO2tCQVpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqjmgIHnqpflj6PnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IERldmVsb3BlcnNUb29sQ2xhc3MgZnJvbSAnLi9EZXZlbG9wZXJzVG9vbENsYXNzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNQYW5lbENsYXNzIGV4dGVuZHMgRGV2ZWxvcGVyc1Rvb2xDbGFzcyB7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/NoRootTree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30349o+26ZAWLFFqHnpTt95', 'NoRootTree');
// scripts/base/tool/NoRootTree.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RigorousLibrary_1 = require("../core/RigorousLibrary");
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
/**
 * 无根树
 * @tip 根据当前游戏的定义，入栈为根，出栈为叶
 */
var noRootTree = /** @class */ (function (_super) {
    __extends(noRootTree, _super);
    function noRootTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(noRootTree, "tree", {
        /**
         * 获取树单例
         */
        get: function () {
            this._NoRootTree = this._NoRootTree || new noRootTree(30);
            return this._NoRootTree;
        },
        /**
         * 设置树单例
         */
        set: function (value) {
            this._NoRootTree = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加子项
     * @param object
     * @returns 返回这个子项的索引
     */
    noRootTree.prototype.add = function (object) {
        return this.push(object);
    };
    /**
     * 反向添加子项
     * 警告：这是不符合规则的方法，请确保栈深度允许反推，
     * 或是不再获取栈有效深度，因为这不会进行有效性检查，
     * 会破坏数据连续性
     * @param object
     */
    noRootTree.prototype.addFromFront = function (object) {
        this.$get = this.$get - 1;
        this._HashList[this.$get] = object;
        return this.$get;
    };
    Object.defineProperty(noRootTree.prototype, "root", {
        /**
         * 获取根节点
         * @returns
         */
        get: function () {
            var put = this.$put - 1;
            put = put < 0 ? this._StackSize - 1 : put;
            return this.getBuffer(put);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "put", {
        get: function () { return this.$put; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "leaf", {
        /**
         * 获取最末子节点
         * @returns
         */
        get: function () {
            return this.getBuffer(this.$get);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "get", {
        get: function () { return this.$get; },
        enumerable: false,
        configurable: true
    });
    /**
     * 从给定索引处截断，并返回截断部分
     * @param key
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    noRootTree.prototype.cut = function (key) {
        var len = (key % this._StackSize) - this.$get;
        if (this._StackIsFull)
            return this._StackSize - len;
        return this.pull(len < 0 ? this._StackSize + len : len);
    };
    /**
     * 删除指定长度的项目
     * @param length 删除的长度
     */
    noRootTree.prototype.del = function (length) {
        if (!length || length == 0)
            length = 1;
        if (length < 0)
            return this.clean();
        this.$get = length;
    };
    /**
     * 在叶子节点附近给定一个索引，并指定偏移量，转为一个有效的索引
     */
    noRootTree.prototype.getNextIndex = function (index, offset) {
        return DevelopersToolGlobal_1.mathMacro.PMod(index + offset, this._StackSize);
    };
    Object.defineProperty(noRootTree.prototype, "buffer", {
        get: function () {
            return this._HashList;
        },
        enumerable: false,
        configurable: true
    });
    return noRootTree;
}(RigorousLibrary_1.RigorousRingBuffer));
exports.default = noRootTree;
// import NTR from "../base/tool/NoRootTree"; // (〃´-ω･) 诶嘿~

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcTm9Sb290VHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBNkQ7QUFDN0Qsc0VBQWdFO0FBQ2hFOzs7R0FHRztBQUNIO0lBQXdDLDhCQUFrQjtJQUExRDs7SUFzRkEsQ0FBQztJQTlFRyxzQkFBa0Isa0JBQUk7UUFIdEI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBdUIsS0FBaUI7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BTkE7SUFRRDs7OztPQUlHO0lBQ0ksd0JBQUcsR0FBVixVQUFXLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBS0Qsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDJCQUFHO2FBQWQsY0FBbUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFLckMsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywyQkFBRzthQUFkLGNBQW1CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3JDOzs7OztPQUtHO0lBQ0ksd0JBQUcsR0FBVixVQUE2QixHQUFPO1FBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxNQUFlO1FBQ3RCLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxJQUFJLENBQUM7WUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixLQUFhLEVBQUUsTUFBYztRQUM3QyxPQUFPLGdDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxzQkFBVyw4QkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0F0RkEsQUFzRkMsQ0F0RnVDLG9DQUFrQixHQXNGekQ7O0FBRUQsNERBQTREIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlnb3JvdXNSaW5nQnVmZmVyIH0gZnJvbSAnLi4vY29yZS9SaWdvcm91c0xpYnJhcnknO1xyXG5pbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbi8qKlxyXG4gKiDml6DmoLnmoJEgXHJcbiAqIEB0aXAg5qC55o2u5b2T5YmN5ri45oiP55qE5a6a5LmJ77yM5YWl5qCI5Li65qC577yM5Ye65qCI5Li65Y+2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBub1Jvb3RUcmVlIGV4dGVuZHMgUmlnb3JvdXNSaW5nQnVmZmVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5qCR5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX05vUm9vdFRyZWU6IG5vUm9vdFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagkeWNleS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB0cmVlKCkge1xyXG4gICAgICAgIHRoaXMuX05vUm9vdFRyZWUgPSB0aGlzLl9Ob1Jvb3RUcmVlIHx8IG5ldyBub1Jvb3RUcmVlKDMwKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTm9Sb290VHJlZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5qCR5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHRyZWUodmFsdWU6IG5vUm9vdFRyZWUpIHtcclxuICAgICAgICB0aGlzLl9Ob1Jvb3RUcmVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlrZDpoblcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKiBAcmV0dXJucyDov5Tlm57ov5nkuKrlrZDpobnnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlj43lkJHmt7vliqDlrZDpobkgIFxyXG4gICAgICog6K2m5ZGK77ya6L+Z5piv5LiN56ym5ZCI6KeE5YiZ55qE5pa55rOV77yM6K+356Gu5L+d5qCI5rex5bqm5YWB6K645Y+N5o6o77yMXHJcbiAgICAgKiDmiJbmmK/kuI3lho3ojrflj5bmoIjmnInmlYjmt7HluqbvvIzlm6DkuLrov5nkuI3kvJrov5vooYzmnInmlYjmgKfmo4Dmn6XvvIxcclxuICAgICAqIOS8muegtOWdj+aVsOaNrui/nue7reaAp1xyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEZyb21Gcm9udChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gdGhpcy4kZ2V0IC0gMTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFt0aGlzLiRnZXRdID0gb2JqZWN0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRnZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagueiKgueCuVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdCgpOiBhbnkge1xyXG4gICAgICAgIGxldCBwdXQgPSB0aGlzLiRwdXQgLSAxO1xyXG4gICAgICAgIHB1dCA9IHB1dCA8IDAgPyB0aGlzLl9TdGFja1NpemUgLSAxIDogcHV0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcihwdXQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBwdXQoKSB7IHJldHVybiB0aGlzLiRwdXQgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDmnKvlrZDoioLngrlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlYWYoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIodGhpcy4kZ2V0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZ2V0KCkgeyByZXR1cm4gdGhpcy4kZ2V0IH1cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE5oiq5pat77yM5bm26L+U5Zue5oiq5pat6YOo5YiGXHJcbiAgICAgKiBAcGFyYW0ga2V5IFxyXG4gICAgICogQHJldHVybiBvYmpbXTogb2JqMywgb2JqNC4uLlxyXG4gICAgICogQHJldHVybiBpbmRleFtdOiAzLCA0Li4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjdXQ8VCBleHRlbmRzIG51bWJlcj4oa2V5PzogVCk6IGFueSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IChrZXkgJSB0aGlzLl9TdGFja1NpemUpIC0gdGhpcy4kZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgcmV0dXJuIHRoaXMuX1N0YWNrU2l6ZSAtIGxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdWxsKGxlbiA8IDAgPyB0aGlzLl9TdGFja1NpemUgKyBsZW4gOiBsZW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTmjIflrprplb/luqbnmoTpobnnm65cclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5Yig6Zmk55qE6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWwobGVuZ3RoPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFsZW5ndGggfHwgbGVuZ3RoID09IDApIGxlbmd0aCA9IDE7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA8IDApIHJldHVybiB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjlj7blrZDoioLngrnpmYTov5Hnu5nlrprkuIDkuKrntKLlvJXvvIzlubbmjIflrprlgY/np7vph4/vvIzovazkuLrkuIDkuKrmnInmlYjnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5leHRJbmRleChpbmRleDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG1tLlBNb2QoaW5kZXggKyBvZmZzZXQsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGJ1ZmZlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSGFzaExpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7IC8vICjjgIPCtC3Pie+9pSkg6K+25Zi/flxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DiologClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8d9eyP2DZLcKlpaWR1eAzJ', 'DiologClass');
// scripts/base/class/DiologClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DynamicPanelClass_1 = require("./DynamicPanelClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DiologClass = /** @class */ (function (_super) {
    __extends(DiologClass, _super);
    function DiologClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DiologClass.prototype.start = function () {
    };
    DiologClass = __decorate([
        ccclass
    ], DiologClass);
    return DiologClass;
}(DynamicPanelClass_1.default));
exports.default = DiologClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERpb2xvZ0NsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBaUI7SUFBMUQ7O0lBV0EsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFSZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQVcvQjtJQUFELGtCQUFDO0NBWEQsQUFXQyxDQVh3QywyQkFBaUIsR0FXekQ7a0JBWG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDnibnmjIflr7nor53moYbnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IER5bmFtaWNQYW5lbENsYXNzIGZyb20gJy4vRHluYW1pY1BhbmVsQ2xhc3MnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpb2xvZ0NsYXNzIGV4dGVuZHMgRHluYW1pY1BhbmVsQ2xhc3Mge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe3d6sWzhhNbrb4V2ujPwDi', 'DevelopersToolClass');
// scripts/base/class/DevelopersToolClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolClass = /** @class */ (function (_super) {
    __extends(DevelopersToolClass, _super);
    function DevelopersToolClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevelopersToolClass = __decorate([
        ccclass
    ], DevelopersToolClass);
    return DevelopersToolClass;
}(cc.Component));
exports.default = DevelopersToolClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBaUQsdUNBQVk7SUFBN0Q7O0lBRUEsQ0FBQztJQUZvQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQUV2QztJQUFELDBCQUFDO0NBRkQsQUFFQyxDQUZnRCxFQUFFLENBQUMsU0FBUyxHQUU1RDtrQkFGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2ZWxvcGVyc1Rvb2xDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PawnClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc67fSOWKpKmZ+mQ1IaB8ME', 'PawnClass');
// scripts/base/class/PawnClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ActorClass_1 = require("./ActorClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PawnClass = /** @class */ (function (_super) {
    __extends(PawnClass, _super);
    function PawnClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PawnClass.prototype.start = function () {
    };
    PawnClass.prototype.update = function (dt) {
    };
    PawnClass = __decorate([
        ccclass
    ], PawnClass);
    return PawnClass;
}(ActorClass_1.default));
exports.default = PawnClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhd25DbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVU7SUFBakQ7O0lBYUEsQ0FBQztJQVhHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUFaZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWE3QjtJQUFELGdCQUFDO0NBYkQsQUFhQyxDQWJzQyxvQkFBVSxHQWFoRDtrQkFib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOWPr+aOp+WItuexuyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgQWN0b3JDbGFzcyBmcm9tICcuL0FjdG9yQ2xhc3MnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF3bkNsYXNzIGV4dGVuZHMgQWN0b3JDbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/ActorClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4efcaIvqEFI6b/oSBkLJxTt', 'ActorClass');
// scripts/base/class/ActorClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ActorClass = /** @class */ (function (_super) {
    __extends(ActorClass, _super);
    function ActorClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ActorClass.prototype.start = function () {
    };
    ActorClass = __decorate([
        ccclass
    ], ActorClass);
    return ActorClass;
}(DevelopersToolClass_1.default));
exports.default = ActorClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEFjdG9yQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkRBQXdEO0FBRWxELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXdDLDhCQUFtQjtJQUEzRDs7SUFXQSxDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQVJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBVzlCO0lBQUQsaUJBQUM7Q0FYRCxBQVdDLENBWHVDLDZCQUFtQixHQVcxRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOiHquWumuS5ieWvueixoeexuyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgRGV2ZWxvcGVyc1Rvb2xDbGFzcyBmcm9tICcuL0RldmVsb3BlcnNUb29sQ2xhc3MnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yQ2xhc3MgZXh0ZW5kcyBEZXZlbG9wZXJzVG9vbENsYXNzIHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/widget/Botton_LoadEff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f36d0vO0JJF66pyS9EM9mhT', 'Botton_LoadEff');
// scripts/widget/Botton_LoadEff.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd2lkZ2V0XFxCb3R0b25fTG9hZEVmZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6bc6FrRRVPbpB9I2O8jbmT', 'Block');
// scripts/game/Block.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnClass_1 = require("../base/class/PawnClass");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var block = /** @class */ (function (_super) {
    __extends(block, _super);
    function block() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // SIGNPOST macro                                                                                        
        /**
         * 所处树节点索引
         * 当处于玩家阵营时，此索引无效
         */
        _this._TreeIndex = null;
        _this._ColNode = null;
        _this._ColComponent = null;
        /**
         * 是否允许处理碰撞，这也代表这是属于玩家阵营的方块
         */
        _this.enabledCollision = false;
        /**
         * 冲突标记
         */
        _this._Conglict = false;
        /**
         * 剩余等待计数
         */
        _this._WaitForConflict = 3;
        return _this;
    }
    // onLoad () {}
    block.prototype.start = function () {
    };
    block.prototype.update = function (dt) {
        if (!this.conflict && this.enabledCollision)
            this.node['playerMovement'].updateByVelocity(dt);
        else {
            var gridPos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex));
            this.node.setPosition(this.node.x, gridPos.y);
        }
    };
    // TAG USER FUNCTION:                                                                                    
    /**
     * 初始化事件
     * @param Index
     */
    block.prototype.init = function (Index, playerMode) {
        if (playerMode === void 0) { playerMode = false; }
        if (playerMode) {
            this.node.group = 'player';
            this.enabledCollision = true;
        }
        else {
            this.treeIndex = Index;
        }
    };
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionEnter = function (other, self) {
        var _a;
        if (!this.enabledCollision)
            return;
        cc.log("碰撞开始");
        // 获取碰撞的树节点
        var otherBlock = this.getBlockComponent(other);
        var otherTreeIndex = otherBlock.treeIndex;
        if (typeof otherTreeIndex == 'number') {
            var selfTreeIndex = NoRootTree_1.default.tree.getNextIndex(otherTreeIndex, -1);
            var treeGroup = NoRootTree_1.default.tree.getBuffer(selfTreeIndex);
            // 如果组在树中
            if (treeGroup) {
                // 由于自己的到来而填充了一行
                if (Object.keys(treeGroup).length + 1 >= DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.column) {
                    // 就销毁之后包括自己在内的所有节点
                    this.destroyTreeNodeAfterIndex(selfTreeIndex + 1);
                    return;
                }
                // 而不能填充一行的话
                else {
                    // 临时加入到此组中
                    treeGroup[this['_id']] = this.node;
                }
                this.treeIndex = selfTreeIndex;
            }
            // 如果组不在树中，说明在最外边
            else {
                this.treeIndex = NoRootTree_1.default.tree.addFromFront((_a = {}, _a[this['_id']] = this.node, _a));
            }
        }
        // 如果还未存在冲突
        if (!this.conflict) {
            // 对齐,避免发生重复对齐
            this.AlignPos = otherBlock.AlignPos;
            cc.log(this.treeIndex, NoRootTree_1.default.tree.put, NoRootTree_1.default.tree.get, NoRootTree_1.default.tree.buffer);
        }
        // 标记为冲突
        this.markConflictAndCopyMotion();
    };
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionStay = function (other, self) {
        if (!this.enabledCollision)
            return;
        // if (ccvv.getInstanceByName())
        if (!this.waitForConflict)
            cc.log("碰撞中");
    };
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionExit = function (other, self) {
        if (!this.enabledCollision)
            return;
        if (!this.node.isValid)
            return;
        cc.log("碰撞结束");
        if (this.waitForConflict)
            this.conflict = false;
    };
    // SIGNPOST function                                                                                     
    /**
     * 从给定索引处销毁所有节点，包括自身
     * @param index
     */
    block.prototype.destroyTreeNodeAfterIndex = function (index) {
        var treeBehindObject = NoRootTree_1.default.tree.cut(index).obj;
        treeBehindObject.forEach(function (objectElement) {
            Object.keys(objectElement).forEach(function (elementName) {
                objectElement[elementName].destroy();
            });
        });
        this.node.destroy();
    };
    /**
     * 在给定树索引位置上添加自身
     * @param index
     */
    block.prototype.addTreeNodeAtIndex = function (index) {
    };
    /**
     * 标记为冲突并复制运动
     * 标记冲突时意味着运动将朝向新的运动组件
     * @param index
     */
    block.prototype.markConflictAndCopyMotion = function () {
        // 标记冲突并复制运动
        this.conflict = true;
        if (!this.node['otherMovement'])
            DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.bindMovement(this.node);
        // 对齐到任意节点中
        // let treeIndexObject = NTR.tree.getBuffer(index);
        // if (!treeIndexObject) {
        //     treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(index, 1));
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y - ccvv.fristScript.cubeHeight));
        // }
        // else {
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y));
        // }
    };
    Object.defineProperty(block.prototype, "treeIndex", {
        get: function () { return this._TreeIndex; },
        set: function (value) { this._TreeIndex = value; },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取其他方块node上的block组件
     * @param block
     */
    block.prototype.getBlockComponent = function (block) {
        var blockNode = block instanceof cc.Node ? block : block.node;
        if (!this._ColNode || this._ColNode != blockNode)
            this._ColComponent = blockNode.getComponent('Block');
        return this._ColComponent;
    };
    Object.defineProperty(block.prototype, "conflict", {
        get: function () { return this._Conglict; },
        /**
         * 标记或加入到冲突
         */
        set: function (value) {
            // if (typeof value == 'boolean') {
            this._Conglict = value;
            // }
            // else {
            //     this._Conglict = true;
            //     ccvv.setInstanceByName(value, this.node);
            // }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "waitForConflict", {
        /**
         * 是否等待冲突
         */
        get: function () {
            return this._WaitForConflict-- > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "AlignPos", {
        /**
         * 获取对齐坐标
         */
        get: function () {
            // 使用无根树方式获取对齐坐标
            // if (!this.enabledCollision) {
            //     let treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(this.treeIndex, -1));
            //     if (treeIndexObject) {
            //         let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
            //         return new cc.Vec2(this.node.x, AlignTarget.y)
            //     }
            // }
            // return new cc.Vec2(this.node.x, this.node.y - ccvv.fristScript.cubeHeight)
            // 使用对齐网格获取对齐坐标
            return GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex - 1));
        },
        /**
         * 设置对齐坐标
         */
        set: function (value) {
            this.node.setPosition(this.node.x, value.y);
        },
        enumerable: false,
        configurable: true
    });
    block = __decorate([
        ccclass
    ], block);
    return block;
}(PawnClass_1.default));
exports.default = block;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1HO0FBQ25HLHFEQUFnRDtBQUNoRCxzREFBaUQ7QUFDakQsc0RBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW1DLHlCQUFTO0lBQTVDO1FBRUksd0JBQXdCO1FBRjVCLHFFQTJPQztRQWpGRyx5R0FBeUc7UUFFekc7OztXQUdHO1FBQ08sZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFjMUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsbUJBQWEsR0FBVSxJQUFJLENBQUM7UUFDdEM7O1dBRUc7UUFDTyxzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFJNUM7O1dBRUc7UUFDTyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBZXJDOztXQUVHO1FBQ0ssc0JBQWdCLEdBQVcsQ0FBQyxDQUFDOztJQStCekMsQ0FBQztJQXZPRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxPQUFPLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFP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Q3pELFFBQVE7WUFDUixJQUFJO1lBQ0osNkVBQTZFO1lBRTdFLGVBQWU7WUFDZixPQUFPLG9CQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQU5BO0lBcE9nQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMk96QjtJQUFELFlBQUM7Q0EzT0QsQUEyT0MsQ0EzT2tDLG1CQUFTLEdBMk8zQztrQkEzT29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IFBhd25DbGFzcyBmcm9tICcuLi9iYXNlL2NsYXNzL1Bhd25DbGFzcyc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJsb2NrIGV4dGVuZHMgUGF3bkNsYXNzIHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZsaWN0ICYmIHRoaXMuZW5hYmxlZENvbGxpc2lvbilcclxuICAgICAgICAgICAgdGhpcy5ub2RlWydwbGF5ZXJNb3ZlbWVudCddLnVwZGF0ZUJ5VmVsb2NpdHkoZHQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZ3JpZFBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KG5ldyBjYy5WZWMyKDAsIHRoaXMudHJlZUluZGV4KSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgZ3JpZFBvcy55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbkuovku7ZcclxuICAgICAqIEBwYXJhbSBJbmRleCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoSW5kZXg6IG51bWJlciwgcGxheWVyTW9kZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHBsYXllck1vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ3BsYXllcidcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkQ29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf55qE5pe25YCZ6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHJldHVybjtcclxuICAgICAgICBjYy5sb2coXCLnorDmkp7lvIDlp4tcIik7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPlueisOaSnueahOagkeiKgueCuVxyXG4gICAgICAgIGxldCBvdGhlckJsb2NrID0gdGhpcy5nZXRCbG9ja0NvbXBvbmVudChvdGhlcik7XHJcbiAgICAgICAgbGV0IG90aGVyVHJlZUluZGV4ID0gb3RoZXJCbG9jay50cmVlSW5kZXg7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvdGhlclRyZWVJbmRleCA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBsZXQgc2VsZlRyZWVJbmRleCA9IE5UUi50cmVlLmdldE5leHRJbmRleChvdGhlclRyZWVJbmRleCwgLTEpO1xyXG4gICAgICAgICAgICBsZXQgdHJlZUdyb3VwID0gTlRSLnRyZWUuZ2V0QnVmZmVyKHNlbGZUcmVlSW5kZXgpO1xyXG4gICAgICAgICAgICAvLyDlpoLmnpznu4TlnKjmoJHkuK1cclxuICAgICAgICAgICAgaWYgKHRyZWVHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgLy8g55Sx5LqO6Ieq5bex55qE5Yiw5p2l6ICM5aGr5YWF5LqG5LiA6KGMXHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModHJlZUdyb3VwKS5sZW5ndGggKyAxID49IGNjdnYuZnJpc3RTY3JpcHQuY29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5bCx6ZSA5q+B5LmL5ZCO5YyF5ous6Ieq5bex5Zyo5YaF55qE5omA5pyJ6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95VHJlZU5vZGVBZnRlckluZGV4KHNlbGZUcmVlSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDogIzkuI3og73loavlhYXkuIDooYznmoTor51cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4tOaXtuWKoOWFpeWIsOatpOe7hOS4rVxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWVHcm91cFt0aGlzWydfaWQnXV0gPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVJbmRleCA9IHNlbGZUcmVlSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5aaC5p6c57uE5LiN5Zyo5qCR5Lit77yM6K+05piO5Zyo5pyA5aSW6L65XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSW5kZXggPSBOVFIudHJlZS5hZGRGcm9tRnJvbnQoeyBbdGhpc1snX2lkJ11dOiB0aGlzLm5vZGUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOi/mOacquWtmOWcqOWGsueqgVxyXG4gICAgICAgIGlmICghdGhpcy5jb25mbGljdCkge1xyXG4gICAgICAgICAgICAvLyDlr7npvZAs6YG/5YWN5Y+R55Sf6YeN5aSN5a+56b2QXHJcbiAgICAgICAgICAgIHRoaXMuQWxpZ25Qb3MgPSBvdGhlckJsb2NrLkFsaWduUG9zO1xyXG4gICAgICAgICAgICBjYy5sb2codGhpcy50cmVlSW5kZXgsIE5UUi50cmVlLnB1dCwgTlRSLnRyZWUuZ2V0LCBOVFIudHJlZS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5qCH6K6w5Li65Yay56qBXHJcbiAgICAgICAgdGhpcy5tYXJrQ29uZmxpY3RBbmRDb3B5TW90aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7kuqfnlJ/lkI7vvIznorDmkp7nu5PmnZ/liY3nmoTmg4XlhrXkuIvvvIzmr4/mrKHorqHnrpfnorDmkp7nu5PmnpzlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgb25Db2xsaXNpb25TdGF5KG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHJldHVybjtcclxuICAgICAgICAvLyBpZiAoY2N2di5nZXRJbnN0YW5jZUJ5TmFtZSgpKVxyXG4gICAgICAgIGlmICghdGhpcy53YWl0Rm9yQ29uZmxpY3QpXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIueisOaSnuS4rVwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnue7k+adn+WQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmlzVmFsaWQpIHJldHVybjtcclxuICAgICAgICBjYy5sb2coXCLnorDmkp7nu5PmnZ9cIik7XHJcbiAgICAgICAgaWYgKHRoaXMud2FpdEZvckNvbmZsaWN0KVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZsaWN0ID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE6ZSA5q+B5omA5pyJ6IqC54K577yM5YyF5ous6Ieq6LqrXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0cm95VHJlZU5vZGVBZnRlckluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRyZWVCZWhpbmRPYmplY3QgPSBOVFIudHJlZS5jdXQoaW5kZXgpLm9iajtcclxuICAgICAgICB0cmVlQmVoaW5kT2JqZWN0LmZvckVhY2gob2JqZWN0RWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iamVjdEVsZW1lbnQpLmZvckVhY2goZWxlbWVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0RWxlbWVudFtlbGVtZW50TmFtZV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjnu5nlrprmoJHntKLlvJXkvY3nva7kuIrmt7vliqDoh6rouqtcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFkZFRyZWVOb2RlQXRJbmRleChpbmRleCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagh+iusOS4uuWGsueqgeW5tuWkjeWItui/kOWKqCAgXHJcbiAgICAgKiDmoIforrDlhrLnqoHml7bmhI/lkbPnnYDov5DliqjlsIbmnJ3lkJHmlrDnmoTov5Dliqjnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG1hcmtDb25mbGljdEFuZENvcHlNb3Rpb24oKSB7XHJcbiAgICAgICAgLy8g5qCH6K6w5Yay56qB5bm25aSN5Yi26L+Q5YqoXHJcbiAgICAgICAgdGhpcy5jb25mbGljdCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVbJ290aGVyTW92ZW1lbnQnXSlcclxuICAgICAgICAgICAgY2N2di5mcmlzdFNjcmlwdC5iaW5kTW92ZW1lbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAvLyDlr7npvZDliLDku7vmhI/oioLngrnkuK1cclxuICAgICAgICAvLyBsZXQgdHJlZUluZGV4T2JqZWN0ID0gTlRSLnRyZWUuZ2V0QnVmZmVyKGluZGV4KTtcclxuICAgICAgICAvLyBpZiAoIXRyZWVJbmRleE9iamVjdCkge1xyXG4gICAgICAgIC8vICAgICB0cmVlSW5kZXhPYmplY3QgPSBOVFIudHJlZS5nZXRCdWZmZXIoTlRSLnRyZWUuZ2V0TmV4dEluZGV4KGluZGV4LCAxKSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCBBbGlnblRhcmdldC55IC0gY2N2di5mcmlzdFNjcmlwdC5jdWJlSGVpZ2h0KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBsZXQgQWxpZ25UYXJnZXQgPSB0cmVlSW5kZXhPYmplY3RbT2JqZWN0LmtleXModHJlZUluZGV4T2JqZWN0KVswXV07XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTSUdOUE9TVCBtYWNybyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJgOWkhOagkeiKgueCuee0ouW8lVxyXG4gICAgICog5b2T5aSE5LqO546p5a626Zi16JCl5pe277yM5q2k57Si5byV5peg5pWIXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfVHJlZUluZGV4OiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCB0cmVlSW5kZXgoKSB7IHJldHVybiB0aGlzLl9UcmVlSW5kZXggfVxyXG4gICAgcHVibGljIHNldCB0cmVlSW5kZXgodmFsdWUpIHsgdGhpcy5fVHJlZUluZGV4ID0gdmFsdWU7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFtuS7luaWueWdl25vZGXkuIrnmoRibG9ja+e7hOS7tlxyXG4gICAgICogQHBhcmFtIGJsb2NrIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QmxvY2tDb21wb25lbnQoYmxvY2spOiBibG9jayB7XHJcbiAgICAgICAgbGV0IGJsb2NrTm9kZSA9IGJsb2NrIGluc3RhbmNlb2YgY2MuTm9kZSA/IGJsb2NrIDogYmxvY2subm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMuX0NvbE5vZGUgfHwgdGhpcy5fQ29sTm9kZSAhPSBibG9ja05vZGUpXHJcbiAgICAgICAgICAgIHRoaXMuX0NvbENvbXBvbmVudCA9IGJsb2NrTm9kZS5nZXRDb21wb25lbnQoJ0Jsb2NrJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NvbENvbXBvbmVudDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfQ29sTm9kZTogY2MuQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfQ29sQ29tcG9uZW50OiBibG9jayA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWFgeiuuOWkhOeQhueisOaSnu+8jOi/meS5n+S7o+ihqOi/meaYr+WxnuS6jueOqeWutumYteiQpeeahOaWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZW5hYmxlZENvbGxpc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhrLnqoHmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9Db25nbGljdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdldCBjb25mbGljdCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX0NvbmdsaWN0OyB9XHJcbiAgICAvKipcclxuICAgICAqIOagh+iusOaIluWKoOWFpeWIsOWGsueqgVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvbmZsaWN0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy8gaWYgKHR5cGVvZiB2YWx1ZSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICB0aGlzLl9Db25nbGljdCA9IHZhbHVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5fQ29uZ2xpY3QgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBjY3Z2LnNldEluc3RhbmNlQnlOYW1lKHZhbHVlLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWJqeS9meetieW+heiuoeaVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9XYWl0Rm9yQ29uZmxpY3Q6IG51bWJlciA9IDM7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuetieW+heWGsueqgVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHdhaXRGb3JDb25mbGljdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fV2FpdEZvckNvbmZsaWN0LS0gPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5a+56b2Q5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQWxpZ25Qb3MoKSB7XHJcbiAgICAgICAgLy8g5L2/55So5peg5qC55qCR5pa55byP6I635Y+W5a+56b2Q5Z2Q5qCHXHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHtcclxuICAgICAgICAvLyAgICAgbGV0IHRyZWVJbmRleE9iamVjdCA9IE5UUi50cmVlLmdldEJ1ZmZlcihOVFIudHJlZS5nZXROZXh0SW5kZXgodGhpcy50cmVlSW5kZXgsIC0xKSk7XHJcbiAgICAgICAgLy8gICAgIGlmICh0cmVlSW5kZXhPYmplY3QpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSlcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gY2N2di5mcmlzdFNjcmlwdC5jdWJlSGVpZ2h0KVxyXG5cclxuICAgICAgICAvLyDkvb/nlKjlr7npvZDnvZHmoLzojrflj5blr7npvZDlnZDmoIdcclxuICAgICAgICByZXR1cm4gR3JpZEFic29yYi5ncmlkLmdldEdyaWRQb3NpdGlvbkJ5SW5kZXgobmV3IGNjLlZlYzIoMCwgdGhpcy50cmVlSW5kZXggLSAxKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWvuem9kOWdkOagh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IEFsaWduUG9zKHZhbHVlOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCB2YWx1ZS55KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/BlockGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e2194MCANHsq+QyrRQ9KnJ', 'BlockGroup');
// scripts/game/BlockGroup.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2tHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219931QpohMXa9AERY/82Av', 'GL');
// scripts/game/GL.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnMovement_1 = require("../base/tool/PawnMovement");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
/**
 * 牛头人 NTR 继承自ringbuffer继承自RigorousArray
 * 驱动网格 GridAbsorb 用来驱动其他方块的对齐与运动
 * 移动组件 PawnMovement 简单的运动解算器，仅保留了速度解算和抵达解算，没事可以换着玩
 * 数学宏库 mm 效率低，没事别用
 * 全局仓库 ccvv.warehouse 用来保存动态加载内容
 * 全局工具 ccvv.tool 暂无
 * 全局其他 ccvv.other 暂无
 * 全局界面 ccvv.layer 保存当前世界中的所有已定义层
 * 全局脚本 ccvv.script 保存这个关卡脚本
 * 全局实例 ccvv.instance 作为全局冲突池
 */
// (〃´-ω･) 诶嘿~ 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        /**
         * 已经注册触摸
         */
        _this.readyTouch = false;
        _this._spawnOrigin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        // 提升为关卡脚本
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
        // 创建无根树
        NoRootTree_1.default.tree = new NoRootTree_1.default(this.treeSize);
        // 创建网格驱动
        this.creatGrid();
        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    };
    Game.prototype.start = function () {
        this.touchRegister();
        // this.creat_lineCube();
    };
    Game.prototype.update = function (dt) {
        this.gameProcess_SpawnCube();
        // 更新所有方块的位置
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, -dt * this.globalSpeed, 0);
    };
    // TAG USER FUNCTION:                                                                                    
    // SIGNPOST 网格生成                                                                                     
    Game.prototype.creatGrid = function () {
        new GridAdsorb_1.default(new cc.Vec3(this.column, this.treeSize, 0), new cc.Vec3(this.cubeWidget, this.cubeHeight, 0));
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, cc.winSize.height / 2 + this.cubeHeight, 0);
    };
    // SIGNPOST 诞生方式                                                                                     
    /**
     * 游戏流程-诞生方块
     */
    Game.prototype.gameProcess_SpawnCube = function () {
        if (this.cheackRoot()) {
            this.creat_lineCube();
            // cc.log(NTR.tree.buffer);
        }
    };
    /**
     * 检查目标叶节点是否已为过去式
     */
    Game.prototype.cheackLose = function () {
        var leaf = this.curTreeNode('leaf');
        if (!leaf)
            return false;
        var leafPos = leaf.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isoutbox = leafPos.y <= (cc.winSize.height * this.separatorPercent);
        return isoutbox;
    };
    /**
     * 检查目标根节点是否已为过去式
     */
    Game.prototype.cheackRoot = function () {
        var root = this.curTreeNode();
        if (!root)
            return true;
        var size = cc.v2(cc.winSize.width, cc.winSize.height);
        var size2 = size.div(2);
        var rootPos = root.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isinbox = new DevelopersToolGlobal_1.mathMacro(rootPos).isInBox2(size2, size2.add(cc.v2(0, this.cubeHeight / 2)));
        return isinbox;
    };
    /**
     * 返回任意目标节点
     */
    Game.prototype.curTreeNode = function (node) {
        if (node === void 0) { node = 'root'; }
        if (NoRootTree_1.default.tree[node]) {
            var treeIndex = 0;
            for (var index = 0; !NoRootTree_1.default.tree[node][index]; treeIndex = ++index)
                ;
            return NoRootTree_1.default.tree[node][treeIndex];
        }
        else
            return undefined;
    };
    // TAG NATIVE FUNCTION                                                                                   
    // SIGNPOST touchevent                                                                                   
    /**
     * 注册触摸事件
     */
    Game.prototype.touchRegister = function () {
        if (!this.readyTouch) {
            this.readyTouch = true;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].on("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 注销触摸事件
     */
    Game.prototype.touchCancel = function () {
        if (this.readyTouch) {
            this.readyTouch = false;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].off("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 当触摸发生时
     * @param event
     */
    Game.prototype.onTouchStart = function (event) {
        var touchArea = event.getLocation().x / this.cubeWidget;
        var inst = this.creat_PlayerCube();
        var inx = Math.ceil(touchArea) * (this.cubeWidget + this.cubeInteraval) - ((cc.winSize.width + this.cubeWidget) / 2);
        inst.setPosition(inx, cc.winSize.width * this.separatorPercent - cc.winSize.width);
    };
    /**
     * 诞生玩家方块
     * 玩家方块不受全局速度影响，不放在树中
     */
    Game.prototype.creat_PlayerCube = function () {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(null, true);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_retrograde(inst);
        return inst;
    };
    /**
     * 绑定逆向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_retrograde = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.playerSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, 1200);
        movement.velocity = new cc.Vec2(0, this.playerSpeed);
        inst['playerMovement'] = movement;
    };
    // TAG Prefabricated function                                                                            
    // SIGNPOST instantiation and destory Actor                                                              
    /**
     * 创建一行方块
     * 随机方式我想应该大概也许是独立随机事件
     * 每行绝对会留一个空
     * @param chance 生成机会，机会越大越容易成功，但肯定会留给玩家一个空，推荐在 3 ~ 5
     */
    Game.prototype.creat_lineCube = function (chance) {
        if (chance === void 0) { chance = 4; }
        var perch = [];
        var child = {};
        var childIndex = NoRootTree_1.default.tree.add(child);
        var loop = chance;
        while (loop--) {
            var curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                perch.push(curcol);
                var inst = this.creat_ProductionCube(childIndex, curcol);
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval), 0)));
                child[curcol] = inst;
            }
            if (perch.length >= (this.column - 1))
                break;
        }
    };
    /**
     * 创建一个方块在堆叠层
     * 并完成基本构造行为
     */
    Game.prototype.creat_ProductionCube = function (treeIndex, columnIndex) {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(treeIndex);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_consequent(inst);
        return inst;
    };
    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns
     */
    Game.prototype.creatActor = function (actor, parent) {
        var actorInst = cc.instantiate(actor);
        if (parent) {
            parent.addChild(actorInst);
        }
        else {
            this.node.addChild(actorInst);
            cc.log(actorInst);
        }
        return actorInst;
    };
    /**
     * 绑定顺向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_consequent = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.globalSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, -1200);
        movement.velocity = new cc.Vec2(0, -this.globalSpeed);
        inst['otherMovement'] = movement;
    };
    /**
     * 外部玩家阵营复制绑定控制组件
     * @param node
     */
    Game.prototype.bindMovement = function (node) {
        this.bindMovement_consequent(node);
    };
    Object.defineProperty(Game.prototype, "cube", {
        // SIGNPOST macro                                                                                        
        /**
         * 获取指定的预制体方块
         */
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['block']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "column", {
        /**
         * 获取当前所有的列数
         */
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "randomInColumn", {
        /**
         * 获取列数内的随机整数
         */
        get: function () { return Math.floor(Math.random() * this.column); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeWidget", {
        /**
         * 获取方块所占宽度
         */
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeInteraval", {
        /**
         * 获取方块间隔
         */
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeHeight", {
        /**
         * 获取方块所占高度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnOrigin", {
        /**
         * 获取方块诞生原点
         */
        get: function () {
            if (!this._spawnOrigin)
                this._spawnOrigin = cc.v2(-(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2, cc.winSize.height / 2 + this.cubeHeight * 1.4);
            return this._spawnOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnMinCount", {
        /**
         * 获取每行最小可诞生的数量
         */
        get: function () { return 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "separatorPercent", {
        /**
         * 获取截止线屏幕百分比
         */
        get: function () { return .290625; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "globalSpeed", {
        /**
         * 获取全局速度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "playerSpeed", {
        /**
         * 获取玩家方块速度
         */
        get: function () { return 1000; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "treeSize", {
        /**
         * 获取树规模
         */
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], Game.prototype, "label", void 0);
    __decorate([
        property
    ], Game.prototype, "text", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR0wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1HO0FBQ25HLDBEQUFxRDtBQUNyRCxzREFBaUQ7QUFDakQsc0RBQTBDO0FBRTFDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsZUFBZTtBQUVULElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBb1NDO1FBalNHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQXVIdkI7O1dBRUc7UUFDTyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQStJL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBcUJ4QyxDQUFDO0lBNVJHLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOO1FBQ0ksVUFBVTtRQUNWLDJDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPO1FBQ1AsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDaEMsT0FBTyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUV0QyxRQUFRO1FBQ1Isb0JBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxvQkFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsOERBQThEO0lBQ2xFLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxD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Q0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUMvRCxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQ2hELENBQUE7WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVywrQkFBYTtRQUh4Qjs7V0FFRzthQUNILGNBQXFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJaEQsc0JBQVcsa0NBQWdCO1FBSDNCOztXQUVHO2FBQ0gsY0FBd0MsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUl6RCxzQkFBVyw2QkFBVztRQUh0Qjs7V0FFRzthQUNILGNBQW1DLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJaEQsc0JBQVcsNkJBQVc7UUFIdEI7O1dBRUc7YUFDSCxjQUFtQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWpELHNCQUFXLDBCQUFRO1FBSG5COztXQUVHO2FBQ0gsY0FBZ0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQWhTNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FDSTtJQUd2QjtRQURDLFFBQVE7c0NBQ2M7SUFOTixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb1N4QjtJQUFELFdBQUM7Q0FwU0QsQUFvU0MsQ0FwU2lDLEVBQUUsQ0FBQyxTQUFTLEdBb1M3QztrQkFwU29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IFBhd25Nb3ZlbWVudCBmcm9tICcuLi9iYXNlL3Rvb2wvUGF3bk1vdmVtZW50JztcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgTlRSIGZyb20gXCIuLi9iYXNlL3Rvb2wvTm9Sb290VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIOeJm+WktOS6uiBOVFIg57un5om/6IeqcmluZ2J1ZmZlcue7p+aJv+iHqlJpZ29yb3VzQXJyYXlcclxuICog6amx5Yqo572R5qC8IEdyaWRBYnNvcmIg55So5p2l6amx5Yqo5YW25LuW5pa55Z2X55qE5a+56b2Q5LiO6L+Q5YqoXHJcbiAqIOenu+WKqOe7hOS7tiBQYXduTW92ZW1lbnQg566A5Y2V55qE6L+Q5Yqo6Kej566X5Zmo77yM5LuF5L+d55WZ5LqG6YCf5bqm6Kej566X5ZKM5oq16L6+6Kej566X77yM5rKh5LqL5Y+v5Lul5o2i552A546pXHJcbiAqIOaVsOWtpuWuj+W6kyBtbSDmlYjnjofkvY7vvIzmsqHkuovliKvnlKhcclxuICog5YWo5bGA5LuT5bqTIGNjdnYud2FyZWhvdXNlIOeUqOadpeS/neWtmOWKqOaAgeWKoOi9veWGheWuuVxyXG4gKiDlhajlsYDlt6XlhbcgY2N2di50b29sIOaaguaXoFxyXG4gKiDlhajlsYDlhbbku5YgY2N2di5vdGhlciDmmoLml6BcclxuICog5YWo5bGA55WM6Z2iIGNjdnYubGF5ZXIg5L+d5a2Y5b2T5YmN5LiW55WM5Lit55qE5omA5pyJ5bey5a6a5LmJ5bGCXHJcbiAqIOWFqOWxgOiEmuacrCBjY3Z2LnNjcmlwdCDkv53lrZjov5nkuKrlhbPljaHohJrmnKxcclxuICog5YWo5bGA5a6e5L6LIGNjdnYuaW5zdGFuY2Ug5L2c5Li65YWo5bGA5Yay56qB5rGgXHJcbiAqL1xyXG4vLyAo44CDwrQtz4nvvaUpIOivtuWYv34gXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5o+Q5Y2H5Li65YWz5Y2h6ISa5pysXHJcbiAgICAgICAgY2N2di5zY3JpcHQgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g5Yib5bu65peg5qC55qCRXHJcbiAgICAgICAgTlRSLnRyZWUgPSBuZXcgTlRSKHRoaXMudHJlZVNpemUpO1xyXG4gICAgICAgIC8vIOWIm+W7uue9keagvOmpseWKqFxyXG4gICAgICAgIHRoaXMuY3JlYXRHcmlkKCk7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LmZyaXN0U2NyaXB0KVxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LndhcmVob3VzZSk7XHJcbiAgICAgICAgLy8gY2N2di5sYXllcnNbMF0uYWRkQ2hpbGQobmV3IGNjdnYud2FyZWhvdXNlWydmcmFtZXMnXVsnYmcnXSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRvdWNoUmVnaXN0ZXIoKTtcclxuICAgICAgICAvLyB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCk7XHJcbiAgICAgICAgLy8g5pu05paw5omA5pyJ5pa55Z2X55qE5L2N572uXHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IG5ldyBjYy5WZWMzKDAsIC1kdCAqIHRoaXMuZ2xvYmFsU3BlZWQsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOeUn+aIkCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRHcmlkKCkge1xyXG4gICAgICAgIG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyh0aGlzLmNvbHVtbiwgdGhpcy50cmVlU2l6ZSwgMCksXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHRoaXMuY3ViZVdpZGdldCwgdGhpcy5jdWJlSGVpZ2h0LCAwKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IG5ldyBjYy5WZWMzKDAsIGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHRoaXMuY3ViZUhlaWdodCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6K+e55Sf5pa55byPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5rWB56iLLeivnueUn+aWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWFja1Jvb3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhOVFIudHJlZS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeebruagh+WPtuiKgueCueaYr+WQpuW3suS4uui/h+WOu+W8j1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrTG9zZSgpIHtcclxuICAgICAgICBsZXQgbGVhZiA9IHRoaXMuY3VyVHJlZU5vZGUoJ2xlYWYnKTtcclxuICAgICAgICBpZiAoIWxlYWYpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgbGVhZlBvcyA9IGxlYWYuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgbGV0IGlzb3V0Ym94ID0gbGVhZlBvcy55IDw9IChjYy53aW5TaXplLmhlaWdodCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCk7XHJcbiAgICAgICAgcmV0dXJuIGlzb3V0Ym94O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l55uu5qCH5qC56IqC54K55piv5ZCm5bey5Li66L+H5Y675byPXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjaGVhY2tSb290KCkge1xyXG4gICAgICAgIGxldCByb290ID0gdGhpcy5jdXJUcmVlTm9kZSgpO1xyXG4gICAgICAgIGlmICghcm9vdCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52MihjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IHNpemUyID0gc2l6ZS5kaXYoMik7XHJcbiAgICAgICAgbGV0IHJvb3RQb3MgPSByb290LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgIGxldCBpc2luYm94ID0gbmV3IG1tKHJvb3RQb3MpLmlzSW5Cb3gyKHNpemUyLCBzaXplMi5hZGQoY2MudjIoMCwgdGhpcy5jdWJlSGVpZ2h0IC8gMikpKTtcclxuICAgICAgICByZXR1cm4gaXNpbmJveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuS7u+aEj+ebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VyVHJlZU5vZGUobm9kZTogc3RyaW5nID0gJ3Jvb3QnKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKE5UUi50cmVlW25vZGVdKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmVlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7ICFOVFIudHJlZVtub2RlXVtpbmRleF07IHRyZWVJbmRleCA9ICsraW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gTlRSLnRyZWVbbm9kZV1bdHJlZUluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBOQVRJVkUgRlVOQ1RJT04gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIHRvdWNoZXZlbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jplIDop6bmkbjkuovku7ZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHRvdWNoQ2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeVRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bey57uP5rOo5YaM6Kem5pG4XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZWFkeVRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPop6bmkbjlj5HnlJ/ml7ZcclxuICAgICAqIEBwYXJhbSBldmVudCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaEFyZWEgPSBldmVudC5nZXRMb2NhdGlvbigpLnggLyB0aGlzLmN1YmVXaWRnZXQ7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1BsYXllckN1YmUoKTtcclxuICAgICAgICBsZXQgaW54ID0gTWF0aC5jZWlsKHRvdWNoQXJlYSkgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSAtICgoY2Mud2luU2l6ZS53aWR0aCArIHRoaXMuY3ViZVdpZGdldCkgLyAyKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKGlueCwgY2Mud2luU2l6ZS53aWR0aCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCAtIGNjLndpblNpemUud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+e55Sf546p5a625pa55Z2XXHJcbiAgICAgKiDnjqnlrrbmlrnlnZfkuI3lj5flhajlsYDpgJ/luqblvbHlk43vvIzkuI3mlL7lnKjmoJHkuK1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0X1BsYXllckN1YmUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3IodGhpcy5jdWJlLCBjY3Z2LmxheWVyc1sxXSk7XHJcbiAgICAgICAgdHJ5IHsgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdChudWxsLCB0cnVlKTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X3JldHJvZ3JhZGUoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7keWumumAhuWQkeenu+WKqOaOp+WItue7hOS7tlxyXG4gICAgICogQHBhcmFtIGluc3QgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBiaW5kTW92ZW1lbnRfcmV0cm9ncmFkZShpbnN0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vdmVtZW50ID0gbmV3IFBhd25Nb3ZlbWVudChpbnN0KTtcclxuICAgICAgICBtb3ZlbWVudC5tYXhTcGVlZCA9IHRoaXMucGxheWVyU3BlZWQ7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1Gb3JjZSA9IG5ldyBjYy5WZWMyKDAsIDEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgdGhpcy5wbGF5ZXJTcGVlZCk7XHJcbiAgICAgICAgaW5zdFsncGxheWVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBQcmVmYWJyaWNhdGVkIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIGluc3RhbnRpYXRpb24gYW5kIGRlc3RvcnkgQWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA6KGM5pa55Z2XXHJcbiAgICAgKiDpmo/mnLrmlrnlvI/miJHmg7PlupTor6XlpKfmpoLkuZ/orrjmmK/ni6znq4vpmo/mnLrkuovku7ZcclxuICAgICAqIOavj+ihjOe7neWvueS8mueVmeS4gOS4quepulxyXG4gICAgICogQHBhcmFtIGNoYW5jZSDnlJ/miJDmnLrkvJrvvIzmnLrkvJrotorlpKfotorlrrnmmJPmiJDlip/vvIzkvYbogq/lrprkvJrnlZnnu5nnjqnlrrbkuIDkuKrnqbrvvIzmjqjojZDlnKggMyB+IDVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0X2xpbmVDdWJlKGNoYW5jZSA9IDQpIHtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXTtcclxuICAgICAgICBsZXQgY2hpbGQgPSB7fTtcclxuICAgICAgICBsZXQgY2hpbGRJbmRleCA9IE5UUi50cmVlLmFkZChjaGlsZCk7XHJcbiAgICAgICAgbGV0IGxvb3AgPSBjaGFuY2U7XHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gdGhpcy5yYW5kb21JbkNvbHVtbjtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHBlcmNoLnB1c2goY3VyY29sKVxyXG4gICAgICAgICAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1Byb2R1Y3Rpb25DdWJlKGNoaWxkSW5kZXgsIGN1cmNvbCk7XHJcbiAgICAgICAgICAgICAgICBpbnN0LnNldFBvc2l0aW9uKHRoaXMuc3Bhd25PcmlnaW4uYWRkKGNjLnYyKGN1cmNvbCAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpLCAwKSkpXHJcbiAgICAgICAgICAgICAgICBjaGlsZFtjdXJjb2xdID0gaW5zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVyY2gubGVuZ3RoID49ICh0aGlzLmNvbHVtbiAtIDEpKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOS4quaWueWdl+WcqOWghuWPoOWxglxyXG4gICAgICog5bm25a6M5oiQ5Z+65pys5p6E6YCg6KGM5Li6XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdF9Qcm9kdWN0aW9uQ3ViZSh0cmVlSW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcik6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHRoaXMuY3ViZSwgY2N2di5sYXllcnNbMV0pXHJcbiAgICAgICAgdHJ5IHsgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdCh0cmVlSW5kZXgpOyB9XHJcbiAgICAgICAgY2F0Y2ggeyBjYy5sb2coXCLmib7kuI3liLDnu4Tku7Y6IEJsb2NrXCIpOyB9XHJcbiAgICAgICAgdGhpcy5iaW5kTW92ZW1lbnRfY29uc2VxdWVudChpbnN0KTtcclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXQgaW5zdGFudGlhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcGFyZW50IOWunuS+i+WMlueahOWvueixoeWwhuimgemZhOWKoOeahOebruagh++8jOWmguaenOeVmeepuuWImeS4uuiHqui6q1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5HlrprpobrlkJHnp7vliqjmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbnN0IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYmluZE1vdmVtZW50X2NvbnNlcXVlbnQoaW5zdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb3ZlbWVudCA9IG5ldyBQYXduTW92ZW1lbnQoaW5zdCk7XHJcbiAgICAgICAgbW92ZW1lbnQubWF4U3BlZWQgPSB0aGlzLmdsb2JhbFNwZWVkO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1EcmFnID0gMDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRm9yY2UgPSBuZXcgY2MuVmVjMigwLCAtMTIwMCk7XHJcbiAgICAgICAgbW92ZW1lbnQudmVsb2NpdHkgPSBuZXcgY2MuVmVjMigwLCAtdGhpcy5nbG9iYWxTcGVlZCk7XHJcbiAgICAgICAgaW5zdFsnb3RoZXJNb3ZlbWVudCddID0gbW92ZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWklumDqOeOqeWutumYteiQpeWkjeWItue7keWumuaOp+WItue7hOS7tlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiaW5kTW92ZW1lbnQobm9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X2NvbnNlcXVlbnQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1QgbWFjcm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIflrprnmoTpooTliLbkvZPmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlKCk6IGNjLlByZWZhYiB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydibG9jayddOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeaJgOacieeahOWIl+aVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbHVtbigpOiBudW1iZXIgeyByZXR1cm4gNDsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliJfmlbDlhoXnmoTpmo/mnLrmlbTmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCByYW5kb21JbkNvbHVtbigpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb2x1bW4pOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaWueWdl+aJgOWNoOWuveW6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGN1YmVXaWRnZXQoKTogbnVtYmVyIHsgcmV0dXJuIDE3NzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfpl7TpmpRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlSW50ZXJhdmFsKCk6IG51bWJlciB7IHJldHVybiAzOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaWueWdl+aJgOWNoOmrmOW6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGN1YmVIZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfor57nlJ/ljp/ngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGF3bk9yaWdpbigpOiBjYy5WZWMyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3NwYXduT3JpZ2luKVxyXG4gICAgICAgICAgICB0aGlzLl9zcGF3bk9yaWdpbiA9IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgLSh0aGlzLmNvbHVtbiAtIDEpICogKHRoaXMuY3ViZVdpZGdldCArIHRoaXMuY3ViZUludGVyYXZhbCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgY2Mud2luU2l6ZS5oZWlnaHQgLyAyICsgdGhpcy5jdWJlSGVpZ2h0ICogMS40XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3Bhd25PcmlnaW47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX3NwYXduT3JpZ2luOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5q+P6KGM5pyA5bCP5Y+v6K+e55Sf55qE5pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3Bhd25NaW5Db3VudCgpOiBudW1iZXIgeyByZXR1cm4gMjsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiKrmraLnur/lsY/luZXnmb7liIbmr5RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzZXBhcmF0b3JQZXJjZW50KCk6IG51bWJlciB7IHJldHVybiAuMjkwNjI1OyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFqOWxgOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdsb2JhbFNwZWVkKCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W546p5a625pa55Z2X6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGxheWVyU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qCR6KeE5qihXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdHJlZVNpemUoKTogbnVtYmVyIHsgcmV0dXJuIDMwOyB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GameLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8feabNR+WNMU7CO+D93SETO', 'GameLevel');
// scripts/game/GameLevel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GameLevel.prototype.onLoad = function () {
        // 初始化对齐网格
        new GridAdsorb_1.default(new cc.Vec3(Setting_1.default.Game_Column, Setting_1.default.Game_Row2, 0), new cc.Vec3(Setting_1.default.Cube_width, Setting_1.default.Cube_Height, 0));
        // 基本初始化
        this.init();
    };
    GameLevel.prototype.start = function () {
    };
    // update (dt) {}
    // tag 用户函数部分 
    /**
     * 游戏重置及初始化
     */
    GameLevel.prototype.init = function () {
        // 重置网格指针
        Setting_1.default.GridCurrentPoint = 0;
    };
    __decorate([
        property(cc.Label)
    ], GameLevel.prototype, "label", void 0);
    __decorate([
        property
    ], GameLevel.prototype, "text", void 0);
    GameLevel = __decorate([
        ccclass,
        executeInEditMode
    ], GameLevel);
    return GameLevel;
}(cc.Component));
exports.default = GameLevel;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUFpRDtBQUNqRCxxQ0FBMkI7QUFDckIsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFJL0Q7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF1Q0M7UUFwQ0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQWlDM0IsQ0FBQztJQS9CRyx3QkFBd0I7SUFFeEIsMEJBQU0sR0FBTjtRQUNJLFVBQVU7UUFDVixJQUFJLG9CQUFVLENBQ1YsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFFLENBQUMsV0FBVyxFQUFFLGlCQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUM1QyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQUUsQ0FBQyxVQUFVLEVBQUUsaUJBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQ2hELENBQUM7UUFDRixRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixjQUFjO0lBRWQ7O09BRUc7SUFDTyx3QkFBSSxHQUFkO1FBQ0ksU0FBUztRQUNULGlCQUFFLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBRTVCLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUd2QjtRQURDLFFBQVE7MkNBQ2M7SUFOTixTQUFTO1FBRjdCLE9BQU87UUFDUCxpQkFBaUI7T0FDRyxTQUFTLENBdUM3QjtJQUFELGdCQUFDO0NBdkNELEFBdUNDLENBdkNzQyxFQUFFLENBQUMsU0FBUyxHQXVDbEQ7a0JBdkNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5a+56b2Q572R5qC8XHJcbiAgICAgICAgbmV3IEdyaWRBYnNvcmIoXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHNzLkdhbWVfQ29sdW1uLCBzcy5HYW1lX1JvdzIsIDApLFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5DdWJlX3dpZHRoLCBzcy5DdWJlX0hlaWdodCwgMClcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOWfuuacrOWIneWni+WMllxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflh73mlbDpg6jliIYgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ph43nva7lj4rliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6YeN572u572R5qC85oyH6ZKIXHJcbiAgICAgICAgc3MuR3JpZEN1cnJlbnRQb2ludCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/UObjectBaseUtility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8112c+X0kdHRb8nGtGqyYoB', 'UObjectBaseUtility');
// scripts/base/core/UObjectBaseUtility.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UObjectBaseUtility_Private = /** @class */ (function () {
    function UObjectBaseUtility_Private() {
    }
    return UObjectBaseUtility_Private;
}());
var UObjectBaseUtility = /** @class */ (function (_super) {
    __extends(UObjectBaseUtility, _super);
    function UObjectBaseUtility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObjectBaseUtility;
}(UObjectBaseUtility_Private));
exports.default = UObjectBaseUtility;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcVU9iamVjdEJhc2VVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUFFQSxDQUFDO0lBQUQsaUNBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUNEO0lBQWdELHNDQUEwQjtJQUExRTs7SUFFQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGK0MsMEJBQTBCLEdBRXpFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIFVPYmplY3RCYXNlVXRpbGl0eV9Qcml2YXRlIHtcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVU9iamVjdEJhc2VVdGlsaXR5IGV4dGVuZHMgVU9iamVjdEJhc2VVdGlsaXR5X1ByaXZhdGUge1xyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/UObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b385uRoMRIUo4cEngshK62', 'UObject');
// scripts/base/core/UObject.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UObjectBaseUtility_1 = require("./UObjectBaseUtility");
var UObject_Private = /** @class */ (function (_super) {
    __extends(UObject_Private, _super);
    function UObject_Private() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObject_Private;
}(UObjectBaseUtility_1.default));
var UObject = /** @class */ (function (_super) {
    __extends(UObject, _super);
    function UObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObject;
}(UObject_Private));
exports.default = UObject;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcVU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFdEQ7SUFBOEIsbUNBQWtCO0lBQWhEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUY2Qiw0QkFBa0IsR0FFL0M7QUFFRDtJQUFxQywyQkFBZTtJQUFwRDs7SUFHQSxDQUFDO0lBQUQsY0FBQztBQUFELENBSEEsQUFHQyxDQUhvQyxlQUFlLEdBR25EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVPYmplY3RCYXNlVXRpbGl0eSBmcm9tIFwiLi9VT2JqZWN0QmFzZVV0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFVPYmplY3RfUHJpdmF0ZSBleHRlbmRzIFVPYmplY3RCYXNlVXRpbGl0eSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVT2JqZWN0IGV4dGVuZHMgVU9iamVjdF9Qcml2YXRlIHtcclxuXHJcblxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/EventReflect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38e776njEdL3brdTU1NpFG1', 'EventReflect');
// scripts/base/tool/EventReflect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReflect = void 0;
var UObject_1 = require("../core/UObject");
// 自定义反射
var EventReflect = /** @class */ (function (_super) {
    __extends(EventReflect, _super);
    function EventReflect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventReflect.prototype, "target", {
        get: function () {
            return;
        },
        enumerable: false,
        configurable: true
    });
    return EventReflect;
}(UObject_1.default));
exports.EventReflect = EventReflect;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcRXZlbnRSZWZsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsUUFBUTtBQUNSO0lBQWtDLGdDQUFPO0lBQXpDOztJQVVBLENBQUM7SUFIRyxzQkFBVyxnQ0FBTTthQUFqQjtZQUNJLE9BQU07UUFDVixDQUFDOzs7T0FBQTtJQUNMLG1CQUFDO0FBQUQsQ0FWQSxBQVVDLENBVmlDLGlCQUFPLEdBVXhDO0FBVlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVU9iamVjdCBmcm9tIFwiLi4vY29yZS9VT2JqZWN0XCI7XHJcbi8vIOiHquWumuS5ieWPjeWwhFxyXG5leHBvcnQgY2xhc3MgRXZlbnRSZWZsZWN0IGV4dGVuZHMgVU9iamVjdCB7XHJcbiAgICAvKipcclxuICAgICAqIOWPjeWwhOWunuS+iyAgXHJcbiAgICAgKiDkv53lrZjmiYDmnInlj43lsITlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfUmVmbGVjdEluc3Q7XHJcblxyXG4gICAgcHVibGljIGdldCB0YXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/GridAdsorb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d30d0AcIhN+4RMZHACz6v2', 'GridAdsorb');
// scripts/base/tool/GridAdsorb.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridAbsorb = /** @class */ (function () {
    /**
     * 网格对齐
     * 创建的同时，如果类单例中不存在实例，则将此实例赋予到类单例中
     */
    function GridAbsorb(axisNum, cellSize) {
        this._CellSize = new cc.Vec3(100);
        this._GridOffset = new cc.Vec3(0);
        this._GridSize = null;
        this._GridAxisCellNum = new cc.Vec3(100);
        // + -
        this._GridEdgeAnchor_X = new cc.Vec2(.5, .5);
        this._GridEdgeAnchor_Y = new cc.Vec2(.5, .5);
        this._GridEdgeAnchor_Z = new cc.Vec2(.5, .5);
        if (axisNum) {
            this.cellNum = axisNum;
            if (cellSize) {
                this.cellSize = cellSize;
                this.gridSize = new cc.Vec3(axisNum.x * cellSize.x, axisNum.y * cellSize.y, axisNum.z * cellSize.z);
            }
        }
        if (!GridAbsorb._ExclusiveGrid) {
            GridAbsorb._ExclusiveGrid = this;
        }
    }
    Object.defineProperty(GridAbsorb, "grid", {
        /**
         * 获取静态唯一网格实例
         */
        get: function () {
            this._ExclusiveGrid = this._ExclusiveGrid || new GridAbsorb();
            return this._ExclusiveGrid;
        },
        /**
         * 将实例设置到静态唯一网格实例
         */
        set: function (grid) {
            this._ExclusiveGrid = grid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "cellSize", {
        /**
         * 获取单元格尺寸
         */
        get: function () {
            return this._CellSize;
        },
        /**
         * 设置单元格尺寸
         */
        set: function (size) {
            this._CellSize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "offset", {
        /**
         * 获取网格偏移量
         */
        get: function () {
            return this._GridOffset;
        },
        /**
         * 设置网格偏移量
         */
        set: function (offset) {
            var self = this;
            var newOffset = this._GridOffset.add(offset);
            function vecMod(axis) {
                return newOffset[axis] % self.gridSize[axis];
            }
            this._GridOffset = new cc.Vec3(vecMod('x'), vecMod('y'), vecMod('z'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "gridSize", {
        /**
         * 获取网格尺寸
         */
        get: function () {
            return this._GridSize;
        },
        /**
         * 设置网格尺寸
         */
        set: function (size) {
            this._GridSize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "cellNum", {
        /**
         * 获取网格轴晶格数量
         */
        get: function () {
            return this._GridAxisCellNum;
        },
        /**
         * 设置网格轴晶格数量
         */
        set: function (num) {
            this._GridAxisCellNum = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "anchor", {
        /**
         * 获取网格边缘锚点
         * 取值在[0, 1]
         */
        get: function () {
            function toAlige(vec) {
                return (vec.x - vec.y + 1) / 2;
            }
            return new cc.Vec3(toAlige(this._GridEdgeAnchor_X), toAlige(this._GridEdgeAnchor_Y), toAlige(this._GridEdgeAnchor_Z));
        },
        /**
         * 设置网格边缘锚点
         * 取值在[0, 1]，跟随引擎
         */
        set: function (anchor) {
            function toAnchor(num) {
                if (!num)
                    return new cc.Vec2(.5);
                var axis = Math.max(Math.min(num, 1), 0) - .5;
                return new cc.Vec2(.5 - axis, .5 + axis);
            }
            this._GridEdgeAnchor_X = toAnchor(anchor.x);
            this._GridEdgeAnchor_Y = toAnchor(anchor.y);
            this._GridEdgeAnchor_Z = toAnchor(anchor.z);
        },
        enumerable: false,
        configurable: true
    });
    // SIGNPOST 网格查找                                                                                
    /**
     * 从各轴索引获得网格坐标
     * cocos和unity都是y轴向上，xz为平面
     * 为了适配平面坐标，z为深度轴
     * @param {intVec3} index
     * @return {int}
     */
    GridAbsorb.prototype.getGridPositionByIndex = function (index) {
        var self = this;
        function getPos(axis) {
            return (Math.floor(index[axis]) % self.cellNum[axis])
                * self.cellSize[axis] + self.offset[axis];
        }
        var x = getPos('x');
        var y = getPos('y');
        if (index instanceof cc.Vec3) {
            var z = getPos('z');
            return new cc.Vec3(x, y, z);
        }
        return new cc.Vec2(x, y);
    };
    GridAbsorb._ExclusiveGrid = null;
    return GridAbsorb;
}());
exports.default = GridAbsorb;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR3JpZEFkc29yYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBaUJJOzs7T0FHRztJQUNILG9CQUFZLE9BQWlCLEVBQUUsUUFBa0I7UUFpQnZDLGNBQVMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFjdEMsZ0JBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFtQnRDLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFjMUIscUJBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBY3ZELE1BQU07UUFDSSxzQkFBaUIsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELHNCQUFpQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsc0JBQWlCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQWhGdkQsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ3ZCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQ3pCLENBQUM7YUFDTDtTQUNKO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDNUIsVUFBVSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBOUJELHNCQUFrQixrQkFBSTtRQUh0Qjs7V0FFRzthQUNIO1lBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksVUFBVSxFQUFFLENBQUE7WUFDN0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQXVCLElBQWdCO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUM7OztPQU5BO0lBaUNELHNCQUFXLGdDQUFRO1FBSG5COztXQUVHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBb0IsSUFBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FOQTtJQVlELHNCQUFXLDhCQUFNO1FBSGpCOztXQUVHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBa0IsTUFBZTtZQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsU0FBUyxNQUFNLENBQUMsSUFBWTtnQkFDeEIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUN6RSxDQUFDOzs7T0FYQTtJQWlCRCxzQkFBVyxnQ0FBUTtRQUhuQjs7V0FFRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQW9CLElBQWE7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQzs7O09BTkE7SUFZRCxzQkFBVywrQkFBTztRQUhsQjs7V0FFRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBbUIsR0FBWTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLENBQUM7OztPQU5BO0lBZ0JELHNCQUFXLDhCQUFNO1FBSmpCOzs7V0FHRzthQUNIO1lBQ0ksU0FBUyxPQUFPLENBQUMsR0FBWTtnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQ2xDLENBQUM7UUFDTixDQUFDO1FBQ0Q7OztXQUdHO2FBQ0gsVUFBa0IsTUFBZTtZQUM3QixTQUFTLFFBQVEsQ0FBQyxHQUFXO2dCQUN6QixJQUFJLENBQUMsR0FBRztvQkFBRSxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzlDLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FkQTtJQWdCRCxnR0FBZ0c7SUFFaEc7Ozs7OztPQU1HO0lBQ0ksMkNBQXNCLEdBQTdCLFVBQTJELEtBQVE7UUFDL0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFNBQVMsTUFBTSxDQUFDLElBQVk7WUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztrQkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksS0FBSyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFNLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFNLENBQUM7SUFDbEMsQ0FBQztJQXhKZ0IseUJBQWMsR0FBZSxJQUFJLENBQUM7SUEwSnZELGlCQUFDO0NBNUpELEFBNEpDLElBQUE7a0JBNUpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQWJzb3JiIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9FeGNsdXNpdmVHcmlkOiBHcmlkQWJzb3JiID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6Z2Z5oCB5ZSv5LiA572R5qC85a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdyaWQoKSB7XHJcbiAgICAgICAgdGhpcy5fRXhjbHVzaXZlR3JpZCA9IHRoaXMuX0V4Y2x1c2l2ZUdyaWQgfHwgbmV3IEdyaWRBYnNvcmIoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9FeGNsdXNpdmVHcmlkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblrp7kvovorr7nva7liLDpnZnmgIHllK/kuIDnvZHmoLzlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgZ3JpZChncmlkOiBHcmlkQWJzb3JiKSB7XHJcbiAgICAgICAgdGhpcy5fRXhjbHVzaXZlR3JpZCA9IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnvZHmoLzlr7npvZBcclxuICAgICAqIOWIm+W7uueahOWQjOaXtu+8jOWmguaenOexu+WNleS+i+S4reS4jeWtmOWcqOWunuS+i++8jOWImeWwhuatpOWunuS+i+i1i+S6iOWIsOexu+WNleS+i+S4rVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihheGlzTnVtPzogY2MuVmVjMywgY2VsbFNpemU/OiBjYy5WZWMzKSB7XHJcbiAgICAgICAgaWYgKGF4aXNOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsTnVtID0gYXhpc051bTtcclxuICAgICAgICAgICAgaWYgKGNlbGxTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxTaXplID0gY2VsbFNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRTaXplID0gbmV3IGNjLlZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc051bS54ICogY2VsbFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICBheGlzTnVtLnkgKiBjZWxsU2l6ZS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNOdW0ueiAqIGNlbGxTaXplLnpcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkKSB7XHJcbiAgICAgICAgICAgIEdyaWRBYnNvcmIuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0NlbGxTaXplOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMTAwKTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2VsbFNpemUoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlbGxTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ljZXlhYPmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjZWxsU2l6ZShzaXplOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5fQ2VsbFNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfR3JpZE9mZnNldDogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlgY/np7vph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvZmZzZXQoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWBj+enu+mHjyAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb2Zmc2V0KG9mZnNldDogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbmV3T2Zmc2V0ID0gdGhpcy5fR3JpZE9mZnNldC5hZGQob2Zmc2V0KTtcclxuICAgICAgICBmdW5jdGlvbiB2ZWNNb2QoYXhpczogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld09mZnNldFtheGlzXSAlIHNlbGYuZ3JpZFNpemVbYXhpc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0dyaWRPZmZzZXQgPSBuZXcgY2MuVmVjMyh2ZWNNb2QoJ3gnKSwgdmVjTW9kKCd5JyksIHZlY01vZCgneicpKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfR3JpZFNpemU6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmlkU2l6ZSgpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZFNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyaWRTaXplKHNpemU6IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLl9HcmlkU2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9HcmlkQXhpc0NlbGxOdW06IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygxMDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovbTmmbbmoLzmlbDph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjZWxsTnVtKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkQXhpc0NlbGxOdW07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOi9tOaZtuagvOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNlbGxOdW0obnVtOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZEF4aXNDZWxsTnVtID0gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICsgLVxyXG4gICAgcHJvdGVjdGVkIF9HcmlkRWRnZUFuY2hvcl9YOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoLjUsIC41KTtcclxuICAgIHByb3RlY3RlZCBfR3JpZEVkZ2VBbmNob3JfWTogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC41LCAuNSk7XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRFZGdlQW5jaG9yX1o6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMiguNSwgLjUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovrnnvJjplJrngrkgIFxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW5jaG9yKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvQWxpZ2UodmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodmVjLnggLSB2ZWMueSArIDEpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1gpLFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1kpLFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1opXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC86L6557yY6ZSa54K5XHJcbiAgICAgKiDlj5blgLzlnKhbMCwgMV3vvIzot5/pmo/lvJXmk45cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhbmNob3IoYW5jaG9yOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdG9BbmNob3IobnVtOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFudW0pIHJldHVybiBuZXcgY2MuVmVjMiguNSk7XHJcbiAgICAgICAgICAgIGxldCBheGlzID0gTWF0aC5tYXgoTWF0aC5taW4obnVtLCAxKSwgMCkgLSAuNTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKC41IC0gYXhpcywgLjUgKyBheGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fR3JpZEVkZ2VBbmNob3JfWCA9IHRvQW5jaG9yKGFuY2hvci54KTtcclxuICAgICAgICB0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZID0gdG9BbmNob3IoYW5jaG9yLnkpO1xyXG4gICAgICAgIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1ogPSB0b0FuY2hvcihhbmNob3Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg572R5qC85p+l5om+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDku47lkITovbTntKLlvJXojrflvpfnvZHmoLzlnZDmoIcgIFxyXG4gICAgICogY29jb3Plkox1bml0eemDveaYr3novbTlkJHkuIrvvIx4euS4uuW5s+mdoiAgXHJcbiAgICAgKiDkuLrkuobpgILphY3lubPpnaLlnZDmoIfvvIx65Li65rex5bqm6L20XHJcbiAgICAgKiBAcGFyYW0ge2ludFZlYzN9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJuIHtpbnR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRHcmlkUG9zaXRpb25CeUluZGV4PFQgZXh0ZW5kcyBjYy5WZWMzIHwgY2MuVmVjMj4oaW5kZXg6IFQpOiBUIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UG9zKGF4aXM6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihpbmRleFtheGlzXSkgJSBzZWxmLmNlbGxOdW1bYXhpc10pXHJcbiAgICAgICAgICAgICAgICAqIHNlbGYuY2VsbFNpemVbYXhpc10gKyBzZWxmLm9mZnNldFtheGlzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHggPSBnZXRQb3MoJ3gnKTtcclxuICAgICAgICBsZXQgeSA9IGdldFBvcygneScpO1xyXG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIGNjLlZlYzMpIHtcclxuICAgICAgICAgICAgbGV0IHogPSBnZXRQb3MoJ3onKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKHgsIHksIHopIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih4LCB5KSBhcyBUO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/PanelTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64efe9poixCx6gFMYxQOlei', 'PanelTool');
// scripts/base/tool/PanelTool.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelTool = /** @class */ (function (_super) {
    __extends(PanelTool, _super);
    function PanelTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._generalLayer = ['BackgroundLayer', 'EternalityUILayer', 'DynamicUILayer'];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    PanelTool.prototype.onLoad = function () {
        var layers = this.node.children;
        /**
         * 可用的剩余层
         */
        var residueLayersName = this._generalLayer;
        for (var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
            var layer = layers[layerIndex];
            if (layer.getComponent(cc.Camera))
                continue;
            for (var nameIndex = 0; nameIndex < residueLayersName.length; nameIndex++) {
                if (layer.name == residueLayersName[nameIndex]) {
                    residueLayersName[nameIndex] = null;
                    DevelopersToolGlobal_1.DevelopersToolGlobal.layer = layers[layerIndex];
                    break;
                }
            }
        }
    };
    __decorate([
        property({
            type: cc.String,
            displayName: '通用层名单',
            tooltip: '层按放置顺序设定优先级，与名称顺序无关',
            visible: true,
        })
    ], PanelTool.prototype, "_generalLayer", void 0);
    PanelTool = __decorate([
        ccclass
    ], PanelTool);
    return PanelTool;
}(cc.Component));
exports.default = PanelTool;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGFuZWxUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2RTtBQUV2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWlDQztRQXpCRyxtQkFBYSxHQUFhLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7SUF5QnpGLENBQUM7SUF2Qkcsd0JBQXdCO0lBQ3hCLDBCQUFNLEdBQU47UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQzs7V0FFRztRQUNILElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxLQUFLLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUMvRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsU0FBUztZQUU1QyxLQUFLLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUV2RSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDcEMsMkNBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNoQyxNQUFNO2lCQUNUO2FBQ0o7U0FDSjtJQUVMLENBQUM7SUF2QkQ7UUFOQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFDZixXQUFXLEVBQUUsT0FBTztZQUNwQixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUM7b0RBQ21GO0lBUnBFLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FpQzdCO0lBQUQsZ0JBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3NDLEVBQUUsQ0FBQyxTQUFTLEdBaUNsRDtrQkFqQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSAnLi4vY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxUb29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlN0cmluZyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mAmueUqOWxguWQjeWNlScsXHJcbiAgICAgICAgdG9vbHRpcDogJ+WxguaMieaUvue9rumhuuW6j+iuvuWumuS8mOWFiOe6p++8jOS4juWQjeensOmhuuW6j+aXoOWFsycsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBfZ2VuZXJhbExheWVyOiBzdHJpbmdbXSA9IFsnQmFja2dyb3VuZExheWVyJywgJ0V0ZXJuYWxpdHlVSUxheWVyJywgJ0R5bmFtaWNVSUxheWVyJ107XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGxheWVycyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj6/nlKjnmoTliankvZnlsYJcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgcmVzaWR1ZUxheWVyc05hbWUgPSB0aGlzLl9nZW5lcmFsTGF5ZXI7XHJcbiAgICAgICAgZm9yIChsZXQgbGF5ZXJJbmRleCA9IDA7IGxheWVySW5kZXggPCBsYXllcnMubGVuZ3RoOyBsYXllckluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZUluZGV4ID0gMDsgbmFtZUluZGV4IDwgcmVzaWR1ZUxheWVyc05hbWUubGVuZ3RoOyBuYW1lSW5kZXgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYXllci5uYW1lID09IHJlc2lkdWVMYXllcnNOYW1lW25hbWVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpZHVlTGF5ZXJzTmFtZVtuYW1lSW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjY3Z2LmxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/PawnMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32087ASkt9CBbFwJno3IBwU', 'PawnMovement');
// scripts/base/tool/PawnMovement.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var PawnMovement = /** @class */ (function () {
    function PawnMovement(context) {
        this.context = null;
        // TAG move range setting                                                                                       
        /**
         * 边界定义内容
         */
        this.fixedBound = {
            // 边界有效性
            valid: false,
            // 边界原点
            origin: new cc.Vec3(0),
            // 边界范围
            extent: new cc.Vec3(0),
            // 边界对齐
            align: new cc.Vec3(0),
            // 圆心边界半径
            radius: 0,
        };
        /**
         * 设置边界
         * @param {*} extent
         * @param {*} origin
         * @param {*} align
         * @param {*} valid
         * @returns
         */
        this.setFixedBound = function (extent, origin, align, valid) {
            this.fixedBound.extent = extent instanceof cc.Vec2 ? new cc.Vec3(extent.x, extent.y, 0) : extent;
            this.fixedBound.origin = origin instanceof cc.Vec2 ? new cc.Vec3(origin.x, origin.y, 0) : origin;
            this.fixedBound.align = align instanceof cc.Vec2 ? new cc.Vec3(align.x, align.y, 0) : align;
            this.fixedBound.valid = valid ? valid : this.fixedBound.valid;
            return this;
        };
        /**
         * 限制输入矢量在方形边界内
         * @param {*} vector
         * @returns
         */
        this.inBoxBound = function (vector) {
            var out = vector;
            if (this.fixedBound.valid) {
                out.x = DevelopersToolGlobal_1.mathMacro.clamp(out.x, this.fixedBound.extent.x, this.fixedBound.align.x, this.fixedBound.origin.x);
                out.y = DevelopersToolGlobal_1.mathMacro.clamp(out.y, this.fixedBound.extent.y, this.fixedBound.align.y, this.fixedBound.origin.y);
                out.z = DevelopersToolGlobal_1.mathMacro.clamp(out.z, this.fixedBound.extent.z, this.fixedBound.align.z, this.fixedBound.origin.z);
            }
            return out;
        };
        // TAG velocity & movement base                                                                                 
        // SIGNPOST 通用移动属性                                                                                         
        this._LastVelocity = new cc.Vec3(0);
        /**
         * 当前速度
         * 不建议直接调用，而是使用它的方法:
         * velocity 直接设置速度
         * addVelocity 直接添加速度
         * 直接添加速度并不利于物体运动模拟，应当先进行力的添加:
         * input 添加移动输入
         * force 添加力
         * 计算时需要注意，除非需要将计算值保存在此，否则不可以使用链式运算。
         */
        this._Velocity = new cc.Vec3(0);
        /**
         * 加速度限制
         */
        this._AccelerationLimit = 9999;
        /**
         * 当前模式下最大移动速度
         */
        this._MaxSpeed = 1000;
        /**
         * 当前物理力
         */
        this._Physicforce = new cc.Vec3(0);
        /**
         * 当前物理阻力
         */
        this._PhysicDrag = 1;
        /**
         * 持久力/阻力
         * 该属性会在每次更新时自动加入到物理力中
         * 不论当前是否已经加入物理力
         * 这可以用于 风，引力等属性
         *
         * 当不需要持久力时需要设置为 undefined
         * 这可以通过其设置方法来完成，不需要手动赋值
         */
        /**
         * 持久力
         * 请不要直接设置持久力，而是使用它的方法：
         * setPermForce() 设置持久力
         * getPermForce() 获取持久力
         * @param {Vec3} permanentForce
         */
        this._PermanentForce = undefined;
        /**
         * 持久阻力
         * 如果不需要使用持久阻力，请设置为undefined
         */
        this._PermanentDrag = undefined;
        /**
         * 质量
         */
        this._Mass = 1;
        /**
         * 重力方向
         */
        this._Gravity = new cc.Vec3(0, 0, -980);
        /**
         * 重力标度
         */
        this._GravityScale = 1;
        /**
         * 制动摩擦力因子
         */
        this._BrakingFrictionFactor = 2;
        /**
         * 制动摩擦力
         */
        this._BrakingFriction = 0;
        /**
         * 制动降速
         */
        this._BrakingDeceleration = 2048;
        // SIGNPOST 更新获取                                                                                             
        /**
         * 重力加速度
         */
        this.accelerationDue = new cc.Vec3(0);
        // SIGNPOST 移动更新函数 - 简易力驱动                                                                             
        // fix                
        /**
         * 由力驱动更新
         *
         * 一般情况下并不推荐使用，这仅仅只是为了高效率而产生的
         * 如果需要实现PBD，光滑核等函数，请使用updateByVelocity()
         *
         * @param {*} dt deltatime 与当前帧率绑定，必要项目
         */
        this.updateByforce = function (dt) {
            this.addPermanentForceToPhysic();
        };
        this.context = context;
        this.arrivePosition = context.getPosition();
    }
    Object.defineProperty(PawnMovement.prototype, "arrivePosition", {
        /**
         * 获取到达目标
         */
        get: function () {
            return this._arrivePosition;
        },
        /**
         * 设置到达目标
         */
        set: function (value) {
            if (value instanceof cc.Vec2)
                this._arrivePosition = new cc.Vec3(value.x, value.y, 0);
            else
                this._arrivePosition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PawnMovement.prototype, "addArrivePosition", {
        /**
         * 添加到达目标偏移量
         */
        set: function (offset) {
            if (offset instanceof cc.Vec2)
                this._arrivePosition = this._arrivePosition.add(new cc.Vec3(offset.x, offset.y, 0));
            else
                this._arrivePosition = this._arrivePosition.add(offset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PawnMovement.prototype, "lastVelocity", {
        get: function () { return this._LastVelocity; },
        set: function (velocity) { this._LastVelocity = velocity; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "velocity", {
        get: function () { return this._Velocity; },
        /**
         * 设置速度
         * @param {vec} velocity
         */
        set: function (velocity) {
            if (velocity instanceof cc.Vec2)
                this._Velocity = new cc.Vec3(velocity.x, velocity.y, 0);
            else
                this._Velocity = velocity;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "addVelocity", {
        /**
         * 添加速度
         * @param {vec} velocity
         */
        set: function (velocity) {
            if (velocity instanceof cc.Vec2)
                this._Velocity = this._Velocity.add(new cc.Vec3(velocity.x, velocity.y, 0));
            else
                this._Velocity = this._Velocity.add(velocity);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "accelerationLimit", {
        /**
         * 获取最大速度
         */
        get: function () { return this._AccelerationLimit; },
        /**
         * 设置最大速度
         * @param {*} speed
         */
        set: function (limit) { this._AccelerationLimit = limit; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "maxSpeed", {
        /**
         * 获取最大速度
         */
        get: function () { return this._MaxSpeed; },
        /**
         * 设置最大速度
         * @param {*} speed
         */
        set: function (speed) { this._MaxSpeed = speed || this._MaxSpeed; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "force", {
        /**
         * 获取物理力
         * @returns
         */
        get: function () { return this._Physicforce; },
        /**
         * 设置物理力
         */
        set: function (force) {
            if (force instanceof cc.Vec2)
                this._Physicforce = new cc.Vec3(force.x, force.y, 0);
            else
                this._Physicforce = force;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "addforce", {
        /**
         * 添加物理力
         */
        set: function (force) {
            if (force instanceof cc.Vec2)
                this._Physicforce = this._Physicforce.add(new cc.Vec3(force.x, force.y, 0));
            else
                this._Physicforce = this._Physicforce.add(force);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "drag", {
        /**
         * 获取物理阻力
         * @returns
         */
        get: function () { return Math.max(this._PhysicDrag, 0); },
        /**
         * 设置物理阻力
         */
        set: function (drag) { this._PhysicDrag = Math.max(drag, 0); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "permForce", {
        /**
         * 获取持久力
         * @returns
         */
        get: function () { return this._PermanentForce; },
        /**
         * 设置持久力
         * @param {Vec3} vec 当不需要持久力时设置为undefined可以直接关闭
         */
        set: function (force) {
            if (force) {
                if (force instanceof cc.Vec2)
                    this._PermanentForce = new cc.Vec3(force.x, force.y, 0);
                else
                    this._PermanentForce = force;
            }
            else
                this._PermanentForce = undefined;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "validpermForce", {
        get: function () { return this._PermanentForce ? true : false; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "permDrag", {
        /**
         * 获取持久阻力
         */
        get: function () { return Math.max(this._PermanentDrag || 0, 0); },
        /**
         * 设置持久阻力
         * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
         * @returns
         */
        set: function (drag) {
            if (drag <= 0)
                this._PermanentDrag = undefined;
            else
                this._PermanentDrag = Math.max(drag, 0);
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "validPermDrag", {
        get: function () { return typeof this._PermanentDrag == 'number'; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "mass", {
        /**
         * 获取质量
         * @returns
         */
        get: function () { return Math.max(this._Mass, .001); },
        /**
         * 设置质量
         * @returns
         */
        set: function (value) { this._Mass = Math.max(value, .001); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "gravity", {
        /**
         * 获取重力方向
         */
        get: function () { return this._Gravity; },
        /**
         * 设置重力方向
         * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
         * @returns
         */
        set: function (gravity) {
            if (gravity instanceof cc.Vec2)
                this._Gravity = new cc.Vec3(gravity.x, gravity.y, 0);
            else
                this._Gravity = gravity;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "gravityScale", {
        /**
         * 获取重力标度
         * @returns
         */
        get: function () { return this._GravityScale; },
        /**
         * 设置重力标度
         */
        set: function (value) { this._GravityScale = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingFrictionFactor", {
        /**
         * 获取制动摩擦力因子
         * @returns
         */
        get: function () { return this._BrakingFrictionFactor; },
        /**
         * 设置制动摩擦力因子
         */
        set: function (value) { this._BrakingFrictionFactor = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingFriction", {
        /**
         * 获取制动摩擦力
         * @returns
         */
        get: function () { return this._BrakingFriction; },
        /**
         * 设置制动摩擦力
         */
        set: function (value) { this._BrakingFrictionFactor = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingDeceleration", {
        /**
         * 获取制动降速
         * @returns
         */
        get: function () { return this._BrakingDeceleration; },
        /**
         * 设置制动降速
         */
        set: function (value) { this._BrakingDeceleration = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    // SIGNPOST 用户力输入                                                                                           
    /**
     * 添加移动输入
     * @param {Vec3} direction 方向，默认认为是为单位向量，
     * @param {Number} scale
     */
    PawnMovement.prototype.addInput = function (direction, scale) {
        this.force = direction instanceof cc.Vec2 ? new cc.Vec3(direction.x, direction.y, 0) : direction;
        this.force = this.force.mul(this.maxSpeed * (scale || 1));
        return this;
    };
    ;
    Object.defineProperty(PawnMovement.prototype, "addGravity", {
        /**
         * 添加重力
         */
        set: function (scale) {
            this.force = this.force.add(this.gravity.mul(this.mass));
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "addDrag", {
        /**
         * 添加阻力
         * @param {*} drag
         * @returns
         */
        set: function (drag) {
            this.drag = drag + this.drag;
        },
        enumerable: false,
        configurable: true
    });
    ;
    // SIGNPOST 函数宏库                                                                                           
    // SIGNPOST 解算阶段                                                                                           
    /**
     * 这是一个内部方法
     * 将持久力加入到物理力中
     */
    PawnMovement.prototype.addPermanentForceToPhysic = function () {
        // 添加持久力
        if (this.validpermForce) {
            this.force = this.force.add(this.permForce);
        }
        // 添加持久阻力 
        this.drag = !this.validPermDrag ? this.drag : (this.permDrag + this.drag);
    };
    ;
    Object.defineProperty(PawnMovement.prototype, "canMove", {
        /**
         * 这是一个内部方法
         * 判断当前移动组件是否完全静止
         * @returns
         */
        get: function () {
            return !(cc.Vec3.equals(this.force, cc.Vec3.ZERO) && cc.Vec3.equals(this.velocity, cc.Vec3.ZERO));
        },
        enumerable: false,
        configurable: true
    });
    ;
    // SIGNPOST 双流传动式移动载具 - 解算阶段                                                                        
    /**
     * 速度向前
     * 要使用此方法进行移动，需要在其他任意阶段内向此移动组件添加力
     *
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    // public velocityForward(dt, rotateRate) {
    //     let slip = kismit.vec2Dot(kismit.rotationToVec2(this.context.rotation), kismit.normaliz2(this.velocity));
    //     slip = (slip - 1) / 2; // 面向时为0，背向时为-2
    // };
    // TAG 移动更新函数                                                                                             
    // SIGNPOST 移动更新函数 - 径直-到达点                                                                           
    /**
    * 更新到计算位置
    * 这个方法会自行移动到 this.arrivePosition
    * 使用此方法将无视阻力与重力，径直按照指定速度平移过去
    *
    * @param {Number} dt deltatime 与当前帧率绑定，必要项目
    * @param {Number} speed 执行速度，缺省maxSpeed
    * @param {Number} th 距离过零阈值，缺省1
    */
    PawnMovement.prototype.updateToPosition = function (dt, th, speed) {
        var conPos = this.context.getPosition();
        var pos = conPos instanceof cc.Vec2 ? new cc.Vec3(conPos.x, conPos.y, 0) : conPos;
        var moveVector = this.arrivePosition.sub(pos);
        var movelength = cc.Vec3.len(moveVector);
        if (movelength > (th || 1)) {
            var unit = moveVector.div(movelength);
            var move = unit.mul(Math.min((speed || this.maxSpeed) * dt, movelength));
            this.context.setPosition(this.inBoxBound(move.add(pos)));
        }
        return this;
    };
    ;
    // SIGNPOST 移动更新函数 - 双流传动式移动载具-到达点                                                               
    // fix                
    /**
     * 将向前轴面向位置移动
     * 这个方法会自行移动到 this.arrivePosition
     * 使用此方法将无视阻力与重力移动
     * 移动的同时会将自身角度朝向移动方向
     * 可以通过指定
     */
    PawnMovement.prototype.updateToWardPostion = function () {
    };
    ;
    // SIGNPOST 移动更新函数 - 基本速度驱动                                                                           
    /**
     * 由速度驱动更新
     * 要使用此方法进行移动，需要在其他任意阶段内向此移动组件添加力
     *
     * 可以响应瞬时力： addForce(), addDrag(), addInput()
     *
     * 可以响应持久力： permanentForce, permanentDrag
     *
     * 比如在默认情况下，不会实现阻力，你的移动就像是在无重力环境下一样
     * 而想要模仿走路或是其他移动模式，需要在此更新事件之前或是之后添加一份力/阻力。
     * 在通常情况下，你不需要担心添加 力/阻力 执行顺序会造成计算失误
     * 因为这是由单一环路构成的移动模式
     *
     * 关于模拟阶段更新：
     * 你可以在同一帧或是生命周期的不同阶段内多次进行更新
     * 但使用更新函数进行迭代会造成速度流逝
     * 所以推荐自行对节点坐标进行迭代，而后统一进行驱动更新
     *
     * 如果迭代会造成速度错位，可以获取重力加速度，将速度转为动能
     * 减淡原始速度，而后在更新前将动能返回给力即可
     *
     * 例如铁链仿真，就可以对每节铁链进行一次运动更新，
     * 而后进行动能转换，将每节铁链的坐标向前一个进行约束仿真，比如进行迭代仿真30次
     * 仿真完毕后重新赋能，或是将动能计算为其他粒子效果。
     *
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    PawnMovement.prototype.updateByVelocity = function (dt) {
        this.addPermanentForceToPhysic();
        if (this.canMove) {
            this.lastVelocity = this.velocity.clone();
            // 应用质量
            this.force = this.force.div(this.mass);
            // 计算阻力
            var incomingDrag = this.drag * dt + 1;
            // 重力加速度
            this.accelerationDue = this.velocity.div(incomingDrag);
            // 应用力到速度
            var outVelocity = this.force.mul(dt);
            outVelocity = outVelocity.add(this.velocity).div(incomingDrag);
            // 限制
            var outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.maxSpeed ? outVelocity : outVelocity.mul(this.maxSpeed).div(outVelocityLength);
            outVelocity = outVelocity.sub(this.lastVelocity);
            outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.accelerationLimit ? outVelocity : outVelocity.mul(this.accelerationLimit).div(outVelocityLength);
            outVelocity = outVelocity.add(this.lastVelocity);
            // 新速度
            this.velocity = new cc.Vec3(outVelocity);
            var newPostion = this.context.getPosition();
            // 设置坐标
            this.context.setPosition(this.velocity.mul(dt).add(newPostion instanceof cc.Vec2 ? new cc.Vec3(newPostion.x, newPostion.y, 0) : newPostion));
        }
        this.force.set(cc.Vec3.ZERO);
        this.drag = 0;
        return this;
    };
    ;
    return PawnMovement;
}());
exports.default = PawnMovement;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGF3bk1vdmVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQW9FO0FBRXBFO0lBQ0ksc0JBQVksT0FBZ0I7UUFLbEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQWtDbEMsZ0hBQWdIO1FBRWhIOztXQUVHO1FBQ08sZUFBVSxHQUFHO1lBQ25CLFFBQVE7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU87WUFDUCxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1lBQ1AsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztZQUNQLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLFNBQVM7WUFDVCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7UUFFRjs7Ozs7OztXQU9HO1FBQ0ksa0JBQWEsR0FBRyxVQUFVLE1BQXlCLEVBQUUsTUFBeUIsRUFBRSxLQUF3QixFQUFFLEtBQWM7WUFDM0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNqRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pH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LENBQUMsQ0FBQztTQUNoSjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUEsQ0FBQztJQWlCTixtQkFBQztBQUFELENBN2hCQSxBQTZoQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBraXNtaXQgfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXduTW92ZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5hcnJpdmVQb3NpdGlvbiA9IGNvbnRleHQuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29udGV4dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gVEFHIHBvc2l0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yiw6L6+55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfYXJyaXZlUG9zaXRpb246IGNjLlZlYzM7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWIsOi+vuebruagh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFycml2ZVBvc2l0aW9uKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcnJpdmVQb3NpdGlvbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yiw6L6+55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYXJyaXZlUG9zaXRpb24odmFsdWU6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSBuZXcgY2MuVmVjMyh2YWx1ZS54LCB2YWx1ZS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWIsOi+vuebruagh+WBj+enu+mHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZEFycml2ZVBvc2l0aW9uKG9mZnNldDogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAob2Zmc2V0IGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSB0aGlzLl9hcnJpdmVQb3NpdGlvbi5hZGQobmV3IGNjLlZlYzMob2Zmc2V0LngsIG9mZnNldC55LCAwKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IHRoaXMuX2Fycml2ZVBvc2l0aW9uLmFkZChvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBUQUcgbW92ZSByYW5nZSBzZXR0aW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovrnnlYzlrprkuYnlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGZpeGVkQm91bmQgPSB7XHJcbiAgICAgICAgLy8g6L6555WM5pyJ5pWI5oCnXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIC8vIOi+ueeVjOWOn+eCuVxyXG4gICAgICAgIG9yaWdpbjogbmV3IGNjLlZlYzMoMCksXHJcbiAgICAgICAgLy8g6L6555WM6IyD5Zu0XHJcbiAgICAgICAgZXh0ZW50OiBuZXcgY2MuVmVjMygwKSxcclxuICAgICAgICAvLyDovrnnlYzlr7npvZBcclxuICAgICAgICBhbGlnbjogbmV3IGNjLlZlYzMoMCksXHJcbiAgICAgICAgLy8g5ZyG5b+D6L6555WM5Y2K5b6EXHJcbiAgICAgICAgcmFkaXVzOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rui+ueeVjFxyXG4gICAgICogQHBhcmFtIHsqfSBleHRlbnQgXHJcbiAgICAgKiBAcGFyYW0geyp9IG9yaWdpbiBcclxuICAgICAqIEBwYXJhbSB7Kn0gYWxpZ25cclxuICAgICAqIEBwYXJhbSB7Kn0gdmFsaWQgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEZpeGVkQm91bmQgPSBmdW5jdGlvbiAoZXh0ZW50OiBjYy5WZWMzIHwgY2MuVmVjMiwgb3JpZ2luOiBjYy5WZWMzIHwgY2MuVmVjMiwgYWxpZ246IGNjLlZlYzMgfCBjYy5WZWMyLCB2YWxpZDogQm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQgPSBleHRlbnQgaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoZXh0ZW50LngsIGV4dGVudC55LCAwKSA6IGV4dGVudDtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQub3JpZ2luID0gb3JpZ2luIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKG9yaWdpbi54LCBvcmlnaW4ueSwgMCkgOiBvcmlnaW47XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLmFsaWduID0gYWxpZ24gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoYWxpZ24ueCwgYWxpZ24ueSwgMCkgOiBhbGlnbjtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQudmFsaWQgPSB2YWxpZCA/IHZhbGlkIDogdGhpcy5maXhlZEJvdW5kLnZhbGlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmZkOWItui+k+WFpeefoumHj+WcqOaWueW9oui+ueeVjOWGhVxyXG4gICAgICogQHBhcmFtIHsqfSB2ZWN0b3IgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluQm94Qm91bmQgPSBmdW5jdGlvbiAodmVjdG9yOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgbGV0IG91dCA9IHZlY3RvcjtcclxuICAgICAgICBpZiAodGhpcy5maXhlZEJvdW5kLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIG91dC54ID0ga2lzbWl0LmNsYW1wKG91dC54LCB0aGlzLmZpeGVkQm91bmQuZXh0ZW50LngsIHRoaXMuZml4ZWRCb3VuZC5hbGlnbi54LCB0aGlzLmZpeGVkQm91bmQub3JpZ2luLngpO1xyXG4gICAgICAgICAgICBvdXQueSA9IGtpc21pdC5jbGFtcChvdXQueSwgdGhpcy5maXhlZEJvdW5kLmV4dGVudC55LCB0aGlzLmZpeGVkQm91bmQuYWxpZ24ueSwgdGhpcy5maXhlZEJvdW5kLm9yaWdpbi55KTtcclxuICAgICAgICAgICAgb3V0LnogPSBraXNtaXQuY2xhbXAob3V0LnosIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQueiwgdGhpcy5maXhlZEJvdW5kLmFsaWduLnosIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4ueik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFHIHZlbG9jaXR5ICYgbW92ZW1lbnQgYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOmAmueUqOenu+WKqOWxnuaApyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgcHJvdGVjdGVkIF9MYXN0VmVsb2NpdHkgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIHB1YmxpYyBnZXQgbGFzdFZlbG9jaXR5KCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fTGFzdFZlbG9jaXR5OyB9O1xyXG4gICAgcHVibGljIHNldCBsYXN0VmVsb2NpdHkodmVsb2NpdHk6IGNjLlZlYzMpIHsgdGhpcy5fTGFzdFZlbG9jaXR5ID0gdmVsb2NpdHk7IH07XHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjemAn+W6plxyXG4gICAgICog5LiN5bu66K6u55u05o6l6LCD55So77yM6ICM5piv5L2/55So5a6D55qE5pa55rOVOlxyXG4gICAgICogdmVsb2NpdHkg55u05o6l6K6+572u6YCf5bqmXHJcbiAgICAgKiBhZGRWZWxvY2l0eSDnm7TmjqXmt7vliqDpgJ/luqZcclxuICAgICAqIOebtOaOpea3u+WKoOmAn+W6puW5tuS4jeWIqeS6jueJqeS9k+i/kOWKqOaooeaLn++8jOW6lOW9k+WFiOi/m+ihjOWKm+eahOa3u+WKoDpcclxuICAgICAqIGlucHV0IOa3u+WKoOenu+WKqOi+k+WFpVxyXG4gICAgICogZm9yY2Ug5re75Yqg5YqbXHJcbiAgICAgKiDorqHnrpfml7bpnIDopoHms6jmhI/vvIzpmaTpnZ7pnIDopoHlsIborqHnrpflgLzkv53lrZjlnKjmraTvvIzlkKbliJnkuI3lj6/ku6Xkvb/nlKjpk77lvI/ov5DnrpfjgIJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9WZWxvY2l0eSA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgcHVibGljIGdldCB2ZWxvY2l0eSgpOiBjYy5WZWMzIHsgcmV0dXJuIHRoaXMuX1ZlbG9jaXR5OyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pgJ/luqZcclxuICAgICAqIEBwYXJhbSB7dmVjfSB2ZWxvY2l0eSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB2ZWxvY2l0eSh2ZWxvY2l0eTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAodmVsb2NpdHkgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IG5ldyBjYy5WZWMzKHZlbG9jaXR5LngsIHZlbG9jaXR5LnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fVmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmAn+W6plxyXG4gICAgICogQHBhcmFtIHt2ZWN9IHZlbG9jaXR5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZFZlbG9jaXR5KHZlbG9jaXR5KSB7XHJcbiAgICAgICAgaWYgKHZlbG9jaXR5IGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fVmVsb2NpdHkgPSB0aGlzLl9WZWxvY2l0eS5hZGQobmV3IGNjLlZlYzModmVsb2NpdHkueCwgdmVsb2NpdHkueSwgMCkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fVmVsb2NpdHkgPSB0aGlzLl9WZWxvY2l0eS5hZGQodmVsb2NpdHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOmAn+W6pumZkOWItlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0FjY2VsZXJhdGlvbkxpbWl0OiBudW1iZXIgPSA5OTk5O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDlpKfpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhY2NlbGVyYXRpb25MaW1pdCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQWNjZWxlcmF0aW9uTGltaXQ7IH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruacgOWkp+mAn+W6plxyXG4gICAgICogQHBhcmFtIHsqfSBzcGVlZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhY2NlbGVyYXRpb25MaW1pdChsaW1pdDogbnVtYmVyKSB7IHRoaXMuX0FjY2VsZXJhdGlvbkxpbWl0ID0gbGltaXQgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeaooeW8j+S4i+acgOWkp+enu+WKqOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX01heFNwZWVkOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDlpKfpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtYXhTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fTWF4U3BlZWQ7IH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruacgOWkp+mAn+W6plxyXG4gICAgICogQHBhcmFtIHsqfSBzcGVlZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBtYXhTcGVlZChzcGVlZCkgeyB0aGlzLl9NYXhTcGVlZCA9IHNwZWVkIHx8IHRoaXMuX01heFNwZWVkOyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN54mp55CG5YqbXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGh5c2ljZm9yY2UgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W54mp55CG5YqbXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBmb3JjZSgpOiBjYy5WZWMzIHsgcmV0dXJuIHRoaXMuX1BoeXNpY2ZvcmNlIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueJqeeQhuWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGZvcmNlKGZvcmNlOiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChmb3JjZSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gbmV3IGNjLlZlYzMoZm9yY2UueCwgZm9yY2UueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IGZvcmNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg54mp55CG5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkZm9yY2UoZm9yY2U6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSB0aGlzLl9QaHlzaWNmb3JjZS5hZGQobmV3IGNjLlZlYzMoZm9yY2UueCwgZm9yY2UueSwgMCkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSB0aGlzLl9QaHlzaWNmb3JjZS5hZGQoZm9yY2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeeJqeeQhumYu+WKm1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1BoeXNpY0RyYWc6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueJqeeQhumYu+WKm1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZHJhZygpIHsgcmV0dXJuIE1hdGgubWF4KHRoaXMuX1BoeXNpY0RyYWcsIDApIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueJqeeQhumYu+WKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGRyYWcoZHJhZzogbnVtYmVyKSB7IHRoaXMuX1BoeXNpY0RyYWcgPSBNYXRoLm1heChkcmFnLCAwKTsgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMgeS5heWKmy/pmLvliptcclxuICAgICAqIOivpeWxnuaAp+S8muWcqOavj+asoeabtOaWsOaXtuiHquWKqOWKoOWFpeWIsOeJqeeQhuWKm+S4rVxyXG4gICAgICog5LiN6K665b2T5YmN5piv5ZCm5bey57uP5Yqg5YWl54mp55CG5YqbXHJcbiAgICAgKiDov5nlj6/ku6XnlKjkuo4g6aOO77yM5byV5Yqb562J5bGe5oCnXHJcbiAgICAgKiBcclxuICAgICAqIOW9k+S4jemcgOimgeaMgeS5heWKm+aXtumcgOimgeiuvue9ruS4uiB1bmRlZmluZWRcclxuICAgICAqIOi/meWPr+S7pemAmui/h+WFtuiuvue9ruaWueazleadpeWujOaIkO+8jOS4jemcgOimgeaJi+WKqOi1i+WAvFxyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIHkuYXliptcclxuICAgICAqIOivt+S4jeimgeebtOaOpeiuvue9ruaMgeS5heWKm++8jOiAjOaYr+S9v+eUqOWug+eahOaWueazle+8mlxyXG4gICAgICogc2V0UGVybUZvcmNlKCkg6K6+572u5oyB5LmF5YqbXHJcbiAgICAgKiBnZXRQZXJtRm9yY2UoKSDojrflj5bmjIHkuYXliptcclxuICAgICAqIEBwYXJhbSB7VmVjM30gcGVybWFuZW50Rm9yY2VcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QZXJtYW5lbnRGb3JjZTogY2MuVmVjMyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5oyB5LmF5YqbXHJcbiAgICAgKiBAcGFyYW0ge1ZlYzN9IHZlYyDlvZPkuI3pnIDopoHmjIHkuYXlipvml7borr7nva7kuLp1bmRlZmluZWTlj6/ku6Xnm7TmjqXlhbPpl61cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBwZXJtRm9yY2UoZm9yY2U6IGNjLlZlYzMgfCBjYy5WZWMyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JjZSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9QZXJtYW5lbnRGb3JjZSA9IG5ldyBjYy5WZWMzKGZvcmNlLngsIGZvcmNlLnksIDApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9QZXJtYW5lbnRGb3JjZSA9IGZvcmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1Blcm1hbmVudEZvcmNlID0gdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyB5LmF5YqbIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGVybUZvcmNlKCk6IGNjLlZlYzMgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy5fUGVybWFuZW50Rm9yY2UgfTtcclxuICAgIHB1YmxpYyBnZXQgdmFsaWRwZXJtRm9yY2UoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9QZXJtYW5lbnRGb3JjZSA/IHRydWUgOiBmYWxzZSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyB5LmF6Zi75YqbXHJcbiAgICAgKiDlpoLmnpzkuI3pnIDopoHkvb/nlKjmjIHkuYXpmLvlipvvvIzor7forr7nva7kuLp1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QZXJtYW5lbnREcmFnOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaMgeS5hemYu+WKm1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRyYWcg5b2T5LiN6ZyA6KaB5oyB5LmF6Zi75Yqb5pe26K6+572u5Li6dW5kZWZpbmVk5Y+v5Lul55u05o6l5YWz6ZetXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBwZXJtRHJhZyhkcmFnOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoZHJhZyA8PSAwKSB0aGlzLl9QZXJtYW5lbnREcmFnID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGVsc2UgdGhpcy5fUGVybWFuZW50RHJhZyA9IE1hdGgubWF4KGRyYWcsIDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyB5LmF6Zi75YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGVybURyYWcoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGgubWF4KHRoaXMuX1Blcm1hbmVudERyYWcgfHwgMCwgMCkgfTtcclxuICAgIHB1YmxpYyBnZXQgdmFsaWRQZXJtRHJhZygpOiBib29sZWFuIHsgcmV0dXJuIHR5cGVvZiB0aGlzLl9QZXJtYW5lbnREcmFnID09ICdudW1iZXInIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotKjph49cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9NYXNzOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5botKjph49cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG1hc3MoKSB7IHJldHVybiBNYXRoLm1heCh0aGlzLl9NYXNzLCAuMDAxKSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7otKjph49cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG1hc3ModmFsdWUpIHsgdGhpcy5fTWFzcyA9IE1hdGgubWF4KHZhbHVlLCAuMDAxKSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5Yqb5pa55ZCRXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfR3Jhdml0eTogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDAsIDAsIC05ODApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ph43lipvmlrnlkJFcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkcmFnIOW9k+S4jemcgOimgeaMgeS5hemYu+WKm+aXtuiuvue9ruS4unVuZGVmaW5lZOWPr+S7peebtOaOpeWFs+mXrVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ3Jhdml0eShncmF2aXR5OiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChncmF2aXR5IGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fR3Jhdml0eSA9IG5ldyBjYy5WZWMzKGdyYXZpdHkueCwgZ3Jhdml0eS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX0dyYXZpdHkgPSBncmF2aXR5O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YeN5Yqb5pa55ZCRXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ3Jhdml0eSgpOiBjYy5WZWMzIHsgcmV0dXJuIHRoaXMuX0dyYXZpdHkgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeWKm+agh+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0dyYXZpdHlTY2FsZTogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YeN5Yqb5qCH5bqmXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmF2aXR5U2NhbGUoKSB7IHJldHVybiB0aGlzLl9HcmF2aXR5U2NhbGUgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6YeN5Yqb5qCH5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ3Jhdml0eVNjYWxlKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fR3Jhdml0eVNjYWxlID0gdmFsdWUgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLbliqjmkanmk6blipvlm6DlrZBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9CcmFraW5nRnJpY3Rpb25GYWN0b3I6IG51bWJlciA9IDI7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWItuWKqOaRqeaTpuWKm+WboOWtkFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYnJha2luZ0ZyaWN0aW9uRmFjdG9yKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9CcmFraW5nRnJpY3Rpb25GYWN0b3IgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yi25Yqo5pGp5pOm5Yqb5Zug5a2QXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYnJha2luZ0ZyaWN0aW9uRmFjdG9yKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fQnJha2luZ0ZyaWN0aW9uRmFjdG9yID0gdmFsdWUgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWItuWKqOaRqeaTpuWKm1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0JyYWtpbmdGcmljdGlvbjogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yi25Yqo5pGp5pOm5YqbXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFraW5nRnJpY3Rpb24oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0JyYWtpbmdGcmljdGlvbiB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLbliqjmkanmk6bliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBicmFraW5nRnJpY3Rpb24odmFsdWU6IG51bWJlcikgeyB0aGlzLl9CcmFraW5nRnJpY3Rpb25GYWN0b3IgPSB2YWx1ZSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi25Yqo6ZmN6YCfXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQnJha2luZ0RlY2VsZXJhdGlvbiA9IDIwNDg7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWItuWKqOmZjemAn1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYnJha2luZ0RlY2VsZXJhdGlvbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQnJha2luZ0RlY2VsZXJhdGlvbiB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLbliqjpmY3pgJ9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBicmFraW5nRGVjZWxlcmF0aW9uKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fQnJha2luZ0RlY2VsZXJhdGlvbiA9IHZhbHVlIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg55So5oi35Yqb6L6T5YWlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg56e75Yqo6L6T5YWlXHJcbiAgICAgKiBAcGFyYW0ge1ZlYzN9IGRpcmVjdGlvbiDmlrnlkJHvvIzpu5jorqTorqTkuLrmmK/kuLrljZXkvY3lkJHph4/vvIxcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZElucHV0KGRpcmVjdGlvbjogY2MuVmVjMyB8IGNjLlZlYzIsIHNjYWxlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JjZSA9IGRpcmVjdGlvbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnksIDApIDogZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLm11bCh0aGlzLm1heFNwZWVkICogKHNjYWxlIHx8IDEpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDph43liptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRHcmF2aXR5KHNjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UuYWRkKHRoaXMuZ3Jhdml0eS5tdWwodGhpcy5tYXNzKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6Zi75YqbXHJcbiAgICAgKiBAcGFyYW0geyp9IGRyYWcgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGREcmFnKGRyYWc6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZHJhZyA9IGRyYWcgKyB0aGlzLmRyYWc7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOabtOaWsOiOt+WPliAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhY2NlbGVyYXRpb25EdWUgPSBuZXcgY2MuVmVjMygwKTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDlh73mlbDlro/lupMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyBTSUdOUE9TVCDop6PnrpfpmLbmrrUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5nmmK/kuIDkuKrlhoXpg6jmlrnms5VcclxuICAgICAqIOWwhuaMgeS5heWKm+WKoOWFpeWIsOeJqeeQhuWKm+S4rVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWRkUGVybWFuZW50Rm9yY2VUb1BoeXNpYygpIHtcclxuICAgICAgICAvLyDmt7vliqDmjIHkuYXliptcclxuICAgICAgICBpZiAodGhpcy52YWxpZHBlcm1Gb3JjZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5hZGQodGhpcy5wZXJtRm9yY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmt7vliqDmjIHkuYXpmLvlipsgXHJcbiAgICAgICAgdGhpcy5kcmFnID0gIXRoaXMudmFsaWRQZXJtRHJhZyA/IHRoaXMuZHJhZyA6ICh0aGlzLnBlcm1EcmFnICsgdGhpcy5kcmFnKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5nmmK/kuIDkuKrlhoXpg6jmlrnms5VcclxuICAgICAqIOWIpOaWreW9k+WJjeenu+WKqOe7hOS7tuaYr+WQpuWujOWFqOmdmeatolxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgY2FuTW92ZSgpIHtcclxuICAgICAgICByZXR1cm4gIShjYy5WZWMzLmVxdWFscyh0aGlzLmZvcmNlLCBjYy5WZWMzLlpFUk8pICYmIGNjLlZlYzMuZXF1YWxzKHRoaXMudmVsb2NpdHksIGNjLlZlYzMuWkVSTykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDlj4zmtYHkvKDliqjlvI/np7vliqjovb3lhbcgLSDop6PnrpfpmLbmrrUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAn+W6puWQkeWJjVxyXG4gICAgICog6KaB5L2/55So5q2k5pa55rOV6L+b6KGM56e75Yqo77yM6ZyA6KaB5Zyo5YW25LuW5Lu75oSP6Zi25q615YaF5ZCR5q2k56e75Yqo57uE5Lu25re75Yqg5YqbXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgICovXHJcbiAgICAvLyBwdWJsaWMgdmVsb2NpdHlGb3J3YXJkKGR0LCByb3RhdGVSYXRlKSB7XHJcbiAgICAvLyAgICAgbGV0IHNsaXAgPSBraXNtaXQudmVjMkRvdChraXNtaXQucm90YXRpb25Ub1ZlYzIodGhpcy5jb250ZXh0LnJvdGF0aW9uKSwga2lzbWl0Lm5vcm1hbGl6Mih0aGlzLnZlbG9jaXR5KSk7XHJcbiAgICAvLyAgICAgc2xpcCA9IChzbGlwIC0gMSkgLyAyOyAvLyDpnaLlkJHml7bkuLow77yM6IOM5ZCR5pe25Li6LTJcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gVEFHIOenu+WKqOabtOaWsOWHveaVsCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOW+hOebtC3liLDovr7ngrkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICog5pu05paw5Yiw6K6h566X5L2N572uXHJcbiAgICAqIOi/meS4quaWueazleS8muiHquihjOenu+WKqOWIsCB0aGlzLmFycml2ZVBvc2l0aW9uXHJcbiAgICAqIOS9v+eUqOatpOaWueazleWwhuaXoOinhumYu+WKm+S4jumHjeWKm++8jOW+hOebtOaMieeFp+aMh+WumumAn+W6puW5s+enu+i/h+WOu1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGR0IGRlbHRhdGltZSDkuI7lvZPliY3luKfnjofnu5HlrprvvIzlv4XopoHpobnnm65cclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHNwZWVkIOaJp+ihjOmAn+W6pu+8jOe8uuecgW1heFNwZWVkXHJcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aCDot53nprvov4fpm7bpmIjlgLzvvIznvLrnnIExXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVRvUG9zaXRpb24oZHQsIHRoLCBzcGVlZCkge1xyXG4gICAgICAgIGxldCBjb25Qb3MgPSB0aGlzLmNvbnRleHQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBsZXQgcG9zID0gY29uUG9zIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGNvblBvcy54LCBjb25Qb3MueSwgMCkgOiBjb25Qb3NcclxuICAgICAgICBsZXQgbW92ZVZlY3RvciA9IHRoaXMuYXJyaXZlUG9zaXRpb24uc3ViKHBvcyk7XHJcbiAgICAgICAgbGV0IG1vdmVsZW5ndGggPSBjYy5WZWMzLmxlbihtb3ZlVmVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKG1vdmVsZW5ndGggPiAodGggfHwgMSkpIHtcclxuICAgICAgICAgICAgbGV0IHVuaXQgPSBtb3ZlVmVjdG9yLmRpdihtb3ZlbGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IG1vdmUgPSB1bml0Lm11bChNYXRoLm1pbigoc3BlZWQgfHwgdGhpcy5tYXhTcGVlZCkgKiBkdCwgbW92ZWxlbmd0aCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0UG9zaXRpb24odGhpcy5pbkJveEJvdW5kKG1vdmUuYWRkKHBvcykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOWPjOa1geS8oOWKqOW8j+enu+WKqOi9veWFty3liLDovr7ngrkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBmaXggICAgICAgICAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAqIOWwhuWQkeWJjei9tOmdouWQkeS9jee9ruenu+WKqFxyXG4gICAgICog6L+Z5Liq5pa55rOV5Lya6Ieq6KGM56e75Yqo5YiwIHRoaXMuYXJyaXZlUG9zaXRpb25cclxuICAgICAqIOS9v+eUqOatpOaWueazleWwhuaXoOinhumYu+WKm+S4jumHjeWKm+enu+WKqFxyXG4gICAgICog56e75Yqo55qE5ZCM5pe25Lya5bCG6Ieq6Lqr6KeS5bqm5pyd5ZCR56e75Yqo5pa55ZCRXHJcbiAgICAgKiDlj6/ku6XpgJrov4fmjIflrppcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVG9XYXJkUG9zdGlvbigpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnp7vliqjmm7TmlrDlh73mlbAgLSDln7rmnKzpgJ/luqbpqbHliqggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUsemAn+W6pumpseWKqOabtOaWsFxyXG4gICAgICog6KaB5L2/55So5q2k5pa55rOV6L+b6KGM56e75Yqo77yM6ZyA6KaB5Zyo5YW25LuW5Lu75oSP6Zi25q615YaF5ZCR5q2k56e75Yqo57uE5Lu25re75Yqg5YqbXHJcbiAgICAgKiBcclxuICAgICAqIOWPr+S7peWTjeW6lOeerOaXtuWKm++8miBhZGRGb3JjZSgpLCBhZGREcmFnKCksIGFkZElucHV0KClcclxuICAgICAqIFxyXG4gICAgICog5Y+v5Lul5ZON5bqU5oyB5LmF5Yqb77yaIHBlcm1hbmVudEZvcmNlLCBwZXJtYW5lbnREcmFnXHJcbiAgICAgKiBcclxuICAgICAqIOavlOWmguWcqOm7mOiupOaDheWGteS4i++8jOS4jeS8muWunueOsOmYu+WKm++8jOS9oOeahOenu+WKqOWwseWDj+aYr+WcqOaXoOmHjeWKm+eOr+Wig+S4i+S4gOagt1xyXG4gICAgICog6ICM5oOz6KaB5qih5Lu/6LWw6Lev5oiW5piv5YW25LuW56e75Yqo5qih5byP77yM6ZyA6KaB5Zyo5q2k5pu05paw5LqL5Lu25LmL5YmN5oiW5piv5LmL5ZCO5re75Yqg5LiA5Lu95YqbL+mYu+WKm+OAgiAgXHJcbiAgICAgKiDlnKjpgJrluLjmg4XlhrXkuIvvvIzkvaDkuI3pnIDopoHmi4Xlv4Pmt7vliqAg5YqbL+mYu+WKmyDmiafooYzpobrluo/kvJrpgKDmiJDorqHnrpflpLHor69cclxuICAgICAqIOWboOS4uui/meaYr+eUseWNleS4gOeOr+i3r+aehOaIkOeahOenu+WKqOaooeW8j1xyXG4gICAgICogXHJcbiAgICAgKiDlhbPkuo7mqKHmi5/pmLbmrrXmm7TmlrDvvJogIFxyXG4gICAgICog5L2g5Y+v5Lul5Zyo5ZCM5LiA5bin5oiW5piv55Sf5ZG95ZGo5pyf55qE5LiN5ZCM6Zi25q615YaF5aSa5qyh6L+b6KGM5pu05pawICBcclxuICAgICAqIOS9huS9v+eUqOabtOaWsOWHveaVsOi/m+ihjOi/reS7o+S8mumAoOaIkOmAn+W6pua1gemAnSAgXHJcbiAgICAgKiDmiYDku6XmjqjojZDoh6rooYzlr7noioLngrnlnZDmoIfov5vooYzov63ku6PvvIzogIzlkI7nu5/kuIDov5vooYzpqbHliqjmm7TmlrAgIFxyXG4gICAgICogXHJcbiAgICAgKiDlpoLmnpzov63ku6PkvJrpgKDmiJDpgJ/luqbplJnkvY3vvIzlj6/ku6Xojrflj5bph43lipvliqDpgJ/luqbvvIzlsIbpgJ/luqbovazkuLrliqjog70gIFxyXG4gICAgICog5YeP5reh5Y6f5aeL6YCf5bqm77yM6ICM5ZCO5Zyo5pu05paw5YmN5bCG5Yqo6IO96L+U5Zue57uZ5Yqb5Y2z5Y+vICBcclxuICAgICAqIFxyXG4gICAgICog5L6L5aaC6ZOB6ZO+5Lu/55yf77yM5bCx5Y+v5Lul5a+55q+P6IqC6ZOB6ZO+6L+b6KGM5LiA5qyh6L+Q5Yqo5pu05paw77yMXHJcbiAgICAgKiDogIzlkI7ov5vooYzliqjog73ovazmjaLvvIzlsIbmr4/oioLpk4Hpk77nmoTlnZDmoIflkJHliY3kuIDkuKrov5vooYznuqbmnZ/ku7/nnJ/vvIzmr5TlpoLov5vooYzov63ku6Pku7/nnJ8zMOasoSAgXHJcbiAgICAgKiDku7/nnJ/lrozmr5XlkI7ph43mlrDotYvog73vvIzmiJbmmK/lsIbliqjog73orqHnrpfkuLrlhbbku5bnspLlrZDmlYjmnpzjgIIgIFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0geyp9IGR0IGRlbHRhdGltZSDkuI7lvZPliY3luKfnjofnu5HlrprvvIzlv4XopoHpobnnm65cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZUJ5VmVsb2NpdHkoZHQ6IG51bWJlcik6IFBhd25Nb3ZlbWVudCB7XHJcbiAgICAgICAgdGhpcy5hZGRQZXJtYW5lbnRGb3JjZVRvUGh5c2ljKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuTW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RWZWxvY2l0eSA9IHRoaXMudmVsb2NpdHkuY2xvbmUoKTtcclxuICAgICAgICAgICAgLy8g5bqU55So6LSo6YePXHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLmRpdih0aGlzLm1hc3MpO1xyXG4gICAgICAgICAgICAvLyDorqHnrpfpmLvliptcclxuICAgICAgICAgICAgbGV0IGluY29taW5nRHJhZyA9IHRoaXMuZHJhZyAqIGR0ICsgMTtcclxuICAgICAgICAgICAgLy8g6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uRHVlID0gdGhpcy52ZWxvY2l0eS5kaXYoaW5jb21pbmdEcmFnKTtcclxuICAgICAgICAgICAgLy8g5bqU55So5Yqb5Yiw6YCf5bqmXHJcbiAgICAgICAgICAgIGxldCBvdXRWZWxvY2l0eSA9IHRoaXMuZm9yY2UubXVsKGR0KTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eS5hZGQodGhpcy52ZWxvY2l0eSkuZGl2KGluY29taW5nRHJhZyk7XHJcbiAgICAgICAgICAgIC8vIOmZkOWItlxyXG4gICAgICAgICAgICBsZXQgb3V0VmVsb2NpdHlMZW5ndGggPSBvdXRWZWxvY2l0eS5sZW4oKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eUxlbmd0aCA8PSB0aGlzLm1heFNwZWVkID8gb3V0VmVsb2NpdHkgOiBvdXRWZWxvY2l0eS5tdWwodGhpcy5tYXhTcGVlZCkuZGl2KG91dFZlbG9jaXR5TGVuZ3RoKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eS5zdWIodGhpcy5sYXN0VmVsb2NpdHkpXHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5TGVuZ3RoID0gb3V0VmVsb2NpdHkubGVuKCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHlMZW5ndGggPD0gdGhpcy5hY2NlbGVyYXRpb25MaW1pdCA/IG91dFZlbG9jaXR5IDogb3V0VmVsb2NpdHkubXVsKHRoaXMuYWNjZWxlcmF0aW9uTGltaXQpLmRpdihvdXRWZWxvY2l0eUxlbmd0aCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHkuYWRkKHRoaXMubGFzdFZlbG9jaXR5KTtcclxuICAgICAgICAgICAgLy8g5paw6YCf5bqmXHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgY2MuVmVjMyhvdXRWZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3N0aW9uID0gdGhpcy5jb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIOiuvue9ruWdkOagh1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0UG9zaXRpb24odGhpcy52ZWxvY2l0eS5tdWwoZHQpLmFkZChuZXdQb3N0aW9uIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKG5ld1Bvc3Rpb24ueCwgbmV3UG9zdGlvbi55LCAwKSA6IG5ld1Bvc3Rpb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mb3JjZS5zZXQoY2MuVmVjMy5aRVJPKTtcclxuICAgICAgICB0aGlzLmRyYWcgPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnp7vliqjmm7TmlrDlh73mlbAgLSDnroDmmJPlipvpqbHliqggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIGZpeCAgICAgICAgICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICog55Sx5Yqb6amx5Yqo5pu05pawXHJcbiAgICAgKiBcclxuICAgICAqIOS4gOiIrOaDheWGteS4i+W5tuS4jeaOqOiNkOS9v+eUqO+8jOi/meS7heS7heWPquaYr+S4uuS6humrmOaViOeOh+iAjOS6p+eUn+eahFxyXG4gICAgICog5aaC5p6c6ZyA6KaB5a6e546wUEJE77yM5YWJ5ruR5qC4562J5Ye95pWw77yM6K+35L2/55SodXBkYXRlQnlWZWxvY2l0eSgpXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVCeWZvcmNlID0gZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgdGhpcy5hZGRQZXJtYW5lbnRGb3JjZVRvUGh5c2ljKCk7XHJcbiAgICB9O1xyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/RigorousLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '173f5UDvDNOh7BaDUvjJbqV', 'RigorousLibrary');
// scripts/base/core/RigorousLibrary.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RigorousRingBuffer = exports.RigorousArray = exports.RigorousMap = exports.RigorousSet = exports.RigorousHash = exports.RigorousMatrix2 = exports.RigorousMatrix3 = exports.RigorousMatrix4 = exports.RigorousSize = exports.RigorousVector2 = exports.RigorousScale = exports.RigorousRotation = exports.RigorousPostion = exports.RigorousVector3 = exports.RigorousVector4 = exports.RigorousValueType = void 0;
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var SysBaseType;
(function (SysBaseType) {
    SysBaseType[SysBaseType["number"] = 0] = "number";
    SysBaseType[SysBaseType["string"] = 1] = "string";
    SysBaseType[SysBaseType["boolean"] = 2] = "boolean";
    SysBaseType[SysBaseType["object"] = 3] = "object";
    SysBaseType[SysBaseType["undefined"] = 4] = "undefined";
})(SysBaseType || (SysBaseType = {}));
var RigorousValueType = /** @class */ (function () {
    function RigorousValueType() {
    }
    return RigorousValueType;
}());
exports.RigorousValueType = RigorousValueType;
var RigorousVector4 = /** @class */ (function (_super) {
    __extends(RigorousVector4, _super);
    function RigorousVector4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector4;
}(RigorousValueType));
exports.RigorousVector4 = RigorousVector4;
var RigorousVector3 = /** @class */ (function (_super) {
    __extends(RigorousVector3, _super);
    function RigorousVector3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector3;
}(RigorousVector4));
exports.RigorousVector3 = RigorousVector3;
var RigorousPostion = /** @class */ (function (_super) {
    __extends(RigorousPostion, _super);
    function RigorousPostion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousPostion;
}(RigorousVector3));
exports.RigorousPostion = RigorousPostion;
var RigorousRotation = /** @class */ (function (_super) {
    __extends(RigorousRotation, _super);
    function RigorousRotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousRotation;
}(RigorousVector3));
exports.RigorousRotation = RigorousRotation;
var RigorousScale = /** @class */ (function (_super) {
    __extends(RigorousScale, _super);
    function RigorousScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousScale;
}(RigorousVector3));
exports.RigorousScale = RigorousScale;
var RigorousVector2 = /** @class */ (function (_super) {
    __extends(RigorousVector2, _super);
    function RigorousVector2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector2;
}(RigorousVector4));
exports.RigorousVector2 = RigorousVector2;
var RigorousSize = /** @class */ (function (_super) {
    __extends(RigorousSize, _super);
    function RigorousSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousSize;
}(RigorousVector2));
exports.RigorousSize = RigorousSize;
var RigorousMatrix4 = /** @class */ (function (_super) {
    __extends(RigorousMatrix4, _super);
    function RigorousMatrix4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix4;
}(RigorousValueType));
exports.RigorousMatrix4 = RigorousMatrix4;
var RigorousMatrix3 = /** @class */ (function (_super) {
    __extends(RigorousMatrix3, _super);
    function RigorousMatrix3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix3;
}(RigorousMatrix4));
exports.RigorousMatrix3 = RigorousMatrix3;
var RigorousMatrix2 = /** @class */ (function (_super) {
    __extends(RigorousMatrix2, _super);
    function RigorousMatrix2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix2;
}(RigorousMatrix4));
exports.RigorousMatrix2 = RigorousMatrix2;
var RigorousHash = /** @class */ (function (_super) {
    __extends(RigorousHash, _super);
    /**
     * @param length 定义哈希表的使用场景最大长度
     */
    function RigorousHash(length) {
        var _this = _super.call(this) || this;
        _this.HashCodeGate = false;
        _this.HashCodeGate = length ? length > 50 : true;
        _this._HashList = {};
        return _this;
    }
    /**
     * 获取一个字符的哈希值
     * @param code
     */
    RigorousHash.prototype.ToHashCode_ShortWay = function (code) {
        var hash = 0;
        if (typeof (code) == 'number') {
            hash = code;
        }
        else {
            for (var _i = 0, code_1 = code; _i < code_1.length; _i++) {
                var iterator = code_1[_i];
                hash += iterator.charCodeAt(0);
            }
            // HashComplexity
            hash %= 37;
        }
        return hash;
    };
    RigorousHash.prototype.ToHashCode_LongWay = function (code) {
        var hash = 5381;
        if (typeof (code) == 'number') {
            hash = code;
        }
        else {
            for (var _i = 0, code_2 = code; _i < code_2.length; _i++) {
                var iterator = code_2[_i];
                hash *= 33;
                hash += iterator.charCodeAt(0);
            }
            hash %= 1013;
        }
        return hash;
    };
    /**
     * 获取哈希值的选择器
     */
    RigorousHash.prototype.ToHashCode = function (key) {
        if (this.HashCodeGate)
            return this.ToHashCode_ShortWay(key);
        else
            return this.ToHashCode_LongWay(key);
    };
    /**
     * 按键获取元素
     * @param key 键
     */
    RigorousHash.prototype.get = function (key) {
        var hash = this.ToHashCode(key);
        return this._HashList[hash];
    };
    /**
     * 按键设置元素
     * @param key 键
     */
    RigorousHash.prototype.set = function (key, value) {
        var hash = this.ToHashCode(key);
        this._HashList[hash] = value;
    };
    /**
     * 按键删除元素
     * @param key 键
     */
    RigorousHash.prototype.remove = function (key) {
        var hash = this.ToHashCode(key);
        if (this._HashList[hash]) {
            this._HashList[hash].destroy();
            return true;
        }
        return false;
    };
    /**
     * 清除
     */
    RigorousHash.prototype.clean = function () {
        this._HashList = [];
    };
    return RigorousHash;
}(RigorousValueType));
exports.RigorousHash = RigorousHash;
var RigorousSet = /** @class */ (function (_super) {
    __extends(RigorousSet, _super);
    function RigorousSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousSet;
}(RigorousHash));
exports.RigorousSet = RigorousSet;
var RigorousMap = /** @class */ (function (_super) {
    __extends(RigorousMap, _super);
    function RigorousMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RigorousMap.prototype.set = function (key, value) {
        var objectTagName;
        switch (SysBaseType[typeof (value)]) {
            case SysBaseType.object:
                objectTagName = Object.prototype.toString.call(value);
                if (value instanceof cc.Component)
                    objectTagName += value['_id'];
                else {
                    var ObjectKey = Object.keys(value);
                    objectTagName += ObjectKey[114514 % ObjectKey.length];
                    objectTagName += ObjectKey[4399 % ObjectKey.length];
                    objectTagName += ObjectKey[8848 % ObjectKey.length];
                }
                key = objectTagName;
                break;
            case SysBaseType.string:
                key = value;
                break;
            case SysBaseType.number:
                key = value;
                break;
            case SysBaseType.boolean:
                key = value ? 1 : 0;
                break;
            case SysBaseType.undefined:
                key = 0;
                break;
            default:
                key = 0;
                break;
        }
        var hash = this.ToHashCode(key);
        this._HashList[hash] = value;
        return hash;
    };
    return RigorousMap;
}(RigorousHash));
exports.RigorousMap = RigorousMap;
var RigorousArray = /** @class */ (function (_super) {
    __extends(RigorousArray, _super);
    /**
     * 数组类并非用作Array，不要直接使用此类存储参数
     */
    function RigorousArray() {
        var _this = _super.call(this) || this;
        _this._HashList = [];
        return _this;
    }
    /**
     * 按键移除
     */
    RigorousArray.prototype.remove = function (key) {
        this._HashList[key] = null;
    };
    /**
     * 清除
     */
    RigorousArray.prototype.clean = function () {
        this._HashList = [];
    };
    return RigorousArray;
}(RigorousValueType));
exports.RigorousArray = RigorousArray;
var RigorousRingBuffer = /** @class */ (function (_super) {
    __extends(RigorousRingBuffer, _super);
    /**
     * 初始化栈
     * @warn 通用起见没有使用苛刻模式，请不要在任何地方使用非正整数
     */
    function RigorousRingBuffer(size) {
        var _this = _super.call(this) || this;
        _this._StackGetPointer = 0;
        _this._StackPutPointer = 0;
        _this._StackSize = size;
        return _this;
    }
    Object.defineProperty(RigorousRingBuffer.prototype, "_$get", {
        get: function () {
            return this._StackGetPointer;
        },
        set: function (value) {
            this._StackGetPointer += value;
            this._StackGetPointer %= this._StackSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "$get", {
        get: function () {
            return this._StackGetPointer;
        },
        set: function (value) {
            if (value > 0)
                this._StackIsFull = false;
            if (value > this.length)
                this.clean();
            var getPointer = DevelopersToolGlobal_1.mathMacro.PMod(value, this._StackSize);
            this._StackGetPointer = getPointer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "_$put", {
        get: function () {
            return this._StackPutPointer;
        },
        set: function (value) {
            this._StackPutPointer += value;
            this._StackPutPointer %= this._StackSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "$put", {
        /**
         * 获取有效的进栈位
         */
        get: function () {
            // let put = this._StackPutPointer - 1;
            // put = put < 0 ? this._StackSize - 1 : put;
            // return put;
            return this._StackPutPointer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "length", {
        /**
         * 获取栈有效长度
         */
        get: function () {
            var len = this._$put - this._$get;
            if (this._StackIsFull)
                return this._StackSize - len;
            return len < 0 ? this._StackSize + len : len;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 直接获取索引项目
     * 这不会触发栈指针变化
     */
    RigorousRingBuffer.prototype.getBuffer = function (index) {
        return this._HashList[DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize)];
    };
    /**
     * 进栈
     * @param object
     */
    RigorousRingBuffer.prototype.push = function (object) {
        this._HashList[this._StackPutPointer] = object;
        var lastPut = this._$put;
        this._$put = 1;
        if (this._StackIsFull)
            this._$get = 1;
        if (this._$put == this._$get)
            this._StackIsFull = true;
        return lastPut;
    };
    /**
     * 出栈
     * @param length
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    RigorousRingBuffer.prototype.pull = function (length) {
        this._StackIsFull = false;
        var out = { obj: [], index: [] };
        for (var index = 0; index < Math.min(length, this.length); index++) {
            var outIndex = (index + this._$get) % this._StackSize;
            out.obj.push(this._HashList[outIndex]);
            out.index.push(outIndex);
            this._HashList[outIndex] = undefined;
        }
        this._$get = length;
        return out;
    };
    /**
     * 清空栈
     */
    RigorousRingBuffer.prototype.clean = function () {
        this._HashList = [];
        this._StackGetPointer = 0;
        this._StackPutPointer = 0;
    };
    /**
     * 给定一个索引，转为一个在栈内的有效的索引
     */
    RigorousRingBuffer.prototype.indexAtStack = function (index) {
        return DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize);
    };
    return RigorousRingBuffer;
}(RigorousArray));
exports.RigorousRingBuffer = RigorousRingBuffer;
// 测试
// interface kismitFloat {
//     _num: Number;
// }
// class myfloat implements kismitFloat {
//     constructor(value?: number) {
//         this._num = value || 0;
//     }
//     _num;
//     get num() {
//         return this._num;
//     }
//     set num(value: number) {
//         this._num = value;
//     }
// }
// let a = new myfloat(1);
// cc.log(a.num);

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcUmlnb3JvdXNMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBZ0U7QUFDaEUsSUFBSyxXQUVKO0FBRkQsV0FBSyxXQUFXO0lBQ1osaURBQU0sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSxtREFBTyxDQUFBO0lBQUUsaURBQU0sQ0FBQTtJQUFFLHVEQUFTLENBQUE7QUFDOUMsQ0FBQyxFQUZJLFdBQVcsS0FBWCxXQUFXLFFBRWY7QUFDRDtJQUFBO0lBRUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSw4Q0FBaUI7QUFHOUI7SUFBcUMsbUNBQWlCO0lBQXREOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxpQkFBaUIsR0FFckQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQXFDLG1DQUFlO0lBQXBEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxlQUFlLEdBRW5EO0FBRlksMENBQWU7QUFHNUI7SUFBc0Msb0NBQWU7SUFBckQ7O0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnFDLGVBQWUsR0FFcEQ7QUFGWSw0Q0FBZ0I7QUFHN0I7SUFBbUMsaUNBQWU7SUFBbEQ7O0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmtDLGVBQWUsR0FFakQ7QUFGWSxzQ0FBYTtBQUcxQjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQWtD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QUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUM3QixPQUFPLGdDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0F6SEEsQUF5SEMsQ0F6SHVDLGFBQWEsR0F5SHBEO0FBekhZLGdEQUFrQjtBQTRIL0IsS0FBSztBQUNMLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLHlDQUF5QztBQUN6QyxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLFFBQVE7QUFDUixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsSUFBSTtBQUNKLDBCQUEwQjtBQUMxQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmVudW0gU3lzQmFzZVR5cGUge1xyXG4gICAgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIG9iamVjdCwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yNCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMyBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1Bvc3Rpb24gZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjMge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNSb3RhdGlvbiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMyB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NjYWxlIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NpemUgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjIge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXg0IGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXgzIGV4dGVuZHMgUmlnb3JvdXNNYXRyaXg0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWF0cml4MiBleHRlbmRzIFJpZ29yb3VzTWF0cml4NCB7XHJcblxyXG59XHJcbmltcG9ydCB7IEloYXNoIH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNIYXNoIGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUgaW1wbGVtZW50cyBJaGFzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5a6a5LmJ5ZOI5biM6KGo55qE5L2/55So5Zy65pmv5pyA5aSn6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5IYXNoQ29kZUdhdGUgPSBsZW5ndGggPyBsZW5ndGggPiA1MCA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWTiOW4jOihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZGVjbGFyZSBfSGFzaExpc3Q6IGFueVtudW1iZXJdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5a2X56ym55qE5ZOI5biM5YC8XHJcbiAgICAgKiBAcGFyYW0gY29kZSBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfU2hvcnRXYXkoY29kZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaGFzaDogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2RlKSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBoYXNoID0gY29kZSBhcyBudW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGFzaENvbXBsZXhpdHlcclxuICAgICAgICAgICAgaGFzaCAlPSAzNztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfTG9uZ1dheShjb2RlOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBoYXNoOiBudW1iZXIgPSA1MzgxO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGNvZGUpID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGhhc2ggPSBjb2RlIGFzIG51bWJlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGhhc2ggKj0gMzM7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFzaCAlPSAxMDEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgSGFzaENvZGVHYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWTiOW4jOWAvOeahOmAieaLqeWZqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgVG9IYXNoQ29kZShrZXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuSGFzaENvZGVHYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX1Nob3J0V2F5KGtleSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX0xvbmdXYXkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiOt+WPluWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldChrZXkpIHtcclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFtoYXNoXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiuvue9ruWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLlRvSGFzaENvZGUoa2V5KTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFtoYXNoXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu5Yig6Zmk5YWD57SgXHJcbiAgICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlKGtleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX0hhc2hMaXN0W2hhc2hdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NldCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hcCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogYW55LCB2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgb2JqZWN0VGFnTmFtZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgICAgIHN3aXRjaCAoU3lzQmFzZVR5cGVbdHlwZW9mICh2YWx1ZSldKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUub2JqZWN0OlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSB2YWx1ZVsnX2lkJ107XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgT2JqZWN0S2V5ID0gT2JqZWN0LmtleXModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzExNDUxNCAlIE9iamVjdEtleS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzQzOTkgJSBPYmplY3RLZXkubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IE9iamVjdEtleVs4ODQ4ICUgT2JqZWN0S2V5Lmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBvYmplY3RUYWdOYW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUuc3RyaW5nOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS5udW1iZXI6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLmJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUudW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbn1cclxuaW1wb3J0IHsgSWFycmF5IH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNBcnJheSBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIGltcGxlbWVudHMgSWFycmF5IHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE57G75bm26Z2e55So5L2cQXJyYXnvvIzkuI3opoHnm7TmjqXkvb/nlKjmraTnsbvlrZjlgqjlj4LmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX0hhc2hMaXN0OiBhbnlbbnVtYmVyXTtcclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu56e76ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3Rba2V5XSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgIH1cclxufVxyXG5pbXBvcnQgeyBJcmluZ0J1ZmZlciB9IGZyb20gJy4vUmlnb3JvdXNUeXBlJztcclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzUmluZ0J1ZmZlciBleHRlbmRzIFJpZ29yb3VzQXJyYXkgaW1wbGVtZW50cyBJcmluZ0J1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluagiCBcclxuICAgICAqIEB3YXJuIOmAmueUqOi1t+ingeayoeacieS9v+eUqOiLm+WIu+aooeW8j++8jOivt+S4jeimgeWcqOS7u+S9leWcsOaWueS9v+eUqOmdnuato+aVtOaVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrR2V0UG9pbnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tQdXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1NpemUgPSBzaXplXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiOaMh+mSiCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWNsYXJlIF9TdGFja0dldFBvaW50ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2V0IF8kZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YWNrR2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0IF8kZ2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgKz0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyICU9IHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgJGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGFja0dldFBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0ICRnZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHRoaXMuX1N0YWNrSXNGdWxsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5sZW5ndGgpIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBsZXQgZ2V0UG9pbnRlciA9IG1tLlBNb2QodmFsdWUsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gZ2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+b5qCI5oyH6ZKIIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlY2xhcmUgX1N0YWNrUHV0UG9pbnRlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBnZXQgXyRwdXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgXyRwdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgJT0gdGhpcy5fU3RhY2tTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnInmlYjnmoTov5vmoIjkvY1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCAkcHV0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gbGV0IHB1dCA9IHRoaXMuX1N0YWNrUHV0UG9pbnRlciAtIDE7XHJcbiAgICAgICAgLy8gcHV0ID0gcHV0IDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSAtIDEgOiBwdXQ7XHJcbiAgICAgICAgLy8gcmV0dXJuIHB1dDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIjmt7HluqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX1N0YWNrU2l6ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoIjmu6HmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX1N0YWNrSXNGdWxsOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qCI5pyJ5pWI6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuXyRwdXQgLSB0aGlzLl8kZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgcmV0dXJuIHRoaXMuX1N0YWNrU2l6ZSAtIGxlbjtcclxuICAgICAgICByZXR1cm4gbGVuIDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSArIGxlbiA6IGxlbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog55u05o6l6I635Y+W57Si5byV6aG555uuIFxyXG4gICAgICog6L+Z5LiN5Lya6Kem5Y+R5qCI5oyH6ZKI5Y+Y5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCdWZmZXIoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0hhc2hMaXN0W21tLlBNb2QoaW5kZXgsIHRoaXMuX1N0YWNrU2l6ZSldO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5vmoIhcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoPFQ+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3RbdGhpcy5fU3RhY2tQdXRQb2ludGVyXSA9IG9iamVjdDtcclxuICAgICAgICBsZXQgbGFzdFB1dCA9IHRoaXMuXyRwdXQ7XHJcbiAgICAgICAgdGhpcy5fJHB1dCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuX1N0YWNrSXNGdWxsKSB0aGlzLl8kZ2V0ID0gMTtcclxuICAgICAgICBpZiAodGhpcy5fJHB1dCA9PSB0aGlzLl8kZ2V0KSB0aGlzLl9TdGFja0lzRnVsbCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RQdXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiFxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBcclxuICAgICAqIEByZXR1cm4gb2JqW106IG9iajMsIG9iajQuLi5cclxuICAgICAqIEByZXR1cm4gaW5kZXhbXTogMywgNC4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHVsbDxUIGV4dGVuZHMgbnVtYmVyPihsZW5ndGg6IFQpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0lzRnVsbCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBvdXQgPSB7IG9iajogW10sIGluZGV4OiBbXSB9O1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBNYXRoLm1pbihsZW5ndGgsIHRoaXMubGVuZ3RoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgb3V0SW5kZXggPSAoaW5kZXggKyB0aGlzLl8kZ2V0KSAlIHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgICAgICAgICAgb3V0Lm9iai5wdXNoKHRoaXMuX0hhc2hMaXN0W291dEluZGV4XSk7XHJcbiAgICAgICAgICAgIG91dC5pbmRleC5wdXNoKG91dEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fSGFzaExpc3Rbb3V0SW5kZXhdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl8kZ2V0ID0gbGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrmoIhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uZ5a6a5LiA5Liq57Si5byV77yM6L2s5Li65LiA5Liq5Zyo5qCI5YaF55qE5pyJ5pWI55qE57Si5byVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbmRleEF0U3RhY2soaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG1tLlBNb2QoaW5kZXgsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyDmtYvor5VcclxuLy8gaW50ZXJmYWNlIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIF9udW06IE51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgbXlmbG9hdCBpbXBsZW1lbnRzIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgdGhpcy5fbnVtID0gdmFsdWUgfHwgMDtcclxuLy8gICAgIH1cclxuLy8gICAgIF9udW07XHJcbi8vICAgICBnZXQgbnVtKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9udW07XHJcbi8vICAgICB9XHJcbi8vICAgICBzZXQgbnVtKHZhbHVlOiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLl9udW0gPSB2YWx1ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsZXQgYSA9IG5ldyBteWZsb2F0KDEpO1xyXG4vLyBjYy5sb2coYS5udW0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/RigorousType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4af9rpBBdE0IaqTfZsbgSG', 'RigorousType');
// scripts/base/class/RigorousType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmVv+aVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50NjQge1xyXG4gICAgaW50NjQ6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+36ZW/5pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50NjQge1xyXG4gICAgdWludDY0OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOaVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50MzIge1xyXG4gICAgaW50MzI6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+35pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50MzIge1xyXG4gICAgdWludDMyOiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOefreaVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50MTYge1xyXG4gICAgaW50MTY6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+355+t5pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50MTYge1xyXG4gICAgdWludDE2OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOWtl+iKguexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50OCB7XHJcbiAgICBpbnQ4OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOaXoOespuWPt+Wtl+iKguexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdWludDgge1xyXG4gICAgdWludDg6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog6ZW/5rWu54K557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdDY0IHtcclxuICAgIGZsb2F0NjQ6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5rWu54K557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdDMyIHtcclxuICAgIGZsb2F0MzI6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5paH5pys57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZXh0IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxufVxyXG4vKipcclxuICog5ZG95ZCN57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEluYW1lZCB7XHJcbiAgICBuYW1lZDogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiDlm5vnu7Tnn6Lph49cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXZlY3RvcjQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgejogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDlm5vnu7TmlbTmlbDnn6Lph49cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWludHZlY3RvcjQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgejogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiByZ2Jh6Imy5b2pXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElyZ2JhIHtcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogY215a+iJsuW9qVxyXG4gKiBDeWFuLE1hZ2VudGEsWWVsbG93LEJsYWNrXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEljbXlrIHtcclxuICAgIGM6IG51bWJlcjtcclxuICAgIG06IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGs6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5LiJ57u055+i6YePXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl2ZWN0b3IzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5LiJ57u05pW05pWw55+i6YePXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElpbnR2ZWN0b3IzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogaHNi6Imy5b2pXHJcbiAqIGh1ZXMsc2F0dXJhdGlvbixicmlnaHRuZXNzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEloc2Ige1xyXG4gICAgaDogbnVtYmVyO1xyXG4gICAgczogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDkuInnu7TlnZDmoIdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXBvc2l0aW9uIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog56yb5Y2h5bCU5peL6L2sXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElyb3RhdGlvbiB7XHJcbiAgICB5YXc6IG51bWJlcjtcclxuICAgIHBpdGNoOiBudW1iZXI7XHJcbiAgICByb2xsOiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOS6jOe7tOefoumHj1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOS6jOe7tOaVtOaVsOefoumHj1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50dmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOW5s+mdouWwuuWvuFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJc2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOesm+WNoeWwlOWPmOaNolxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdHJhbnNmcm9tIHtcclxuICAgIHBvc2l0aW9uOiBJcG9zaXRpb247XHJcbiAgICByb3RhdGlvbjogSXJvdGF0aW9uO1xyXG4gICAgc2NhbGU6IEl2ZWN0b3IzO1xyXG59XHJcbi8qKlxyXG4gKiDnn6npmLU0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYXQ0IHtcclxuICAgIG0wMDogbnVtYmVyOyBtMDE6IG51bWJlcjsgbTAyOiBudW1iZXI7IG0wMzogbnVtYmVyO1xyXG4gICAgbTA0OiBudW1iZXI7IG0wNTogbnVtYmVyOyBtMDY6IG51bWJlcjsgbTA3OiBudW1iZXI7XHJcbiAgICBtMDg6IG51bWJlcjsgbTA5OiBudW1iZXI7IG0xMDogbnVtYmVyOyBtMTE6IG51bWJlcjtcclxuICAgIG0xMjogbnVtYmVyOyBtMTM6IG51bWJlcjsgbTE0OiBudW1iZXI7IG0xNTogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDnn6npmLUzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYXQzIHtcclxuICAgIG0wMDogbnVtYmVyOyBtMDE6IG51bWJlcjsgbTAyOiBudW1iZXI7XHJcbiAgICBtMDM6IG51bWJlcjsgbTA0OiBudW1iZXI7IG0wNTogbnVtYmVyO1xyXG4gICAgbTA2OiBudW1iZXI7IG0wNzogbnVtYmVyOyBtMDg6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5ZOI5biM6KGoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEloYXNoIHtcclxuICAgIGdldDxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPihrZXk6IFQpOiBhbnk7XHJcbiAgICBzZXQ8VCBleHRlbmRzIHN0cmluZyB8IG51bWJlcj4oa2V5OiBULCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIHJlbW92ZTxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPihrZXk6IFQpOiBib29sZWFuO1xyXG4gICAgY2xlYW4oKTogdm9pZDtcclxufVxyXG4vKipcclxuICog5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElhcnJheSB7XHJcbiAgICByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZDtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIHJpbmdidWZmZXJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJpbmdCdWZmZXIge1xyXG4gICAgcHVzaDxUPihvYmplY3Q6IFQpOiBudW1iZXI7XHJcbiAgICBwdWxsPFQgZXh0ZW5kcyBudW1iZXI+KGxlbmd0aDogbnVtYmVyKTogYW55O1xyXG4gICAgY2xlYW4oKTogdm9pZDtcclxufVxyXG4vKipcclxuICog6ZuGXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElzZXQge1xyXG4gICAgbWFrZTxUIGV4dGVuZHMgSWFycmF5PihhcnJheTogVCk6IElzZXQ7XHJcbiAgICBpbnRlcnNlY3Rpb248VCBleHRlbmRzIElzZXQ+KGFycmF5X2E6IFQsIGFycmF5X2I6IFQpOiBJc2V0O1xyXG4gICAgZGlmZmVyZW5jZTxUIGV4dGVuZHMgSXNldD4oYXJyYXlfYTogVCwgYXJyYXlfYjogVCk6IElzZXQ7XHJcbiAgICB1bmlvbjxUIGV4dGVuZHMgSXNldD4oYXJyYXlfYTogVCwgYXJyYXlfYjogVCk6IElzZXQ7XHJcbiAgICB0b0FycmF5KCk6IElhcnJheTtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIOaYoOWwhFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFwIHtcclxuICAgIGdldDxUPihrZXk6IFQpOiBhbnk7XHJcbiAgICBzZXQ8VD4oa2V5OiBULCB2YWx1ZTogVCk6IHZvaWQ7XHJcbiAgICBhZGQ8VD4odmFsdWU6IFQpOiBudW1iZXI7XHJcbiAgICByZW1vdmU8VD4oa2V5OiBUKTogYm9vbGVhbjtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIOWtmOaUvuaVtOaVsO+8jOWPluWAvOWcqMKxMl42M14oMl42MylcclxuICog5beo5aSn57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElpbnRlZ2VySHVnZSB7XHJcbiAgICBpbnRodWdlO1xyXG59XHJcbi8qKlxyXG4gKiDlrZjmlL7mta7ngrnvvIzlj5blgLzlnKjCsTJeNjNeKDJeNjMpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdEh1Z2Uge1xyXG4gICAgaW50aHVnZTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5b12PfnXFL6rthYkBUEjc3', 'Setting');
// scripts/game/Setting.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 游戏固定参数设定
var Setting = /** @class */ (function () {
    function Setting() {
    }
    Object.defineProperty(Setting, "Game_Column", {
        // 基本常量定义
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Game_Row", {
        get: function () { return 15; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Game_Row2", {
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_width", {
        get: function () { return 15; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Height", {
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridCurrentPoint", {
        get: function () { return this._GridCurrentPoint; },
        set: function (value) { this._GridCurrentPoint = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridPointer", {
        get: function () { return this._GridCurrentPoint++; },
        set: function (value) { this._GridCurrentPoint += value; },
        enumerable: false,
        configurable: true
    });
    // 网格指针
    Setting._GridCurrentPoint = 0;
    return Setting;
}());
exports.default = Setting;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFdBQVc7QUFDWDtJQUFBO0lBZUEsQ0FBQztJQWJHLHNCQUFrQixzQkFBVztRQUQ3QixTQUFTO2FBQ1QsY0FBa0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM3QyxzQkFBa0IsbUJBQVE7YUFBMUIsY0FBK0IsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMzQyxzQkFBa0Isb0JBQVM7YUFBM0IsY0FBZ0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM1QyxzQkFBa0IscUJBQVU7YUFBNUIsY0FBaUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM3QyxzQkFBa0Isc0JBQVc7YUFBN0IsY0FBa0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUc5QyxzQkFBa0IsMkJBQWdCO2FBQWxDLGNBQXVDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFBLENBQUMsQ0FBQzthQUN0RSxVQUFtQyxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUROO0lBRXRFLHNCQUFrQixzQkFBVzthQUE3QixjQUFrQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBLENBQUMsQ0FBQzthQUNuRSxVQUE4QixLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQURMO0lBSm5FLE9BQU87SUFDVSx5QkFBaUIsR0FBVyxDQUFDLENBQUM7SUFPbkQsY0FBQztDQWZELEFBZUMsSUFBQTtrQkFmb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOa4uOaIj+WbuuWumuWPguaVsOiuvuWumlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIHtcclxuICAgIC8vIOWfuuacrOW4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Db2x1bW4oKSB7IHJldHVybiA0OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdygpIHsgcmV0dXJuIDE1OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdzIoKSB7IHJldHVybiAzMDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV93aWR0aCgpIHsgcmV0dXJuIDE1OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX0hlaWdodCgpIHsgcmV0dXJuIDMwOyB9XHJcbiAgICAvLyDnvZHmoLzmjIfpkohcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dyaWRDdXJyZW50UG9pbnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkQ3VycmVudFBvaW50KCkgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkQ3VycmVudFBvaW50KHZhbHVlKSB7IHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkUG9pbnRlcigpIHsgcmV0dXJuIHRoaXMuX0dyaWRDdXJyZW50UG9pbnQrKyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkUG9pbnRlcih2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ICs9IHZhbHVlIH1cclxuXHJcbiAgICAvLyBcclxufSJdfQ==
//------QC-SOURCE-SPLIT------
