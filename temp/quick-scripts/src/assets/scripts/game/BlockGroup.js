"use strict";
cc._RF.push(module, '7e2194MCANHsq+QyrRQ9KnJ', 'BlockGroup');
// scripts/game/BlockGroup.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockGroup = /** @class */ (function (_super) {
    __extends(BlockGroup, _super);
    function BlockGroup() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tag 用户参数，宏
        /**
         * 此组代表的索引
         */
        _this._GridIndex = null;
        /**
         * 处于此组下方的组
         */
        _this._LastGroup = null;
        /**
         * 处于此组上方的组
         */
        _this._NextGroup = null;
        /**
         * 需要自动初始化
         */
        _this._NeedStart = true;
        /**
         * 需要检查成员标记
         */
        _this._NeedCheckMem = false;
        return _this;
    }
    // onLoad () {}
    BlockGroup.prototype.start = function () {
        // 随机地图
        if (this._NeedStart) {
            this.randomizeCubeLine();
        }
    };
    BlockGroup.prototype.update = function (dt) {
        // 检查成员是否满了？
        if (this.needCheckMem) {
            var children = this.node.children.filter(function (value) { return value.isValid; });
            // 满了就销毁
            if (children.length >= Setting_1.default.Game_Column) {
                this.destroyMembers();
            }
        }
        // 更新自己的坐标
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec3(0, this._GridIndex, 0));
        this.node.setPosition(0, pos.y, 0);
    };
    // tag 用户函数
    BlockGroup.prototype.init = function (index, lastGroup, nextGroup) {
        this._GridIndex = index;
        if (lastGroup) {
            lastGroup._NextGroup = this;
            this._LastGroup = lastGroup;
        }
        if (nextGroup) {
            nextGroup._LastGroup = this;
            this._NextGroup = nextGroup;
        }
    };
    /**
     * 随机化剩余方块
     */
    BlockGroup.prototype.randomizeCubeLine = function () {
        var child = this.node.children;
        var perch = [];
        var loop = 7; // 机会
        while (loop--) {
            var curcol = Math.floor(Math.random() * child.length);
            if (perch.indexOf(curcol) < 0)
                perch.push(curcol);
            if (perch.length >= (child.length - 1))
                break;
        }
        this.node.children.forEach(function (element, index) {
            if (perch.indexOf(index) <= 0)
                element.destroy();
        });
    };
    /**
     * 移除成员
     */
    BlockGroup.prototype.destroyMembers = function () {
        function findAllChildren(group) {
            var groupChildren = group.node.children;
            if (group._LastGroup)
                groupChildren = __spreadArrays(groupChildren, findAllChildren(group._LastGroup));
            return groupChildren;
        }
        findAllChildren(this).forEach(function (element) {
            // 将每个成员都替换为销毁效果节点
            var component = element.getComponent(Setting_1.default.blockName);
            if (component)
                component.destroyWithAnimation();
        });
        // 这行消除效果
        var inst = cc.instantiate(Setting_1.default.Effect_Destory);
        this.node.addChild(inst);
    };
    Object.defineProperty(BlockGroup.prototype, "gridIndex", {
        get: function () { return this._GridIndex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "lastGroup", {
        get: function () { return this._LastGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "nextGroup", {
        get: function () { return this._NextGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "needStart", {
        set: function (value) { this._NeedStart = value; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BlockGroup.prototype, "needCheckMem", {
        get: function () {
            if (this._NeedCheckMem) {
                this._NeedCheckMem = false;
                return true;
            }
            else
                return false;
        },
        set: function (value) { this._NeedCheckMem = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    BlockGroup = __decorate([
        ccclass
    ], BlockGroup);
    return BlockGroup;
}(cc.Component));
exports.default = BlockGroup;

cc._RF.pop();