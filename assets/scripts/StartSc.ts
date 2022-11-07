import { Msger } from "./Msger";
import WXManager from "./WXManager";
import SoundConctrollerSc from "./SoundConctrollerSc";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StartUI extends cc.Component {

    @property(cc.Prefab)
    rankUI: cc.Prefab = null;
    @property(cc.Node)
    serviceUI: cc.Node = null;
    @property([cc.SpriteFrame])
    protected soudsFrame: cc.SpriteFrame[] = [];


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
    onclick_start() {
        Msger.emit(Msger.on_changeto_game);
        Msger.emit(Msger.on_play_sound, 1);
    }
    onclick_rank() {
        this.node.addChild(cc.instantiate(this.rankUI));
        Msger.emit(Msger.on_play_sound, 1);
    }
    onclick_sound(event) {
        Msger.emit(Msger.on_sound_muted);
        Msger.emit(Msger.on_play_sound, 1);
        event.target.getComponent(cc.Sprite).spriteFrame = this.soudsFrame[Number(SoundConctrollerSc.isMuted)];
    }
    onclick_service() {
        Msger.emit(Msger.on_play_sound, 1);
        this.serviceUI.active = true;
    }
    onclick_share() {
        WXManager.Instance.playerShare("share/share1", "来看看谁分数高");
    }
}
