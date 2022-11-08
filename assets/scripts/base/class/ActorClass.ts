// SIGNPOST 自定义对象类 
const {ccclass, property} = cc._decorator;
import DevelopersToolClass from './DevelopersToolClass';
@ccclass
export default class ActorClass extends DevelopersToolClass {

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
