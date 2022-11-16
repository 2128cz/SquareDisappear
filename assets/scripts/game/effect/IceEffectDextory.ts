import ss from "../Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Float)
    lateDestroy: number = 2;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.children.forEach(element => {
            let particle = element.getComponent(cc.ParticleSystem);
            particle.duration = ss.ice_Duration;
        });
        this.scheduleOnce(() => { this.node.destroy() }, ss.ice_Duration + this.lateDestroy);
    }

    // update (dt) {}
}
