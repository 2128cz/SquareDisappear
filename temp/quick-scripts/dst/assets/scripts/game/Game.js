
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219931QpohMXa9AERY/82Av', 'Game');
// scripts/game/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    // update (dt) {}
    // TAG USER FUNCTION:                                                                                    
    /**
     * 游戏流程
     */
    NewClass.prototype.gameProcess_SpawnLine = function () {
    };
    // TAG Prefabricated function                                                                            
    // SIGNPOST instantiation and destory Actor                                                              
    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns
     */
    NewClass.prototype.creatActor = function (actor, parent) {
        var actorInst = cc.instantiate(actor);
        if (parent) {
            parent.addChild(actorInst);
        }
        else {
            this.node.addChild(actorInst);
            cc.log(actorInst);
        }
        return actorInst;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTRDQztRQXpDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O0lBc0MzQixDQUFDO0lBcENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQkFBaUI7SUFFakIseUdBQXlHO0lBRXpHOztPQUVHO0lBQ08sd0NBQXFCLEdBQS9CO0lBRUEsQ0FBQztJQUVELHlHQUF5RztJQUV6Ryx5R0FBeUc7SUFFekc7Ozs7O09BS0c7SUFDTyw2QkFBVSxHQUFwQixVQUFxQixLQUFnQixFQUFFLE1BQWdCO1FBQ25ELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQUU7YUFDdEM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7U0FBRTtRQUN6RCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRDNUI7SUFBRCxlQUFDO0NBNUNELEFBNENDLENBNUNxQyxFQUFFLENBQUMsU0FBUyxHQTRDakQ7a0JBNUNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICAvLyBUQUcgVVNFUiBGVU5DVElPTjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+a1geeoi1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZVByb2Nlc3NfU3Bhd25MaW5lKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgUHJlZmFicmljYXRlZCBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCBpbnN0YW50aWF0aW9uIGFuZCBkZXN0b3J5IEFjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAgKiBAcGFyYW0ge2NjLlByZWZhYn0gYWN0b3Ig5a6e5L6L5YyW55qE55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHBhcmVudCDlrp7kvovljJbnmoTlr7nosaHlsIbopoHpmYTliqDnmoTnm67moIfvvIzlpoLmnpznlZnnqbrliJnkuLroh6rouqtcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRBY3RvcihhY3RvcjogY2MuUHJlZmFiLCBwYXJlbnQ/OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFjdG9ySW5zdCA9IGNjLmluc3RhbnRpYXRlKGFjdG9yKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7IHBhcmVudC5hZGRDaGlsZChhY3Rvckluc3QpOyB9XHJcbiAgICAgICAgZWxzZSB7IHRoaXMubm9kZS5hZGRDaGlsZChhY3Rvckluc3QpOyBjYy5sb2coYWN0b3JJbnN0KSB9XHJcbiAgICAgICAgcmV0dXJuIGFjdG9ySW5zdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==