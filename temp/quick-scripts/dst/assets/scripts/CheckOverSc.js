
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CheckOverSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bb4ft81x1LWKp5GcCxsd2G', 'CheckOverSc');
// scripts/CheckOverSc.ts

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
var BrickSc_1 = require("./BrickSc");
var GameOverSc_1 = require("./GameOverSc");
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CheckOverSc = /** @class */ (function (_super) {
    __extends(CheckOverSc, _super);
    function CheckOverSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overUI = null;
        _this.deadLine = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    CheckOverSc.prototype.start = function () {
    };
    CheckOverSc.prototype.update = function (dt) {
        if (this.getComponent(GameSc_1.default).isPaused) {
            return;
        }
        if (!this.bricksLayer) {
            this.bricksLayer = this.getComponent(GameSc_1.default).bricksLayer;
        }
        else {
            for (var _i = 0, _a = this.bricksLayer.children; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.getComponent(BrickSc_1.default).moveSpeed == 0) {
                    if (item.y - item.height / 2 <= this.deadLine.y) {
                        //
                        this.getComponent(GameSc_1.default).isPaused = true;
                        this.cleanBrikes();
                        this.overUI.active = true;
                        this.overUI.getComponent(GameOverSc_1.default).cooldown = 10;
                        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 3);
                    }
                }
            }
        }
    };
    CheckOverSc.prototype.cleanBrikes = function () {
        var bricks = this.getComponent(GameSc_1.default).bricksLayer;
        for (var i = bricks.childrenCount - 1; i >= 0; i--) {
            var item = bricks.children[i];
            if (item.y < 1280 / 2) {
                item.removeFromParent(true);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], CheckOverSc.prototype, "overUI", void 0);
    __decorate([
        property(cc.Node)
    ], CheckOverSc.prototype, "deadLine", void 0);
    CheckOverSc = __decorate([
        ccclass
    ], CheckOverSc);
    return CheckOverSc;
}(cc.Component));
exports.default = CheckOverSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2hlY2tPdmVyU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLHFDQUFnQztBQUNoQywyQ0FBc0M7QUFDdEMsaUNBQWdDO0FBRTFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNkNDO1FBekNHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUF1QzdCLENBQUM7SUF0Q0csd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7U0FDNUQ7YUFBTTtZQUNILEtBQWlCLFVBQXlCLEVBQXpCLEtBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQXpCLGNBQXlCLEVBQXpCLElBQXlCLEVBQUU7Z0JBQXZDLElBQUksSUFBSSxTQUFBO2dCQUNULElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtvQkFDM0MsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO3dCQUM3QyxFQUFFO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQzFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkQsYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUN0QztpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBQ08saUNBQVcsR0FBbkI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFOUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNkMvQjtJQUFELGtCQUFDO0NBN0NELEFBNkNDLENBN0N3QyxFQUFFLENBQUMsU0FBUyxHQTZDcEQ7a0JBN0NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTYyBmcm9tIFwiLi9HYW1lU2NcIjtcbmltcG9ydCBCcmlja1NjIGZyb20gXCIuL0JyaWNrU2NcIjtcbmltcG9ydCBHYW1lT3ZlclNjIGZyb20gXCIuL0dhbWVPdmVyU2NcIjtcbmltcG9ydCB7IE1zZ2VyIH0gZnJvbSBcIi4vTXNnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrT3ZlclNjIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3ZlclVJOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkZWFkTGluZTogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIHByaXZhdGUgYnJpY2tzTGF5ZXI6IGNjLk5vZGU7XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmJyaWNrc0xheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmJyaWNrc0xheWVyID0gdGhpcy5nZXRDb21wb25lbnQoR2FtZVNjKS5icmlja3NMYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5icmlja3NMYXllci5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdldENvbXBvbmVudChCcmlja1NjKS5tb3ZlU3BlZWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS55IC0gaXRlbS5oZWlnaHQgLyAyIDw9IHRoaXMuZGVhZExpbmUueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KEdhbWVTYykuaXNQYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbkJyaWtlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVUkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlclVJLmdldENvbXBvbmVudChHYW1lT3ZlclNjKS5jb29sZG93biA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNsZWFuQnJpa2VzKCkge1xuICAgICAgICBsZXQgYnJpY2tzID0gdGhpcy5nZXRDb21wb25lbnQoR2FtZVNjKS5icmlja3NMYXllcjtcbiAgICAgICAgZm9yIChsZXQgaSA9IGJyaWNrcy5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gYnJpY2tzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0ueSA8IDEyODAgLyAyKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19