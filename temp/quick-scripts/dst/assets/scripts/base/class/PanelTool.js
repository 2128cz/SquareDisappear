
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PanelTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64efe9poixCx6gFMYxQOlei', 'PanelTool');
// scripts/base/class/PanelTool.ts

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
var DevelopersToolGlobal_1 = require("./DevelopersToolGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelTool = /** @class */ (function (_super) {
    __extends(PanelTool, _super);
    function PanelTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._generalLayer = ['BackgroundLayer', 'EternalityUILayer', 'DynamicUILayer'];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    PanelTool.prototype.onLoad = function () {
        var layers = this.node.children;
        /**
         * 可用的剩余层
         */
        var residueLayersName = this._generalLayer;
        for (var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
            var layer = layers[layerIndex];
            if (layer.getComponent(cc.Camera))
                continue;
            for (var nameIndex = 0; nameIndex < residueLayersName.length; nameIndex++) {
                if (layer.name == residueLayersName[nameIndex]) {
                    residueLayersName[nameIndex] = null;
                    DevelopersToolGlobal_1.DevelopersToolGlobal.layer = layers[layerIndex];
                    break;
                }
            }
        }
    };
    __decorate([
        property({
            type: cc.String,
            displayName: '通用层名单',
            tooltip: '层按放置顺序设定优先级，与名称顺序无关',
            visible: true,
        })
    ], PanelTool.prototype, "_generalLayer", void 0);
    PanelTool = __decorate([
        ccclass
    ], PanelTool);
    return PanelTool;
}(cc.Component));
exports.default = PanelTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhbmVsVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBc0U7QUFFaEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFpQ0M7UUF6QkcsbUJBQWEsR0FBYSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLENBQUM7O0lBeUJ6RixDQUFDO0lBdkJHLHdCQUF3QjtJQUN4QiwwQkFBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEM7O1dBRUc7UUFDSCxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0MsS0FBSyxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUU7WUFDL0QsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUFFLFNBQVM7WUFFNUMsS0FBSyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFFdkUsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3BDLDJDQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtpQkFDVDthQUNKO1NBQ0o7SUFFTCxDQUFDO0lBdkJEO1FBTkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1lBQ2YsV0FBVyxFQUFFLE9BQU87WUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixPQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFDO29EQUNtRjtJQVJwRSxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaUM3QjtJQUFELGdCQUFDO0NBakNELEFBaUNDLENBakNzQyxFQUFFLENBQUMsU0FBUyxHQWlDbEQ7a0JBakNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxUb29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlN0cmluZyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mAmueUqOWxguWQjeWNlScsXHJcbiAgICAgICAgdG9vbHRpcDogJ+WxguaMieaUvue9rumhuuW6j+iuvuWumuS8mOWFiOe6p++8jOS4juWQjeensOmhuuW6j+aXoOWFsycsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBfZ2VuZXJhbExheWVyOiBzdHJpbmdbXSA9IFsnQmFja2dyb3VuZExheWVyJywgJ0V0ZXJuYWxpdHlVSUxheWVyJywgJ0R5bmFtaWNVSUxheWVyJ107XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGxheWVycyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj6/nlKjnmoTliankvZnlsYJcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgcmVzaWR1ZUxheWVyc05hbWUgPSB0aGlzLl9nZW5lcmFsTGF5ZXI7XHJcbiAgICAgICAgZm9yIChsZXQgbGF5ZXJJbmRleCA9IDA7IGxheWVySW5kZXggPCBsYXllcnMubGVuZ3RoOyBsYXllckluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZUluZGV4ID0gMDsgbmFtZUluZGV4IDwgcmVzaWR1ZUxheWVyc05hbWUubGVuZ3RoOyBuYW1lSW5kZXgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYXllci5uYW1lID09IHJlc2lkdWVMYXllcnNOYW1lW25hbWVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpZHVlTGF5ZXJzTmFtZVtuYW1lSW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjY3Z2LmxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==