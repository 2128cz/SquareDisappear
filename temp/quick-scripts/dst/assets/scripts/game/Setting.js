
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
        get: function () { return 15; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Height", {
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridCurrentPoint", {
        get: function () { return this._GridCurrentPoint; },
        set: function (value) { this._GridCurrentPoint = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridPointer", {
        get: function () { return this._GridCurrentPoint++; },
        set: function (value) { this._GridCurrentPoint += value; },
        enumerable: false,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFdBQVc7QUFDWDtJQUFBO0lBZUEsQ0FBQztJQWJHLHNCQUFrQixzQkFBVztRQUQ3QixTQUFTO2FBQ1QsY0FBa0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM3QyxzQkFBa0IsbUJBQVE7YUFBMUIsY0FBK0IsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMzQyxzQkFBa0Isb0JBQVM7YUFBM0IsY0FBZ0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM1QyxzQkFBa0IscUJBQVU7YUFBNUIsY0FBaUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM3QyxzQkFBa0Isc0JBQVc7YUFBN0IsY0FBa0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUc5QyxzQkFBa0IsMkJBQWdCO2FBQWxDLGNBQXVDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFBLENBQUMsQ0FBQzthQUN0RSxVQUFtQyxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUROO0lBRXRFLHNCQUFrQixzQkFBVzthQUE3QixjQUFrQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBLENBQUMsQ0FBQzthQUNuRSxVQUE4QixLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQURMO0lBSm5FLE9BQU87SUFDVSx5QkFBaUIsR0FBVyxDQUFDLENBQUM7SUFPbkQsY0FBQztDQWZELEFBZUMsSUFBQTtrQkFmb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOa4uOaIj+WbuuWumuWPguaVsOiuvuWumlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIHtcclxuICAgIC8vIOWfuuacrOW4uOmHj+WumuS5iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Db2x1bW4oKSB7IHJldHVybiA0OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdygpIHsgcmV0dXJuIDE1OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdzIoKSB7IHJldHVybiAzMDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV93aWR0aCgpIHsgcmV0dXJuIDE1OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX0hlaWdodCgpIHsgcmV0dXJuIDMwOyB9XHJcbiAgICAvLyDnvZHmoLzmjIfpkohcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dyaWRDdXJyZW50UG9pbnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkQ3VycmVudFBvaW50KCkgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkQ3VycmVudFBvaW50KHZhbHVlKSB7IHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkUG9pbnRlcigpIHsgcmV0dXJuIHRoaXMuX0dyaWRDdXJyZW50UG9pbnQrKyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkUG9pbnRlcih2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ICs9IHZhbHVlIH1cclxuXHJcbiAgICAvLyBcclxufSJdfQ==