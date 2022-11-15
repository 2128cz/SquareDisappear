import ss from "../Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayAnimationAndDestroy extends cc.Component {
    @property(cc.Float)
    destroyTime: number = .3;

    start() {
        this.scheduleOnce(() => { this.node.destroy() }, this.destroyTime)
    }

}
