
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
// 用法定位 类似于宏转义
/**
 * 这里定义基本的全局参数
 */
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
        get: function () { return cc.winSize.height * (.17 - .5); },
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
    Object.defineProperty(Setting, "ice_CoolDownTime", {
        get: function () { return this._SkillIce_CoolDownTime; },
        set: function (value) { this._SkillIce_CoolDownTime = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "ice_Duration", {
        get: function () { return this._SkillIce_Duration; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "hit_Force", {
        get: function () { return this._SkillHit_Force; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "hit_CoolDownTime", {
        get: function () { return this._SkillHit_CoolDownTime; },
        set: function (value) { this._SkillHit_CoolDownTime = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "boom_CoolDownTime", {
        get: function () { return this._SkillBoom_CoolDownTime; },
        set: function (value) { this._SkillBoom_CoolDownTime = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "score", {
        get: function () { return this._Score; },
        set: function (value) { this._Score = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "score_add", {
        set: function (value) { this._Score += value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "score_sub", {
        set: function (value) { this._Score -= value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "endCubeGroup", {
        get: function () { return this._EndCubeGroup; },
        set: function (value) { this._EndCubeGroup = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameSpeed", {
        get: function () { return this._GameSpeed; },
        set: function (value) { this._GameSpeed = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameAutoSpeed", {
        get: function () { return new cc.Vec3(0, -((this.endCubeGroup ? (this.endCubeGroup.node.y + cc.winSize.height / 2) / cc.winSize.height : 1) * this.GameSpeed), 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameVector", {
        get: function () { return new cc.Vec3(0, -80, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameAutoDrag", {
        get: function () { return (this.endCubeGroup ? 1 - (this.endCubeGroup.node.y + cc.winSize.height / 2) / cc.winSize.height : 0); },
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
    Object.defineProperty(Setting, "SkillEvent", {
        // 到关卡的事件转发
        set: function (event) { DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript[event](); },
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
    Object.defineProperty(Setting, "movement", {
        get: function () { return this._Movement; },
        set: function (value) { this._Movement = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "menu", {
        get: function () { return this._Menu; },
        set: function (value) { this._Menu = value; },
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
    Object.defineProperty(Setting, "Effect_Boom", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Boom Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_Hit", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Hit Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_Ice", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Ice Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_bgm", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['bgm']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_btnn", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['button']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_btny", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['button_yes']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_lose", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['lose']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_boom", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['prop_bomb']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_hit", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['prop_hit']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_ice", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['prop_ice']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_shot", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['shot']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_des1", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['xiaochu1']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_des2", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['xiaochu2']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_des3", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['xiaochu3']; },
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
    // 技能设定
    Setting._SkillIce_CoolDownTime = 15;
    Setting._SkillIce_Duration = 8;
    Setting._SkillHit_CoolDownTime = 5;
    Setting._SkillHit_Force = 880000; // 单位n/ccmm2 （牛顿/cocos平方单位）
    Setting._SkillBoom_CoolDownTime = 39;
    // 计分器
    Setting._Score = 0;
    // 场景中最后一组方块
    Setting._EndCubeGroup = null;
    // 设定参数定义
    Setting._GameSpeed = 120;
    Setting._CubeSpeed = 950;
    // 网格指针
    Setting._GridCurrentPoint = 0;
    // 网格驱动器
    Setting._Movement = null;
    // 关卡菜单界面脚本
    Setting._Menu = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixzREFBaUQ7QUFLakQsV0FBVztBQUNYLGNBQWM7QUFDZDs7R0FFRztBQUNIO0lBQUE7SUErR0EsQ0FBQztJQTdHRyxzQkFBa0Isc0JBQVc7UUFEN0IsU0FBUzthQUNULGNBQTBDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDckQsc0JBQWtCLG1CQUFRO2FBQTFCLGNBQXVDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQWtCLG9CQUFTO2FBQTNCLGNBQXdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFcEQsc0JBQWtCLHFCQUFVO2FBQTVCLGNBQXlDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdEQsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQTBDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQWtCLHlCQUFjO2FBQWhDLGNBQTZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFHeEQsc0JBQWtCLHdCQUFhO1FBRC9CLGNBQWM7YUFDZCxjQUE0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFrQixvQkFBUztRQUQzQiwwQkFBMEI7YUFDMUIsY0FBd0MsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR2hGLHNCQUFrQixrQkFBTztRQUR6QixNQUFNO2FBQ04sY0FBc0MsT0FBTyxTQUFTLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN4RCxzQkFBa0Isa0JBQU87YUFBekIsY0FBc0MsT0FBTyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7T0FB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R0FBRyxDQUFDO0lBUTFDLE9BQU87SUFDVSx5QkFBaUIsR0FBVyxDQUFDLENBQUM7SUFTL0MsUUFBUTtJQUNTLGlCQUFTLEdBQWlCLElBQUksQ0FBQztJQUloRCxXQUFXO0lBQ00sYUFBSyxHQUFjLElBQUksQ0FBQztJQThCN0MsY0FBQztDQS9HRCxBQStHQyxJQUFBO2tCQS9Hb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tIFwiLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbFwiO1xyXG5pbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbmltcG9ydCBQYXduTW92ZW1lbnQgZnJvbSBcIi4uL2Jhc2UvdG9vbC9QYXduTW92ZW1lbnRcIjtcclxuaW1wb3J0IEJsb2NrR3JvdXAgZnJvbSBcIi4vQmxvY2tHcm91cFwiO1xyXG5pbXBvcnQgR2FtZUxldmVsIGZyb20gXCIuL0dhbWVMZXZlbFwiO1xyXG5pbXBvcnQgTWVudUxldmVsIGZyb20gXCIuL01lbnVMZXZlbFwiO1xyXG4vLyDmuLjmiI/lm7rlrprlj4LmlbDorr7lrppcclxuLy8g55So5rOV5a6a5L2NIOexu+S8vOS6juWuj+i9rOS5iVxyXG4vKipcclxuICog6L+Z6YeM5a6a5LmJ5Z+65pys55qE5YWo5bGA5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIHtcclxuICAgIC8vIOWfuuacrOW4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfUm93KCk6IG51bWJlciB7IHJldHVybiAxNTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Sb3cyKCk6IG51bWJlciB7IHJldHVybiAzMDsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIDE3NzsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV9IZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV9JbnRlcmF2YWwoKTogbnVtYmVyIHsgcmV0dXJuIDM7IH1cclxuXHJcbiAgICAvLyDmlrnlnZflnKjpooTliLbkvZPkuK3nmoR55Z2Q5qCHXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX1BlcmZhYl9ZKCk6IG51bWJlciB7IHJldHVybiA1MDsgfVxyXG5cclxuICAgIC8vIOW6lemDqOaIquatoue6v++8jOeUqOS6jueUn+aIkOaWueWdl+S9jee9ruWSjOWIpOaWreaYr+WQpue7k+adn+a4uOaIj1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU2VwYXJhdG9yKCk6IG51bWJlciB7IHJldHVybiBjYy53aW5TaXplLmhlaWdodCAqICguMTcgLSAuNSk7IH1cclxuXHJcbiAgICAvLyDnorDmkp7nu4RcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyb3VwXzAoKTogc3RyaW5nIHsgcmV0dXJuICdkZWZhdWx0JyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcm91cF8xKCk6IHN0cmluZyB7IHJldHVybiAncGxheWVyJyB9XHJcblxyXG4gICAgLy8g5oqA6IO96K6+5a6aXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Ta2lsbEljZV9Db29sRG93blRpbWU6IG51bWJlciA9IDE1O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxJY2VfRHVyYXRpb246IG51bWJlciA9IDg7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpY2VfQ29vbERvd25UaW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9Ta2lsbEljZV9Db29sRG93blRpbWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgaWNlX0Nvb2xEb3duVGltZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1NraWxsSWNlX0Nvb2xEb3duVGltZSA9IHZhbHVlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGljZV9EdXJhdGlvbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2tpbGxJY2VfRHVyYXRpb24gfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NraWxsSGl0X0Nvb2xEb3duVGltZTogbnVtYmVyID0gNTtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NraWxsSGl0X0ZvcmNlOiBudW1iZXIgPSA4ODAwMDA7IC8vIOWNleS9jW4vY2NtbTIg77yI54mb6aG/L2NvY29z5bmz5pa55Y2V5L2N77yJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBoaXRfRm9yY2UoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsSGl0X0ZvcmNlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGhpdF9Db29sRG93blRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsSGl0X0Nvb2xEb3duVGltZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBoaXRfQ29vbERvd25UaW1lKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2tpbGxIaXRfQ29vbERvd25UaW1lID0gdmFsdWUgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NraWxsQm9vbV9Db29sRG93blRpbWU6IG51bWJlciA9IDM5O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYm9vbV9Db29sRG93blRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsQm9vbV9Db29sRG93blRpbWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgYm9vbV9Db29sRG93blRpbWUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9Ta2lsbEJvb21fQ29vbERvd25UaW1lID0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOiuoeWIhuWZqFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY29yZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2NvcmUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NvcmUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9TY29yZSA9IHZhbHVlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNjb3JlX2FkZCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1Njb3JlICs9IHZhbHVlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNjb3JlX3N1Yih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1Njb3JlIC09IHZhbHVlIH1cclxuXHJcbiAgICAvLyDlnLrmma/kuK3mnIDlkI7kuIDnu4TmlrnlnZdcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0VuZEN1YmVHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBlbmRDdWJlR3JvdXAoKTogQmxvY2tHcm91cCB7IHJldHVybiB0aGlzLl9FbmRDdWJlR3JvdXAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgZW5kQ3ViZUdyb3VwKHZhbHVlOiBCbG9ja0dyb3VwKSB7IHRoaXMuX0VuZEN1YmVHcm91cCA9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDorr7lrprlj4LmlbDlrprkuYlcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dhbWVTcGVlZDogbnVtYmVyID0gMTIwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZVNwZWVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9HYW1lU3BlZWQ7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IEdhbWVTcGVlZCh2YWx1ZSkgeyB0aGlzLl9HYW1lU3BlZWQgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZUF1dG9TcGVlZCgpOiBjYy5WZWMzIHsgcmV0dXJuIG5ldyBjYy5WZWMzKDAsIC0oKHRoaXMuZW5kQ3ViZUdyb3VwID8gKHRoaXMuZW5kQ3ViZUdyb3VwLm5vZGUueSArIGNjLndpblNpemUuaGVpZ2h0IC8gMikgLyBjYy53aW5TaXplLmhlaWdodCA6IDEpICogdGhpcy5HYW1lU3BlZWQpLCAwKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZVZlY3RvcigpOiBjYy5WZWMzIHsgcmV0dXJuIG5ldyBjYy5WZWMzKDAsIC04MCwgMCk7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVBdXRvRHJhZygpOiBudW1iZXIgeyByZXR1cm4gKHRoaXMuZW5kQ3ViZUdyb3VwID8gMSAtICh0aGlzLmVuZEN1YmVHcm91cC5ub2RlLnkgKyBjYy53aW5TaXplLmhlaWdodCAvIDIpIC8gY2Mud2luU2l6ZS5oZWlnaHQgOiAwKSB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfQ3ViZVNwZWVkOiBudW1iZXIgPSA5NTA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0N1YmVTcGVlZDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgQ3ViZVNwZWVkKHZhbHVlKSB7IHRoaXMuX0N1YmVTcGVlZCA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlVmVjdG9yKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgdGhpcy5fQ3ViZVNwZWVkLCAwKTsgfVxyXG5cclxuICAgIC8vIOWIsOWFs+WNoeeahOS6i+S7tui9rOWPkVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgU2tpbGxFdmVudChldmVudDogc3RyaW5nKSB7IGNjdnYuZnJpc3RTY3JpcHRbZXZlbnRdKCk7IH1cclxuXHJcbiAgICAvLyDnvZHmoLzmjIfpkohcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dyaWRDdXJyZW50UG9pbnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkQ3VycmVudFBvaW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9HcmlkQ3VycmVudFBvaW50IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IEdyaWRDdXJyZW50UG9pbnQodmFsdWUpIHsgdGhpcy5fR3JpZEN1cnJlbnRQb2ludCA9IHZhbHVlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyaWRDdXJyZW50UG9pbnRUb1ZlYygpOiBjYy5WZWMzIHsgcmV0dXJuIG5ldyBjYy5WZWMzKDAsIHRoaXMuX0dyaWRDdXJyZW50UG9pbnQsIDApIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyaWRQb2ludGVyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9HcmlkQ3VycmVudFBvaW50Kys7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IEdyaWRQb2ludGVyKHZhbHVlKSB7IHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgKz0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOe9keagvOWPguaVsFxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZE9yaWdpbk9mZnNldCgpOiBjYy5WZWMzIHsgcmV0dXJuIG5ldyBjYy5WZWMzKDAsIEdyaWRBYnNvcmIuZ3JpZC5ncmlkU2l6ZS55IC8gMiArIGNjLndpblNpemUuaGVpZ2h0IC8gMiwgMCkgfVxyXG4gICAgLy8g572R5qC86amx5Yqo5ZmoXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Nb3ZlbWVudDogUGF3bk1vdmVtZW50ID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1vdmVtZW50KCk6IFBhd25Nb3ZlbWVudCB7IHJldHVybiB0aGlzLl9Nb3ZlbWVudCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBtb3ZlbWVudCh2YWx1ZTogUGF3bk1vdmVtZW50KSB7IHRoaXMuX01vdmVtZW50ID0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOWFs+WNoeiPnOWNleeVjOmdouiEmuacrFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfTWVudTogTWVudUxldmVsID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1lbnUoKTogTWVudUxldmVsIHsgcmV0dXJuIHRoaXMuX01lbnUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgbWVudSh2YWx1ZTogTWVudUxldmVsKSB7IHRoaXMuX01lbnUgPSB2YWx1ZSB9XHJcblxyXG4gICAgLy8g6LWE5rqQ5bi46YeP5a6a5LmJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTcXVhcmUoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydTcXVhcmUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTcXVhcmVHcm91cCgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ1NxdWFyZSBOb2RlJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRWZmZWN0X1NxdWFyZUJyZWFrKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnc3BsaW50ZXJpbmcnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfRGVzdG9yeSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ0Rlc3Ryb3kgRWZmZWN0IE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfQm9vbSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ0Jvb20gRWZmZWN0IE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfSGl0KCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnSGl0IEVmZmVjdCBOb2RlJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRWZmZWN0X0ljZSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ0ljZSBFZmZlY3QgTm9kZSddIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9iZ20oKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ2JnbSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2J0bm4oKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ2J1dHRvbiddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2J0bnkoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ2J1dHRvbl95ZXMnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9sb3NlKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWydsb3NlJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfYm9vbSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsncHJvcF9ib21iJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfaGl0KCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWydwcm9wX2hpdCddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2ljZSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsncHJvcF9pY2UnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9zaG90KCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWydzaG90J10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfZGVzMSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsneGlhb2NodTEnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9kZXMyKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWyd4aWFvY2h1MiddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2RlczMoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ3hpYW9jaHUzJ10gfVxyXG5cclxuICAgIC8vIOi1hOS6p+W4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYmxvY2tOYW1lKCkgeyByZXR1cm4gJ0Jsb2NrJyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBibG9ja0dyb3VwTmFtZSgpIHsgcmV0dXJuICdCbG9ja0dyb3VwJyB9XHJcblxyXG5cclxufSJdfQ==