
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR0wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1HO0FBQ25HLDBEQUFxRDtBQUNyRCxzREFBaUQ7QUFDakQsc0RBQTBDO0FBRTFDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsZUFBZTtBQUVULElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBb1NDO1FBalNHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQXVIdkI7O1dBRUc7UUFDTyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQStJL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBcUJ4QyxDQUFDO0lBNVJHLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOO1FBQ0ksVUFBVTtRQUNWLDJDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPO1FBQ1AsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDaEMsT0FBTyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUV0QyxRQUFRO1FBQ1Isb0JBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxvQkFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsOERBQThEO0lBQ2xFLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxD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Q0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUMvRCxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQ2hELENBQUE7WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVywrQkFBYTtRQUh4Qjs7V0FFRzthQUNILGNBQXFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJaEQsc0JBQVcsa0NBQWdCO1FBSDNCOztXQUVHO2FBQ0gsY0FBd0MsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUl6RCxzQkFBVyw2QkFBVztRQUh0Qjs7V0FFRzthQUNILGNBQW1DLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJaEQsc0JBQVcsNkJBQVc7UUFIdEI7O1dBRUc7YUFDSCxjQUFtQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWpELHNCQUFXLDBCQUFRO1FBSG5COztXQUVHO2FBQ0gsY0FBZ0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQWhTNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FDSTtJQUd2QjtRQURDLFFBQVE7c0NBQ2M7SUFOTixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb1N4QjtJQUFELFdBQUM7Q0FwU0QsQUFvU0MsQ0FwU2lDLEVBQUUsQ0FBQyxTQUFTLEdBb1M3QztrQkFwU29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IFBhd25Nb3ZlbWVudCBmcm9tICcuLi9iYXNlL3Rvb2wvUGF3bk1vdmVtZW50JztcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgTlRSIGZyb20gXCIuLi9iYXNlL3Rvb2wvTm9Sb290VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIOeJm+WktOS6uiBOVFIg57un5om/6IeqcmluZ2J1ZmZlcue7p+aJv+iHqlJpZ29yb3VzQXJyYXlcclxuICog6amx5Yqo572R5qC8IEdyaWRBYnNvcmIg55So5p2l6amx5Yqo5YW25LuW5pa55Z2X55qE5a+56b2Q5LiO6L+Q5YqoXHJcbiAqIOenu+WKqOe7hOS7tiBQYXduTW92ZW1lbnQg566A5Y2V55qE6L+Q5Yqo6Kej566X5Zmo77yM5LuF5L+d55WZ5LqG6YCf5bqm6Kej566X5ZKM5oq16L6+6Kej566X77yM5rKh5LqL5Y+v5Lul5o2i552A546pXHJcbiAqIOaVsOWtpuWuj+W6kyBtbSDmlYjnjofkvY7vvIzmsqHkuovliKvnlKhcclxuICog5YWo5bGA5LuT5bqTIGNjdnYud2FyZWhvdXNlIOeUqOadpeS/neWtmOWKqOaAgeWKoOi9veWGheWuuVxyXG4gKiDlhajlsYDlt6XlhbcgY2N2di50b29sIOaaguaXoFxyXG4gKiDlhajlsYDlhbbku5YgY2N2di5vdGhlciDmmoLml6BcclxuICog5YWo5bGA55WM6Z2iIGNjdnYubGF5ZXIg5L+d5a2Y5b2T5YmN5LiW55WM5Lit55qE5omA5pyJ5bey5a6a5LmJ5bGCXHJcbiAqIOWFqOWxgOiEmuacrCBjY3Z2LnNjcmlwdCDkv53lrZjov5nkuKrlhbPljaHohJrmnKxcclxuICog5YWo5bGA5a6e5L6LIGNjdnYuaW5zdGFuY2Ug5L2c5Li65YWo5bGA5Yay56qB5rGgXHJcbiAqL1xyXG4vLyAo44CDwrQtz4nvvaUpIOivtuWYv34gXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5o+Q5Y2H5Li65YWz5Y2h6ISa5pysXHJcbiAgICAgICAgY2N2di5zY3JpcHQgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g5Yib5bu65peg5qC55qCRXHJcbiAgICAgICAgTlRSLnRyZWUgPSBuZXcgTlRSKHRoaXMudHJlZVNpemUpO1xyXG4gICAgICAgIC8vIOWIm+W7uue9keagvOmpseWKqFxyXG4gICAgICAgIHRoaXMuY3JlYXRHcmlkKCk7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LmZyaXN0U2NyaXB0KVxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LndhcmVob3VzZSk7XHJcbiAgICAgICAgLy8gY2N2di5sYXllcnNbMF0uYWRkQ2hpbGQobmV3IGNjdnYud2FyZWhvdXNlWydmcmFtZXMnXVsnYmcnXSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRvdWNoUmVnaXN0ZXIoKTtcclxuICAgICAgICAvLyB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCk7XHJcbiAgICAgICAgLy8g5pu05paw5omA5pyJ5pa55Z2X55qE5L2N572uXHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IG5ldyBjYy5WZWMzKDAsIC1kdCAqIHRoaXMuZ2xvYmFsU3BlZWQsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOeUn+aIkCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRHcmlkKCkge1xyXG4gICAgICAgIG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyh0aGlzLmNvbHVtbiwgdGhpcy50cmVlU2l6ZSwgMCksXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHRoaXMuY3ViZVdpZGdldCwgdGhpcy5jdWJlSGVpZ2h0LCAwKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IG5ldyBjYy5WZWMzKDAsIGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHRoaXMuY3ViZUhlaWdodCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6K+e55Sf5pa55byPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5rWB56iLLeivnueUn+aWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWFja1Jvb3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhOVFIudHJlZS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeebruagh+WPtuiKgueCueaYr+WQpuW3suS4uui/h+WOu+W8j1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrTG9zZSgpIHtcclxuICAgICAgICBsZXQgbGVhZiA9IHRoaXMuY3VyVHJlZU5vZGUoJ2xlYWYnKTtcclxuICAgICAgICBpZiAoIWxlYWYpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgbGVhZlBvcyA9IGxlYWYuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgbGV0IGlzb3V0Ym94ID0gbGVhZlBvcy55IDw9IChjYy53aW5TaXplLmhlaWdodCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCk7XHJcbiAgICAgICAgcmV0dXJuIGlzb3V0Ym94O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l55uu5qCH5qC56IqC54K55piv5ZCm5bey5Li66L+H5Y675byPXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjaGVhY2tSb290KCkge1xyXG4gICAgICAgIGxldCByb290ID0gdGhpcy5jdXJUcmVlTm9kZSgpO1xyXG4gICAgICAgIGlmICghcm9vdCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52MihjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IHNpemUyID0gc2l6ZS5kaXYoMik7XHJcbiAgICAgICAgbGV0IHJvb3RQb3MgPSByb290LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgIGxldCBpc2luYm94ID0gbmV3IG1tKHJvb3RQb3MpLmlzSW5Cb3gyKHNpemUyLCBzaXplMi5hZGQoY2MudjIoMCwgdGhpcy5jdWJlSGVpZ2h0IC8gMikpKTtcclxuICAgICAgICByZXR1cm4gaXNpbmJveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuS7u+aEj+ebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VyVHJlZU5vZGUobm9kZTogc3RyaW5nID0gJ3Jvb3QnKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKE5UUi50cmVlW25vZGVdKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmVlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7ICFOVFIudHJlZVtub2RlXVtpbmRleF07IHRyZWVJbmRleCA9ICsraW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gTlRSLnRyZWVbbm9kZV1bdHJlZUluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBOQVRJVkUgRlVOQ1RJT04gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIHRvdWNoZXZlbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jplIDop6bmkbjkuovku7ZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHRvdWNoQ2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeVRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bey57uP5rOo5YaM6Kem5pG4XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZWFkeVRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPop6bmkbjlj5HnlJ/ml7ZcclxuICAgICAqIEBwYXJhbSBldmVudCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaEFyZWEgPSBldmVudC5nZXRMb2NhdGlvbigpLnggLyB0aGlzLmN1YmVXaWRnZXQ7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1BsYXllckN1YmUoKTtcclxuICAgICAgICBsZXQgaW54ID0gTWF0aC5jZWlsKHRvdWNoQXJlYSkgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSAtICgoY2Mud2luU2l6ZS53aWR0aCArIHRoaXMuY3ViZVdpZGdldCkgLyAyKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKGlueCwgY2Mud2luU2l6ZS53aWR0aCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCAtIGNjLndpblNpemUud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+e55Sf546p5a625pa55Z2XXHJcbiAgICAgKiDnjqnlrrbmlrnlnZfkuI3lj5flhajlsYDpgJ/luqblvbHlk43vvIzkuI3mlL7lnKjmoJHkuK1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0X1BsYXllckN1YmUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3IodGhpcy5jdWJlLCBjY3Z2LmxheWVyc1sxXSk7XHJcbiAgICAgICAgdHJ5IHsgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdChudWxsLCB0cnVlKTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X3JldHJvZ3JhZGUoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7keWumumAhuWQkeenu+WKqOaOp+WItue7hOS7tlxyXG4gICAgICogQHBhcmFtIGluc3QgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBiaW5kTW92ZW1lbnRfcmV0cm9ncmFkZShpbnN0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vdmVtZW50ID0gbmV3IFBhd25Nb3ZlbWVudChpbnN0KTtcclxuICAgICAgICBtb3ZlbWVudC5tYXhTcGVlZCA9IHRoaXMucGxheWVyU3BlZWQ7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1Gb3JjZSA9IG5ldyBjYy5WZWMyKDAsIDEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgdGhpcy5wbGF5ZXJTcGVlZCk7XHJcbiAgICAgICAgaW5zdFsncGxheWVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBQcmVmYWJyaWNhdGVkIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIGluc3RhbnRpYXRpb24gYW5kIGRlc3RvcnkgQWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA6KGM5pa55Z2XXHJcbiAgICAgKiDpmo/mnLrmlrnlvI/miJHmg7PlupTor6XlpKfmpoLkuZ/orrjmmK/ni6znq4vpmo/mnLrkuovku7ZcclxuICAgICAqIOavj+ihjOe7neWvueS8mueVmeS4gOS4quepulxyXG4gICAgICogQHBhcmFtIGNoYW5jZSDnlJ/miJDmnLrkvJrvvIzmnLrkvJrotorlpKfotorlrrnmmJPmiJDlip/vvIzkvYbogq/lrprkvJrnlZnnu5nnjqnlrrbkuIDkuKrnqbrvvIzmjqjojZDlnKggMyB+IDVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0X2xpbmVDdWJlKGNoYW5jZSA9IDQpIHtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXTtcclxuICAgICAgICBsZXQgY2hpbGQgPSB7fTtcclxuICAgICAgICBsZXQgY2hpbGRJbmRleCA9IE5UUi50cmVlLmFkZChjaGlsZCk7XHJcbiAgICAgICAgbGV0IGxvb3AgPSBjaGFuY2U7XHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gdGhpcy5yYW5kb21JbkNvbHVtbjtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHBlcmNoLnB1c2goY3VyY29sKVxyXG4gICAgICAgICAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1Byb2R1Y3Rpb25DdWJlKGNoaWxkSW5kZXgsIGN1cmNvbCk7XHJcbiAgICAgICAgICAgICAgICBpbnN0LnNldFBvc2l0aW9uKHRoaXMuc3Bhd25PcmlnaW4uYWRkKGNjLnYyKGN1cmNvbCAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpLCAwKSkpXHJcbiAgICAgICAgICAgICAgICBjaGlsZFtjdXJjb2xdID0gaW5zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVyY2gubGVuZ3RoID49ICh0aGlzLmNvbHVtbiAtIDEpKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOS4quaWueWdl+WcqOWghuWPoOWxglxyXG4gICAgICog5bm25a6M5oiQ5Z+65pys5p6E6YCg6KGM5Li6XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdF9Qcm9kdWN0aW9uQ3ViZSh0cmVlSW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcik6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHRoaXMuY3ViZSwgY2N2di5sYXllcnNbMV0pXHJcbiAgICAgICAgdHJ5IHsgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdCh0cmVlSW5kZXgpOyB9XHJcbiAgICAgICAgY2F0Y2ggeyBjYy5sb2coXCLmib7kuI3liLDnu4Tku7Y6IEJsb2NrXCIpOyB9XHJcbiAgICAgICAgdGhpcy5iaW5kTW92ZW1lbnRfY29uc2VxdWVudChpbnN0KTtcclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXQgaW5zdGFudGlhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcGFyZW50IOWunuS+i+WMlueahOWvueixoeWwhuimgemZhOWKoOeahOebruagh++8jOWmguaenOeVmeepuuWImeS4uuiHqui6q1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5HlrprpobrlkJHnp7vliqjmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbnN0IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYmluZE1vdmVtZW50X2NvbnNlcXVlbnQoaW5zdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb3ZlbWVudCA9IG5ldyBQYXduTW92ZW1lbnQoaW5zdCk7XHJcbiAgICAgICAgbW92ZW1lbnQubWF4U3BlZWQgPSB0aGlzLmdsb2JhbFNwZWVkO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1EcmFnID0gMDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRm9yY2UgPSBuZXcgY2MuVmVjMigwLCAtMTIwMCk7XHJcbiAgICAgICAgbW92ZW1lbnQudmVsb2NpdHkgPSBuZXcgY2MuVmVjMigwLCAtdGhpcy5nbG9iYWxTcGVlZCk7XHJcbiAgICAgICAgaW5zdFsnb3RoZXJNb3ZlbWVudCddID0gbW92ZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWklumDqOeOqeWutumYteiQpeWkjeWItue7keWumuaOp+WItue7hOS7tlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiaW5kTW92ZW1lbnQobm9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X2NvbnNlcXVlbnQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1QgbWFjcm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIflrprnmoTpooTliLbkvZPmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlKCk6IGNjLlByZWZhYiB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydibG9jayddOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeaJgOacieeahOWIl+aVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbHVtbigpOiBudW1iZXIgeyByZXR1cm4gNDsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliJfmlbDlhoXnmoTpmo/mnLrmlbTmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCByYW5kb21JbkNvbHVtbigpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb2x1bW4pOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaWueWdl+aJgOWNoOWuveW6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGN1YmVXaWRnZXQoKTogbnVtYmVyIHsgcmV0dXJuIDE3NzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfpl7TpmpRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlSW50ZXJhdmFsKCk6IG51bWJlciB7IHJldHVybiAzOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaWueWdl+aJgOWNoOmrmOW6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGN1YmVIZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfor57nlJ/ljp/ngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGF3bk9yaWdpbigpOiBjYy5WZWMyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3NwYXduT3JpZ2luKVxyXG4gICAgICAgICAgICB0aGlzLl9zcGF3bk9yaWdpbiA9IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgLSh0aGlzLmNvbHVtbiAtIDEpICogKHRoaXMuY3ViZVdpZGdldCArIHRoaXMuY3ViZUludGVyYXZhbCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgY2Mud2luU2l6ZS5oZWlnaHQgLyAyICsgdGhpcy5jdWJlSGVpZ2h0ICogMS40XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3Bhd25PcmlnaW47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX3NwYXduT3JpZ2luOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5q+P6KGM5pyA5bCP5Y+v6K+e55Sf55qE5pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3Bhd25NaW5Db3VudCgpOiBudW1iZXIgeyByZXR1cm4gMjsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiKrmraLnur/lsY/luZXnmb7liIbmr5RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzZXBhcmF0b3JQZXJjZW50KCk6IG51bWJlciB7IHJldHVybiAuMjkwNjI1OyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFqOWxgOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdsb2JhbFNwZWVkKCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W546p5a625pa55Z2X6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGxheWVyU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qCR6KeE5qihXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdHJlZVNpemUoKTogbnVtYmVyIHsgcmV0dXJuIDMwOyB9XHJcbn1cclxuXHJcbiJdfQ==