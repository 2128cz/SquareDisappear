
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameTouchSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c34c2Es4A1BGayOI+xbecDs', 'GameTouchSc');
// scripts/GameTouchSc.ts

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
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameTouchSc = /** @class */ (function (_super) {
    __extends(GameTouchSc, _super);
    function GameTouchSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchLayer = null;
        _this.holdTouch = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GameTouchSc.prototype.onLoad = function () {
        this.touchLayer.on(cc.Node.EventType.TOUCH_START, this.touchBegin, this);
    };
    GameTouchSc.prototype.touchBegin = function (e) {
        if (this.holdTouch > 0) {
            return;
        }
        if (this.getComponent(GameSc_1.default).isPaused) {
            return;
        }
        // console.log(e.touch.getLocationX());
        var pt = this.touchLayer.convertToNodeSpaceAR(e.touch.getLocation());
        var index = (pt.x + 720 / 2) / (720 / 4);
        index = Math.floor(index);
        if (index < 0)
            index = 0;
        if (index > 3)
            index = 3;
        this.getComponent(GameSc_1.default).add_move_brick(index);
        this.holdTouch = 0.2;
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 7);
    };
    GameTouchSc.prototype.update = function (dt) {
        this.holdTouch -= dt;
    };
    __decorate([
        property(cc.Node)
    ], GameTouchSc.prototype, "touchLayer", void 0);
    GameTouchSc = __decorate([
        ccclass
    ], GameTouchSc);
    return GameTouchSc;
}(cc.Component));
exports.default = GameTouchSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVRvdWNoU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLGlDQUFnQztBQUcxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW9DQztRQWpDRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQTRCbkIsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUFLMUIsQ0FBQztJQTlCRyx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsQ0FBc0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNwQyxPQUFPO1NBQ1Y7UUFDRCx1Q0FBdUM7UUFDdkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFFckIsYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUztJQUhWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FvQy9CO0lBQUQsa0JBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3dDLEVBQUUsQ0FBQyxTQUFTLEdBb0NwRDtrQkFwQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVNjIGZyb20gXCIuL0dhbWVTY1wiO1xuaW1wb3J0IHsgTXNnZXIgfSBmcm9tIFwiLi9Nc2dlclwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVG91Y2hTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b3VjaExheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMudG91Y2hMYXllci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaEJlZ2luLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0b3VjaEJlZ2luKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9sZFRvdWNoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50b3VjaC5nZXRMb2NhdGlvblgoKSk7XG4gICAgICAgIGxldCBwdCA9IHRoaXMudG91Y2hMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlLnRvdWNoLmdldExvY2F0aW9uKCkpO1xuICAgICAgICBsZXQgaW5kZXggPSAocHQueCArIDcyMCAvIDIpIC8gKDcyMCAvIDQpO1xuICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoaW5kZXgpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IDMpIGluZGV4ID0gMztcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoR2FtZVNjKS5hZGRfbW92ZV9icmljayhpbmRleCk7XG4gICAgICAgIHRoaXMuaG9sZFRvdWNoID0gMC4yO1xuICAgICAgICBcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCA3KTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBob2xkVG91Y2ggPSAwO1xuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuaG9sZFRvdWNoIC09IGR0O1xuICAgIH1cbn1cbiJdfQ==