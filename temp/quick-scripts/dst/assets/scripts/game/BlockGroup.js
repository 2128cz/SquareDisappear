
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
            if (children.length >= Setting_1.default.Game_Column) {
                // 满了就销毁
                this.destroyMembers();
                // 然后将上一个设为最后一组
                Setting_1.default.endCubeGroup = this._NextGroup;
            }
        }
        // 更新自己的坐标
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec3(0, this._GridIndex, 0));
        this.node.setPosition(0, pos.y, 0);
    };
    // tag 用户函数
    /**
     * 任何情况下诞生都应该调用初始化
     * @param index
     * @param lastGroup
     * @param nextGroup
     */
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
        // 如果诞生时最后一行方块在我的上面
        if (!Setting_1.default.endCubeGroup || Setting_1.default.endCubeGroup.node.y > this.node.y) {
            // 那我才是最后一个仔
            Setting_1.default.endCubeGroup = this;
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
        var allChildren = this.findAllChildren(this);
        allChildren.forEach(function (element) {
            // 将每个成员都替换为销毁效果节点
            var component = element.getComponent(Setting_1.default.blockName);
            if (component)
                component.destroyWithAnimation();
        });
        // 这行消除效果
        var inst = cc.instantiate(Setting_1.default.Effect_Destory);
        this.node.addChild(inst);
    };
    /**
     * 向下寻找所有成员
     * @param group
     * @returns
     */
    BlockGroup.prototype.findAllChildren = function (group) {
        if (group.node) {
            var groupChildren = group.node.children;
            if (group._LastGroup)
                groupChildren = __spreadArrays(groupChildren, this.findAllChildren(group._LastGroup));
            return groupChildren;
        }
        return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2tHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHFDQUEyQjtBQUVyQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUVJLHdCQUF3QjtRQUY1QixxRUF3SUM7UUEvQkcsYUFBYTtRQUViOztXQUVHO1FBQ08sZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFFcEM7O1dBRUc7UUFDTyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUV4Qzs7V0FFRztRQUNPLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRXhDOztXQUVHO1FBQ08sZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFckM7O1dBRUc7UUFDTyxtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFNN0MsQ0FBQztJQXBJRyxlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUNJLE9BQU87UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFFTCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxZQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBTSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksaUJBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ25DLFFBQVE7Z0JBQ1IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixlQUFlO2dCQUNm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LEVBQUUsQ0FBQyxTQUFTLEdBd0luRDtrQkF4SW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tHcm91cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g6ZqP5py65Zyw5Zu+XHJcbiAgICAgICAgaWYgKHRoaXMuX05lZWRTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZUN1YmVMaW5lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyDmo4Dmn6XmiJDlkZjmmK/lkKbmu6HkuobvvJ9cclxuICAgICAgICBpZiAodGhpcy5uZWVkQ2hlY2tNZW0pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuLmZpbHRlcih2YWx1ZSA9PiB7IHJldHVybiB2YWx1ZS5pc1ZhbGlkIH0pO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID49IHNzLkdhbWVfQ29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmu6HkuoblsLHplIDmr4FcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU1lbWJlcnMoKTtcclxuICAgICAgICAgICAgICAgIC8vIOeEtuWQjuWwhuS4iuS4gOS4quiuvuS4uuacgOWQjuS4gOe7hFxyXG4gICAgICAgICAgICAgICAgc3MuZW5kQ3ViZUdyb3VwID0gdGhpcy5fTmV4dEdyb3VwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOabtOaWsOiHquW3seeahOWdkOagh1xyXG4gICAgICAgIGxldCBwb3MgPSBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkSW5kZXgsIDApKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgcG9zLnksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflh73mlbBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7u+S9leaDheWGteS4i+ivnueUn+mDveW6lOivpeiwg+eUqOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICogQHBhcmFtIGxhc3RHcm91cCBcclxuICAgICAqIEBwYXJhbSBuZXh0R3JvdXAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KGluZGV4OiBudW1iZXIsIGxhc3RHcm91cDogQmxvY2tHcm91cCwgbmV4dEdyb3VwPzogQmxvY2tHcm91cCkge1xyXG4gICAgICAgIHRoaXMuX0dyaWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGlmIChsYXN0R3JvdXApIHtcclxuICAgICAgICAgICAgbGFzdEdyb3VwLl9OZXh0R3JvdXAgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9MYXN0R3JvdXAgPSBsYXN0R3JvdXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXh0R3JvdXApIHtcclxuICAgICAgICAgICAgbmV4dEdyb3VwLl9MYXN0R3JvdXAgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9OZXh0R3JvdXAgPSBuZXh0R3JvdXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOivnueUn+aXtuacgOWQjuS4gOihjOaWueWdl+WcqOaIkeeahOS4iumdolxyXG4gICAgICAgIGlmICghc3MuZW5kQ3ViZUdyb3VwIHx8IHNzLmVuZEN1YmVHcm91cC5ub2RlLnkgPiB0aGlzLm5vZGUueSkge1xyXG4gICAgICAgICAgICAvLyDpgqPmiJHmiY3mmK/mnIDlkI7kuIDkuKrku5RcclxuICAgICAgICAgICAgc3MuZW5kQ3ViZUdyb3VwID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrljJbliankvZnmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByYW5kb21pemVDdWJlTGluZSgpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IHBlcmNoID0gW11cclxuICAgICAgICBsZXQgbG9vcCA9IDc7IC8vIOacuuS8mlxyXG4gICAgICAgIHdoaWxlIChsb29wLS0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cmNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoaWxkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5pbmRleE9mKGN1cmNvbCkgPCAwKVxyXG4gICAgICAgICAgICAgICAgcGVyY2gucHVzaChjdXJjb2wpO1xyXG4gICAgICAgICAgICBpZiAocGVyY2gubGVuZ3RoID49IChjaGlsZC5sZW5ndGggLSAxKSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVyY2guaW5kZXhPZihpbmRleCkgPD0gMClcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5oiQ5ZGYXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0cm95TWVtYmVycygpIHtcclxuICAgICAgICBsZXQgYWxsQ2hpbGRyZW4gPSB0aGlzLmZpbmRBbGxDaGlsZHJlbih0aGlzKTtcclxuICAgICAgICBhbGxDaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyDlsIbmr4/kuKrmiJDlkZjpg73mm7/mjaLkuLrplIDmr4HmlYjmnpzoioLngrlcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnQuZ2V0Q29tcG9uZW50KHNzLmJsb2NrTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveVdpdGhBbmltYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDov5nooYzmtojpmaTmlYjmnpxcclxuICAgICAgICBsZXQgaW5zdCA9IGNjLmluc3RhbnRpYXRlKHNzLkVmZmVjdF9EZXN0b3J5KTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaW5zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlkJHkuIvlr7vmib7miYDmnInmiJDlkZhcclxuICAgICAqIEBwYXJhbSBncm91cCBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmluZEFsbENoaWxkcmVuKGdyb3VwOiBCbG9ja0dyb3VwKTogY2MuTm9kZVtdIHtcclxuICAgICAgICBpZiAoZ3JvdXAubm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBDaGlsZHJlbjogY2MuTm9kZVtdID0gZ3JvdXAubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKGdyb3VwLl9MYXN0R3JvdXApXHJcbiAgICAgICAgICAgICAgICBncm91cENoaWxkcmVuID0gWy4uLmdyb3VwQ2hpbGRyZW4sIC4uLnRoaXMuZmluZEFsbENoaWxkcmVuKGdyb3VwLl9MYXN0R3JvdXApXTtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwQ2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Y+C5pWw77yM5a6PXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmraTnu4Tku6PooajnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmlkSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGdyaWRJbmRleCgpIHsgcmV0dXJuIHRoaXMuX0dyaWRJbmRleCB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOS6juatpOe7hOS4i+aWueeahOe7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0xhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGxhc3RHcm91cCgpIHsgcmV0dXJuIHRoaXMuX0xhc3RHcm91cCB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOS6juatpOe7hOS4iuaWueeahOe7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05leHRHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IG5leHRHcm91cCgpIHsgcmV0dXJuIHRoaXMuX05leHRHcm91cCB9XHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeiHquWKqOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05lZWRTdGFydDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2V0IG5lZWRTdGFydCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9OZWVkU3RhcnQgPSB2YWx1ZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHmo4Dmn6XmiJDlkZjmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9OZWVkQ2hlY2tNZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzZXQgbmVlZENoZWNrTWVtKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX05lZWRDaGVja01lbSA9IHZhbHVlIH07XHJcbiAgICBwdWJsaWMgZ2V0IG5lZWRDaGVja01lbSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fTmVlZENoZWNrTWVtKSB7IHRoaXMuX05lZWRDaGVja01lbSA9IGZhbHNlOyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxufSJdfQ==