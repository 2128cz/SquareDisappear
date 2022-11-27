
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
    Object.defineProperty(Setting, "highScore", {
        get: function () { return this._HighScroe; },
        set: function (value) { this._HighScroe = Math.max(value, this._HighScroe); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "endCubeGroup", {
        get: function () { return this._EndCubeGroup; },
        set: function (value) { this._EndCubeGroup = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameSpeed_MulMax", {
        get: function () { return 250 - this._GameSpeed; },
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
    Object.defineProperty(Setting, "Sound_bgm_bpm", {
        // 背景音乐bpm，用于节拍对齐，如果没有在menu中看到相关代码就可以删了
        get: function () { return 180; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "mute", {
        get: function () { return this._Mute; },
        set: function (value) { this._Mute = value; },
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
    Setting._HighScroe = 0;
    // 场景中最后一组方块
    Setting._EndCubeGroup = null;
    // 设定参数定义 我认为极限速度大概在250左右，再快了就反应不过来了，不过由于存在自动阻力，所以最终速度很难达到250
    Setting._GameSpeed = 130;
    Setting._CubeSpeed = 950;
    // 网格指针
    Setting._GridCurrentPoint = 0;
    // 网格驱动器
    Setting._Movement = null;
    // 关卡菜单界面脚本
    Setting._Menu = null;
    // 是否静音
    Setting._Mute = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixzREFBaUQ7QUFLakQsV0FBVztBQUNYLGNBQWM7QUFDZDs7R0FFRztBQUNIO0lBQUE7SUEwSEEsQ0FBQztJQXhIRyxzQkFBa0Isc0JBQVc7UUFEN0IsU0FBUzthQUNULGNBQTBDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDckQsc0JBQWtCLG1CQUFRO2FBQTFCLGNBQXVDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQWtCLG9CQUFTO2FBQTNCLGNBQXdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFcEQsc0JBQWtCLHFCQUFVO2FBQTVCLGNBQXlDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdEQsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQTBDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQWtCLHlCQUFjO2FBQWhDLGNBQTZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFHeEQsc0JBQWtCLHdCQUFhO1FBRC9CLGNBQWM7YUFDZCxjQUE0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFrQixvQkFBUztRQUQzQiwwQkFBMEI7YUFDMUIsY0FBd0MsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR2hGLHNCQUFrQixrQkFBTztRQUR6QixNQUFNO2FBQ04sY0FBc0MsT0FBTyxTQUFTLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN4RCxzQkFBa0Isa0JBQU87YUFBekIsY0FBc0MsT0FBTyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7T0FB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QUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FETjtJQUl2RCxzQkFBa0Isb0JBQVM7UUFEM0IsU0FBUzthQUNULGNBQWdDLE9BQU8sT0FBTyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDaEQsc0JBQWtCLHlCQUFjO2FBQWhDLGNBQXFDLE9BQU8sWUFBWSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFuRzFELE9BQU87SUFDVSw4QkFBc0IsR0FBVyxFQUFFLENBQUM7SUFDcEMsMEJBQWtCLEdBQVcsQ0FBQyxDQUFDO0lBSy9CLDhCQUFzQixHQUFXLENBQUMsQ0FBQztJQUNuQyx1QkFBZSxHQUFXLE1BQU0sQ0FBQyxDQUFDLDJCQUEyQjtJQUs3RCwrQkFBdUIsR0FBVyxFQUFFLENBQUM7SUFJdEQsTUFBTTtJQUNXLGNBQU0sR0FBVyxDQUFDLENBQUM7SUFLbkIsa0JBQVUsR0FBVyxDQUFDLENBQUM7SUFJeEMsWUFBWTtJQUNLLHFCQUFhLEdBQWUsSUFBSSxDQUFDO0lBSWxELDZEQUE2RDtJQUM1QyxrQkFBVSxHQUFXLEdBQUcsQ0FBQztJQVF6QixrQkFBVSxHQUFXLEdBQUcsQ0FBQztJQVExQyxPQUFPO0lBQ1UseUJBQWlCLEdBQVcsQ0FBQyxDQUFDO0lBUy9DLFFBQVE7SUFDUyxpQkFBUyxHQUFpQixJQUFJLENBQUM7SUFJaEQsV0FBVztJQUNNLGFBQUssR0FBYyxJQUFJLENBQUM7SUEyQnpDLE9BQU87SUFDVSxhQUFLLEdBQVksS0FBSyxDQUFDO0lBUzVDLGNBQUM7Q0ExSEQsQUEwSEMsSUFBQTtrQkExSG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSBcIi4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWxcIjtcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgUGF3bk1vdmVtZW50IGZyb20gXCIuLi9iYXNlL3Rvb2wvUGF3bk1vdmVtZW50XCI7XHJcbmltcG9ydCBCbG9ja0dyb3VwIGZyb20gXCIuL0Jsb2NrR3JvdXBcIjtcclxuaW1wb3J0IEdhbWVMZXZlbCBmcm9tIFwiLi9HYW1lTGV2ZWxcIjtcclxuaW1wb3J0IE1lbnVMZXZlbCBmcm9tIFwiLi9NZW51TGV2ZWxcIjtcclxuLy8g5ri45oiP5Zu65a6a5Y+C5pWw6K6+5a6aXHJcbi8vIOeUqOazleWumuS9jSDnsbvkvLzkuo7lro/ovazkuYlcclxuLyoqXHJcbiAqIOi/memHjOWumuS5ieWfuuacrOeahOWFqOWxgOWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyB7XHJcbiAgICAvLyDln7rmnKzluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfQ29sdW1uKCk6IG51bWJlciB7IHJldHVybiA0OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdygpOiBudW1iZXIgeyByZXR1cm4gMTU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfUm93MigpOiBudW1iZXIgeyByZXR1cm4gMzA7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX3dpZHRoKCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfSW50ZXJhdmFsKCk6IG51bWJlciB7IHJldHVybiAzOyB9XHJcblxyXG4gICAgLy8g5pa55Z2X5Zyo6aKE5Yi25L2T5Lit55qEeeWdkOagh1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV9QZXJmYWJfWSgpOiBudW1iZXIgeyByZXR1cm4gNTA7IH1cclxuXHJcbiAgICAvLyDlupXpg6jmiKrmraLnur/vvIznlKjkuo7nlJ/miJDmlrnlnZfkvY3nva7lkozliKTmlq3mmK/lkKbnu5PmnZ/muLjmiI9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNlcGFyYXRvcigpOiBudW1iZXIgeyByZXR1cm4gY2Mud2luU2l6ZS5oZWlnaHQgKiAoLjE3IC0gLjUpOyB9XHJcblxyXG4gICAgLy8g56Kw5pKe57uEXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcm91cF8wKCk6IHN0cmluZyB7IHJldHVybiAnZGVmYXVsdCcgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JvdXBfMSgpOiBzdHJpbmcgeyByZXR1cm4gJ3BsYXllcicgfVxyXG5cclxuICAgIC8vIOaKgOiDveiuvuWumlxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxJY2VfQ29vbERvd25UaW1lOiBudW1iZXIgPSAxNTtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NraWxsSWNlX0R1cmF0aW9uOiBudW1iZXIgPSA4O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaWNlX0Nvb2xEb3duVGltZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2tpbGxJY2VfQ29vbERvd25UaW1lIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGljZV9Db29sRG93blRpbWUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9Ta2lsbEljZV9Db29sRG93blRpbWUgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpY2VfRHVyYXRpb24oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsSWNlX0R1cmF0aW9uIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Ta2lsbEhpdF9Db29sRG93blRpbWU6IG51bWJlciA9IDU7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Ta2lsbEhpdF9Gb3JjZTogbnVtYmVyID0gODgwMDAwOyAvLyDljZXkvY1uL2NjbW0yIO+8iOeJm+mhvy9jb2Nvc+W5s+aWueWNleS9je+8iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaGl0X0ZvcmNlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9Ta2lsbEhpdF9Gb3JjZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBoaXRfQ29vbERvd25UaW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9Ta2lsbEhpdF9Db29sRG93blRpbWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgaGl0X0Nvb2xEb3duVGltZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1NraWxsSGl0X0Nvb2xEb3duVGltZSA9IHZhbHVlIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Ta2lsbEJvb21fQ29vbERvd25UaW1lOiBudW1iZXIgPSAzOTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGJvb21fQ29vbERvd25UaW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9Ta2lsbEJvb21fQ29vbERvd25UaW1lIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGJvb21fQ29vbERvd25UaW1lKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2tpbGxCb29tX0Nvb2xEb3duVGltZSA9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDorqHliIblmahcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1Njb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2NvcmUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1Njb3JlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2NvcmUgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBzY29yZV9hZGQodmFsdWU6IG51bWJlcikgeyB0aGlzLl9TY29yZSArPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBzY29yZV9zdWIodmFsdWU6IG51bWJlcikgeyB0aGlzLl9TY29yZSAtPSB2YWx1ZSB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9IaWdoU2Nyb2U6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBoaWdoU2NvcmUoKTogbnVtYmVyeyByZXR1cm4gdGhpcy5fSGlnaFNjcm9lIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGhpZ2hTY29yZSh2YWx1ZTpudW1iZXIpe3RoaXMuX0hpZ2hTY3JvZSA9IE1hdGgubWF4KHZhbHVlLHRoaXMuX0hpZ2hTY3JvZSl9XHJcblxyXG4gICAgLy8g5Zy65pmv5Lit5pyA5ZCO5LiA57uE5pa55Z2XXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9FbmRDdWJlR3JvdXA6IEJsb2NrR3JvdXAgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZW5kQ3ViZUdyb3VwKCk6IEJsb2NrR3JvdXAgeyByZXR1cm4gdGhpcy5fRW5kQ3ViZUdyb3VwIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGVuZEN1YmVHcm91cCh2YWx1ZTogQmxvY2tHcm91cCkgeyB0aGlzLl9FbmRDdWJlR3JvdXAgPSB2YWx1ZSB9XHJcblxyXG4gICAgLy8g6K6+5a6a5Y+C5pWw5a6a5LmJIOaIkeiupOS4uuaegemZkOmAn+W6puWkp+amguWcqDI1MOW3puWPs++8jOWGjeW/q+S6huWwseWPjeW6lOS4jei/h+adpeS6hu+8jOS4jei/h+eUseS6juWtmOWcqOiHquWKqOmYu+WKm++8jOaJgOS7peacgOe7iOmAn+W6puW+iOmavui+vuWIsDI1MFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2FtZVNwZWVkOiBudW1iZXIgPSAxMzA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lU3BlZWRfTXVsTWF4KCk6IG51bWJlciB7IHJldHVybiAyNTAgLSB0aGlzLl9HYW1lU3BlZWQ7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR2FtZVNwZWVkOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHYW1lU3BlZWQodmFsdWUpIHsgdGhpcy5fR2FtZVNwZWVkID0gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVBdXRvU3BlZWQoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCAtKCh0aGlzLmVuZEN1YmVHcm91cCA/ICh0aGlzLmVuZEN1YmVHcm91cC5ub2RlLnkgKyBjYy53aW5TaXplLmhlaWdodCAvIDIpIC8gY2Mud2luU2l6ZS5oZWlnaHQgOiAxKSAqIHRoaXMuR2FtZVNwZWVkKSwgMCk7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVWZWN0b3IoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCAtODAsIDApOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lQXV0b0RyYWcoKTogbnVtYmVyIHsgcmV0dXJuICh0aGlzLmVuZEN1YmVHcm91cCA/IDEgLSAodGhpcy5lbmRDdWJlR3JvdXAubm9kZS55ICsgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAvIGNjLndpblNpemUuaGVpZ2h0IDogMCkgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0N1YmVTcGVlZDogbnVtYmVyID0gOTUwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZVNwZWVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9DdWJlU3BlZWQ7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IEN1YmVTcGVlZCh2YWx1ZSkgeyB0aGlzLl9DdWJlU3BlZWQgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZVZlY3RvcigpOiBjYy5WZWMzIHsgcmV0dXJuIG5ldyBjYy5WZWMzKDAsIHRoaXMuX0N1YmVTcGVlZCwgMCk7IH1cclxuXHJcbiAgICAvLyDliLDlhbPljaHnmoTkuovku7bovazlj5FcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IFNraWxsRXZlbnQoZXZlbnQ6IHN0cmluZykgeyBjY3Z2LmZyaXN0U2NyaXB0W2V2ZW50XSgpOyB9XHJcblxyXG4gICAgLy8g572R5qC85oyH6ZKIXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HcmlkQ3VycmVudFBvaW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZEN1cnJlbnRQb2ludCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkQ3VycmVudFBvaW50KHZhbHVlKSB7IHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkQ3VycmVudFBvaW50VG9WZWMoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkQ3VycmVudFBvaW50LCAwKSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkUG9pbnRlcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCsrOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkUG9pbnRlcih2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ICs9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDnvZHmoLzlj4LmlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyaWRPcmlnaW5PZmZzZXQoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCBHcmlkQWJzb3JiLmdyaWQuZ3JpZFNpemUueSAvIDIgKyBjYy53aW5TaXplLmhlaWdodCAvIDIsIDApIH1cclxuICAgIC8vIOe9keagvOmpseWKqOWZqFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfTW92ZW1lbnQ6IFBhd25Nb3ZlbWVudCA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBtb3ZlbWVudCgpOiBQYXduTW92ZW1lbnQgeyByZXR1cm4gdGhpcy5fTW92ZW1lbnQgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgbW92ZW1lbnQodmFsdWU6IFBhd25Nb3ZlbWVudCkgeyB0aGlzLl9Nb3ZlbWVudCA9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDlhbPljaHoj5zljZXnlYzpnaLohJrmnKxcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX01lbnU6IE1lbnVMZXZlbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBtZW51KCk6IE1lbnVMZXZlbCB7IHJldHVybiB0aGlzLl9NZW51IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG1lbnUodmFsdWU6IE1lbnVMZXZlbCkgeyB0aGlzLl9NZW51ID0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOi1hOa6kOW4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU3F1YXJlKCk6IGNjLlByZWZhYiB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydTcXVhcmUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTcXVhcmVHcm91cCgpOiBjYy5QcmVmYWIgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnU3F1YXJlIE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfU3F1YXJlQnJlYWsoKTogY2MuUHJlZmFiIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ3NwbGludGVyaW5nJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRWZmZWN0X0Rlc3RvcnkoKTogY2MuUHJlZmFiIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ0Rlc3Ryb3kgRWZmZWN0IE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfQm9vbSgpOiBjYy5QcmVmYWIgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnQm9vbSBFZmZlY3QgTm9kZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9IaXQoKTogY2MuUHJlZmFiIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ0hpdCBFZmZlY3QgTm9kZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9JY2UoKTogY2MuUHJlZmFiIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ0ljZSBFZmZlY3QgTm9kZSddIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9iZ20oKTogY2MuQXVkaW9DbGlwIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsnYmdtJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfYnRubigpOiBjYy5BdWRpb0NsaXAgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWydidXR0b24nXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9idG55KCk6IGNjLkF1ZGlvQ2xpcCB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ2J1dHRvbl95ZXMnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9sb3NlKCk6IGNjLkF1ZGlvQ2xpcCB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ2xvc2UnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9ib29tKCk6IGNjLkF1ZGlvQ2xpcCB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ3Byb3BfYm9tYiddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2hpdCgpOiBjYy5BdWRpb0NsaXAgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWydwcm9wX2hpdCddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2ljZSgpOiBjYy5BdWRpb0NsaXAgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWydwcm9wX2ljZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX3Nob3QoKTogY2MuQXVkaW9DbGlwIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsnc2hvdCddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2RlczEoKTogY2MuQXVkaW9DbGlwIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsneGlhb2NodTEnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9kZXMyKCk6IGNjLkF1ZGlvQ2xpcCB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ3hpYW9jaHUyJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfZGVzMygpOiBjYy5BdWRpb0NsaXAgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWyd4aWFvY2h1MyddIH1cclxuICAgIFxyXG4gICAgLy8g6IOM5pmv6Z+z5LmQYnBt77yM55So5LqO6IqC5ouN5a+56b2Q77yM5aaC5p6c5rKh5pyJ5ZyobWVudeS4reeci+WIsOebuOWFs+S7o+eggeWwseWPr+S7peWIoOS6hlxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfYmdtX2JwbSgpIHsgcmV0dXJuIDE4MCB9XHJcbiAgICAvLyDmmK/lkKbpnZnpn7NcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX011dGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG11dGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9NdXRlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG11dGUodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fTXV0ZSA9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDotYTkuqfluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGJsb2NrTmFtZSgpIHsgcmV0dXJuICdCbG9jaycgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYmxvY2tHcm91cE5hbWUoKSB7IHJldHVybiAnQmxvY2tHcm91cCcgfVxyXG5cclxuXHJcbn0iXX0=