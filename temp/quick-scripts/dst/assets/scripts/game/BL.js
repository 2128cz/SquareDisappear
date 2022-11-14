
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/BL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6bc6FrRRVPbpB9I2O8jbmT', 'BL');
// scripts/game/BL.ts

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
var PawnClass_1 = require("../base/class/PawnClass");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var block = /** @class */ (function (_super) {
    __extends(block, _super);
    function block() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // SIGNPOST macro                                                                                        
        /**
         * 所处树节点索引
         * 当处于玩家阵营时，此索引无效
         */
        _this._TreeIndex = null;
        _this._ColNode = null;
        _this._ColComponent = null;
        /**
         * 是否允许处理碰撞，这也代表这是属于玩家阵营的方块
         */
        _this.enabledCollision = false;
        /**
         * 冲突标记
         */
        _this._Conglict = false;
        /**
         * 剩余等待计数
         */
        _this._WaitForConflict = 3;
        return _this;
    }
    // onLoad () {}
    block.prototype.start = function () {
    };
    block.prototype.update = function (dt) {
        if (!this.conflict && this.enabledCollision)
            this.node['playerMovement'].updateByVelocity(dt);
        else {
            var gridPos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex));
            this.node.setPosition(this.node.x, gridPos.y);
        }
    };
    // TAG USER FUNCTION:                                                                                    
    /**
     * 初始化事件
     * @param Index
     */
    block.prototype.init = function (Index, playerMode) {
        if (playerMode === void 0) { playerMode = false; }
        if (playerMode) {
            this.node.group = 'player';
            this.enabledCollision = true;
        }
        else {
            this.treeIndex = Index;
        }
    };
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionEnter = function (other, self) {
        var _a;
        if (!this.enabledCollision)
            return;
        cc.log("碰撞开始");
        // 获取碰撞的树节点
        var otherBlock = this.getBlockComponent(other);
        var otherTreeIndex = otherBlock.treeIndex;
        if (typeof otherTreeIndex == 'number') {
            var selfTreeIndex = NoRootTree_1.default.tree.getNextIndex(otherTreeIndex, -1);
            var treeGroup = NoRootTree_1.default.tree.getBuffer(selfTreeIndex);
            // 如果组在树中
            if (treeGroup) {
                // 由于自己的到来而填充了一行
                if (Object.keys(treeGroup).length + 1 >= DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.column) {
                    // 就销毁之后包括自己在内的所有节点
                    this.destroyTreeNodeAfterIndex(selfTreeIndex + 1);
                    return;
                }
                // 而不能填充一行的话
                else {
                    // 临时加入到此组中
                    treeGroup[this['_id']] = this.node;
                }
                this.treeIndex = selfTreeIndex;
            }
            // 如果组不在树中，说明在最外边
            else {
                this.treeIndex = NoRootTree_1.default.tree.addFromFront((_a = {}, _a[this['_id']] = this.node, _a));
            }
        }
        // 如果还未存在冲突
        if (!this.conflict) {
            // 对齐,避免发生重复对齐
            this.AlignPos = otherBlock.AlignPos;
            cc.log(this.treeIndex, NoRootTree_1.default.tree.put, NoRootTree_1.default.tree.get, NoRootTree_1.default.tree.buffer);
        }
        // 标记为冲突
        this.markConflictAndCopyMotion();
    };
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionStay = function (other, self) {
        if (!this.enabledCollision)
            return;
        // if (ccvv.getInstanceByName())
        if (!this.waitForConflict)
            cc.log("碰撞中");
    };
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionExit = function (other, self) {
        if (!this.enabledCollision)
            return;
        if (!this.node.isValid)
            return;
        cc.log("碰撞结束");
        if (this.waitForConflict)
            this.conflict = false;
    };
    // SIGNPOST function                                                                                     
    /**
     * 从给定索引处销毁所有节点，包括自身
     * @param index
     */
    block.prototype.destroyTreeNodeAfterIndex = function (index) {
        var treeBehindObject = NoRootTree_1.default.tree.cut(index).obj;
        treeBehindObject.forEach(function (objectElement) {
            Object.keys(objectElement).forEach(function (elementName) {
                objectElement[elementName].destroy();
            });
        });
        this.node.destroy();
    };
    /**
     * 在给定树索引位置上添加自身
     * @param index
     */
    block.prototype.addTreeNodeAtIndex = function (index) {
    };
    /**
     * 标记为冲突并复制运动
     * 标记冲突时意味着运动将朝向新的运动组件
     * @param index
     */
    block.prototype.markConflictAndCopyMotion = function () {
        // 标记冲突并复制运动
        this.conflict = true;
        if (!this.node['otherMovement'])
            DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.bindMovement(this.node);
        // 对齐到任意节点中
        // let treeIndexObject = NTR.tree.getBuffer(index);
        // if (!treeIndexObject) {
        //     treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(index, 1));
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y - ccvv.fristScript.cubeHeight));
        // }
        // else {
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y));
        // }
    };
    Object.defineProperty(block.prototype, "treeIndex", {
        get: function () { return this._TreeIndex; },
        set: function (value) { this._TreeIndex = value; },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取其他方块node上的block组件
     * @param block
     */
    block.prototype.getBlockComponent = function (block) {
        var blockNode = block instanceof cc.Node ? block : block.node;
        if (!this._ColNode || this._ColNode != blockNode)
            this._ColComponent = blockNode.getComponent('Block');
        return this._ColComponent;
    };
    Object.defineProperty(block.prototype, "conflict", {
        get: function () { return this._Conglict; },
        /**
         * 标记或加入到冲突
         */
        set: function (value) {
            // if (typeof value == 'boolean') {
            this._Conglict = value;
            // }
            // else {
            //     this._Conglict = true;
            //     ccvv.setInstanceByName(value, this.node);
            // }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "waitForConflict", {
        /**
         * 是否等待冲突
         */
        get: function () {
            return this._WaitForConflict-- > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "AlignPos", {
        /**
         * 获取对齐坐标
         */
        get: function () {
            // 使用无根树方式获取对齐坐标
            // if (!this.enabledCollision) {
            //     let treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(this.treeIndex, -1));
            //     if (treeIndexObject) {
            //         let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
            //         return new cc.Vec2(this.node.x, AlignTarget.y)
            //     }
            // }
            // return new cc.Vec2(this.node.x, this.node.y - ccvv.fristScript.cubeHeight)
            // 使用对齐网格获取对齐坐标
            return GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex - 1));
        },
        /**
         * 设置对齐坐标
         */
        set: function (value) {
            this.node.setPosition(this.node.x, value.y);
        },
        enumerable: false,
        configurable: true
    });
    block = __decorate([
        ccclass
    ], block);
    return block;
}(PawnClass_1.default));
exports.default = block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQkwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1HO0FBQ25HLHFEQUFnRDtBQUNoRCxzREFBaUQ7QUFDakQsc0RBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW1DLHlCQUFTO0lBQTVDO1FBRUksd0JBQXdCO1FBRjVCLHFFQTJPQztRQWpGRyx5R0FBeUc7UUFFekc7OztXQUdHO1FBQ08sZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFjMUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsbUJBQWEsR0FBVSxJQUFJLENBQUM7UUFDdEM7O1dBRUc7UUFDTyxzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFJNUM7O1dBRUc7UUFDTyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBZXJDOztXQUVHO1FBQ0ssc0JBQWdCLEdBQVcsQ0FBQyxDQUFDOztJQStCekMsQ0FBQztJQXZPRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxPQUFPLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBRUQseUdBQXlHO0lBRXpHOzs7T0FHRztJQUNJLG9CQUFJLEdBQVgsVUFBWSxLQUFhLEVBQUUsVUFBMkI7UUFBM0IsMkJBQUEsRUFBQSxrQkFBMkI7UUFDbEQsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUNoQzthQUNJO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdDQUFnQixHQUF2QixVQUF3QixLQUFLLEVBQUUsSUFBSTs7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFBRSxPQUFPO1FBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFZixXQUFXO1FBQ1gsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDMUMsSUFBSSxPQUFPLGNBQWMsSUFBSSxRQUFRLEVBQUU7WUFDbkMsSUFBSSxhQUFhLEdBQUcsb0JBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksU0FBUyxHQUFHLG9CQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRCxTQUFTO1lBQ1QsSUFBSSxTQUFTLEVBQUU7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSwyQ0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQzlELG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsT0FBTztpQkFDVjtnQkFDRCxZQUFZO3FCQUNQO29CQUNELFdBQVc7b0JBQ1gsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ3RDO2dCQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO2FBQ2xDO1lBQ0QsaUJBQWlCO2lCQUNaO2dCQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxXQUFHLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFHLElBQUksQ0FBQyxJQUFJLE1BQUcsQ0FBQzthQUN4RTtTQUVKO1FBQ0QsV0FBVztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLGNBQWM7WUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9CQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxvQkFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsb0JBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkU7UUFFRCxRQUFRO1FBQ1IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQUUsT0FBTztRQUNuQyxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdEIsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCwrQkFBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQUUsT0FBTztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMvQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUU5QixDQUFDO0lBRUQseUdBQXlHO0lBRXpHOzs7T0FHRztJQUNPLHlDQUF5QixHQUFuQyxVQUFvQyxLQUFLO1FBQ3JDLElBQUksZ0JBQWdCLEdBQUcsb0JBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMvQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxhQUFhO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsV0FBVztnQkFDMUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRDs7O09BR0c7SUFDTyxrQ0FBa0IsR0FBNUIsVUFBNkIsS0FBSztJQUVsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHlDQUF5QixHQUFuQztRQUNJLFlBQVk7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDM0IsMkNBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxXQUFXO1FBQ1gsbURBQW1EO1FBQ25ELDBCQUEwQjtRQUMxQiw2RUFBNkU7UUFDN0UsMEVBQTBFO1FBQzFFLG9HQUFvRztRQUNwRyxJQUFJO1FBQ0osU0FBUztRQUNULDBFQUEwRTtRQUMxRSxzRUFBc0U7UUFDdEUsSUFBSTtJQUNSLENBQUM7SUFTRCxzQkFBVyw0QkFBUzthQUFwQixjQUF5QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUEsQ0FBQyxDQUFDO2FBQ2pELFVBQXFCLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQURQO0lBR2pEOzs7T0FHRztJQUNJLGlDQUFpQixHQUF4QixVQUF5QixLQUFLO1FBQzFCLElBQUksU0FBUyxHQUFHLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTO1lBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQWNELHNCQUFXLDJCQUFRO2FBQW5CLGNBQWlDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekQ7O1dBRUc7YUFDSCxVQUFvQixLQUFjO1lBQzlCLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJO1lBQ0osU0FBUztZQUNULDZCQUE2QjtZQUM3QixnREFBZ0Q7WUFDaEQsSUFBSTtRQUNSLENBQUM7OztPQVp3RDtJQXFCekQsc0JBQWMsa0NBQWU7UUFIN0I7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsMkJBQVE7UUFIbkI7O1dBRUc7YUFDSDtZQUNJLGdCQUFnQjtZQUNoQixnQ0FBZ0M7WUFDaEMsMkZBQTJGO1lBQzNGLDZCQUE2QjtZQUM3Qiw4RUFBOEU7WUFDOUUseURBQXlEO1lBQ3pELFFBQVE7WUFDUixJQUFJO1lBQ0osNkVBQTZFO1lBRTdFLGVBQWU7WUFDZixPQUFPLG9CQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQU5BO0lBcE9nQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMk96QjtJQUFELFlBQUM7Q0EzT0QsQUEyT0MsQ0EzT2tDLG1CQUFTLEdBMk8zQztrQkEzT29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IFBhd25DbGFzcyBmcm9tICcuLi9iYXNlL2NsYXNzL1Bhd25DbGFzcyc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJsb2NrIGV4dGVuZHMgUGF3bkNsYXNzIHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZsaWN0ICYmIHRoaXMuZW5hYmxlZENvbGxpc2lvbilcclxuICAgICAgICAgICAgdGhpcy5ub2RlWydwbGF5ZXJNb3ZlbWVudCddLnVwZGF0ZUJ5VmVsb2NpdHkoZHQpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZ3JpZFBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KG5ldyBjYy5WZWMyKDAsIHRoaXMudHJlZUluZGV4KSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgZ3JpZFBvcy55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbkuovku7ZcclxuICAgICAqIEBwYXJhbSBJbmRleCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoSW5kZXg6IG51bWJlciwgcGxheWVyTW9kZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHBsYXllck1vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ3BsYXllcidcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkQ29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf55qE5pe25YCZ6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHJldHVybjtcclxuICAgICAgICBjYy5sb2coXCLnorDmkp7lvIDlp4tcIik7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPlueisOaSnueahOagkeiKgueCuVxyXG4gICAgICAgIGxldCBvdGhlckJsb2NrID0gdGhpcy5nZXRCbG9ja0NvbXBvbmVudChvdGhlcik7XHJcbiAgICAgICAgbGV0IG90aGVyVHJlZUluZGV4ID0gb3RoZXJCbG9jay50cmVlSW5kZXg7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvdGhlclRyZWVJbmRleCA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBsZXQgc2VsZlRyZWVJbmRleCA9IE5UUi50cmVlLmdldE5leHRJbmRleChvdGhlclRyZWVJbmRleCwgLTEpO1xyXG4gICAgICAgICAgICBsZXQgdHJlZUdyb3VwID0gTlRSLnRyZWUuZ2V0QnVmZmVyKHNlbGZUcmVlSW5kZXgpO1xyXG4gICAgICAgICAgICAvLyDlpoLmnpznu4TlnKjmoJHkuK1cclxuICAgICAgICAgICAgaWYgKHRyZWVHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgLy8g55Sx5LqO6Ieq5bex55qE5Yiw5p2l6ICM5aGr5YWF5LqG5LiA6KGMXHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModHJlZUdyb3VwKS5sZW5ndGggKyAxID49IGNjdnYuZnJpc3RTY3JpcHQuY29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5bCx6ZSA5q+B5LmL5ZCO5YyF5ous6Ieq5bex5Zyo5YaF55qE5omA5pyJ6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95VHJlZU5vZGVBZnRlckluZGV4KHNlbGZUcmVlSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDogIzkuI3og73loavlhYXkuIDooYznmoTor51cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4tOaXtuWKoOWFpeWIsOatpOe7hOS4rVxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWVHcm91cFt0aGlzWydfaWQnXV0gPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVJbmRleCA9IHNlbGZUcmVlSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5aaC5p6c57uE5LiN5Zyo5qCR5Lit77yM6K+05piO5Zyo5pyA5aSW6L65XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSW5kZXggPSBOVFIudHJlZS5hZGRGcm9tRnJvbnQoeyBbdGhpc1snX2lkJ11dOiB0aGlzLm5vZGUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOi/mOacquWtmOWcqOWGsueqgVxyXG4gICAgICAgIGlmICghdGhpcy5jb25mbGljdCkge1xyXG4gICAgICAgICAgICAvLyDlr7npvZAs6YG/5YWN5Y+R55Sf6YeN5aSN5a+56b2QXHJcbiAgICAgICAgICAgIHRoaXMuQWxpZ25Qb3MgPSBvdGhlckJsb2NrLkFsaWduUG9zO1xyXG4gICAgICAgICAgICBjYy5sb2codGhpcy50cmVlSW5kZXgsIE5UUi50cmVlLnB1dCwgTlRSLnRyZWUuZ2V0LCBOVFIudHJlZS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5qCH6K6w5Li65Yay56qBXHJcbiAgICAgICAgdGhpcy5tYXJrQ29uZmxpY3RBbmRDb3B5TW90aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7kuqfnlJ/lkI7vvIznorDmkp7nu5PmnZ/liY3nmoTmg4XlhrXkuIvvvIzmr4/mrKHorqHnrpfnorDmkp7nu5PmnpzlkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgb25Db2xsaXNpb25TdGF5KG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHJldHVybjtcclxuICAgICAgICAvLyBpZiAoY2N2di5nZXRJbnN0YW5jZUJ5TmFtZSgpKVxyXG4gICAgICAgIGlmICghdGhpcy53YWl0Rm9yQ29uZmxpY3QpXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIueisOaSnuS4rVwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnue7k+adn+WQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmlzVmFsaWQpIHJldHVybjtcclxuICAgICAgICBjYy5sb2coXCLnorDmkp7nu5PmnZ9cIik7XHJcbiAgICAgICAgaWYgKHRoaXMud2FpdEZvckNvbmZsaWN0KVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZsaWN0ID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE6ZSA5q+B5omA5pyJ6IqC54K577yM5YyF5ous6Ieq6LqrXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0cm95VHJlZU5vZGVBZnRlckluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRyZWVCZWhpbmRPYmplY3QgPSBOVFIudHJlZS5jdXQoaW5kZXgpLm9iajtcclxuICAgICAgICB0cmVlQmVoaW5kT2JqZWN0LmZvckVhY2gob2JqZWN0RWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iamVjdEVsZW1lbnQpLmZvckVhY2goZWxlbWVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0RWxlbWVudFtlbGVtZW50TmFtZV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjnu5nlrprmoJHntKLlvJXkvY3nva7kuIrmt7vliqDoh6rouqtcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFkZFRyZWVOb2RlQXRJbmRleChpbmRleCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagh+iusOS4uuWGsueqgeW5tuWkjeWItui/kOWKqCAgXHJcbiAgICAgKiDmoIforrDlhrLnqoHml7bmhI/lkbPnnYDov5DliqjlsIbmnJ3lkJHmlrDnmoTov5Dliqjnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG1hcmtDb25mbGljdEFuZENvcHlNb3Rpb24oKSB7XHJcbiAgICAgICAgLy8g5qCH6K6w5Yay56qB5bm25aSN5Yi26L+Q5YqoXHJcbiAgICAgICAgdGhpcy5jb25mbGljdCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVbJ290aGVyTW92ZW1lbnQnXSlcclxuICAgICAgICAgICAgY2N2di5mcmlzdFNjcmlwdC5iaW5kTW92ZW1lbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAvLyDlr7npvZDliLDku7vmhI/oioLngrnkuK1cclxuICAgICAgICAvLyBsZXQgdHJlZUluZGV4T2JqZWN0ID0gTlRSLnRyZWUuZ2V0QnVmZmVyKGluZGV4KTtcclxuICAgICAgICAvLyBpZiAoIXRyZWVJbmRleE9iamVjdCkge1xyXG4gICAgICAgIC8vICAgICB0cmVlSW5kZXhPYmplY3QgPSBOVFIudHJlZS5nZXRCdWZmZXIoTlRSLnRyZWUuZ2V0TmV4dEluZGV4KGluZGV4LCAxKSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCBBbGlnblRhcmdldC55IC0gY2N2di5mcmlzdFNjcmlwdC5jdWJlSGVpZ2h0KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBsZXQgQWxpZ25UYXJnZXQgPSB0cmVlSW5kZXhPYmplY3RbT2JqZWN0LmtleXModHJlZUluZGV4T2JqZWN0KVswXV07XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTSUdOUE9TVCBtYWNybyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJgOWkhOagkeiKgueCuee0ouW8lVxyXG4gICAgICog5b2T5aSE5LqO546p5a626Zi16JCl5pe277yM5q2k57Si5byV5peg5pWIXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfVHJlZUluZGV4OiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCB0cmVlSW5kZXgoKSB7IHJldHVybiB0aGlzLl9UcmVlSW5kZXggfVxyXG4gICAgcHVibGljIHNldCB0cmVlSW5kZXgodmFsdWUpIHsgdGhpcy5fVHJlZUluZGV4ID0gdmFsdWU7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFtuS7luaWueWdl25vZGXkuIrnmoRibG9ja+e7hOS7tlxyXG4gICAgICogQHBhcmFtIGJsb2NrIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QmxvY2tDb21wb25lbnQoYmxvY2spOiBibG9jayB7XHJcbiAgICAgICAgbGV0IGJsb2NrTm9kZSA9IGJsb2NrIGluc3RhbmNlb2YgY2MuTm9kZSA/IGJsb2NrIDogYmxvY2subm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMuX0NvbE5vZGUgfHwgdGhpcy5fQ29sTm9kZSAhPSBibG9ja05vZGUpXHJcbiAgICAgICAgICAgIHRoaXMuX0NvbENvbXBvbmVudCA9IGJsb2NrTm9kZS5nZXRDb21wb25lbnQoJ0Jsb2NrJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NvbENvbXBvbmVudDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfQ29sTm9kZTogY2MuQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfQ29sQ29tcG9uZW50OiBibG9jayA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWFgeiuuOWkhOeQhueisOaSnu+8jOi/meS5n+S7o+ihqOi/meaYr+WxnuS6jueOqeWutumYteiQpeeahOaWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZW5hYmxlZENvbGxpc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhrLnqoHmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9Db25nbGljdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdldCBjb25mbGljdCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX0NvbmdsaWN0OyB9XHJcbiAgICAvKipcclxuICAgICAqIOagh+iusOaIluWKoOWFpeWIsOWGsueqgVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvbmZsaWN0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy8gaWYgKHR5cGVvZiB2YWx1ZSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICB0aGlzLl9Db25nbGljdCA9IHZhbHVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5fQ29uZ2xpY3QgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBjY3Z2LnNldEluc3RhbmNlQnlOYW1lKHZhbHVlLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWJqeS9meetieW+heiuoeaVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9XYWl0Rm9yQ29uZmxpY3Q6IG51bWJlciA9IDM7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuetieW+heWGsueqgVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHdhaXRGb3JDb25mbGljdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fV2FpdEZvckNvbmZsaWN0LS0gPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5a+56b2Q5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQWxpZ25Qb3MoKSB7XHJcbiAgICAgICAgLy8g5L2/55So5peg5qC55qCR5pa55byP6I635Y+W5a+56b2Q5Z2Q5qCHXHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHtcclxuICAgICAgICAvLyAgICAgbGV0IHRyZWVJbmRleE9iamVjdCA9IE5UUi50cmVlLmdldEJ1ZmZlcihOVFIudHJlZS5nZXROZXh0SW5kZXgodGhpcy50cmVlSW5kZXgsIC0xKSk7XHJcbiAgICAgICAgLy8gICAgIGlmICh0cmVlSW5kZXhPYmplY3QpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSlcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gY2N2di5mcmlzdFNjcmlwdC5jdWJlSGVpZ2h0KVxyXG5cclxuICAgICAgICAvLyDkvb/nlKjlr7npvZDnvZHmoLzojrflj5blr7npvZDlnZDmoIdcclxuICAgICAgICByZXR1cm4gR3JpZEFic29yYi5ncmlkLmdldEdyaWRQb3NpdGlvbkJ5SW5kZXgobmV3IGNjLlZlYzIoMCwgdGhpcy50cmVlSW5kZXggLSAxKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWvuem9kOWdkOagh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IEFsaWduUG9zKHZhbHVlOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCB2YWx1ZS55KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19