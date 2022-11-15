import { DevelopersToolGlobal as ccvv, mathMacro as mm } from '../base/class/DevelopersToolGlobal';
import GridAbsorb from '../base/tool/GridAdsorb';
import BlockGroup from './BlockGroup';
import ss from "./Setting";
const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
// @executeInEditMode
export default class GameLevel extends cc.Component {

    @property(cc.Node)
    gameArea: cc.Node = null;

    // tag LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 基本初始化
        this.init();
    }

    // start() {}

    update(dt) {
        // 如果目标位置小于一定时，创建方块
        let pos = GridAbsorb.grid.getGridPositionByIndex(ss.GridCurrentPointToVec);
        if (pos.y <= cc.winSize.height / 2) {
            this.SpawnCubeGroupAndInit(ss.GridPointer);
        }
        // 网格移动，这也会驱动方块移动
        GridAbsorb.grid.offset = ss.GameVector.mul(dt);
    }

    // tag 用户函数部分 

    /**
     * 游戏重置及初始化
     */
    protected init(): void {
        // 初始化对齐网格
        new GridAbsorb(
            new cc.Vec3(ss.Game_Column, ss.Game_Row2, 0),
            new cc.Vec3(ss.Cube_width, ss.Cube_Height, 0)
        );
        // 开启碰撞
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;

        // GridAbsorb.grid.anchor = new cc.Vec3(0, 0, 0);
        // 重置网格指针
        ss.GridCurrentPoint = 0;
        // 设置网格起点
        GridAbsorb.grid.offset = ss.GridOriginOffset;
        // 提升脚本，偷懒
        ccvv.script = this;
        // 注册触摸
        this.touchRegister();
    }

    /**
     * 创建方块组，并按链初始化
     */
    protected SpawnCubeGroupAndInit(index): cc.Node {
        // 初始化,将上一个组传给这组
        let inst = this.creatActor(ss.SquareGroup, this.gameArea);
        // 提供索引以便吸附到网格上
        let instComponent: BlockGroup = inst.getComponent(ss.blockGroupName);
        // 初始化,将索引给到这
        instComponent.init(index, this.lastGroup);
        // 现在这组是上组了
        this.lastGroup = instComponent;
        return inst;
    }
    /**
     * 外部创建方块组 
     * @param index 
     */
    public SpawnCubeGroup(): cc.Node {
        let inst = this.creatActor(ss.SquareGroup, this.gameArea);
        return inst;
    }
    /**
     * 创建方块
     */
    protected SpawnPlayerCube(): cc.Node {
        let inst = this.creatActor(ss.Square, this.gameArea);
        // 提供索引以便吸附到网格上
        inst.getComponent('Block').init();
        return inst;
    }


    /**
     * 注册触摸事件
     */
    protected touchRegister() {
        if (!this.readyTouch) {
            this.readyTouch = true;
            ccvv.layers[0].on("touchstart", this.onTouchStart, this);
        }
    }
    protected readyTouch: boolean = false;
    public onTouchStart(event) {
        let touchArea = event.getLocation().x / ss.Cube_width;
        let inst = this.SpawnPlayerCube();
        let inx = Math.ceil(touchArea) * (ss.Cube_width + ss.Cube_Interaval) - ((cc.winSize.width + ss.Cube_width) / 2);
        // let inx = Math.ceil(touchArea) * 177 - ((cc.winSize.width + ss.Cube_width) / 2) - 5
        inst.setPosition(inx, ss.Separator);
    }


    // tag 基本操作函数

    /**
    * creat instantiate
    * @param {cc.Prefab} actor 实例化的目标
    * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
    * @returns 
    */
    protected creatActor(actor: cc.Prefab, parent?: cc.Node): cc.Node {
        let actorInst = cc.instantiate(actor);
        if (parent) { parent.addChild(actorInst); }
        else { this.node.addChild(actorInst); cc.log(actorInst) }
        return actorInst;
    }
    /**
     * 上一组诞生组
     */
    protected lastGroup: BlockGroup = null;

}
