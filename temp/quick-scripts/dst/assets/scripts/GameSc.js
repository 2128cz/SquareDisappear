
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUNoQyxxQ0FBZ0M7QUFDaEMsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBcU1DO1FBbE1HLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWdDLElBQUksQ0FBQztRQUVsRCxrQkFBWSxHQUFnQyxJQUFJLENBQUM7UUFHakQsd0JBQXdCO1FBQ2hCLFlBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQW9COUIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQVViLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDUixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDOztJQW1KdkIsQ0FBQztJQWxMRyx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QyxhQUFLLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxhQUFLLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxLQUF1QixVQUF5QixFQUF6QixLQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUF6QixjQUF5QixFQUF6QixJQUF5QixFQUFFO1lBQTdDLElBQU0sUUFBUSxTQUFBO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFDTyw4QkFBYSxHQUFyQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFDTyw4QkFBYSxHQUFyQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFJRCxzQkFBVyx5QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBaUIsQ0FBUztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsQ0FBQzs7O09BSkE7SUFRRCx1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDdEI7UUFDRCxLQUFpQixVQUF3QixFQUF4QixLQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUF4QixjQUF3QixFQUF4QixJQUF3QixFQUFFO1lBQXRDLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsRUFBRTtnQkFDL0IsU0FBUzthQUNaO1lBQ0QsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEtBQWlCLFVBQXlCLEVBQXpCLEtBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQXpCLGNBQXlCLEVBQXpCLElBQXlCLEVBQUU7WUFBdkMsSUFBSSxJQUFJLFNBQUE7WUFDVCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQztZQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3BDLG9CQUFvQjtZQUNwQixJQUFJLEVBQUUsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO2dCQUNuQixTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RixJQUFJLEVBQUUsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNILEdBQUc7Z0JBQ0gsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO29CQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjtxQkFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtvQkFDNUIsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDSjtTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO2FBQU0sSUFBSSxRQUFRLEVBQUU7WUFDakIsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEM7U0FDSjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDTyxpQ0FBZ0IsR0FBeEI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixLQUFpQixVQUF5QixFQUF6QixLQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUF6QixjQUF5QixFQUF6QixJQUF5QixFQUFFO1lBQXZDLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDWixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0o7UUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtZQUNuQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFpQixVQUFVLEVBQVYsS0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBRTtvQkFBeEIsSUFBSSxJQUFJLFNBQUE7b0JBQ1IsSUFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDMUMsSUFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjtnQkFDRCxNQUFNO2dCQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDbkUsYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0o7SUFDTCxDQUFDO0lBQ08sZ0NBQWUsR0FBdkIsVUFBd0IsS0FBYztRQUNsQyxLQUFpQixVQUF5QixFQUF6QixLQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUF6QixjQUF5QixFQUF6QixJQUF5QixFQUFFO1lBQXZDLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVELFNBQVM7YUFDWjtZQUNELElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNqQyxtQ0FBbUM7b0JBQ25DLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMvQixLQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2lCQUNUO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFDTyx5QkFBUSxHQUFoQixVQUFpQixLQUFjOztRQUMzQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRSxJQUFHLE9BQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFlBQVksQ0FBQyxpQkFBTywyQ0FBRyxTQUFTLEtBQUksQ0FBQyxFQUFDO2dCQUMvQyxTQUFTO2FBQ1o7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDVixLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwQztTQUNKO1FBQ0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ08sa0NBQWlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLEtBQWlCLFVBQXlCLEVBQXpCLEtBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQXpCLGNBQXlCLEVBQXpCLElBQXlCLEVBQUU7WUFBdkMsSUFBSSxJQUFJLFNBQUE7WUFDVCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9FLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxnQ0FBZSxHQUFmLFVBQWdCLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ1YsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUN6RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixHQUFHO2dCQUNDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RELFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDRCw2QkFBWSxHQUFaO1FBQ0ksYUFBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNELCtCQUFjLEdBQWQsVUFBZSxLQUFLO1FBQ2hCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM5QixLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxnQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUM1QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQWpNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7aURBQ1k7SUFFbEQ7UUFEQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztnREFDVztJQWJoQyxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBcU0xQjtJQUFELGFBQUM7Q0FyTUQsQUFxTUMsQ0FyTW1DLEVBQUUsQ0FBQyxTQUFTLEdBcU0vQztrQkFyTW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XG5pbXBvcnQgQnJpY2tTYyBmcm9tIFwiLi9Ccmlja1NjXCI7XG5pbXBvcnQgRGVsYXlEZWxTYyBmcm9tIFwiLi9EZWxheURlbFNjXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJyaWNrc0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjbG9zZUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpXG4gICAgeGlhb2NodUVmZmVjdDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KVxuICAgIHF1YW5qaUVmZmVjdDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSBwb2ludHM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBiZWdpbl95OiBudW1iZXIgPSA2OTQ7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnF1YW5qaUVmZmVjdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9nYW1lX2JlZ2luLCB0aGlzLm9uX2dhbWVfYmVnaW4sIHRoaXMpO1xuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9nYW1lX3JldmllLCB0aGlzLm9uX2dhbWVfcmV2aWUsIHRoaXMpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2goaXRlcmF0b3IueCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5icmlja3NMYXllci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uX2dhbWVfcmV2aWUoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1ldGltZSAqPSAwLjI1O1xuICAgIH1cbiAgICBwcml2YXRlIG9uX2dhbWVfYmVnaW4oKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmdhbWV0aW1lID0gMDtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJyaWNrc0xheWVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfVxuICAgIGdhbWV0aW1lID0gMDtcblxuICAgIHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGdldCBzY29yZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2NvcmUodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3Njb3JlID0gdjtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHYudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaXNQYXVzZWQgPSB0cnVlO1xuICAgIHByaXZhdGUgbW92ZXNwZWVkID0gMTUwO1xuICAgIGdfbW92ZXNwZWVkX3NjID0gMTtcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWV0aW1lICs9IGR0O1xuICAgICAgICBpZiAodGhpcy5nYW1ldGltZSA+IDYwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWV0aW1lID0gNjA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmNsb3NlTGF5ZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmdldENvbXBvbmVudChEZWxheURlbFNjKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29yZSArPSB0aGlzLmNsb3NlT25lKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3BCcmljayA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5icmlja3NMYXllci5jaGlsZHJlbikge1xuICAgICAgICAgICAgbGV0IHNjID0gaXRlbS5nZXRDb21wb25lbnQoQnJpY2tTYyk7XG4gICAgICAgICAgICBsZXQgbW92ZXNwZHNjID0gdGhpcy5nX21vdmVzcGVlZF9zYztcbiAgICAgICAgICAgIC8vL+WvueS6juS4jeaYr+aJk+S4iuWOu+eahOegluWdl+WImeeJueauiuWkhOeQhuS4gOS4i1xuICAgICAgICAgICAgaWYgKHNjLm1vdmVTcGVlZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgbW92ZXNwZHNjID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0ueSAtPSBkdCAqICh0aGlzLm1vdmVzcGVlZCArIHNjLm1vdmVTcGVlZCkgKiBtb3Zlc3Bkc2MgKiAodGhpcy5nYW1ldGltZSAvIDYwICsgMSk7XG4gICAgICAgICAgICBpZiAoc2MubW92ZVNwZWVkICE9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX2NvbGxpc2lvbihpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gXG4gICAgICAgICAgICAgICAgaWYgKHRvcEJyaWNrID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wQnJpY2sgPSBpdGVtO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS55ID4gdG9wQnJpY2sueSkge1xuICAgICAgICAgICAgICAgICAgICB0b3BCcmljayA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJyaWNrc0xheWVyLmNoaWxkcmVuQ291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGRfbGluZV9icmlja3MoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3BCcmljaykge1xuICAgICAgICAgICAgaWYgKHRvcEJyaWNrLnkgPCB0aGlzLmJlZ2luX3kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZF9saW5lX2JyaWNrcyh0b3BCcmljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja19saW5lX2Nsb3NlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgY2hlY2tfbGluZV9jbG9zZSgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5icmlja3NMYXllci5jaGlsZHJlbikge1xuICAgICAgICAgICAgbGV0IGtleSA9IE1hdGguZmxvb3IoaXRlbS55IC8gaXRlbS5oZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGFycmF5W2tleV0pIHtcbiAgICAgICAgICAgICAgICBhcnJheVtrZXldLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFycmF5W2tleV0gPSBbaXRlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFycmF5KSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlba2V5XS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IGFycmF5W2tleV1bMl0ueTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFycmF5W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0gYXMgY2MuTm9kZSkucGFyZW50ID0gdGhpcy5jbG9zZUxheWVyO1xuICAgICAgICAgICAgICAgICAgICAoaXRlbSBhcyBjYy5Ob2RlKS55ID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/mmL7npLrnibnmlYhcbiAgICAgICAgICAgICAgICB0aGlzLnhpYW9jaHVFZmZlY3QucGxheUFuaW1hdGlvbihcIm5ld0FuaW1hdGlvblwiLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnhpYW9jaHVFZmZlY3Qubm9kZS55ID0gYXJyYXlba2V5XVswXS55ICsgYXJyYXlba2V5XVswXS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgTXNnZXIuZW1pdChNc2dlci5vbl9wbGF5X3NvdW5kLCA4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrX2NvbGxpc2lvbihicmljazogY2MuTm9kZSkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChicmljayA9PSBpdGVtIHx8IGl0ZW0uZ2V0Q29tcG9uZW50KEJyaWNrU2MpLm1vdmVTcGVlZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnJpY2sueCA9PSBpdGVtLngpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnJpY2sueSA+PSBpdGVtLnkgLSBpdGVtLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLmhlaWdodCxpdGVtLnkpO1xuICAgICAgICAgICAgICAgICAgICBicmljay55ID0gaXRlbS55IC0gaXRlbS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyaWNrLmdldENvbXBvbmVudChCcmlja1NjKS5tb3ZlU3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjbG9zZU9uZShicmljazogY2MuTm9kZSkge1xuICAgICAgICBsZXQgc2NvcmUgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgbGV0IGdldEJyaWNrID0gdGhpcy5nZXRPbmVCcmlja0Zyb21YWShicmljay54LCBicmljay55IC0gYnJpY2suaGVpZ2h0ICogaSk7XG4gICAgICAgICAgICBpZihnZXRCcmljaz8uZ2V0Q29tcG9uZW50KEJyaWNrU2MpPy5tb3ZlU3BlZWQgIT0gMCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0QnJpY2spIHtcbiAgICAgICAgICAgICAgICBzY29yZSArPSB0aGlzLmNsb3NlT25lKGdldEJyaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmljay5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX2NsZWFuX2JyaWNrLCB0aGlzLmNsb3NlTGF5ZXIsIGJyaWNrLnBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE9uZUJyaWNrRnJvbVhZKHgsIHkpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJyaWNrc0xheWVyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXhYID0gTWF0aC5mbG9vcihpdGVtLnggLyBpdGVtLndpZHRoKTtcbiAgICAgICAgICAgIGxldCBpbmRleFkgPSBNYXRoLmZsb29yKGl0ZW0ueSAvIGl0ZW0uaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChpbmRleFkgPT0gTWF0aC5mbG9vcih5IC8gaXRlbS5oZWlnaHQpICYmIGluZGV4WCA9PSBNYXRoLmZsb29yKHggLyBpdGVtLndpZHRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhZGRfbGluZV9icmlja3ModG9wQnJpY2s6IGNjLk5vZGUgPSBudWxsKSB7XG4gICAgICAgIGxldCBzdW0gPSBNYXRoLnJhbmRvbSgpICogMztcbiAgICAgICAgc3VtID0gTWF0aC5mbG9vcihzdW0pICsgMjtcbiAgICAgICAgaWYgKHN1bSA9PSA0KSB7XG4gICAgICAgICAgICBzdW0gPSAzO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZW1wID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VtOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBicmljayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tQcmVmYWIpO1xuICAgICAgICAgICAgYnJpY2sueSA9IHRvcEJyaWNrID09IG51bGwgPyB0aGlzLmJlZ2luX3kgOiB0b3BCcmljay55ICsgdG9wQnJpY2suaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBvaW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGVtcC5pbmRleE9mKGopID49IDApO1xuICAgICAgICAgICAgdGVtcC5wdXNoKGopO1xuICAgICAgICAgICAgYnJpY2sueCA9IHRoaXMucG9pbnRzW2pdO1xuICAgICAgICAgICAgdGhpcy5icmlja3NMYXllci5hZGRDaGlsZChicmljayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25jbGlja19iYWNrKCkge1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDEpO1xuICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX2NoYW5nZXRvX3N0YXJ0KTtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgfVxuICAgIGFkZF9tb3ZlX2JyaWNrKGluZGV4KSB7XG4gICAgICAgIGxldCBicmljayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tQcmVmYWIpO1xuICAgICAgICBicmljay55ID0gLXRoaXMuYmVnaW5feSArIDIwMDtcbiAgICAgICAgYnJpY2sueCA9IHRoaXMucG9pbnRzW2luZGV4XTtcbiAgICAgICAgYnJpY2suZ2V0Q29tcG9uZW50KEJyaWNrU2MpLm1vdmVTcGVlZCA9IC0yMDAwO1xuICAgICAgICB0aGlzLmJyaWNrc0xheWVyLmFkZENoaWxkKGJyaWNrKTtcbiAgICB9XG4gICAgcGxheV9oaXRfZWZmZWN0KCkge1xuICAgICAgICB0aGlzLnF1YW5qaUVmZmVjdC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBhcnJheSA9IHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW4uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEueSAtIGIueTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5xdWFuamlFZmZlY3Qubm9kZS55ID0gYXJyYXlbMF0ueSArIDMwMDtcbiAgICAgICAgdGhpcy5xdWFuamlFZmZlY3QucGxheUFuaW1hdGlvbihcIm5ld0FuaW1hdGlvblwiLCAxKTtcbiAgICB9XG59XG4iXX0=