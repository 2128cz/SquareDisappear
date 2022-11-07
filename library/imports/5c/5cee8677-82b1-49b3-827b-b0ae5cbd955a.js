"use strict";
cc._RF.push(module, '5cee8Z3grFJs4J7sK5cvZVa', 'DelayDelSc');
// scripts/DelayDelSc.ts

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
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DelayDelSc = /** @class */ (function (_super) {
    __extends(DelayDelSc, _super);
    function DelayDelSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        _this.delayTime = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    DelayDelSc.prototype.onLoad = function () {
    };
    DelayDelSc.prototype.start = function () {
    };
    DelayDelSc.prototype.show = function () {
    };
    DelayDelSc.prototype.update = function (dt) {
        this.delayTime -= dt;
        if (this.delayTime <= 0) {
            this.node.removeFromParent();
            Msger_1.Msger.emit(Msger_1.Msger.on_Splintering_del, this.node);
        }
    };
    DelayDelSc = __decorate([
        ccclass
    ], DelayDelSc);
    return DelayDelSc;
}(cc.Component));
exports.default = DelayDelSc;

cc._RF.pop();