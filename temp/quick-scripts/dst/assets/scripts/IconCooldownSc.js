
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSWNvbkNvb2xkb3duU2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0YsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEyQkM7UUF4QkcsWUFBTSxHQUFjLElBQUksQ0FBQztRQVl6QixhQUFPLEdBQUcsRUFBRSxDQUFDOztJQVlqQixDQUFDO0lBckJHLHdCQUF3QjtJQUV4QiwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFBTTtTQUNOO0lBQ0wsQ0FBQztJQUNELGdDQUFPLEdBQVAsVUFBUSxHQUFRO1FBQVIsb0JBQUEsRUFBQSxRQUFRO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDSztJQUhSLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EyQmxDO0lBQUQscUJBQUM7Q0EzQkQsQUEyQkMsQ0EzQjJDLEVBQUUsQ0FBQyxTQUFTLEdBMkJ2RDtrQkEzQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvb2xkb3duU2MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBDRE1hc2s6IGNjLlNwcml0ZSA9IG51bGw7XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLkNETWFzay5maWxsUmFuZ2UgPSAwO1xuICAgIH1cblxuICAgIGlzQ0QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLkNETWFzay5maWxsUmFuZ2UgPiAwO1xuICAgIH1cbiAgICBsZW5UaW1lID0gMTA7XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuQ0RNYXNrLmZpbGxSYW5nZSAtPSBkdCAqICgxIC8gdGhpcy5sZW5UaW1lKTtcbiAgICAgICAgaWYgKHRoaXMuQ0RNYXNrLmZpbGxSYW5nZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuQ0RNYXNrLmZpbGxSYW5nZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmVnaW5DRChsZW4gPSAxMCkge1xuICAgICAgICB0aGlzLmxlblRpbWUgPSBsZW47XG4gICAgICAgIHRoaXMuQ0RNYXNrLmZpbGxSYW5nZSA9IDE7XG4gICAgfVxufVxuIl19