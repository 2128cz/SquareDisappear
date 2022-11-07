import { Msger } from "./Msger";
import WXManager from "./WXManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SceneManagerSc extends cc.Component {

    @property(cc.Node)
    StartUI: cc.Node = null;
    @property(cc.Node)
    GameUI: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Msger.on(Msger.on_changeto_start, this.on_changeto_start, this);
        Msger.on(Msger.on_changeto_game, this.on_changeto_game, this);
        this.StartUI.active = true;
        this.GameUI.active = false;
    }

    start() {
        WXManager.Instance.openShare("share/share1", "比一比谁眼疾手快");
    }

    // update (dt) {}

    private on_changeto_game() {
        this.StartUI.active = false;
        this.GameUI.active = true;
        Msger.emit(Msger.on_game_begin);
    }
    private on_changeto_start() {
        this.StartUI.active = true;
        this.GameUI.active = false;
    }
}
