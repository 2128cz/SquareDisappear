
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/load/Loading');
require('./assets/scripts/BombEffectSc');
require('./assets/scripts/BrickSc');
require('./assets/scripts/CheckOverSc');
require('./assets/scripts/DelayDelSc');
require('./assets/scripts/GameOverSc');
require('./assets/scripts/GameSc');
require('./assets/scripts/GameTouchSc');
require('./assets/scripts/IceEffectSc');
require('./assets/scripts/IconCooldownSc');
require('./assets/scripts/MessageBoxSc');
require('./assets/scripts/Msger');
require('./assets/scripts/PropUISc');
require('./assets/scripts/SceneManagerSc');
require('./assets/scripts/SoundConctrollerSc');
require('./assets/scripts/SplinteringConctrollerSc');
require('./assets/scripts/StartSc');
require('./assets/scripts/WXManager');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23e202qdpdEz5cqMMAmCA4c', 'GameSc');
// scripts/GameSc.ts

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
var BrickSc_1 = require("./BrickSc");
var DelayDelSc_1 = require("./DelayDelSc");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameSc = /** @class */ (function (_super) {
    __extends(GameSc, _super);
    function GameSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.bricksLayer = null;
        _this.closeLayer = null;
        _this.blockPrefab = null;
        _this.xiaochuEffect = null;
        _this.quanjiEffect = null;
        // LIFE-CYCLE CALLBACKS:
        _this.points = [];
        _this.begin_y = 694;
        _this.gametime = 0;
        _this.isPaused = true;
        _this.movespeed = 150;
        _this.g_movespeed_sc = 1;
        return _this;
    }
    GameSc.prototype.onLoad = function () {
        this.quanjiEffect.node.active = false;
        Msger_1.Msger.on(Msger_1.Msger.on_game_begin, this.on_game_begin, this);
        Msger_1.Msger.on(Msger_1.Msger.on_game_revie, this.on_game_revie, this);
        for (var _i = 0, _a = this.bricksLayer.children; _i < _a.length; _i++) {
            var iterator = _a[_i];
            this.points.push(iterator.x);
        }
        this.bricksLayer.removeAllChildren();
    };
    GameSc.prototype.on_game_revie = function () {
        this.isPaused = false;
        this.gametime *= 0.25;
    };
    GameSc.prototype.on_game_begin = function () {
        this.score = 0;
        this.gametime = 0;
        this.isPaused = false;
        this.bricksLayer.removeAllChildren();
    };
    Object.defineProperty(GameSc.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (v) {
            this._score = v;
            this.scoreLabel.string = v.toString();
        },
        enumerable: false,
        configurable: true
    });
    GameSc.prototype.update = function (dt) {
        if (this.isPaused) {
            return;
        }
        this.gametime += dt;
        if (this.gametime > 60) {
            this.gametime = 60;
        }
        for (var _i = 0, _a = this.closeLayer.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.getComponent(DelayDelSc_1.default)) {
                continue;
            }
            this.score += this.closeOne(item);
        }
        var topBrick = null;
        for (var _b = 0, _c = this.bricksLayer.children; _b < _c.length; _b++) {
            var item = _c[_b];
            var sc = item.getComponent(BrickSc_1.default);
            var movespdsc = this.g_movespeed_sc;
            ///对于不是打上去的砖块则特殊处理一下
            if (sc.moveSpeed != 0) {
                movespdsc = 1;
            }
            item.y -= dt * (this.movespeed + sc.moveSpeed) * movespdsc * (this.gametime / 60 + 1);
            if (sc.moveSpeed != 0) {
                this.check_collision(item);
            }
            else {
                // 
                if (topBrick == null) {
                    topBrick = item;
                }
                else if (item.y > topBrick.y) {
                    topBrick = item;
                }
            }
        }
        if (this.bricksLayer.childrenCount <= 0) {
            this.add_line_bricks();
        }
        else if (topBrick) {
            if (topBrick.y < this.begin_y) {
                this.add_line_bricks(topBrick);
            }
        }
        this.check_line_close();
    };
    GameSc.prototype.check_line_close = function () {
        var array = [];
        for (var _i = 0, _a = this.bricksLayer.children; _i < _a.length; _i++) {
            var item = _a[_i];
            var key = Math.floor(item.y / item.height);
            if (array[key]) {
                array[key].push(item);
            }
            else {
                array[key] = [item];
            }
        }
        for (var key in array) {
            if (array[key].length === 4) {
                var y = array[key][2].y;
                for (var _b = 0, _c = array[key]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    item.parent = this.closeLayer;
                    item.y = y;
                }
                //显示特效
                this.xiaochuEffect.playAnimation("newAnimation", 1);
                this.xiaochuEffect.node.y = array[key][0].y + array[key][0].height;
                Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 8);
            }
        }
    };
    GameSc.prototype.check_collision = function (brick) {
        for (var _i = 0, _a = this.bricksLayer.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (brick == item || item.getComponent(BrickSc_1.default).moveSpeed != 0) {
                continue;
            }
            if (brick.x == item.x) {
                if (brick.y >= item.y - item.height) {
                    // console.log(item.height,item.y);
                    brick.y = item.y - item.height;
                    brick.getComponent(BrickSc_1.default).moveSpeed = 0;
                    break;
                }
            }
        }
    };
    GameSc.prototype.closeOne = function (brick) {
        var _a;
        var score = 1;
        for (var i = 1; i < 9; i++) {
            var getBrick = this.getOneBrickFromXY(brick.x, brick.y - brick.height * i);
            if (((_a = getBrick === null || getBrick === void 0 ? void 0 : getBrick.getComponent(BrickSc_1.default)) === null || _a === void 0 ? void 0 : _a.moveSpeed) != 0) {
                continue;
            }
            if (getBrick) {
                score += this.closeOne(getBrick);
            }
        }
        brick.removeFromParent(true);
        Msger_1.Msger.emit(Msger_1.Msger.on_clean_brick, this.closeLayer, brick.position);
        return score;
    };
    GameSc.prototype.getOneBrickFromXY = function (x, y) {
        for (var _i = 0, _a = this.bricksLayer.children; _i < _a.length; _i++) {
            var item = _a[_i];
            var indexX = Math.floor(item.x / item.width);
            var indexY = Math.floor(item.y / item.height);
            if (indexY == Math.floor(y / item.height) && indexX == Math.floor(x / item.width)) {
                return item;
            }
        }
        return null;
    };
    GameSc.prototype.add_line_bricks = function (topBrick) {
        if (topBrick === void 0) { topBrick = null; }
        var sum = Math.random() * 3;
        sum = Math.floor(sum) + 2;
        if (sum == 4) {
            sum = 3;
        }
        var temp = [];
        for (var i = 0; i < sum; i++) {
            var brick = cc.instantiate(this.blockPrefab);
            brick.y = topBrick == null ? this.begin_y : topBrick.y + topBrick.height;
            var j = 0;
            do {
                j = Math.floor(Math.random() * this.points.length);
            } while (temp.indexOf(j) >= 0);
            temp.push(j);
            brick.x = this.points[j];
            this.bricksLayer.addChild(brick);
        }
    };
    GameSc.prototype.onclick_back = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        Msger_1.Msger.emit(Msger_1.Msger.on_changeto_start);
        this.isPaused = true;
    };
    GameSc.prototype.add_move_brick = function (index) {
        var brick = cc.instantiate(this.blockPrefab);
        brick.y = -this.begin_y + 200;
        brick.x = this.points[index];
        brick.getComponent(BrickSc_1.default).moveSpeed = -2000;
        this.bricksLayer.addChild(brick);
    };
    GameSc.prototype.play_hit_effect = function () {
        this.quanjiEffect.node.active = true;
        var array = this.bricksLayer.children.sort(function (a, b) {
            return a.y - b.y;
        });
        this.quanjiEffect.node.y = array[0].y + 300;
        this.quanjiEffect.playAnimation("newAnimation", 1);
    };
    __decorate([
        property(cc.Label)
    ], GameSc.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameSc.prototype, "bricksLayer", void 0);
    __decorate([
        property(cc.Node)
    ], GameSc.prototype, "closeLayer", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameSc.prototype, "blockPrefab", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], GameSc.prototype, "xiaochuEffect", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], GameSc.prototype, "quanjiEffect", void 0);
    GameSc = __decorate([
        ccclass
    ], GameSc);
    return GameSc;
}(cc.Component));
exports.default = GameSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUNoQyxxQ0FBZ0M7QUFDaEMsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBcU1DO1FBbE1HLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWdDLElBQUksQ0FBQztRQUVsRCxrQkFBWSxHQUFnQyxJQUFJLENBQUM7UUFHakQsd0JBQXdCO1FBQ2hCLFlBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQW9COUIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQVViLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDUixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDOztJQW1KdkIsQ0FBQztJQWxMRyx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QyxhQUFLLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxhQUFLLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxLQUF1QixVQUF5QixFQUF6QixLQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUF6QixjQUF5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QUM1QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQWpNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7aURBQ1k7SUFFbEQ7UUFEQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztnREFDVztJQWJoQyxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBcU0xQjtJQUFELGFBQUM7Q0FyTUQsQUFxTUMsQ0FyTW1DLEVBQUUsQ0FBQyxTQUFTLEdBcU0vQztrQkFyTW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XHJcbmltcG9ydCBCcmlja1NjIGZyb20gXCIuL0JyaWNrU2NcIjtcclxuaW1wb3J0IERlbGF5RGVsU2MgZnJvbSBcIi4vRGVsYXlEZWxTY1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnJpY2tzTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjbG9zZUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBibG9ja1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpXHJcbiAgICB4aWFvY2h1RWZmZWN0OiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSlcclxuICAgIHF1YW5qaUVmZmVjdDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIHBvaW50czogbnVtYmVyW10gPSBbXTtcclxuICAgIHByaXZhdGUgYmVnaW5feTogbnVtYmVyID0gNjk0O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucXVhbmppRWZmZWN0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgTXNnZXIub24oTXNnZXIub25fZ2FtZV9iZWdpbiwgdGhpcy5vbl9nYW1lX2JlZ2luLCB0aGlzKTtcclxuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9nYW1lX3JldmllLCB0aGlzLm9uX2dhbWVfcmV2aWUsIHRoaXMpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgdGhpcy5icmlja3NMYXllci5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKGl0ZXJhdG9yLngpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJyaWNrc0xheWVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uX2dhbWVfcmV2aWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZXRpbWUgKj0gMC4yNTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25fZ2FtZV9iZWdpbigpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmdhbWV0aW1lID0gMDtcclxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5icmlja3NMYXllci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gICAgZ2FtZXRpbWUgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IHNjb3JlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBzY29yZSh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHY7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHYudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGlzUGF1c2VkID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgbW92ZXNwZWVkID0gMTUwO1xyXG4gICAgZ19tb3Zlc3BlZWRfc2MgPSAxO1xyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWV0aW1lICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWV0aW1lID4gNjApIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1ldGltZSA9IDYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuY2xvc2VMYXllci5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5nZXRDb21wb25lbnQoRGVsYXlEZWxTYykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jbG9zZU9uZShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvcEJyaWNrID0gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IHNjID0gaXRlbS5nZXRDb21wb25lbnQoQnJpY2tTYyk7XHJcbiAgICAgICAgICAgIGxldCBtb3Zlc3Bkc2MgPSB0aGlzLmdfbW92ZXNwZWVkX3NjO1xyXG4gICAgICAgICAgICAvLy/lr7nkuo7kuI3mmK/miZPkuIrljrvnmoTnoJblnZfliJnnibnmrorlpITnkIbkuIDkuItcclxuICAgICAgICAgICAgaWYgKHNjLm1vdmVTcGVlZCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBtb3Zlc3Bkc2MgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0ueSAtPSBkdCAqICh0aGlzLm1vdmVzcGVlZCArIHNjLm1vdmVTcGVlZCkgKiBtb3Zlc3Bkc2MgKiAodGhpcy5nYW1ldGltZSAvIDYwICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChzYy5tb3ZlU3BlZWQgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja19jb2xsaXNpb24oaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgICAgIGlmICh0b3BCcmljayA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wQnJpY2sgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnkgPiB0b3BCcmljay55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wQnJpY2sgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJyaWNrc0xheWVyLmNoaWxkcmVuQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZF9saW5lX2JyaWNrcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodG9wQnJpY2spIHtcclxuICAgICAgICAgICAgaWYgKHRvcEJyaWNrLnkgPCB0aGlzLmJlZ2luX3kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkX2xpbmVfYnJpY2tzKHRvcEJyaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrX2xpbmVfY2xvc2UoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2hlY2tfbGluZV9jbG9zZSgpIHtcclxuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IE1hdGguZmxvb3IoaXRlbS55IC8gaXRlbS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBpZiAoYXJyYXlba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlba2V5XS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlba2V5XSA9IFtpdGVtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKGFycmF5W2tleV0ubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IGFycmF5W2tleV1bMl0ueTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXlba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtIGFzIGNjLk5vZGUpLnBhcmVudCA9IHRoaXMuY2xvc2VMYXllcjtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbSBhcyBjYy5Ob2RlKS55ID0geTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5pi+56S654m55pWIXHJcbiAgICAgICAgICAgICAgICB0aGlzLnhpYW9jaHVFZmZlY3QucGxheUFuaW1hdGlvbihcIm5ld0FuaW1hdGlvblwiLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueGlhb2NodUVmZmVjdC5ub2RlLnkgPSBhcnJheVtrZXldWzBdLnkgKyBhcnJheVtrZXldWzBdLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNoZWNrX2NvbGxpc2lvbihicmljazogY2MuTm9kZSkge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5icmlja3NMYXllci5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoYnJpY2sgPT0gaXRlbSB8fCBpdGVtLmdldENvbXBvbmVudChCcmlja1NjKS5tb3ZlU3BlZWQgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJyaWNrLnggPT0gaXRlbS54KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnJpY2sueSA+PSBpdGVtLnkgLSBpdGVtLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaGVpZ2h0LGl0ZW0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJpY2sueSA9IGl0ZW0ueSAtIGl0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyaWNrLmdldENvbXBvbmVudChCcmlja1NjKS5tb3ZlU3BlZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9zZU9uZShicmljazogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBzY29yZSA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGdldEJyaWNrID0gdGhpcy5nZXRPbmVCcmlja0Zyb21YWShicmljay54LCBicmljay55IC0gYnJpY2suaGVpZ2h0ICogaSk7XHJcbiAgICAgICAgICAgIGlmKGdldEJyaWNrPy5nZXRDb21wb25lbnQoQnJpY2tTYyk/Lm1vdmVTcGVlZCAhPSAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnZXRCcmljaykge1xyXG4gICAgICAgICAgICAgICAgc2NvcmUgKz0gdGhpcy5jbG9zZU9uZShnZXRCcmljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJpY2sucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX2NsZWFuX2JyaWNrLCB0aGlzLmNsb3NlTGF5ZXIsIGJyaWNrLnBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gc2NvcmU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE9uZUJyaWNrRnJvbVhZKHgsIHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4WCA9IE1hdGguZmxvb3IoaXRlbS54IC8gaXRlbS53aWR0aCk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleFkgPSBNYXRoLmZsb29yKGl0ZW0ueSAvIGl0ZW0uaGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKGluZGV4WSA9PSBNYXRoLmZsb29yKHkgLyBpdGVtLmhlaWdodCkgJiYgaW5kZXhYID09IE1hdGguZmxvb3IoeCAvIGl0ZW0ud2lkdGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGFkZF9saW5lX2JyaWNrcyh0b3BCcmljazogY2MuTm9kZSA9IG51bGwpIHtcclxuICAgICAgICBsZXQgc3VtID0gTWF0aC5yYW5kb20oKSAqIDM7XHJcbiAgICAgICAgc3VtID0gTWF0aC5mbG9vcihzdW0pICsgMjtcclxuICAgICAgICBpZiAoc3VtID09IDQpIHtcclxuICAgICAgICAgICAgc3VtID0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXAgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBicmljayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tQcmVmYWIpO1xyXG4gICAgICAgICAgICBicmljay55ID0gdG9wQnJpY2sgPT0gbnVsbCA/IHRoaXMuYmVnaW5feSA6IHRvcEJyaWNrLnkgKyB0b3BCcmljay5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRlbXAuaW5kZXhPZihqKSA+PSAwKTtcclxuICAgICAgICAgICAgdGVtcC5wdXNoKGopO1xyXG4gICAgICAgICAgICBicmljay54ID0gdGhpcy5wb2ludHNbal07XHJcbiAgICAgICAgICAgIHRoaXMuYnJpY2tzTGF5ZXIuYWRkQ2hpbGQoYnJpY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uY2xpY2tfYmFjaygpIHtcclxuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xyXG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fY2hhbmdldG9fc3RhcnQpO1xyXG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgYWRkX21vdmVfYnJpY2soaW5kZXgpIHtcclxuICAgICAgICBsZXQgYnJpY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrUHJlZmFiKTtcclxuICAgICAgICBicmljay55ID0gLXRoaXMuYmVnaW5feSArIDIwMDtcclxuICAgICAgICBicmljay54ID0gdGhpcy5wb2ludHNbaW5kZXhdO1xyXG4gICAgICAgIGJyaWNrLmdldENvbXBvbmVudChCcmlja1NjKS5tb3ZlU3BlZWQgPSAtMjAwMDtcclxuICAgICAgICB0aGlzLmJyaWNrc0xheWVyLmFkZENoaWxkKGJyaWNrKTtcclxuICAgIH1cclxuICAgIHBsYXlfaGl0X2VmZmVjdCgpIHtcclxuICAgICAgICB0aGlzLnF1YW5qaUVmZmVjdC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5icmlja3NMYXllci5jaGlsZHJlbi5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLnkgLSBiLnk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnF1YW5qaUVmZmVjdC5ub2RlLnkgPSBhcnJheVswXS55ICsgMzAwO1xyXG4gICAgICAgIHRoaXMucXVhbmppRWZmZWN0LnBsYXlBbmltYXRpb24oXCJuZXdBbmltYXRpb25cIiwgMSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/DelayDelSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cee8Z3grFJs4J7sK5cvZVa', 'DelayDelSc');
// scripts/DelayDelSc.ts

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
var DelayDelSc = /** @class */ (function (_super) {
    __extends(DelayDelSc, _super);
    function DelayDelSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        _this.delayTime = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    DelayDelSc.prototype.onLoad = function () {
    };
    DelayDelSc.prototype.start = function () {
    };
    DelayDelSc.prototype.show = function () {
    };
    DelayDelSc.prototype.update = function (dt) {
        this.delayTime -= dt;
        if (this.delayTime <= 0) {
            this.node.removeFromParent();
            Msger_1.Msger.emit(Msger_1.Msger.on_Splintering_del, this.node);
        }
    };
    DelayDelSc = __decorate([
        ccclass
    ], DelayDelSc);
    return DelayDelSc;
}(cc.Component));
exports.default = DelayDelSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGVsYXlEZWxTYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF5QkM7UUF0QkcsWUFBWTtRQUNaLGVBQVMsR0FBVyxDQUFDLENBQUM7O0lBcUIxQixDQUFDO0lBbkJHLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQUksR0FBSjtJQUVBLENBQUM7SUFDRCwyQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzdCLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUF4QmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F5QjlCO0lBQUQsaUJBQUM7Q0F6QkQsQUF5QkMsQ0F6QnVDLEVBQUUsQ0FBQyxTQUFTLEdBeUJuRDtrQkF6Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsYXlEZWxTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgZGVsYXlUaW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmRlbGF5VGltZSAtPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5kZWxheVRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX1NwbGludGVyaW5nX2RlbCwgdGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BombEffectSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1573qDWVRFVrHw7OBgbNdz', 'BombEffectSc');
// scripts/BombEffectSc.ts

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
var BombEffectSc = /** @class */ (function (_super) {
    __extends(BombEffectSc, _super);
    function BombEffectSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frames = [];
        _this.frametimer = 0;
        _this.frameindex = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    BombEffectSc.prototype.onLoad = function () {
        this.node.active = false;
    };
    BombEffectSc.prototype.start = function () {
    };
    BombEffectSc.prototype.update = function (dt) {
        if (this.node.active) {
            this.frametimer += dt;
            if (this.frametimer >= 0.05) {
                if (this.frameindex >= this.frames.length) {
                    this.node.active = false;
                    this.frametimer = 0;
                    this.frameindex = 0;
                    this.getComponent(cc.Sprite).spriteFrame = this.frames[this.frameindex];
                }
                this.frametimer = 0;
                this.frameindex += 1;
                this.getComponent(cc.Sprite).spriteFrame = this.frames[this.frameindex];
            }
        }
    };
    __decorate([
        property([cc.SpriteFrame])
    ], BombEffectSc.prototype, "frames", void 0);
    BombEffectSc = __decorate([
        ccclass
    ], BombEffectSc);
    return BombEffectSc;
}(cc.Component));
exports.default = BombEffectSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9tYkVmZmVjdFNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBaUNDO1FBOUJHLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBWXRCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUM7O0lBaUIzQixDQUFDO0lBNUJHLHdCQUF3QjtJQUV4Qiw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRTdCLENBQUM7SUFFRCw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUdELDZCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzNFO2dCQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNFO1NBQ0o7SUFDTCxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dEQUNHO0lBSGIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlDaEM7SUFBRCxtQkFBQztDQWpDRCxBQWlDQyxDQWpDeUMsRUFBRSxDQUFDLFNBQVMsR0FpQ3JEO2tCQWpDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWJFZmZlY3RTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBmcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZyYW1ldGltZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmcmFtZWluZGV4ID0gMDtcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWV0aW1lciArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWV0aW1lciA+PSAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZWluZGV4ID49IHRoaXMuZnJhbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1ldGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJhbWVzW3RoaXMuZnJhbWVpbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1ldGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZWluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5mcmFtZXNbdGhpcy5mcmFtZWluZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameTouchSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c34c2Es4A1BGayOI+xbecDs', 'GameTouchSc');
// scripts/GameTouchSc.ts

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
var GameSc_1 = require("./GameSc");
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameTouchSc = /** @class */ (function (_super) {
    __extends(GameTouchSc, _super);
    function GameTouchSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchLayer = null;
        _this.holdTouch = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GameTouchSc.prototype.onLoad = function () {
        this.touchLayer.on(cc.Node.EventType.TOUCH_START, this.touchBegin, this);
    };
    GameTouchSc.prototype.touchBegin = function (e) {
        if (this.holdTouch > 0) {
            return;
        }
        if (this.getComponent(GameSc_1.default).isPaused) {
            return;
        }
        // console.log(e.touch.getLocationX());
        var pt = this.touchLayer.convertToNodeSpaceAR(e.touch.getLocation());
        var index = (pt.x + 720 / 2) / (720 / 4);
        index = Math.floor(index);
        if (index < 0)
            index = 0;
        if (index > 3)
            index = 3;
        this.getComponent(GameSc_1.default).add_move_brick(index);
        this.holdTouch = 0.2;
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 7);
    };
    GameTouchSc.prototype.update = function (dt) {
        this.holdTouch -= dt;
    };
    __decorate([
        property(cc.Node)
    ], GameTouchSc.prototype, "touchLayer", void 0);
    GameTouchSc = __decorate([
        ccclass
    ], GameTouchSc);
    return GameTouchSc;
}(cc.Component));
exports.default = GameTouchSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVRvdWNoU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLGlDQUFnQztBQUcxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW9DQztRQWpDRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQTRCbkIsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUFLMUIsQ0FBQztJQTlCRyx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsQ0FBc0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNwQyxPQUFPO1NBQ1Y7UUFDRCx1Q0FBdUM7UUFDdkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFFckIsYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUztJQUhWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FvQy9CO0lBQUQsa0JBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3dDLEVBQUUsQ0FBQyxTQUFTLEdBb0NwRDtrQkFwQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVNjIGZyb20gXCIuL0dhbWVTY1wiO1xyXG5pbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVUb3VjaFNjIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvdWNoTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaExheWVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoQmVnaW4sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoQmVnaW4oZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhvbGRUb3VjaCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXRDb21wb25lbnQoR2FtZVNjKS5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudG91Y2guZ2V0TG9jYXRpb25YKCkpO1xyXG4gICAgICAgIGxldCBwdCA9IHRoaXMudG91Y2hMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlLnRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IChwdC54ICsgNzIwIC8gMikgLyAoNzIwIC8gNCk7XHJcbiAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKGluZGV4KTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IDA7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gMykgaW5kZXggPSAzO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KEdhbWVTYykuYWRkX21vdmVfYnJpY2soaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuaG9sZFRvdWNoID0gMC4yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgNyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgaG9sZFRvdWNoID0gMDtcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmhvbGRUb3VjaCAtPSBkdDtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTXNnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBYyxLQUFLLENBK0JsQjtBQS9CRCxXQUFjLEtBQUs7SUFFSix1QkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztJQUN4QyxzQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztJQUN0QyxtQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxtQkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxvQkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ2xDLG1CQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLG9CQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFDbEMsd0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7SUFDMUMscUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUNwQyxxQkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLHFCQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFFL0MsSUFBSSxVQUFVLEdBQVksSUFBSSxDQUFDO0lBQy9CLFNBQVMsU0FBUztRQUNkLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUNwQixVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDOUI7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsU0FBZ0IsSUFBSSxDQUFDLFNBQWlCLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBVSxFQUFFLElBQVU7UUFDOUYsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUZlLFVBQUksT0FFbkIsQ0FBQTtJQUVELFNBQWdCLEVBQUUsQ0FBQyxTQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFZO1FBQ3hELFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFGZSxRQUFFLEtBRWpCLENBQUE7SUFDRCxTQUFnQixHQUFHLENBQUMsU0FBaUIsRUFBRSxRQUFRLEVBQUUsTUFBWTtRQUN6RCxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRmUsU0FBRyxNQUVsQixDQUFBO0FBQ0wsQ0FBQyxFQS9CYSxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUErQmxCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG1vZHVsZSBNc2dlciB7XHJcblxyXG4gICAgZXhwb3J0IGxldCBvbl9jaGFuZ2V0b19zdGFydCA9IFwib25fY2hhbmdldG9fc3RhcnRcIjtcclxuICAgIGV4cG9ydCBsZXQgb25fY2hhbmdldG9fZ2FtZSA9IFwib25fY2hhbmdldG9fZ2FtZVwiO1xyXG4gICAgZXhwb3J0IGxldCBvbl9nYW1lX2JlZ2luID0gXCJvbl9nYW1lX2JlZ2luXCI7XHJcbiAgICBleHBvcnQgbGV0IG9uX2dhbWVfcmV2aWUgPSBcIm9uX2dhbWVfcmV2aWVcIjtcclxuICAgIGV4cG9ydCBsZXQgb25fc291bmRfbXV0ZWQgPSBcIm9uX3NvdW5kX211dGVkXCI7XHJcbiAgICBleHBvcnQgbGV0IG9uX3BsYXlfc291bmQgPSBcIm9uX3BsYXlfc291bmRcIjtcclxuICAgIGV4cG9ydCBsZXQgb25fY2xlYW5fYnJpY2sgPSBcIm9uX2NsZWFuX2JyaWNrXCI7XHJcbiAgICBleHBvcnQgbGV0IG9uX1NwbGludGVyaW5nX2RlbCA9IFwib25fU3BsaW50ZXJpbmdfZGVsXCI7XHJcbiAgICBleHBvcnQgbGV0IG9uX3Nob3dfd2F0dGluZyA9IFwib25fc2hvd193YXR0aW5nXCI7XHJcbiAgICBleHBvcnQgbGV0IG9uX2hpZGVfd2F0dGluZyA9IFwib25faGlkZV93YXR0aW5nXCI7XHJcbiAgICBleHBvcnQgbGV0IG9uX3Nob3dfbWVzc2FnZSA9IFwib25fc2hvd19tZXNzYWdlXCI7XHJcblxyXG4gICAgbGV0IF9tc2dlck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgZnVuY3Rpb24gbXNnZXJOb2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChfbXNnZXJOb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgX21zZ2VyTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfbXNnZXJOb2RlO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGVtaXQoZXZlbnRuYW1lOiBzdHJpbmcsIGFyZzE/OiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnksIGFyZzQ/OiBhbnksIGFyZzU/OiBhbnkpIHtcclxuICAgICAgICBtc2dlck5vZGUoKS5lbWl0KGV2ZW50bmFtZSwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG9uKGV2ZW50bmFtZTogc3RyaW5nLCBjYWxsYmFjaywgdGFyZ2V0PzogYW55KSB7XHJcbiAgICAgICAgbXNnZXJOb2RlKCkub24oZXZlbnRuYW1lLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBvZmYoZXZlbnRuYW1lOiBzdHJpbmcsIGNhbGxiYWNrLCB0YXJnZXQ/OiBhbnkpIHtcclxuICAgICAgICBtc2dlck5vZGUoKS5vZmYoZXZlbnRuYW1lLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU92ZXJTYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtQ0M7UUFoQ0csVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0Qix3QkFBd0I7UUFDeEIsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUE0QmxCLENBQUM7SUEzQkcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUs7WUFBRSxPQUFPO1FBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDSSxhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELGtDQUFhLEdBQWI7UUFDSSxhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDRztJQUhMLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtQzlCO0lBQUQsaUJBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3VDLEVBQUUsQ0FBQyxTQUFTLEdBbUNuRDtrQkFuQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGNvb2xkb3duID0gMTA7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlID09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuY29vbGRvd24gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uY2xpY2tfc2tpcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29vbGRvd24gLT0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvb2xkb3duIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGltZS5zdHJpbmcgPSBNYXRoLmZsb29yKHRoaXMuY29vbGRvd24pLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uY2xpY2tfc2tpcCgpIHtcclxuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX2NoYW5nZXRvX3N0YXJ0KTtcclxuICAgIH1cclxuICAgIG9uY2xpY2tfcmV2aWUoKSB7XHJcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCAxKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9nYW1lX3JldmllKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SceneManagerSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ef5aYQFX1NaZxMs3knQNlb', 'SceneManagerSc');
// scripts/SceneManagerSc.ts

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
var WXManager_1 = require("./WXManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneManagerSc = /** @class */ (function (_super) {
    __extends(SceneManagerSc, _super);
    function SceneManagerSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.StartUI = null;
        _this.GameUI = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    SceneManagerSc.prototype.onLoad = function () {
        Msger_1.Msger.on(Msger_1.Msger.on_changeto_start, this.on_changeto_start, this);
        Msger_1.Msger.on(Msger_1.Msger.on_changeto_game, this.on_changeto_game, this);
        this.StartUI.active = true;
        this.GameUI.active = false;
    };
    SceneManagerSc.prototype.start = function () {
        WXManager_1.default.Instance.openShare("share/share1", "比一比谁眼疾手快");
    };
    // update (dt) {}
    SceneManagerSc.prototype.on_changeto_game = function () {
        this.StartUI.active = false;
        this.GameUI.active = true;
        Msger_1.Msger.emit(Msger_1.Msger.on_game_begin);
    };
    SceneManagerSc.prototype.on_changeto_start = function () {
        this.StartUI.active = true;
        this.GameUI.active = false;
    };
    __decorate([
        property(cc.Node)
    ], SceneManagerSc.prototype, "StartUI", void 0);
    __decorate([
        property(cc.Node)
    ], SceneManagerSc.prototype, "GameUI", void 0);
    SceneManagerSc = __decorate([
        ccclass
    ], SceneManagerSc);
    return SceneManagerSc;
}(cc.Component));
exports.default = SceneManagerSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NlbmVNYW5hZ2VyU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBQ2hDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStCQztRQTVCRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBMEIzQixDQUFDO0lBeEJHLHdCQUF3QjtJQUV4QiwrQkFBTSxHQUFOO1FBQ0ksYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLGFBQUssQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUJBQWlCO0lBRVQseUNBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQixhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ08sMENBQWlCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUxOLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErQmxDO0lBQUQscUJBQUM7Q0EvQkQsQUErQkMsQ0EvQjJDLEVBQUUsQ0FBQyxTQUFTLEdBK0J2RDtrQkEvQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XHJcbmltcG9ydCBXWE1hbmFnZXIgZnJvbSBcIi4vV1hNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyU2MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU3RhcnRVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVVSTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIE1zZ2VyLm9uKE1zZ2VyLm9uX2NoYW5nZXRvX3N0YXJ0LCB0aGlzLm9uX2NoYW5nZXRvX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9jaGFuZ2V0b19nYW1lLCB0aGlzLm9uX2NoYW5nZXRvX2dhbWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuU3RhcnRVSS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2FtZVVJLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFdYTWFuYWdlci5JbnN0YW5jZS5vcGVuU2hhcmUoXCJzaGFyZS9zaGFyZTFcIiwgXCLmr5TkuIDmr5TosIHnnLznlr7miYvlv6tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwcml2YXRlIG9uX2NoYW5nZXRvX2dhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5TdGFydFVJLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR2FtZVVJLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9nYW1lX2JlZ2luKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25fY2hhbmdldG9fc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5TdGFydFVJLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5HYW1lVUkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/IceEffectSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55b63nP1oFO8qOyyxk/x9oZ', 'IceEffectSc');
// scripts/IceEffectSc.ts

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
var IceEffectSc = /** @class */ (function (_super) {
    __extends(IceEffectSc, _super);
    function IceEffectSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icePrefab = null;
        _this.ice = null;
        _this.frames = [];
        _this.overtime = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    IceEffectSc.prototype.onLoad = function () {
        for (var i = 0; i < 20; i++) {
            var sprite = cc.instantiate(this.icePrefab);
            var frame = this.frames.shift();
            sprite.getComponent(cc.Sprite).spriteFrame = frame;
            this.frames.push(frame);
            sprite.x = Math.random() * 720 - 360;
            sprite.y = Math.random() * 1280 - 640;
            this.node.addChild(sprite);
            sprite["speed"] = Math.random() * 100 + 50;
        }
        this.node.active = false;
    };
    IceEffectSc.prototype.showIecEffect = function (overtime) {
        this.overtime = overtime;
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == this.ice) {
                item.scale = 0.01;
                item.opacity = 255;
            }
            else {
                item.opacity = 0;
                item.runAction(cc.fadeTo(0.3, 200));
            }
        }
        this.ice.runAction(cc.sequence(cc.scaleTo(0.2, 10, 10), cc.fadeTo(0, 0)));
    };
    IceEffectSc.prototype.update = function (dt) {
        if (!this.node.active) {
            return;
        }
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == this.ice) {
                continue;
            }
            item.y -= dt * item["speed"];
            if (item.y <= -1280 / 2) {
                item.y = 1280 / 2;
            }
        }
        this.overtime -= dt;
        if (this.overtime <= 0) {
            this.node.active = false;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], IceEffectSc.prototype, "icePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], IceEffectSc.prototype, "ice", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], IceEffectSc.prototype, "frames", void 0);
    IceEffectSc = __decorate([
        ccclass
    ], IceEffectSc);
    return IceEffectSc;
}(cc.Component));
exports.default = IceEffectSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSWNlRWZmZWN0U2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUErREM7UUE1REcsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBaUJ0QixjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQXNDekIsQ0FBQztJQXJERyx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDckMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQWlCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBaEMsSUFBSSxJQUFJLFNBQUE7WUFDVCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUN0QztTQUNKO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDMUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN0QixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbEIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUNELEtBQWlCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBaEMsSUFBSSxJQUFJLFNBQUE7WUFDVCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNsQixTQUFTO2FBQ1o7WUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0o7UUFDRCxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUEzREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOytDQUNHO0lBUmIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQStEL0I7SUFBRCxrQkFBQztDQS9ERCxBQStEQyxDQS9Ed0MsRUFBRSxDQUFDLFNBQVMsR0ErRHBEO2tCQS9Eb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNlRWZmZWN0U2MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBpY2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBmcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljZVByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZnJhbWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHNwcml0ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcclxuICAgICAgICAgICAgc3ByaXRlLnggPSBNYXRoLnJhbmRvbSgpICogNzIwIC0gMzYwO1xyXG4gICAgICAgICAgICBzcHJpdGUueSA9IE1hdGgucmFuZG9tKCkgKiAxMjgwIC0gNjQwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICAgICAgICAgICAgc3ByaXRlW1wic3BlZWRcIl0gPSBNYXRoLnJhbmRvbSgpICogMTAwICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb3ZlcnRpbWUgPSAwO1xyXG4gICAgc2hvd0llY0VmZmVjdChvdmVydGltZSkge1xyXG4gICAgICAgIHRoaXMub3ZlcnRpbWUgPSBvdmVydGltZTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PSB0aGlzLmljZSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zY2FsZSA9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5ydW5BY3Rpb24oY2MuZmFkZVRvKDAuMywgMjAwKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pY2UucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwxMCwgMTApLFxyXG4gICAgICAgICAgICBjYy5mYWRlVG8oMCwgMClcclxuICAgICAgICApKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gdGhpcy5pY2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0ueSAtPSBkdCAqIGl0ZW1bXCJzcGVlZFwiXTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ueSA8PSAtMTI4MCAvIDIpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ueSA9IDEyODAgLyAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3ZlcnRpbWUgLT0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMub3ZlcnRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CheckOverSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bb4ft81x1LWKp5GcCxsd2G', 'CheckOverSc');
// scripts/CheckOverSc.ts

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
var GameSc_1 = require("./GameSc");
var BrickSc_1 = require("./BrickSc");
var GameOverSc_1 = require("./GameOverSc");
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CheckOverSc = /** @class */ (function (_super) {
    __extends(CheckOverSc, _super);
    function CheckOverSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overUI = null;
        _this.deadLine = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    CheckOverSc.prototype.start = function () {
    };
    CheckOverSc.prototype.update = function (dt) {
        if (this.getComponent(GameSc_1.default).isPaused) {
            return;
        }
        if (!this.bricksLayer) {
            this.bricksLayer = this.getComponent(GameSc_1.default).bricksLayer;
        }
        else {
            for (var _i = 0, _a = this.bricksLayer.children; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.getComponent(BrickSc_1.default).moveSpeed == 0) {
                    if (item.y - item.height / 2 <= this.deadLine.y) {
                        //
                        this.getComponent(GameSc_1.default).isPaused = true;
                        this.cleanBrikes();
                        this.overUI.active = true;
                        this.overUI.getComponent(GameOverSc_1.default).cooldown = 10;
                        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 3);
                    }
                }
            }
        }
    };
    CheckOverSc.prototype.cleanBrikes = function () {
        var bricks = this.getComponent(GameSc_1.default).bricksLayer;
        for (var i = bricks.childrenCount - 1; i >= 0; i--) {
            var item = bricks.children[i];
            if (item.y < 1280 / 2) {
                item.removeFromParent(true);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], CheckOverSc.prototype, "overUI", void 0);
    __decorate([
        property(cc.Node)
    ], CheckOverSc.prototype, "deadLine", void 0);
    CheckOverSc = __decorate([
        ccclass
    ], CheckOverSc);
    return CheckOverSc;
}(cc.Component));
exports.default = CheckOverSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2hlY2tPdmVyU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLHFDQUFnQztBQUNoQywyQ0FBc0M7QUFDdEMsaUNBQWdDO0FBRTFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNkNDO1FBekNHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUF1QzdCLENBQUM7SUF0Q0csd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7U0FDNUQ7YUFBTTtZQUNILEtBQWlCLFVBQXlCLEVBQXpCLEtBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQXpCLGNBQXlCLEVBQXpCLElBQXlCLEVBQUU7Z0JBQXZDLElBQUksSUFBSSxTQUFBO2dCQUNULElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtvQkFDM0MsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO3dCQUM3QyxFQUFFO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQzFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkQsYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUN0QztpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBQ08saUNBQVcsR0FBbkI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFOUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNkMvQjtJQUFELGtCQUFDO0NBN0NELEFBNkNDLENBN0N3QyxFQUFFLENBQUMsU0FBUyxHQTZDcEQ7a0JBN0NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTYyBmcm9tIFwiLi9HYW1lU2NcIjtcclxuaW1wb3J0IEJyaWNrU2MgZnJvbSBcIi4vQnJpY2tTY1wiO1xyXG5pbXBvcnQgR2FtZU92ZXJTYyBmcm9tIFwiLi9HYW1lT3ZlclNjXCI7XHJcbmltcG9ydCB7IE1zZ2VyIH0gZnJvbSBcIi4vTXNnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja092ZXJTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb3ZlclVJOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGVhZExpbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBicmlja3NMYXllcjogY2MuTm9kZTtcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmJyaWNrc0xheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnJpY2tzTGF5ZXIgPSB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmJyaWNrc0xheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5icmlja3NMYXllci5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0Q29tcG9uZW50KEJyaWNrU2MpLm1vdmVTcGVlZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ueSAtIGl0ZW0uaGVpZ2h0IC8gMiA8PSB0aGlzLmRlYWRMaW5lLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoR2FtZVNjKS5pc1BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5CcmlrZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVUkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVUkuZ2V0Q29tcG9uZW50KEdhbWVPdmVyU2MpLmNvb2xkb3duID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbGVhbkJyaWtlcygpIHtcclxuICAgICAgICBsZXQgYnJpY2tzID0gdGhpcy5nZXRDb21wb25lbnQoR2FtZVNjKS5icmlja3NMYXllcjtcclxuICAgICAgICBmb3IgKGxldCBpID0gYnJpY2tzLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGJyaWNrcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ueSA8IDEyODAgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PropUISc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a216NlfRtHvL+81yMCbNCN', 'PropUISc');
// scripts/PropUISc.ts

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
var GameSc_1 = require("./GameSc");
var BombEffectSc_1 = require("./BombEffectSc");
var IceEffectSc_1 = require("./IceEffectSc");
var IconCooldownSc_1 = require("./IconCooldownSc");
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PropUISc = /** @class */ (function (_super) {
    __extends(PropUISc, _super);
    function PropUISc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iceIcon = null;
        _this.ice_timer = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PropUISc.prototype.start = function () {
    };
    PropUISc.prototype.update = function (dt) {
        this.ice_timer -= dt;
        if (this.ice_timer <= 0) {
            this.getComponent(GameSc_1.default).g_movespeed_sc = 1;
        }
    };
    PropUISc.prototype.onclick_ice = function () {
        if (this.iceIcon.getComponent(IconCooldownSc_1.default).isCD()) {
            return;
        }
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 6);
        //应该播放一个效果
        this.getComponent(GameSc_1.default).g_movespeed_sc = 0.5;
        this.ice_timer = 10;
        var sc = this.getComponentInChildren(IceEffectSc_1.default);
        if (sc) {
            sc.node.active = true;
            sc.showIecEffect(this.ice_timer);
        }
        this.iceIcon.getComponent(IconCooldownSc_1.default).beginCD();
    };
    PropUISc.prototype.onclick_bomb = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 4);
        //应该播放一个效果
        var bricks = this.getComponent(GameSc_1.default).bricksLayer;
        for (var i = bricks.childrenCount - 1; i >= 0; i--) {
            var item = bricks.children[i];
            if (item.y < 1280 / 2) {
                item.removeFromParent(true);
            }
        }
        bricks.removeAllChildren(true);
        var sc = this.getComponentInChildren(BombEffectSc_1.default);
        if (sc) {
            sc.node.active = true;
        }
    };
    PropUISc.prototype.onclick_hit = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 5);
        //应该播放一个效果
        this.getComponent(GameSc_1.default).play_hit_effect();
        var gamesc = this.getComponent(GameSc_1.default);
        var target = gamesc.g_movespeed_sc;
        gamesc.g_movespeed_sc = -2;
        cc.Tween.stopAllByTarget(gamesc);
        cc.tween(gamesc).to(1, { g_movespeed_sc: target }, null).start();
    };
    __decorate([
        property(cc.Node)
    ], PropUISc.prototype, "iceIcon", void 0);
    PropUISc = __decorate([
        ccclass
    ], PropUISc);
    return PropUISc;
}(cc.Component));
exports.default = PropUISc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUHJvcFVJU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLCtDQUEwQztBQUMxQyw2Q0FBd0M7QUFDeEMsbURBQThDO0FBQzlDLGlDQUFnQztBQUkxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZEQztRQTFERyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBZ0J4QixlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQTBDbEIsQ0FBQztJQXhERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2xELE9BQU87U0FDVjtRQUNELGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQVcsQ0FBQyxDQUFBO1FBQ2pELElBQUksRUFBRSxFQUFFO1lBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFDRCwrQkFBWSxHQUFaO1FBQ0ksYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFVBQVU7UUFDVixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtTQUNKO1FBQ0QsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBWSxDQUFDLENBQUE7UUFDbEQsSUFBSSxFQUFFLEVBQUU7WUFDSixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ0QsOEJBQVcsR0FBWDtRQUNJLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNuQyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0lBekREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFIUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkQ1QjtJQUFELGVBQUM7Q0E3REQsQUE2REMsQ0E3RHFDLEVBQUUsQ0FBQyxTQUFTLEdBNkRqRDtrQkE3RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVNjIGZyb20gXCIuL0dhbWVTY1wiO1xyXG5pbXBvcnQgQm9tYkVmZmVjdFNjIGZyb20gXCIuL0JvbWJFZmZlY3RTY1wiO1xyXG5pbXBvcnQgSWNlRWZmZWN0U2MgZnJvbSBcIi4vSWNlRWZmZWN0U2NcIjtcclxuaW1wb3J0IEljb25Db29sZG93blNjIGZyb20gXCIuL0ljb25Db29sZG93blNjXCI7XHJcbmltcG9ydCB7IE1zZ2VyIH0gZnJvbSBcIi4vTXNnZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BVSVNjIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljZUljb246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmljZV90aW1lciAtPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5pY2VfdGltZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmdfbW92ZXNwZWVkX3NjID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpY2VfdGltZXIgPSAwO1xyXG4gICAgb25jbGlja19pY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWNlSWNvbi5nZXRDb21wb25lbnQoSWNvbkNvb2xkb3duU2MpLmlzQ0QoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgNik7XHJcbiAgICAgICAgLy/lupTor6Xmkq3mlL7kuIDkuKrmlYjmnpxcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmdfbW92ZXNwZWVkX3NjID0gMC41O1xyXG4gICAgICAgIHRoaXMuaWNlX3RpbWVyID0gMTA7XHJcbiAgICAgICAgbGV0IHNjID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKEljZUVmZmVjdFNjKVxyXG4gICAgICAgIGlmIChzYykge1xyXG4gICAgICAgICAgICBzYy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNjLnNob3dJZWNFZmZlY3QodGhpcy5pY2VfdGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmljZUljb24uZ2V0Q29tcG9uZW50KEljb25Db29sZG93blNjKS5iZWdpbkNEKCk7XHJcbiAgICB9XHJcbiAgICBvbmNsaWNrX2JvbWIoKSB7XHJcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCA0KTtcclxuICAgICAgICAvL+W6lOivpeaSreaUvuS4gOS4quaViOaenFxyXG4gICAgICAgIGxldCBicmlja3MgPSB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLmJyaWNrc0xheWVyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBicmlja3MuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gYnJpY2tzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS55IDwgMTI4MCAvIDIpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmlja3MucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcbiAgICAgICAgbGV0IHNjID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKEJvbWJFZmZlY3RTYylcclxuICAgICAgICBpZiAoc2MpIHtcclxuICAgICAgICAgICAgc2Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uY2xpY2tfaGl0KCkge1xyXG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgNSk7XHJcbiAgICAgICAgLy/lupTor6Xmkq3mlL7kuIDkuKrmlYjmnpxcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpLnBsYXlfaGl0X2VmZmVjdCgpO1xyXG4gICAgICAgIGxldCBnYW1lc2MgPSB0aGlzLmdldENvbXBvbmVudChHYW1lU2MpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBnYW1lc2MuZ19tb3Zlc3BlZWRfc2M7XHJcbiAgICAgICAgZ2FtZXNjLmdfbW92ZXNwZWVkX3NjID0gLTI7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGdhbWVzYyk7XHJcbiAgICAgICAgY2MudHdlZW4oZ2FtZXNjKS50bygxLCB7IGdfbW92ZXNwZWVkX3NjOiB0YXJnZXQgfSwgbnVsbCkuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MessageBoxSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fc9eirFG1CtJwC8KJA39Wp', 'MessageBoxSc');
// scripts/MessageBoxSc.ts

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
var MessageBoxSc = /** @class */ (function (_super) {
    __extends(MessageBoxSc, _super);
    function MessageBoxSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.MessageBox = null;
        // LIFE-CYCLE CALLBACKS:
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    MessageBoxSc.prototype.onLoad = function () {
        var _this = this;
        Msger_1.Msger.on(Msger_1.Msger.on_show_watting, function (e, callback) {
            if (_this.MessageBox) {
                _this.MessageBox.active = true;
                _this.callback = callback;
            }
        }, this);
        this.MessageBox.active = false;
    };
    MessageBoxSc.prototype.onclick_close = function () {
        this.MessageBox.active = false;
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        if (this.callback) {
            this.callback();
        }
    };
    __decorate([
        property(cc.Label)
    ], MessageBoxSc.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxSc.prototype, "MessageBox", void 0);
    MessageBoxSc = __decorate([
        ccclass
    ], MessageBoxSc);
    return MessageBoxSc;
}(cc.Component));
exports.default = MessageBoxSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVzc2FnZUJveFNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUcxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTZCQztRQTFCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLHdCQUF3QjtRQUNoQixjQUFRLEdBQUcsSUFBSSxDQUFDOztRQW1CeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFuQkcsNkJBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEcsYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsZUFBZSxFQUFFLFVBQUMsQ0FBQyxFQUFDLFFBQVE7WUFDdkMsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUztJQU5WLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E2QmhDO0lBQUQsbUJBQUM7Q0E3QkQsQUE2QkMsQ0E3QnlDLEVBQUUsQ0FBQyxTQUFTLEdBNkJyRDtrQkE3Qm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VCb3hTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE1lc3NhZ2VCb3g6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgcHJpdmF0ZSBjYWxsYmFjayA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTXNnZXIub24oTXNnZXIub25fc2hvd193YXR0aW5nLCAoZSxjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5NZXNzYWdlQm94KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1lc3NhZ2VCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgdGhpcy5NZXNzYWdlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uY2xpY2tfY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5NZXNzYWdlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgMSk7XHJcbiAgICAgICAgaWYodGhpcy5jYWxsYmFjayl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SoundConctrollerSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1cfaRJGtlIQLWFFIvWbruH', 'SoundConctrollerSc');
// scripts/SoundConctrollerSc.ts

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
var SoundConctrollerSc = /** @class */ (function (_super) {
    __extends(SoundConctrollerSc, _super);
    function SoundConctrollerSc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoundConctrollerSc_1 = SoundConctrollerSc;
    SoundConctrollerSc.prototype.onLoad = function () {
        Msger_1.Msger.on(Msger_1.Msger.on_play_sound, this.on_play_sound, this);
        Msger_1.Msger.on(Msger_1.Msger.on_sound_muted, this.on_sound_muted, this);
    };
    SoundConctrollerSc.prototype.on_sound_muted = function () {
        SoundConctrollerSc_1.isMuted = !SoundConctrollerSc_1.isMuted;
        if (SoundConctrollerSc_1.isMuted) {
            this.node.getChildByName('bgm').getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.node.getChildByName('bgm').getComponent(cc.AudioSource).volume = 1;
        }
    };
    // 
    SoundConctrollerSc.prototype.on_play_sound = function (e) {
        if (SoundConctrollerSc_1.isMuted) {
            return;
        }
        if (e == 8) {
            e = Math.floor(Math.random() * 3) + 8;
        }
        this.node.children[e].getComponent(cc.AudioSource).play();
    };
    var SoundConctrollerSc_1;
    // LIFE-CYCLE CALLBACKS:
    SoundConctrollerSc.isMuted = false;
    SoundConctrollerSc = SoundConctrollerSc_1 = __decorate([
        ccclass
    ], SoundConctrollerSc);
    return SoundConctrollerSc;
}(cc.Component));
exports.default = SoundConctrollerSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU291bmRDb25jdHJvbGxlclNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUUxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDs7SUE2QkEsQ0FBQzsyQkE3Qm9CLGtCQUFrQjtJQUluQyxtQ0FBTSxHQUFOO1FBQ0ksYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFOUQsQ0FBQztJQUNELDJDQUFjLEdBQWQ7UUFDSSxvQkFBa0IsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxvQkFBa0IsQ0FBQyxPQUFPLENBQUM7UUFDekQsSUFBSSxvQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDM0U7SUFDTCxDQUFDO0lBQ0QsR0FBRztJQUNILDBDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ1gsSUFBSSxvQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDNUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUQsQ0FBQzs7SUF4QkQsd0JBQXdCO0lBQ1YsMEJBQU8sR0FBRyxLQUFLLENBQUM7SUFIYixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTZCdEM7SUFBRCx5QkFBQztDQTdCRCxBQTZCQyxDQTdCK0MsRUFBRSxDQUFDLFNBQVMsR0E2QjNEO2tCQTdCb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXNnZXIgfSBmcm9tIFwiLi9Nc2dlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kQ29uY3Ryb2xsZXJTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTXV0ZWQgPSBmYWxzZTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9wbGF5X3NvdW5kLCB0aGlzLm9uX3BsYXlfc291bmQsIHRoaXMpO1xyXG4gICAgICAgIE1zZ2VyLm9uKE1zZ2VyLm9uX3NvdW5kX211dGVkLCB0aGlzLm9uX3NvdW5kX211dGVkLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcbiAgICBvbl9zb3VuZF9tdXRlZCgpIHtcclxuICAgICAgICBTb3VuZENvbmN0cm9sbGVyU2MuaXNNdXRlZCA9ICFTb3VuZENvbmN0cm9sbGVyU2MuaXNNdXRlZDtcclxuICAgICAgICBpZiAoU291bmRDb25jdHJvbGxlclNjLmlzTXV0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdiZ20nKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdiZ20nKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnZvbHVtZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gXHJcbiAgICBvbl9wbGF5X3NvdW5kKGUpIHtcclxuICAgICAgICBpZiAoU291bmRDb25jdHJvbGxlclNjLmlzTXV0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZSA9PSA4KSB7XHJcbiAgICAgICAgICAgIGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltlXS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/IconCooldownSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a754CsSJlK3ae4ie7MAWPD', 'IconCooldownSc');
// scripts/IconCooldownSc.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var IconCooldownSc = /** @class */ (function (_super) {
    __extends(IconCooldownSc, _super);
    function IconCooldownSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CDMask = null;
        _this.lenTime = 10;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    IconCooldownSc.prototype.onLoad = function () {
        this.CDMask.fillRange = 0;
    };
    IconCooldownSc.prototype.isCD = function () {
        return this.CDMask.fillRange > 0;
    };
    IconCooldownSc.prototype.update = function (dt) {
        this.CDMask.fillRange -= dt * (1 / this.lenTime);
        if (this.CDMask.fillRange < 0) {
            this.CDMask.fillRange = 0;
        }
        else {
        }
    };
    IconCooldownSc.prototype.beginCD = function (len) {
        if (len === void 0) { len = 10; }
        this.lenTime = len;
        this.CDMask.fillRange = 1;
    };
    __decorate([
        property(cc.Sprite)
    ], IconCooldownSc.prototype, "CDMask", void 0);
    IconCooldownSc = __decorate([
        ccclass
    ], IconCooldownSc);
    return IconCooldownSc;
}(cc.Component));
exports.default = IconCooldownSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSWNvbkNvb2xkb3duU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0YsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEyQkM7UUF4QkcsWUFBTSxHQUFjLElBQUksQ0FBQztRQVl6QixhQUFPLEdBQUcsRUFBRSxDQUFDOztJQVlqQixDQUFDO0lBckJHLHdCQUF3QjtJQUV4QiwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFBTTtTQUNOO0lBQ0wsQ0FBQztJQUNELGdDQUFPLEdBQVAsVUFBUSxHQUFRO1FBQVIsb0JBQUEsRUFBQSxRQUFRO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDSztJQUhSLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EyQmxDO0lBQUQscUJBQUM7Q0EzQkQsQUEyQkMsQ0EzQjJDLEVBQUUsQ0FBQyxTQUFTLEdBMkJ2RDtrQkEzQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uQ29vbGRvd25TYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIENETWFzazogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuQ0RNYXNrLmZpbGxSYW5nZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDRCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DRE1hc2suZmlsbFJhbmdlID4gMDtcclxuICAgIH1cclxuICAgIGxlblRpbWUgPSAxMDtcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuQ0RNYXNrLmZpbGxSYW5nZSAtPSBkdCAqICgxIC8gdGhpcy5sZW5UaW1lKTtcclxuICAgICAgICBpZiAodGhpcy5DRE1hc2suZmlsbFJhbmdlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLkNETWFzay5maWxsUmFuZ2UgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYmVnaW5DRChsZW4gPSAxMCkge1xyXG4gICAgICAgIHRoaXMubGVuVGltZSA9IGxlbjtcclxuICAgICAgICB0aGlzLkNETWFzay5maWxsUmFuZ2UgPSAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/WXManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab307ceicpDKI1PxDSPpSX1', 'WXManager');
// scripts/WXManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WXManager = /** @class */ (function () {
    function WXManager() {
    }
    Object.defineProperty(WXManager, "Instance", {
        get: function () {
            if (!WXManager.instance) {
                WXManager.instance = new WXManager();
            }
            return WXManager.instance;
        },
        enumerable: false,
        configurable: true
    });
    //开通微信右上角的分享
    WXManager.prototype.openShare = function (frameUrl, title) {
        if (window.wx) {
            //显示
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            cc.resources.load(frameUrl, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    //share为分享的图片名称这是路径（assets/resources/share）
                    wx.onShareAppMessage(function (res) {
                        return {
                            title: title,
                            imageUrl: data.url,
                            success: function (res) {
                                console.log(res);
                            },
                            fail: function (res) {
                                console.log(res);
                            }
                        };
                    });
                }
            });
        }
    };
    //玩家主动点击按钮分享
    WXManager.prototype.playerShare = function (frameUrl, title) {
        if (window.wx) {
            cc.resources.load(frameUrl, function (err, data) {
                var options = {
                    title: title,
                    imageUrl: data.url,
                };
                wx.shareAppMessage(options);
                //share为分享的图片名称这是路径（assets/resources/share）
                wx.onShareAppMessage(function (res) {
                    return {
                        title: title,
                        imageUrl: data.url,
                        success: function (res) {
                            console.log(res);
                        },
                        fail: function (res) {
                            console.log(res);
                        }
                    };
                });
            });
        }
    };
    return WXManager;
}());
exports.default = WXManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV1hNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQWtFQSxDQUFDO0lBL0RHLHNCQUFrQixxQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUNyQixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7YUFDeEM7WUFDRCxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxZQUFZO0lBQ0wsNkJBQVMsR0FBaEIsVUFBaUIsUUFBZ0IsRUFBRSxLQUFhO1FBQzVDLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNYLElBQUk7WUFDSixFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUNiLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7YUFDOUMsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7Z0JBQzNDLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILDJDQUEyQztvQkFDM0MsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRzt3QkFDOUIsT0FBTzs0QkFDSCxLQUFLLEVBQUUsS0FBSzs0QkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUc7NEJBQ2xCLE9BQU8sWUFBQyxHQUFHO2dDQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ3BCLENBQUM7NEJBQ0QsSUFBSSxZQUFDLEdBQUc7Z0NBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTs0QkFDcEIsQ0FBQzt5QkFDSixDQUFBO29CQUNMLENBQUMsQ0FBQyxDQUFBO2lCQUNMO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFRCxZQUFZO0lBQ0wsK0JBQVcsR0FBbEIsVUFBbUIsUUFBZ0IsRUFBRSxLQUFhO1FBQzlDLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNYLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO2dCQUMzQyxJQUFJLE9BQU8sR0FBRztvQkFDVixLQUFLLEVBQUUsS0FBSztvQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUc7aUJBQ3JCLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFNUIsMkNBQTJDO2dCQUMzQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHO29CQUM5QixPQUFPO3dCQUNILEtBQUssRUFBRSxLQUFLO3dCQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDbEIsT0FBTyxZQUFDLEdBQUc7NEJBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDcEIsQ0FBQzt3QkFDRCxJQUFJLFlBQUMsR0FBRzs0QkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNwQixDQUFDO3FCQUNKLENBQUE7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdYTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogV1hNYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6IFdYTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFXWE1hbmFnZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgV1hNYW5hZ2VyLmluc3RhbmNlID0gbmV3IFdYTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gV1hNYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5byA6YCa5b6u5L+h5Y+z5LiK6KeS55qE5YiG5LqrXHJcbiAgICBwdWJsaWMgb3BlblNoYXJlKGZyYW1lVXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAod2luZG93Lnd4KSB7XHJcbiAgICAgICAgICAgIC8v5pi+56S6XHJcbiAgICAgICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVudXM6IFsnc2hhcmVBcHBNZXNzYWdlJywgJ3NoYXJlVGltZWxpbmUnXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChmcmFtZVVybCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2hhcmXkuLrliIbkuqvnmoTlm77niYflkI3np7Dov5nmmK/ot6/lvoTvvIhhc3NldHMvcmVzb3VyY2VzL3NoYXJl77yJXHJcbiAgICAgICAgICAgICAgICAgICAgd3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLCAvL+WIhuS6q+eahOagh+mimFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+eOqeWutuS4u+WKqOeCueWHu+aMiemSruWIhuS6q1xyXG4gICAgcHVibGljIHBsYXllclNoYXJlKGZyYW1lVXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAod2luZG93Lnd4KSB7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGZyYW1lVXJsLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZShvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NoYXJl5Li65YiG5Lqr55qE5Zu+54mH5ZCN56ew6L+Z5piv6Lev5b6E77yIYXNzZXRzL3Jlc291cmNlcy9zaGFyZe+8iVxyXG4gICAgICAgICAgICAgICAgd3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSwgLy/liIbkuqvnmoTmoIfpophcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SplinteringConctrollerSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36a7709JIJHRarEDv+8rKKM', 'SplinteringConctrollerSc');
// scripts/SplinteringConctrollerSc.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Msger_1 = require("./Msger");
var DelayDelSc_1 = require("./DelayDelSc");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SplinteringConctrollerSc = /** @class */ (function (_super) {
    __extends(SplinteringConctrollerSc, _super);
    function SplinteringConctrollerSc() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splintering = null;
        return _this;
    }
    SplinteringConctrollerSc.prototype.onLoad = function () {
        if (!this.nodeSave) {
            this.nodeSave = [];
        }
        Msger_1.Msger.on(Msger_1.Msger.on_Splintering_del, this.on_Splintering_del, this);
        Msger_1.Msger.on(Msger_1.Msger.on_clean_brick, this.on_clean_brick, this);
    };
    SplinteringConctrollerSc.prototype.on_Splintering_del = function (e) {
        this.nodeSave.push(e);
    };
    SplinteringConctrollerSc.prototype.on_clean_brick = function (p, pos) {
        var node;
        if (this.nodeSave.length > 0) {
            node = this.nodeSave.shift();
        }
        else {
            node = cc.instantiate(this.splintering);
        }
        node.getComponent(DelayDelSc_1.default).delayTime = 0.4;
        node.position = pos;
        p.addChild(node);
        node.getComponentInChildren(dragonBones.ArmatureDisplay).playAnimation("fk-tx-fk", 1);
    };
    SplinteringConctrollerSc.prototype.loadPrefabSync = function (file) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.loader.loadRes(file, cc.Prefab, function (err, content) {
                            resolve(content);
                        });
                    })];
            });
        });
    };
    SplinteringConctrollerSc.prototype.update = function (t) { };
    __decorate([
        property(cc.Prefab)
    ], SplinteringConctrollerSc.prototype, "splintering", void 0);
    SplinteringConctrollerSc = __decorate([
        ccclass
    ], SplinteringConctrollerSc);
    return SplinteringConctrollerSc;
}(cc.Component));
exports.default = SplinteringConctrollerSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3BsaW50ZXJpbmdDb25jdHJvbGxlclNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUNoQywyQ0FBc0M7QUFFdEMsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0QsNENBQVk7SUFBbEU7UUFFSSx3QkFBd0I7UUFGNUIscUVBdUNDO1FBbENHLGlCQUFXLEdBQWMsSUFBSSxDQUFDOztJQWtDbEMsQ0FBQztJQWpDRyx5Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDdEI7UUFDRCxhQUFLLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDakUsYUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELHFEQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxpREFBYyxHQUFkLFVBQWUsQ0FBVSxFQUFFLEdBQVk7UUFDbkMsSUFBSSxJQUFhLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNILElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVLLGlEQUFjLEdBQXBCLFVBQXFCLElBQUk7dUNBQUcsT0FBTzs7Z0JBQy9CLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLE9BQU87NEJBQ3JELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDckIsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBR0QseUNBQU0sR0FBTixVQUFPLENBQUMsSUFBSSxDQUFDO0lBakNiO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUVBQ1U7SUFMYix3QkFBd0I7UUFENUMsT0FBTztPQUNhLHdCQUF3QixDQXVDNUM7SUFBRCwrQkFBQztDQXZDRCxBQXVDQyxDQXZDcUQsRUFBRSxDQUFDLFNBQVMsR0F1Q2pFO2tCQXZDb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXNnZXIgfSBmcm9tIFwiLi9Nc2dlclwiO1xyXG5pbXBvcnQgRGVsYXlEZWxTYyBmcm9tIFwiLi9EZWxheURlbFNjXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpbnRlcmluZ0NvbmN0cm9sbGVyU2MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzcGxpbnRlcmluZzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZVNhdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlU2F2ZSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9TcGxpbnRlcmluZ19kZWwsIHRoaXMub25fU3BsaW50ZXJpbmdfZGVsLCB0aGlzKVxyXG4gICAgICAgIE1zZ2VyLm9uKE1zZ2VyLm9uX2NsZWFuX2JyaWNrLCB0aGlzLm9uX2NsZWFuX2JyaWNrLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uX1NwbGludGVyaW5nX2RlbChlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlU2F2ZS5wdXNoKGUpO1xyXG4gICAgfVxyXG4gICAgb25fY2xlYW5fYnJpY2socDogY2MuTm9kZSwgcG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGU7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZVNhdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5ub2RlU2F2ZS5zaGlmdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNwbGludGVyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoRGVsYXlEZWxTYykuZGVsYXlUaW1lID0gMC40O1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgcC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KS5wbGF5QW5pbWF0aW9uKFwiZmstdHgtZmtcIiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZFByZWZhYlN5bmMoZmlsZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoZmlsZSwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZXJyLCBjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbm9kZVNhdmU6IGNjLk5vZGVbXTtcclxuXHJcbiAgICB1cGRhdGUodCkgeyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/StartSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3bbcIsBr5HdokjPQ+I2p1/', 'StartSc');
// scripts/StartSc.ts

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
var WXManager_1 = require("./WXManager");
var SoundConctrollerSc_1 = require("./SoundConctrollerSc");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartUI = /** @class */ (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankUI = null;
        _this.serviceUI = null;
        _this.soudsFrame = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StartUI.prototype.start = function () {
    };
    // update (dt) {}
    StartUI.prototype.onclick_start = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_changeto_game);
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
    };
    StartUI.prototype.onclick_rank = function () {
        this.node.addChild(cc.instantiate(this.rankUI));
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
    };
    StartUI.prototype.onclick_sound = function (event) {
        Msger_1.Msger.emit(Msger_1.Msger.on_sound_muted);
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        event.target.getComponent(cc.Sprite).spriteFrame = this.soudsFrame[Number(SoundConctrollerSc_1.default.isMuted)];
    };
    StartUI.prototype.onclick_service = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        this.serviceUI.active = true;
    };
    StartUI.prototype.onclick_share = function () {
        WXManager_1.default.Instance.playerShare("share/share1", "来看看谁分数高");
    };
    __decorate([
        property(cc.Prefab)
    ], StartUI.prototype, "rankUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "serviceUI", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], StartUI.prototype, "soudsFrame", void 0);
    StartUI = __decorate([
        ccclass
    ], StartUI);
    return StartUI;
}(cc.Component));
exports.default = StartUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3RhcnRTYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLDJEQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVDQztRQXBDRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFaEIsZ0JBQVUsR0FBcUIsRUFBRSxDQUFDOztJQWdDaEQsQ0FBQztJQTdCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLCtCQUFhLEdBQWI7UUFDSSxhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsOEJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCwrQkFBYSxHQUFiLFVBQWMsS0FBSztRQUNmLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLDRCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUNELGlDQUFlLEdBQWY7UUFDSSxhQUFLLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFDRCwrQkFBYSxHQUFiO1FBQ0ksbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzsrQ0FDaUI7SUFQM0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXVDM0I7SUFBRCxjQUFDO0NBdkNELEFBdUNDLENBdkNvQyxFQUFFLENBQUMsU0FBUyxHQXVDaEQ7a0JBdkNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXNnZXIgfSBmcm9tIFwiLi9Nc2dlclwiO1xyXG5pbXBvcnQgV1hNYW5hZ2VyIGZyb20gXCIuL1dYTWFuYWdlclwiO1xyXG5pbXBvcnQgU291bmRDb25jdHJvbGxlclNjIGZyb20gXCIuL1NvdW5kQ29uY3Ryb2xsZXJTY1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0VUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICByYW5rVUk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNlcnZpY2VVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHByb3RlY3RlZCBzb3Vkc0ZyYW1lOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gICAgb25jbGlja19zdGFydCgpIHtcclxuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX2NoYW5nZXRvX2dhbWUpO1xyXG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgMSk7XHJcbiAgICB9XHJcbiAgICBvbmNsaWNrX3JhbmsoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHRoaXMucmFua1VJKSk7XHJcbiAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCAxKTtcclxuICAgIH1cclxuICAgIG9uY2xpY2tfc291bmQoZXZlbnQpIHtcclxuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3NvdW5kX211dGVkKTtcclxuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc291ZHNGcmFtZVtOdW1iZXIoU291bmRDb25jdHJvbGxlclNjLmlzTXV0ZWQpXTtcclxuICAgIH1cclxuICAgIG9uY2xpY2tfc2VydmljZSgpIHtcclxuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xyXG4gICAgICAgIHRoaXMuc2VydmljZVVJLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBvbmNsaWNrX3NoYXJlKCkge1xyXG4gICAgICAgIFdYTWFuYWdlci5JbnN0YW5jZS5wbGF5ZXJTaGFyZShcInNoYXJlL3NoYXJlMVwiLCBcIuadpeeci+eci+iwgeWIhuaVsOmrmFwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BrickSc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a97eeaXyq5DDqs6Y/F228BM', 'BrickSc');
// scripts/BrickSc.ts

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
var BrickSc = /** @class */ (function (_super) {
    __extends(BrickSc, _super);
    function BrickSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveSpeed = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    BrickSc.prototype.start = function () {
    };
    BrickSc = __decorate([
        ccclass
    ], BrickSc);
    return BrickSc;
}(cc.Component));
exports.default = BrickSc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQnJpY2tTYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQVlDO1FBVkcsZUFBUyxHQUFXLENBQUMsQ0FBQzs7UUFTdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBVGdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FZM0I7SUFBRCxjQUFDO0NBWkQsQUFZQyxDQVpvQyxFQUFFLENBQUMsU0FBUyxHQVloRDtrQkFab0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyaWNrU2MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/load/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d4fYAyCZEeID+WJLUyKeU', 'Loading');
// load/Loading.ts

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
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logoNode = null;
        return _this;
        // update(dt) {
        // }
    }
    Loading.prototype.onLoad = function () {
        this.playLogoAnima();
    };
    Loading.prototype.start = function () {
    };
    Loading.prototype.playLogoAnima = function () {
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
            .call(function () {
            cc.director.loadScene("Main");
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "logoNode", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRCQztRQXpCRyxjQUFRLEdBQVksSUFBSSxDQUFDOztRQXNCekIsZUFBZTtRQUVmLElBQUk7SUFDUixDQUFDO0lBdkJHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRU8sK0JBQWEsR0FBckI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdkIsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFuQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTztJQUhSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E0QjNCO0lBQUQsY0FBQztDQTVCRCxBQTRCQyxDQTVCb0MsRUFBRSxDQUFDLFNBQVMsR0E0QmhEO2tCQTVCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGxheUxvZ29BbmltYSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlMb2dvQW5pbWEoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2dvTm9kZSlcclxuICAgICAgICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5kZWxheSgxKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
