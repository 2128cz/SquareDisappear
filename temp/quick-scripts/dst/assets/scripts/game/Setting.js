
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
    Setting._SkillIce_CoolDownTime = 8;
    Setting._SkillIce_Duration = 1;
    Setting._SkillHit_CoolDownTime = 5;
    Setting._SkillHit_Force = 1200;
    Setting._SkillBoom_CoolDownTime = 15;
    // 计分器
    Setting._Score = 0;
    // 场景中最后一组方块
    Setting._EndCubeGroup = null;
    // 设定参数定义
    Setting._GameSpeed = 100;
    Setting._CubeSpeed = 950;
    // 网格指针
    Setting._GridCurrentPoint = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixzREFBaUQ7QUFJakQsV0FBVztBQUNYLGNBQWM7QUFDZDs7R0FFRztBQUNIO0lBQUE7SUFxRkEsQ0FBQztJQW5GRyxzQkFBa0Isc0JBQVc7UUFEN0IsU0FBUzthQUNULGNBQTBDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDckQsc0JBQWtCLG1CQUFRO2FBQTFCLGNBQXVDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQWtCLG9CQUFTO2FBQTNCLGNBQXdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFcEQsc0JBQWtCLHFCQUFVO2FBQTVCLGNBQXlDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdEQsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQTBDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQWtCLHlCQUFjO2FBQWhDLGNBQTZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFeEQsc0JBQWtCLHdCQUFhO1FBRC9CLGNBQWM7YUFDZCxjQUE0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXhELHNCQUFrQixvQkFBUztRQUQzQiwwQkFBMEI7YUFDMUIsY0FBd0MsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRWhGLHNCQUFrQixrQkFBTztRQUR6QixNQUFNO2FBQ04sY0FBc0MsT0FBTyxTQUFTLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN4RCxzQkFBa0Isa0JBQU87YUFBekIsY0FBc0MsT0FBTyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUt2RCxzQkFBa0IsMkJBQWdCO2FBQWxDLGNBQStDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFBLENBQUMsQ0FBQzthQUNuRixVQUFtQyxLQUFhLElBQUksSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUROO0lBRW5GLHNCQUFrQix1QkFBWTthQUE5QixjQUEyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBSTNFLHNCQUFrQixvQkFBUzthQUEzQixjQUF3QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUNyRSxzQkFBa0IsMkJBQWdCO2FBQWxDLGNBQStDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFBLENBQUMsQ0FBQzthQUNuRixVQUFtQyxLQUFhLElBQUksSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUROO0lBSW5GLHNCQUFrQiw0QkFBaUI7YUFBbkMsY0FBZ0QsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUEsQ0FBQyxDQUFDO2FBQ3JGLFVBQW9DLEtBQWEsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQzs7O09BRE47SUFLckYsc0JBQWtCLGdCQUFLO2FBQXZCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7YUFDeEQsVUFBd0IsS0FBYSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQzs7O09BRE47SUFFeEQsc0JBQWtCLG9CQUFTO2FBQTNCLFVBQTRCLEtBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ25FLHNCQUFrQixvQkFBUzthQUEzQixVQUE0QixLQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUluRSxzQkFBa0IsdUJBQVk7YUFBOUIsY0FBK0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBLENBQUMsQ0FBQzthQUMxRSxVQUErQixLQUFpQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQzs7O09BRE47SUFLMUUsc0JBQWtCLG9CQUFTO2FBQTNCLGNBQXdDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDakUsVUFBNEIsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BREU7SUFFakUsc0JBQWtCLHFCQUFVO2FBQTVCLGNBQTBDLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUd2RixzQkFBa0Isb0JBQVM7YUFBM0IsY0FBd0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNqRSxVQUE0QixLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FERTtJQUVqRSxzQkFBa0IscUJBQVU7YUFBNUIsY0FBMEMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUV0RixzQkFBa0IscUJBQVU7UUFENUIsV0FBVzthQUNYLFVBQTZCLEtBQWEsSUFBSSwyQ0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFHMUUsc0JBQWtCLDJCQUFnQjthQUFsQyxjQUErQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQSxDQUFDLENBQUM7YUFDOUUsVUFBbUMsS0FBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FERTtJQUU5RSxzQkFBa0IsZ0NBQXFCO2FBQXZDLGNBQXFELE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN2RyxzQkFBa0Isc0JBQVc7YUFBN0IsY0FBMEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDNUUsVUFBOEIsS0FBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FESTtJQUk1RSxzQkFBa0IsMkJBQWdCO1FBRGxDLE9BQU87YUFDUCxjQUFnRCxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsb0JBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFJbEksc0JBQWtCLGVBQUk7YUFBdEIsY0FBc0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQzthQUN6RCxVQUF1QixLQUFnQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQzs7O09BRE47SUFJekQsc0JBQWtCLGlCQUFNO1FBRHhCLFNBQVM7YUFDVCxjQUE2QixPQUFPLDJDQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDekUsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQWtDLE9BQU8sMkNBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRixzQkFBa0IsNkJBQWtCO2FBQXBDLGNBQXlDLE9BQU8sMkNBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUMxRixzQkFBa0IseUJBQWM7YUFBaEMsY0FBcUMsT0FBTywyQ0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFHOUYsc0JBQWtCLG9CQUFTO1FBRDNCLFNBQVM7YUFDVCxjQUFnQyxPQUFPLE9BQU8sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ2hELHNCQUFrQix5QkFBYzthQUFoQyxjQUFxQyxPQUFPLFlBQVksQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBakUxRCxPQUFPO0lBQ1UsOEJBQXNCLEdBQVcsQ0FBQyxDQUFDO0lBQ25DLDBCQUFrQixHQUFXLENBQUMsQ0FBQztJQUsvQiw4QkFBc0IsR0FBVyxDQUFDLENBQUM7SUFDbkMsdUJBQWUsR0FBVyxJQUFJLENBQUM7SUFLL0IsK0JBQXVCLEdBQVcsRUFBRSxDQUFDO0lBSXRELE1BQU07SUFDVyxjQUFNLEdBQVcsQ0FBQyxDQUFDO0lBTXBDLFlBQVk7SUFDSyxxQkFBYSxHQUFlLElBQUksQ0FBQztJQUlsRCxTQUFTO0lBQ1Esa0JBQVUsR0FBVyxHQUFHLENBQUM7SUFLekIsa0JBQVUsR0FBVyxHQUFHLENBQUM7SUFNMUMsT0FBTztJQUNVLHlCQUFpQixHQUFXLENBQUMsQ0FBQztJQVUvQyxXQUFXO0lBQ00sYUFBSyxHQUFjLElBQUksQ0FBQztJQWU3QyxjQUFDO0NBckZELEFBcUZDLElBQUE7a0JBckZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gXCIuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IEJsb2NrR3JvdXAgZnJvbSBcIi4vQmxvY2tHcm91cFwiO1xyXG5pbXBvcnQgR2FtZUxldmVsIGZyb20gXCIuL0dhbWVMZXZlbFwiO1xyXG5pbXBvcnQgTWVudUxldmVsIGZyb20gXCIuL01lbnVMZXZlbFwiO1xyXG4vLyDmuLjmiI/lm7rlrprlj4LmlbDorr7lrppcclxuLy8g55So5rOV5a6a5L2NIOexu+S8vOS6juWuj+i9rOS5iVxyXG4vKipcclxuICog6L+Z6YeM5a6a5LmJ5Z+65pys55qE5YWo5bGA5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIHtcclxuICAgIC8vIOWfuuacrOW4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfUm93KCk6IG51bWJlciB7IHJldHVybiAxNTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Sb3cyKCk6IG51bWJlciB7IHJldHVybiAxNTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIDE3NzsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV9IZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV9JbnRlcmF2YWwoKTogbnVtYmVyIHsgcmV0dXJuIDM7IH1cclxuICAgIC8vIOaWueWdl+WcqOmihOWItuS9k+S4reeahHnlnZDmoIdcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfUGVyZmFiX1koKTogbnVtYmVyIHsgcmV0dXJuIDUwOyB9XHJcbiAgICAvLyDlupXpg6jmiKrmraLnur/vvIznlKjkuo7nlJ/miJDmlrnlnZfkvY3nva7lkozliKTmlq3mmK/lkKbnu5PmnZ/muLjmiI9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNlcGFyYXRvcigpOiBudW1iZXIgeyByZXR1cm4gY2Mud2luU2l6ZS5oZWlnaHQgKiAoLjE3IC0gLjUpOyB9XHJcbiAgICAvLyDnorDmkp7nu4RcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyb3VwXzAoKTogc3RyaW5nIHsgcmV0dXJuICdkZWZhdWx0JyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcm91cF8xKCk6IHN0cmluZyB7IHJldHVybiAncGxheWVyJyB9XHJcblxyXG4gICAgLy8g5oqA6IO96K6+5a6aXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Ta2lsbEljZV9Db29sRG93blRpbWU6IG51bWJlciA9IDg7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Ta2lsbEljZV9EdXJhdGlvbjogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGljZV9Db29sRG93blRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsSWNlX0Nvb2xEb3duVGltZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBpY2VfQ29vbERvd25UaW1lKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2tpbGxJY2VfQ29vbERvd25UaW1lID0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaWNlX0R1cmF0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9Ta2lsbEljZV9EdXJhdGlvbiB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxIaXRfQ29vbERvd25UaW1lOiBudW1iZXIgPSA1O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxIaXRfRm9yY2U6IG51bWJlciA9IDEyMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBoaXRfRm9yY2UoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsSGl0X0ZvcmNlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGhpdF9Db29sRG93blRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsSGl0X0Nvb2xEb3duVGltZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBoaXRfQ29vbERvd25UaW1lKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2tpbGxIaXRfQ29vbERvd25UaW1lID0gdmFsdWUgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NraWxsQm9vbV9Db29sRG93blRpbWU6IG51bWJlciA9IDE1O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYm9vbV9Db29sRG93blRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsQm9vbV9Db29sRG93blRpbWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgYm9vbV9Db29sRG93blRpbWUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9Ta2lsbEJvb21fQ29vbERvd25UaW1lID0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOiuoeWIhuWZqFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY29yZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2NvcmUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NvcmUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9TY29yZSA9IHZhbHVlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNjb3JlX2FkZCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1Njb3JlICs9IHZhbHVlIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNjb3JlX3N1Yih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1Njb3JlIC09IHZhbHVlIH1cclxuXHJcbiAgICAvLyDlnLrmma/kuK3mnIDlkI7kuIDnu4TmlrnlnZdcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0VuZEN1YmVHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBlbmRDdWJlR3JvdXAoKTogQmxvY2tHcm91cCB7IHJldHVybiB0aGlzLl9FbmRDdWJlR3JvdXAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgZW5kQ3ViZUdyb3VwKHZhbHVlOiBCbG9ja0dyb3VwKSB7IHRoaXMuX0VuZEN1YmVHcm91cCA9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDorr7lrprlj4LmlbDlrprkuYlcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dhbWVTcGVlZDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZVNwZWVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9HYW1lU3BlZWQ7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IEdhbWVTcGVlZCh2YWx1ZSkgeyB0aGlzLl9HYW1lU3BlZWQgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZVZlY3RvcigpOiBjYy5WZWMzIHsgcmV0dXJuIG5ldyBjYy5WZWMzKDAsIC10aGlzLl9HYW1lU3BlZWQsIDApOyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfQ3ViZVNwZWVkOiBudW1iZXIgPSA5NTA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0N1YmVTcGVlZDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgQ3ViZVNwZWVkKHZhbHVlKSB7IHRoaXMuX0N1YmVTcGVlZCA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlVmVjdG9yKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgdGhpcy5fQ3ViZVNwZWVkLCAwKTsgfVxyXG4gICAgLy8g5Yiw5YWz5Y2h55qE5LqL5Lu26L2s5Y+RXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBTa2lsbEV2ZW50KGV2ZW50OiBzdHJpbmcpIHsgY2N2di5mcmlzdFNjcmlwdFtldmVudF0oKTsgfVxyXG4gICAgLy8g572R5qC85oyH6ZKIXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HcmlkQ3VycmVudFBvaW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZEN1cnJlbnRQb2ludCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkQ3VycmVudFBvaW50KHZhbHVlKSB7IHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkQ3VycmVudFBvaW50VG9WZWMoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkQ3VycmVudFBvaW50LCAwKSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkUG9pbnRlcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCsrOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkUG9pbnRlcih2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ICs9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDnvZHmoLzlj4LmlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyaWRPcmlnaW5PZmZzZXQoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCBHcmlkQWJzb3JiLmdyaWQuZ3JpZFNpemUueSAvIDIgKyBjYy53aW5TaXplLmhlaWdodCAvIDIsIDApIH1cclxuXHJcbiAgICAvLyDlhbPljaHoj5zljZXnlYzpnaLohJrmnKxcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX01lbnU6IE1lbnVMZXZlbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBtZW51KCk6IE1lbnVMZXZlbCB7IHJldHVybiB0aGlzLl9NZW51IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG1lbnUodmFsdWU6IE1lbnVMZXZlbCkgeyB0aGlzLl9NZW51ID0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOi1hOa6kOW4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU3F1YXJlKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnU3F1YXJlJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU3F1YXJlR3JvdXAoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydTcXVhcmUgTm9kZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9TcXVhcmVCcmVhaygpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ3NwbGludGVyaW5nJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRWZmZWN0X0Rlc3RvcnkoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydEZXN0cm95IEVmZmVjdCBOb2RlJ10gfVxyXG5cclxuICAgIC8vIOi1hOS6p+W4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYmxvY2tOYW1lKCkgeyByZXR1cm4gJ0Jsb2NrJyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBibG9ja0dyb3VwTmFtZSgpIHsgcmV0dXJuICdCbG9ja0dyb3VwJyB9XHJcblxyXG5cclxufSJdfQ==