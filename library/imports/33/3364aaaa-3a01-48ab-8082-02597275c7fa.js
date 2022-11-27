"use strict";
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