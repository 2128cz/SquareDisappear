
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/StartSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3bbcIsBr5HdokjPQ+I2p1/', 'StartSc');
// scripts/StartSc.ts

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
var WXManager_1 = require("./WXManager");
var SoundConctrollerSc_1 = require("./SoundConctrollerSc");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartUI = /** @class */ (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankUI = null;
        _this.serviceUI = null;
        _this.soudsFrame = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StartUI.prototype.start = function () {
    };
    // update (dt) {}
    StartUI.prototype.onclick_start = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_changeto_game);
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
    };
    StartUI.prototype.onclick_rank = function () {
        this.node.addChild(cc.instantiate(this.rankUI));
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
    };
    StartUI.prototype.onclick_sound = function (event) {
        Msger_1.Msger.emit(Msger_1.Msger.on_sound_muted);
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        event.target.getComponent(cc.Sprite).spriteFrame = this.soudsFrame[Number(SoundConctrollerSc_1.default.isMuted)];
    };
    StartUI.prototype.onclick_service = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        this.serviceUI.active = true;
    };
    StartUI.prototype.onclick_share = function () {
        WXManager_1.default.Instance.playerShare("share/share1", "来看看谁分数高");
    };
    __decorate([
        property(cc.Prefab)
    ], StartUI.prototype, "rankUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "serviceUI", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], StartUI.prototype, "soudsFrame", void 0);
    StartUI = __decorate([
        ccclass
    ], StartUI);
    return StartUI;
}(cc.Component));
exports.default = StartUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3RhcnRTYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDJEQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVDQztRQXBDRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFaEIsZ0JBQVUsR0FBcUIsRUFBRSxDQUFDOztJQWdDaEQsQ0FBQztJQTdCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLCtCQUFhLEdBQWI7UUFDSSxhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsOEJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCwrQkFBYSxHQUFiLFVBQWMsS0FBSztRQUNmLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLDRCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUNELGlDQUFlLEdBQWY7UUFDSSxhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFDRCwrQkFBYSxHQUFiO1FBQ0ksbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzsrQ0FDaUI7SUFQM0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXVDM0I7SUFBRCxjQUFDO0NBdkNELEFBdUNDLENBdkNvQyxFQUFFLENBQUMsU0FBUyxHQXVDaEQ7a0JBdkNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXNnZXIgfSBmcm9tIFwiLi9Nc2dlclwiO1xuaW1wb3J0IFdYTWFuYWdlciBmcm9tIFwiLi9XWE1hbmFnZXJcIjtcbmltcG9ydCBTb3VuZENvbmN0cm9sbGVyU2MgZnJvbSBcIi4vU291bmRDb25jdHJvbGxlclNjXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcmFua1VJOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNlcnZpY2VVSTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgcHJvdGVjdGVkIHNvdWRzRnJhbWU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbiAgICBvbmNsaWNrX3N0YXJ0KCkge1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX2NoYW5nZXRvX2dhbWUpO1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xuICAgIH1cbiAgICBvbmNsaWNrX3JhbmsoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZSh0aGlzLnJhbmtVSSkpO1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xuICAgIH1cbiAgICBvbmNsaWNrX3NvdW5kKGV2ZW50KSB7XG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fc291bmRfbXV0ZWQpO1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xuICAgICAgICBldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNvdWRzRnJhbWVbTnVtYmVyKFNvdW5kQ29uY3Ryb2xsZXJTYy5pc011dGVkKV07XG4gICAgfVxuICAgIG9uY2xpY2tfc2VydmljZSgpIHtcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCAxKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlVUkuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgb25jbGlja19zaGFyZSgpIHtcbiAgICAgICAgV1hNYW5hZ2VyLkluc3RhbmNlLnBsYXllclNoYXJlKFwic2hhcmUvc2hhcmUxXCIsIFwi5p2l55yL55yL6LCB5YiG5pWw6auYXCIpO1xuICAgIH1cbn1cbiJdfQ==