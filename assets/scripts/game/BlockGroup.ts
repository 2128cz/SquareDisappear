import GridAbsorb from '../base/tool/GridAdsorb';
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
            // 满了就销毁
            if (children.length >= ss.Game_Column) {
                this.destroyMembers();
            }
        }
        // 更新自己的坐标
        let pos = GridAbsorb.grid.getGridPositionByIndex(new cc.Vec3(0, this._GridIndex, 0));
        this.node.setPosition(0, pos.y, 0);
    }

    // tag 用户函数

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
     * 移除成员
     */
    protected destroyMembers() {
        function findAllChildren(group: BlockGroup): cc.Node[] {
            let groupChildren: cc.Node[] = group.node.children;
            if (group._LastGroup)
                groupChildren = [...groupChildren, ...findAllChildren(group._LastGroup)];
            return groupChildren;
        }
        findAllChildren(this).forEach(element => {
            // 将每个成员都替换为销毁效果节点
            let component = element.getComponent(ss.blockName);
            if (component)
                component.destroyWithAnimation();
        });
        // 这行消除效果
        let inst = cc.instantiate(ss.Effect_Destory);
        this.node.addChild(inst);
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