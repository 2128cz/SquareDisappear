
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MessageBoxSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fc9eirFG1CtJwC8KJA39Wp', 'MessageBoxSc');
// scripts/MessageBoxSc.ts

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
var MessageBoxSc = /** @class */ (function (_super) {
    __extends(MessageBoxSc, _super);
    function MessageBoxSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.MessageBox = null;
        // LIFE-CYCLE CALLBACKS:
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    MessageBoxSc.prototype.onLoad = function () {
        var _this = this;
        Msger_1.Msger.on(Msger_1.Msger.on_show_watting, function (e, callback) {
            if (_this.MessageBox) {
                _this.MessageBox.active = true;
                _this.callback = callback;
            }
        }, this);
        this.MessageBox.active = false;
    };
    MessageBoxSc.prototype.onclick_close = function () {
        this.MessageBox.active = false;
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        if (this.callback) {
            this.callback();
        }
    };
    __decorate([
        property(cc.Label)
    ], MessageBoxSc.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxSc.prototype, "MessageBox", void 0);
    MessageBoxSc = __decorate([
        ccclass
    ], MessageBoxSc);
    return MessageBoxSc;
}(cc.Component));
exports.default = MessageBoxSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVzc2FnZUJveFNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUcxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTZCQztRQTFCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLHdCQUF3QjtRQUNoQixjQUFRLEdBQUcsSUFBSSxDQUFDOztRQW1CeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFuQkcsNkJBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEcsYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsZUFBZSxFQUFFLFVBQUMsQ0FBQyxFQUFDLFFBQVE7WUFDdkMsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUztJQU5WLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E2QmhDO0lBQUQsbUJBQUM7Q0E3QkQsQUE2QkMsQ0E3QnlDLEVBQUUsQ0FBQyxTQUFTLEdBNkJyRDtrQkE3Qm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VCb3hTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIE1lc3NhZ2VCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSBjYWxsYmFjayA9IG51bGw7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9zaG93X3dhdHRpbmcsIChlLGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5NZXNzYWdlQm94KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5NZXNzYWdlQm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKVxuICAgICAgICB0aGlzLk1lc3NhZ2VCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25jbGlja19jbG9zZSgpIHtcbiAgICAgICAgdGhpcy5NZXNzYWdlQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xuICAgICAgICBpZih0aGlzLmNhbGxiYWNrKXtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=