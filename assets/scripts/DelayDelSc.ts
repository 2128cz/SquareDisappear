import { Msger } from "./Msger";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DelayDelSc extends cc.Component {


    // @property
    delayTime: number = 1;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    }

    start() {

    }
    show() {

    }
    update(dt) {
        this.delayTime -= dt;
        if (this.delayTime <= 0) {
            this.node.removeFromParent();
            Msger.emit(Msger.on_Splintering_del, this.node);
        }
    }
}