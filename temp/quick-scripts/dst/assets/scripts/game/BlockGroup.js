
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
var SoundPlayer_1 = require("../base/tool/SoundPlayer");
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
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_des2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2tHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHdEQUF1RDtBQUN2RCxxQ0FBMkI7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFFSSx3QkFBd0I7UUFGNUIscUVBZ0pDO1FBL0JHLGFBQWE7UUFFYjs7V0FFRztRQUNPLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRXBDOztXQUVHO1FBQ08sZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFeEM7O1dBRUc7UUFDTyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUV4Qzs7V0FFRztRQUNPLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRXJDOztXQUVHO1FBQ08sbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBTTdDLENBQUM7SUE1SUcsZUFBZTtJQUVmLDBCQUFLLEdBQUw7UUFDSSxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVCO0lBRUwsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsWUFBWTtRQUNaLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQU0sT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLGlCQUFFLENBQUMsV0FBVyxFQUFFO2dCQUNuQyxZQUFZO2dCQUNaLGlCQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FB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L0QsT0FBTyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUpELFVBQXdCLEtBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUl0RSxDQUFDO0lBL0llLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnSjlCO0lBQUQsaUJBQUM7Q0FoSkQsQUFnSkMsQ0FoSnVDLEVBQUUsQ0FBQyxTQUFTLEdBZ0puRDtrQkFoSm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbmltcG9ydCB7IFNvdW5kUGxheWVyIH0gZnJvbSAnLi4vYmFzZS90b29sL1NvdW5kUGxheWVyJztcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0dyb3VwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDpmo/mnLrlnLDlm75cclxuICAgICAgICBpZiAodGhpcy5fTmVlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplQ3ViZUxpbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIOajgOafpeaIkOWRmOaYr+WQpua7oeS6hu+8n1xyXG4gICAgICAgIGlmICh0aGlzLm5lZWRDaGVja01lbSkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLm5vZGUuY2hpbGRyZW4uZmlsdGVyKHZhbHVlID0+IHsgcmV0dXJuIHZhbHVlLmlzVmFsaWQgfSk7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPj0gc3MuR2FtZV9Db2x1bW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIOa7oeS6huWwsemUgOavge+8jOW5tuWKoOWIhlxyXG4gICAgICAgICAgICAgICAgc3Muc2NvcmVfYWRkID0gdGhpcy5kZXN0cm95TWVtYmVycygpO1xyXG4gICAgICAgICAgICAgICAgLy8g54S25ZCO5bCG5LiK5LiA5Liq6K6+5Li65pyA5ZCO5LiA57uEXHJcbiAgICAgICAgICAgICAgICBzcy5lbmRDdWJlR3JvdXAgPSB0aGlzLl9OZXh0R3JvdXA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOabtOaWsOiHquW3seeahOWdkOagh1xyXG4gICAgICAgIGxldCBwb3MgPSBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkSW5kZXgsIDApKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgcG9zLnksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflh73mlbBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7u+S9leaDheWGteS4i+ivnueUn+mDveW6lOivpeiwg+eUqOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICogQHBhcmFtIGxhc3RHcm91cCBcclxuICAgICAqIEBwYXJhbSBuZXh0R3JvdXAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KGluZGV4OiBudW1iZXIsIGxhc3RHcm91cDogQmxvY2tHcm91cCwgbmV4dEdyb3VwPzogQmxvY2tHcm91cCkge1xyXG4gICAgICAgIHRoaXMuX0dyaWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGlmIChsYXN0R3JvdXApIHtcclxuICAgICAgICAgICAgbGFzdEdyb3VwLl9OZXh0R3JvdXAgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9MYXN0R3JvdXAgPSBsYXN0R3JvdXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXh0R3JvdXApIHtcclxuICAgICAgICAgICAgbmV4dEdyb3VwLl9MYXN0R3JvdXAgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9OZXh0R3JvdXAgPSBuZXh0R3JvdXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOivnueUn+aXtuacgOWQjuS4gOihjOaWueWdl+WcqOaIkeeahOS4iumdolxyXG4gICAgICAgIGlmICghc3MuZW5kQ3ViZUdyb3VwIHx8IHNzLmVuZEN1YmVHcm91cC5ub2RlLnkgPiB0aGlzLm5vZGUueSkge1xyXG4gICAgICAgICAgICAvLyDpgqPmiJHmiY3mmK/mnIDlkI7kuIDkuKrku5RcclxuICAgICAgICAgICAgc3MuZW5kQ3ViZUdyb3VwID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrljJbliankvZnmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByYW5kb21pemVDdWJlTGluZSgpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IHBlcmNoID0gW11cclxuICAgICAgICBsZXQgbG9vcCA9IDc7IC8vIOacuuS8mlxyXG4gICAgICAgIHdoaWxlIChsb29wLS0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cmNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoaWxkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5pbmRleE9mKGN1cmNvbCkgPCAwKVxyXG4gICAgICAgICAgICAgICAgcGVyY2gucHVzaChjdXJjb2wpO1xyXG4gICAgICAgICAgICBpZiAocGVyY2gubGVuZ3RoID49IChjaGlsZC5sZW5ndGggLSAxKSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVyY2guaW5kZXhPZihpbmRleCkgPD0gMClcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5raI6Zmk6L+Z6KGM5Y+K5Lul5LiL55qE5omA5pyJ5oiQ5ZGYXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlc3Ryb3lNZW1iZXJzKHBhbHlFZmZlY3QgPSB0cnVlKTogbnVtYmVyIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9kZXMyKTtcclxuXHJcbiAgICAgICAgbGV0IGFsbENoaWxkcmVuID0gdGhpcy5maW5kQWxsQ2hpbGRyZW4odGhpcyk7XHJcbiAgICAgICAgYWxsQ2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy8g5bCG5q+P5Liq5oiQ5ZGY6YO95pu/5o2i5Li66ZSA5q+B5pWI5p6c6IqC54K5XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50LmdldENvbXBvbmVudChzcy5ibG9ja05hbWUpO1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3lXaXRoQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g6L+Z6KGM5raI6Zmk5pWI5p6cXHJcbiAgICAgICAgaWYgKHBhbHlFZmZlY3QpIHtcclxuICAgICAgICAgICAgbGV0IGluc3QgPSBjYy5pbnN0YW50aWF0ZShzcy5FZmZlY3RfRGVzdG9yeSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpbnN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENoaWxkcmVuLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWQkeS4i+Wvu+aJvuaJgOacieaIkOWRmFxyXG4gICAgICogQHBhcmFtIGdyb3VwIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmaW5kQWxsQ2hpbGRyZW4oZ3JvdXA6IEJsb2NrR3JvdXApOiBjYy5Ob2RlW10ge1xyXG4gICAgICAgIGlmIChncm91cC5ub2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cENoaWxkcmVuOiBjYy5Ob2RlW10gPSBncm91cC5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXAuX0xhc3RHcm91cClcclxuICAgICAgICAgICAgICAgIGdyb3VwQ2hpbGRyZW4gPSBbLi4uZ3JvdXBDaGlsZHJlbiwgLi4udGhpcy5maW5kQWxsQ2hpbGRyZW4oZ3JvdXAuX0xhc3RHcm91cCldO1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBDaGlsZHJlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflj4LmlbDvvIzlro9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOatpOe7hOS7o+ihqOeahOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgZ3JpZEluZGV4KCkgeyByZXR1cm4gdGhpcy5fR3JpZEluZGV4IH1cclxuICAgIC8qKlxyXG4gICAgICog5aSE5LqO5q2k57uE5LiL5pa555qE57uEXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTGFzdEdyb3VwOiBCbG9ja0dyb3VwID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgbGFzdEdyb3VwKCkgeyByZXR1cm4gdGhpcy5fTGFzdEdyb3VwIH1cclxuICAgIC8qKlxyXG4gICAgICog5aSE5LqO5q2k57uE5LiK5pa555qE57uEXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTmV4dEdyb3VwOiBCbG9ja0dyb3VwID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgbmV4dEdyb3VwKCkgeyByZXR1cm4gdGhpcy5fTmV4dEdyb3VwIH1cclxuICAgIC8qKlxyXG4gICAgICog6ZyA6KaB6Ieq5Yqo5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTmVlZFN0YXJ0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzZXQgbmVlZFN0YXJ0KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX05lZWRTdGFydCA9IHZhbHVlIH07XHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeajgOafpeaIkOWRmOagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05lZWRDaGVja01lbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNldCBuZWVkQ2hlY2tNZW0odmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fTmVlZENoZWNrTWVtID0gdmFsdWUgfTtcclxuICAgIHB1YmxpYyBnZXQgbmVlZENoZWNrTWVtKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9OZWVkQ2hlY2tNZW0pIHsgdGhpcy5fTmVlZENoZWNrTWVtID0gZmFsc2U7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG59Il19