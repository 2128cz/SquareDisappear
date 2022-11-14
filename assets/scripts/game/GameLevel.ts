import { DevelopersToolGlobal as ccvv, mathMacro as mm } from '../base/class/DevelopersToolGlobal';
import GridAbsorb from '../base/tool/GridAdsorb';
import ss from "./Setting";
const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class GameLevel extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 初始化对齐网格
        new GridAbsorb(
            new cc.Vec3(ss.Game_Column, ss.Game_Row2, 0),
            new cc.Vec3(ss.Cube_width, ss.Cube_Height, 0)
        );
        // 基本初始化
        this.init();
    }

    start() {

    }

    update(dt) {
        // 网格步进
        GridAbsorb.grid.offset = dt * ;
    }

    // tag 用户函数部分 

    /**
     * 游戏重置及初始化
     */
    protected init(): void {
        // 重置网格指针
        ss.GridCurrentPoint = 0;

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
