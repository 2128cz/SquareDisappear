
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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
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
        get: function () { return 15; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_width", {
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Height", {
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Interaval", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Perfab_Y", {
        // 方块在预制体中的y坐标
        get: function () { return 50; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Separator", {
        // 底部截止线，用于生成方块位置和判断是否结束游戏
        get: function () { return -379.4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Group_0", {
        // 碰撞组
        get: function () { return 'default'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Group_1", {
        get: function () { return 'player'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameSpeed", {
        get: function () { return this._GameSpeed; },
        set: function (value) { this._GameSpeed = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameVector", {
        get: function () { return new cc.Vec3(0, -this._GameSpeed, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "CubeSpeed", {
        get: function () { return this._CubeSpeed; },
        set: function (value) { this._CubeSpeed = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "CubeVector", {
        get: function () { return new cc.Vec3(0, this._CubeSpeed, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridCurrentPoint", {
        get: function () { return this._GridCurrentPoint; },
        set: function (value) { this._GridCurrentPoint = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridCurrentPointToVec", {
        get: function () { return new cc.Vec3(0, this._GridCurrentPoint, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridPointer", {
        get: function () { return this._GridCurrentPoint++; },
        set: function (value) { this._GridCurrentPoint += value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridOriginOffset", {
        // 网格参数
        get: function () { return new cc.Vec3(0, GridAdsorb_1.default.grid.gridSize.y / 2 + cc.winSize.height / 2, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Square", {
        // 资源常量定义
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Square']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "SquareGroup", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Square Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_SquareBreak", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['splintering']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_Destory", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Destroy Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "blockName", {
        // 资产常量定义
        get: function () { return 'Block'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "blockGroupName", {
        get: function () { return 'BlockGroup'; },
        enumerable: false,
        configurable: true
    });
    // 设定参数定义
    Setting._GameSpeed = 100;
    Setting._CubeSpeed = 400;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixzREFBaUQ7QUFDakQsV0FBVztBQUNYO0lBQUE7SUFnREEsQ0FBQztJQTlDRyxzQkFBa0Isc0JBQVc7UUFEN0IsU0FBUzthQUNULGNBQTBDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDckQsc0JBQWtCLG1CQUFRO2FBQTFCLGNBQXVDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQWtCLG9CQUFTO2FBQTNCLGNBQXdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFcEQsc0JBQWtCLHFCQUFVO2FBQTVCLGNBQXlDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdEQsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQTBDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQWtCLHlCQUFjO2FBQWhDLGNBQTZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFeEQsc0JBQWtCLHdCQUFhO1FBRC9CLGNBQWM7YUFDZCxjQUE0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXhELHNCQUFrQixvQkFBUztRQUQzQiwwQkFBMEI7YUFDMUIsY0FBd0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXhELHNCQUFrQixrQkFBTztRQUR6QixNQUFNO2FBQ04sY0FBc0MsT0FBTyxTQUFTLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN4RCxzQkFBa0Isa0JBQU87YUFBekIsY0FBc0MsT0FBTyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUl2RCxzQkFBa0Isb0JBQVM7YUFBM0IsY0FBd0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FB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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSBcIi4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWxcIjtcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG4vLyDmuLjmiI/lm7rlrprlj4LmlbDorr7lrppcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyB7XHJcbiAgICAvLyDln7rmnKzluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfQ29sdW1uKCk6IG51bWJlciB7IHJldHVybiA0OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdygpOiBudW1iZXIgeyByZXR1cm4gMTU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfUm93MigpOiBudW1iZXIgeyByZXR1cm4gMTU7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX3dpZHRoKCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfSW50ZXJhdmFsKCk6IG51bWJlciB7IHJldHVybiAzOyB9XHJcbiAgICAvLyDmlrnlnZflnKjpooTliLbkvZPkuK3nmoR55Z2Q5qCHXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX1BlcmZhYl9ZKCk6IG51bWJlciB7IHJldHVybiA1MDsgfVxyXG4gICAgLy8g5bqV6YOo5oiq5q2i57q/77yM55So5LqO55Sf5oiQ5pa55Z2X5L2N572u5ZKM5Yik5pat5piv5ZCm57uT5p2f5ri45oiPXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTZXBhcmF0b3IoKTogbnVtYmVyIHsgcmV0dXJuIC0zNzkuNDsgfVxyXG4gICAgLy8g56Kw5pKe57uEXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcm91cF8wKCk6IHN0cmluZyB7IHJldHVybiAnZGVmYXVsdCcgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JvdXBfMSgpOiBzdHJpbmcgeyByZXR1cm4gJ3BsYXllcicgfVxyXG5cclxuICAgIC8vIOiuvuWumuWPguaVsOWumuS5iVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2FtZVNwZWVkOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0dhbWVTcGVlZDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgR2FtZVNwZWVkKHZhbHVlKSB7IHRoaXMuX0dhbWVTcGVlZCA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lVmVjdG9yKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgLXRoaXMuX0dhbWVTcGVlZCwgMCk7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9DdWJlU3BlZWQ6IG51bWJlciA9IDQwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQ3ViZVNwZWVkOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBDdWJlU3BlZWQodmFsdWUpIHsgdGhpcy5fQ3ViZVNwZWVkID0gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVWZWN0b3IoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9DdWJlU3BlZWQsIDApOyB9XHJcblxyXG4gICAgLy8g572R5qC85oyH6ZKIXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HcmlkQ3VycmVudFBvaW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZEN1cnJlbnRQb2ludCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkQ3VycmVudFBvaW50KHZhbHVlKSB7IHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkQ3VycmVudFBvaW50VG9WZWMoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkQ3VycmVudFBvaW50LCAwKSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkUG9pbnRlcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCsrOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkUG9pbnRlcih2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ICs9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDnvZHmoLzlj4LmlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyaWRPcmlnaW5PZmZzZXQoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCBHcmlkQWJzb3JiLmdyaWQuZ3JpZFNpemUueSAvIDIgKyBjYy53aW5TaXplLmhlaWdodCAvIDIsIDApIH1cclxuXHJcbiAgICAvLyDotYTmupDluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ1NxdWFyZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZUdyb3VwKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnU3F1YXJlIE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfU3F1YXJlQnJlYWsoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydzcGxpbnRlcmluZyddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9EZXN0b3J5KCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnRGVzdHJveSBFZmZlY3QgTm9kZSddIH1cclxuXHJcbiAgICAvLyDotYTkuqfluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGJsb2NrTmFtZSgpIHsgcmV0dXJuICdCbG9jaycgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYmxvY2tHcm91cE5hbWUoKSB7IHJldHVybiAnQmxvY2tHcm91cCcgfVxyXG59Il19