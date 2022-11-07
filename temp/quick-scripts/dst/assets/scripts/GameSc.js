
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUNoQyxxQ0FBZ0M7QUFDaEMsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBdU1DO1FBcE1HLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWdDLElBQUksQ0FBQztRQUVsRCxrQkFBWSxHQUFnQyxJQUFJLENBQUM7UUFHakQsd0JBQXdCO1FBQ2hCLFlBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQXFCOUIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQVViLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDUixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDOztJQW9KdkIsQ0FBQztJQW5MRyx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QyxhQUFLLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxhQUFLLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxLQUF1QixVQUF5QixFQUF6QixLQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUF6QixjQUF5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QUM1QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQW5NRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7aURBQ1k7SUFFbEQ7UUFEQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztnREFDVztJQWJoQyxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBdU0xQjtJQUFELGFBQUM7Q0F2TUQsQUF1TUMsQ0F2TW1DLEVBQUUsQ0FBQyxTQUFTLEdBdU0vQztrQkF2TW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dlciB9IGZyb20gXCIuL01zZ2VyXCI7XG5pbXBvcnQgQnJpY2tTYyBmcm9tIFwiLi9Ccmlja1NjXCI7XG5pbXBvcnQgRGVsYXlEZWxTYyBmcm9tIFwiLi9EZWxheURlbFNjXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJyaWNrc0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjbG9zZUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpXG4gICAgeGlhb2NodUVmZmVjdDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KVxuICAgIHF1YW5qaUVmZmVjdDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSBwb2ludHM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBiZWdpbl95OiBudW1iZXIgPSA2OTQ7XG4gICAgXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnF1YW5qaUVmZmVjdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9nYW1lX2JlZ2luLCB0aGlzLm9uX2dhbWVfYmVnaW4sIHRoaXMpO1xuICAgICAgICBNc2dlci5vbihNc2dlci5vbl9nYW1lX3JldmllLCB0aGlzLm9uX2dhbWVfcmV2aWUsIHRoaXMpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2goaXRlcmF0b3IueCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5icmlja3NMYXllci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uX2dhbWVfcmV2aWUoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1ldGltZSAqPSAwLjI1O1xuICAgIH1cbiAgICBwcml2YXRlIG9uX2dhbWVfYmVnaW4oKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmdhbWV0aW1lID0gMDtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJyaWNrc0xheWVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfVxuICAgIGdhbWV0aW1lID0gMDtcblxuICAgIHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XG4gICAgcHVibGljIGdldCBzY29yZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2NvcmUodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3Njb3JlID0gdjtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHYudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaXNQYXVzZWQgPSB0cnVlO1xuICAgIHByaXZhdGUgbW92ZXNwZWVkID0gMTUwO1xuICAgIGdfbW92ZXNwZWVkX3NjID0gMTtcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5pc1BhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZXRpbWUgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLmdhbWV0aW1lID4gNjApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZXRpbWUgPSA2MDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuY2xvc2VMYXllci5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0Q29tcG9uZW50KERlbGF5RGVsU2MpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IHRoaXMuY2xvc2VPbmUoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcEJyaWNrID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJyaWNrc0xheWVyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBsZXQgc2MgPSBpdGVtLmdldENvbXBvbmVudChCcmlja1NjKTtcbiAgICAgICAgICAgIGxldCBtb3Zlc3Bkc2MgPSB0aGlzLmdfbW92ZXNwZWVkX3NjO1xuICAgICAgICAgICAgLy8v5a+55LqO5LiN5piv5omT5LiK5Y6755qE56CW5Z2X5YiZ54m55q6K5aSE55CG5LiA5LiLXG4gICAgICAgICAgICBpZiAoc2MubW92ZVNwZWVkICE9IDApIHtcbiAgICAgICAgICAgICAgICBtb3Zlc3Bkc2MgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS55IC09IGR0ICogKHRoaXMubW92ZXNwZWVkICsgc2MubW92ZVNwZWVkKSAqIG1vdmVzcGRzYyAqICh0aGlzLmdhbWV0aW1lIC8gNjAgKyAxKTtcbiAgICAgICAgICAgIGlmIChzYy5tb3ZlU3BlZWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfY29sbGlzaW9uKGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBcbiAgICAgICAgICAgICAgICBpZiAodG9wQnJpY2sgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0b3BCcmljayA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnkgPiB0b3BCcmljay55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcEJyaWNrID0gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW5Db3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkZF9saW5lX2JyaWNrcygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRvcEJyaWNrKSB7XG4gICAgICAgICAgICBpZiAodG9wQnJpY2sueSA8IHRoaXMuYmVnaW5feSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkX2xpbmVfYnJpY2tzKHRvcEJyaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrX2xpbmVfY2xvc2UoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGVja19saW5lX2Nsb3NlKCkge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJyaWNrc0xheWVyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gTWF0aC5mbG9vcihpdGVtLnkgLyBpdGVtLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAoYXJyYXlba2V5XSkge1xuICAgICAgICAgICAgICAgIGFycmF5W2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyYXlba2V5XSA9IFtpdGVtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXJyYXkpIHtcbiAgICAgICAgICAgIGlmIChhcnJheVtrZXldLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGxldCB5ID0gYXJyYXlba2V5XVsyXS55O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgYXJyYXlba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAoaXRlbSBhcyBjYy5Ob2RlKS5wYXJlbnQgPSB0aGlzLmNsb3NlTGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgIChpdGVtIGFzIGNjLk5vZGUpLnkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+aYvuekuueJueaViFxuICAgICAgICAgICAgICAgIHRoaXMueGlhb2NodUVmZmVjdC5wbGF5QW5pbWF0aW9uKFwibmV3QW5pbWF0aW9uXCIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMueGlhb2NodUVmZmVjdC5ub2RlLnkgPSBhcnJheVtrZXldWzBdLnkgKyBhcnJheVtrZXldWzBdLmhlaWdodDtcbiAgICAgICAgICAgICAgICBNc2dlci5lbWl0KE1zZ2VyLm9uX3BsYXlfc291bmQsIDgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY2hlY2tfY29sbGlzaW9uKGJyaWNrOiBjYy5Ob2RlKSB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5icmlja3NMYXllci5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGJyaWNrID09IGl0ZW0gfHwgaXRlbS5nZXRDb21wb25lbnQoQnJpY2tTYykubW92ZVNwZWVkICE9IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChicmljay54ID09IGl0ZW0ueCkge1xuICAgICAgICAgICAgICAgIGlmIChicmljay55ID49IGl0ZW0ueSAtIGl0ZW0uaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaGVpZ2h0LGl0ZW0ueSk7XG4gICAgICAgICAgICAgICAgICAgIGJyaWNrLnkgPSBpdGVtLnkgLSBpdGVtLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgYnJpY2suZ2V0Q29tcG9uZW50KEJyaWNrU2MpLm1vdmVTcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNsb3NlT25lKGJyaWNrOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBzY29yZSA9IDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ2V0QnJpY2sgPSB0aGlzLmdldE9uZUJyaWNrRnJvbVhZKGJyaWNrLngsIGJyaWNrLnkgLSBicmljay5oZWlnaHQgKiBpKTtcbiAgICAgICAgICAgIGlmKGdldEJyaWNrPy5nZXRDb21wb25lbnQoQnJpY2tTYyk/Lm1vdmVTcGVlZCAhPSAwKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRCcmljaykge1xuICAgICAgICAgICAgICAgIHNjb3JlICs9IHRoaXMuY2xvc2VPbmUoZ2V0QnJpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyaWNrLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fY2xlYW5fYnJpY2ssIHRoaXMuY2xvc2VMYXllciwgYnJpY2sucG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0T25lQnJpY2tGcm9tWFkoeCwgeSkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYnJpY2tzTGF5ZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGxldCBpbmRleFggPSBNYXRoLmZsb29yKGl0ZW0ueCAvIGl0ZW0ud2lkdGgpO1xuICAgICAgICAgICAgbGV0IGluZGV4WSA9IE1hdGguZmxvb3IoaXRlbS55IC8gaXRlbS5oZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGluZGV4WSA9PSBNYXRoLmZsb29yKHkgLyBpdGVtLmhlaWdodCkgJiYgaW5kZXhYID09IE1hdGguZmxvb3IoeCAvIGl0ZW0ud2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFkZF9saW5lX2JyaWNrcyh0b3BCcmljazogY2MuTm9kZSA9IG51bGwpIHtcbiAgICAgICAgbGV0IHN1bSA9IE1hdGgucmFuZG9tKCkgKiAzO1xuICAgICAgICBzdW0gPSBNYXRoLmZsb29yKHN1bSkgKyAyO1xuICAgICAgICBpZiAoc3VtID09IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXAgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdW07IGkrKykge1xuICAgICAgICAgICAgbGV0IGJyaWNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9ja1ByZWZhYik7XG4gICAgICAgICAgICBicmljay55ID0gdG9wQnJpY2sgPT0gbnVsbCA/IHRoaXMuYmVnaW5feSA6IHRvcEJyaWNrLnkgKyB0b3BCcmljay5oZWlnaHQ7XG4gICAgICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9pbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICB9IHdoaWxlICh0ZW1wLmluZGV4T2YoaikgPj0gMCk7XG4gICAgICAgICAgICB0ZW1wLnB1c2goaik7XG4gICAgICAgICAgICBicmljay54ID0gdGhpcy5wb2ludHNbal07XG4gICAgICAgICAgICB0aGlzLmJyaWNrc0xheWVyLmFkZENoaWxkKGJyaWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbmNsaWNrX2JhY2soKSB7XG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fcGxheV9zb3VuZCwgMSk7XG4gICAgICAgIE1zZ2VyLmVtaXQoTXNnZXIub25fY2hhbmdldG9fc3RhcnQpO1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgYWRkX21vdmVfYnJpY2soaW5kZXgpIHtcbiAgICAgICAgbGV0IGJyaWNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9ja1ByZWZhYik7XG4gICAgICAgIGJyaWNrLnkgPSAtdGhpcy5iZWdpbl95ICsgMjAwO1xuICAgICAgICBicmljay54ID0gdGhpcy5wb2ludHNbaW5kZXhdO1xuICAgICAgICBicmljay5nZXRDb21wb25lbnQoQnJpY2tTYykubW92ZVNwZWVkID0gLTIwMDA7XG4gICAgICAgIHRoaXMuYnJpY2tzTGF5ZXIuYWRkQ2hpbGQoYnJpY2spO1xuICAgIH1cbiAgICBwbGF5X2hpdF9lZmZlY3QoKSB7XG4gICAgICAgIHRoaXMucXVhbmppRWZmZWN0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5icmlja3NMYXllci5jaGlsZHJlbi5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS55IC0gYi55O1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnF1YW5qaUVmZmVjdC5ub2RlLnkgPSBhcnJheVswXS55ICsgMzAwO1xuICAgICAgICB0aGlzLnF1YW5qaUVmZmVjdC5wbGF5QW5pbWF0aW9uKFwibmV3QW5pbWF0aW9uXCIsIDEpO1xuICAgIH1cbn1cbiJdfQ==