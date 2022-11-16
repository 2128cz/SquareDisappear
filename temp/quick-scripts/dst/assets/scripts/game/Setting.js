
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixzREFBaUQ7QUFLakQsV0FBVztBQUNYLGNBQWM7QUFDZDs7R0FFRztBQUNIO0lBQUE7SUFtR0EsQ0FBQztJQWpHRyxzQkFBa0Isc0JBQVc7UUFEN0IsU0FBUzthQUNULGNBQTBDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDckQsc0JBQWtCLG1CQUFRO2FBQTFCLGNBQXVDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQWtCLG9CQUFTO2FBQTNCLGNBQXdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFcEQsc0JBQWtCLHFCQUFVO2FBQTVCLGNBQXlDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdEQsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQTBDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQWtCLHlCQUFjO2FBQWhDLGNBQTZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFHeEQsc0JBQWtCLHdCQUFhO1FBRC9CLGNBQWM7YUFDZCxjQUE0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFrQixvQkFBUztRQUQzQiwwQkFBMEI7YUFDMUIsY0FBd0MsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR2hGLHNCQUFrQixrQkFBTztRQUR6QixNQUFNO2FBQ04sY0FBc0MsT0FBTyxTQUFTLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN4RCxzQkFBa0Isa0JBQU87YUFBekIsY0FBc0MsT0FBTyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7T0FB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QSxDQUFDLENBQUM7OztPQUFBO0lBQ3hGLHNCQUFrQixxQkFBVTthQUE1QixjQUFpQyxPQUFPLDJDQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN0RixzQkFBa0IscUJBQVU7YUFBNUIsY0FBaUMsT0FBTywyQ0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFHdEYsc0JBQWtCLG9CQUFTO1FBRDNCLFNBQVM7YUFDVCxjQUFnQyxPQUFPLE9BQU8sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ2hELHNCQUFrQix5QkFBYzthQUFoQyxjQUFxQyxPQUFPLFlBQVksQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBNUUxRCxPQUFPO0lBQ1UsOEJBQXNCLEdBQVcsRUFBRSxDQUFDO0lBQ3BDLDBCQUFrQixHQUFXLENBQUMsQ0FBQztJQUsvQiw4QkFBc0IsR0FBVyxDQUFDLENBQUM7SUFDbkMsdUJBQWUsR0FBVyxNQUFNLENBQUMsQ0FBQywyQkFBMkI7SUFLN0QsK0JBQXVCLEdBQVcsRUFBRSxDQUFDO0lBSXRELE1BQU07SUFDVyxjQUFNLEdBQVcsQ0FBQyxDQUFDO0lBTXBDLFlBQVk7SUFDSyxxQkFBYSxHQUFlLElBQUksQ0FBQztJQUlsRCxTQUFTO0lBQ1Esa0JBQVUsR0FBVyxHQUFHLENBQUM7SUFPekIsa0JBQVUsR0FBVyxHQUFHLENBQUM7SUFRMUMsT0FBTztJQUNVLHlCQUFpQixHQUFXLENBQUMsQ0FBQztJQVMvQyxRQUFRO0lBQ1MsaUJBQVMsR0FBaUIsSUFBSSxDQUFDO0lBSWhELFdBQVc7SUFDTSxhQUFLLEdBQWMsSUFBSSxDQUFDO0lBa0I3QyxjQUFDO0NBbkdELEFBbUdDLElBQUE7a0JBbkdvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gXCIuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IFBhd25Nb3ZlbWVudCBmcm9tIFwiLi4vYmFzZS90b29sL1Bhd25Nb3ZlbWVudFwiO1xyXG5pbXBvcnQgQmxvY2tHcm91cCBmcm9tIFwiLi9CbG9ja0dyb3VwXCI7XHJcbmltcG9ydCBHYW1lTGV2ZWwgZnJvbSBcIi4vR2FtZUxldmVsXCI7XHJcbmltcG9ydCBNZW51TGV2ZWwgZnJvbSBcIi4vTWVudUxldmVsXCI7XHJcbi8vIOa4uOaIj+WbuuWumuWPguaVsOiuvuWumlxyXG4vLyDnlKjms5XlrprkvY0g57G75Ly85LqO5a6P6L2s5LmJXHJcbi8qKlxyXG4gKiDov5nph4zlrprkuYnln7rmnKznmoTlhajlsYDlj4LmlbBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcge1xyXG4gICAgLy8g5Z+65pys5bi46YeP5a6a5LmJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX0NvbHVtbigpOiBudW1iZXIgeyByZXR1cm4gNDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Sb3coKTogbnVtYmVyIHsgcmV0dXJuIDE1OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdzIoKTogbnVtYmVyIHsgcmV0dXJuIDMwOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV93aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gMTc3OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX0hlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gMTAwOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX0ludGVyYXZhbCgpOiBudW1iZXIgeyByZXR1cm4gMzsgfVxyXG5cclxuICAgIC8vIOaWueWdl+WcqOmihOWItuS9k+S4reeahHnlnZDmoIdcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfUGVyZmFiX1koKTogbnVtYmVyIHsgcmV0dXJuIDUwOyB9XHJcblxyXG4gICAgLy8g5bqV6YOo5oiq5q2i57q/77yM55So5LqO55Sf5oiQ5pa55Z2X5L2N572u5ZKM5Yik5pat5piv5ZCm57uT5p2f5ri45oiPXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTZXBhcmF0b3IoKTogbnVtYmVyIHsgcmV0dXJuIGNjLndpblNpemUuaGVpZ2h0ICogKC4xNyAtIC41KTsgfVxyXG5cclxuICAgIC8vIOeisOaSnue7hFxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JvdXBfMCgpOiBzdHJpbmcgeyByZXR1cm4gJ2RlZmF1bHQnIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyb3VwXzEoKTogc3RyaW5nIHsgcmV0dXJuICdwbGF5ZXInIH1cclxuXHJcbiAgICAvLyDmioDog73orr7lrppcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NraWxsSWNlX0Nvb2xEb3duVGltZTogbnVtYmVyID0gMTU7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Ta2lsbEljZV9EdXJhdGlvbjogbnVtYmVyID0gODtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGljZV9Db29sRG93blRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsSWNlX0Nvb2xEb3duVGltZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBpY2VfQ29vbERvd25UaW1lKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2tpbGxJY2VfQ29vbERvd25UaW1lID0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaWNlX0R1cmF0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9Ta2lsbEljZV9EdXJhdGlvbiB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxIaXRfQ29vbERvd25UaW1lOiBudW1iZXIgPSA1O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxIaXRfRm9yY2U6IG51bWJlciA9IDg4MDAwMDsgLy8g5Y2V5L2Nbi9jY21tMiDvvIjniZvpob8vY29jb3PlubPmlrnljZXkvY3vvIlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGhpdF9Gb3JjZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2tpbGxIaXRfRm9yY2UgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaGl0X0Nvb2xEb3duVGltZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2tpbGxIaXRfQ29vbERvd25UaW1lIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGhpdF9Db29sRG93blRpbWUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9Ta2lsbEhpdF9Db29sRG93blRpbWUgPSB2YWx1ZSB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxCb29tX0Nvb2xEb3duVGltZTogbnVtYmVyID0gMzk7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBib29tX0Nvb2xEb3duVGltZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2tpbGxCb29tX0Nvb2xEb3duVGltZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBib29tX0Nvb2xEb3duVGltZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1NraWxsQm9vbV9Db29sRG93blRpbWUgPSB2YWx1ZSB9XHJcblxyXG4gICAgLy8g6K6h5YiG5ZmoXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9TY29yZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNjb3JlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9TY29yZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBzY29yZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1Njb3JlID0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NvcmVfYWRkKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2NvcmUgKz0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NvcmVfc3ViKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2NvcmUgLT0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOWcuuaZr+S4reacgOWQjuS4gOe7hOaWueWdl1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfRW5kQ3ViZUdyb3VwOiBCbG9ja0dyb3VwID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGVuZEN1YmVHcm91cCgpOiBCbG9ja0dyb3VwIHsgcmV0dXJuIHRoaXMuX0VuZEN1YmVHcm91cCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBlbmRDdWJlR3JvdXAodmFsdWU6IEJsb2NrR3JvdXApIHsgdGhpcy5fRW5kQ3ViZUdyb3VwID0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOiuvuWumuWPguaVsOWumuS5iVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2FtZVNwZWVkOiBudW1iZXIgPSAxMjA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0dhbWVTcGVlZDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgR2FtZVNwZWVkKHZhbHVlKSB7IHRoaXMuX0dhbWVTcGVlZCA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lQXV0b1NwZWVkKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgLSgodGhpcy5lbmRDdWJlR3JvdXAgPyAodGhpcy5lbmRDdWJlR3JvdXAubm9kZS55ICsgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAvIGNjLndpblNpemUuaGVpZ2h0IDogMSkgKiB0aGlzLkdhbWVTcGVlZCksIDApOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lVmVjdG9yKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgLTgwLCAwKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZUF1dG9EcmFnKCk6IG51bWJlciB7IHJldHVybiAodGhpcy5lbmRDdWJlR3JvdXAgPyAxIC0gKHRoaXMuZW5kQ3ViZUdyb3VwLm5vZGUueSArIGNjLndpblNpemUuaGVpZ2h0IC8gMikgLyBjYy53aW5TaXplLmhlaWdodCA6IDApIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9DdWJlU3BlZWQ6IG51bWJlciA9IDk1MDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQ3ViZVNwZWVkOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBDdWJlU3BlZWQodmFsdWUpIHsgdGhpcy5fQ3ViZVNwZWVkID0gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVWZWN0b3IoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9DdWJlU3BlZWQsIDApOyB9XHJcblxyXG4gICAgLy8g5Yiw5YWz5Y2h55qE5LqL5Lu26L2s5Y+RXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBTa2lsbEV2ZW50KGV2ZW50OiBzdHJpbmcpIHsgY2N2di5mcmlzdFNjcmlwdFtldmVudF0oKTsgfVxyXG5cclxuICAgIC8vIOe9keagvOaMh+mSiFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR3JpZEN1cnJlbnRQb2ludDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyaWRDdXJyZW50UG9pbnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgR3JpZEN1cnJlbnRQb2ludCh2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ID0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZEN1cnJlbnRQb2ludFRvVmVjKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgdGhpcy5fR3JpZEN1cnJlbnRQb2ludCwgMCkgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZFBvaW50ZXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0dyaWRDdXJyZW50UG9pbnQrKzsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgR3JpZFBvaW50ZXIodmFsdWUpIHsgdGhpcy5fR3JpZEN1cnJlbnRQb2ludCArPSB2YWx1ZSB9XHJcblxyXG4gICAgLy8g572R5qC85Y+C5pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkT3JpZ2luT2Zmc2V0KCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgR3JpZEFic29yYi5ncmlkLmdyaWRTaXplLnkgLyAyICsgY2Mud2luU2l6ZS5oZWlnaHQgLyAyLCAwKSB9XHJcbiAgICAvLyDnvZHmoLzpqbHliqjlmahcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX01vdmVtZW50OiBQYXduTW92ZW1lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbW92ZW1lbnQoKTogUGF3bk1vdmVtZW50IHsgcmV0dXJuIHRoaXMuX01vdmVtZW50IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG1vdmVtZW50KHZhbHVlOiBQYXduTW92ZW1lbnQpIHsgdGhpcy5fTW92ZW1lbnQgPSB2YWx1ZSB9XHJcblxyXG4gICAgLy8g5YWz5Y2h6I+c5Y2V55WM6Z2i6ISa5pysXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9NZW51OiBNZW51TGV2ZWwgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbWVudSgpOiBNZW51TGV2ZWwgeyByZXR1cm4gdGhpcy5fTWVudSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBtZW51KHZhbHVlOiBNZW51TGV2ZWwpIHsgdGhpcy5fTWVudSA9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDotYTmupDluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ1NxdWFyZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZUdyb3VwKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnU3F1YXJlIE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfU3F1YXJlQnJlYWsoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydzcGxpbnRlcmluZyddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9EZXN0b3J5KCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnRGVzdHJveSBFZmZlY3QgTm9kZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9Cb29tKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnQm9vbSBFZmZlY3QgTm9kZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9IaXQoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydIaXQgRWZmZWN0IE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfSWNlKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnSWNlIEVmZmVjdCBOb2RlJ10gfVxyXG5cclxuICAgIC8vIOi1hOS6p+W4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYmxvY2tOYW1lKCkgeyByZXR1cm4gJ0Jsb2NrJyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBibG9ja0dyb3VwTmFtZSgpIHsgcmV0dXJuICdCbG9ja0dyb3VwJyB9XHJcblxyXG5cclxufSJdfQ==