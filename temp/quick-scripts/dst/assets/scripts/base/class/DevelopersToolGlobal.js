
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSx5RUFBeUU7QUFDekU7SUFBQTtJQTRJQSxDQUFDO0lBcElHLHNCQUFrQixpQ0FBUzthQUEzQjtZQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUE0QixLQUFnQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBUUQsc0JBQWtCLDRDQUFvQjtRQUh0Qzs7V0FFRzthQUNIO1lBQ0ksT0FBTztnQkFDSCw4Q0FBOEM7Z0JBQzlDLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUM5QyxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsVUFBVTtnQkFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUNqRCxPQUFPO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7YUFDbEQsQ0FBQTtRQUNMLENBQUM7YUFDRCxVQUF1QyxLQUFLO1lBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BSEE7SUFXRCxzQkFBa0IsNEJBQUk7YUFBdEI7WUFDSSxJ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R0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2puQjtZQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FB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Q0gsSUFBSyxTQUVKO0FBRkQsV0FBSyxTQUFTO0lBQ1YsNkNBQU0sQ0FBQTtJQUFFLHFEQUFVLENBQUE7SUFBRSxpREFBUSxDQUFBO0FBQ2hDLENBQUMsRUFGSSxTQUFTLEtBQVQsU0FBUyxRQUViO0FBQ0Q7OztHQUdHO0FBQ0gsSUFBWSxxQkFFWDtBQUZELFdBQVkscUJBQXFCO0lBQzdCLDZFQUFVLENBQUE7SUFBRSxtRUFBSyxDQUFBO0lBQUUsbUVBQUssQ0FBQTtBQUM1QixDQUFDLEVBRlcscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFFaEM7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLHNCQUVYO0FBRkQsV0FBWSxzQkFBc0I7SUFDOUIsdUVBQU0sQ0FBQTtJQUFFLHFFQUFLLENBQUE7QUFDakIsQ0FBQyxFQUZXLHNCQUFzQixHQUF0Qiw4QkFBc0IsS0FBdEIsOEJBQXNCLFFBRWpDO0FBQ0Q7OztHQUdHO0FBQ0gsSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLGlFQUFTLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUseURBQUssQ0FBQTtJQUFFLHVFQUFZLENBQUE7SUFBRSx1RUFBWSxDQUFBO0FBQ3ZELENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUUzQjtBQUlELHFCQUFxQjtBQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFvQixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJV2FyZWhvdXNlR2xvYmFsSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGNjLk5vZGUgfFxyXG4gICAgY2MuVGlsZWRNYXAgfFxyXG4gICAgY2MuUGFydGljbGVTeXN0ZW0gfFxyXG4gICAgY2MuVmlkZW9QbGF5ZXIgfFxyXG4gICAgY2MuV2ViVmlldyB8XHJcbiAgICBjYy5TcHJpdGUgfFxyXG4gICAgY2MuUmVuZGVyVGV4dHVyZSB8XHJcbiAgICBjYy5UZXh0dXJlMkQgfFxyXG4gICAgY2MuUHJlZmFiIHxcclxuICAgIGNjLkFzc2V0TWFuYWdlciB8IHt9O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvb2xHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSU90aGVyR2xvYmFsSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4vKipcclxuICog5bGC6YCa55So5qCH6K+G5o6l5Y+jIFxyXG4gKiBjYy5Ob2RlW251bWJlcl1cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWdhbmVyYWxMYXllckludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBjYy5Ob2RlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW9wZW5TY3JpcHRJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbi8vIGltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuZXhwb3J0IGNsYXNzIERldmVsb3BlcnNUb29sR2xvYmFsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7k+W6k+WFqOWxgOWunuS+i1xyXG4gICAgICog5a2Y5pS+bG9hZOaXtui9veWFpeeahOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfV2FyZWhvdXNlOiBJV2FyZWhvdXNlR2xvYmFsSW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB3YXJlaG91c2UoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1dhcmVob3VzZSA9IHRoaXMuX0dsb2JhbF9XYXJlaG91c2UgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9XYXJlaG91c2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgd2FyZWhvdXNlKHZhbHVlOiBJV2FyZWhvdXNlR2xvYmFsSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1dhcmVob3VzZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDnm67lvZVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9hZFJlc291cmNlc2NhdGFsb2coKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gXCJ1cmxcIjogeyB0eXBlOiByZXMgdHlwZSwgdXJsOiBcInNhdmUgdXJsXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3pn7PkuZDpn7PmlYjotYTmupBcclxuICAgICAgICAgICAgXCJzb3VuZHNcIjogeyB0eXBlOiBjYy5BdWRpb0NsaXAsIHVybDogXCJzb3VuZHNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9vemihOWItuS7tui1hOa6kFxyXG4gICAgICAgICAgICBcInByZWZhYnNcIjogeyB0eXBlOiBjYy5QcmVmYWIsIHVybDogXCJwcmVmYWJzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3lm77pm4botYTmupBcclxuICAgICAgICAgICAgLy8gXCJhdGxhc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUF0bGFzLCB1cmw6IFwiYXRsYXNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWNleS4queyvueBtei1hOa6kFxyXG4gICAgICAgICAgICBcImZyYW1lc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB1cmw6IFwiZnJhbWVzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3liIbkuqvlm75cclxuICAgICAgICAgICAgXCJzaGFyZVwiOiB7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB1cmw6IFwic2hhcmVcIiB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxvYWRSZXNvdXJjZXNjYXRhbG9nKHZhbHVlKSB7XHJcbiAgICAgICAgY2MuZXJyb3IoXCLkuI3lhYHorrjkv67mlLnotYTmupDnm67lvZVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6XlhbflhajlsYDlrp7kvotcclxuICAgICAqIOWPr+S7peazqOWFpeWFtuS7luW3peWFt+exu1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfVG9vbDogSVRvb2xHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRvb2woKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1Rvb2wgPSB0aGlzLl9HbG9iYWxfVG9vbCB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1Rvb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB0b29sKHZhbHVlOiBJVG9vbEdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9Ub29sID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnYLpobnlhajlsYDlrp7kvotcclxuICAgICAqIOWPr+S7peazqOWFpeWFtuS7lumhueebrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfT3RoZXI6IElPdGhlckdsb2JhbEludGVyZmFjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3RoZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX090aGVyID0gdGhpcy5fR2xvYmFsX090aGVyIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfT3RoZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBvdGhlcih2YWx1ZTogSU90aGVyR2xvYmFsSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX090aGVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDlrp7kvotcclxuICAgICAqIOWPquiDveazqOWFpWNjLk5vZGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX0dlbnJhbExheWVyOiBJZ2FuZXJhbExheWVySW50ZXJmYWNlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxheWVycygpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgPSB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5omA5pyJ5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxheWVycyh2YWx1ZTogSWdhbmVyYWxMYXllckludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blupXlsYJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzWzBdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnmoTmlrDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgbGF5ZXIodmFsdWU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy5fR2xvYmFsX0dlbnJhbExheWVyIHx8IHt9KS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sYXllcnNba2V5LnRvU3RyaW5nKCldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDlrp7kvotcclxuICAgICAqIOWPquiDveazqOWFpWNjLk5vZGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX09wZW5TY3JpcHQ6IElvcGVuU2NyaXB0SW50ZXJmYWNlID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX09wZW5TY3JpcHRfRnJpc3ROYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2NyaXB0KCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NyaXB0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBrZXkgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX09wZW5TY3JpcHRfRnJpc3ROYW1lKSB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGtleSA9IChPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCB8fCB7fSkubGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcmlwdFtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuiEmuacrFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjcmlwdF9DbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5omA5pyJ6ISa5pys5ZCN56ewXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNjcmlwdE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W56ys5LiA5Liq5Yqg5YWl55qE6ISa5pysXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZyaXN0U2NyaXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfT3BlblNjcmlwdFt0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZV07XHJcbiAgICB9XHJcbn1cclxuLy8gaW1wb3J0IHsgbWF0aE1hY3JvIGFzIG1NYXRoIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmV4cG9ydCBjbGFzcyBtYXRoTWFjcm8ge1xyXG4gICAgLy8g6L+U5Zue6ZqP5py655qE5pW05pWw77yM6IyD5Zu05ZyoWzAsIHgpXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDIoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDMoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDQoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDUoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDYoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDcoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDgoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDkoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDEoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgUkdCQSBjb2xvcnMuPGJyLz5cclxuICAgICAqIEVhY2ggY29sb3IgY29tcG9uZW50IGlzIGFuIGludGVnZXIgdmFsdWUgd2l0aCBhIHJhbmdlIGZyb20gMCB0byAyNTUuPGJyLz5cclxuICAgICAqIEB6aCDpgJrov4cgUmVk44CBR3JlZW7jgIFCbHVlIOminOiJsumAmumBk+ihqOekuuminOiJsu+8jOW5tumAmui/hyBBbHBoYSDpgJrpgZPooajnpLrkuI3pgI/mmI7luqbjgII8YnIvPlxyXG4gICAgICog5q+P5Liq6YCa6YGT6YO95Li65Y+W5YC86IyD5Zu0IFswLCAyNTVdIOeahOaVtOaVsOOAgjxici8+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuQ29sb3IpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBNYXRoZW1hdGljYWwgM3gzIG1hdHJpeC5cclxuICAgICAqIEB6aCDooajnpLrkuInnu7TvvIgzeDPvvInnn6npmLXjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5NYXQzKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gTWF0aGVtYXRpY2FsIDR4NCBtYXRyaXguXHJcbiAgICAgKiBAemgg6KGo56S65Zub57u077yINHg077yJ55+p6Zi144CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuTWF0NClcclxuICAgIC8qKlxyXG4gICAgICogQGVuXHJcbiAgICAgKiBBIDJEIHJlY3RhbmdsZSBkZWZpbmVkIGJ5IHgsIHkgcG9zaXRpb24gYW5kIHdpZHRoLCBoZWlnaHQuXHJcbiAgICAgKiBAemhcclxuICAgICAqIOi9tOWvuem9kOefqeW9ouOAglxyXG4gICAgICog55+p5b2i5YaF55qE5omA5pyJ54K56YO95aSn5LqO562J5LqO55+p5b2i55qE5pyA5bCP54K5ICh4TWluLCB5TWluKSDlubbkuJTlsI/kuo7nrYnkuo7nn6nlvaLnmoTmnIDlpKfngrkgKHhNYXgsIHlNYXgp44CCXHJcbiAgICAgKiDnn6nlvaLnmoTlrr3luqblrprkuYnkuLogeE1heCAtIHhNaW7vvJvpq5jluqblrprkuYnkuLogeU1heCAtIHlNaW7jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5SZWN0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gcXVhdGVybmlvblxyXG4gICAgICogQHpoIOWbm+WFg+aVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlF1YXQpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBUd28gZGltZW5zaW9uYWwgc2l6ZSB0eXBlIHJlcHJlc2VudGluZyB0aGUgd2lkdGggYW5kIGhlaWdodC5cclxuICAgICAqIEB6aCDkuoznu7TlsLrlr7jjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5TaXplKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgMkQgdmVjdG9ycyBhbmQgcG9pbnRzLlxyXG4gICAgICogQHpoIOS6jOe7tOWQkemHj+OAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlZlYzIpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBSZXByZXNlbnRhdGlvbiBvZiAzRCB2ZWN0b3JzIGFuZCBwb2ludHMuXHJcbiAgICAgKiBAemgg5LiJ57u05ZCR6YeP44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuVmVjMylcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIGZvdXItZGltZW5zaW9uYWwgdmVjdG9ycy5cclxuICAgICAqIEB6aCDlm5vnu7TlkJHph4/jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5WZWM0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gb2JqZWN0LlxyXG4gICAgICogQHpoIOWMheWQq3gseSx6LHfnrYnlsZ7mgKflkI3nmoTlr7nosaHjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBvYmplY3QpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBhcnJheS5cclxuICAgICAqIEB6aCDmlbDnu4TjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBudW1iZXJbXSlcclxuICAgIC8qKlxyXG4gICAgICogQGVuIDopXHJcbiAgICAgKiBAemgg6YCQ5Liq5a6a5LmJ5ZOm77yM5Lqy44CCXHJcbiAgICAgKi9cclxuICAgIC8vIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIsIHc/OiBudW1iZXIpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBPaCwgbXkgR29kLCB0aGlzIGlzIGdvbm5hLi4uIElzIHRoaXMgc3VwcG9zZWQgdG8uLi4gRGVmaW5lIG9uZSBieSBvbmUhID8gLiBPaCwgZG9uJ3Qgd29ycnkgYWJvdXQgbWUuIEkgY29waWVkIGl0IGZyb20gYW4gb2ZmaWNpYWwgZG9jdW1lbnQgO1BcclxuICAgICAqIEB6aCDpgJDkuKrlrprkuYkgO1AgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG0wMDogbnVtYmVyLCBtMDE/OiBudW1iZXIsIG0wMj86IG51bWJlciwgbTAzPzogbnVtYmVyLCBtMTA/OiBudW1iZXIsIG0xMT86IG51bWJlciwgbTEyPzogbnVtYmVyLCBtMTM/OiBudW1iZXIsIG0yMD86IG51bWJlciwgbTIxPzogbnVtYmVyLCBtMjI/OiBudW1iZXIsIG0yMz86IG51bWJlciwgbTMwPzogbnVtYmVyLCBtMzE/OiBudW1iZXIsIG0zMj86IG51bWJlciwgbTMzPzogbnVtYmVyLClcclxuICAgIGNvbnN0cnVjdG9yKC4uLm51bSkge1xyXG4gICAgICAgIGxldCBpc051bWJlciA9ICh2YWx1ZSkgPT4geyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpOyB9XHJcbiAgICAgICAgbGV0IG91dCA9IHsgbHJjOiAnMjEyOGN6JyB9O1xyXG4gICAgICAgIGlmIChudW1bMF0gJiYgdHlwZW9mIG51bVswXSA9PT0gJ29iamVjdCcpIHsgb3V0WydtMDAnXSA9IGlzTnVtYmVyKG51bVswXS54KSA/IG51bVswXS54IDogbnVtWzBdLnggfHwgKGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiBudW1bMF0ud2lkdGggfHwgbnVtWzBdLnIgfHwgKGlzTnVtYmVyKG51bVswXSkgPyBudW1bMF0gOiAwKSk7IG91dFsnbTAxJ10gPSBpc051bWJlcihudW1bMF0ueSkgPyBudW1bMF0ueSA6IG51bVswXS55IHx8IChpc051bWJlcihudW1bMF1bMV0pID8gbnVtWzBdWzFdIDogbnVtWzBdLmhlaWdodCB8fCBudW1bMF0uZyB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDInXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogbnVtWzBdLnogfHwgKGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiBudW1bMF0uYiB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDMnXSA9IGlzTnVtYmVyKG51bVswXS53KSA/IG51bVswXS53IDogbnVtWzBdLncgfHwgKGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiBudW1bMF0uYSB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgfVxyXG4gICAgICAgIGVsc2UgeyBvdXRbJ20wMCddID0gbnVtWzBdOyBvdXRbJ20wMSddID0gbnVtWzFdOyBvdXRbJ20wMiddID0gbnVtWzJdOyBvdXRbJ20wMyddID0gbnVtWzNdOyBvdXRbJ20wNCddID0gbnVtWzRdOyBvdXRbJ20wNSddID0gbnVtWzVdOyBvdXRbJ20wNiddID0gbnVtWzZdOyBvdXRbJ20wNyddID0gbnVtWzddOyBvdXRbJ20wOCddID0gbnVtWzhdOyBvdXRbJ20wOSddID0gbnVtWzldOyBvdXRbJ20xMCddID0gbnVtWzEwXTsgb3V0WydtMTEnXSA9IG51bVsxMV07IG91dFsnbTEyJ10gPSBudW1bMTJdOyBvdXRbJ20xMyddID0gbnVtWzEzXTsgb3V0WydtMTQnXSA9IG51bVsxNF07IG91dFsnbTE1J10gPSBudW1bMTVdOyB9XHJcbiAgICAgICAgdGhpcy5saXJ1b2NoZW5LaXNtaXQgPSBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpcnVvY2hlbktpc21pdDogb2JqZWN0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtZWFud2hpbGVBbGxWZWN0b3JBdEFycmF5ID0gZnVuY3Rpb24gPEZVTkMgZXh0ZW5kcyBGdW5jdGlvbiwgVCBleHRlbmRzIG9iamVjdD4oZnVuYzogRlVOQywgLi4ub2JqZWN0OiBUW10pIHsgbGV0IG91dCA9IHsgeDogMCwgeTogMCwgejogMCwgdzogMCB9OyBPYmplY3Qua2V5cyhvdXQpLmZvckVhY2goZWxlbWVudCA9PiB7IGxldCBhcnJheSA9IFtdOyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb2JqZWN0Lmxlbmd0aDsgaW5kZXgrKykgeyBhcnJheS5wdXNoKG9iamVjdFtpbmRleF1bZWxlbWVudF0pOyB9OyBvdXRbZWxlbWVudF0gPSBmdW5jKGFycmF5LCBvYmplY3QubGVuZ3RoKTsgfSk7IHJldHVybiBvdXQ7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreaYr+WQpuWcqOebkuS9k+iMg+WbtOWGhVxyXG4gICAgICogQHBhcmFtIHsqfSBvcmlnaW4g55uS5L2T5Z2Q5qCH5Y6f54K5XHJcbiAgICAgKiBAcGFyYW0geyp9IGV4dGVudCDnm5LkvZPojIPlm7TvvIzov5nmmK/nm5LkvZPnmoTlkITovbTljYrlvoRcclxuICAgICAqIEByZXR1cm4gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNJbkJveDIob3JpZ2luLCBleHRlbnQpIHsgbGV0IHZlYyA9IHRoaXMubWVhbndoaWxlQWxsVmVjdG9yQXRBcnJheSgoYSkgPT4geyBsZXQgYiA9IGFbMF0gLSBhWzFdOyByZXR1cm4gYiA+PSAtYVsyXSAmJiBiIDw9IGFbMl07IH0sIHRoaXMsIG9yaWdpbiwgZXh0ZW50KTsgcmV0dXJuIHZlYy54ICYmIHZlYy55OyB9XHJcblxyXG5cclxufVxyXG4vKipcclxuICog5YWo5bGA5p6a5Li+XHJcbiAqIOWvueixoeWPr+enu+WKqOaAp1xyXG4gKi9cclxuZW51bSBwYW5lbFR5cGUge1xyXG4gICAgc3RhaXRjLCBzdGF0aW9uYXJ5LCBNb3ZlYWJsZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Zy65pmv5Z2Q5qCH56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFU2NlbmVDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2ltdWxhdGlvbiwgd29ybGQsIGxvY2FsXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDmjqfku7blnZDmoIfnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVXaWRnZXRDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2NyZWVuLCBzY2VuZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Yqo55S754mp55CG56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFQW5pbVBoeVNpbVNwYWNlIHtcclxuICAgIGNvbXBvbmVudCwgYWN0b3IsIHNjZW5lLCByZWxhdGl2ZVJvb3QsIHJlbGF0aXZlTm9kZVxyXG59XHJcblxyXG5cclxuXHJcbi8vIOa1i+ivleivreWPpe+8jOWPr+S7peWcqOaOp+WItuWPsOS4reiDveWkn+eci+WIsOi/memHjFxyXG5jY1tcInZ2XCJdID0gY2NbXCJ2dlwiXSB8fCBEZXZlbG9wZXJzVG9vbEdsb2JhbDtcclxuXHJcblxyXG4iXX0=