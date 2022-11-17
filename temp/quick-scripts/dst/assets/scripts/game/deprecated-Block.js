
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/deprecated-Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12476rd71BFcaFmWMJbv/Hz', 'deprecated-Block');
// scripts/game/deprecated-Block.ts

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
    /**
     * @deprecated 已有更好的方法
     */
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
        /**
         * @deprecated 已有更好的方法
         */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZGVwcmVjYXRlZC1CbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyRUFBbUc7QUFDbkcscURBQWdEO0FBQ2hELHNEQUFpRDtBQUNqRCxzREFBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFLNUM7SUFBbUMseUJBQVM7SUFINUM7O09BRUc7SUFDSDtRQUVJLHdCQUF3QjtRQUY1QixxRUEyT0M7UUFqRkcseUdBQXlHO1FBRXpHOzs7V0FHRztRQUNPLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBYzFCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLG1CQUFhLEdBQVUsSUFBSSxDQUFDO1FBQ3RDOztXQUVHO1FBQ08sc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBSTVDOztXQUVHO1FBQ08sZUFBUyxHQUFZLEtBQUssQ0FBQztRQWVyQzs7V0FFRztRQUNLLHNCQUFnQixHQUFXLENBQUMsQ0FBQzs7SUErQnpDLENBQUM7SUF2T0csZUFBZTtJQUVmLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksT0FBTyxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElB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OEVBQThFO1lBQzlFLHlEQUF5RDtZQUN6RCxRQUFRO1lBQ1IsSUFBSTtZQUNKLDZFQUE2RTtZQUU3RSxlQUFlO1lBQ2YsT0FBTyxvQkFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FOQTtJQXBPZ0IsS0FBSztRQUp6QixPQUFPO1FBQ1I7O1dBRUc7T0FDa0IsS0FBSyxDQTJPekI7SUFBRCxZQUFDO0NBM09ELEFBMk9DLENBM09rQyxtQkFBUyxHQTJPM0M7a0JBM09vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYsIG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgUGF3bkNsYXNzIGZyb20gJy4uL2Jhc2UvY2xhc3MvUGF3bkNsYXNzJztcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgTlRSIGZyb20gXCIuLi9iYXNlL3Rvb2wvTm9Sb290VHJlZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIOW3suacieabtOWlveeahOaWueazlVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmxvY2sgZXh0ZW5kcyBQYXduQ2xhc3Mge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29uZmxpY3QgJiYgdGhpcy5lbmFibGVkQ29sbGlzaW9uKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGVbJ3BsYXllck1vdmVtZW50J10udXBkYXRlQnlWZWxvY2l0eShkdCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkUG9zID0gR3JpZEFic29yYi5ncmlkLmdldEdyaWRQb3NpdGlvbkJ5SW5kZXgobmV3IGNjLlZlYzIoMCwgdGhpcy50cmVlSW5kZXgpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCBncmlkUG9zLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgVVNFUiBGVU5DVElPTjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluS6i+S7tlxyXG4gICAgICogQHBhcmFtIEluZGV4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdChJbmRleDogbnVtYmVyLCBwbGF5ZXJNb2RlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAocGxheWVyTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSAncGxheWVyJ1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRDb2xsaXNpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlSW5kZXggPSBJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7kuqfnlJ/nmoTml7blgJnosIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIGNjLmxvZyhcIueisOaSnuW8gOWni1wiKTtcclxuXHJcbiAgICAgICAgLy8g6I635Y+W56Kw5pKe55qE5qCR6IqC54K5XHJcbiAgICAgICAgbGV0IG90aGVyQmxvY2sgPSB0aGlzLmdldEJsb2NrQ29tcG9uZW50KG90aGVyKTtcclxuICAgICAgICBsZXQgb3RoZXJUcmVlSW5kZXggPSBvdGhlckJsb2NrLnRyZWVJbmRleDtcclxuICAgICAgICBpZiAodHlwZW9mIG90aGVyVHJlZUluZGV4ID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmVHJlZUluZGV4ID0gTlRSLnRyZWUuZ2V0TmV4dEluZGV4KG90aGVyVHJlZUluZGV4LCAtMSk7XHJcbiAgICAgICAgICAgIGxldCB0cmVlR3JvdXAgPSBOVFIudHJlZS5nZXRCdWZmZXIoc2VsZlRyZWVJbmRleCk7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOe7hOWcqOagkeS4rVxyXG4gICAgICAgICAgICBpZiAodHJlZUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDnlLHkuo7oh6rlt7HnmoTliLDmnaXogIzloavlhYXkuobkuIDooYxcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0cmVlR3JvdXApLmxlbmd0aCArIDEgPj0gY2N2di5mcmlzdFNjcmlwdC5jb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlsLHplIDmr4HkuYvlkI7ljIXmi6zoh6rlt7HlnKjlhoXnmoTmiYDmnInoioLngrlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lUcmVlTm9kZUFmdGVySW5kZXgoc2VsZlRyZWVJbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOiAjOS4jeiDveWhq+WFheS4gOihjOeahOivnVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Li05pe25Yqg5YWl5Yiw5q2k57uE5LitXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlZUdyb3VwW3RoaXNbJ19pZCddXSA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gc2VsZlRyZWVJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlpoLmnpznu4TkuI3lnKjmoJHkuK3vvIzor7TmmI7lnKjmnIDlpJbovrlcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVJbmRleCA9IE5UUi50cmVlLmFkZEZyb21Gcm9udCh7IFt0aGlzWydfaWQnXV06IHRoaXMubm9kZSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6L+Y5pyq5a2Y5Zyo5Yay56qBXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZsaWN0KSB7XHJcbiAgICAgICAgICAgIC8vIOWvuem9kCzpgb/lhY3lj5HnlJ/ph43lpI3lr7npvZBcclxuICAgICAgICAgICAgdGhpcy5BbGlnblBvcyA9IG90aGVyQmxvY2suQWxpZ25Qb3M7XHJcbiAgICAgICAgICAgIGNjLmxvZyh0aGlzLnRyZWVJbmRleCwgTlRSLnRyZWUucHV0LCBOVFIudHJlZS5nZXQsIE5UUi50cmVlLmJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmoIforrDkuLrlhrLnqoFcclxuICAgICAgICB0aGlzLm1hcmtDb25mbGljdEFuZENvcHlNb3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+WQju+8jOeisOaSnue7k+adn+WJjeeahOaDheWGteS4i++8jOavj+asoeiuoeeul+eisOaSnue7k+aenOWQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmIChjY3Z2LmdldEluc3RhbmNlQnlOYW1lKCkpXHJcbiAgICAgICAgaWYgKCF0aGlzLndhaXRGb3JDb25mbGljdClcclxuICAgICAgICAgICAgY2MubG9nKFwi56Kw5pKe5LitXCIpO1xyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe57uT5p2f5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmxvZyhcIueisOaSnue7k+adn1wiKTtcclxuICAgICAgICBpZiAodGhpcy53YWl0Rm9yQ29uZmxpY3QpXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmxpY3QgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1QgZnVuY3Rpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku47nu5nlrprntKLlvJXlpITplIDmr4HmiYDmnInoioLngrnvvIzljIXmi6zoh6rouqtcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlc3Ryb3lUcmVlTm9kZUFmdGVySW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBsZXQgdHJlZUJlaGluZE9iamVjdCA9IE5UUi50cmVlLmN1dChpbmRleCkub2JqO1xyXG4gICAgICAgIHRyZWVCZWhpbmRPYmplY3QuZm9yRWFjaChvYmplY3RFbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqZWN0RWxlbWVudCkuZm9yRWFjaChlbGVtZW50TmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RFbGVtZW50W2VsZW1lbnROYW1lXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWcqOe7meWumuagkee0ouW8leS9jee9ruS4iua3u+WKoOiHqui6q1xyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWRkVHJlZU5vZGVBdEluZGV4KGluZGV4KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qCH6K6w5Li65Yay56qB5bm25aSN5Yi26L+Q5YqoICBcclxuICAgICAqIOagh+iusOWGsueqgeaXtuaEj+WRs+edgOi/kOWKqOWwhuacneWQkeaWsOeahOi/kOWKqOe7hOS7tlxyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbWFya0NvbmZsaWN0QW5kQ29weU1vdGlvbigpIHtcclxuICAgICAgICAvLyDmoIforrDlhrLnqoHlubblpI3liLbov5DliqhcclxuICAgICAgICB0aGlzLmNvbmZsaWN0ID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZVsnb3RoZXJNb3ZlbWVudCddKVxyXG4gICAgICAgICAgICBjY3Z2LmZyaXN0U2NyaXB0LmJpbmRNb3ZlbWVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIOWvuem9kOWIsOS7u+aEj+iKgueCueS4rVxyXG4gICAgICAgIC8vIGxldCB0cmVlSW5kZXhPYmplY3QgPSBOVFIudHJlZS5nZXRCdWZmZXIoaW5kZXgpO1xyXG4gICAgICAgIC8vIGlmICghdHJlZUluZGV4T2JqZWN0KSB7XHJcbiAgICAgICAgLy8gICAgIHRyZWVJbmRleE9iamVjdCA9IE5UUi50cmVlLmdldEJ1ZmZlcihOVFIudHJlZS5nZXROZXh0SW5kZXgoaW5kZXgsIDEpKTtcclxuICAgICAgICAvLyAgICAgbGV0IEFsaWduVGFyZ2V0ID0gdHJlZUluZGV4T2JqZWN0W09iamVjdC5rZXlzKHRyZWVJbmRleE9iamVjdClbMF1dO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIEFsaWduVGFyZ2V0LnkgLSBjY3Z2LmZyaXN0U2NyaXB0LmN1YmVIZWlnaHQpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCBBbGlnblRhcmdldC55KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIG1hY3JvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omA5aSE5qCR6IqC54K557Si5byVXHJcbiAgICAgKiDlvZPlpITkuo7njqnlrrbpmLXokKXml7bvvIzmraTntKLlvJXml6DmlYhcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9UcmVlSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IHRyZWVJbmRleCgpIHsgcmV0dXJuIHRoaXMuX1RyZWVJbmRleCB9XHJcbiAgICBwdWJsaWMgc2V0IHRyZWVJbmRleCh2YWx1ZSkgeyB0aGlzLl9UcmVlSW5kZXggPSB2YWx1ZTsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YW25LuW5pa55Z2Xbm9kZeS4iueahGJsb2Nr57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gYmxvY2sgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCbG9ja0NvbXBvbmVudChibG9jayk6IGJsb2NrIHtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlID0gYmxvY2sgaW5zdGFuY2VvZiBjYy5Ob2RlID8gYmxvY2sgOiBibG9jay5ub2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5fQ29sTm9kZSB8fCB0aGlzLl9Db2xOb2RlICE9IGJsb2NrTm9kZSlcclxuICAgICAgICAgICAgdGhpcy5fQ29sQ29tcG9uZW50ID0gYmxvY2tOb2RlLmdldENvbXBvbmVudCgnQmxvY2snKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ29sQ29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9Db2xOb2RlOiBjYy5Db21wb25lbnQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9Db2xDb21wb25lbnQ6IGJsb2NrID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5YWB6K645aSE55CG56Kw5pKe77yM6L+Z5Lmf5Luj6KGo6L+Z5piv5bGe5LqO546p5a626Zi16JCl55qE5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbmFibGVkQ29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWGsueqgeagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0NvbmdsaWN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmZsaWN0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fQ29uZ2xpY3Q7IH1cclxuICAgIC8qKlxyXG4gICAgICog5qCH6K6w5oiW5Yqg5YWl5Yiw5Yay56qBXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29uZmxpY3QodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBpZiAodHlwZW9mIHZhbHVlID09ICdib29sZWFuJykge1xyXG4gICAgICAgIHRoaXMuX0NvbmdsaWN0ID0gdmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9Db25nbGljdCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGNjdnYuc2V0SW5zdGFuY2VCeU5hbWUodmFsdWUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Ymp5L2Z562J5b6F6K6h5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1dhaXRGb3JDb25mbGljdDogbnVtYmVyID0gMztcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm562J5b6F5Yay56qBXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgd2FpdEZvckNvbmZsaWN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9XYWl0Rm9yQ29uZmxpY3QtLSA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blr7npvZDlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBBbGlnblBvcygpIHtcclxuICAgICAgICAvLyDkvb/nlKjml6DmoLnmoJHmlrnlvI/ojrflj5blr7npvZDlnZDmoIdcclxuICAgICAgICAvLyBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikge1xyXG4gICAgICAgIC8vICAgICBsZXQgdHJlZUluZGV4T2JqZWN0ID0gTlRSLnRyZWUuZ2V0QnVmZmVyKE5UUi50cmVlLmdldE5leHRJbmRleCh0aGlzLnRyZWVJbmRleCwgLTEpKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRyZWVJbmRleE9iamVjdCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IEFsaWduVGFyZ2V0ID0gdHJlZUluZGV4T2JqZWN0W09iamVjdC5rZXlzKHRyZWVJbmRleE9iamVjdClbMF1dO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCBBbGlnblRhcmdldC55KVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkgLSBjY3Z2LmZyaXN0U2NyaXB0LmN1YmVIZWlnaHQpXHJcblxyXG4gICAgICAgIC8vIOS9v+eUqOWvuem9kOe9keagvOiOt+WPluWvuem9kOWdkOagh1xyXG4gICAgICAgIHJldHVybiBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMigwLCB0aGlzLnRyZWVJbmRleCAtIDEpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5a+56b2Q5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgQWxpZ25Qb3ModmFsdWU6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIHZhbHVlLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=