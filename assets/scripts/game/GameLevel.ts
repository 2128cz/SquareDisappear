import { DevelopersToolGlobal as ccvv, mathMacro as mm } from '../base/class/DevelopersToolGlobal';
import GridAbsorb from '../base/tool/GridAdsorb';
import PawnMovement from '../base/tool/PawnMovement';
import BlockGroup from './BlockGroup';
import ss from "./Setting";
const { ccclass, property, executeInEditMode } = cc._decorator;
/**
 * 对于关卡蓝图中的参数，都定义在设置中
 * 而其他蓝图中的参数则会放置在其最强关联处，比如自己本身的类内
 * 而部分地方可能会用到全局工具的部分，可以改为以设置类全局的模式，全局工具是旧方法
 * 关于全局工具的用法，可以参考discard-标记的文件，他们是已经确定废弃的用法
 */
@ccclass
// @executeInEditMode
export default class GameLevel extends cc.Component {

    @property(cc.Node)
    gameArea: cc.Node = null;

    @property(cc.Node)
    effectArea: cc.Node = null;

    // tag LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 提升脚本，这是为了兼容旧方法，设置中也同提升了
        ccvv.script = this;

        // 开启碰撞
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    }

    onEnable() {
        // 基本初始化, enable时游戏就已经开始了
        this.init();
    }

    // start() {}

    update(dt) {
        // 如果目标位置小于一定时，创建方块
        let pos = GridAbsorb.grid.getGridPositionByIndex(ss.GridCurrentPointToVec);
        if (pos.y > 0 && pos.y <= cc.winSize.height / 2) {
            this.SpawnCubeGroupAndInit(ss.GridPointer);
        }
        // 如果最后一行小于一定时，结束游戏
        if (ss.endCubeGroup && ss.endCubeGroup.node.y < ss.Separator) {
            this.gameOver();
        }
        // 否则继续网格移动，这也会驱动方块移动
        else {
            // 简单的移动方式
            // GridAbsorb.grid.offset = ss.GameVector.mul(dt);

            // 移动组件移动方式
            cc.log(ss.GameAutoDrag);
            ss.movement.addforce = ss.GameAutoSpeed;
            ss.movement.addDrag = ss.GameAutoDrag;
            ss.movement.updateByVelocity(dt);
        }
    }

    // tag 用户函数部分 

    /**
     * 游戏重置及初始化  
     * 开始时调用一次
     */
    protected init(): void {
        // 初始化对齐网格
        GridAbsorb.grid = new GridAbsorb(
            new cc.Vec3(ss.Game_Column, ss.Game_Row2, 0),
            new cc.Vec3(ss.Cube_width, ss.Cube_Height, 0)
        );
        // 赋予移动组件
        ss.movement = new PawnMovement(GridAbsorb.grid);
        ss.movement.maxSpeed = ss.GameSpeed;
        // 设置网格边界锚点
        // GridAbsorb.grid.anchor = new cc.Vec3(0, 0, 0);
        // 设置网格起点
        GridAbsorb.grid.offset = ss.GridOriginOffset;

        // 重置网格指针
        ss.GridCurrentPoint = 0;

        // 注册触摸
        this.touchRegister();

        // 清理战场
        ss.endCubeGroup = null;
        if (this.gameArea.children.length > 0) this.gameArea.children.forEach(e => { e.destroy() });
        if (this.effectArea.children.length > 0) this.effectArea.children.forEach(e => { e.destroy() });
    }

    /**
     * 创建方块组，并按链初始化  
     */
    protected SpawnCubeGroupAndInit(index): cc.Node {
        // 初始化,将上一个组传给这组
        let inst = this.SpawnCubeGroup();
        // 提供索引以便吸附到网格上
        let instComponent: BlockGroup = inst.getComponent(ss.blockGroupName);
        // 初始化,将索引给到这
        instComponent.init(index, this.lastGroup);
        // 现在这组是上组了
        this.lastGroup = instComponent;
        return inst;
    }
    /**
     * 创建方块组 
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
    * 游戏结束时的动作  
    * 游戏结束时调用一次
    */
    protected gameOver() {
        // 暂停触摸
        // ccvv.layers[0].pauseSystemEvents(true);
        ss.menu.gameOver()

        let allChildren = this.lastGroup.findAllChildren(this.lastGroup);
        // 一个一个破掉的效果
        let allChildrenCount = allChildren.length;
        cc.log(allChildren);
        this.schedule(() => {
            if (allChildrenCount--) {
                let desAct = allChildren[allChildrenCount];
                desAct.getComponent(ss.blockName).destroyWithAnimation();
            } else {
                this.unscheduleAllCallbacks();
                ss.menu.openMenu();
            }
        }, .08);
    }


    // tag 用户触摸事件

    /**
     * 注册触摸事件
     */
    protected touchRegister() {
        if (!this.readyTouch) {
            this.readyTouch = true;
            ccvv.layers[0].on("touchstart", this.onTouchStart, this);
        }
        else {
            ccvv.layers[0].resumeSystemEvents(true);
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



    // tag 特效方法 

    /**
     * 冰冻特效  
     * 赋予两倍阻力
     */
    ice(): void {
        let inst = this.creatActor(ss.Effect_Ice, this.effectArea);
        ss.movement.permDrag = 2;
        this.scheduleOnce(() => {
            ss.movement.permDrag = 0;
        }, ss.ice_Duration);
    }
    /**
     * 击退特效  
     * 赋予一个反方向的力  
     */
    hit(): void {
        let inst = this.creatActor(ss.Effect_Hit, this.effectArea);
        inst.setPosition(ss.endCubeGroup.node.getPosition());
        ss.movement.addforce = new cc.Vec2(0, ss.hit_Force);
        ss.movement.drag = 0;
        ss.movement.maxSpeed = ss.GameSpeed;
    }
    /**
     * 清屏特效  
     * 将屏幕内的所有方块都进行清理，使用的是方块自身的消除方法，所以也会播放销毁特效
     */
    boom(): void {
        let inst = this.creatActor(ss.Effect_Boom, this.effectArea);
        ss.endCubeGroup = this.lastGroup.nextGroup;
        this.lastGroup.destroyMembers(false);
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
