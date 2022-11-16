import { DevelopersToolGlobal as ccvv } from "../base/class/DevelopersToolGlobal";
import PawnMovement from "../base/tool/PawnMovement";
import BlockGroup from "./BlockGroup";
import ss from "./Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Block extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        if (this.moveFree) {
            this.node['movement'].updateByforce(dt);
            // this.node['movement'].updateByVelocity(dt); // 也可以用这个方法
        }
    }

    // tag 用户脚本 

    /**
     * 如果进行初始化，说明是玩家控制  
     * 否则如果是系统生成不需要初始化
     */
    public init(): void {
        // 设定碰撞组
        this.node.group = ss.Group_1;
        // 设定移动
        this.moveFree = true;
        // 赋予移动组件
        let movement: PawnMovement = new PawnMovement(this.node);
        movement.permDrag = 0;
        movement.permForce = ss.CubeVector;
        movement.velocity = ss.CubeVector;
        this.node['movement'] = movement;
        // 定义一定时间后销毁，但是如果遇到碰撞或是其他情况，就必须取消这个定时器
        this.scheduleOnce(this.commitSuicide, this.lifeTime);
    }
    // 自我销毁
    public commitSuicide() { this.node.destroy(); }

    // tag 碰撞事件 

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    public onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        // 清除定时器
        this.unschedule(this.commitSuicide);
        // 设定碰撞组
        this.node.group = ss.Group_0;
        // 如果正在自由移动
        if (this.moveFree) {
            // 就禁止自由移动
            this.moveFree = false;
            // 试着加入到其他组
            let otherGroup: BlockGroup = other.node.parent.getComponent(ss.blockGroupName);
            let selfGroup: BlockGroup = otherGroup.lastGroup;
            // 如果不存在这个组，就创建
            if (!selfGroup) {
                let selfGroupInst = ccvv.fristScript.SpawnCubeGroup();
                // 重新定义自己的组
                selfGroup = selfGroupInst.getComponent(ss.blockGroupName);
                // 初始化自己的组
                let selfGroupIndex = otherGroup.gridIndex - 1;
                selfGroup.init(selfGroupIndex, null, otherGroup);
                // 指定不需要自动初始化
                selfGroup.needStart = false;
                // 手动初始化外围部件
                selfGroup.node.children.forEach(element => {
                    element.destroy();
                    element.isValid = false;
                });
            }
            // 加入到组中
            this.node.setPosition(this.node.x, ss.Cube_Perfab_Y, 0);
            this.node.removeFromParent();
            selfGroup.node.addChild(this.node);
            // 提醒组检查成员
            selfGroup.needCheckMem = true;
        }
    }
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    // onCollisionStay(other, self) {}
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    // onCollisionExit(other, self) {}

    // tag 销毁动画 

    /**
     * 替换为动画节点后销毁  
     */
    public destroyWithAnimation() {


        let inst = cc.instantiate(ss.Effect_SquareBreak);
        inst.setPosition(this.node.getPosition());
        this.node.parent.addChild(inst);
        this.node.destroy();
    }

    // tag 用户宏，参数
    /**
     * 自由移动标记
     */
    protected moveFree: boolean = false;
    /**
     * 生命周期
     */
    protected lifeTime: number = cc.winSize.height / ss.CubeSpeed;
}
