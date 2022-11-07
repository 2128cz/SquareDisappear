
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