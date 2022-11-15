
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/effect/ButtonSkill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc3e7wQdTVPLJmU645dVdkB', 'ButtonSkill');
// scripts/game/effect/ButtonSkill.ts

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
var Setting_1 = require("../Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskList = [];
        _this.iceCD = _this.getCDT(_this.ice);
        _this.hitCD = _this.getCDT(_this.hit);
        _this.boomCD = _this.getCDT(_this.boom);
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onEnable = function () {
        // 默认CD是满的
        this.iceCD = this.getCDT(this.ice);
        this.hitCD = this.getCDT(this.hit);
        this.boomCD = this.getCDT(this.boom);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        this.skillNameList.forEach(function (element) {
            if (_this.getCD(element) > 0) {
                _this.setCD(element, -dt);
            }
        });
    };
    // tag 用户脚本 
    // tag 按钮事件 
    NewClass.prototype.onButtonClick = function (event, cusData) {
        // event.target
        this[cusData]();
    };
    NewClass.prototype.onIce = function () {
        this.BottonEvent(this.ice);
    };
    NewClass.prototype.onHit = function () {
        this.BottonEvent(this.hit);
    };
    NewClass.prototype.onBoom = function () {
        this.BottonEvent(this.boom);
    };
    NewClass.prototype.BottonEvent = function (name) {
        if (this.getCD(this[name]) <= 0) {
            this.setCD(this[name], this.getCDT(this[name]));
            Setting_1.default.SkillEvent = name;
        }
    };
    Object.defineProperty(NewClass.prototype, "iceMask", {
        // tag 宏和参数定义 
        get: function () { return this.maskList[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "hitMask", {
        get: function () { return this.maskList[1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "boomMask", {
        get: function () { return this.maskList[2]; },
        enumerable: false,
        configurable: true
    });
    NewClass.prototype.getCD = function (name) {
        return this[name + 'CD'];
    };
    NewClass.prototype.setCD = function (name, offset) {
        this[name + 'CD'] += offset;
        this[name + 'CD'] = Math.max(Math.min(this[name + 'CD'], this.getCDT(name)), 0);
        this.getMask(name).fillRange = this[name + 'CD'] / this.getCDT(name);
        return this[name + 'CD'];
    };
    NewClass.prototype.getCDT = function (name) {
        return Setting_1.default[name + '_CoolDownTime'];
    };
    NewClass.prototype.getMask = function (name) {
        return this[name + 'Mask'];
    };
    Object.defineProperty(NewClass.prototype, "ice", {
        get: function () { return 'ice'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "hit", {
        get: function () { return 'hit'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "boom", {
        get: function () { return 'boom'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "skillNameList", {
        get: function () { return [this.ice, this.hit, this.boom]; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property({ type: cc.Sprite })
    ], NewClass.prototype, "maskList", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZWZmZWN0XFxCdXR0b25Ta2lsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwRkM7UUF2RkcsY0FBUSxHQUFnQixFQUFFLENBQUM7UUEyRGpCLFdBQUssR0FBVyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxXQUFLLEdBQVcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsWUFBTSxHQUFXLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQTBCdEQsQ0FBQztJQXJGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDJCQUFRLEdBQVI7UUFDSSxVQUFVO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFBVCxpQkFNQztRQUxHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUM5QixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcs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LDBCQUFJO2FBQWxCLGNBQXVCLE9BQU8sTUFBTSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFFdEMsc0JBQWMsbUNBQWE7YUFBM0IsY0FBZ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQXJGeEU7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzhDQUNIO0lBSFYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBGNUI7SUFBRCxlQUFDO0NBMUZELEFBMEZDLENBMUZxQyxFQUFFLENBQUMsU0FBUyxHQTBGakQ7a0JBMUZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gXCIuLi8uLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi4vU2V0dGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGUgfSlcclxuICAgIG1hc2tMaXN0OiBjYy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIC8vIOm7mOiupENE5piv5ruh55qEXHJcbiAgICAgICAgdGhpcy5pY2VDRCA9IHRoaXMuZ2V0Q0RUKHRoaXMuaWNlKTtcclxuICAgICAgICB0aGlzLmhpdENEID0gdGhpcy5nZXRDRFQodGhpcy5oaXQpO1xyXG4gICAgICAgIHRoaXMuYm9vbUNEID0gdGhpcy5nZXRDRFQodGhpcy5ib29tKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5za2lsbE5hbWVMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENEKGVsZW1lbnQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDRChlbGVtZW50LCAtZHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+iEmuacrCBcclxuXHJcblxyXG4gICAgLy8gdGFnIOaMiemSruS6i+S7tiBcclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXNEYXRhKSB7XHJcbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgdGhpc1tjdXNEYXRhXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSWNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQm90dG9uRXZlbnQodGhpcy5pY2UpO1xyXG4gICAgfVxyXG4gICAgb25IaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Cb3R0b25FdmVudCh0aGlzLmhpdCk7XHJcbiAgICB9XHJcbiAgICBvbkJvb20oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Cb3R0b25FdmVudCh0aGlzLmJvb20pXHJcbiAgICB9XHJcblxyXG4gICAgQm90dG9uRXZlbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q0QodGhpc1tuYW1lXSkgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENEKHRoaXNbbmFtZV0sIHRoaXMuZ2V0Q0RUKHRoaXNbbmFtZV0pKTtcclxuICAgICAgICAgICAgc3MuU2tpbGxFdmVudCA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0YWcg5a6P5ZKM5Y+C5pWw5a6a5LmJIFxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgaWNlTWFzaygpIHsgcmV0dXJuIHRoaXMubWFza0xpc3RbMF0gfVxyXG4gICAgcHJvdGVjdGVkIGdldCBoaXRNYXNrKCkgeyByZXR1cm4gdGhpcy5tYXNrTGlzdFsxXSB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGJvb21NYXNrKCkgeyByZXR1cm4gdGhpcy5tYXNrTGlzdFsyXSB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGljZUNEOiBudW1iZXIgPSB0aGlzLmdldENEVCh0aGlzLmljZSk7XHJcbiAgICBwcm90ZWN0ZWQgaGl0Q0Q6IG51bWJlciA9IHRoaXMuZ2V0Q0RUKHRoaXMuaGl0KTtcclxuICAgIHByb3RlY3RlZCBib29tQ0Q6IG51bWJlciA9IHRoaXMuZ2V0Q0RUKHRoaXMuYm9vbSk7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldENEKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzW25hbWUgKyAnQ0QnXVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHNldENEKG5hbWU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzW25hbWUgKyAnQ0QnXSArPSBvZmZzZXQ7XHJcbiAgICAgICAgdGhpc1tuYW1lICsgJ0NEJ10gPSBNYXRoLm1heChNYXRoLm1pbih0aGlzW25hbWUgKyAnQ0QnXSwgdGhpcy5nZXRDRFQobmFtZSkpLCAwKVxyXG4gICAgICAgIHRoaXMuZ2V0TWFzayhuYW1lKS5maWxsUmFuZ2UgPSB0aGlzW25hbWUgKyAnQ0QnXSAvIHRoaXMuZ2V0Q0RUKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzW25hbWUgKyAnQ0QnXVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRDRFQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHNzW25hbWUgKyAnX0Nvb2xEb3duVGltZSddXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE1hc2sobmFtZTogc3RyaW5nKTogY2MuU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tuYW1lICsgJ01hc2snXVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgaWNlKCkgeyByZXR1cm4gJ2ljZScgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBoaXQoKSB7IHJldHVybiAnaGl0JyB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGJvb20oKSB7IHJldHVybiAnYm9vbScgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgc2tpbGxOYW1lTGlzdCgpIHsgcmV0dXJuIFt0aGlzLmljZSwgdGhpcy5oaXQsIHRoaXMuYm9vbV0gfVxyXG5cclxufVxyXG4iXX0=