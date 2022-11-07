
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/DelayDelSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGVsYXlEZWxTYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF5QkM7UUF0QkcsWUFBWTtRQUNaLGVBQVMsR0FBVyxDQUFDLENBQUM7O0lBcUIxQixDQUFDO0lBbkJHLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQUksR0FBSjtJQUVBLENBQUM7SUFDRCwyQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzdCLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUF4QmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F5QjlCO0lBQUQsaUJBQUM7Q0F6QkQsQUF5QkMsQ0F6QnVDLEVBQUUsQ0FBQyxTQUFTLEdBeUJuRDtrQkF6Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxheURlbFNjIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgLy8gQHByb3BlcnR5XG4gICAgZGVsYXlUaW1lOiBudW1iZXIgPSAxO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBzaG93KCkge1xuXG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmRlbGF5VGltZSAtPSBkdDtcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX1NwbGludGVyaW5nX2RlbCwgdGhpcy5ub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=