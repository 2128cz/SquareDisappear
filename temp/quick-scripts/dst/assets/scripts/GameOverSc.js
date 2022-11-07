
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameOverSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1884emfDFPjoI8M96OMZ3A', 'GameOverSc');
// scripts/GameOverSc.ts

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
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOverSc = /** @class */ (function (_super) {
    __extends(GameOverSc, _super);
    function GameOverSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = null;
        // LIFE-CYCLE CALLBACKS:
        _this.cooldown = 10;
        return _this;
    }
    GameOverSc.prototype.onLoad = function () {
        this.node.active = false;
    };
    GameOverSc.prototype.update = function (dt) {
        if (this.node.active == false)
            return;
        if (this.cooldown == 0) {
            this.onclick_skip();
        }
        else {
            this.cooldown -= dt;
            if (this.cooldown <= 0) {
                this.cooldown = 0;
            }
            this.time.string = Math.floor(this.cooldown).toString();
        }
    };
    GameOverSc.prototype.onclick_skip = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        this.node.active = false;
        Msger_1.Msger.emit(Msger_1.Msger.on_changeto_start);
    };
    GameOverSc.prototype.onclick_revie = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        this.node.active = false;
        Msger_1.Msger.emit(Msger_1.Msger.on_game_revie);
    };
    __decorate([
        property(cc.Label)
    ], GameOverSc.prototype, "time", void 0);
    GameOverSc = __decorate([
        ccclass
    ], GameOverSc);
    return GameOverSc;
}(cc.Component));
exports.default = GameOverSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU92ZXJTYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtQ0M7UUFoQ0csVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0Qix3QkFBd0I7UUFDeEIsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUE0QmxCLENBQUM7SUEzQkcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUs7WUFBRSxPQUFPO1FBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDSSxhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELGtDQUFhLEdBQWI7UUFDSSxhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDRztJQUhMLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtQzlCO0lBQUQsaUJBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3VDLEVBQUUsQ0FBQyxTQUFTLEdBbUNuRDtrQkFuQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlclNjIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGNvb2xkb3duID0gMTA7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlID09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNvb2xkb3duID09IDApIHtcbiAgICAgICAgICAgIHRoaXMub25jbGlja19za2lwKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvb2xkb3duIC09IGR0O1xuICAgICAgICAgICAgaWYgKHRoaXMuY29vbGRvd24gPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29vbGRvd24gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aW1lLnN0cmluZyA9IE1hdGguZmxvb3IodGhpcy5jb29sZG93bikudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uY2xpY2tfc2tpcCgpIHtcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCAxKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX2NoYW5nZXRvX3N0YXJ0KTtcbiAgICB9XG4gICAgb25jbGlja19yZXZpZSgpIHtcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCAxKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX2dhbWVfcmV2aWUpO1xuICAgIH1cbn1cbiJdfQ==