// SIGNPOST 特指对话框类 
const {ccclass, property} = cc._decorator;
import DynamicPanelClass from './DynamicPanelClass';
@ccclass
export default class DiologClass extends DynamicPanelClass {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
