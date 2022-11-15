
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/BlockGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e2194MCANHsq+QyrRQ9KnJ', 'BlockGroup');
// scripts/game/BlockGroup.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockGroup = /** @class */ (function (_super) {
    __extends(BlockGroup, _super);
    function BlockGroup() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tag 用户参数，宏
        /**
         * 此组代表的索引
         */
        _this._GridIndex = null;
        /**
         * 处于此组下方的组
         */
        _this._LastGroup = null;
        /**
         * 处于此组上方的组
         */
        _this._NextGroup = null;
        /**
         * 需要自动初始化
         */
        _this._NeedStart = true;
        /**
         * 需要检查成员标记
         */
        _this._NeedCheckMem = false;
        return _this;
    }
    // onLoad () {}
    BlockGroup.prototype.start = function () {
        // 随机地图
        if (this._NeedStart) {
            this.randomizeCubeLine();
        }
    };
    BlockGroup.prototype.update = function (dt) {
        // 检查成员是否满了？
        if (this.needCheckMem) {
            var children = this.node.children.filter(function (value) { return value.isValid; });
            // 满了就销毁
            if (children.length >= Setting_1.default.Game_Column) {
                this.destroyMembers();
            }
        }
        // 更新自己的坐标
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec3(0, this._GridIndex, 0));
        this.node.setPosition(0, pos.y, 0);
    };
    // tag 用户函数
    BlockGroup.prototype.init = function (index, lastGroup, nextGroup) {
        this._GridIndex = index;
        if (lastGroup) {
            lastGroup._NextGroup = this;
            this._LastGroup = lastGroup;
        }
        if (nextGroup) {
            nextGroup._LastGroup = this;
            this._NextGroup = nextGroup;
        }
    };
    /**
     * 随机化剩余方块
     */
    BlockGroup.prototype.randomizeCubeLine = function () {
        var child = this.node.children;
        var perch = [];
        var loop = 7; // 机会
        while (loop--) {
            var curcol = Math.floor(Math.random() * child.length);
            if (perch.indexOf(curcol) < 0)
                perch.push(curcol);
            if (perch.length >= (child.length - 1))
                break;
        }
        this.node.children.forEach(function (element, index) {
            if (perch.indexOf(index) <= 0)
                element.destroy();
        });
    };
    /**
     * 移除成员
     */
    BlockGroup.prototype.destroyMembers = function () {
        function findAllChildren(group) {
            var groupChildren = group.node.children;
            if (group._LastGroup)
                groupChildren = __spreadArrays(groupChildren, findAllChildren(group._LastGroup));
            return groupChildren;
        }
        findAllChildren(this).forEach(function (element) {
            // 将每个成员都替换为销毁效果节点
            var component = element.getComponent(Setting_1.default.blockName);
            if (component)
                component.destroyWithAnimation();
        });
        // 这行消除效果
        var inst = cc.instantiate(Setting_1.default.Effect_Destory);
        this.node.addChild(inst);
    };
    Object.defineProperty(BlockGroup.prototype, "gridIndex", {
        get: function () { return this._GridIndex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "lastGroup", {
        get: function () { return this._LastGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "nextGroup", {
        get: function () { return this._NextGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "needStart", {
        set: function (value) { this._NeedStart = value; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BlockGroup.prototype, "needCheckMem", {
        get: function () {
            if (this._NeedCheckMem) {
                this._NeedCheckMem = false;
                return true;
            }
            else
                return false;
        },
        set: function (value) { this._NeedCheckMem = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    BlockGroup = __decorate([
        ccclass
    ], BlockGroup);
    return BlockGroup;
}(cc.Component));
exports.default = BlockGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2tHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHFDQUEyQjtBQUVyQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUVJLHdCQUF3QjtRQUY1QixxRUFtSEM7UUEvQkcsYUFBYTtRQUViOztXQUVHO1FBQ08sZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFFcEM7O1dBRUc7UUFDTyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUV4Qzs7V0FFRztRQUNPLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRXhDOztXQUVHO1FBQ08sZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFckM7O1dBRUc7UUFDTyxtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFNN0MsQ0FBQztJQS9HRyxlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUNJLE9BQU87UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFFTCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxZQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBTSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxRQUFRO1lBQ1IsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLGlCQUFFLENBQUMsV0FBVyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDekI7U0FDSjtRQUNELFVB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O2FBQXBCLGNBQXlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBS2pELHNCQUFXLGlDQUFTO2FBQXBCLGNBQXlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBS2pELHNCQUFXLGlDQUFTO2FBQXBCLFVBQXFCLEtBQWMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUtqRSxzQkFBVyxvQ0FBWTthQUN2QjtZQUNJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFBQyxPQUFPLElBQUksQ0FBQzthQUFFOztnQkFDL0QsT0FBTyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUpELFVBQXdCLEtBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUl0RSxDQUFDO0lBbEhlLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtSDlCO0lBQUQsaUJBQUM7Q0FuSEQsQUFtSEMsQ0FuSHVDLEVBQUUsQ0FBQyxTQUFTLEdBbUhuRDtrQkFuSG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tHcm91cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g6ZqP5py65Zyw5Zu+XHJcbiAgICAgICAgaWYgKHRoaXMuX05lZWRTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZUN1YmVMaW5lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyDmo4Dmn6XmiJDlkZjmmK/lkKbmu6HkuobvvJ9cclxuICAgICAgICBpZiAodGhpcy5uZWVkQ2hlY2tNZW0pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuLmZpbHRlcih2YWx1ZSA9PiB7IHJldHVybiB2YWx1ZS5pc1ZhbGlkIH0pO1xyXG4gICAgICAgICAgICAvLyDmu6HkuoblsLHplIDmr4FcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+PSBzcy5HYW1lX0NvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95TWVtYmVycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOabtOaWsOiHquW3seeahOWdkOagh1xyXG4gICAgICAgIGxldCBwb3MgPSBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkSW5kZXgsIDApKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgcG9zLnksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflh73mlbBcclxuXHJcbiAgICBwdWJsaWMgaW5pdChpbmRleDogbnVtYmVyLCBsYXN0R3JvdXA6IEJsb2NrR3JvdXAsIG5leHRHcm91cD86IEJsb2NrR3JvdXApIHtcclxuICAgICAgICB0aGlzLl9HcmlkSW5kZXggPSBpbmRleDtcclxuICAgICAgICBpZiAobGFzdEdyb3VwKSB7XHJcbiAgICAgICAgICAgIGxhc3RHcm91cC5fTmV4dEdyb3VwID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fTGFzdEdyb3VwID0gbGFzdEdyb3VwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV4dEdyb3VwKSB7XHJcbiAgICAgICAgICAgIG5leHRHcm91cC5fTGFzdEdyb3VwID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fTmV4dEdyb3VwID0gbmV4dEdyb3VwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuWMluWJqeS9meaWueWdl1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJhbmRvbWl6ZUN1YmVMaW5lKCkge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXVxyXG4gICAgICAgIGxldCBsb29wID0gNzsgLy8g5py65LyaXHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hpbGQubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApXHJcbiAgICAgICAgICAgICAgICBwZXJjaC5wdXNoKGN1cmNvbCk7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5sZW5ndGggPj0gKGNoaWxkLmxlbmd0aCAtIDEpKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5pbmRleE9mKGluZGV4KSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTmiJDlkZhcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlc3Ryb3lNZW1iZXJzKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRBbGxDaGlsZHJlbihncm91cDogQmxvY2tHcm91cCk6IGNjLk5vZGVbXSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cENoaWxkcmVuOiBjYy5Ob2RlW10gPSBncm91cC5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXAuX0xhc3RHcm91cClcclxuICAgICAgICAgICAgICAgIGdyb3VwQ2hpbGRyZW4gPSBbLi4uZ3JvdXBDaGlsZHJlbiwgLi4uZmluZEFsbENoaWxkcmVuKGdyb3VwLl9MYXN0R3JvdXApXTtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwQ2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmRBbGxDaGlsZHJlbih0aGlzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyDlsIbmr4/kuKrmiJDlkZjpg73mm7/mjaLkuLrplIDmr4HmlYjmnpzoioLngrlcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnQuZ2V0Q29tcG9uZW50KHNzLmJsb2NrTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveVdpdGhBbmltYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDov5nooYzmtojpmaTmlYjmnpxcclxuICAgICAgICBsZXQgaW5zdCA9IGNjLmluc3RhbnRpYXRlKHNzLkVmZmVjdF9EZXN0b3J5KTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaW5zdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Y+C5pWw77yM5a6PXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmraTnu4Tku6PooajnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmlkSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGdyaWRJbmRleCgpIHsgcmV0dXJuIHRoaXMuX0dyaWRJbmRleCB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOS6juatpOe7hOS4i+aWueeahOe7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0xhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGxhc3RHcm91cCgpIHsgcmV0dXJuIHRoaXMuX0xhc3RHcm91cCB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOS6juatpOe7hOS4iuaWueeahOe7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05leHRHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IG5leHRHcm91cCgpIHsgcmV0dXJuIHRoaXMuX05leHRHcm91cCB9XHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeiHquWKqOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05lZWRTdGFydDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2V0IG5lZWRTdGFydCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9OZWVkU3RhcnQgPSB2YWx1ZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHmo4Dmn6XmiJDlkZjmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9OZWVkQ2hlY2tNZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzZXQgbmVlZENoZWNrTWVtKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX05lZWRDaGVja01lbSA9IHZhbHVlIH07XHJcbiAgICBwdWJsaWMgZ2V0IG5lZWRDaGVja01lbSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fTmVlZENoZWNrTWVtKSB7IHRoaXMuX05lZWRDaGVja01lbSA9IGZhbHNlOyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxufSJdfQ==