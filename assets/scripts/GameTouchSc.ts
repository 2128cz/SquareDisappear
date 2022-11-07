import GameSc from "./GameSc";
import { Msger } from "./Msger";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameTouchSc extends cc.Component {

    @property(cc.Node)
    touchLayer: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.touchLayer.on(cc.Node.EventType.TOUCH_START, this.touchBegin, this);
    }

    touchBegin(e: cc.Event.EventTouch) {
        if (this.holdTouch > 0) {
            return;
        }
        if (this.getComponent(GameSc).isPaused) {
            return;
        }
        // console.log(e.touch.getLocationX());
        let pt = this.touchLayer.convertToNodeSpaceAR(e.touch.getLocation());
        let index = (pt.x + 720 / 2) / (720 / 4);
        index = Math.floor(index);
        if (index < 0) index = 0;
        if (index > 3) index = 3;
        this.getComponent(GameSc).add_move_brick(index);
        this.holdTouch = 0.2;
        
        Msger.emit(Msger.on_play_sound, 7);
    }
    
    private holdTouch = 0;

    update(dt) {
        this.holdTouch -= dt;
    }
}
