
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/effect/GetGameScroe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b0373v6qpDlLsI3tMgS2qB', 'GetGameScroe');
// scripts/game/effect/GetGameScroe.ts

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
var Setting_1 = require("../Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.animationTime = .6;
        _this.randomPositionRange = 50;
        // tag 用户参数 
        _this.score = Setting_1.default.score;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.opacity = 100;
        this.numberLabelUpdate();
    };
    NewClass.prototype.update = function (dt) {
        if (this.score != Setting_1.default.score) {
            this.score = Setting_1.default.score;
            this.numberUpdate();
            this.numberLabelUpdate();
        }
    };
    // tag 用户方法 
    /**
     * 更新一次数值上的动画
     */
    NewClass.prototype.numberUpdate = function () {
        cc.Tween.stopAll();
        cc.tween(this.node)
            .to(.06, { scale: 1.2, x: 0, y: 0, opacity: 255 }, { easing: 'cubicIn' })
            .to(this.animationTime, { scale: 1, x: Math.random() * this.randomPositionRange, y: Math.random() * this.randomPositionRange }, { easing: 'quintOut' })
            .to(1, { opacity: 100 }, { easing: 'quadIn' })
            .start();
    };
    NewClass.prototype.numberLabelUpdate = function () {
        this.scroeLabel.string = String(this.score);
    };
    Object.defineProperty(NewClass.prototype, "scroeLabel", {
        get: function () { return this.label.getComponent(cc.Label); },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Float)
    ], NewClass.prototype, "animationTime", void 0);
    __decorate([
        property(cc.Float)
    ], NewClass.prototype, "randomPositionRange", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZWZmZWN0XFxHZXRHYW1lU2Nyb2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0RDO1FBakRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0IseUJBQW1CLEdBQVcsRUFBRSxDQUFDO1FBc0NqQyxZQUFZO1FBRUYsV0FBSyxHQUFHLGlCQUFFLENBQUMsS0FBSyxDQUFDOztJQUcvQixDQUFDO0lBeENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksaUJBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBRSxDQUFDLEtBQUssQ0FBQTtZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsWUFBWTtJQUVaOztPQUVHO0lBQ0gsK0JBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUN4RSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUN0SixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzdDLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFLRCxzQkFBYyxnQ0FBVTthQUF4QixjQUE2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBL0N2RTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDYztJQVRoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0Q1QjtJQUFELGVBQUM7Q0FwREQsQUFvREMsQ0FwRHFDLEVBQUUsQ0FBQyxTQUFTLEdBb0RqRDtrQkFwRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3MgZnJvbSBcIi4uL1NldHRpbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBhbmltYXRpb25UaW1lOiBudW1iZXIgPSAuNjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICByYW5kb21Qb3NpdGlvblJhbmdlOiBudW1iZXIgPSA1MDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5udW1iZXJMYWJlbFVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlICE9IHNzLnNjb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBzcy5zY29yZVxyXG4gICAgICAgICAgICB0aGlzLm51bWJlclVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm51bWJlckxhYmVsVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLfmlrnms5UgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDkuIDmrKHmlbDlgLzkuIrnmoTliqjnlLtcclxuICAgICAqL1xyXG4gICAgbnVtYmVyVXBkYXRlKCkge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGwoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byguMDYsIHsgc2NhbGU6IDEuMiwgeDogMCwgeTogMCwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiAnY3ViaWNJbicgfSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuYW5pbWF0aW9uVGltZSwgeyBzY2FsZTogMSwgeDogTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9tUG9zaXRpb25SYW5nZSwgeTogTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9tUG9zaXRpb25SYW5nZSB9LCB7IGVhc2luZzogJ3F1aW50T3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAxMDAgfSwgeyBlYXNpbmc6ICdxdWFkSW4nIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgbnVtYmVyTGFiZWxVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvZUxhYmVsLnN0cmluZyA9IFN0cmluZyh0aGlzLnNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Y+C5pWwIFxyXG5cclxuICAgIHByb3RlY3RlZCBzY29yZSA9IHNzLnNjb3JlO1xyXG4gICAgcHJvdGVjdGVkIGdldCBzY3JvZUxhYmVsKCkgeyByZXR1cm4gdGhpcy5sYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpIH1cclxuXHJcbn1cclxuIl19