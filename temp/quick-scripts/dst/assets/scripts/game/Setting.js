
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
    // 设定参数定义
    Setting._GameSpeed = 300;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUVsRixXQUFXO0FBQ1g7SUFBQTtJQStCQSxDQUFDO0lBN0JHLHNCQUFrQixzQkFBVztRQUQ3QixTQUFTO2FBQ1QsY0FBMEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNyRCxzQkFBa0IsbUJBQVE7YUFBMUIsY0FBdUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRCxzQkFBa0Isb0JBQVM7YUFBM0IsY0FBd0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUVwRCxzQkFBa0IscUJBQVU7YUFBNUIsY0FBeUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUN0RCxzQkFBa0Isc0JBQVc7YUFBN0IsY0FBMEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUl2RCxzQkFBa0Isb0JBQVM7YUFBM0IsY0FBd0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNqRSxVQUE0QixLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FERTtJQUVqRSxzQkFBa0IscUJBQVU7YUFBNUIsY0FBMEMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR3ZGLHNCQUFrQixvQkFBUzthQUEzQixjQUF3QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ2pFLFVBQTRCLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQURFO0lBRWpFLHNCQUFrQixxQkFBVTthQUE1QixjQUEwQyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSXRGLHNCQUFrQiwyQkFBZ0I7YUFBbEMsY0FBK0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUEsQ0FBQyxDQUFDO2FBQzlFLFVBQW1DLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQzs7O09BREU7SUFFOUUsc0JBQWtCLGdDQUFxQjthQUF2QyxjQUFxRCxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDdkcsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQTBDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzVFLFVBQThCLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFBLENBQUMsQ0FBQzs7O09BREk7SUFJNUUsc0JBQWtCLGlCQUFNO1FBRHhCLFNBQVM7YUFDVCxjQUE2QixPQUFPLDJDQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDekUsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQWtDLE9BQU8sMkNBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQXJCbkYsU0FBUztJQUNRLGtCQUFVLEdBQVcsR0FBRyxDQUFDO0lBS3pCLGtCQUFVLEdBQVcsR0FBRyxDQUFDO0lBSzFDLE9BQU87SUFDVSx5QkFBaUIsR0FBVyxDQUFDLENBQUM7SUFVbkQsY0FBQztDQS9CRCxBQStCQyxJQUFBO2tCQS9Cb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tIFwiLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbFwiO1xyXG5pbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbi8vIOa4uOaIj+WbuuWumuWPguaVsOiuvuWumlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIHtcclxuICAgIC8vIOWfuuacrOW4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfUm93KCk6IG51bWJlciB7IHJldHVybiAxNTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Sb3cyKCk6IG51bWJlciB7IHJldHVybiAzMDsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIDE3NzsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV9IZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDsgfVxyXG5cclxuICAgIC8vIOiuvuWumuWPguaVsOWumuS5iVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2FtZVNwZWVkOiBudW1iZXIgPSAzMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0dhbWVTcGVlZDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgR2FtZVNwZWVkKHZhbHVlKSB7IHRoaXMuX0dhbWVTcGVlZCA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lVmVjdG9yKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgLXRoaXMuX0dhbWVTcGVlZCwgMCk7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9DdWJlU3BlZWQ6IG51bWJlciA9IDQwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQ3ViZVNwZWVkOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBDdWJlU3BlZWQodmFsdWUpIHsgdGhpcy5fQ3ViZVNwZWVkID0gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVWZWN0b3IoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9DdWJlU3BlZWQsIDApOyB9XHJcblxyXG4gICAgLy8g572R5qC85oyH6ZKIXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HcmlkQ3VycmVudFBvaW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZEN1cnJlbnRQb2ludCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkQ3VycmVudFBvaW50KHZhbHVlKSB7IHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkQ3VycmVudFBvaW50VG9WZWMoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkQ3VycmVudFBvaW50LCAwKSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkUG9pbnRlcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCsrOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkUG9pbnRlcih2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ICs9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDotYTmupDluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ1NxdWFyZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZUdyb3VwKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnU3F1YXJlIE5vZGUnXSB9XHJcbn0iXX0=