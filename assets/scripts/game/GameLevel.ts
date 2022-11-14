import { DevelopersToolGlobal as ccvv, mathMacro as mm } from '../base/class/DevelopersToolGlobal';
import GridAbsorb from '../base/tool/GridAdsorb';
import ss from "./Setting";
const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
// @executeInEditMode
export default class GameLevel extends cc.Component {

    @property(cc.Node)
    gameArea: cc.Node = null;

    // tag LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 初始化对齐网格
        new GridAbsorb(
            new cc.Vec3(ss.Game_Column, ss.Game_Row2, 0),
            new cc.Vec3(ss.Cube_width, ss.Cube_Height, 0)
        );
        // 基本初始化
        this.init();
    }

    // start() {}

    update(dt) {
        // 如果目标位置小于一定时，创建方块
        let pos = GridAbsorb.grid.getGridPositionByIndex(ss.GridCurrentPointToVec);
        if (pos.y <= cc.winSize.height / 2) {
            cc.log(cc.winSize.height / 2, pos.y);
            this.SpawnCubeGroup(ss.GridPointer);
        }

        // 网格移动，这也会驱动方块移动
        GridAbsorb.grid.offset = ss.GameVector.mul(dt);
    }

    // tag 用户函数部分 

    /**
     * 游戏重置及初始化
     */
    protected init(): void {
        // 重置网格指针
        ss.GridCurrentPoint = 0;
        GridAbsorb.grid.offset = new cc.Vec3(0, cc.winSize.height / 2, 0);

    }

    /**
     * 创建方块组
     */
    protected SpawnCubeGroup(index) {
        let inst = this.creatActor(ss.SquareGroup, this.gameArea);
        // 提供索引以便吸附到网格上
        inst.getComponent('BlockGroup').init(index);
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

}
