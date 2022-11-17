import ss from "../Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Float)
    animationTime: number = .6;

    @property(cc.Float)
    randomPositionRange: number = 50;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.opacity = 100;
        this.numberLabelUpdate();
    }

    update(dt) {
        if (this.score != ss.score) {
            this.score = ss.score
            this.numberUpdate();
            this.numberLabelUpdate();
        }
    }

    // tag 用户方法 

    /**
     * 更新一次数值上的动画
     */
    numberUpdate() {
        cc.Tween.stopAll();
        cc.tween(this.node)
            .to(.06, { scale: 1.2, x: 0, y: 0, opacity: 255 }, { easing: 'cubicIn' })
            .to(this.animationTime, { scale: 1, x: Math.random() * this.randomPositionRange, y: Math.random() * this.randomPositionRange }, { easing: 'quintOut' })
            .to(1, { opacity: 100 }, { easing: 'quadIn' })
            .start()
    }

    numberLabelUpdate() {
        this.scroeLabel.string = String(this.score);
    }

    // tag 用户参数 

    protected score = ss.score;
    protected get scroeLabel() { return this.label.getComponent(cc.Label) }

}
