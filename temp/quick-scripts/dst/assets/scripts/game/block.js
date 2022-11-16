
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aabffe/a7RIpoDLOCm1Dsaa', 'Block');
// scripts/game/Block.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnMovement_1 = require("../base/tool/PawnMovement");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tag 用户宏，参数
        /**
         * 自由移动标记
         */
        _this.moveFree = false;
        /**
         * 生命周期
         */
        _this.lifeTime = cc.winSize.height / Setting_1.default.CubeSpeed;
        return _this;
    }
    // onLoad () {}
    Block.prototype.start = function () {
    };
    Block.prototype.update = function (dt) {
        if (this.moveFree) {
            this.node['movement'].updateByforce(dt);
            // this.node['movement'].updateByVelocity(dt); // 也可以用这个方法
        }
    };
    // tag 用户脚本 
    /**
     * 如果进行初始化，说明是玩家控制
     * 否则如果是系统生成不需要初始化
     */
    Block.prototype.init = function () {
        // 设定碰撞组
        this.node.group = Setting_1.default.Group_1;
        // 设定移动
        this.moveFree = true;
        // 赋予移动组件
        var movement = new PawnMovement_1.default(this.node);
        movement.permDrag = 0;
        movement.permForce = Setting_1.default.CubeVector;
        movement.velocity = Setting_1.default.CubeVector;
        this.node['movement'] = movement;
        // 定义一定时间后销毁，但是如果遇到碰撞或是其他情况，就必须取消这个定时器
        this.scheduleOnce(this.commitSuicide, this.lifeTime);
    };
    // 自我销毁
    Block.prototype.commitSuicide = function () { this.node.destroy(); };
    // tag 碰撞事件 
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    Block.prototype.onCollisionEnter = function (other, self) {
        // 清除定时器
        this.unschedule(this.commitSuicide);
        // 设定碰撞组
        this.node.group = Setting_1.default.Group_0;
        // 如果正在自由移动
        if (this.moveFree) {
            // 就禁止自由移动
            this.moveFree = false;
            // 试着加入到其他组
            var otherGroup = other.node.parent.getComponent(Setting_1.default.blockGroupName);
            var selfGroup = otherGroup.lastGroup;
            // 如果不存在这个组，就创建
            if (!selfGroup) {
                var selfGroupInst = DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.SpawnCubeGroup();
                // 重新定义自己的组
                selfGroup = selfGroupInst.getComponent(Setting_1.default.blockGroupName);
                // 初始化自己的组
                var selfGroupIndex = otherGroup.gridIndex - 1;
                selfGroup.init(selfGroupIndex, null, otherGroup);
                // 指定不需要自动初始化
                selfGroup.needStart = false;
                // 手动初始化外围部件
                selfGroup.node.children.forEach(function (element) {
                    element.destroy();
                    element.isValid = false;
                });
            }
            // 加入到组中
            this.node.setPosition(this.node.x, Setting_1.default.Cube_Perfab_Y, 0);
            this.node.removeFromParent();
            selfGroup.node.addChild(this.node);
            // 提醒组检查成员
            selfGroup.needCheckMem = true;
        }
    };
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    // onCollisionStay(other, self) {}
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    // onCollisionExit(other, self) {}
    // tag 销毁动画 
    /**
     * 替换为动画节点后销毁
     */
    Block.prototype.destroyWithAnimation = function () {
        var inst = cc.instantiate(Setting_1.default.Effect_SquareBreak);
        inst.setPosition(this.node.getPosition());
        this.node.parent.addChild(inst);
        this.node.destroy();
    };
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.default = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQWtGO0FBQ2xGLDBEQUFxRDtBQUVyRCxxQ0FBMkI7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFFSSx3QkFBd0I7UUFGNUIscUVBdUhDO1FBVEcsYUFBYTtRQUNiOztXQUVHO1FBQ08sY0FBUSxHQUFZLEtBQUssQ0FBQztRQUNwQzs7V0FFRztRQUNPLGNBQVEsR0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxpQkFBRSxDQUFDLFNBQVMsQ0FBQzs7SUFDbEUsQ0FBQztJQW5IRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLDBEQUEwRDtTQUM3RDtJQUNMLENBQUM7SUFFRCxZQUFZO0lBRVo7OztPQUdHO0lBQ0ksb0JBQUksR0FBWDtRQUNJLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBRSxDQUFDLE9BQU8sQ0FBQztRQUM3QixPQUFPO1FBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsU0FBUztRQUNULElBQUksUUFBUSxHQUFpQixJQUFJLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsaUJBQUUsQ0FBQyxVQUFVLENB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QUN4QixDQUFDO0lBNUdnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBdUh6QjtJQUFELFlBQUM7Q0F2SEQsQUF1SEMsQ0F2SGtDLEVBQUUsQ0FBQyxTQUFTLEdBdUg5QztrQkF2SG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSBcIi4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWxcIjtcclxuaW1wb3J0IFBhd25Nb3ZlbWVudCBmcm9tIFwiLi4vYmFzZS90b29sL1Bhd25Nb3ZlbWVudFwiO1xyXG5pbXBvcnQgQmxvY2tHcm91cCBmcm9tIFwiLi9CbG9ja0dyb3VwXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlRnJlZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVbJ21vdmVtZW50J10udXBkYXRlQnlmb3JjZShkdCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZVsnbW92ZW1lbnQnXS51cGRhdGVCeVZlbG9jaXR5KGR0KTsgLy8g5Lmf5Y+v5Lul55So6L+Z5Liq5pa55rOVXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLfohJrmnKwgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpoLmnpzov5vooYzliJ3lp4vljJbvvIzor7TmmI7mmK/njqnlrrbmjqfliLYgIFxyXG4gICAgICog5ZCm5YiZ5aaC5p6c5piv57O757uf55Sf5oiQ5LiN6ZyA6KaB5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOiuvuWumueisOaSnue7hFxyXG4gICAgICAgIHRoaXMubm9kZS5ncm91cCA9IHNzLkdyb3VwXzE7XHJcbiAgICAgICAgLy8g6K6+5a6a56e75YqoXHJcbiAgICAgICAgdGhpcy5tb3ZlRnJlZSA9IHRydWU7XHJcbiAgICAgICAgLy8g6LWL5LqI56e75Yqo57uE5Lu2XHJcbiAgICAgICAgbGV0IG1vdmVtZW50OiBQYXduTW92ZW1lbnQgPSBuZXcgUGF3bk1vdmVtZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1Gb3JjZSA9IHNzLkN1YmVWZWN0b3I7XHJcbiAgICAgICAgbW92ZW1lbnQudmVsb2NpdHkgPSBzcy5DdWJlVmVjdG9yO1xyXG4gICAgICAgIHRoaXMubm9kZVsnbW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgICAgIC8vIOWumuS5ieS4gOWumuaXtumXtOWQjumUgOavge+8jOS9huaYr+WmguaenOmBh+WIsOeisOaSnuaIluaYr+WFtuS7luaDheWGte+8jOWwseW/hemhu+WPlua2iOi/meS4quWumuaXtuWZqFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY29tbWl0U3VpY2lkZSwgdGhpcy5saWZlVGltZSk7XHJcbiAgICB9XHJcbiAgICAvLyDoh6rmiJHplIDmr4FcclxuICAgIHB1YmxpYyBjb21taXRTdWljaWRlKCkgeyB0aGlzLm5vZGUuZGVzdHJveSgpOyB9XHJcblxyXG4gICAgLy8gdGFnIOeisOaSnuS6i+S7tiBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgLy8g5riF6Zmk5a6a5pe25ZmoXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY29tbWl0U3VpY2lkZSk7XHJcbiAgICAgICAgLy8g6K6+5a6a56Kw5pKe57uEXHJcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gc3MuR3JvdXBfMDtcclxuICAgICAgICAvLyDlpoLmnpzmraPlnKjoh6rnlLHnp7vliqhcclxuICAgICAgICBpZiAodGhpcy5tb3ZlRnJlZSkge1xyXG4gICAgICAgICAgICAvLyDlsLHnpoHmraLoh6rnlLHnp7vliqhcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyDor5XnnYDliqDlhaXliLDlhbbku5bnu4RcclxuICAgICAgICAgICAgbGV0IG90aGVyR3JvdXA6IEJsb2NrR3JvdXAgPSBvdGhlci5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoc3MuYmxvY2tHcm91cE5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgc2VsZkdyb3VwOiBCbG9ja0dyb3VwID0gb3RoZXJHcm91cC5sYXN0R3JvdXA7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOS4jeWtmOWcqOi/meS4que7hO+8jOWwseWIm+W7ulxyXG4gICAgICAgICAgICBpZiAoIXNlbGZHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGZHcm91cEluc3QgPSBjY3Z2LmZyaXN0U2NyaXB0LlNwYXduQ3ViZUdyb3VwKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDph43mlrDlrprkuYnoh6rlt7HnmoTnu4RcclxuICAgICAgICAgICAgICAgIHNlbGZHcm91cCA9IHNlbGZHcm91cEluc3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrR3JvdXBOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluiHquW3seeahOe7hFxyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGZHcm91cEluZGV4ID0gb3RoZXJHcm91cC5ncmlkSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgc2VsZkdyb3VwLmluaXQoc2VsZkdyb3VwSW5kZXgsIG51bGwsIG90aGVyR3JvdXApO1xyXG4gICAgICAgICAgICAgICAgLy8g5oyH5a6a5LiN6ZyA6KaB6Ieq5Yqo5Yid5aeL5YyWXHJcbiAgICAgICAgICAgICAgICBzZWxmR3JvdXAubmVlZFN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyDmiYvliqjliJ3lp4vljJblpJblm7Tpg6jku7ZcclxuICAgICAgICAgICAgICAgIHNlbGZHcm91cC5ub2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDliqDlhaXliLDnu4TkuK1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCBzcy5DdWJlX1BlcmZhYl9ZLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgc2VsZkdyb3VwLm5vZGUuYWRkQ2hpbGQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8g5o+Q6YaS57uE5qOA5p+l5oiQ5ZGYXHJcbiAgICAgICAgICAgIHNlbGZHcm91cC5uZWVkQ2hlY2tNZW0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf5ZCO77yM56Kw5pKe57uT5p2f5YmN55qE5oOF5Ya15LiL77yM5q+P5qyh6K6h566X56Kw5pKe57uT5p6c5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIC8vIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge31cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe57uT5p2f5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIC8vIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge31cclxuXHJcbiAgICAvLyB0YWcg6ZSA5q+B5Yqo55S7IFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu/5o2i5Li65Yqo55S76IqC54K55ZCO6ZSA5q+BICBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlc3Ryb3lXaXRoQW5pbWF0aW9uKCkge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGluc3QgPSBjYy5pbnN0YW50aWF0ZShzcy5FZmZlY3RfU3F1YXJlQnJlYWspO1xyXG4gICAgICAgIGluc3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoaW5zdCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35a6P77yM5Y+C5pWwXHJcbiAgICAvKipcclxuICAgICAqIOiHqueUseenu+WKqOagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbW92ZUZyZWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyfXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsaWZlVGltZTogbnVtYmVyID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBzcy5DdWJlU3BlZWQ7XHJcbn1cclxuIl19