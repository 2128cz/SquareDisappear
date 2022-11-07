"use strict";
cc._RF.push(module, '1158dRpdV1HW5Bdk38hC7bF', 'Msger');
// scripts/Msger.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msger = void 0;
var Msger;
(function (Msger) {
    Msger.on_changeto_start = "on_changeto_start";
    Msger.on_changeto_game = "on_changeto_game";
    Msger.on_game_begin = "on_game_begin";
    Msger.on_game_revie = "on_game_revie";
    Msger.on_sound_muted = "on_sound_muted";
    Msger.on_play_sound = "on_play_sound";
    Msger.on_clean_brick = "on_clean_brick";
    Msger.on_Splintering_del = "on_Splintering_del";
    Msger.on_show_watting = "on_show_watting";
    Msger.on_hide_watting = "on_hide_watting";
    Msger.on_show_message = "on_show_message";
    var _msgerNode = null;
    function msgerNode() {
        if (_msgerNode == null) {
            _msgerNode = new cc.Node();
        }
        return _msgerNode;
    }
    function emit(eventname, arg1, arg2, arg3, arg4, arg5) {
        msgerNode().emit(eventname, arg1, arg2, arg3, arg4, arg5);
    }
    Msger.emit = emit;
    function on(eventname, callback, target) {
        msgerNode().on(eventname, callback, target);
    }
    Msger.on = on;
    function off(eventname, callback, target) {
        msgerNode().off(eventname, callback, target);
    }
    Msger.off = off;
})(Msger = exports.Msger || (exports.Msger = {}));

cc._RF.pop();