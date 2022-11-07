
const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading extends cc.Component {

    @property(cc.Node)
    logoNode: cc.Node = null;

    onLoad() {
        this.playLogoAnima();
    }

    start() {

    }

    private playLogoAnima() {
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
            .call(() => {
                cc.director.loadScene("Game");
            })
            .start()
    }


    // update(dt) {

    // }
}
