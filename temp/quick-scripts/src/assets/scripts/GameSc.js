"use strict";
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