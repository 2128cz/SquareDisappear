
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SoundConctrollerSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1cfaRJGtlIQLWFFIvWbruH', 'SoundConctrollerSc');
// scripts/SoundConctrollerSc.ts

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
var SoundConctrollerSc = /** @class */ (function (_super) {
    __extends(SoundConctrollerSc, _super);
    function SoundConctrollerSc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoundConctrollerSc_1 = SoundConctrollerSc;
    SoundConctrollerSc.prototype.onLoad = function () {
        Msger_1.Msger.on(Msger_1.Msger.on_play_sound, this.on_play_sound, this);
        Msger_1.Msger.on(Msger_1.Msger.on_sound_muted, this.on_sound_muted, this);
    };
    SoundConctrollerSc.prototype.on_sound_muted = function () {
        SoundConctrollerSc_1.isMuted = !SoundConctrollerSc_1.isMuted;
        if (SoundConctrollerSc_1.isMuted) {
            this.node.getChildByName('bgm').getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.node.getChildByName('bgm').getComponent(cc.AudioSource).volume = 1;
        }
    };
    // 
    SoundConctrollerSc.prototype.on_play_sound = function (e) {
        if (SoundConctrollerSc_1.isMuted) {
            return;
        }
        if (e == 8) {
            e = Math.floor(Math.random() * 3) + 8;
        }
        this.node.children[e].getComponent(cc.AudioSource).play();
    };
    var SoundConctrollerSc_1;
    // LIFE-CYCLE CALLBACKS:
    SoundConctrollerSc.isMuted = false;
    SoundConctrollerSc = SoundConctrollerSc_1 = __decorate([
        ccclass
    ], SoundConctrollerSc);
    return SoundConctrollerSc;
}(cc.Component));
exports.default = SoundConctrollerSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU291bmRDb25jdHJvbGxlclNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUUxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDs7SUE2QkEsQ0FBQzsyQkE3Qm9CLGtCQUFrQjtJQUluQyxtQ0FBTSxHQUFOO1FBQ0ksYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFOUQsQ0FBQztJQUNELDJDQUFjLEdBQWQ7UUFDSSxvQkFBa0IsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxvQkFBa0IsQ0FBQyxPQUFPLENBQUM7UUFDekQsSUFBSSxvQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDM0U7SUFDTCxDQUFDO0lBQ0QsR0FBRztJQUNILDBDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ1gsSUFBSSxvQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDNUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUQsQ0FBQzs7SUF4QkQsd0JBQXdCO0lBQ1YsMEJBQU8sR0FBRyxLQUFLLENBQUM7SUFIYixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTZCdEM7SUFBRCx5QkFBQztDQTdCRCxBQTZCQyxDQTdCK0MsRUFBRSxDQUFDLFNBQVMsR0E2QjNEO2tCQTdCb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXNnZXIgfSBmcm9tIFwiLi9Nc2dlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kQ29uY3Ryb2xsZXJTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTXV0ZWQgPSBmYWxzZTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9wbGF5X3NvdW5kLCB0aGlzLm9uX3BsYXlfc291bmQsIHRoaXMpO1xyXG4gICAgICAgIE1zZ2VyLm9uKE1zZ2VyLm9uX3NvdW5kX211dGVkLCB0aGlzLm9uX3NvdW5kX211dGVkLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcbiAgICBvbl9zb3VuZF9tdXRlZCgpIHtcclxuICAgICAgICBTb3VuZENvbmN0cm9sbGVyU2MuaXNNdXRlZCA9ICFTb3VuZENvbmN0cm9sbGVyU2MuaXNNdXRlZDtcclxuICAgICAgICBpZiAoU291bmRDb25jdHJvbGxlclNjLmlzTXV0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdiZ20nKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdiZ20nKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gXHJcbiAgICBvbl9wbGF5X3NvdW5kKGUpIHtcclxuICAgICAgICBpZiAoU291bmRDb25jdHJvbGxlclNjLmlzTXV0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZSA9PSA4KSB7XHJcbiAgICAgICAgICAgIGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltlXS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==