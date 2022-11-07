import { Msger } from "./Msger";


const { ccclass, property } = cc._decorator;

@ccclass
export default class MessageBoxSc extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    MessageBox: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:
    private callback = null;
    onLoad() {
        Msger.on(Msger.on_show_watting, (e,callback) => {
            if (this.MessageBox) {
                this.MessageBox.active = true;
                this.callback = callback;
            }
        }, this)
        this.MessageBox.active = false;
    }

    onclick_close() {
        this.MessageBox.active = false;
        Msger.emit(Msger.on_play_sound, 1);
        if(this.callback){
            this.callback();
        }
    }

    // update (dt) {}
}
