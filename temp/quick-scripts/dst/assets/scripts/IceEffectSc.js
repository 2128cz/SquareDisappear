
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/IceEffectSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSWNlRWZmZWN0U2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUErREM7UUE1REcsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBaUJ0QixjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQXNDekIsQ0FBQztJQXJERyx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDckMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQWlCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBaEMsSUFBSSxJQUFJLFNBQUE7WUFDVCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUN0QztTQUNKO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDMUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbEIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUNELEtBQWlCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBaEMsSUFBSSxJQUFJLFNBQUE7WUFDVCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNsQixTQUFTO2FBQ1o7WUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0o7UUFDRCxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUEzREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOytDQUNHO0lBUmIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQStEL0I7SUFBRCxrQkFBQztDQS9ERCxBQStEQyxDQS9Ed0MsRUFBRSxDQUFDLFNBQVMsR0ErRHBEO2tCQS9Eb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNlRWZmZWN0U2MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBpY2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBmcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljZVByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZnJhbWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHNwcml0ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcclxuICAgICAgICAgICAgc3ByaXRlLnggPSBNYXRoLnJhbmRvbSgpICogNzIwIC0gMzYwO1xyXG4gICAgICAgICAgICBzcHJpdGUueSA9IE1hdGgucmFuZG9tKCkgKiAxMjgwIC0gNjQwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICAgICAgICAgICAgc3ByaXRlW1wic3BlZWRcIl0gPSBNYXRoLnJhbmRvbSgpICogMTAwICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb3ZlcnRpbWUgPSAwO1xyXG4gICAgc2hvd0llY0VmZmVjdChvdmVydGltZSkge1xyXG4gICAgICAgIHRoaXMub3ZlcnRpbWUgPSBvdmVydGltZTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PSB0aGlzLmljZSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5ydW5BY3Rpb24oY2MuZmFkZVRvKDAuMywgMjAwKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pY2UucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwxMCwgMTApLFxyXG4gICAgICAgICAgICBjYy5mYWRlVG8oMCwgMClcclxuICAgICAgICApKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gdGhpcy5pY2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0ueSAtPSBkdCAqIGl0ZW1bXCJzcGVlZFwiXTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ueSA8PSAtMTI4MCAvIDIpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ueSA9IDEyODAgLyAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3ZlcnRpbWUgLT0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMub3ZlcnRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==