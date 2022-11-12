
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
        set: function (value) {
            cc.error("不允许修改资源目录");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSx5RUFBeUU7QUFDekU7SUFBQTtJQXNPQSxDQUFDO0lBOU5HLHNCQUFrQixpQ0FBUzthQUEzQjtZQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUE0QixLQUFnQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBUUQsc0JBQWtCLDRDQUFvQjtRQUh0Qzs7V0FFRzthQUNIO1lBQ0ksT0FBTztnQkFDSCw4Q0FBOEM7Z0JBQzlDLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUM5QyxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsVUFBVTtnQkFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUNqRCxPQUFPO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7YUFDbEQsQ0FBQTtRQUNMLENBQUM7YUFDRCxVQUF1QyxLQUFLO1lBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BSEE7SUFhRCxzQkFBa0IsNEJBQUk7YUFBdEI7WUFDSSxJ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RyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRTthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7YUFDSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0I7YUFDSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lB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b250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVdhcmVob3VzZUdsb2JhbEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBjYy5Ob2RlIHxcclxuICAgIGNjLlRpbGVkTWFwIHxcclxuICAgIGNjLlBhcnRpY2xlU3lzdGVtIHxcclxuICAgIGNjLlZpZGVvUGxheWVyIHxcclxuICAgIGNjLldlYlZpZXcgfFxyXG4gICAgY2MuU3ByaXRlIHxcclxuICAgIGNjLlJlbmRlclRleHR1cmUgfFxyXG4gICAgY2MuVGV4dHVyZTJEIHxcclxuICAgIGNjLlByZWZhYiB8XHJcbiAgICBjYy5Bc3NldE1hbmFnZXIgfCB7fTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElUb29sR2xvYmFsSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElPdGhlckdsb2JhbEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIOWxgumAmueUqOagh+ivhuaOpeWPoyBcclxuICogY2MuTm9kZVtudW1iZXJdXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElnYW5lcmFsTGF5ZXJJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogY2MuTm9kZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElvcGVuU2NyaXB0SW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElpbnN0YW5jZUludGVyZmFjZSB7XHJcbiAgICBba2V5OiBudW1iZXJdOiBjYy5Db21wb25lbnQgfCBjYy5Ob2RlO1xyXG59XHJcbi8vIGltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuZXhwb3J0IGNsYXNzIERldmVsb3BlcnNUb29sR2xvYmFsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7k+W6k+WFqOWxgOWunuS+i1xyXG4gICAgICog5a2Y5pS+bG9hZOaXtui9veWFpeeahOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfV2FyZWhvdXNlOiBJV2FyZWhvdXNlR2xvYmFsSW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB3YXJlaG91c2UoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1dhcmVob3VzZSA9IHRoaXMuX0dsb2JhbF9XYXJlaG91c2UgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9XYXJlaG91c2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgd2FyZWhvdXNlKHZhbHVlOiBJV2FyZWhvdXNlR2xvYmFsSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1dhcmVob3VzZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDnm67lvZVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9hZFJlc291cmNlc2NhdGFsb2coKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gXCJ1cmxcIjogeyB0eXBlOiByZXMgdHlwZSwgdXJsOiBcInNhdmUgdXJsXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3pn7PkuZDpn7PmlYjotYTmupBcclxuICAgICAgICAgICAgXCJzb3VuZHNcIjogeyB0eXBlOiBjYy5BdWRpb0NsaXAsIHVybDogXCJzb3VuZHNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9vemihOWItuS7tui1hOa6kFxyXG4gICAgICAgICAgICBcInByZWZhYnNcIjogeyB0eXBlOiBjYy5QcmVmYWIsIHVybDogXCJwcmVmYWJzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3lm77pm4botYTmupBcclxuICAgICAgICAgICAgLy8gXCJhdGxhc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUF0bGFzLCB1cmw6IFwiYXRsYXNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWNleS4queyvueBtei1hOa6kFxyXG4gICAgICAgICAgICBcImZyYW1lc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB1cmw6IFwiZnJhbWVzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3liIbkuqvlm75cclxuICAgICAgICAgICAgXCJzaGFyZVwiOiB7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB1cmw6IFwic2hhcmVcIiB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxvYWRSZXNvdXJjZXNjYXRhbG9nKHZhbHVlKSB7XHJcbiAgICAgICAgY2MuZXJyb3IoXCLkuI3lhYHorrjkv67mlLnotYTmupDnm67lvZVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW3peWFt+WFqOWxgOWunuS+i1xyXG4gICAgICog5Y+v5Lul5rOo5YWl5YW25LuW5bel5YW357G7XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9Ub29sOiBJVG9vbEdsb2JhbEludGVyZmFjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdG9vbCgpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfVG9vbCA9IHRoaXMuX0dsb2JhbF9Ub29sIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfVG9vbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHRvb2wodmFsdWU6IElUb29sR2xvYmFsSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1Rvb2wgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p2C6aG55YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlj6/ku6Xms6jlhaXlhbbku5bpobnnm65cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX090aGVyOiBJT3RoZXJHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG90aGVyKCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PdGhlciA9IHRoaXMuX0dsb2JhbF9PdGhlciB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX090aGVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgb3RoZXIodmFsdWU6IElPdGhlckdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PdGhlciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDlrp7kvotcclxuICAgICAqIOWPquiDveazqOWFpWNjLk5vZGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX0dlbnJhbExheWVyOiBJZ2FuZXJhbExheWVySW50ZXJmYWNlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxheWVycygpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgPSB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5omA5pyJ5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxheWVycyh2YWx1ZTogSWdhbmVyYWxMYXllckludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blupXlsYJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzWzBdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnmoTmlrDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgbGF5ZXIodmFsdWU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy5fR2xvYmFsX0dlbnJhbExheWVyIHx8IHt9KS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sYXllcnNba2V5LnRvU3RyaW5nKCldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WfuuacrOWxguWFqOWxgOiEmuacrFxyXG4gICAgICog5Y+q6IO95rOo5YWlY2MuY29tcG9uZW5077yM5LiN6L+H5a6e6ZmF5LiK5bm25rKh5pyJ6L+b6KGM6ZmQ5Yi2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9PcGVuU2NyaXB0OiBJb3BlblNjcmlwdEludGVyZmFjZSA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9PcGVuU2NyaXB0X0ZyaXN0TmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNjcmlwdHMoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgPSB0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBzY3JpcHQodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWUpIHRoaXMuX09wZW5TY3JpcHRfRnJpc3ROYW1lID0ga2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAga2V5ID0gKE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0IHx8IHt9KS5sZW5ndGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NyaXB0c1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuiEmuacrFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjcmlwdF9DbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5omA5pyJ6ISa5pys5ZCN56ewXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNjcmlwdE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W56ys5LiA5Liq5Yqg5YWl55qE6ISa5pysXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZyaXN0U2NyaXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfT3BlblNjcmlwdFt0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZV07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxgOWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfSW5zdGFuY2UgPSA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBnZXROYW1lKGluc3Q6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gaW5zdC5uYW1lICsgaW5zdFsnX2lkJ10ucmVwbGFjZSgvXFwuL2csIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhajpg6jlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2VzKCk6IElpbnN0YW5jZUludGVyZmFjZSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX0luc3RhbmNlID0gdGhpcy5fR2xvYmFsX0luc3RhbmNlIHx8IDxJaW5zdGFuY2VJbnRlcmZhY2U+e307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9JbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5a6e5L6L77yM55So5a6e5L6L55qE5ZCN56ew5LiOSUTkvZzplK7lkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgaW5zdGFuY2UodmFsdWU6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlW3RoaXMuZ2V0TmFtZSh2YWx1ZSldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOWunuS+i1xyXG4gICAgICog5aaC5p6c5pyq5oyH5a6a5pyJ5pWI5YC85YiZ5Li65riF6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGluc3RhbmNlX3JlbW92ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHRoaXMuX0dsb2JhbF9JbnN0YW5jZSA9IDxJaW5zdGFuY2VJbnRlcmZhY2U+e307XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlW3RoaXMuZ2V0TmFtZSh2YWx1ZSldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOagueaNruWQjeensOiOt+WPluWunuS+iyBcclxuICAgICAqIOWmguaenOayoeacieS9v+eUqOiHquWumuS5ieWQjeensO+8jOWImem7mOiupOeUqOWunuS+i0lE5L2c5Li65ZCN56ew77yM6L+Z5Y+v6IO95LiO5Lu75L2V5ZCN56ew5bi46YeP5LiN56ymXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VCeU5hbWUobmFtZTogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9JbnN0YW5jZVtuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u5ZCN56ew6K6+572u5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2VCeU5hbWUobmFtZTogc3RyaW5nIHwgbnVtYmVyLCBpbnN0OiBjYy5Db21wb25lbnQgfCBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX0luc3RhbmNlW25hbWVdID0gaW5zdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxgOWFg+e7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9HbG9iYWxfVHVwbGUgPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWD57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHR1cGxlKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1R1cGxlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhYPnu4TliqDlhaXkuIDkuKrpobnnm64gIFxyXG4gICAgICog5aaC5p6c5Yqg5YWl5LiA5Liq5peg5pWI55qE5YC877yM5q+U5aaC5biD5bCU77yMdW5kZWZpbmVk77yMdW5sbO+8jOWwhua4heepuui/meS4quWFg+e7hCAgXHJcbiAgICAgKiDliqDlhaXkuIDkuKrnqbrmlbDnu4TmiJbmmK/nqbrlr7nosaHmmK/mnInmlYjnmoTvvIzmiYDku6XkvJrkvZzkuLrlhYPnu4TnmoTkuIDkuKrlgLzliqDlhaVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgdHVwbGUodmFsdWU6IG9iamVjdCkge1xyXG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09ICdib29sZWFuJykgdGhpcy5fR2xvYmFsX1R1cGxlID0gW107XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1R1cGxlLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhYPnu4TliqDlhaXni6zmnInpobnnm65cclxuICAgICAqIOi/lOWbnui/meS4qumhueebruaYr+WQpuWtmOWcqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHR1cGxlT25seSh2YWx1ZTogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX0dsb2JhbF9UdXBsZS5pbmRleE9mKHZhbHVlKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnR1cGxlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTlhYPnu4TkuIDkuKrpobnnm65cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgdHVwbGVfcmVtb3ZlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1R1cGxlLmZpbHRlcigoZWxlbWVudCwgaW5kZXgsIGFycmF5KSA9PiB7IGVsZW1lbnQgIT0gdmFsdWUgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gaW1wb3J0IHsgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmV4cG9ydCBjbGFzcyBtYXRoTWFjcm8ge1xyXG4gICAgLy8g6L+U5Zue6ZqP5py655qE5pW05pWw77yM6IyD5Zu05ZyoWzAsIHgpXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDIoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDMoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDQoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDUoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDYoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDcoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDgoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDkoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDEoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDnu7TpmZDliLblnKjojIPlm7TkuK1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW0g6L6T5YWl5YC8XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSDojIPlm7RcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbGlnbiDlr7npvZDkvY3nva7vvIzpu5jorqQw6KGo56S65Zyo6IyD5Zu055qE5Lit6Ze077yMLTHooajnpLrkuI7lt6blr7npvZDvvIzmnIDlsI/kuLow77yM5pyA5aSn5Li6c2l6Ze+8jDHnm7jlj41cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQg6IyD5Zu05YGP56e7XHJcbiAgICAgKiBAcmV0dXJucyDov5Tlm57pmZDliLblkI7nmoTlgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFtcChudW0sIHNpemUsIGFsaWduLCBvZmZzZXQpIHtcclxuICAgICAgICBsZXQgc2F0dXJlID0gKChhbGlnbiB8fCAwKSArIDEpIC8gMjtcclxuICAgICAgICBsZXQgbWluID0gMCAtIChzYXR1cmUgKiBzaXplKSArIChvZmZzZXQgfHwgMCk7XHJcbiAgICAgICAgbGV0IG1heCA9ICgxIC0gc2F0dXJlKSAqIHNpemUgKyAob2Zmc2V0IHx8IDApO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihudW0sIG1heCksIG1pbik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIDDnn6Lph49cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgUkdCQSBjb2xvcnMuPGJyLz5cclxuICAgICAqIEVhY2ggY29sb3IgY29tcG9uZW50IGlzIGFuIGludGVnZXIgdmFsdWUgd2l0aCBhIHJhbmdlIGZyb20gMCB0byAyNTUuPGJyLz5cclxuICAgICAqIEB6aCDpgJrov4cgUmVk44CBR3JlZW7jgIFCbHVlIOminOiJsumAmumBk+ihqOekuuminOiJsu+8jOW5tumAmui/hyBBbHBoYSDpgJrpgZPooajnpLrkuI3pgI/mmI7luqbjgII8YnIvPlxyXG4gICAgICog5q+P5Liq6YCa6YGT6YO95Li65Y+W5YC86IyD5Zu0IFswLCAyNTVdIOeahOaVtOaVsOOAgjxici8+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuQ29sb3IpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBNYXRoZW1hdGljYWwgM3gzIG1hdHJpeC5cclxuICAgICAqIEB6aCDooajnpLrkuInnu7TvvIgzeDPvvInnn6npmLXjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5NYXQzKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gTWF0aGVtYXRpY2FsIDR4NCBtYXRyaXguXHJcbiAgICAgKiBAemgg6KGo56S65Zub57u077yINHg077yJ55+p6Zi144CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuTWF0NClcclxuICAgIC8qKlxyXG4gICAgICogQGVuXHJcbiAgICAgKiBBIDJEIHJlY3RhbmdsZSBkZWZpbmVkIGJ5IHgsIHkgcG9zaXRpb24gYW5kIHdpZHRoLCBoZWlnaHQuXHJcbiAgICAgKiBAemhcclxuICAgICAqIOi9tOWvuem9kOefqeW9ouOAglxyXG4gICAgICog55+p5b2i5YaF55qE5omA5pyJ54K56YO95aSn5LqO562J5LqO55+p5b2i55qE5pyA5bCP54K5ICh4TWluLCB5TWluKSDlubbkuJTlsI/kuo7nrYnkuo7nn6nlvaLnmoTmnIDlpKfngrkgKHhNYXgsIHlNYXgp44CCXHJcbiAgICAgKiDnn6nlvaLnmoTlrr3luqblrprkuYnkuLogeE1heCAtIHhNaW7vvJvpq5jluqblrprkuYnkuLogeU1heCAtIHlNaW7jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5SZWN0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gcXVhdGVybmlvblxyXG4gICAgICogQHpoIOWbm+WFg+aVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlF1YXQpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBUd28gZGltZW5zaW9uYWwgc2l6ZSB0eXBlIHJlcHJlc2VudGluZyB0aGUgd2lkdGggYW5kIGhlaWdodC5cclxuICAgICAqIEB6aCDkuoznu7TlsLrlr7jjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5TaXplKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgMkQgdmVjdG9ycyBhbmQgcG9pbnRzLlxyXG4gICAgICogQHpoIOS6jOe7tOWQkemHj+OAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlZlYzIpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBSZXByZXNlbnRhdGlvbiBvZiAzRCB2ZWN0b3JzIGFuZCBwb2ludHMuXHJcbiAgICAgKiBAemgg5LiJ57u05ZCR6YeP44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuVmVjMylcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIGZvdXItZGltZW5zaW9uYWwgdmVjdG9ycy5cclxuICAgICAqIEB6aCDlm5vnu7TlkJHph4/jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5WZWM0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gb2JqZWN0LlxyXG4gICAgICogQHpoIOWMheWQq3gseSx6LHfnrYnlsZ7mgKflkI3nmoTlr7nosaHjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBvYmplY3QpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBhcnJheS5cclxuICAgICAqIEB6aCDmlbDnu4TjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBudW1iZXJbXSlcclxuICAgIC8qKlxyXG4gICAgICogQGVuIDopXHJcbiAgICAgKiBAemgg6YCQ5Liq5a6a5LmJ5ZOm77yM5Lqy44CCXHJcbiAgICAgKi9cclxuICAgIC8vIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIsIHc/OiBudW1iZXIpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiB0aGlzIGlzIGdvbm5hLi4uIElzIHRoaXMgc3VwcG9zZWQgdG8uLi4gRGVmaW5lIG9uZSBieSBvbmUhID8gLiBPaCwgZG9uJ3Qgd29ycnkgYWJvdXQgbWUuIEkgY29waWVkIGl0IGZyb20gYW4gb2ZmaWNpYWwgZG9jdW1lbnQgO1BcclxuICAgICAqIEB6aCDpgJDkuKrlrprkuYnvvIzljYPkuIfkuI3opoHov5nkuYjlgZrvvIzkvYblpoLmnpzkvaDlgZrkuobvvIzpgqPlsLHkvJrlj5HnlJ/lvojlj6/mgJXnmoTkuovmg4XvvIzmr5TlpoLor7QuLi7lj5jmiJDnn6npmLVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobTAwPzogbnVtYmVyLCBtMDE/OiBudW1iZXIsIG0wMj86IG51bWJlciwgbTAzPzogbnVtYmVyLCBtMTA/OiBudW1iZXIsIG0xMT86IG51bWJlciwgbTEyPzogbnVtYmVyLCBtMTM/OiBudW1iZXIsIG0yMD86IG51bWJlciwgbTIxPzogbnVtYmVyLCBtMjI/OiBudW1iZXIsIG0yMz86IG51bWJlciwgbTMwPzogbnVtYmVyLCBtMzE/OiBudW1iZXIsIG0zMj86IG51bWJlciwgbTMzPzogbnVtYmVyLClcclxuICAgIGNvbnN0cnVjdG9yKC4uLm51bSkge1xyXG4gICAgICAgIGxldCBpc051bWJlciA9ICh2YWx1ZSkgPT4geyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpOyB9XHJcbiAgICAgICAgaWYgKCFudW1bMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3knXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0ueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IGlzTnVtYmVyKG51bVswXS54KSA/IG51bVswXS54IDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBpc051bWJlcihudW1bMF0ueSkgPyBudW1bMF0ueSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gaXNOdW1iZXIobnVtWzBdLnopID8gbnVtWzBdLnogOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IGlzTnVtYmVyKG51bVswXS53KSA/IG51bVswXS53IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gaXNOdW1iZXIobnVtWzBdWzBdKSA/IG51bVswXVswXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdWzFdKSA/IG51bVswXVsxXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gaXNOdW1iZXIobnVtWzBdWzJdKSA/IG51bVswXVsyXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsndyddID0gaXNOdW1iZXIobnVtWzBdWzNdKSA/IG51bVswXVszXSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXSBpbnN0YW5jZW9mIGNjLlNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ud2lkdGgpID8gbnVtWzBdLndpZHRoIDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBpc051bWJlcihudW1bMF0uaGVpZ2h0KSA/IG51bVswXS5oZWlnaHQgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5Db2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IGlzTnVtYmVyKG51bVswXS5yKSA/IG51bVswXS5yIDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBpc051bWJlcihudW1bMF0uZykgPyBudW1bMF0uZyA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gaXNOdW1iZXIobnVtWzBdLmIpID8gbnVtWzBdLmIgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IGlzTnVtYmVyKG51bVswXS5hKSA/IG51bVswXS5hIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdIGluc3RhbmNlb2YgY2MuTWF0Mykge1xyXG4gICAgICAgICAgICB0aGlzLl9Jc01hdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAwJ10gPSBudW1bMF1bJ20wMCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMSddID0gbnVtWzBdWydtMDEnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDInXSA9IG51bVswXVsnbTAyJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAzJ10gPSBudW1bMF1bJ20wMyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNCddID0gbnVtWzBdWydtMDQnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDUnXSA9IG51bVswXVsnbTA1J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA2J10gPSBudW1bMF1bJ20wNiddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNyddID0gbnVtWzBdWydtMDcnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDgnXSA9IG51bVswXVsnbTA4J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXSBpbnN0YW5jZW9mIGNjLk1hdDQpIHtcclxuICAgICAgICAgICAgdGhpcy5fSXNNYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMCddID0gbnVtWzBdWydtMDAnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVswXVsnbTAxJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAyJ10gPSBudW1bMF1bJ20wMiddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMyddID0gbnVtWzBdWydtMDMnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVswXVsnbTA0J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA1J10gPSBudW1bMF1bJ20wNSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNiddID0gbnVtWzBdWydtMDYnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVswXVsnbTA3J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA4J10gPSBudW1bMF1bJ20wOCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOSddID0gbnVtWzBdWydtMDknXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTAnXSA9IG51bVswXVsnbTEwJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTExJ10gPSBudW1bMF1bJ20xMSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMiddID0gbnVtWzBdWydtMTInXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTMnXSA9IG51bVswXVsnbTEzJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTE0J10gPSBudW1bMF1bJ20xNCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNSddID0gbnVtWzBdWydtMTUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtLmxlbmd0aCA8PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gbnVtWzBdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3knXSA9IG51bVsxXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd6J10gPSBudW1bMl07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsndyddID0gbnVtWzNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW0ubGVuZ3RoID49IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5fSXNNYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMCddID0gbnVtWzBdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMSddID0gbnVtWzFdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMiddID0gbnVtWzJdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMyddID0gbnVtWzNdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNCddID0gbnVtWzRdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNSddID0gbnVtWzVdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNiddID0gbnVtWzZdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNyddID0gbnVtWzddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOCddID0gbnVtWzhdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOSddID0gbnVtWzldO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMCddID0gbnVtWzEwXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTEnXSA9IG51bVsxMV07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEyJ10gPSBudW1bMTJdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMyddID0gbnVtWzEzXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTQnXSA9IG51bVsxNF07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTE1J10gPSBudW1bMTVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgb3V0ID0geyBscmM6ICcyMTI4Y3onIH07XHJcbiAgICAgICAgLy8gaWYgKG51bVswXSAmJiB0eXBlb2YgbnVtWzBdID09PSAnb2JqZWN0JykgeyBvdXRbJ20wMCddID0gaXNOdW1iZXIobnVtWzBdLngpID8gbnVtWzBdLnggOiBudW1bMF0ueCB8fCAoaXNOdW1iZXIobnVtWzBdWzBdKSA/IG51bVswXVswXSA6IG51bVswXS53aWR0aCB8fCBudW1bMF0uciB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDEnXSA9IGlzTnVtYmVyKG51bVswXS55KSA/IG51bVswXS55IDogbnVtWzBdLnkgfHwgKGlzTnVtYmVyKG51bVswXVsxXSkgPyBudW1bMF1bMV0gOiBudW1bMF0uaGVpZ2h0IHx8IG51bVswXS5nIHx8IChpc051bWJlcihudW1bMF0pID8gbnVtWzBdIDogMCkpOyBvdXRbJ20wMiddID0gaXNOdW1iZXIobnVtWzBdLnopID8gbnVtWzBdLnogOiBudW1bMF0ueiB8fCAoaXNOdW1iZXIobnVtWzBdWzJdKSA/IG51bVswXVsyXSA6IG51bVswXS5iIHx8IChpc051bWJlcihudW1bMF0pID8gbnVtWzBdIDogMCkpOyBvdXRbJ20wMyddID0gaXNOdW1iZXIobnVtWzBdLncpID8gbnVtWzBdLncgOiBudW1bMF0udyB8fCAoaXNOdW1iZXIobnVtWzBdWzNdKSA/IG51bVswXVszXSA6IG51bVswXS5hIHx8IChpc051bWJlcihudW1bMF0pID8gbnVtWzBdIDogMCkpOyB9XHJcbiAgICAgICAgLy8gZWxzZSB7IG91dFsnbTAwJ10gPSBudW1bMF07IG91dFsnbTAxJ10gPSBudW1bMV07IG91dFsnbTAyJ10gPSBudW1bMl07IG91dFsnbTAzJ10gPSBudW1bM107IG91dFsnbTA0J10gPSBudW1bNF07IG91dFsnbTA1J10gPSBudW1bNV07IG91dFsnbTA2J10gPSBudW1bNl07IG91dFsnbTA3J10gPSBudW1bN107IG91dFsnbTA4J10gPSBudW1bOF07IG91dFsnbTA5J10gPSBudW1bOV07IG91dFsnbTEwJ10gPSBudW1bMTBdOyBvdXRbJ20xMSddID0gbnVtWzExXTsgb3V0WydtMTInXSA9IG51bVsxMl07IG91dFsnbTEzJ10gPSBudW1bMTNdOyBvdXRbJ20xNCddID0gbnVtWzE0XTsgb3V0WydtMTUnXSA9IG51bVsxNV07IH1cclxuICAgICAgICAvLyB0aGlzLm1udW0gPSBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtbnVtOiBvYmplY3QgPSB7fTtcclxuICAgIHByaXZhdGUgX0lzTWF0ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IGlzVmVjKCkgeyByZXR1cm4gIXRoaXMuX0lzTWF0OyB9XHJcbiAgICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubW51bVsneCddIH1cclxuICAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tbnVtWyd5J10gfVxyXG4gICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3onXSB9XHJcbiAgICBwdWJsaWMgZ2V0IHcoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubW51bVsndyddIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtZWFud2hpbGVBbGwgPSBmdW5jdGlvbiA8RlVOQyBleHRlbmRzIEZ1bmN0aW9uLCBUIGV4dGVuZHMgb2JqZWN0PihmdW5jOiBGVU5DLCAuLi5vYmo6IFRbXSkge1xyXG4gICAgICAgIGxldCBvdXQgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvYmpbMF0pLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChvYmpbaW5kZXhdW2VsZW1lbnRdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgb3V0W2VsZW1lbnRdID0gZnVuYyhhcnJheSwgb2JqLmxlbmd0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreaYr+WQpuWcqOebkuS9k+iMg+WbtOWGhVxyXG4gICAgICogQHBhcmFtIHsqfSBvcmlnaW4g55uS5L2T5Z2Q5qCH5Y6f54K5XHJcbiAgICAgKiBAcGFyYW0geyp9IGV4dGVudCDnm5LkvZPojIPlm7TvvIzov5nmmK/nm5LkvZPnmoTlkITovbTljYrlvoRcclxuICAgICAqIEByZXR1cm4gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0luQm94MjxUIGV4dGVuZHMgY2MuVmVjMj4ob3JpZ2luOiBULCBleHRlbnQ6IFQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZlYykge1xyXG4gICAgICAgICAgICBsZXQgdmVjID0gbWF0aE1hY3JvLm1lYW53aGlsZUFsbCgoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGIgPSBhWzBdIC0gYVsxXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiID49IC1hWzJdICYmIGIgPD0gYVsyXTtcclxuICAgICAgICAgICAgfSwgdGhpcy5tbnVtLCBvcmlnaW4sIGV4dGVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWNbJ3gnXSAmJiB2ZWNbJ3knXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qih5Y+W5q2jXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUE1vZChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGJiID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgbGV0IGFhID0gYSAlIGJiO1xyXG4gICAgICAgIGxldCBvdXQgPSBhIDwgMCA/ICgxIC0gTWF0aC5hYnMoYWEpIC8gYmIpICogYmIgJSBiYiA6IGFhXHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKG91dCkgPyAwIDogb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b+r5o235a6a5LmJIFxyXG4gICAgICog5L2G5piv5bCx5LiN5pSv5oyB6YCQ5Liq5a6a5LmJ5LqGXHJcbiAgICAgKiBAcGFyYW0gbnVtIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdihudW06IGFueSk6IG1hdGhNYWNybyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBtYXRoTWFjcm8obnVtKTtcclxuICAgIH1cclxuXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDlr7nosaHlj6/np7vliqjmgKdcclxuICovXHJcbmV4cG9ydCBlbnVtIHBhbmVsVHlwZSB7XHJcbiAgICBzdGFpdGMsIHN0YXRpb25hcnksIE1vdmVhYmxlXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDlnLrmma/lnZDmoIfnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVTY2VuZUNvb3JkaW5hdGVTcGFjZSB7XHJcbiAgICBzaW11bGF0aW9uLCB3b3JsZCwgbG9jYWxcclxufVxyXG4vKipcclxuICog5YWo5bGA5p6a5Li+XHJcbiAqIOaOp+S7tuWdkOagh+epuumXtOaemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVdpZGdldENvb3JkaW5hdGVTcGFjZSB7XHJcbiAgICBzY3JlZW4sIHNjZW5lXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDliqjnlLvniannkIbnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVBbmltUGh5U2ltU3BhY2Uge1xyXG4gICAgY29tcG9uZW50LCBhY3Rvciwgc2NlbmUsIHJlbGF0aXZlUm9vdCwgcmVsYXRpdmVOb2RlXHJcbn1cclxuXHJcblxyXG5cclxuLy8g5rWL6K+V6K+t5Y+l77yM5Y+v5Lul5Zyo5o6n5Yi25Y+w5Lit6IO95aSf55yL5Yiw6L+Z6YeMXHJcbmNjW1widnZcIl0gPSBjY1tcInZ2XCJdIHx8IERldmVsb3BlcnNUb29sR2xvYmFsO1xyXG5cclxuXHJcbiJdfQ==