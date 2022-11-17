"use strict";
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