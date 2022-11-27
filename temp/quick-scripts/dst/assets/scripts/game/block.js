
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
                var selfGroupIndex = DevelopersToolGlobal_1.mathMacro.PMod(otherGroup.gridIndex - 1, Setting_1.default.Game_Row2);
                selfGroup.init(selfGroupIndex, null, otherGroup);
                // 指定不需要自动初始化
                selfGroup.needStart = false;
                // 手动初始化外围部件
                selfGroup.node.children.forEach(function (element) {
                    element.destroy();
                    element.isValid = false;
                });
                // 都已经新建了，应当是末尾项目
                Setting_1.default.endCubeGroup = selfGroup;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1HO0FBQ25HLDBEQUFxRDtBQUVyRCxxQ0FBMkI7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFFSSx3QkFBd0I7UUFGNUIscUVBeUhDO1FBVEcsYUFBYTtRQUNiOztXQUVHO1FBQ08sY0FBUSxHQUFZLEtBQUssQ0FBQztRQUNwQzs7V0FFRztRQUNPLGNBQVEsR0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxpQkFBRSxDQUFDLFNBQVMsQ0FBQzs7SUFDbEUsQ0FBQztJQXJIRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLDBEQUEwRDtTQUM3RDtJQUNMLENBQUM7SUFFRCxZQUFZO0lBRVo7OztPQUdHO0lBQ0ksb0JBQUksR0FBWDtRQUNJLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBRSxDQUFDLE9BQU8sQ0FBQztRQUM3QixPQUFPO1FBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsU0FBUztRQUNULElBQUksUUFBUSxHQUFpQixJQUFJLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsaUJBQUUsQ0FBQyxVQUFVLENB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QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBOUdnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBeUh6QjtJQUFELFlBQUM7Q0F6SEQsQUF5SEMsQ0F6SGtDLEVBQUUsQ0FBQyxTQUFTLEdBeUg5QztrQkF6SG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tIFwiLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbFwiO1xyXG5pbXBvcnQgUGF3bk1vdmVtZW50IGZyb20gXCIuLi9iYXNlL3Rvb2wvUGF3bk1vdmVtZW50XCI7XHJcbmltcG9ydCBCbG9ja0dyb3VwIGZyb20gXCIuL0Jsb2NrR3JvdXBcIjtcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9jayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVGcmVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZVsnbW92ZW1lbnQnXS51cGRhdGVCeWZvcmNlKGR0KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlWydtb3ZlbWVudCddLnVwZGF0ZUJ5VmVsb2NpdHkoZHQpOyAvLyDkuZ/lj6/ku6XnlKjov5nkuKrmlrnms5VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+iEmuacrCBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWmguaenOi/m+ihjOWIneWni+WMlu+8jOivtOaYjuaYr+eOqeWutuaOp+WItiAgXHJcbiAgICAgKiDlkKbliJnlpoLmnpzmmK/ns7vnu5/nlJ/miJDkuI3pnIDopoHliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6K6+5a6a56Kw5pKe57uEXHJcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gc3MuR3JvdXBfMTtcclxuICAgICAgICAvLyDorr7lrprnp7vliqhcclxuICAgICAgICB0aGlzLm1vdmVGcmVlID0gdHJ1ZTtcclxuICAgICAgICAvLyDotYvkuojnp7vliqjnu4Tku7ZcclxuICAgICAgICBsZXQgbW92ZW1lbnQ6IFBhd25Nb3ZlbWVudCA9IG5ldyBQYXduTW92ZW1lbnQodGhpcy5ub2RlKTtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRHJhZyA9IDA7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybUZvcmNlID0gc3MuQ3ViZVZlY3RvcjtcclxuICAgICAgICBtb3ZlbWVudC52ZWxvY2l0eSA9IHNzLkN1YmVWZWN0b3I7XHJcbiAgICAgICAgdGhpcy5ub2RlWydtb3ZlbWVudCddID0gbW92ZW1lbnQ7XHJcbiAgICAgICAgLy8g5a6a5LmJ5LiA5a6a5pe26Ze05ZCO6ZSA5q+B77yM5L2G5piv5aaC5p6c6YGH5Yiw56Kw5pKe5oiW5piv5YW25LuW5oOF5Ya177yM5bCx5b+F6aG75Y+W5raI6L+Z5Liq5a6a5pe25ZmoXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jb21taXRTdWljaWRlLCB0aGlzLmxpZmVUaW1lKTtcclxuICAgIH1cclxuICAgIC8vIOiHquaIkemUgOavgVxyXG4gICAgcHVibGljIGNvbW1pdFN1aWNpZGUoKSB7IHRoaXMubm9kZS5kZXN0cm95KCk7IH1cclxuXHJcbiAgICAvLyB0YWcg56Kw5pKe5LqL5Lu2IFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf55qE5pe25YCZ6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICAvLyDmuIXpmaTlrprml7blmahcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb21taXRTdWljaWRlKTtcclxuICAgICAgICAvLyDorr7lrprnorDmkp7nu4RcclxuICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSBzcy5Hcm91cF8wO1xyXG4gICAgICAgIC8vIOWmguaenOato+WcqOiHqueUseenu+WKqFxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVGcmVlKSB7XHJcbiAgICAgICAgICAgIC8vIOWwseemgeatouiHqueUseenu+WKqFxyXG4gICAgICAgICAgICB0aGlzLm1vdmVGcmVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIOivleedgOWKoOWFpeWIsOWFtuS7lue7hFxyXG4gICAgICAgICAgICBsZXQgb3RoZXJHcm91cDogQmxvY2tHcm91cCA9IG90aGVyLm5vZGUucGFyZW50LmdldENvbXBvbmVudChzcy5ibG9ja0dyb3VwTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBzZWxmR3JvdXA6IEJsb2NrR3JvdXAgPSBvdGhlckdyb3VwLmxhc3RHcm91cDtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5LiN5a2Y5Zyo6L+Z5Liq57uE77yM5bCx5Yib5bu6XHJcbiAgICAgICAgICAgIGlmICghc2VsZkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZkdyb3VwSW5zdCA9IGNjdnYuZnJpc3RTY3JpcHQuU3Bhd25DdWJlR3JvdXAoKTtcclxuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOWumuS5ieiHquW3seeahOe7hFxyXG4gICAgICAgICAgICAgICAgc2VsZkdyb3VwID0gc2VsZkdyb3VwSW5zdC5nZXRDb21wb25lbnQoc3MuYmxvY2tHcm91cE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW6Ieq5bex55qE57uEXHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZkdyb3VwSW5kZXggPSBtbS5QTW9kKG90aGVyR3JvdXAuZ3JpZEluZGV4IC0gMSwgc3MuR2FtZV9Sb3cyKTtcclxuICAgICAgICAgICAgICAgIHNlbGZHcm91cC5pbml0KHNlbGZHcm91cEluZGV4LCBudWxsLCBvdGhlckdyb3VwKTtcclxuICAgICAgICAgICAgICAgIC8vIOaMh+WumuS4jemcgOimgeiHquWKqOWIneWni+WMllxyXG4gICAgICAgICAgICAgICAgc2VsZkdyb3VwLm5lZWRTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8g5omL5Yqo5Yid5aeL5YyW5aSW5Zu06YOo5Lu2XHJcbiAgICAgICAgICAgICAgICBzZWxmR3JvdXAubm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyDpg73lt7Lnu4/mlrDlu7rkuobvvIzlupTlvZPmmK/mnKvlsL7pobnnm65cclxuICAgICAgICAgICAgICAgIHNzLmVuZEN1YmVHcm91cCA9IHNlbGZHcm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDliqDlhaXliLDnu4TkuK1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCBzcy5DdWJlX1BlcmZhYl9ZLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgc2VsZkdyb3VwLm5vZGUuYWRkQ2hpbGQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8g5o+Q6YaS57uE5qOA5p+l5oiQ5ZGYXHJcbiAgICAgICAgICAgIHNlbGZHcm91cC5uZWVkQ2hlY2tNZW0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf5ZCO77yM56Kw5pKe57uT5p2f5YmN55qE5oOF5Ya15LiL77yM5q+P5qyh6K6h566X56Kw5pKe57uT5p6c5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIC8vIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge31cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe57uT5p2f5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIC8vIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge31cclxuXHJcbiAgICAvLyB0YWcg6ZSA5q+B5Yqo55S7IFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu/5o2i5Li65Yqo55S76IqC54K55ZCO6ZSA5q+BICBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlc3Ryb3lXaXRoQW5pbWF0aW9uKCkge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGluc3QgPSBjYy5pbnN0YW50aWF0ZShzcy5FZmZlY3RfU3F1YXJlQnJlYWspO1xyXG4gICAgICAgIGluc3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoaW5zdCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35a6P77yM5Y+C5pWwXHJcbiAgICAvKipcclxuICAgICAqIOiHqueUseenu+WKqOagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbW92ZUZyZWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyfXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsaWZlVGltZTogbnVtYmVyID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBzcy5DdWJlU3BlZWQ7XHJcbn1cclxuIl19