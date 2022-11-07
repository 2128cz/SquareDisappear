
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BombEffectSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9tYkVmZmVjdFNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBaUNDO1FBOUJHLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBWXRCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUM7O0lBaUIzQixDQUFDO0lBNUJHLHdCQUF3QjtJQUV4Qiw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRTdCLENBQUM7SUFFRCw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUdELDZCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzNFO2dCQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNFO1NBQ0o7SUFDTCxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dEQUNHO0lBSGIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlDaEM7SUFBRCxtQkFBQztDQWpDRCxBQWlDQyxDQWpDeUMsRUFBRSxDQUFDLFNBQVMsR0FpQ3JEO2tCQWpDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9tYkVmZmVjdFNjIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIHByaXZhdGUgZnJhbWV0aW1lciA9IDA7XG4gICAgcHJpdmF0ZSBmcmFtZWluZGV4ID0gMDtcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWV0aW1lciArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1ldGltZXIgPj0gMC4wNSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1laW5kZXggPj0gdGhpcy5mcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZWluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJhbWVzW3RoaXMuZnJhbWVpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWV0aW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZWluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJhbWVzW3RoaXMuZnJhbWVpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=