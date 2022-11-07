export module Msger {

    export let on_changeto_start = "on_changeto_start";
    export let on_changeto_game = "on_changeto_game";
    export let on_game_begin = "on_game_begin";
    export let on_game_revie = "on_game_revie";
    export let on_sound_muted = "on_sound_muted";
    export let on_play_sound = "on_play_sound";
    export let on_clean_brick = "on_clean_brick";
    export let on_Splintering_del = "on_Splintering_del";
    export let on_show_watting = "on_show_watting";
    export let on_hide_watting = "on_hide_watting";
    export let on_show_message = "on_show_message";

    let _msgerNode: cc.Node = null;
    function msgerNode(): cc.Node {
        if (_msgerNode == null) {
            _msgerNode = new cc.Node();
        }
        return _msgerNode;
    }
    export function emit(eventname: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        msgerNode().emit(eventname, arg1, arg2, arg3, arg4, arg5);
    }

    export function on(eventname: string, callback, target?: any) {
        msgerNode().on(eventname, callback, target);
    }
    export function off(eventname: string, callback, target?: any) {
        msgerNode().off(eventname, callback, target);
    }
}