
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DynamicPanelClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f421fvcjy9HCrRL+vgHKjyG', 'DynamicPanelClass');
// scripts/base/class/DynamicPanelClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DynamicPanelClass = /** @class */ (function (_super) {
    __extends(DynamicPanelClass, _super);
    function DynamicPanelClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DynamicPanelClass.prototype.start = function () {
    };
    DynamicPanelClass = __decorate([
        ccclass
    ], DynamicPanelClass);
    return DynamicPanelClass;
}(DevelopersToolClass_1.default));
exports.default = DynamicPanelClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXER5bmFtaWNQYW5lbENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQyxxQ0FBbUI7SUFBbEU7O0lBWUEsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsaUNBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FZckM7SUFBRCx3QkFBQztDQVpELEFBWUMsQ0FaOEMsNkJBQW1CLEdBWWpFO2tCQVpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqjmgIHnqpflj6PnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IERldmVsb3BlcnNUb29sQ2xhc3MgZnJvbSAnLi9EZXZlbG9wZXJzVG9vbENsYXNzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNQYW5lbENsYXNzIGV4dGVuZHMgRGV2ZWxvcGVyc1Rvb2xDbGFzcyB7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==