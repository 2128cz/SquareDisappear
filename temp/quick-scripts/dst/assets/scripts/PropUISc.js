
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PropUISc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a216NlfRtHvL+81yMCbNCN', 'PropUISc');
// scripts/PropUISc.ts

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
var GameSc_1 = require("./GameSc");
var BombEffectSc_1 = require("./BombEffectSc");
var IceEffectSc_1 = require("./IceEffectSc");
var IconCooldownSc_1 = require("./IconCooldownSc");
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PropUISc = /** @class */ (function (_super) {
    __extends(PropUISc, _super);
    function PropUISc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iceIcon = null;
        _this.ice_timer = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PropUISc.prototype.start = function () {
    };
    PropUISc.prototype.update = function (dt) {
        this.ice_timer -= dt;
        if (this.ice_timer <= 0) {
            this.getComponent(GameSc_1.default).g_movespeed_sc = 1;
        }
    };
    PropUISc.prototype.onclick_ice = function () {
        if (this.iceIcon.getComponent(IconCooldownSc_1.default).isCD()) {
            return;
        }
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 6);
        //应该播放一个效果
        this.getComponent(GameSc_1.default).g_movespeed_sc = 0.5;
        this.ice_timer = 10;
        var sc = this.getComponentInChildren(IceEffectSc_1.default);
        if (sc) {
            sc.node.active = true;
            sc.showIecEffect(this.ice_timer);
        }
        this.iceIcon.getComponent(IconCooldownSc_1.default).beginCD();
    };
    PropUISc.prototype.onclick_bomb = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 4);
        //应该播放一个效果
        var bricks = this.getComponent(GameSc_1.default).bricksLayer;
        for (var i = bricks.childrenCount - 1; i >= 0; i--) {
            var item = bricks.children[i];
            if (item.y < 1280 / 2) {
                item.removeFromParent(true);
            }
        }
        bricks.removeAllChildren(true);
        var sc = this.getComponentInChildren(BombEffectSc_1.default);
        if (sc) {
            sc.node.active = true;
        }
    };
    PropUISc.prototype.onclick_hit = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 5);
        //应该播放一个效果
        this.getComponent(GameSc_1.default).play_hit_effect();
        var gamesc = this.getComponent(GameSc_1.default);
        var target = gamesc.g_movespeed_sc;
        gamesc.g_movespeed_sc = -2;
        cc.Tween.stopAllByTarget(gamesc);
        cc.tween(gamesc).to(1, { g_movespeed_sc: target }, null).start();
    };
    __decorate([
        property(cc.Node)
    ], PropUISc.prototype, "iceIcon", void 0);
    PropUISc = __decorate([
        ccclass
    ], PropUISc);
    return PropUISc;
}(cc.Component));
exports.default = PropUISc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUHJvcFVJU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLCtDQUEwQztBQUMxQyw2Q0FBd0M7QUFDeEMsbURBQThDO0FBQzlDLGlDQUFnQztBQUkxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZEQztRQTFERyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBZ0J4QixlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQTBDbEIsQ0FBQztJQXhERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2xELE9BQU87U0FDVjtRQUNELGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQVcsQ0FBQyxDQUFBO1FBQ2pELElBQUksRUFBRSxFQUFFO1lBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFDRCwrQkFBWSxHQUFaO1FBQ0ksYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFVBQVU7UUFDVixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtTQUNKO1FBQ0QsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBWSxDQUFDLENBQUE7UUFDbEQsSUFBSSxFQUFFLEVBQUU7WUFDSixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ0QsOEJBQVcsR0FBWDtRQUNJLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNuQyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0lBekREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFIUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkQ1QjtJQUFELGVBQUM7Q0E3REQsQUE2REMsQ0E3RHFDLEVBQUUsQ0FBQyxTQUFTLEdBNkRqRDtrQkE3RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVNjIGZyb20gXCIuL0dhbWVTY1wiO1xyXG5pbXBvcnQgQm9tYkVmZmVjdFNjIGZyb20gXCIuL0JvbWJFZmZlY3RTY1wiO1xyXG5pbXBvcnQgSWNlRWZmZWN0U2MgZnJvbSBcIi4vSWNlRWZmZWN0U2NcIjtcclxuaW1wb3J0IEljb25Db29sZG93blNjIGZyb20gXCIuL0ljb25Db29sZG93blNjXCI7XHJcbmltcG9ydCB7IE1zZ2VyIH0gZnJvbSBcIi4vTXNnZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BVSVNjIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljZUljb246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmljZV90aW1lciAtPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5pY2VfdGltZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmdfbW92ZXNwZWVkX3NjID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpY2VfdGltZXIgPSAwO1xyXG4gICAgb25jbGlja19pY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWNlSWNvbi5nZXRDb21wb25lbnQoSWNvbkNvb2xkb3duU2MpLmlzQ0QoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgNik7XHJcbiAgICAgICAgLy/lupTor6Xmkq3mlL7kuIDkuKrmlYjmnpxcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmdfbW92ZXNwZWVkX3NjID0gMC41O1xyXG4gICAgICAgIHRoaXMuaWNlX3RpbWVyID0gMTA7XHJcbiAgICAgICAgbGV0IHNjID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKEljZUVmZmVjdFNjKVxyXG4gICAgICAgIGlmIChzYykge1xyXG4gICAgICAgICAgICBzYy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNjLnNob3dJZWNFZmZlY3QodGhpcy5pY2VfdGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmljZUljb24uZ2V0Q29tcG9uZW50KEljb25Db29sZG93blNjKS5iZWdpbkNEKCk7XHJcbiAgICB9XHJcbiAgICBvbmNsaWNrX2JvbWIoKSB7XHJcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCA0KTtcclxuICAgICAgICAvL+W6lOivpeaSreaUvuS4gOS4quaViOaenFxyXG4gICAgICAgIGxldCBicmlja3MgPSB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmJyaWNrc0xheWVyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBicmlja3MuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gYnJpY2tzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS55IDwgMTI4MCAvIDIpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmlja3MucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcbiAgICAgICAgbGV0IHNjID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKEJvbWJFZmZlY3RTYylcclxuICAgICAgICBpZiAoc2MpIHtcclxuICAgICAgICAgICAgc2Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uY2xpY2tfaGl0KCkge1xyXG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgNSk7XHJcbiAgICAgICAgLy/lupTor6Xmkq3mlL7kuIDkuKrmlYjmnpxcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLnBsYXlfaGl0X2VmZmVjdCgpO1xyXG4gICAgICAgIGxldCBnYW1lc2MgPSB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBnYW1lc2MuZ19tb3Zlc3BlZWRfc2M7XHJcbiAgICAgICAgZ2FtZXNjLmdfbW92ZXNwZWVkX3NjID0gLTI7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGdhbWVzYyk7XHJcbiAgICAgICAgY2MudHdlZW4oZ2FtZXNjKS50bygxLCB7IGdfbW92ZXNwZWVkX3NjOiB0YXJnZXQgfSwgbnVsbCkuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=