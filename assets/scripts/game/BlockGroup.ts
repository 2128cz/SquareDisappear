import GridAbsorb from '../base/tool/GridAdsorb';
import ss from "./Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        let pos = GridAbsorb.grid.getGridPositionByIndex(new cc.Vec3(0, this.gridIndex, 0));
        this.node.setPosition(pos);
    }

    // tag 用户函数

    public init(index) {
        this.gridIndex = index;
    }

    // tag 用户参数，宏

    protected gridIndex: number = null;
}