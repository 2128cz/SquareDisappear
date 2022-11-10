"use strict";
cc._RF.push(module, '219931QpohMXa9AERY/82Av', 'GameLevel');
// scripts/game/GameLevel.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var NoRootTree_1 = require("../base/tool/NoRootTree");
// (〃´-ω･) 诶嘿~
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this._spawnOrigin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    };
    Game.prototype.start = function () {
        this.creat_lineCube();
    };
    Game.prototype.update = function (dt) {
        this.gameProcess_SpawnCube();
    };
    // TAG USER FUNCTION:                                                                                    
    /**
     * 游戏流程-诞生方块
     */
    Game.prototype.gameProcess_SpawnCube = function () {
        if (this.curRoot) { // && mm.isInBox2(cubePos)
            var cubePos = new DevelopersToolGlobal_1.mathMacro(this.curRoot.node.getPostion());
            cc.log(cubePos);
        }
        else {
            // this.creat_lineCube();
        }
        // NTR.tree.push();
    };
    Object.defineProperty(Game.prototype, "curRoot", {
        /**
         * 返回目标根节点
         */
        get: function () {
            if (NoRootTree_1.default.tree.root)
                return NoRootTree_1.default.tree.root[0];
            else
                return undefined;
        },
        enumerable: false,
        configurable: true
    });
    // TAG Prefabricated function                                                                            
    // SIGNPOST instantiation and destory Actor                                                              
    /**
     * 创建一行方块
     */
    Game.prototype.creat_lineCube = function () {
        var perch = [];
        var loop = 5;
        while (loop--) {
            var curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                cc.log(curcol);
                perch.push(curcol);
                var inst = this.creat_OneCube;
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval))));
            }
            if (perch.length >= 3)
                break;
        }
    };
    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns
     */
    Game.prototype.creatActor = function (actor, parent) {
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
    Object.defineProperty(Game.prototype, "cube", {
        // TAG macro                                                                                             
        /**
         * 获取指定的预制体方块
         */
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['block']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "column", {
        /**
         * 获取当前所有的列数
         */
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "randomInColumn", {
        /**
         * 获取列数内的随机整数
         */
        get: function () { return Math.floor(Math.random() * this.column); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeWidget", {
        /**
         * 获取方块所占宽度
         */
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeInteraval", {
        /**
         * 获取方块间隔
         */
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeHeight", {
        /**
         * 获取方块所占高度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnOrigin", {
        /**
         * 获取方块诞生原点
         */
        get: function () {
            if (!this._spawnOrigin)
                this._spawnOrigin = cc.v2(-(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2, cc.winSize.height / 2 //+ this.cubeHeight
                );
            return this._spawnOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnMinCount", {
        /**
         * 获取每行最小可诞生的数量
         */
        get: function () { return 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "creat_OneCube", {
        /**
         * 创建一个方块在指定层
         */
        get: function () {
            return this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], Game.prototype, "label", void 0);
    __decorate([
        property
    ], Game.prototype, "text", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();