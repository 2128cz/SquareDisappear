"use strict";
cc._RF.push(module, '3364aqqOgFIq4CCAllydcf6', 'DevelopersToolGlobal');
// scripts/base/class/DevelopersToolGlobal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAnimPhySimSpace = exports.EWidgetCoordinateSpace = exports.ESceneCoordinateSpace = exports.mathMacro = exports.DevelopersToolGlobal = void 0;
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
    Object.defineProperty(DevelopersToolGlobal, "script", {
        get: function () {
            this._Global_OpenScript = this._Global_OpenScript || {};
            return this._Global_OpenScript;
        },
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
            this.script[key] = value;
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
     * 游戏基本层全局实例
     * 只能注入cc.Node
     */
    DevelopersToolGlobal._Global_OpenScript = null;
    DevelopersToolGlobal._OpenScript_FristName = null;
    return DevelopersToolGlobal;
}());
exports.DevelopersToolGlobal = DevelopersToolGlobal;
// import { mathMacro as mMath } from '../base/class/DevelopersToolGlobal';
var mathMacro = /** @class */ (function () {
    function mathMacro() {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        this.liruochenKismit = null;
        var isNumber = function (value) { return typeof value === 'number' && !isNaN(value); };
        var out = { lrc: '2128cz' };
        if (num[0] && typeof num[0] === 'object') {
            out['m00'] = isNumber(num[0].x) ? num[0].x : num[0].x || (isNumber(num[0][0]) ? num[0][0] : num[0].width || num[0].r || (isNumber(num[0]) ? num[0] : 0));
            out['m01'] = isNumber(num[0].y) ? num[0].y : num[0].y || (isNumber(num[0][1]) ? num[0][1] : num[0].height || num[0].g || (isNumber(num[0]) ? num[0] : 0));
            out['m02'] = isNumber(num[0].z) ? num[0].z : num[0].z || (isNumber(num[0][2]) ? num[0][2] : num[0].b || (isNumber(num[0]) ? num[0] : 0));
            out['m03'] = isNumber(num[0].w) ? num[0].w : num[0].w || (isNumber(num[0][3]) ? num[0][3] : num[0].a || (isNumber(num[0]) ? num[0] : 0));
        }
        else {
            out['m00'] = num[0];
            out['m01'] = num[1];
            out['m02'] = num[2];
            out['m03'] = num[3];
            out['m04'] = num[4];
            out['m05'] = num[5];
            out['m06'] = num[6];
            out['m07'] = num[7];
            out['m08'] = num[8];
            out['m09'] = num[9];
            out['m10'] = num[10];
            out['m11'] = num[11];
            out['m12'] = num[12];
            out['m13'] = num[13];
            out['m14'] = num[14];
            out['m15'] = num[15];
        }
        this.liruochenKismit = out;
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
     * 判断是否在盒体范围内
     * @param {*} origin 盒体坐标原点
     * @param {*} extent 盒体范围，这是盒体的各轴半径
     * @return
     */
    mathMacro.isInBox2 = function (origin, extent) { var vec = this.meanwhileAllVectorAtArray(function (a) { var b = a[0] - a[1]; return b >= -a[2] && b <= a[2]; }, this, origin, extent); return vec.x && vec.y; };
    mathMacro.meanwhileAllVectorAtArray = function (func) {
        var object = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            object[_i - 1] = arguments[_i];
        }
        var out = { x: 0, y: 0, z: 0, w: 0 };
        Object.keys(out).forEach(function (element) { var array = []; for (var index = 0; index < object.length; index++) {
            array.push(object[index][element]);
        } ; out[element] = func(array, object.length); });
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
})(panelType || (panelType = {}));
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