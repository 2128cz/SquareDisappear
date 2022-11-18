import GridAbsorb from '../base/tool/GridAdsorb';
import { SoundPlayer } from '../base/tool/SoundPlayer';
import ss from "./Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BlockGroup extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // 随机地图
        if (this._NeedStart) {
            this.randomizeCubeLine();
        }

    }

    update(dt) {
        // 检查成员是否满了？
        if (this.needCheckMem) {
            let children = this.node.children.filter(value => { return value.isValid });
            if (children.length >= ss.Game_Column) {
                // 满了就销毁，并加分
                ss.score_add = this.destroyMembers();
                // 然后将上一个设为最后一组
                ss.endCubeGroup = this._NextGroup;

            }
        }
        // 更新自己的坐标
        let pos = GridAbsorb.grid.getGridPositionByIndex(new cc.Vec3(0, this._GridIndex, 0));
        this.node.setPosition(0, pos.y, 0);
    }

    // tag 用户函数

    /**
     * 任何情况下诞生都应该调用初始化
     * @param index 
     * @param lastGroup 
     * @param nextGroup 
     */
    public init(index: number, lastGroup: BlockGroup, nextGroup?: BlockGroup) {
        this._GridIndex = index;
        if (lastGroup) {
            lastGroup._NextGroup = this;
            this._LastGroup = lastGroup;
        }
        if (nextGroup) {
            nextGroup._LastGroup = this;
            this._NextGroup = nextGroup;
        }
        // 如果诞生时最后一行方块在我的上面
        if (!ss.endCubeGroup || ss.endCubeGroup.node.y > this.node.y) {
            // 那我才是最后一个仔
            ss.endCubeGroup = this;
        }
    }

    /**
     * 随机化剩余方块
     */
    private randomizeCubeLine() {
        let child = this.node.children;
        let perch = []
        let loop = 7; // 机会
        while (loop--) {
            let curcol = Math.floor(Math.random() * child.length);
            if (perch.indexOf(curcol) < 0)
                perch.push(curcol);
            if (perch.length >= (child.length - 1)) break;
        }
        this.node.children.forEach((element, index) => {
            if (perch.indexOf(index) <= 0)
                element.destroy();
        });
    }

    /**
     * 消除这行及以下的所有成员
     * 
     */
    public destroyMembers(palyEffect = true): number {
        // todo 播放音效
        new SoundPlayer(ss.Sound_des2);

        let allChildren = this.findAllChildren(this);
        allChildren.forEach(element => {
            // 将每个成员都替换为销毁效果节点
            let component = element.getComponent(ss.blockName);
            if (component)
                component.destroyWithAnimation();
        });
        // 这行消除效果
        if (palyEffect) {
            let inst = cc.instantiate(ss.Effect_Destory);
            this.node.addChild(inst);
        }
        return allChildren.length;
    }

    /**
     * 向下寻找所有成员
     * @param group 
     * @returns 
     */
    public findAllChildren(group: BlockGroup): cc.Node[] {
        if (group.node) {
            let groupChildren: cc.Node[] = group.node.children;
            if (group._LastGroup)
                groupChildren = [...groupChildren, ...this.findAllChildren(group._LastGroup)];
            return groupChildren;
        }
        return [];
    }

    // tag 用户参数，宏

    /**
     * 此组代表的索引
     */
    protected _GridIndex: number = null;
    public get gridIndex() { return this._GridIndex }
    /**
     * 处于此组下方的组
     */
    protected _LastGroup: BlockGroup = null;
    public get lastGroup() { return this._LastGroup }
    /**
     * 处于此组上方的组
     */
    protected _NextGroup: BlockGroup = null;
    public get nextGroup() { return this._NextGroup }
    /**
     * 需要自动初始化
     */
    protected _NeedStart: boolean = true;
    public set needStart(value: boolean) { this._NeedStart = value };
    /**
     * 需要检查成员标记
     */
    protected _NeedCheckMem: boolean = false;
    public set needCheckMem(value: boolean) { this._NeedCheckMem = value };
    public get needCheckMem(): boolean {
        if (this._NeedCheckMem) { this._NeedCheckMem = false; return true; }
        else return false;
    };
}