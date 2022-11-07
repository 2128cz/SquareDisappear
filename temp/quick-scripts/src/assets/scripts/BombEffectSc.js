"use strict";
cc._RF.push(module, 'c1573qDWVRFVrHw7OBgbNdz', 'BombEffectSc');
// scripts/BombEffectSc.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BombEffectSc = /** @class */ (function (_super) {
    __extends(BombEffectSc, _super);
    function BombEffectSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frames = [];
        _this.frametimer = 0;
        _this.frameindex = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    BombEffectSc.prototype.onLoad = function () {
        this.node.active = false;
    };
    BombEffectSc.prototype.start = function () {
    };
    BombEffectSc.prototype.update = function (dt) {
        if (this.node.active) {
            this.frametimer += dt;
            if (this.frametimer >= 0.05) {
                if (this.frameindex >= this.frames.length) {
                    this.node.active = false;
                    this.frametimer = 0;
                    this.frameindex = 0;
                    this.getComponent(cc.Sprite).spriteFrame = this.frames[this.frameindex];
                }
                this.frametimer = 0;
                this.frameindex += 1;
                this.getComponent(cc.Sprite).spriteFrame = this.frames[this.frameindex];
            }
        }
    };
    __decorate([
        property([cc.SpriteFrame])
    ], BombEffectSc.prototype, "frames", void 0);
    BombEffectSc = __decorate([
        ccclass
    ], BombEffectSc);
    return BombEffectSc;
}(cc.Component));
exports.default = BombEffectSc;

cc._RF.pop();