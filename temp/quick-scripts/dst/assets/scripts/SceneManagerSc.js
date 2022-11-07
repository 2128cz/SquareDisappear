
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SceneManagerSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ef5aYQFX1NaZxMs3knQNlb', 'SceneManagerSc');
// scripts/SceneManagerSc.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneManagerSc = /** @class */ (function (_super) {
    __extends(SceneManagerSc, _super);
    function SceneManagerSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.StartUI = null;
        _this.GameUI = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    SceneManagerSc.prototype.onLoad = function () {
        Msger_1.Msger.on(Msger_1.Msger.on_changeto_start, this.on_changeto_start, this);
        Msger_1.Msger.on(Msger_1.Msger.on_changeto_game, this.on_changeto_game, this);
        this.StartUI.active = true;
        this.GameUI.active = false;
    };
    SceneManagerSc.prototype.start = function () {
        WXManager_1.default.Instance.openShare("share/share1", "比一比谁眼疾手快");
    };
    // update (dt) {}
    SceneManagerSc.prototype.on_changeto_game = function () {
        this.StartUI.active = false;
        this.GameUI.active = true;
        Msger_1.Msger.emit(Msger_1.Msger.on_game_begin);
    };
    SceneManagerSc.prototype.on_changeto_start = function () {
        this.StartUI.active = true;
        this.GameUI.active = false;
    };
    __decorate([
        property(cc.Node)
    ], SceneManagerSc.prototype, "StartUI", void 0);
    __decorate([
        property(cc.Node)
    ], SceneManagerSc.prototype, "GameUI", void 0);
    SceneManagerSc = __decorate([
        ccclass
    ], SceneManagerSc);
    return SceneManagerSc;
}(cc.Component));
exports.default = SceneManagerSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NlbmVNYW5hZ2VyU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBQ2hDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStCQztRQTVCRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBMEIzQixDQUFDO0lBeEJHLHdCQUF3QjtJQUV4QiwrQkFBTSxHQUFOO1FBQ0ksYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLGFBQUssQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUJBQWlCO0lBRVQseUNBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQixhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ08sMENBQWlCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUxOLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErQmxDO0lBQUQscUJBQUM7Q0EvQkQsQUErQkMsQ0EvQjJDLEVBQUUsQ0FBQyxTQUFTLEdBK0J2RDtrQkEvQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XHJcbmltcG9ydCBXWE1hbmFnZXIgZnJvbSBcIi4vV1hNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyU2MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU3RhcnRVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVVSTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIE1zZ2VyLm9uKE1zZ2VyLm9uX2NoYW5nZXRvX3N0YXJ0LCB0aGlzLm9uX2NoYW5nZXRvX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9jaGFuZ2V0b19nYW1lLCB0aGlzLm9uX2NoYW5nZXRvX2dhbWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuU3RhcnRVSS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2FtZVVJLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFdYTWFuYWdlci5JbnN0YW5jZS5vcGVuU2hhcmUoXCJzaGFyZS9zaGFyZTFcIiwgXCLmr5TkuIDmr5TosIHnnLznlr7miYvlv6tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwcml2YXRlIG9uX2NoYW5nZXRvX2dhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5TdGFydFVJLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2FtZVVJLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9nYW1lX2JlZ2luKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25fY2hhbmdldG9fc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5TdGFydFVJLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5HYW1lVUkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19