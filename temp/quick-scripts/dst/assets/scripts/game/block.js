
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
cc._RF.push(module, 'f6bc6FrRRVPbpB9I2O8jbmT', 'Block');
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
var PawnClass_1 = require("../base/class/PawnClass");
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
        _this._WaitForConflict = 1;
        return _this;
    }
    // onLoad () {}
    block.prototype.start = function () {
    };
    block.prototype.update = function (dt) {
        if (!this.conflict && this.enabledCollision)
            this.node['playerMovement'].updateByVelocity(dt);
        else
            this.node['otherMovement'].updateByVelocity(dt);
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
        else
            this.treeIndex = Index;
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
            }
            // 如果组不在树中，说明在最外边
            else {
                NoRootTree_1.default.tree.addFromFront((_a = {}, _a[this['_id']] = this.node, _a));
            }
            this.treeIndex = selfTreeIndex;
        }
        // 如果还未存在冲突
        if (!this.conflict) {
            // 对齐,避免发生重复对齐
            this.AlignPos = otherBlock.AlignPos;
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
        if (this.waitForConflict)
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
        this.conflict = true;
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
            return this._WaitForConflict-- <= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "AlignPos", {
        /**
         * 获取对齐坐标
         */
        get: function () {
            if (!this.enabledCollision) {
                var treeIndexObject = NoRootTree_1.default.tree.getBuffer(NoRootTree_1.default.tree.getNextIndex(this.treeIndex, -1));
                if (treeIndexObject) {
                    var AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
                    return new cc.Vec2(this.node.x, AlignTarget.y);
                }
            }
            return new cc.Vec2(this.node.x, this.node.y - DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.cubeHeight);
        },
        /**
         * 设置对齐坐标
         */
        set: function (value) {
            this.node.setPosition(value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1HO0FBQ25HLHFEQUFnRDtBQUNoRCxzREFBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUMseUJBQVM7SUFBNUM7UUFFSSx3QkFBd0I7UUFGNUIscUVBZ09DO1FBNUVHLHlHQUF5RztRQUV6Rzs7O1dBR0c7UUFDTyxnQkFBVSxHQUFXLElBQUksQ0FBQztRQWExQixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixtQkFBYSxHQUFVLElBQUksQ0FBQztRQUN0Qzs7V0FFRztRQUNPLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUk1Qzs7V0FFRztRQUNPLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFlckM7O1dBRUc7UUFDSyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7O0lBMkJ6QyxDQUFDO0lBNU5HLGVBQWU7SUFFZixxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHlHQUF5RztJQUV6Rzs7O09BR0c7SUFDSSxvQkFBSSxHQUFYLFVBQVksS0FBYSxFQUFFLFVBQTJCO1FBQTNCLDJCQUFBLEVBQUEsa0JBQTJCO1FBQ2xELElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUks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LENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRywyQ0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM5RSxDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQU5BO0lBek5nQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZ096QjtJQUFELFlBQUM7Q0FoT0QsQUFnT0MsQ0FoT2tDLG1CQUFTLEdBZ08zQztrQkFoT29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IFBhd25DbGFzcyBmcm9tICcuLi9iYXNlL2NsYXNzL1Bhd25DbGFzcyc7XHJcbmltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibG9jayBleHRlbmRzIFBhd25DbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25mbGljdCAmJiB0aGlzLmVuYWJsZWRDb2xsaXNpb24pXHJcbiAgICAgICAgICAgIHRoaXMubm9kZVsncGxheWVyTW92ZW1lbnQnXS51cGRhdGVCeVZlbG9jaXR5KGR0KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZVsnb3RoZXJNb3ZlbWVudCddLnVwZGF0ZUJ5VmVsb2NpdHkoZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gSW5kZXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KEluZGV4OiBudW1iZXIsIHBsYXllck1vZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChwbGF5ZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ncm91cCA9ICdwbGF5ZXInXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZENvbGxpc2lvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50cmVlSW5kZXggPSBJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSByZXR1cm47XHJcbiAgICAgICAgY2MubG9nKFwi56Kw5pKe5byA5aeLXCIpO1xyXG5cclxuICAgICAgICAvLyDojrflj5bnorDmkp7nmoTmoJHoioLngrlcclxuICAgICAgICBsZXQgb3RoZXJCbG9jayA9IHRoaXMuZ2V0QmxvY2tDb21wb25lbnQob3RoZXIpO1xyXG4gICAgICAgIGxldCBvdGhlclRyZWVJbmRleCA9IG90aGVyQmxvY2sudHJlZUluZGV4O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3RoZXJUcmVlSW5kZXggPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGZUcmVlSW5kZXggPSBOVFIudHJlZS5nZXROZXh0SW5kZXgob3RoZXJUcmVlSW5kZXgsIC0xKTtcclxuICAgICAgICAgICAgbGV0IHRyZWVHcm91cCA9IE5UUi50cmVlLmdldEJ1ZmZlcihzZWxmVHJlZUluZGV4KTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c57uE5Zyo5qCR5LitXHJcbiAgICAgICAgICAgIGlmICh0cmVlR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIOeUseS6juiHquW3seeahOWIsOadpeiAjOWhq+WFheS6huS4gOihjFxyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRyZWVHcm91cCkubGVuZ3RoICsgMSA+PSBjY3Z2LmZyaXN0U2NyaXB0LmNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWwsemUgOavgeS5i+WQjuWMheaLrOiHquW3seWcqOWGheeahOaJgOacieiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVRyZWVOb2RlQWZ0ZXJJbmRleChzZWxmVHJlZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g6ICM5LiN6IO95aGr5YWF5LiA6KGM55qE6K+dXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkuLTml7bliqDlhaXliLDmraTnu4TkuK1cclxuICAgICAgICAgICAgICAgICAgICB0cmVlR3JvdXBbdGhpc1snX2lkJ11dID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWmguaenOe7hOS4jeWcqOagkeS4re+8jOivtOaYjuWcqOacgOWklui+uVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE5UUi50cmVlLmFkZEZyb21Gcm9udCh7IFt0aGlzWydfaWQnXV06IHRoaXMubm9kZSB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gc2VsZlRyZWVJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6L+Y5pyq5a2Y5Zyo5Yay56qBXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZsaWN0KSB7XHJcbiAgICAgICAgICAgIC8vIOWvuem9kCzpgb/lhY3lj5HnlJ/ph43lpI3lr7npvZBcclxuICAgICAgICAgICAgdGhpcy5BbGlnblBvcyA9IG90aGVyQmxvY2suQWxpZ25Qb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmoIforrDkuLrlhrLnqoFcclxuICAgICAgICB0aGlzLm1hcmtDb25mbGljdEFuZENvcHlNb3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+WQju+8jOeisOaSnue7k+adn+WJjeeahOaDheWGteS4i++8jOavj+asoeiuoeeul+eisOaSnue7k+aenOWQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmIChjY3Z2LmdldEluc3RhbmNlQnlOYW1lKCkpXHJcbiAgICAgICAgaWYgKHRoaXMud2FpdEZvckNvbmZsaWN0KVxyXG4gICAgICAgICAgICBjYy5sb2coXCLnorDmkp7kuK1cIik7XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7nu5PmnZ/lkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgY2MubG9nKFwi56Kw5pKe57uT5p2fXCIpO1xyXG4gICAgICAgIHRoaXMuY29uZmxpY3QgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE6ZSA5q+B5omA5pyJ6IqC54K577yM5YyF5ous6Ieq6LqrXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0cm95VHJlZU5vZGVBZnRlckluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRyZWVCZWhpbmRPYmplY3QgPSBOVFIudHJlZS5jdXQoaW5kZXgpLm9iajtcclxuICAgICAgICB0cmVlQmVoaW5kT2JqZWN0LmZvckVhY2gob2JqZWN0RWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iamVjdEVsZW1lbnQpLmZvckVhY2goZWxlbWVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0RWxlbWVudFtlbGVtZW50TmFtZV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjnu5nlrprmoJHntKLlvJXkvY3nva7kuIrmt7vliqDoh6rouqtcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFkZFRyZWVOb2RlQXRJbmRleChpbmRleCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagh+iusOS4uuWGsueqgeW5tuWkjeWItui/kOWKqCAgXHJcbiAgICAgKiDmoIforrDlhrLnqoHml7bmhI/lkbPnnYDov5DliqjlsIbmnJ3lkJHmlrDnmoTov5Dliqjnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG1hcmtDb25mbGljdEFuZENvcHlNb3Rpb24oKSB7XHJcbiAgICAgICAgLy8g5qCH6K6w5Yay56qB5bm25aSN5Yi26L+Q5YqoXHJcbiAgICAgICAgdGhpcy5jb25mbGljdCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVbJ290aGVyTW92ZW1lbnQnXSlcclxuICAgICAgICAgICAgY2N2di5mcmlzdFNjcmlwdC5iaW5kTW92ZW1lbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAvLyDlr7npvZDliLDku7vmhI/oioLngrnkuK1cclxuICAgICAgICAvLyBsZXQgdHJlZUluZGV4T2JqZWN0ID0gTlRSLnRyZWUuZ2V0QnVmZmVyKGluZGV4KTtcclxuICAgICAgICAvLyBpZiAoIXRyZWVJbmRleE9iamVjdCkge1xyXG4gICAgICAgIC8vICAgICB0cmVlSW5kZXhPYmplY3QgPSBOVFIudHJlZS5nZXRCdWZmZXIoTlRSLnRyZWUuZ2V0TmV4dEluZGV4KGluZGV4LCAxKSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCBBbGlnblRhcmdldC55IC0gY2N2di5mcmlzdFNjcmlwdC5jdWJlSGVpZ2h0KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBsZXQgQWxpZ25UYXJnZXQgPSB0cmVlSW5kZXhPYmplY3RbT2JqZWN0LmtleXModHJlZUluZGV4T2JqZWN0KVswXV07XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTSUdOUE9TVCBtYWNybyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJgOWkhOagkeiKgueCuee0ouW8lVxyXG4gICAgICog5b2T5aSE5LqO546p5a626Zi16JCl5pe277yM5q2k57Si5byV5peg5pWIXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfVHJlZUluZGV4OiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCB0cmVlSW5kZXgoKSB7IHJldHVybiB0aGlzLl9UcmVlSW5kZXggfVxyXG4gICAgcHVibGljIHNldCB0cmVlSW5kZXgodmFsdWUpIHsgdGhpcy5fVHJlZUluZGV4ID0gdmFsdWU7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YW25LuW5pa55Z2Xbm9kZeS4iueahGJsb2Nr57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gYmxvY2sgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCbG9ja0NvbXBvbmVudChibG9jayk6IGJsb2NrIHtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlID0gYmxvY2sgaW5zdGFuY2VvZiBjYy5Ob2RlID8gYmxvY2sgOiBibG9jay5ub2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5fQ29sTm9kZSB8fCB0aGlzLl9Db2xOb2RlICE9IGJsb2NrTm9kZSlcclxuICAgICAgICAgICAgdGhpcy5fQ29sQ29tcG9uZW50ID0gYmxvY2tOb2RlLmdldENvbXBvbmVudCgnQmxvY2snKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ29sQ29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9Db2xOb2RlOiBjYy5Db21wb25lbnQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9Db2xDb21wb25lbnQ6IGJsb2NrID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5YWB6K645aSE55CG56Kw5pKe77yM6L+Z5Lmf5Luj6KGo6L+Z5piv5bGe5LqO546p5a626Zi16JCl55qE5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbmFibGVkQ29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWGsueqgeagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0NvbmdsaWN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmZsaWN0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fQ29uZ2xpY3Q7IH1cclxuICAgIC8qKlxyXG4gICAgICog5qCH6K6w5oiW5Yqg5YWl5Yiw5Yay56qBXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29uZmxpY3QodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBpZiAodHlwZW9mIHZhbHVlID09ICdib29sZWFuJykge1xyXG4gICAgICAgIHRoaXMuX0NvbmdsaWN0ID0gdmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9Db25nbGljdCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGNjdnYuc2V0SW5zdGFuY2VCeU5hbWUodmFsdWUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Ymp5L2Z562J5b6F6K6h5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1dhaXRGb3JDb25mbGljdDogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm562J5b6F5Yay56qBXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgd2FpdEZvckNvbmZsaWN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9XYWl0Rm9yQ29uZmxpY3QtLSA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5a+56b2Q5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQWxpZ25Qb3MoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgbGV0IHRyZWVJbmRleE9iamVjdCA9IE5UUi50cmVlLmdldEJ1ZmZlcihOVFIudHJlZS5nZXROZXh0SW5kZXgodGhpcy50cmVlSW5kZXgsIC0xKSk7XHJcbiAgICAgICAgICAgIGlmICh0cmVlSW5kZXhPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gY2N2di5mcmlzdFNjcmlwdC5jdWJlSGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lr7npvZDlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBBbGlnblBvcyh2YWx1ZTogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==