
import { DevelopersToolGlobal as ccvv, mathMacro as mm } from '../base/class/DevelopersToolGlobal';
import PawnClass from '../base/class/PawnClass';
import GridAbsorb from '../base/tool/GridAdsorb';
import NTR from "../base/tool/NoRootTree";

const { ccclass, property } = cc._decorator;
@ccclass
/**
 * @deprecated 已有更好的方法
 */
export default class block extends PawnClass {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        if (!this.conflict && this.enabledCollision)
            this.node['playerMovement'].updateByVelocity(dt);
        else {
            let gridPos = GridAbsorb.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex));
            this.node.setPosition(this.node.x, gridPos.y);
        }
    }

    // TAG USER FUNCTION:                                                                                    

    /**
     * 初始化事件
     * @param Index 
     */
    public init(Index: number, playerMode: boolean = false): void {
        if (playerMode) {
            this.node.group = 'player'
            this.enabledCollision = true;
        }
        else {
            this.treeIndex = Index;
        }
    }

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    public onCollisionEnter(other, self) {
        if (!this.enabledCollision) return;
        cc.log("碰撞开始");

        // 获取碰撞的树节点
        let otherBlock = this.getBlockComponent(other);
        let otherTreeIndex = otherBlock.treeIndex;
        if (typeof otherTreeIndex == 'number') {
            let selfTreeIndex = NTR.tree.getNextIndex(otherTreeIndex, -1);
            let treeGroup = NTR.tree.getBuffer(selfTreeIndex);
            // 如果组在树中
            if (treeGroup) {
                // 由于自己的到来而填充了一行
                if (Object.keys(treeGroup).length + 1 >= ccvv.fristScript.column) {
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
                this.treeIndex = NTR.tree.addFromFront({ [this['_id']]: this.node });
            }

        }
        // 如果还未存在冲突
        if (!this.conflict) {
            // 对齐,避免发生重复对齐
            this.AlignPos = otherBlock.AlignPos;
            cc.log(this.treeIndex, NTR.tree.put, NTR.tree.get, NTR.tree.buffer);
        }

        // 标记为冲突
        this.markConflictAndCopyMotion();
    }

    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionStay(other, self) {
        if (!this.enabledCollision) return;
        // if (ccvv.getInstanceByName())
        if (!this.waitForConflict)
            cc.log("碰撞中");

    }
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionExit(other, self) {
        if (!this.enabledCollision) return;
        if (!this.node.isValid) return;
        cc.log("碰撞结束");
        if (this.waitForConflict)
            this.conflict = false;

    }

    // SIGNPOST function                                                                                     

    /**
     * 从给定索引处销毁所有节点，包括自身
     * @param index 
     */
    protected destroyTreeNodeAfterIndex(index) {
        let treeBehindObject = NTR.tree.cut(index).obj;
        treeBehindObject.forEach(objectElement => {
            Object.keys(objectElement).forEach(elementName => {
                objectElement[elementName].destroy();
            });
        });
        this.node.destroy();
    }
    /**
     * 在给定树索引位置上添加自身
     * @param index 
     */
    protected addTreeNodeAtIndex(index) {

    }

    /**
     * 标记为冲突并复制运动  
     * 标记冲突时意味着运动将朝向新的运动组件
     * @param index 
     */
    protected markConflictAndCopyMotion() {
        // 标记冲突并复制运动
        this.conflict = true;
        if (!this.node['otherMovement'])
            ccvv.fristScript.bindMovement(this.node);
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
    }

    // SIGNPOST macro                                                                                        

    /**
     * 所处树节点索引
     * 当处于玩家阵营时，此索引无效
     */
    protected _TreeIndex: number = null;
    public get treeIndex() { return this._TreeIndex }
    public set treeIndex(value) { this._TreeIndex = value; }

    /**
     * 获取其他方块node上的block组件
     * @param block 
     */
    public getBlockComponent(block): block {
        let blockNode = block instanceof cc.Node ? block : block.node;
        if (!this._ColNode || this._ColNode != blockNode)
            this._ColComponent = blockNode.getComponent('Block');
        return this._ColComponent;
    }
    protected _ColNode: cc.Component = null;
    protected _ColComponent: block = null;
    /**
     * 是否允许处理碰撞，这也代表这是属于玩家阵营的方块
     */
    protected enabledCollision: boolean = false;



    /**
     * 冲突标记
     */
    protected _Conglict: boolean = false;
    public get conflict(): boolean { return this._Conglict; }
    /**
     * 标记或加入到冲突
     */
    public set conflict(value: boolean) {
        // if (typeof value == 'boolean') {
        this._Conglict = value;
        // }
        // else {
        //     this._Conglict = true;
        //     ccvv.setInstanceByName(value, this.node);
        // }
    }

    /**
     * 剩余等待计数
     */
    private _WaitForConflict: number = 3;
    /**
     * 是否等待冲突
     */
    protected get waitForConflict(): boolean {
        return this._WaitForConflict-- > 0;
    }

    /**
     * 获取对齐坐标
     */
    public get AlignPos() {
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
        return GridAbsorb.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex - 1));
    }
    /**
     * 设置对齐坐标
     */
    public set AlignPos(value: cc.Vec2) {
        this.node.setPosition(this.node.x, value.y);
    }
}

