
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GameLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219931QpohMXa9AERY/82Av', 'GameLevel');
// scripts/game/GameLevel.ts

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
var PawnMovement_1 = require("../base/class/PawnMovement");
var GridAdsorb_1 = require("../base/class/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
/**
 * 牛头人 NTR 继承自ringbuffer继承自RigorousArray
 * 移动组件 PawnMovement 简单的运动解算器，仅保留了速度解算和抵达解算，没事可以换着玩
 * 数学宏库 mm 效率低，没事别用
 * 全局仓库 ccvv.warehouse 用来保存动态加载内容
 * 全局工具 ccvv.tool 暂无
 * 全局其他 ccvv.other 暂无
 * 全局界面 ccvv.layer 保存当前世界中的所有已定义层
 * 全局脚本 ccvv.script 保存这个关卡脚本
 * 全局实例 ccvv.instance 作为全局冲突池
 */
// (〃´-ω･) 诶嘿~ 解说完毕~
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
    };
    Game.prototype.update = function (dt) {
        this.gameProcess_SpawnCube();
        // 更新所有方块的位置
        GridAdsorb_1.default;
    };
    // TAG USER FUNCTION:                                                                                    
    // SIGNPOST 网格生成                                                                                     
    Game.prototype.creatGrid = function () {
        new GridAdsorb_1.default(new cc.Vec3(this.column, this.treeSize, 0), new cc.Vec3(this.cubeWidget, this.cubeHeight, 0));
    };
    // SIGNPOST 诞生方式                                                                                     
    /**
     * 游戏流程-诞生方块
     */
    Game.prototype.gameProcess_SpawnCube = function () {
        if (this.cheackRoot()) {
            this.creat_lineCube();
            cc.log(NoRootTree_1.default.tree.buffer);
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
        var isinbox = new DevelopersToolGlobal_1.mathMacro(root.convertToWorldSpaceAR(cc.Vec2.ZERO))
            .isInBox2(size2, size2.add(cc.v2(0, this.cubeHeight / 2)));
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
     * @param chance 生成机会，机会越大越容易成功，但肯定会留给玩家一个空，推荐在3-5
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
                var inst = this.creat_ProductionCube(childIndex);
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
    Game.prototype.creat_ProductionCube = function (treeIndex) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRywyREFBc0Q7QUFDdEQsdURBQWtEO0FBQ2xELHNEQUEwQztBQUUxQzs7Ozs7Ozs7OztHQVVHO0FBQ0gsb0JBQW9CO0FBRWQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrU0M7UUEvUkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBcUh2Qjs7V0FFRztRQUNPLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBK0kvQixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFxQnhDLENBQUM7SUExUkcsd0JBQXdCO0lBRXhCLHFCQUFNLEdBQU47UUFDSSxVQUFVO1FBQ1YsMkNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLE9BQU87UUFDUCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNoQyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBRXRDLFFBQVE7UUFDUixvQkFBRyxDQUFDLElBQUksR0FBRyxJQUFJLG9CQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLFNBQVM7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQiw4REFBOEQ7SUFDbEUsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFB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QUFxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWhELHNCQUFXLGtDQUFnQjtRQUgzQjs7V0FFRzthQUNILGNBQXdDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJekQsc0JBQVcsNkJBQVc7UUFIdEI7O1dBRUc7YUFDSCxjQUFtQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWhELHNCQUFXLDZCQUFXO1FBSHRCOztXQUVHO2FBQ0gsY0FBbUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUlqRCxzQkFBVywwQkFBUTtRQUhuQjs7V0FFRzthQUNILGNBQWdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUE5UjVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRO3NDQUNjO0lBTk4sSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtTeEI7SUFBRCxXQUFDO0NBbFNELEFBa1NDLENBbFNpQyxFQUFFLENBQUMsU0FBUyxHQWtTN0M7a0JBbFNvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBQYXduTW92ZW1lbnQgZnJvbSAnLi4vYmFzZS9jbGFzcy9QYXduTW92ZW1lbnQnO1xyXG5pbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL2NsYXNzL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgTlRSIGZyb20gXCIuLi9iYXNlL3Rvb2wvTm9Sb290VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIOeJm+WktOS6uiBOVFIg57un5om/6IeqcmluZ2J1ZmZlcue7p+aJv+iHqlJpZ29yb3VzQXJyYXlcclxuICog56e75Yqo57uE5Lu2IFBhd25Nb3ZlbWVudCDnroDljZXnmoTov5Dliqjop6PnrpflmajvvIzku4Xkv53nlZnkuobpgJ/luqbop6PnrpflkozmirXovr7op6PnrpfvvIzmsqHkuovlj6/ku6XmjaLnnYDnjqlcclxuICog5pWw5a2m5a6P5bqTIG1tIOaViOeOh+S9ju+8jOayoeS6i+WIq+eUqFxyXG4gKiDlhajlsYDku5PlupMgY2N2di53YXJlaG91c2Ug55So5p2l5L+d5a2Y5Yqo5oCB5Yqg6L295YaF5a65XHJcbiAqIOWFqOWxgOW3peWFtyBjY3Z2LnRvb2wg5pqC5pegXHJcbiAqIOWFqOWxgOWFtuS7liBjY3Z2Lm90aGVyIOaaguaXoFxyXG4gKiDlhajlsYDnlYzpnaIgY2N2di5sYXllciDkv53lrZjlvZPliY3kuJbnlYzkuK3nmoTmiYDmnInlt7LlrprkuYnlsYJcclxuICog5YWo5bGA6ISa5pysIGNjdnYuc2NyaXB0IOS/neWtmOi/meS4quWFs+WNoeiEmuacrFxyXG4gKiDlhajlsYDlrp7kvosgY2N2di5pbnN0YW5jZSDkvZzkuLrlhajlsYDlhrLnqoHmsaBcclxuICovXHJcbi8vICjjgIPCtC3Pie+9pSkg6K+25Zi/fiDop6Por7Tlrozmr5V+XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5o+Q5Y2H5Li65YWz5Y2h6ISa5pysXHJcbiAgICAgICAgY2N2di5zY3JpcHQgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g5Yib5bu65peg5qC55qCRXHJcbiAgICAgICAgTlRSLnRyZWUgPSBuZXcgTlRSKHRoaXMudHJlZVNpemUpO1xyXG4gICAgICAgIC8vIOWIm+W7uue9keagvOmpseWKqFxyXG4gICAgICAgIHRoaXMuY3JlYXRHcmlkKCk7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LmZyaXN0U2NyaXB0KVxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LndhcmVob3VzZSk7XHJcbiAgICAgICAgLy8gY2N2di5sYXllcnNbMF0uYWRkQ2hpbGQobmV3IGNjdnYud2FyZWhvdXNlWydmcmFtZXMnXVsnYmcnXSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRvdWNoUmVnaXN0ZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUHJvY2Vzc19TcGF3bkN1YmUoKTtcclxuICAgICAgICAvLyDmm7TmlrDmiYDmnInmlrnlnZfnmoTkvY3nva5cclxuICAgICAgICBHcmlkQWJzb3JiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOeUn+aIkCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRHcmlkKCkge1xyXG4gICAgICAgIG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyh0aGlzLmNvbHVtbiwgdGhpcy50cmVlU2l6ZSwgMCksXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHRoaXMuY3ViZVdpZGdldCwgdGhpcy5jdWJlSGVpZ2h0LCAwKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6K+e55Sf5pa55byPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5rWB56iLLeivnueUn+aWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWFja1Jvb3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhOVFIudHJlZS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeebruagh+WPtuiKgueCueaYr+WQpuW3suS4uui/h+WOu+W8j1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrTG9zZSgpIHtcclxuICAgICAgICBsZXQgbGVhZiA9IHRoaXMuY3VyVHJlZU5vZGUoJ2xlYWYnKTtcclxuICAgICAgICBpZiAoIWxlYWYpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgbGVhZlBvcyA9IGxlYWYuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgbGV0IGlzb3V0Ym94ID0gbGVhZlBvcy55IDw9IChjYy53aW5TaXplLmhlaWdodCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCk7XHJcbiAgICAgICAgcmV0dXJuIGlzb3V0Ym94O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l55uu5qCH5qC56IqC54K55piv5ZCm5bey5Li66L+H5Y675byPXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjaGVhY2tSb290KCkge1xyXG4gICAgICAgIGxldCByb290ID0gdGhpcy5jdXJUcmVlTm9kZSgpO1xyXG4gICAgICAgIGlmICghcm9vdCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52MihjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IHNpemUyID0gc2l6ZS5kaXYoMik7XHJcbiAgICAgICAgbGV0IGlzaW5ib3ggPSBuZXcgbW0ocm9vdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSlcclxuICAgICAgICAgICAgLmlzSW5Cb3gyKHNpemUyLCBzaXplMi5hZGQoY2MudjIoMCwgdGhpcy5jdWJlSGVpZ2h0IC8gMikpKTtcclxuICAgICAgICByZXR1cm4gaXNpbmJveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuS7u+aEj+ebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VyVHJlZU5vZGUobm9kZTogc3RyaW5nID0gJ3Jvb3QnKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKE5UUi50cmVlW25vZGVdKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmVlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7ICFOVFIudHJlZVtub2RlXVtpbmRleF07IHRyZWVJbmRleCA9ICsraW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gTlRSLnRyZWVbbm9kZV1bdHJlZUluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBOQVRJVkUgRlVOQ1RJT04gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIHRvdWNoZXZlbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jplIDop6bmkbjkuovku7ZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHRvdWNoQ2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeVRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bey57uP5rOo5YaM6Kem5pG4XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZWFkeVRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPop6bmkbjlj5HnlJ/ml7ZcclxuICAgICAqIEBwYXJhbSBldmVudCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaEFyZWEgPSBldmVudC5nZXRMb2NhdGlvbigpLnggLyB0aGlzLmN1YmVXaWRnZXQ7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1BsYXllckN1YmUoKTtcclxuICAgICAgICBsZXQgaW54ID0gTWF0aC5jZWlsKHRvdWNoQXJlYSkgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSAtICgoY2Mud2luU2l6ZS53aWR0aCArIHRoaXMuY3ViZVdpZGdldCkgLyAyKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKGlueCwgY2Mud2luU2l6ZS53aWR0aCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCAtIGNjLndpblNpemUud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+e55Sf546p5a625pa55Z2XXHJcbiAgICAgKiDnjqnlrrbmlrnlnZfkuI3lj5flhajlsYDpgJ/luqblvbHlk43vvIzkuI3mlL7lnKjmoJHkuK1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0X1BsYXllckN1YmUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3IodGhpcy5jdWJlLCBjY3Z2LmxheWVyc1sxXSk7XHJcbiAgICAgICAgdHJ5IHsgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdChudWxsLCB0cnVlKTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X3JldHJvZ3JhZGUoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7keWumumAhuWQkeenu+WKqOaOp+WItue7hOS7tlxyXG4gICAgICogQHBhcmFtIGluc3QgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBiaW5kTW92ZW1lbnRfcmV0cm9ncmFkZShpbnN0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vdmVtZW50ID0gbmV3IFBhd25Nb3ZlbWVudChpbnN0KTtcclxuICAgICAgICBtb3ZlbWVudC5tYXhTcGVlZCA9IHRoaXMucGxheWVyU3BlZWQ7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1Gb3JjZSA9IG5ldyBjYy5WZWMyKDAsIDEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgdGhpcy5wbGF5ZXJTcGVlZCk7XHJcbiAgICAgICAgaW5zdFsncGxheWVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBQcmVmYWJyaWNhdGVkIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIGluc3RhbnRpYXRpb24gYW5kIGRlc3RvcnkgQWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA6KGM5pa55Z2XXHJcbiAgICAgKiDpmo/mnLrmlrnlvI/miJHmg7PlupTor6XlpKfmpoLkuZ/orrjmmK/ni6znq4vpmo/mnLrkuovku7ZcclxuICAgICAqIOavj+ihjOe7neWvueS8mueVmeS4gOS4quepulxyXG4gICAgICogQHBhcmFtIGNoYW5jZSDnlJ/miJDmnLrkvJrvvIzmnLrkvJrotorlpKfotorlrrnmmJPmiJDlip/vvIzkvYbogq/lrprkvJrnlZnnu5nnjqnlrrbkuIDkuKrnqbrvvIzmjqjojZDlnKgzLTVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0X2xpbmVDdWJlKGNoYW5jZSA9IDQpIHtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXTtcclxuICAgICAgICBsZXQgY2hpbGQgPSB7fTtcclxuICAgICAgICBsZXQgY2hpbGRJbmRleCA9IE5UUi50cmVlLmFkZChjaGlsZCk7XHJcbiAgICAgICAgbGV0IGxvb3AgPSBjaGFuY2U7XHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gdGhpcy5yYW5kb21JbkNvbHVtbjtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHBlcmNoLnB1c2goY3VyY29sKVxyXG4gICAgICAgICAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1Byb2R1Y3Rpb25DdWJlKGNoaWxkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaW5zdC5zZXRQb3NpdGlvbih0aGlzLnNwYXduT3JpZ2luLmFkZChjYy52MihjdXJjb2wgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSwgMCkpKVxyXG4gICAgICAgICAgICAgICAgY2hpbGRbY3VyY29sXSA9IGluc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBlcmNoLmxlbmd0aCA+PSAodGhpcy5jb2x1bW4gLSAxKSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDkuKrmlrnlnZflnKjloIblj6DlsYJcclxuICAgICAqIOW5tuWujOaIkOWfuuacrOaehOmAoOihjOS4ulxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRfUHJvZHVjdGlvbkN1YmUodHJlZUluZGV4OiBudW1iZXIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcih0aGlzLmN1YmUsIGNjdnYubGF5ZXJzWzFdKVxyXG4gICAgICAgIHRyeSB7IGluc3QuZ2V0Q29tcG9uZW50KCdCbG9jaycpLmluaXQodHJlZUluZGV4KTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X2NvbnNlcXVlbnQoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAgKiBAcGFyYW0ge2NjLlByZWZhYn0gYWN0b3Ig5a6e5L6L5YyW55qE55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHBhcmVudCDlrp7kvovljJbnmoTlr7nosaHlsIbopoHpmYTliqDnmoTnm67moIfvvIzlpoLmnpznlZnnqbrliJnkuLroh6rouqtcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRBY3RvcihhY3RvcjogY2MuUHJlZmFiLCBwYXJlbnQ/OiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGFjdG9ySW5zdCA9IGNjLmluc3RhbnRpYXRlKGFjdG9yKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7IHBhcmVudC5hZGRDaGlsZChhY3Rvckluc3QpOyB9XHJcbiAgICAgICAgZWxzZSB7IHRoaXMubm9kZS5hZGRDaGlsZChhY3Rvckluc3QpOyBjYy5sb2coYWN0b3JJbnN0KSB9XHJcbiAgICAgICAgcmV0dXJuIGFjdG9ySW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a6aG65ZCR56e75Yqo5o6n5Yi257uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gaW5zdCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGJpbmRNb3ZlbWVudF9jb25zZXF1ZW50KGluc3QpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW92ZW1lbnQgPSBuZXcgUGF3bk1vdmVtZW50KGluc3QpO1xyXG4gICAgICAgIG1vdmVtZW50Lm1heFNwZWVkID0gdGhpcy5nbG9iYWxTcGVlZDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRHJhZyA9IDA7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybUZvcmNlID0gbmV3IGNjLlZlYzIoMCwgLTEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgLXRoaXMuZ2xvYmFsU3BlZWQpO1xyXG4gICAgICAgIGluc3RbJ290aGVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpJbpg6jnjqnlrrbpmLXokKXlpI3liLbnu5HlrprmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYmluZE1vdmVtZW50KG5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJpbmRNb3ZlbWVudF9jb25zZXF1ZW50KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIG1hY3JvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a55qE6aKE5Yi25L2T5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3ViZSgpOiBjYy5QcmVmYWIgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnYmxvY2snXTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3miYDmnInnmoTliJfmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YiX5pWw5YaF55qE6ZqP5py65pW05pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcmFuZG9tSW5Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sdW1uKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDlrr3luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlV2lkZ2V0KCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6Ze06ZqUXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3ViZUludGVyYXZhbCgpOiBudW1iZXIgeyByZXR1cm4gMzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDpq5jluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6K+e55Sf5Y6f54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3Bhd25PcmlnaW4oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zcGF3bk9yaWdpbilcclxuICAgICAgICAgICAgdGhpcy5fc3Bhd25PcmlnaW4gPSBjYy52MihcclxuICAgICAgICAgICAgICAgIC0odGhpcy5jb2x1bW4gLSAxKSAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpIC8gMixcclxuICAgICAgICAgICAgICAgIGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHRoaXMuY3ViZUhlaWdodCAqIDEuNFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYXduT3JpZ2luO1xyXG4gICAgfVxyXG4gICAgcHVibGljIF9zcGF3bk9yaWdpbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluavj+ihjOacgOWwj+WPr+ivnueUn+eahOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwYXduTWluQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIDI7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oiq5q2i57q/5bGP5bmV55m+5YiG5q+UXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2VwYXJhdG9yUGVyY2VudCgpOiBudW1iZXIgeyByZXR1cm4gLjI5MDYyNTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhajlsYDpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnbG9iYWxTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gMTAwOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueOqeWutuaWueWdl+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllclNwZWVkKCk6IG51bWJlciB7IHJldHVybiAxMDAwOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagkeinhOaooVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRyZWVTaXplKCk6IG51bWJlciB7IHJldHVybiAzMDsgfVxyXG59XHJcblxyXG4iXX0=