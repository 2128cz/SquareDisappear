
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/PanelTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64efe9poixCx6gFMYxQOlei', 'PanelTool');
// scripts/base/tool/PanelTool.ts

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
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
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
                    var nowlayer = layers[layerIndex];
                    DevelopersToolGlobal_1.DevelopersToolGlobal.layer = nowlayer;
                    this.LayerDefaultSetting(nowlayer);
                    break;
                }
            }
        }
    };
    /**
     * 层初始设定
     * @param node
     */
    PanelTool.prototype.LayerDefaultSetting = function (node) {
        node.active = false;
    };
    __decorate([
        property({
            type: cc.String,
            displayName: '通用层名单',
            tooltip: '层按放置顺序设定优先级，与名称顺序无关，默认关闭所有层级，需要在canvas下的脚本进行打开',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGFuZWxUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2RTtBQUV2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJDQztRQW5DRyxtQkFBYSxHQUFhLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7SUFtQ3pGLENBQUM7SUFqQ0csd0JBQXdCO0lBQ3hCLDBCQUFNLEdBQU47UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQzs7V0FFRztRQUNILElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxLQUFLLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUMvRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsU0FBUztZQUU1QyxLQUFLLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUV2RSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDcEMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNsQywyQ0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbkMsTUFBTTtpQkFDVDthQUNKO1NBQ0o7SUFFTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sdUNBQW1CLEdBQTdCLFVBQThCLElBQWE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQWpDRDtRQU5DLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtZQUNmLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxnREFBZ0Q7WUFDekQsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQztvREFDbUY7SUFScEUsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJDN0I7SUFBRCxnQkFBQztDQTNDRCxBQTJDQyxDQTNDc0MsRUFBRSxDQUFDLFNBQVMsR0EyQ2xEO2tCQTNDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbFRvb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuU3RyaW5nLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAn6YCa55So5bGC5ZCN5Y2VJyxcclxuICAgICAgICB0b29sdGlwOiAn5bGC5oyJ5pS+572u6aG65bqP6K6+5a6a5LyY5YWI57qn77yM5LiO5ZCN56ew6aG65bqP5peg5YWz77yM6buY6K6k5YWz6Zet5omA5pyJ5bGC57qn77yM6ZyA6KaB5ZyoY2FudmFz5LiL55qE6ISa5pys6L+b6KGM5omT5byAJyxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIF9nZW5lcmFsTGF5ZXI6IHN0cmluZ1tdID0gWydCYWNrZ3JvdW5kTGF5ZXInLCAnRXRlcm5hbGl0eVVJTGF5ZXInLCAnRHluYW1pY1VJTGF5ZXInXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgbGF5ZXJzID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWPr+eUqOeahOWJqeS9meWxglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCByZXNpZHVlTGF5ZXJzTmFtZSA9IHRoaXMuX2dlbmVyYWxMYXllcjtcclxuICAgICAgICBmb3IgKGxldCBsYXllckluZGV4ID0gMDsgbGF5ZXJJbmRleCA8IGxheWVycy5sZW5ndGg7IGxheWVySW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSBsYXllcnNbbGF5ZXJJbmRleF07XHJcbiAgICAgICAgICAgIGlmIChsYXllci5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lSW5kZXggPSAwOyBuYW1lSW5kZXggPCByZXNpZHVlTGF5ZXJzTmFtZS5sZW5ndGg7IG5hbWVJbmRleCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLm5hbWUgPT0gcmVzaWR1ZUxheWVyc05hbWVbbmFtZUluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2lkdWVMYXllcnNOYW1lW25hbWVJbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3dsYXllciA9IGxheWVyc1tsYXllckluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBjY3Z2LmxheWVyID0gbm93bGF5ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MYXllckRlZmF1bHRTZXR0aW5nKG5vd2xheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsYLliJ3lp4vorr7lrppcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgTGF5ZXJEZWZhdWx0U2V0dGluZyhub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==