
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219931QpohMXa9AERY/82Av', 'GL');
// scripts/game/GL.ts

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
// bug 已废弃 
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnMovement_1 = require("../base/tool/PawnMovement");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
/**
 * 牛头人 NTR 继承自ringbuffer继承自RigorousArray
 * 驱动网格 GridAbsorb 用来驱动其他方块的对齐与运动
 * 移动组件 PawnMovement 简单的运动解算器，仅保留了速度解算和抵达解算，没事可以换着玩
 * 数学宏库 mm 效率低，没事别用
 * 全局仓库 ccvv.warehouse 用来保存动态加载内容
 * 全局工具 ccvv.tool 暂无
 * 全局其他 ccvv.other 暂无
 * 全局界面 ccvv.layer 保存当前世界中的所有已定义层
 * 全局脚本 ccvv.script 保存这个关卡脚本
 * 全局实例 ccvv.instance 作为全局冲突池
 */
// (〃´-ω･) 诶嘿~ 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        /**
         * 已经注册触摸
         */
        _this.readyTouch = false;
        _this._spawnOrigin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        // 提升为关卡脚本
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
        // 创建无根树
        NoRootTree_1.default.tree = new NoRootTree_1.default(this.treeSize);
        // 创建网格驱动
        this.creatGrid();
        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    };
    Game.prototype.start = function () {
        this.touchRegister();
        // this.creat_lineCube();
    };
    Game.prototype.update = function (dt) {
        this.gameProcess_SpawnCube();
        // 更新所有方块的位置
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, -dt * this.globalSpeed, 0);
    };
    // TAG USER FUNCTION:                                                                                    
    // SIGNPOST 网格生成                                                                                     
    Game.prototype.creatGrid = function () {
        new GridAdsorb_1.default(new cc.Vec3(this.column, this.treeSize, 0), new cc.Vec3(this.cubeWidget, this.cubeHeight, 0));
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, cc.winSize.height / 2 + this.cubeHeight, 0);
    };
    // SIGNPOST 诞生方式                                                                                     
    /**
     * 游戏流程-诞生方块
     */
    Game.prototype.gameProcess_SpawnCube = function () {
        if (this.cheackRoot()) {
            this.creat_lineCube();
            // cc.log(NTR.tree.buffer);
        }
    };
    /**
     * 检查目标叶节点是否已为过去式
     */
    Game.prototype.cheackLose = function () {
        var leaf = this.curTreeNode('leaf');
        if (!leaf)
            return false;
        var leafPos = leaf.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isoutbox = leafPos.y <= (cc.winSize.height * this.separatorPercent);
        return isoutbox;
    };
    /**
     * 检查目标根节点是否已为过去式
     */
    Game.prototype.cheackRoot = function () {
        var root = this.curTreeNode();
        if (!root)
            return true;
        var size = cc.v2(cc.winSize.width, cc.winSize.height);
        var size2 = size.div(2);
        var rootPos = root.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isinbox = new DevelopersToolGlobal_1.mathMacro(rootPos).isInBox2(size2, size2.add(cc.v2(0, this.cubeHeight / 2)));
        return isinbox;
    };
    /**
     * 返回任意目标节点
     */
    Game.prototype.curTreeNode = function (node) {
        if (node === void 0) { node = 'root'; }
        if (NoRootTree_1.default.tree[node]) {
            var treeIndex = 0;
            for (var index = 0; !NoRootTree_1.default.tree[node][index]; treeIndex = ++index)
                ;
            return NoRootTree_1.default.tree[node][treeIndex];
        }
        else
            return undefined;
    };
    // TAG NATIVE FUNCTION                                                                                   
    // SIGNPOST touchevent                                                                                   
    /**
     * 注册触摸事件
     */
    Game.prototype.touchRegister = function () {
        if (!this.readyTouch) {
            this.readyTouch = true;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].on("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 注销触摸事件
     */
    Game.prototype.touchCancel = function () {
        if (this.readyTouch) {
            this.readyTouch = false;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].off("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 当触摸发生时
     * @param event
     */
    Game.prototype.onTouchStart = function (event) {
        var touchArea = event.getLocation().x / this.cubeWidget;
        var inst = this.creat_PlayerCube();
        var inx = Math.ceil(touchArea) * (this.cubeWidget + this.cubeInteraval) - ((cc.winSize.width + this.cubeWidget) / 2);
        inst.setPosition(inx, cc.winSize.width * this.separatorPercent - cc.winSize.width);
    };
    /**
     * 诞生玩家方块
     * 玩家方块不受全局速度影响，不放在树中
     */
    Game.prototype.creat_PlayerCube = function () {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(null, true);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_retrograde(inst);
        return inst;
    };
    /**
     * 绑定逆向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_retrograde = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.playerSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, 1200);
        movement.velocity = new cc.Vec2(0, this.playerSpeed);
        inst['playerMovement'] = movement;
    };
    // TAG Prefabricated function                                                                            
    // SIGNPOST instantiation and destory Actor                                                              
    /**
     * 创建一行方块
     * 随机方式我想应该大概也许是独立随机事件
     * 每行绝对会留一个空
     * @param chance 生成机会，机会越大越容易成功，但肯定会留给玩家一个空，推荐在 3 ~ 5
     */
    Game.prototype.creat_lineCube = function (chance) {
        if (chance === void 0) { chance = 4; }
        var perch = [];
        var child = {};
        var childIndex = NoRootTree_1.default.tree.add(child);
        var loop = chance;
        while (loop--) {
            var curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                perch.push(curcol);
                var inst = this.creat_ProductionCube(childIndex, curcol);
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval), 0)));
                child[curcol] = inst;
            }
            if (perch.length >= (this.column - 1))
                break;
        }
    };
    /**
     * 创建一个方块在堆叠层
     * 并完成基本构造行为
     */
    Game.prototype.creat_ProductionCube = function (treeIndex, columnIndex) {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(treeIndex);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_consequent(inst);
        return inst;
    };
    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns
     */
    Game.prototype.creatActor = function (actor, parent) {
        var actorInst = cc.instantiate(actor);
        if (parent) {
            parent.addChild(actorInst);
        }
        else {
            this.node.addChild(actorInst);
            cc.log(actorInst);
        }
        return actorInst;
    };
    /**
     * 绑定顺向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_consequent = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.globalSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, -1200);
        movement.velocity = new cc.Vec2(0, -this.globalSpeed);
        inst['otherMovement'] = movement;
    };
    /**
     * 外部玩家阵营复制绑定控制组件
     * @param node
     */
    Game.prototype.bindMovement = function (node) {
        this.bindMovement_consequent(node);
    };
    Object.defineProperty(Game.prototype, "cube", {
        // SIGNPOST macro                                                                                        
        /**
         * 获取指定的预制体方块
         */
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['block']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "column", {
        /**
         * 获取当前所有的列数
         */
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "randomInColumn", {
        /**
         * 获取列数内的随机整数
         */
        get: function () { return Math.floor(Math.random() * this.column); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeWidget", {
        /**
         * 获取方块所占宽度
         */
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeInteraval", {
        /**
         * 获取方块间隔
         */
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeHeight", {
        /**
         * 获取方块所占高度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnOrigin", {
        /**
         * 获取方块诞生原点
         */
        get: function () {
            if (!this._spawnOrigin)
                this._spawnOrigin = cc.v2(-(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2, cc.winSize.height / 2 + this.cubeHeight * 1.4);
            return this._spawnOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnMinCount", {
        /**
         * 获取每行最小可诞生的数量
         */
        get: function () { return 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "separatorPercent", {
        /**
         * 获取截止线屏幕百分比
         */
        get: function () { return .290625; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "globalSpeed", {
        /**
         * 获取全局速度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "playerSpeed", {
        /**
         * 获取玩家方块速度
         */
        get: function () { return 1000; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "treeSize", {
        /**
         * 获取树规模
         */
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], Game.prototype, "label", void 0);
    __decorate([
        property
    ], Game.prototype, "text", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR0wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsV0FBVztBQUNYLDJFQUFtRztBQUNuRywwREFBcUQ7QUFDckQsc0RBQWlEO0FBQ2pELHNEQUEwQztBQUUxQzs7Ozs7Ozs7Ozs7R0FXRztBQUNILGVBQWU7QUFFVCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW9TQztRQWpTRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUF1SHZCOztXQUVHO1FBQ08sZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUErSS9CLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXFCeEMsQ0FBQztJQTVSRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLFVBQVU7UUFDViwyQ0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsT0FBTztRQUNQLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFFdEMsUUFBUTtRQUNSLG9CQUFHLENBQUMsSUFBSSxHQUFHLElBQUksb0JBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsU0FBUztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLDhEQUE4RDtJQUNsRSxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxh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QUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFDL0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUNoRCxDQUFBO1lBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsK0JBQWE7UUFIeEI7O1dBRUc7YUFDSCxjQUFxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWhELHNCQUFXLGtDQUFnQjtRQUgzQjs7V0FFRzthQUNILGNBQXdDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJekQsc0JBQVcsNkJBQVc7UUFIdEI7O1dBRUc7YUFDSCxjQUFtQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWhELHNCQUFXLDZCQUFXO1FBSHRCOztXQUVHO2FBQ0gsY0FBbUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUlqRCxzQkFBVywwQkFBUTtRQUhuQjs7V0FFRzthQUNILGNBQWdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFoUzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRO3NDQUNjO0lBTk4sSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9TeEI7SUFBRCxXQUFDO0NBcFNELEFBb1NDLENBcFNpQyxFQUFFLENBQUMsU0FBUyxHQW9TN0M7a0JBcFNvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVnIOW3suW6n+W8gyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBQYXduTW92ZW1lbnQgZnJvbSAnLi4vYmFzZS90b29sL1Bhd25Nb3ZlbWVudCc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjtcclxuXHJcbi8qKlxyXG4gKiDniZvlpLTkurogTlRSIOe7p+aJv+iHqnJpbmdidWZmZXLnu6fmib/oh6pSaWdvcm91c0FycmF5XHJcbiAqIOmpseWKqOe9keagvCBHcmlkQWJzb3JiIOeUqOadpempseWKqOWFtuS7luaWueWdl+eahOWvuem9kOS4jui/kOWKqFxyXG4gKiDnp7vliqjnu4Tku7YgUGF3bk1vdmVtZW50IOeugOWNleeahOi/kOWKqOino+eul+WZqO+8jOS7heS/neeVmeS6humAn+W6puino+eul+WSjOaKtei+vuino+eul++8jOayoeS6i+WPr+S7peaNouedgOeOqVxyXG4gKiDmlbDlrablro/lupMgbW0g5pWI546H5L2O77yM5rKh5LqL5Yir55SoXHJcbiAqIOWFqOWxgOS7k+W6kyBjY3Z2LndhcmVob3VzZSDnlKjmnaXkv53lrZjliqjmgIHliqDovb3lhoXlrrlcclxuICog5YWo5bGA5bel5YW3IGNjdnYudG9vbCDmmoLml6BcclxuICog5YWo5bGA5YW25LuWIGNjdnYub3RoZXIg5pqC5pegXHJcbiAqIOWFqOWxgOeVjOmdoiBjY3Z2LmxheWVyIOS/neWtmOW9k+WJjeS4lueVjOS4reeahOaJgOacieW3suWumuS5ieWxglxyXG4gKiDlhajlsYDohJrmnKwgY2N2di5zY3JpcHQg5L+d5a2Y6L+Z5Liq5YWz5Y2h6ISa5pysXHJcbiAqIOWFqOWxgOWunuS+iyBjY3Z2Lmluc3RhbmNlIOS9nOS4uuWFqOWxgOWGsueqgeaxoFxyXG4gKi9cclxuLy8gKOOAg8K0Lc+J772lKSDor7blmL9+IFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOaPkOWNh+S4uuWFs+WNoeiEmuacrFxyXG4gICAgICAgIGNjdnYuc2NyaXB0ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8g5byA5ZCv56Kw5pKeXHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuaXoOagueagkVxyXG4gICAgICAgIE5UUi50cmVlID0gbmV3IE5UUih0aGlzLnRyZWVTaXplKTtcclxuICAgICAgICAvLyDliJvlu7rnvZHmoLzpqbHliqhcclxuICAgICAgICB0aGlzLmNyZWF0R3JpZCgpO1xyXG5cclxuICAgICAgICAvLyBjYy5sb2coY2N2di5mcmlzdFNjcmlwdClcclxuICAgICAgICAvLyBjYy5sb2coY2N2di53YXJlaG91c2UpO1xyXG4gICAgICAgIC8vIGNjdnYubGF5ZXJzWzBdLmFkZENoaWxkKG5ldyBjY3Z2LndhcmVob3VzZVsnZnJhbWVzJ11bJ2JnJ10pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaFJlZ2lzdGVyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jcmVhdF9saW5lQ3ViZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmdhbWVQcm9jZXNzX1NwYXduQ3ViZSgpO1xyXG4gICAgICAgIC8vIOabtOaWsOaJgOacieaWueWdl+eahOS9jee9rlxyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBuZXcgY2MuVmVjMygwLCAtZHQgKiB0aGlzLmdsb2JhbFNwZWVkLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgVVNFUiBGVU5DVElPTjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnvZHmoLznlJ/miJAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0R3JpZCgpIHtcclxuICAgICAgICBuZXcgR3JpZEFic29yYihcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzModGhpcy5jb2x1bW4sIHRoaXMudHJlZVNpemUsIDApLFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyh0aGlzLmN1YmVXaWRnZXQsIHRoaXMuY3ViZUhlaWdodCwgMClcclxuICAgICAgICApO1xyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBuZXcgY2MuVmVjMygwLCBjYy53aW5TaXplLmhlaWdodCAvIDIgKyB0aGlzLmN1YmVIZWlnaHQsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIOivnueUn+aWueW8jyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+a1geeoiy3or57nlJ/mlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdhbWVQcm9jZXNzX1NwYXduQ3ViZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVhY2tSb290KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdF9saW5lQ3ViZSgpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coTlRSLnRyZWUuYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4Dmn6Xnm67moIflj7boioLngrnmmK/lkKblt7LkuLrov4fljrvlvI9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNoZWFja0xvc2UoKSB7XHJcbiAgICAgICAgbGV0IGxlYWYgPSB0aGlzLmN1clRyZWVOb2RlKCdsZWFmJyk7XHJcbiAgICAgICAgaWYgKCFsZWFmKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGxlYWZQb3MgPSBsZWFmLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgIGxldCBpc291dGJveCA9IGxlYWZQb3MueSA8PSAoY2Mud2luU2l6ZS5oZWlnaHQgKiB0aGlzLnNlcGFyYXRvclBlcmNlbnQpO1xyXG4gICAgICAgIHJldHVybiBpc291dGJveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeebruagh+agueiKgueCueaYr+WQpuW3suS4uui/h+WOu+W8j1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrUm9vdCgpIHtcclxuICAgICAgICBsZXQgcm9vdCA9IHRoaXMuY3VyVHJlZU5vZGUoKTtcclxuICAgICAgICBpZiAoIXJvb3QpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGxldCBzaXplID0gY2MudjIoY2Mud2luU2l6ZS53aWR0aCwgY2Mud2luU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBzaXplMiA9IHNpemUuZGl2KDIpO1xyXG4gICAgICAgIGxldCByb290UG9zID0gcm9vdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICBsZXQgaXNpbmJveCA9IG5ldyBtbShyb290UG9zKS5pc0luQm94MihzaXplMiwgc2l6ZTIuYWRkKGNjLnYyKDAsIHRoaXMuY3ViZUhlaWdodCAvIDIpKSk7XHJcbiAgICAgICAgcmV0dXJuIGlzaW5ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57ku7vmhI/nm67moIfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGN1clRyZWVOb2RlKG5vZGU6IHN0cmluZyA9ICdyb290Jyk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChOVFIudHJlZVtub2RlXSkge1xyXG4gICAgICAgICAgICBsZXQgdHJlZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyAhTlRSLnRyZWVbbm9kZV1baW5kZXhdOyB0cmVlSW5kZXggPSArK2luZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIE5UUi50cmVlW25vZGVdW3RyZWVJbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgTkFUSVZFIEZVTkNUSU9OICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCB0b3VjaGV2ZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOinpuaRuOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgdG91Y2hSZWdpc3RlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVhZHlUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5vbihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rOo6ZSA6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaENhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW3sue7j+azqOWGjOinpuaRuFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVhZHlUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T6Kem5pG45Y+R55Sf5pe2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnQgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hBcmVhID0gZXZlbnQuZ2V0TG9jYXRpb24oKS54IC8gdGhpcy5jdWJlV2lkZ2V0O1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdF9QbGF5ZXJDdWJlKCk7XHJcbiAgICAgICAgbGV0IGlueCA9IE1hdGguY2VpbCh0b3VjaEFyZWEpICogKHRoaXMuY3ViZVdpZGdldCArIHRoaXMuY3ViZUludGVyYXZhbCkgLSAoKGNjLndpblNpemUud2lkdGggKyB0aGlzLmN1YmVXaWRnZXQpIC8gMik7XHJcbiAgICAgICAgaW5zdC5zZXRQb3NpdGlvbihpbngsIGNjLndpblNpemUud2lkdGggKiB0aGlzLnNlcGFyYXRvclBlcmNlbnQgLSBjYy53aW5TaXplLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOivnueUn+eOqeWutuaWueWdl1xyXG4gICAgICog546p5a625pa55Z2X5LiN5Y+X5YWo5bGA6YCf5bqm5b2x5ZON77yM5LiN5pS+5Zyo5qCR5LitXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdF9QbGF5ZXJDdWJlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHRoaXMuY3ViZSwgY2N2di5sYXllcnNbMV0pO1xyXG4gICAgICAgIHRyeSB7IGluc3QuZ2V0Q29tcG9uZW50KCdCbG9jaycpLmluaXQobnVsbCwgdHJ1ZSk7IH1cclxuICAgICAgICBjYXRjaCB7IGNjLmxvZyhcIuaJvuS4jeWIsOe7hOS7tjogQmxvY2tcIik7IH1cclxuICAgICAgICB0aGlzLmJpbmRNb3ZlbWVudF9yZXRyb2dyYWRlKGluc3QpO1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5HlrprpgIblkJHnp7vliqjmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbnN0IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYmluZE1vdmVtZW50X3JldHJvZ3JhZGUoaW5zdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb3ZlbWVudCA9IG5ldyBQYXduTW92ZW1lbnQoaW5zdCk7XHJcbiAgICAgICAgbW92ZW1lbnQubWF4U3BlZWQgPSB0aGlzLnBsYXllclNwZWVkO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1EcmFnID0gMDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRm9yY2UgPSBuZXcgY2MuVmVjMigwLCAxMjAwKTtcclxuICAgICAgICBtb3ZlbWVudC52ZWxvY2l0eSA9IG5ldyBjYy5WZWMyKDAsIHRoaXMucGxheWVyU3BlZWQpO1xyXG4gICAgICAgIGluc3RbJ3BsYXllck1vdmVtZW50J10gPSBtb3ZlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgUHJlZmFicmljYXRlZCBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCBpbnN0YW50aWF0aW9uIGFuZCBkZXN0b3J5IEFjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOihjOaWueWdl1xyXG4gICAgICog6ZqP5py65pa55byP5oiR5oOz5bqU6K+l5aSn5qaC5Lmf6K645piv54us56uL6ZqP5py65LqL5Lu2XHJcbiAgICAgKiDmr4/ooYznu53lr7nkvJrnlZnkuIDkuKrnqbpcclxuICAgICAqIEBwYXJhbSBjaGFuY2Ug55Sf5oiQ5py65Lya77yM5py65Lya6LaK5aSn6LaK5a655piT5oiQ5Yqf77yM5L2G6IKv5a6a5Lya55WZ57uZ546p5a625LiA5Liq56m677yM5o6o6I2Q5ZyoIDMgfiA1XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdF9saW5lQ3ViZShjaGFuY2UgPSA0KSB7XHJcbiAgICAgICAgbGV0IHBlcmNoID0gW107XHJcbiAgICAgICAgbGV0IGNoaWxkID0ge307XHJcbiAgICAgICAgbGV0IGNoaWxkSW5kZXggPSBOVFIudHJlZS5hZGQoY2hpbGQpO1xyXG4gICAgICAgIGxldCBsb29wID0gY2hhbmNlO1xyXG4gICAgICAgIHdoaWxlIChsb29wLS0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cmNvbCA9IHRoaXMucmFuZG9tSW5Db2x1bW47XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5pbmRleE9mKGN1cmNvbCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJjaC5wdXNoKGN1cmNvbClcclxuICAgICAgICAgICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdF9Qcm9kdWN0aW9uQ3ViZShjaGlsZEluZGV4LCBjdXJjb2wpO1xyXG4gICAgICAgICAgICAgICAgaW5zdC5zZXRQb3NpdGlvbih0aGlzLnNwYXduT3JpZ2luLmFkZChjYy52MihjdXJjb2wgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSwgMCkpKVxyXG4gICAgICAgICAgICAgICAgY2hpbGRbY3VyY29sXSA9IGluc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBlcmNoLmxlbmd0aCA+PSAodGhpcy5jb2x1bW4gLSAxKSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDkuKrmlrnlnZflnKjloIblj6DlsYJcclxuICAgICAqIOW5tuWujOaIkOWfuuacrOaehOmAoOihjOS4ulxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRfUHJvZHVjdGlvbkN1YmUodHJlZUluZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcih0aGlzLmN1YmUsIGNjdnYubGF5ZXJzWzFdKVxyXG4gICAgICAgIHRyeSB7IGluc3QuZ2V0Q29tcG9uZW50KCdCbG9jaycpLmluaXQodHJlZUluZGV4KTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X2NvbnNlcXVlbnQoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAgKiBAcGFyYW0ge2NjLlByZWZhYn0gYWN0b3Ig5a6e5L6L5YyW55qE55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHBhcmVudCDlrp7kvovljJbnmoTlr7nosaHlsIbopoHpmYTliqDnmoTnm67moIfvvIzlpoLmnpznlZnnqbrliJnkuLroh6rouqtcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRBY3RvcihhY3RvcjogY2MuUHJlZmFiLCBwYXJlbnQ/OiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGFjdG9ySW5zdCA9IGNjLmluc3RhbnRpYXRlKGFjdG9yKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7IHBhcmVudC5hZGRDaGlsZChhY3Rvckluc3QpOyB9XHJcbiAgICAgICAgZWxzZSB7IHRoaXMubm9kZS5hZGRDaGlsZChhY3Rvckluc3QpOyBjYy5sb2coYWN0b3JJbnN0KSB9XHJcbiAgICAgICAgcmV0dXJuIGFjdG9ySW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a6aG65ZCR56e75Yqo5o6n5Yi257uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gaW5zdCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGJpbmRNb3ZlbWVudF9jb25zZXF1ZW50KGluc3QpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW92ZW1lbnQgPSBuZXcgUGF3bk1vdmVtZW50KGluc3QpO1xyXG4gICAgICAgIG1vdmVtZW50Lm1heFNwZWVkID0gdGhpcy5nbG9iYWxTcGVlZDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRHJhZyA9IDA7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybUZvcmNlID0gbmV3IGNjLlZlYzIoMCwgLTEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgLXRoaXMuZ2xvYmFsU3BlZWQpO1xyXG4gICAgICAgIGluc3RbJ290aGVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpJbpg6jnjqnlrrbpmLXokKXlpI3liLbnu5HlrprmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYmluZE1vdmVtZW50KG5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJpbmRNb3ZlbWVudF9jb25zZXF1ZW50KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIG1hY3JvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a55qE6aKE5Yi25L2T5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3ViZSgpOiBjYy5QcmVmYWIgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnYmxvY2snXTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3miYDmnInnmoTliJfmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YiX5pWw5YaF55qE6ZqP5py65pW05pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcmFuZG9tSW5Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sdW1uKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDlrr3luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlV2lkZ2V0KCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6Ze06ZqUXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3ViZUludGVyYXZhbCgpOiBudW1iZXIgeyByZXR1cm4gMzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDpq5jluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6K+e55Sf5Y6f54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3Bhd25PcmlnaW4oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zcGF3bk9yaWdpbilcclxuICAgICAgICAgICAgdGhpcy5fc3Bhd25PcmlnaW4gPSBjYy52MihcclxuICAgICAgICAgICAgICAgIC0odGhpcy5jb2x1bW4gLSAxKSAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpIC8gMixcclxuICAgICAgICAgICAgICAgIGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHRoaXMuY3ViZUhlaWdodCAqIDEuNFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYXduT3JpZ2luO1xyXG4gICAgfVxyXG4gICAgcHVibGljIF9zcGF3bk9yaWdpbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluavj+ihjOacgOWwj+WPr+ivnueUn+eahOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwYXduTWluQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIDI7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oiq5q2i57q/5bGP5bmV55m+5YiG5q+UXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2VwYXJhdG9yUGVyY2VudCgpOiBudW1iZXIgeyByZXR1cm4gLjI5MDYyNTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhajlsYDpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnbG9iYWxTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gMTAwOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueOqeWutuaWueWdl+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllclNwZWVkKCk6IG51bWJlciB7IHJldHVybiAxMDAwOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagkeinhOaooVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRyZWVTaXplKCk6IG51bWJlciB7IHJldHVybiAzMDsgfVxyXG59XHJcblxyXG4iXX0=