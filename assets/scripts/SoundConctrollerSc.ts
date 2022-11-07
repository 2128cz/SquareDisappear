import { Msger } from "./Msger";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundConctrollerSc extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    public static isMuted = false;
    onLoad() {
        Msger.on(Msger.on_play_sound, this.on_play_sound, this);
        Msger.on(Msger.on_sound_muted, this.on_sound_muted, this);

    }
    on_sound_muted() {
        SoundConctrollerSc.isMuted = !SoundConctrollerSc.isMuted;
        if (SoundConctrollerSc.isMuted) {
            this.node.getChildByName('bgm').getComponent(cc.AudioSource).volume = 0;
        } else {
            this.node.getChildByName('bgm').getComponent(cc.AudioSource).volume = 1;
        }
    }
    // 
    on_play_sound(e) {
        if (SoundConctrollerSc.isMuted) {
            return;
        }
        if (e == 8) {
            e = Math.floor(Math.random() * 3) + 8;
        }
        this.node.children[e].getComponent(cc.AudioSource).play();
    }

    // update (dt) {}
}
