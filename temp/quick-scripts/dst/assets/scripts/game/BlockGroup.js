
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
                // 满了就销毁，并加分
                Setting_1.default.score_add = this.destroyMembers();
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
     * 消除这行及以下的所有成员
     *
     */
    BlockGroup.prototype.destroyMembers = function (palyEffect) {
        if (palyEffect === void 0) { palyEffect = true; }
        var allChildren = this.findAllChildren(this);
        allChildren.forEach(function (element) {
            // 将每个成员都替换为销毁效果节点
            var component = element.getComponent(Setting_1.default.blockName);
            if (component)
                component.destroyWithAnimation();
        });
        // 这行消除效果
        if (palyEffect) {
            var inst = cc.instantiate(Setting_1.default.Effect_Destory);
            this.node.addChild(inst);
        }
        return allChildren.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2tHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHFDQUEyQjtBQUVyQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUVJLHdCQUF3QjtRQUY1QixxRUE2SUM7UUEvQkcsYUFBYTtRQUViOztXQUVHO1FBQ08sZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFFcEM7O1dBRUc7UUFDTyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUV4Qzs7V0FFRztRQUNPLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRXhDOztXQUVHO1FBQ08sZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFckM7O1dBRUc7UUFDTyxtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFNN0MsQ0FBQztJQXpJRyxlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUNJLE9BQU87UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFFTCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxZQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBTSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksaUJBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ25DLFlBQVk7Z0JBQ1osaUJBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxD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QUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFJdEUsQ0FBQztJQTVJZSxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNkk5QjtJQUFELGlCQUFDO0NBN0lELEFBNklDLENBN0l1QyxFQUFFLENBQUMsU0FBUyxHQTZJbkQ7a0JBN0lvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgc3MgZnJvbSBcIi4vU2V0dGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrR3JvdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOmaj+acuuWcsOWbvlxyXG4gICAgICAgIGlmICh0aGlzLl9OZWVkU3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVDdWJlTGluZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5qOA5p+l5oiQ5ZGY5piv5ZCm5ruh5LqG77yfXHJcbiAgICAgICAgaWYgKHRoaXMubmVlZENoZWNrTWVtKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZHJlbi5maWx0ZXIodmFsdWUgPT4geyByZXR1cm4gdmFsdWUuaXNWYWxpZCB9KTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+PSBzcy5HYW1lX0NvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgLy8g5ruh5LqG5bCx6ZSA5q+B77yM5bm25Yqg5YiGXHJcbiAgICAgICAgICAgICAgICBzcy5zY29yZV9hZGQgPSB0aGlzLmRlc3Ryb3lNZW1iZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDnhLblkI7lsIbkuIrkuIDkuKrorr7kuLrmnIDlkI7kuIDnu4RcclxuICAgICAgICAgICAgICAgIHNzLmVuZEN1YmVHcm91cCA9IHRoaXMuX05leHRHcm91cDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pu05paw6Ieq5bex55qE5Z2Q5qCHXHJcbiAgICAgICAgbGV0IHBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KG5ldyBjYy5WZWMzKDAsIHRoaXMuX0dyaWRJbmRleCwgMCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLCBwb3MueSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+WHveaVsFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Lu75L2V5oOF5Ya15LiL6K+e55Sf6YO95bqU6K+l6LCD55So5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKiBAcGFyYW0gbGFzdEdyb3VwIFxyXG4gICAgICogQHBhcmFtIG5leHRHcm91cCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoaW5kZXg6IG51bWJlciwgbGFzdEdyb3VwOiBCbG9ja0dyb3VwLCBuZXh0R3JvdXA/OiBCbG9ja0dyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgaWYgKGxhc3RHcm91cCkge1xyXG4gICAgICAgICAgICBsYXN0R3JvdXAuX05leHRHcm91cCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuX0xhc3RHcm91cCA9IGxhc3RHcm91cDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5leHRHcm91cCkge1xyXG4gICAgICAgICAgICBuZXh0R3JvdXAuX0xhc3RHcm91cCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuX05leHRHcm91cCA9IG5leHRHcm91cDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6K+e55Sf5pe25pyA5ZCO5LiA6KGM5pa55Z2X5Zyo5oiR55qE5LiK6Z2iXHJcbiAgICAgICAgaWYgKCFzcy5lbmRDdWJlR3JvdXAgfHwgc3MuZW5kQ3ViZUdyb3VwLm5vZGUueSA+IHRoaXMubm9kZS55KSB7XHJcbiAgICAgICAgICAgIC8vIOmCo+aIkeaJjeaYr+acgOWQjuS4gOS4quS7lFxyXG4gICAgICAgICAgICBzcy5lbmRDdWJlR3JvdXAgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuWMluWJqeS9meaWueWdl1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJhbmRvbWl6ZUN1YmVMaW5lKCkge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXVxyXG4gICAgICAgIGxldCBsb29wID0gNzsgLy8g5py65LyaXHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hpbGQubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApXHJcbiAgICAgICAgICAgICAgICBwZXJjaC5wdXNoKGN1cmNvbCk7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5sZW5ndGggPj0gKGNoaWxkLmxlbmd0aCAtIDEpKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5pbmRleE9mKGluZGV4KSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmtojpmaTov5nooYzlj4rku6XkuIvnmoTmiYDmnInmiJDlkZhcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVzdHJveU1lbWJlcnMocGFseUVmZmVjdCA9IHRydWUpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBhbGxDaGlsZHJlbiA9IHRoaXMuZmluZEFsbENoaWxkcmVuKHRoaXMpO1xyXG4gICAgICAgIGFsbENoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIOWwhuavj+S4quaIkOWRmOmDveabv+aNouS4uumUgOavgeaViOaenOiKgueCuVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudC5nZXRDb21wb25lbnQoc3MuYmxvY2tOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95V2l0aEFuaW1hdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOi/meihjOa2iOmZpOaViOaenFxyXG4gICAgICAgIGlmIChwYWx5RWZmZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBpbnN0ID0gY2MuaW5zdGFudGlhdGUoc3MuRWZmZWN0X0Rlc3RvcnkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaW5zdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlkJHkuIvlr7vmib7miYDmnInmiJDlkZhcclxuICAgICAqIEBwYXJhbSBncm91cCBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmluZEFsbENoaWxkcmVuKGdyb3VwOiBCbG9ja0dyb3VwKTogY2MuTm9kZVtdIHtcclxuICAgICAgICBpZiAoZ3JvdXAubm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBDaGlsZHJlbjogY2MuTm9kZVtdID0gZ3JvdXAubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKGdyb3VwLl9MYXN0R3JvdXApXHJcbiAgICAgICAgICAgICAgICBncm91cENoaWxkcmVuID0gWy4uLmdyb3VwQ2hpbGRyZW4sIC4uLnRoaXMuZmluZEFsbENoaWxkcmVuKGdyb3VwLl9MYXN0R3JvdXApXTtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwQ2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Y+C5pWw77yM5a6PXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmraTnu4Tku6PooajnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmlkSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGdyaWRJbmRleCgpIHsgcmV0dXJuIHRoaXMuX0dyaWRJbmRleCB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOS6juatpOe7hOS4i+aWueeahOe7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0xhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGxhc3RHcm91cCgpIHsgcmV0dXJuIHRoaXMuX0xhc3RHcm91cCB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOS6juatpOe7hOS4iuaWueeahOe7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05leHRHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IG5leHRHcm91cCgpIHsgcmV0dXJuIHRoaXMuX05leHRHcm91cCB9XHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeiHquWKqOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05lZWRTdGFydDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2V0IG5lZWRTdGFydCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9OZWVkU3RhcnQgPSB2YWx1ZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHmo4Dmn6XmiJDlkZjmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9OZWVkQ2hlY2tNZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzZXQgbmVlZENoZWNrTWVtKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX05lZWRDaGVja01lbSA9IHZhbHVlIH07XHJcbiAgICBwdWJsaWMgZ2V0IG5lZWRDaGVja01lbSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fTmVlZENoZWNrTWVtKSB7IHRoaXMuX05lZWRDaGVja01lbSA9IGZhbHNlOyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxufSJdfQ==