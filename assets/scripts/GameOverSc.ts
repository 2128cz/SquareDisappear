import { Msger } from "./Msger";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameOverSc extends cc.Component {

    @property(cc.Label)
    time: cc.Label = null;


    // LIFE-CYCLE CALLBACKS:
    cooldown = 10;
    onLoad() {
        this.node.active = false;
    }

    update(dt) {
        if (this.node.active == false) return;
        if (this.cooldown == 0) {
            this.onclick_skip();
        } else {
            this.cooldown -= dt;
            if (this.cooldown <= 0) {
                this.cooldown = 0;
            }
            this.time.string = Math.floor(this.cooldown).toString();
        }
    }

    onclick_skip() {
        Msger.emit(Msger.on_play_sound, 1);
        this.node.active = false;
        Msger.emit(Msger.on_changeto_start);
    }
    onclick_revie() {
        Msger.emit(Msger.on_play_sound, 1);
        this.node.active = false;
        Msger.emit(Msger.on_game_revie);
    }
}
