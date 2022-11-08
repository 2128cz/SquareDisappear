// SIGNPOST 特指对话框类 
const {ccclass, property} = cc._decorator;
import DevelopersToolClass from './DevelopersToolClass';
@ccclass
export default class NewClass extends cc.Component {

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
