"use strict";
cc._RF.push(module, '55b63nP1oFO8qOyyxk/x9oZ', 'IceEffectSc');
// scripts/IceEffectSc.ts

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
var IceEffectSc = /** @class */ (function (_super) {
    __extends(IceEffectSc, _super);
    function IceEffectSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icePrefab = null;
        _this.ice = null;
        _this.frames = [];
        _this.overtime = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    IceEffectSc.prototype.onLoad = function () {
        for (var i = 0; i < 20; i++) {
            var sprite = cc.instantiate(this.icePrefab);
            var frame = this.frames.shift();
            sprite.getComponent(cc.Sprite).spriteFrame = frame;
            this.frames.push(frame);
            sprite.x = Math.random() * 720 - 360;
            sprite.y = Math.random() * 1280 - 640;
            this.node.addChild(sprite);
            sprite["speed"] = Math.random() * 100 + 50;
        }
        this.node.active = false;
    };
    IceEffectSc.prototype.showIecEffect = function (overtime) {
        this.overtime = overtime;
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == this.ice) {
                item.scale = 0.01;
                item.opacity = 255;
            }
            else {
                item.opacity = 0;
                item.runAction(cc.fadeTo(0.3, 200));
            }
        }
        this.ice.runAction(cc.sequence(cc.scaleTo(0.2, 10, 10), cc.fadeTo(0, 0)));
    };
    IceEffectSc.prototype.update = function (dt) {
        if (!this.node.active) {
            return;
        }
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == this.ice) {
                continue;
            }
            item.y -= dt * item["speed"];
            if (item.y <= -1280 / 2) {
                item.y = 1280 / 2;
            }
        }
        this.overtime -= dt;
        if (this.overtime <= 0) {
            this.node.active = false;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], IceEffectSc.prototype, "icePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], IceEffectSc.prototype, "ice", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], IceEffectSc.prototype, "frames", void 0);
    IceEffectSc = __decorate([
        ccclass
    ], IceEffectSc);
    return IceEffectSc;
}(cc.Component));
exports.default = IceEffectSc;

cc._RF.pop();