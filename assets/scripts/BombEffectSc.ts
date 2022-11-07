

const { ccclass, property } = cc._decorator;

@ccclass
export default class BombEffectSc extends cc.Component {

    @property([cc.SpriteFrame])
    frames: cc.SpriteFrame[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.active = false;

    }

    start() {

    }
    private frametimer = 0;
    private frameindex = 0;
    update(dt) {
        if (this.node.active) {
            this.frametimer += dt;
            if (this.frametimer >= 0.05) {
                if (this.frameindex >= this.frames.length) {
                    this.node.active = false;
                    this.frametimer = 0;
                    this.frameindex = 0;
                    this.getComponent(cc.Sprite).spriteFrame = this.frames[this.frameindex];
                }
                this.frametimer = 0;
                this.frameindex += 1;
                this.getComponent(cc.Sprite).spriteFrame = this.frames[this.frameindex];
            }
        }
    }
}
