
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GameLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRyxzREFBMEM7QUFDMUMsY0FBYztBQUNSLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBMElDO1FBdklHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQXlIYixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFXM0MsQ0FBQztJQWxJRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLDJDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLDhEQUE4RDtJQUNsRSxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQseUdBQXlHO0lBRXpHOztPQUVHO0lBQ08sb0NBQXFCLEdBQS9CO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsMEJBQTBCO1lBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksZ0NBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRXJELEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7YUFDSTtZQUNELHlCQUF5QjtTQUM1QjtRQUNELG1CQUFtQjtJQUN2QixDQUFDO0lBS0Qsc0JBQWMseUJBQU87UUFIckI7O1dBRUc7YUFDSDtZQUNJLElB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LENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxtQkFBbUI7aUJBQzVDLENBQUE7WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBYywrQkFBYTtRQUgzQjs7V0FFRzthQUNILGNBQXdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJbkQsc0JBQWMsK0JBQWE7UUFIM0I7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUF0SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FDSTtJQUd2QjtRQURDLFFBQVE7c0NBQ2M7SUFOTixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMEl4QjtJQUFELFdBQUM7Q0ExSUQsQUEwSUMsQ0ExSWlDLEVBQUUsQ0FBQyxTQUFTLEdBMEk3QztrQkExSW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjtcclxuLy8gKOOAg8K0Lc+J772lKSDor7blmL9+XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjY3Z2LnNjcmlwdCA9IHRoaXM7XHJcbiAgICAgICAgLy8gY2MubG9nKGNjdnYuZnJpc3RTY3JpcHQpXHJcbiAgICAgICAgLy8gY2MubG9nKGNjdnYud2FyZWhvdXNlKTtcclxuICAgICAgICAvLyBjY3Z2LmxheWVyc1swXS5hZGRDaGlsZChuZXcgY2N2di53YXJlaG91c2VbJ2ZyYW1lcyddWydiZyddKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRfbGluZUN1YmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/mtYHnqIst6K+e55Sf5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnYW1lUHJvY2Vzc19TcGF3bkN1YmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyUm9vdCkgey8vICYmIG1tLmlzSW5Cb3gyKGN1YmVQb3MpXHJcbiAgICAgICAgICAgIGxldCBjdWJlUG9zID0gbmV3IG1tKHRoaXMuY3VyUm9vdC5ub2RlLmdldFBvc3Rpb24oKSk7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2coY3ViZVBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5UUi50cmVlLnB1c2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuebruagh+agueiKgueCuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGN1clJvb3QoKSB7XHJcbiAgICAgICAgaWYgKE5UUi50cmVlLnJvb3QpXHJcbiAgICAgICAgICAgIHJldHVybiBOVFIudHJlZS5yb290WzBdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrSXNcclxuXHJcblxyXG5cclxuICAgIC8vIFRBRyBQcmVmYWJyaWNhdGVkIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIGluc3RhbnRpYXRpb24gYW5kIGRlc3RvcnkgQWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA6KGM5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdF9saW5lQ3ViZSgpIHtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXTtcclxuICAgICAgICBsZXQgbG9vcCA9IDU7XHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gdGhpcy5yYW5kb21JbkNvbHVtbjtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhjdXJjb2wpO1xyXG4gICAgICAgICAgICAgICAgcGVyY2gucHVzaChjdXJjb2wpXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5zdDogY2MuTm9kZSA9IHRoaXMuY3JlYXRfT25lQ3ViZTtcclxuICAgICAgICAgICAgICAgIGluc3Quc2V0UG9zaXRpb24odGhpcy5zcGF3bk9yaWdpbi5hZGQoY2MudjIoY3VyY29sICogKHRoaXMuY3ViZVdpZGdldCArIHRoaXMuY3ViZUludGVyYXZhbCkpKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVyY2gubGVuZ3RoID49IDMpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXQgaW5zdGFudGlhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcGFyZW50IOWunuS+i+WMlueahOWvueixoeWwhuimgemZhOWKoOeahOebruagh++8jOWmguaenOeVmeepuuWImeS4uuiHqui6q1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBtYWNybyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a55qE6aKE5Yi25L2T5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgY3ViZSgpOiBjYy5QcmVmYWIgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnYmxvY2snXTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3miYDmnInnmoTliJfmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjb2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YiX5pWw5YaF55qE6ZqP5py65pW05pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgcmFuZG9tSW5Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sdW1uKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDlrr3luqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjdWJlV2lkZ2V0KCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6Ze06ZqUXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgY3ViZUludGVyYXZhbCgpOiBudW1iZXIgeyByZXR1cm4gMzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDpq5jluqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjdWJlSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6K+e55Sf5Y6f54K5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgc3Bhd25PcmlnaW4oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zcGF3bk9yaWdpbilcclxuICAgICAgICAgICAgdGhpcy5fc3Bhd25PcmlnaW4gPSBjYy52MihcclxuICAgICAgICAgICAgICAgIC0odGhpcy5jb2x1bW4gLSAxKSAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpIC8gMixcclxuICAgICAgICAgICAgICAgIGNjLndpblNpemUuaGVpZ2h0IC8gMiAvLysgdGhpcy5jdWJlSGVpZ2h0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3Bhd25PcmlnaW47XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX3NwYXduT3JpZ2luOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5q+P6KGM5pyA5bCP5Y+v6K+e55Sf55qE5pWw6YePXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgc3Bhd25NaW5Db3VudCgpOiBudW1iZXIgeyByZXR1cm4gMjsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDkuKrmlrnlnZflnKjmjIflrprlsYJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjcmVhdF9PbmVDdWJlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0QWN0b3IodGhpcy5jdWJlLCBjY3Z2LmxheWVyc1sxXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==