
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
// cc["vv"] = cc["vv"] || DevelopersToolGlobal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSx5RUFBeUU7QUFDekU7SUFBQTtJQW1PQSxDQUFDO0lBM05HLHNCQUFrQixpQ0FBUzthQUEzQjtZQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUE0QixLQUFnQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBUUQsc0JBQWtCLDRDQUFvQjtRQUh0Qzs7V0FFRzthQUNIO1lBQ0ksT0FBTztnQkFDSCw4Q0FBOEM7Z0JBQzlDLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUM5QyxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsVUFBVTtnQkFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUNqRCxPQUFPO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7YUFDbEQsQ0FBQTtRQUNMLENBQUM7OztPQUFBO0lBVUQsc0JBQWtCLDRCQUFJO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FB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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFDSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7YUFDSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO2FBQ0ksSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMz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QU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDLENBQUE7SUF1Q0wsZ0JBQUM7Q0F6UEQsQUF5UEMsSUFBQTtBQXpQWSw4QkFBUztBQTBQdEI7OztHQUdHO0FBQ0gsSUFBWSxTQUVYO0FBRkQsV0FBWSxTQUFTO0lBQ2pCLDZDQUFNLENBQUE7SUFBRSxxREFBVSxDQUFBO0lBQUUsaURBQVEsQ0FBQTtBQUNoQyxDQUFDLEVBRlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFFcEI7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLHFCQUVYO0FBRkQsV0FBWSxxQkFBcUI7SUFDN0IsNkVBQVUsQ0FBQTtJQUFFLG1FQUFLLENBQUE7SUFBRSxtRUFBSyxDQUFBO0FBQzVCLENBQUMsRUFGVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUVoQztBQUNEOzs7R0FHRztBQUNILElBQVksc0JBRVg7QUFGRCxXQUFZLHNCQUFzQjtJQUM5Qix1RUFBTSxDQUFBO0lBQUUscUVBQUssQ0FBQTtBQUNqQixDQUFDLEVBRlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFFakM7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIsaUVBQVMsQ0FBQTtJQUFFLHlEQUFLLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdUVBQVksQ0FBQTtJQUFFLHVFQUFZLENBQUE7QUFDdkQsQ0FBQyxFQUZXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRTNCO0FBSUQscUJBQXFCO0FBQ3JCLCtDQUErQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVdhcmVob3VzZUdsb2JhbEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBjYy5Ob2RlIHxcclxuICAgIGNjLlRpbGVkTWFwIHxcclxuICAgIGNjLlBhcnRpY2xlU3lzdGVtIHxcclxuICAgIGNjLlZpZGVvUGxheWVyIHxcclxuICAgIGNjLldlYlZpZXcgfFxyXG4gICAgY2MuU3ByaXRlIHxcclxuICAgIGNjLlJlbmRlclRleHR1cmUgfFxyXG4gICAgY2MuVGV4dHVyZTJEIHxcclxuICAgIGNjLlByZWZhYiB8XHJcbiAgICBjYy5Bc3NldE1hbmFnZXIgfCB7fTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElUb29sR2xvYmFsSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElPdGhlckdsb2JhbEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJZ2FuZXJhbExheWVySW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGNjLk5vZGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJb3BlblNjcmlwdEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJaW5zdGFuY2VJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogbnVtYmVyXTogY2MuQ29tcG9uZW50IHwgY2MuTm9kZTtcclxufVxyXG4vLyBpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSAnLi9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmV4cG9ydCBjbGFzcyBEZXZlbG9wZXJzVG9vbEdsb2JhbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku5PlupPlhajlsYDlrp7kvotcclxuICAgICAqIOWtmOaUvmxvYWTml7bovb3lhaXnmoTmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX1dhcmVob3VzZTogSVdhcmVob3VzZUdsb2JhbEludGVyZmFjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgd2FyZWhvdXNlKCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9XYXJlaG91c2UgPSB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHdhcmVob3VzZSh2YWx1ZTogSVdhcmVob3VzZUdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9XYXJlaG91c2UgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQ55uu5b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvYWRSZXNvdXJjZXNjYXRhbG9nKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vIFwidXJsXCI6IHsgdHlwZTogcmVzIHR5cGUsIHVybDogXCJzYXZlIHVybFwiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L296Z+z5LmQ6Z+z5pWI6LWE5rqQXHJcbiAgICAgICAgICAgIFwic291bmRzXCI6IHsgdHlwZTogY2MuQXVkaW9DbGlwLCB1cmw6IFwic291bmRzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3pooTliLbku7botYTmupBcclxuICAgICAgICAgICAgXCJwcmVmYWJzXCI6IHsgdHlwZTogY2MuUHJlZmFiLCB1cmw6IFwicHJlZmFic1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L295Zu+6ZuG6LWE5rqQXHJcbiAgICAgICAgICAgIC8vIFwiYXRsYXNcIjogeyB0eXBlOiBjYy5TcHJpdGVBdGxhcywgdXJsOiBcImF0bGFzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3ljZXkuKrnsr7ngbXotYTmupBcclxuICAgICAgICAgICAgXCJmcmFtZXNcIjogeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdXJsOiBcImZyYW1lc1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L295YiG5Lqr5Zu+XHJcbiAgICAgICAgICAgIFwic2hhcmVcIjogeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdXJsOiBcInNoYXJlXCIgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW3peWFt+WFqOWxgOWunuS+i1xyXG4gICAgICog5Y+v5Lul5rOo5YWl5YW25LuW5bel5YW357G7XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9Ub29sOiBJVG9vbEdsb2JhbEludGVyZmFjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdG9vbCgpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfVG9vbCA9IHRoaXMuX0dsb2JhbF9Ub29sIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfVG9vbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHRvb2wodmFsdWU6IElUb29sR2xvYmFsSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1Rvb2wgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p2C6aG55YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlj6/ku6Xms6jlhaXlhbbku5bpobnnm65cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX090aGVyOiBJT3RoZXJHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG90aGVyKCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PdGhlciA9IHRoaXMuX0dsb2JhbF9PdGhlciB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX090aGVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgb3RoZXIodmFsdWU6IElPdGhlckdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PdGhlciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDlrp7kvotcclxuICAgICAqIOWPquiDveazqOWFpWNjLk5vZGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX0dlbnJhbExheWVyOiBJZ2FuZXJhbExheWVySW50ZXJmYWNlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxheWVycygpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgPSB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5omA5pyJ5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxheWVycyh2YWx1ZTogSWdhbmVyYWxMYXllckludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blupXlsYJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzWzBdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnmoTmlrDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgbGF5ZXIodmFsdWU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy5fR2xvYmFsX0dlbnJhbExheWVyIHx8IHt9KS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sYXllcnNba2V5LnRvU3RyaW5nKCldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WfuuacrOWxguWFqOWxgOiEmuacrFxyXG4gICAgICog5Y+q6IO95rOo5YWlY2MuY29tcG9uZW5077yM5LiN6L+H5a6e6ZmF5LiK5bm25rKh5pyJ6L+b6KGM6ZmQ5Yi2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9PcGVuU2NyaXB0OiBJb3BlblNjcmlwdEludGVyZmFjZSA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9PcGVuU2NyaXB0X0ZyaXN0TmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNjcmlwdHMoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgPSB0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBzY3JpcHQodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWUpIHRoaXMuX09wZW5TY3JpcHRfRnJpc3ROYW1lID0ga2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAga2V5ID0gKE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0IHx8IHt9KS5sZW5ndGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NyaXB0c1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuiEmuacrFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjcmlwdF9DbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5omA5pyJ6ISa5pys5ZCN56ewXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNjcmlwdE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W56ys5LiA5Liq5Yqg5YWl55qE6ISa5pysXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZyaXN0U2NyaXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfT3BlblNjcmlwdFt0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZV07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxgOWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfSW5zdGFuY2UgPSA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBnZXROYW1lKGluc3Q6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gaW5zdC5uYW1lICsgaW5zdFsnX2lkJ10ucmVwbGFjZSgvXFwuL2csIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhajpg6jlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2VzKCk6IElpbnN0YW5jZUludGVyZmFjZSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX0luc3RhbmNlID0gdGhpcy5fR2xvYmFsX0luc3RhbmNlIHx8IDxJaW5zdGFuY2VJbnRlcmZhY2U+e307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9JbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5a6e5L6L77yM55So5a6e5L6L55qE5ZCN56ew5LiOSUTkvZzplK7lkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgaW5zdGFuY2UodmFsdWU6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlW3RoaXMuZ2V0TmFtZSh2YWx1ZSldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOWunuS+i1xyXG4gICAgICog5aaC5p6c5pyq5oyH5a6a5pyJ5pWI5YC85YiZ5Li65riF6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGluc3RhbmNlX3JlbW92ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHRoaXMuX0dsb2JhbF9JbnN0YW5jZSA9IDxJaW5zdGFuY2VJbnRlcmZhY2U+e307XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlW3RoaXMuZ2V0TmFtZSh2YWx1ZSldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOagueaNruWQjeensOiOt+WPluWunuS+iyBcclxuICAgICAqIOWmguaenOayoeacieS9v+eUqOiHquWumuS5ieWQjeensO+8jOWImem7mOiupOeUqOWunuS+i0lE5L2c5Li65ZCN56ew77yM6L+Z5Y+v6IO95LiO5Lu75L2V5ZCN56ew5bi46YeP5LiN56ymXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VCeU5hbWUobmFtZTogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9JbnN0YW5jZVtuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u5ZCN56ew6K6+572u5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2VCeU5hbWUobmFtZTogc3RyaW5nIHwgbnVtYmVyLCBpbnN0OiBjYy5Db21wb25lbnQgfCBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX0luc3RhbmNlW25hbWVdID0gaW5zdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxgOWFg+e7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9HbG9iYWxfVHVwbGUgPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWD57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHR1cGxlKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1R1cGxlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhYPnu4TliqDlhaXkuIDkuKrpobnnm64gIFxyXG4gICAgICog5aaC5p6c5Yqg5YWl5LiA5Liq5peg5pWI55qE5YC877yM5q+U5aaC5biD5bCU77yMdW5kZWZpbmVk77yMdW5sbO+8jOWwhua4heepuui/meS4quWFg+e7hCAgXHJcbiAgICAgKiDliqDlhaXkuIDkuKrnqbrmlbDnu4TmiJbmmK/nqbrlr7nosaHmmK/mnInmlYjnmoTvvIzmiYDku6XkvJrkvZzkuLrlhYPnu4TnmoTkuIDkuKrlgLzliqDlhaVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgdHVwbGUodmFsdWU6IG9iamVjdCkge1xyXG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09ICdib29sZWFuJykgdGhpcy5fR2xvYmFsX1R1cGxlID0gW107XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1R1cGxlLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhYPnu4TliqDlhaXni6zmnInpobnnm65cclxuICAgICAqIOi/lOWbnui/meS4qumhueebruaYr+WQpuWtmOWcqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHR1cGxlT25seSh2YWx1ZTogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX0dsb2JhbF9UdXBsZS5pbmRleE9mKHZhbHVlKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnR1cGxlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTlhYPnu4TkuIDkuKrpobnnm65cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgdHVwbGVfcmVtb3ZlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1R1cGxlLmZpbHRlcigoZWxlbWVudCwgaW5kZXgsIGFycmF5KSA9PiB7IGVsZW1lbnQgIT0gdmFsdWUgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gaW1wb3J0IHsgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmV4cG9ydCBjbGFzcyBtYXRoTWFjcm8ge1xyXG4gICAgLy8g6L+U5Zue6ZqP5py655qE5pW05pWw77yM6IyD5Zu05ZyoWzAsIHgpXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDIoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDMoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDQoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDUoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDYoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDcoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDgoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDkoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDEoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDnu7TpmZDliLblnKjojIPlm7TkuK1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW0g6L6T5YWl5YC8XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSDojIPlm7RcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbGlnbiDlr7npvZDkvY3nva7vvIzpu5jorqQw6KGo56S65Zyo6IyD5Zu055qE5Lit6Ze077yMLTHooajnpLrkuI7lt6blr7npvZDvvIzmnIDlsI/kuLow77yM5pyA5aSn5Li6c2l6Ze+8jDHnm7jlj41cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQg6IyD5Zu05YGP56e7XHJcbiAgICAgKiBAcmV0dXJucyDov5Tlm57pmZDliLblkI7nmoTlgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFtcChudW0sIHNpemUsIGFsaWduLCBvZmZzZXQpIHtcclxuICAgICAgICBsZXQgc2F0dXJlID0gKChhbGlnbiB8fCAwKSArIDEpIC8gMjtcclxuICAgICAgICBsZXQgbWluID0gMCAtIChzYXR1cmUgKiBzaXplKSArIChvZmZzZXQgfHwgMCk7XHJcbiAgICAgICAgbGV0IG1heCA9ICgxIC0gc2F0dXJlKSAqIHNpemUgKyAob2Zmc2V0IHx8IDApO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihudW0sIG1heCksIG1pbik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIDDnn6Lph49cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgUkdCQSBjb2xvcnMuPGJyLz5cclxuICAgICAqIEVhY2ggY29sb3IgY29tcG9uZW50IGlzIGFuIGludGVnZXIgdmFsdWUgd2l0aCBhIHJhbmdlIGZyb20gMCB0byAyNTUuPGJyLz5cclxuICAgICAqIEB6aCDpgJrov4cgUmVk44CBR3JlZW7jgIFCbHVlIOminOiJsumAmumBk+ihqOekuuminOiJsu+8jOW5tumAmui/hyBBbHBoYSDpgJrpgZPooajnpLrkuI3pgI/mmI7luqbjgII8YnIvPlxyXG4gICAgICog5q+P5Liq6YCa6YGT6YO95Li65Y+W5YC86IyD5Zu0IFswLCAyNTVdIOeahOaVtOaVsOOAgjxici8+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuQ29sb3IpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBNYXRoZW1hdGljYWwgM3gzIG1hdHJpeC5cclxuICAgICAqIEB6aCDooajnpLrkuInnu7TvvIgzeDPvvInnn6npmLXjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5NYXQzKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gTWF0aGVtYXRpY2FsIDR4NCBtYXRyaXguXHJcbiAgICAgKiBAemgg6KGo56S65Zub57u077yINHg077yJ55+p6Zi144CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuTWF0NClcclxuICAgIC8qKlxyXG4gICAgICogQGVuXHJcbiAgICAgKiBBIDJEIHJlY3RhbmdsZSBkZWZpbmVkIGJ5IHgsIHkgcG9zaXRpb24gYW5kIHdpZHRoLCBoZWlnaHQuXHJcbiAgICAgKiBAemhcclxuICAgICAqIOi9tOWvuem9kOefqeW9ouOAglxyXG4gICAgICog55+p5b2i5YaF55qE5omA5pyJ54K56YO95aSn5LqO562J5LqO55+p5b2i55qE5pyA5bCP54K5ICh4TWluLCB5TWluKSDlubbkuJTlsI/kuo7nrYnkuo7nn6nlvaLnmoTmnIDlpKfngrkgKHhNYXgsIHlNYXgp44CCXHJcbiAgICAgKiDnn6nlvaLnmoTlrr3luqblrprkuYnkuLogeE1heCAtIHhNaW7vvJvpq5jluqblrprkuYnkuLogeU1heCAtIHlNaW7jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5SZWN0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gcXVhdGVybmlvblxyXG4gICAgICogQHpoIOWbm+WFg+aVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlF1YXQpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBUd28gZGltZW5zaW9uYWwgc2l6ZSB0eXBlIHJlcHJlc2VudGluZyB0aGUgd2lkdGggYW5kIGhlaWdodC5cclxuICAgICAqIEB6aCDkuoznu7TlsLrlr7jjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5TaXplKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgMkQgdmVjdG9ycyBhbmQgcG9pbnRzLlxyXG4gICAgICogQHpoIOS6jOe7tOWQkemHj+OAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlZlYzIpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBSZXByZXNlbnRhdGlvbiBvZiAzRCB2ZWN0b3JzIGFuZCBwb2ludHMuXHJcbiAgICAgKiBAemgg5LiJ57u05ZCR6YeP44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuVmVjMylcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIGZvdXItZGltZW5zaW9uYWwgdmVjdG9ycy5cclxuICAgICAqIEB6aCDlm5vnu7TlkJHph4/jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5WZWM0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gb2JqZWN0LlxyXG4gICAgICogQHpoIOWMheWQq3gseSx6LHfnrYnlsZ7mgKflkI3nmoTlr7nosaHjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBvYmplY3QpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBhcnJheS5cclxuICAgICAqIEB6aCDmlbDnu4TjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBudW1iZXJbXSlcclxuICAgIC8qKlxyXG4gICAgICogQGVuIDopXHJcbiAgICAgKiBAemgg6YCQ5Liq5a6a5LmJ5ZOm77yM5Lqy44CCXHJcbiAgICAgKi9cclxuICAgIC8vIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIsIHc/OiBudW1iZXIpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiB0aGlzIGlzIGdvbm5hLi4uIElzIHRoaXMgc3VwcG9zZWQgdG8uLi4gRGVmaW5lIG9uZSBieSBvbmUhID8gLiBPaCwgZG9uJ3Qgd29ycnkgYWJvdXQgbWUuIEkgY29waWVkIGl0IGZyb20gYW4gb2ZmaWNpYWwgZG9jdW1lbnQgO1BcclxuICAgICAqIEB6aCDpgJDkuKrlrprkuYnvvIzljYPkuIfkuI3opoHov5nkuYjlgZrvvIzkvYblpoLmnpzkvaDlgZrkuobvvIzpgqPlsLHkvJrlj5HnlJ/lvojlj6/mgJXnmoTkuovmg4XvvIzmr5TlpoLor7QuLi7lj5jmiJDnn6npmLVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobTAwPzogbnVtYmVyLCBtMDE/OiBudW1iZXIsIG0wMj86IG51bWJlciwgbTAzPzogbnVtYmVyLCBtMTA/OiBudW1iZXIsIG0xMT86IG51bWJlciwgbTEyPzogbnVtYmVyLCBtMTM/OiBudW1iZXIsIG0yMD86IG51bWJlciwgbTIxPzogbnVtYmVyLCBtMjI/OiBudW1iZXIsIG0yMz86IG51bWJlciwgbTMwPzogbnVtYmVyLCBtMzE/OiBudW1iZXIsIG0zMj86IG51bWJlciwgbTMzPzogbnVtYmVyLClcclxuICAgIGNvbnN0cnVjdG9yKC4uLm51bSkge1xyXG4gICAgICAgIGxldCBpc051bWJlciA9ICh2YWx1ZSkgPT4geyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpOyB9XHJcbiAgICAgICAgaWYgKCFudW1bMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3knXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0ueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IGlzTnVtYmVyKG51bVswXS54KSA/IG51bVswXS54IDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBpc051bWJlcihudW1bMF0ueSkgPyBudW1bMF0ueSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gaXNOdW1iZXIobnVtWzBdLnopID8gbnVtWzBdLnogOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IGlzTnVtYmVyKG51bVswXS53KSA/IG51bVswXS53IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gaXNOdW1iZXIobnVtWzBdWzBdKSA/IG51bVswXVswXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdWzFdKSA/IG51bVswXVsxXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gaXNOdW1iZXIobnVtWzBdWzJdKSA/IG51bVswXVsyXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsndyddID0gaXNOdW1iZXIobnVtWzBdWzNdKSA/IG51bVswXVszXSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXSBpbnN0YW5jZW9mIGNjLlNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ud2lkdGgpID8gbnVtWzBdLndpZHRoIDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBpc051bWJlcihudW1bMF0uaGVpZ2h0KSA/IG51bVswXS5oZWlnaHQgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5Db2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IGlzTnVtYmVyKG51bVswXS5yKSA/IG51bVswXS5yIDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBpc051bWJlcihudW1bMF0uZykgPyBudW1bMF0uZyA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gaXNOdW1iZXIobnVtWzBdLmIpID8gbnVtWzBdLmIgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IGlzTnVtYmVyKG51bVswXS5hKSA/IG51bVswXS5hIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdIGluc3RhbmNlb2YgY2MuTWF0Mykge1xyXG4gICAgICAgICAgICB0aGlzLl9Jc01hdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAwJ10gPSBudW1bMF1bJ20wMCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMSddID0gbnVtWzBdWydtMDEnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDInXSA9IG51bVswXVsnbTAyJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAzJ10gPSBudW1bMF1bJ20wMyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNCddID0gbnVtWzBdWydtMDQnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDUnXSA9IG51bVswXVsnbTA1J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA2J10gPSBudW1bMF1bJ20wNiddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNyddID0gbnVtWzBdWydtMDcnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDgnXSA9IG51bVswXVsnbTA4J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXSBpbnN0YW5jZW9mIGNjLk1hdDQpIHtcclxuICAgICAgICAgICAgdGhpcy5fSXNNYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMCddID0gbnVtWzBdWydtMDAnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVswXVsnbTAxJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAyJ10gPSBudW1bMF1bJ20wMiddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMyddID0gbnVtWzBdWydtMDMnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVswXVsnbTA0J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA1J10gPSBudW1bMF1bJ20wNSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNiddID0gbnVtWzBdWydtMDYnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVswXVsnbTA3J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA4J10gPSBudW1bMF1bJ20wOCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOSddID0gbnVtWzBdWydtMDknXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTAnXSA9IG51bVswXVsnbTEwJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTExJ10gPSBudW1bMF1bJ20xMSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMiddID0gbnVtWzBdWydtMTInXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTMnXSA9IG51bVswXVsnbTEzJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTE0J10gPSBudW1bMF1bJ20xNCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNSddID0gbnVtWzBdWydtMTUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtLmxlbmd0aCA8PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gbnVtWzBdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3knXSA9IG51bVsxXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd6J10gPSBudW1bMl07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsndyddID0gbnVtWzNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW0ubGVuZ3RoID49IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5fSXNNYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMCddID0gbnVtWzBdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMSddID0gbnVtWzFdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMiddID0gbnVtWzJdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMyddID0gbnVtWzNdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNCddID0gbnVtWzRdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNSddID0gbnVtWzVdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNiddID0gbnVtWzZdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNyddID0gbnVtWzddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOCddID0gbnVtWzhdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOSddID0gbnVtWzldO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMCddID0gbnVtWzEwXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTEnXSA9IG51bVsxMV07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEyJ10gPSBudW1bMTJdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMyddID0gbnVtWzEzXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTQnXSA9IG51bVsxNF07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTE1J10gPSBudW1bMTVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgb3V0ID0geyBscmM6ICcyMTI4Y3onIH07XHJcbiAgICAgICAgLy8gaWYgKG51bVswXSAmJiB0eXBlb2YgbnVtWzBdID09PSAnb2JqZWN0JykgeyBvdXRbJ20wMCddID0gaXNOdW1iZXIobnVtWzBdLngpID8gbnVtWzBdLnggOiBudW1bMF0ueCB8fCAoaXNOdW1iZXIobnVtWzBdWzBdKSA/IG51bVswXVswXSA6IG51bVswXS53aWR0aCB8fCBudW1bMF0uciB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDEnXSA9IGlzTnVtYmVyKG51bVswXS55KSA/IG51bVswXS55IDogbnVtWzBdLnkgfHwgKGlzTnVtYmVyKG51bVswXVsxXSkgPyBudW1bMF1bMV0gOiBudW1bMF0uaGVpZ2h0IHx8IG51bVswXS5nIHx8IChpc051bWJlcihudW1bMF0pID8gbnVtWzBdIDogMCkpOyBvdXRbJ20wMiddID0gaXNOdW1iZXIobnVtWzBdLnopID8gbnVtWzBdLnogOiBudW1bMF0ueiB8fCAoaXNOdW1iZXIobnVtWzBdWzJdKSA/IG51bVswXVsyXSA6IG51bVswXS5iIHx8IChpc051bWJlcihudW1bMF0pID8gbnVtWzBdIDogMCkpOyBvdXRbJ20wMyddID0gaXNOdW1iZXIobnVtWzBdLncpID8gbnVtWzBdLncgOiBudW1bMF0udyB8fCAoaXNOdW1iZXIobnVtWzBdWzNdKSA/IG51bVswXVszXSA6IG51bVswXS5hIHx8IChpc051bWJlcihudW1bMF0pID8gbnVtWzBdIDogMCkpOyB9XHJcbiAgICAgICAgLy8gZWxzZSB7IG91dFsnbTAwJ10gPSBudW1bMF07IG91dFsnbTAxJ10gPSBudW1bMV07IG91dFsnbTAyJ10gPSBudW1bMl07IG91dFsnbTAzJ10gPSBudW1bM107IG91dFsnbTA0J10gPSBudW1bNF07IG91dFsnbTA1J10gPSBudW1bNV07IG91dFsnbTA2J10gPSBudW1bNl07IG91dFsnbTA3J10gPSBudW1bN107IG91dFsnbTA4J10gPSBudW1bOF07IG91dFsnbTA5J10gPSBudW1bOV07IG91dFsnbTEwJ10gPSBudW1bMTBdOyBvdXRbJ20xMSddID0gbnVtWzExXTsgb3V0WydtMTInXSA9IG51bVsxMl07IG91dFsnbTEzJ10gPSBudW1bMTNdOyBvdXRbJ20xNCddID0gbnVtWzE0XTsgb3V0WydtMTUnXSA9IG51bVsxNV07IH1cclxuICAgICAgICAvLyB0aGlzLm1udW0gPSBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtbnVtOiBvYmplY3QgPSB7fTtcclxuICAgIHByaXZhdGUgX0lzTWF0ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IGlzVmVjKCkgeyByZXR1cm4gIXRoaXMuX0lzTWF0OyB9XHJcbiAgICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubW51bVsneCddIH1cclxuICAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tbnVtWyd5J10gfVxyXG4gICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3onXSB9XHJcbiAgICBwdWJsaWMgZ2V0IHcoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubW51bVsndyddIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtZWFud2hpbGVBbGwgPSBmdW5jdGlvbiA8RlVOQyBleHRlbmRzIEZ1bmN0aW9uLCBUIGV4dGVuZHMgb2JqZWN0PihmdW5jOiBGVU5DLCAuLi5vYmo6IFRbXSkge1xyXG4gICAgICAgIGxldCBvdXQgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvYmpbMF0pLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChvYmpbaW5kZXhdW2VsZW1lbnRdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgb3V0W2VsZW1lbnRdID0gZnVuYyhhcnJheSwgb2JqLmxlbmd0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreaYr+WQpuWcqOebkuS9k+iMg+WbtOWGhVxyXG4gICAgICogQHBhcmFtIHsqfSBvcmlnaW4g55uS5L2T5Z2Q5qCH5Y6f54K5XHJcbiAgICAgKiBAcGFyYW0geyp9IGV4dGVudCDnm5LkvZPojIPlm7TvvIzov5nmmK/nm5LkvZPnmoTlkITovbTljYrlvoRcclxuICAgICAqIEByZXR1cm4gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0luQm94MjxUIGV4dGVuZHMgY2MuVmVjMj4ob3JpZ2luOiBULCBleHRlbnQ6IFQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZlYykge1xyXG4gICAgICAgICAgICBsZXQgdmVjID0gbWF0aE1hY3JvLm1lYW53aGlsZUFsbCgoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGIgPSBhWzBdIC0gYVsxXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiID49IC1hWzJdICYmIGIgPD0gYVsyXTtcclxuICAgICAgICAgICAgfSwgdGhpcy5tbnVtLCBvcmlnaW4sIGV4dGVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWNbJ3gnXSAmJiB2ZWNbJ3knXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qih5Y+W5q2jXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUE1vZChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGJiID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgbGV0IGFhID0gYSAlIGJiO1xyXG4gICAgICAgIGxldCBvdXQgPSBhIDwgMCA/ICgxIC0gTWF0aC5hYnMoYWEpIC8gYmIpICogYmIgJSBiYiA6IGFhXHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKG91dCkgPyAwIDogb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b+r5o235a6a5LmJIFxyXG4gICAgICog5L2G5piv5bCx5LiN5pSv5oyB6YCQ5Liq5a6a5LmJ5LqGXHJcbiAgICAgKiBAcGFyYW0gbnVtIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdihudW06IGFueSk6IG1hdGhNYWNybyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBtYXRoTWFjcm8obnVtKTtcclxuICAgIH1cclxuXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDlr7nosaHlj6/np7vliqjmgKdcclxuICovXHJcbmV4cG9ydCBlbnVtIHBhbmVsVHlwZSB7XHJcbiAgICBzdGFpdGMsIHN0YXRpb25hcnksIE1vdmVhYmxlXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDlnLrmma/lnZDmoIfnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVTY2VuZUNvb3JkaW5hdGVTcGFjZSB7XHJcbiAgICBzaW11bGF0aW9uLCB3b3JsZCwgbG9jYWxcclxufVxyXG4vKipcclxuICog5YWo5bGA5p6a5Li+XHJcbiAqIOaOp+S7tuWdkOagh+epuumXtOaemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVdpZGdldENvb3JkaW5hdGVTcGFjZSB7XHJcbiAgICBzY3JlZW4sIHNjZW5lXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDliqjnlLvniannkIbnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVBbmltUGh5U2ltU3BhY2Uge1xyXG4gICAgY29tcG9uZW50LCBhY3Rvciwgc2NlbmUsIHJlbGF0aXZlUm9vdCwgcmVsYXRpdmVOb2RlXHJcbn1cclxuXHJcblxyXG5cclxuLy8g5rWL6K+V6K+t5Y+l77yM5Y+v5Lul5Zyo5o6n5Yi25Y+w5Lit6IO95aSf55yL5Yiw6L+Z6YeMXHJcbi8vIGNjW1widnZcIl0gPSBjY1tcInZ2XCJdIHx8IERldmVsb3BlcnNUb29sR2xvYmFsO1xyXG5cclxuXHJcbiJdfQ==