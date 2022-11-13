
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6bc6FrRRVPbpB9I2O8jbmT', 'block');
// scripts/game/block.ts

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
var GridAdsorb_1 = require("../base/class/GridAdsorb");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1HO0FBQ25HLHFEQUFnRDtBQUNoRCx1REFBa0Q7QUFDbEQsc0RBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW1DLHlCQUFTO0lBQTVDO1FBRUksd0JBQXdCO1FBRjVCLHFFQTJPQztRQWpGRyx5R0FBeUc7UUFFekc7OztXQUdHO1FBQ08sZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFjMUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsbUJBQWEsR0FBVSxJQUFJLENBQUM7UUFDdEM7O1dBRUc7UUFDTyxzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFJNUM7O1dBRUc7UUFDTyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBZXJDOztXQUVHO1FBQ0ssc0JBQWdCLEdBQVcsQ0FBQyxDQUFDOztJQStCekMsQ0FBQztJQXZPRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxPQUFPLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFP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Q3pELFFBQVE7WUFDUixJQUFJO1lBQ0osNkVBQTZFO1lBRTdFLGVBQWU7WUFDZixPQUFPLG9CQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQU5BO0lBcE9nQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMk96QjtJQUFELFlBQUM7Q0EzT0QsQUEyT0MsQ0EzT2tDLG1CQUFTLEdBMk8zQztrQkEzT29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IFBhd25DbGFzcyBmcm9tICcuLi9iYXNlL2NsYXNzL1Bhd25DbGFzcyc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvY2xhc3MvR3JpZEFkc29yYic7XHJcbmltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibG9jayBleHRlbmRzIFBhd25DbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25mbGljdCAmJiB0aGlzLmVuYWJsZWRDb2xsaXNpb24pXHJcbiAgICAgICAgICAgIHRoaXMubm9kZVsncGxheWVyTW92ZW1lbnQnXS51cGRhdGVCeVZlbG9jaXR5KGR0KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGdyaWRQb3MgPSBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMigwLCB0aGlzLnRyZWVJbmRleCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIGdyaWRQb3MueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gSW5kZXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KEluZGV4OiBudW1iZXIsIHBsYXllck1vZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChwbGF5ZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ncm91cCA9ICdwbGF5ZXInXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZENvbGxpc2lvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVJbmRleCA9IEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSByZXR1cm47XHJcbiAgICAgICAgY2MubG9nKFwi56Kw5pKe5byA5aeLXCIpO1xyXG5cclxuICAgICAgICAvLyDojrflj5bnorDmkp7nmoTmoJHoioLngrlcclxuICAgICAgICBsZXQgb3RoZXJCbG9jayA9IHRoaXMuZ2V0QmxvY2tDb21wb25lbnQob3RoZXIpO1xyXG4gICAgICAgIGxldCBvdGhlclRyZWVJbmRleCA9IG90aGVyQmxvY2sudHJlZUluZGV4O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3RoZXJUcmVlSW5kZXggPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGZUcmVlSW5kZXggPSBOVFIudHJlZS5nZXROZXh0SW5kZXgob3RoZXJUcmVlSW5kZXgsIC0xKTtcclxuICAgICAgICAgICAgbGV0IHRyZWVHcm91cCA9IE5UUi50cmVlLmdldEJ1ZmZlcihzZWxmVHJlZUluZGV4KTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c57uE5Zyo5qCR5LitXHJcbiAgICAgICAgICAgIGlmICh0cmVlR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIOeUseS6juiHquW3seeahOWIsOadpeiAjOWhq+WFheS6huS4gOihjFxyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRyZWVHcm91cCkubGVuZ3RoICsgMSA+PSBjY3Z2LmZyaXN0U2NyaXB0LmNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWwsemUgOavgeS5i+WQjuWMheaLrOiHquW3seWcqOWGheeahOaJgOacieiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVRyZWVOb2RlQWZ0ZXJJbmRleChzZWxmVHJlZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g6ICM5LiN6IO95aGr5YWF5LiA6KGM55qE6K+dXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkuLTml7bliqDlhaXliLDmraTnu4TkuK1cclxuICAgICAgICAgICAgICAgICAgICB0cmVlR3JvdXBbdGhpc1snX2lkJ11dID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSW5kZXggPSBzZWxmVHJlZUluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWmguaenOe7hOS4jeWcqOagkeS4re+8jOivtOaYjuWcqOacgOWklui+uVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gTlRSLnRyZWUuYWRkRnJvbUZyb250KHsgW3RoaXNbJ19pZCddXTogdGhpcy5ub2RlIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzov5jmnKrlrZjlnKjlhrLnqoFcclxuICAgICAgICBpZiAoIXRoaXMuY29uZmxpY3QpIHtcclxuICAgICAgICAgICAgLy8g5a+56b2QLOmBv+WFjeWPkeeUn+mHjeWkjeWvuem9kFxyXG4gICAgICAgICAgICB0aGlzLkFsaWduUG9zID0gb3RoZXJCbG9jay5BbGlnblBvcztcclxuICAgICAgICAgICAgY2MubG9nKHRoaXMudHJlZUluZGV4LCBOVFIudHJlZS5wdXQsIE5UUi50cmVlLmdldCwgTlRSLnRyZWUuYnVmZmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOagh+iusOS4uuWGsueqgVxyXG4gICAgICAgIHRoaXMubWFya0NvbmZsaWN0QW5kQ29weU1vdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf5ZCO77yM56Kw5pKe57uT5p2f5YmN55qE5oOF5Ya15LiL77yM5q+P5qyh6K6h566X56Kw5pKe57uT5p6c5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSByZXR1cm47XHJcbiAgICAgICAgLy8gaWYgKGNjdnYuZ2V0SW5zdGFuY2VCeU5hbWUoKSlcclxuICAgICAgICBpZiAoIXRoaXMud2FpdEZvckNvbmZsaWN0KVxyXG4gICAgICAgICAgICBjYy5sb2coXCLnorDmkp7kuK1cIik7XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7nu5PmnZ/lkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgY2MubG9nKFwi56Kw5pKe57uT5p2fXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLndhaXRGb3JDb25mbGljdClcclxuICAgICAgICAgICAgdGhpcy5jb25mbGljdCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBTSUdOUE9TVCBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7jue7meWumue0ouW8leWkhOmUgOavgeaJgOacieiKgueCue+8jOWMheaLrOiHqui6q1xyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZGVzdHJveVRyZWVOb2RlQWZ0ZXJJbmRleChpbmRleCkge1xyXG4gICAgICAgIGxldCB0cmVlQmVoaW5kT2JqZWN0ID0gTlRSLnRyZWUuY3V0KGluZGV4KS5vYmo7XHJcbiAgICAgICAgdHJlZUJlaGluZE9iamVjdC5mb3JFYWNoKG9iamVjdEVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvYmplY3RFbGVtZW50KS5mb3JFYWNoKGVsZW1lbnROYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdEVsZW1lbnRbZWxlbWVudE5hbWVdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zyo57uZ5a6a5qCR57Si5byV5L2N572u5LiK5re75Yqg6Ieq6LqrXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhZGRUcmVlTm9kZUF0SW5kZXgoaW5kZXgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIforrDkuLrlhrLnqoHlubblpI3liLbov5DliqggIFxyXG4gICAgICog5qCH6K6w5Yay56qB5pe25oSP5ZGz552A6L+Q5Yqo5bCG5pyd5ZCR5paw55qE6L+Q5Yqo57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBtYXJrQ29uZmxpY3RBbmRDb3B5TW90aW9uKCkge1xyXG4gICAgICAgIC8vIOagh+iusOWGsueqgeW5tuWkjeWItui/kOWKqFxyXG4gICAgICAgIHRoaXMuY29uZmxpY3QgPSB0cnVlO1xyXG4gICAgICAgIGlmICghdGhpcy5ub2RlWydvdGhlck1vdmVtZW50J10pXHJcbiAgICAgICAgICAgIGNjdnYuZnJpc3RTY3JpcHQuYmluZE1vdmVtZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8g5a+56b2Q5Yiw5Lu75oSP6IqC54K55LitXHJcbiAgICAgICAgLy8gbGV0IHRyZWVJbmRleE9iamVjdCA9IE5UUi50cmVlLmdldEJ1ZmZlcihpbmRleCk7XHJcbiAgICAgICAgLy8gaWYgKCF0cmVlSW5kZXhPYmplY3QpIHtcclxuICAgICAgICAvLyAgICAgdHJlZUluZGV4T2JqZWN0ID0gTlRSLnRyZWUuZ2V0QnVmZmVyKE5UUi50cmVlLmdldE5leHRJbmRleChpbmRleCwgMSkpO1xyXG4gICAgICAgIC8vICAgICBsZXQgQWxpZ25UYXJnZXQgPSB0cmVlSW5kZXhPYmplY3RbT2JqZWN0LmtleXModHJlZUluZGV4T2JqZWN0KVswXV07XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSAtIGNjdnYuZnJpc3RTY3JpcHQuY3ViZUhlaWdodCkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IEFsaWduVGFyZ2V0ID0gdHJlZUluZGV4T2JqZWN0W09iamVjdC5rZXlzKHRyZWVJbmRleE9iamVjdClbMF1dO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIEFsaWduVGFyZ2V0LnkpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1QgbWFjcm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYDlpITmoJHoioLngrnntKLlvJVcclxuICAgICAqIOW9k+WkhOS6jueOqeWutumYteiQpeaXtu+8jOatpOe0ouW8leaXoOaViFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1RyZWVJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgdHJlZUluZGV4KCkgeyByZXR1cm4gdGhpcy5fVHJlZUluZGV4IH1cclxuICAgIHB1YmxpYyBzZXQgdHJlZUluZGV4KHZhbHVlKSB7IHRoaXMuX1RyZWVJbmRleCA9IHZhbHVlOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhbbku5bmlrnlnZdub2Rl5LiK55qEYmxvY2vnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBibG9jayBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEJsb2NrQ29tcG9uZW50KGJsb2NrKTogYmxvY2sge1xyXG4gICAgICAgIGxldCBibG9ja05vZGUgPSBibG9jayBpbnN0YW5jZW9mIGNjLk5vZGUgPyBibG9jayA6IGJsb2NrLm5vZGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9Db2xOb2RlIHx8IHRoaXMuX0NvbE5vZGUgIT0gYmxvY2tOb2RlKVxyXG4gICAgICAgICAgICB0aGlzLl9Db2xDb21wb25lbnQgPSBibG9ja05vZGUuZ2V0Q29tcG9uZW50KCdCbG9jaycpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Db2xDb21wb25lbnQ7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX0NvbE5vZGU6IGNjLkNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX0NvbENvbXBvbmVudDogYmxvY2sgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblhYHorrjlpITnkIbnorDmkp7vvIzov5nkuZ/ku6Pooajov5nmmK/lsZ7kuo7njqnlrrbpmLXokKXnmoTmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVuYWJsZWRDb2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yay56qB5qCH6K6wXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQ29uZ2xpY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBnZXQgY29uZmxpY3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9Db25nbGljdDsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIforrDmiJbliqDlhaXliLDlhrLnqoFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb25mbGljdCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgdGhpcy5fQ29uZ2xpY3QgPSB2YWx1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX0NvbmdsaWN0ID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgY2N2di5zZXRJbnN0YW5jZUJ5TmFtZSh2YWx1ZSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliankvZnnrYnlvoXorqHmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfV2FpdEZvckNvbmZsaWN0OiBudW1iZXIgPSAzO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbnrYnlvoXlhrLnqoFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCB3YWl0Rm9yQ29uZmxpY3QoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1dhaXRGb3JDb25mbGljdC0tID4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWvuem9kOWdkOagh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IEFsaWduUG9zKCkge1xyXG4gICAgICAgIC8vIOS9v+eUqOaXoOagueagkeaWueW8j+iOt+WPluWvuem9kOWdkOagh1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCB0cmVlSW5kZXhPYmplY3QgPSBOVFIudHJlZS5nZXRCdWZmZXIoTlRSLnRyZWUuZ2V0TmV4dEluZGV4KHRoaXMudHJlZUluZGV4LCAtMSkpO1xyXG4gICAgICAgIC8vICAgICBpZiAodHJlZUluZGV4T2JqZWN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgQWxpZ25UYXJnZXQgPSB0cmVlSW5kZXhPYmplY3RbT2JqZWN0LmtleXModHJlZUluZGV4T2JqZWN0KVswXV07XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIEFsaWduVGFyZ2V0LnkpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSAtIGNjdnYuZnJpc3RTY3JpcHQuY3ViZUhlaWdodClcclxuXHJcbiAgICAgICAgLy8g5L2/55So5a+56b2Q572R5qC86I635Y+W5a+56b2Q5Z2Q5qCHXHJcbiAgICAgICAgcmV0dXJuIEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KG5ldyBjYy5WZWMyKDAsIHRoaXMudHJlZUluZGV4IC0gMSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lr7npvZDlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBBbGlnblBvcyh2YWx1ZTogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgdmFsdWUueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==