
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Msger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTXNnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBYyxLQUFLLENBK0JsQjtBQS9CRCxXQUFjLEtBQUs7SUFFSix1QkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztJQUN4QyxzQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztJQUN0QyxtQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxtQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxvQkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ2xDLG1CQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLG9CQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFDbEMsd0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7SUFDMUMscUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUNwQyxxQkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLHFCQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFFL0MsSUFBSSxVQUFVLEdBQVksSUFBSSxDQUFDO0lBQy9CLFNBQVMsU0FBUztRQUNkLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUNwQixVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDOUI7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsU0FBZ0IsSUFBSSxDQUFDLFNBQWlCLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBVSxFQUFFLElBQVU7UUFDOUYsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUZlLFVBQUksT0FFbkIsQ0FBQTtJQUVELFNBQWdCLEVBQUUsQ0FBQyxTQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFZO1FBQ3hELFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFGZSxRQUFFLEtBRWpCLENBQUE7SUFDRCxTQUFnQixHQUFHLENBQUMsU0FBaUIsRUFBRSxRQUFRLEVBQUUsTUFBWTtRQUN6RCxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRmUsU0FBRyxNQUVsQixDQUFBO0FBQ0wsQ0FBQyxFQS9CYSxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUErQmxCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG1vZHVsZSBNc2dlciB7XG5cbiAgICBleHBvcnQgbGV0IG9uX2NoYW5nZXRvX3N0YXJ0ID0gXCJvbl9jaGFuZ2V0b19zdGFydFwiO1xuICAgIGV4cG9ydCBsZXQgb25fY2hhbmdldG9fZ2FtZSA9IFwib25fY2hhbmdldG9fZ2FtZVwiO1xuICAgIGV4cG9ydCBsZXQgb25fZ2FtZV9iZWdpbiA9IFwib25fZ2FtZV9iZWdpblwiO1xuICAgIGV4cG9ydCBsZXQgb25fZ2FtZV9yZXZpZSA9IFwib25fZ2FtZV9yZXZpZVwiO1xuICAgIGV4cG9ydCBsZXQgb25fc291bmRfbXV0ZWQgPSBcIm9uX3NvdW5kX211dGVkXCI7XG4gICAgZXhwb3J0IGxldCBvbl9wbGF5X3NvdW5kID0gXCJvbl9wbGF5X3NvdW5kXCI7XG4gICAgZXhwb3J0IGxldCBvbl9jbGVhbl9icmljayA9IFwib25fY2xlYW5fYnJpY2tcIjtcbiAgICBleHBvcnQgbGV0IG9uX1NwbGludGVyaW5nX2RlbCA9IFwib25fU3BsaW50ZXJpbmdfZGVsXCI7XG4gICAgZXhwb3J0IGxldCBvbl9zaG93X3dhdHRpbmcgPSBcIm9uX3Nob3dfd2F0dGluZ1wiO1xuICAgIGV4cG9ydCBsZXQgb25faGlkZV93YXR0aW5nID0gXCJvbl9oaWRlX3dhdHRpbmdcIjtcbiAgICBleHBvcnQgbGV0IG9uX3Nob3dfbWVzc2FnZSA9IFwib25fc2hvd19tZXNzYWdlXCI7XG5cbiAgICBsZXQgX21zZ2VyTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gbXNnZXJOb2RlKCk6IGNjLk5vZGUge1xuICAgICAgICBpZiAoX21zZ2VyTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBfbXNnZXJOb2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX21zZ2VyTm9kZTtcbiAgICB9XG4gICAgZXhwb3J0IGZ1bmN0aW9uIGVtaXQoZXZlbnRuYW1lOiBzdHJpbmcsIGFyZzE/OiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnksIGFyZzQ/OiBhbnksIGFyZzU/OiBhbnkpIHtcbiAgICAgICAgbXNnZXJOb2RlKCkuZW1pdChldmVudG5hbWUsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBvbihldmVudG5hbWU6IHN0cmluZywgY2FsbGJhY2ssIHRhcmdldD86IGFueSkge1xuICAgICAgICBtc2dlck5vZGUoKS5vbihldmVudG5hbWUsIGNhbGxiYWNrLCB0YXJnZXQpO1xuICAgIH1cbiAgICBleHBvcnQgZnVuY3Rpb24gb2ZmKGV2ZW50bmFtZTogc3RyaW5nLCBjYWxsYmFjaywgdGFyZ2V0PzogYW55KSB7XG4gICAgICAgIG1zZ2VyTm9kZSgpLm9mZihldmVudG5hbWUsIGNhbGxiYWNrLCB0YXJnZXQpO1xuICAgIH1cbn0iXX0=