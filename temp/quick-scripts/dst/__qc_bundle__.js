
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
<<<<<<< HEAD
require('./assets/scripts/base/class/ActorClass');
require('./assets/scripts/base/class/DevelopersToolClass');
require('./assets/scripts/base/class/DiologClass');
require('./assets/scripts/base/class/DynaminPanelClass');
require('./assets/scripts/base/class/PawnClass');
=======
require('./assets/scripts/base/class/DevelopersToolClass');
require('./assets/scripts/base/class/DiologClass');
require('./assets/scripts/base/class/DynaminPanelClass');
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
require('./assets/scripts/base/tool/Global');

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
<<<<<<< HEAD
=======
                    var __filename = 'preview-scripts/assets/scripts/base/class/DynaminPanelClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e9343Fhn5JrIr0FJNwrXCX', 'DynaminPanelClass');
// scripts/base/class/DynaminPanelClass.ts

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
// SIGNPOST 动态窗口类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(DevelopersToolClass_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXER5bmFtaW5QYW5lbENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFrQjtBQUNaLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLDZEQUF3RDtBQUV4RDtJQUFzQyw0QkFBbUI7SUFBekQ7O0lBWUEsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVk1QjtJQUFELGVBQUM7Q0FaRCxBQVlDLENBWnFDLDZCQUFtQixHQVl4RDtrQkFab0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOWKqOaAgeeql+WPo+exuyBcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IERldmVsb3BlcnNUb29sQ2xhc3MgZnJvbSAnLi9EZXZlbG9wZXJzVG9vbENsYXNzJztcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBEZXZlbG9wZXJzVG9vbENsYXNzIHtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DiologClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e40dlB3VhHpZtxDnHJiCAW', 'DiologClass');
// scripts/base/class/DiologClass.ts

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
// SIGNPOST 特指对话框类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERpb2xvZ0NsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1CQUFtQjtBQUNiLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOeJueaMh+WvueivneahhuexuyBcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBEZXZlbG9wZXJzVG9vbENsYXNzIGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xDbGFzcyc7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee72aaHLh1Oy6P7kSBGlhwU', 'DevelopersToolClass');
// scripts/base/class/DevelopersToolClass.ts

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
// SIGNPOST 开发工具类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 构造函数
     */
    NewClass.prototype.ctor = function () {
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0JBQWtCO0FBQ1osSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBb0JBLENBQUM7SUFsQkc7O09BRUc7SUFDSCx1QkFBSSxHQUFKO0lBRUEsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFmZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9CNUI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEJxQyxFQUFFLENBQUMsU0FBUyxHQW9CakQ7a0JBcEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU0lHTlBPU1Qg5byA5Y+R5bel5YW357G7IFxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqL1xyXG4gICAgY3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
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
// SIGNPOST 加载页面，但不属于开发类
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
cc['vv'] = cc['vv'] || {};
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logoNode = null;
        _this.progressBar = null;
        // SIGNPOST 进度条部分
        _this.progressUpdateRate = 1;
        _this.progressRandomChangeTime = .2;
        _this.progressWaitForLoad = .85;
        _this.readyToShow = null;
<<<<<<< HEAD
        // SIGNPOST 目标场景部分
        _this.readyToGoSence = null;
        // TAG 自定义数值                                                                                         
        /**
=======
        _this.readyToGoSence = null;
        // TAG 自定义数值                                                                                         
        /**
         * 进度条数值
         * 数值应该在0-100
         */
        _this.ProgressValue = 0;
        /**
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
         * 加载资源目录
         */
        _this.loadResourcescatalog = {
            // "url": { type: res type, url: "save url" },
            //加载音乐音效资源
            "sounds": { type: cc.AudioClip, url: "sounds" },
            //加载预制件资源
            "prefabs": { type: cc.Prefab, url: "prefabs" },
            //加载图集资源
<<<<<<< HEAD
            // "atlas": { type: cc.SpriteAtlas, url: "atlas" },
            //加载单个精灵资源
            "frames": { type: cc.SpriteFrame, url: "frames" },
        };
        /**
         * 进度条数值
         * 数值应该在0-100
         */
        _this.ProgressValue = 0;
        /**
         * 加载进度，以资源载入完成+1
         * 当载入计数等于资源数时，完成加载
         */
        _this.loadProgressCount = 0;
        _this.loadPorgressCountMax = Object.keys(_this.loadResourcescatalog).length;
=======
            "atlas": { type: cc.SpriteAtlas, url: "atlas" },
            //加载单个精灵资源
            "frames": { type: cc.SpriteFrame, url: "frames" },
        };
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        return _this;
    }
    // TAG LIFE-CYCLE callbacks                                                                              
    Loading.prototype.onLoad = function () {
        // 播放动画
        this.playLogoAnimation();
        //检查游戏更新
        this.checkGameNewVersion();
<<<<<<< HEAD
=======
        // 资源加载初始化
        this.ProgressValue = 0;
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
    };
    Loading.prototype.start = function () {
        // 开始加载所有资源
        this.loadAllResources();
    };
    Loading.prototype.update = function (dt) {
<<<<<<< HEAD
        // 如果有定义其他组件（比如按钮）来完成场景载入触发时，等待组件响应
        if (this.readyToShow != null)
            return;
        // 否则加载完成后直接进入场景
        if (this.loadProgressCount >= this.loadPorgressCountMax) {
            this.onLoadScene();
        }
=======
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
    };
    // TAG USER FUNCTION:                                                                                    
    // tag 用户方法 
    /**
     * 播放开始动画
     */
    Loading.prototype.playLogoAnimation = function () {
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
<<<<<<< HEAD
            .call(function () { })
            .start();
    };
    /**
     * 如果此场景内有其他按钮等组件触发时
     * 可以通过这里进行中转
     * 要求格式为 on + todo
     */
    Loading.prototype.onButtonClick = function (event, customDate) {
        if (customDate.indexOf("on") <= 0)
            this[customDate]();
        else
            this.onLoadScene();
    };
    /**
     * 加载场景
     * @param sceneTarget 可选场景目标
     */
    Loading.prototype.onLoadScene = function (sceneTarget) {
        var _this = this;
        cc.director.loadScene((function () {
            return sceneTarget ?
                sceneTarget instanceof String ?
                    sceneTarget :
                    sceneTarget.name :
                _this.readyToGoSence.name;
        })());
    };
=======
            .call(function () {
            cc.director.loadScene("Game");
        })
            .start();
    };
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
    // tag 客户端方法 
    /**
     * 加载全部资源包
     */
    Loading.prototype.loadAllResources = function () {
        var _this = this;
<<<<<<< HEAD
        cc['vv']['warehouse'] = cc['vv']['warehouse'] || {};
        var resKeys = Object.keys(this.loadResourcescatalog);
        resKeys.forEach(function (url) {
            var resLog = _this.loadResourcescatalog[url];
            cc['vv']['warehouse'][resLog.url] = cc['vv']['warehouse'][resLog.url] || {};
            _this.loadResources(url, resLog.type, resLog.url);
=======
        var resKeys = Object.keys(this.loadResourcescatalog);
        resKeys.forEach(function (url) {
            _this.loadResources(url, _this.loadResourcescatalog['type'], _this.loadResourcescatalog['url']);
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        });
    };
    /**
     * 按类加载资源包
     * @param url
     * @param type
     * @param saveUrl
     */
    Loading.prototype.loadResources = function (url, type, saveUrl) {
        var self = this;
        cc.resources.loadDir(url, type, function (completedCount, totalCount, item) {
<<<<<<< HEAD
            // cc.log("正在加载:" + item.url);
            self.ProgressValue = completedCount / totalCount;
            // cc.log(`加载进度: ${self.ProgressValue * 100}%`);
=======
            cc.log("正在加载:" + item.url);
            self.ProgressValue = completedCount / totalCount;
            cc.log("\u52A0\u8F7D\u8FDB\u5EA6: " + self.ProgressValue * 100 + "%");
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        }, function (err, data) {
            if (err) {
                cc.log("\u52A0\u8F7D" + type + "\u65F6\u53D1\u751F\u9519\u8BEF");
            }
            else {
                for (var i in data) {
                    var name = (data[i] instanceof cc.SpriteAtlas) ? data[i].name.slice(0, -6) : data[i].name;
                    if (data[i] instanceof cc.JsonAsset) {
<<<<<<< HEAD
                        cc['vv']['warehouse'][saveUrl][name] = data[i]['json'];
                    }
                    else {
                        cc['vv']['warehouse'][saveUrl][name] = data[i];
                    }
                }
            }
            self.loadProgressCount++;
        });
    };
    // tag 微信平台更新 
=======
                        cc['vv'].warehouse[saveUrl][name] = data[i]['json'];
                    }
                    else {
                        cc['vv'].warehouse[saveUrl][name] = data[i];
                    }
                }
            }
        });
    };
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
    /**
     * 检查游戏新版本
     */
    Loading.prototype.checkGameNewVersion = function () {
        // 仅关注微信平台
        if (!(cc.sys.platform == cc.sys.WECHAT_GAME))
<<<<<<< HEAD
            return false;
=======
            return;
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        // 尝试获取微信更新管理器
        var updateManager;
        try {
            updateManager = wx.getUpdateManager();
            if (!updateManager)
<<<<<<< HEAD
                return false;
        }
        catch (_a) {
            return false;
=======
                return;
        }
        catch (_a) {
            return;
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        }
        // 获取全局唯一的版本更新管理器，用于管理小程序更新
        updateManager.onCheckForUpdate(function (res) {
            // 监听向微信后台请求检查更新结果事件 
            console.log("是否有新版本：" + res.hasUpdate);
            if (res.hasUpdate) {
                //如果有新版本                
                // 小程序有新版本，会主动触发下载操作        
                updateManager.onUpdateReady(function () {
                    //当新版本下载完成，会进行回调          
                    wx.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，单击确定重启小程序',
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启小程序               
                                updateManager.applyUpdate();
                            }
                        }
                    });
                });
                // 小程序有新版本，会主动触发下载操作（无需开发者触发）        
                updateManager.onUpdateFailed(function () {
                    //当新版本下载失败，会进行回调          
                    wx.showModal({
                        title: '提示',
                        content: '检查到有新版本，但下载失败，请稍后尝试',
                        showCancel: false,
                    });
                });
            }
        });
<<<<<<< HEAD
        return true;
=======
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
    };
    //微信分包
    Loading.prototype.wxSubpackage = function () {
        var self = this;
        wx.loadSubpackage({
            name: 'resources',
            success: function (res) {
                // 分包加载成功后通过 success 回调
                self.loadAllResources();
            },
            fail: function (err) {
                // 分包加载失败通过 fail 回调
                console.error("load " + name + " fail", err);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "logoNode", void 0);
    __decorate([
        property({
            type: cc.Node,
<<<<<<< HEAD
            displayName: "进度条目标(可选)",
=======
            displayName: "进度条目标",
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
            tooltip: "进度条目标设定后可以指定动画",
        })
    ], Loading.prototype, "progressBar", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画速率",
<<<<<<< HEAD
            visible: function () { return this.progressBar != null; },
=======
            visible: function () {
                return this.progressBar != null;
            },
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        })
    ], Loading.prototype, "progressUpdateRate", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画随机变化间隔",
            tooltip: "进度条动画随机变化间隔",
<<<<<<< HEAD
            visible: function () { return this.progressBar != null; },
=======
            visible: function () {
                return this.progressBar != null;
            },
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        })
    ], Loading.prototype, "progressRandomChangeTime", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画等待加载完成位置",
            tooltip: "进度条动画等待加载完成位置",
<<<<<<< HEAD
            visible: function () { return this.progressBar != null; },
=======
            visible: function () {
                return this.progressBar != null;
            },
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        })
    ], Loading.prototype, "progressWaitForLoad", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "完成后显示",
            tooltip: "当加载完成时，被启用的节点",
<<<<<<< HEAD
            visible: function () { return this.progressBar != null; },
=======
            visible: function () {
                return this.progressBar != null;
            },
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        })
    ], Loading.prototype, "readyToShow", void 0);
    __decorate([
        property({
            type: cc.SceneAsset,
            displayName: "完成后加载目标",
            tooltip: "当加载完成时，加载的场景，如果有启用节点，则等待节点触发",
<<<<<<< HEAD
=======
            visible: function () {
                return this.progressBar != null;
            },
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
        })
    ], Loading.prototype, "readyToGoSence", void 0);
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFNMUI7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFnUkM7UUE3UUcsY0FBUSxHQUFZLElBQUksQ0FBQztRQU96QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBaUI7UUFRakIsd0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBVXZCLDhCQUF3QixHQUFHLEVBQUUsQ0FBQztRQVU5Qix5QkFBbUIsR0FBRyxHQUFHLENBQUM7UUFRMUIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsa0JBQWtCO1FBTWxCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBeUJ0QixxR0FBcUc7UUFFckc7O1dBRUc7UUFDSCwwQkFBb0IsR0FBRztZQUNuQiw4Q0FBOEM7WUFDOUMsVUFBVTtZQUNWLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUU7WUFDL0MsU0FBUztZQUNULFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFDOUMsUUFBUTtZQUNSLG1EQUFtRDtZQUNuRCxVQUFVO1lBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtTQUNwRCxDQUFBO1FBRUQ7OztXQUdHO1FBQ0gsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUI7OztXQUdHO1FBQ0gsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLDBCQUFvQixHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDOztJQW1LakYsQ0FBQztJQXRORyx5R0FBeUc7SUFFekcsd0JBQU0sR0FBTjtRQUNJLE9BQU87UUFDUCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixRQUFRO1FBQ1IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxXQUFXO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsbUNBQW1DO1FBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUNyQyxnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3JELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFnQ0QseUdBQXlHO0lBRXpHLFlBQVk7SUFFWjs7T0FFRztJQUNLLG1DQUFpQixHQUF6QjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN2QixLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ1IsSUFBSSxDQUFDLGNBQVEsQ0FBQyxDQUFDO2FBQ2YsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwrQkFBYSxHQUFwQixVQUFxQixLQUFLLEVBQUUsVUFBVTtRQUNsQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzs7WUFFbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSyw2QkFBVyxHQUFuQixVQUFvQixXQUFvQztRQUF4RCxpQkFRQztRQVBHLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkIsT0FBTyxXQUFXLENBQUMsQ0FBQztnQkFDaEIsV0FBVyxZQUFZLE1BQU0sQ0FBQyxDQUFDO29CQUMzQixXQUFXLENBQUMsQ0FBQztvQkFDWixXQUE2QixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsYUFBYTtJQUViOztPQUVHO0lBQ0ssa0NBQWdCLEdBQXhCO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwRCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1lBQ2YsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSywrQkFBYSxHQUFyQixVQUFzQixHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBRTFCLFVBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxJQUFJO1lBQzdCLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsR0FBRyxVQUFVLENBQUM7WUFDakQsZ0RBQWdEO1FBQ3BELENBQUMsRUFFRCxVQUFDLEdBQUcsRUFBRSxJQUFJO1lBQ04sSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBSyxJQUFJLG1DQUFPLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDaEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUYsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRTt3QkFDakMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDMUQ7eUJBQU07d0JBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEQ7aUJBQ0o7YUFDSjtZQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELGNBQWM7SUFFZDs7T0FFRztJQUNLLHFDQUFtQixHQUEzQjtRQUNJLFVBQVU7UUFDVixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNELGNBQWM7UUFDZCxJQUFJLGFBQWtCLENBQUM7UUFDdkIsSUFBSTtZQUNBLGFBQWEsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYTtnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUNwQztRQUNELFdBQU07WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBRXZCLDJCQUEyQjtRQUMzQixhQUFhLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHO1lBQ3hDLHFCQUFxQjtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkMsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFO2dCQUNmLHdCQUF3QjtnQkFDeEIsNEJBQTRCO2dCQUM1QixhQUFhLENBQUMsYUFBYSxDQUFDO29CQUN4QiwwQkFBMEI7b0JBQzFCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1QsS0FBSyxFQUFFLE1BQU07d0JBQ2IsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLE9BQU8sRUFBRSxVQUFVLEdBQUc7NEJBQ2xCLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtnQ0FDYixzREFBc0Q7Z0NBQ3RELGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs2QkFDL0I7d0JBQ0wsQ0FBQztxQkFDSixDQUFDLENBQUE7Z0JBQ04sQ0FBQyxDQUFDLENBQUE7Z0JBQ0YscUNBQXFDO2dCQUNyQyxhQUFhLENBQUMsY0FBYyxDQUFDO29CQUN6QiwwQkFBMEI7b0JBQzFCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1QsS0FBSyxFQUFFLElBQUk7d0JBQ1gsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsVUFBVSxFQUFFLEtBQUs7cUJBQ3BCLENBQUMsQ0FBQTtnQkFDTixDQUFDLENBQUMsQ0FBQTthQUNMO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtJQUNFLDhCQUFZLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDZCxJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNsQix1QkFBdUI7Z0JBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzVCLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBVSxHQUFHO2dCQUNmLG1CQUFtQjtnQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFRLElBQUksVUFBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUM7U0FDSixDQUFDLENBQUE7SUFFTixDQUFDO0lBelFEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ087SUFPekI7UUFMQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixXQUFXLEVBQUUsV0FBVztZQUN4QixPQUFPLEVBQUUsZ0JBQWdCO1NBQzVCLENBQUM7Z0RBQzBCO0lBVTVCO1FBUEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsU0FBUztZQUN0QixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pELENBQUM7dURBQ3FCO0lBVXZCO1FBUkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsYUFBYTtZQUMxQixPQUFPLEVBQUUsYUFBYTtZQUN0QixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pELENBQUM7NkRBQzRCO0lBVTlCO1FBUkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsZUFBZTtZQUM1QixPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pELENBQUM7d0RBQ3dCO0lBUTFCO1FBTkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1lBQ2IsV0FBVyxFQUFFLE9BQU87WUFDcEIsT0FBTyxFQUFFLGVBQWU7WUFDeEIsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqRCxDQUFDO2dEQUNpQjtJQVFuQjtRQUxDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVTtZQUNuQixXQUFXLEVBQUUsU0FBUztZQUN0QixPQUFPLEVBQUUsOEJBQThCO1NBQzFDLENBQUM7bURBQ29CO0lBeERMLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FnUjNCO0lBQUQsY0FBQztDQWhSRCxBQWdSQyxDQWhSb0MsRUFBRSxDQUFDLFNBQVMsR0FnUmhEO2tCQWhSb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOWKoOi9vemhtemdou+8jOS9huS4jeWxnuS6juW8gOWPkeexu1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuY2NbJ3Z2J10gPSBjY1sndnYnXSB8fCB7fTtcclxuXHJcbi8vIOiuqee8luivkeWZqOW/veeVpeW5s+WPsEFQSeaKpemUmVxyXG5kZWNsYXJlIHZhciB3eDogYW55O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeebruaghyjlj6/pgIkpXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHnm67moIforr7lrprlkI7lj6/ku6XmjIflrprliqjnlLtcIixcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc0JhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6L+b5bqm5p2h6YOo5YiGXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S76YCf546HXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDsgfSxcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc1VwZGF0ZVJhdGUgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvpmo/mnLrlj5jljJbpl7TpmpRcIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeWKqOeUu+maj+acuuWPmOWMlumXtOmalFwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7IH0sXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NSYW5kb21DaGFuZ2VUaW1lID0gLjI7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+etieW+heWKoOi9veWujOaIkOS9jee9rlwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h5Yqo55S7562J5b6F5Yqg6L295a6M5oiQ5L2N572uXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDsgfSxcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc1dhaXRGb3JMb2FkID0gLjg1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLlrozmiJDlkI7mmL7npLpcIixcclxuICAgICAgICB0b29sdGlwOiBcIuW9k+WKoOi9veWujOaIkOaXtu+8jOiiq+WQr+eUqOeahOiKgueCuVwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7IH0sXHJcbiAgICB9KVxyXG4gICAgcmVhZHlUb1Nob3cgPSBudWxsO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOebruagh+WcuuaZr+mDqOWIhlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5TY2VuZUFzc2V0LFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWujOaIkOWQjuWKoOi9veebruagh1wiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5b2T5Yqg6L295a6M5oiQ5pe277yM5Yqg6L2955qE5Zy65pmv77yM5aaC5p6c5pyJ5ZCv55So6IqC54K577yM5YiZ562J5b6F6IqC54K56Kem5Y+RXCIsXHJcbiAgICB9KVxyXG4gICAgcmVhZHlUb0dvU2VuY2UgPSBudWxsO1xyXG5cclxuICAgIC8vIFRBRyBMSUZFLUNZQ0xFIGNhbGxiYWNrcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDmkq3mlL7liqjnlLtcclxuICAgICAgICB0aGlzLnBsYXlMb2dvQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgLy/mo4Dmn6XmuLjmiI/mm7TmlrBcclxuICAgICAgICB0aGlzLmNoZWNrR2FtZU5ld1ZlcnNpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDlvIDlp4vliqDovb3miYDmnInotYTmupBcclxuICAgICAgICB0aGlzLmxvYWRBbGxSZXNvdXJjZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyDlpoLmnpzmnInlrprkuYnlhbbku5bnu4Tku7bvvIjmr5TlpoLmjInpkq7vvInmnaXlrozmiJDlnLrmma/ovb3lhaXop6blj5Hml7bvvIznrYnlvoXnu4Tku7blk43lupRcclxuICAgICAgICBpZiAodGhpcy5yZWFkeVRvU2hvdyAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgLy8g5ZCm5YiZ5Yqg6L295a6M5oiQ5ZCO55u05o6l6L+b5YWl5Zy65pmvXHJcbiAgICAgICAgaWYgKHRoaXMubG9hZFByb2dyZXNzQ291bnQgPj0gdGhpcy5sb2FkUG9yZ3Jlc3NDb3VudE1heCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZFNjZW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyDoh6rlrprkuYnmlbDlgLwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQ55uu5b2VXHJcbiAgICAgKi9cclxuICAgIGxvYWRSZXNvdXJjZXNjYXRhbG9nID0ge1xyXG4gICAgICAgIC8vIFwidXJsXCI6IHsgdHlwZTogcmVzIHR5cGUsIHVybDogXCJzYXZlIHVybFwiIH0sXHJcbiAgICAgICAgLy/liqDovb3pn7PkuZDpn7PmlYjotYTmupBcclxuICAgICAgICBcInNvdW5kc1wiOiB7IHR5cGU6IGNjLkF1ZGlvQ2xpcCwgdXJsOiBcInNvdW5kc1wiIH0sXHJcbiAgICAgICAgLy/liqDovb3pooTliLbku7botYTmupBcclxuICAgICAgICBcInByZWZhYnNcIjogeyB0eXBlOiBjYy5QcmVmYWIsIHVybDogXCJwcmVmYWJzXCIgfSxcclxuICAgICAgICAvL+WKoOi9veWbvumbhui1hOa6kFxyXG4gICAgICAgIC8vIFwiYXRsYXNcIjogeyB0eXBlOiBjYy5TcHJpdGVBdGxhcywgdXJsOiBcImF0bGFzXCIgfSxcclxuICAgICAgICAvL+WKoOi9veWNleS4queyvueBtei1hOa6kFxyXG4gICAgICAgIFwiZnJhbWVzXCI6IHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHVybDogXCJmcmFtZXNcIiB9LFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+b5bqm5p2h5pWw5YC8XHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBQcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqm77yM5Lul6LWE5rqQ6L295YWl5a6M5oiQKzFcclxuICAgICAqIOW9k+i9veWFpeiuoeaVsOetieS6jui1hOa6kOaVsOaXtu+8jOWujOaIkOWKoOi9vVxyXG4gICAgICovXHJcbiAgICBsb2FkUHJvZ3Jlc3NDb3VudDogbnVtYmVyID0gMDtcclxuICAgIGxvYWRQb3JncmVzc0NvdW50TWF4OiBudW1iZXIgPSBPYmplY3Qua2V5cyh0aGlzLmxvYWRSZXNvdXJjZXNjYXRhbG9nKS5sZW5ndGg7XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+aWueazlSBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuW8gOWni+WKqOeUu1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBsYXlMb2dvQW5pbWF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9nb05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuZGVsYXkoMSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aaC5p6c5q2k5Zy65pmv5YaF5pyJ5YW25LuW5oyJ6ZKu562J57uE5Lu26Kem5Y+R5pe2XHJcbiAgICAgKiDlj6/ku6XpgJrov4fov5nph4zov5vooYzkuK3ovaxcclxuICAgICAqIOimgeaxguagvOW8j+S4uiBvbiArIHRvZG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY3VzdG9tRGF0ZS5pbmRleE9mKFwib25cIikgPD0gMClcclxuICAgICAgICAgICAgdGhpc1tjdXN0b21EYXRlXSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRTY2VuZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lnLrmma9cclxuICAgICAqIEBwYXJhbSBzY2VuZVRhcmdldCDlj6/pgInlnLrmma/nm67moIdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvbkxvYWRTY2VuZShzY2VuZVRhcmdldD86IHN0cmluZyB8IGNjLlNjZW5lQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjZW5lVGFyZ2V0ID9cclxuICAgICAgICAgICAgICAgIHNjZW5lVGFyZ2V0IGluc3RhbmNlb2YgU3RyaW5nID9cclxuICAgICAgICAgICAgICAgICAgICBzY2VuZVRhcmdldCA6XHJcbiAgICAgICAgICAgICAgICAgICAgKHNjZW5lVGFyZ2V0IGFzIGNjLlNjZW5lQXNzZXQpLm5hbWUgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeVRvR29TZW5jZS5uYW1lO1xyXG4gICAgICAgIH0pKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDlrqLmiLfnq6/mlrnms5UgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lhajpg6jotYTmupDljIVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2FkQWxsUmVzb3VyY2VzKCk6IHZvaWQge1xyXG4gICAgICAgIGNjWyd2diddWyd3YXJlaG91c2UnXSA9IGNjWyd2diddWyd3YXJlaG91c2UnXSB8fCB7fTtcclxuXHJcbiAgICAgICAgbGV0IHJlc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLmxvYWRSZXNvdXJjZXNjYXRhbG9nKTtcclxuICAgICAgICByZXNLZXlzLmZvckVhY2godXJsID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc0xvZyA9IHRoaXMubG9hZFJlc291cmNlc2NhdGFsb2dbdXJsXTtcclxuICAgICAgICAgICAgY2NbJ3Z2J11bJ3dhcmVob3VzZSddW3Jlc0xvZy51cmxdID0gY2NbJ3Z2J11bJ3dhcmVob3VzZSddW3Jlc0xvZy51cmxdIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCByZXNMb2cudHlwZSwgcmVzTG9nLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInnsbvliqDovb3otYTmupDljIVcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSBzYXZlVXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRSZXNvdXJjZXModXJsLCB0eXBlLCBzYXZlVXJsKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKHVybCwgdHlwZSxcclxuXHJcbiAgICAgICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5Zyo5Yqg6L29OlwiICsgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc1ZhbHVlID0gY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGDliqDovb3ov5vluqY6ICR7c2VsZi5Qcm9ncmVzc1ZhbHVlICogMTAwfSVgKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vSR7dHlwZX3ml7blj5HnlJ/plJnor69gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gKGRhdGFbaV0gaW5zdGFuY2VvZiBjYy5TcHJpdGVBdGxhcykgPyBkYXRhW2ldLm5hbWUuc2xpY2UoMCwgLTYpIDogZGF0YVtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLkpzb25Bc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2NbJ3Z2J11bJ3dhcmVob3VzZSddW3NhdmVVcmxdW25hbWVdID0gZGF0YVtpXVsnanNvbiddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2NbJ3Z2J11bJ3dhcmVob3VzZSddW3NhdmVVcmxdW25hbWVdID0gZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZFByb2dyZXNzQ291bnQrKztcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5b6u5L+h5bmz5Y+w5pu05pawIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5ri45oiP5paw54mI5pysXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tHYW1lTmV3VmVyc2lvbigpOiBib29sZWFuIHtcclxuICAgICAgICAvLyDku4XlhbPms6jlvq7kv6HlubPlj7BcclxuICAgICAgICBpZiAoIShjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIOWwneivleiOt+WPluW+ruS/oeabtOaWsOeuoeeQhuWZqFxyXG4gICAgICAgIGxldCB1cGRhdGVNYW5hZ2VyOiBhbnk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKTtcclxuICAgICAgICAgICAgaWYgKCF1cGRhdGVNYW5hZ2VyKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluWFqOWxgOWUr+S4gOeahOeJiOacrOabtOaWsOeuoeeQhuWZqO+8jOeUqOS6jueuoeeQhuWwj+eoi+W6j+abtOaWsFxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOebkeWQrOWQkeW+ruS/oeWQjuWPsOivt+axguajgOafpeabtOaWsOe7k+aenOS6i+S7tiBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/lkKbmnInmlrDniYjmnKzvvJpcIiArIHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmhhc1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmnInmlrDniYjmnKwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDlsI/nqIvluo/mnInmlrDniYjmnKzvvIzkvJrkuLvliqjop6blj5HkuIvovb3mk43kvZwgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWujOaIkO+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzljZXlh7vnoa7lrprph43lkK/lsI/nqIvluo8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr+Wwj+eoi+W6jyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2c77yI5peg6ZyA5byA5Y+R6ICF6Kem5Y+R77yJICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5b2T5paw54mI5pys5LiL6L295aSx6LSl77yM5Lya6L+b6KGM5Zue6LCDICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ajgOafpeWIsOacieaWsOeJiOacrO+8jOS9huS4i+i9veWksei0pe+8jOivt+eojeWQjuWwneivlScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lvq7kv6HliIbljIVcclxuICAgIHByaXZhdGUgd3hTdWJwYWNrYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB3eC5sb2FkU3VicGFja2FnZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdyZXNvdXJjZXMnLCAvLyBuYW1lIOWPr+S7peWhqyBuYW1lIOaIluiAhSByb290XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veaIkOWKn+WQjumAmui/hyBzdWNjZXNzIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkQWxsUmVzb3VyY2VzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veWksei0pemAmui/hyBmYWlsIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgbG9hZCAke25hbWV9IGZhaWxgLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFLNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUErT0M7UUE1T0csY0FBUSxHQUFZLElBQUksQ0FBQztRQU96QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBaUI7UUFVakIsd0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBWXZCLDhCQUF3QixHQUFHLEVBQUUsQ0FBQztRQVk5Qix5QkFBbUIsR0FBRyxHQUFHLENBQUM7UUFVMUIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFVbkIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFxQnRCLHFHQUFxRztRQUVyRzs7O1dBR0c7UUFDSCxtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQjs7V0FFRztRQUNILDBCQUFvQixHQUFHO1lBQ25CLDhDQUE4QztZQUM5QyxVQUFVO1lBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtZQUMvQyxTQUFTO1lBQ1QsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUM5QyxRQUFRO1lBQ1IsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUMvQyxVQUFVO1lBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtTQUNwRCxDQUFBOztJQW9JTCxDQUFDO0lBM0tHLHlHQUF5RztJQUV6Ryx3QkFBTSxH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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqDovb3pobXpnaLvvIzkvYbkuI3lsZ7kuo7lvIDlj5HnsbtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8vIOiuqee8luivkeWZqOW/veeVpeW5s+WPsEFQSeaKpemUmVxyXG5kZWNsYXJlIHZhciB3eDogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ29Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h55uu5qCHXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHnm67moIforr7lrprlkI7lj6/ku6XmjIflrprliqjnlLtcIixcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc0JhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6L+b5bqm5p2h6YOo5YiGXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S76YCf546HXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzVXBkYXRlUmF0ZSA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+maj+acuuWPmOWMlumXtOmalFwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h5Yqo55S76ZqP5py65Y+Y5YyW6Ze06ZqUXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzUmFuZG9tQ2hhbmdlVGltZSA9IC4yO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvnrYnlvoXliqDovb3lrozmiJDkvY3nva5cIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeWKqOeUu+etieW+heWKoOi9veWujOaIkOS9jee9rlwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc1dhaXRGb3JMb2FkID0gLjg1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLlrozmiJDlkI7mmL7npLpcIixcclxuICAgICAgICB0b29sdGlwOiBcIuW9k+WKoOi9veWujOaIkOaXtu+8jOiiq+WQr+eUqOeahOiKgueCuVwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZWFkeVRvU2hvdyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5TY2VuZUFzc2V0LFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWujOaIkOWQjuWKoOi9veebruagh1wiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5b2T5Yqg6L295a6M5oiQ5pe277yM5Yqg6L2955qE5Zy65pmv77yM5aaC5p6c5pyJ5ZCv55So6IqC54K577yM5YiZ562J5b6F6IqC54K56Kem5Y+RXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJlYWR5VG9Hb1NlbmNlID0gbnVsbDtcclxuXHJcbiAgICAvLyBUQUcgTElGRS1DWUNMRSBjYWxsYmFja3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgdGhpcy5wbGF5TG9nb0FuaW1hdGlvbigpO1xyXG4gICAgICAgIC8v5qOA5p+l5ri45oiP5pu05pawXHJcbiAgICAgICAgdGhpcy5jaGVja0dhbWVOZXdWZXJzaW9uKCk7XHJcbiAgICAgICAgLy8g6LWE5rqQ5Yqg6L295Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzc1ZhbHVlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyDoh6rlrprkuYnmlbDlgLwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+b5bqm5p2h5pWw5YC8XHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBQcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDnm67lvZVcclxuICAgICAqL1xyXG4gICAgbG9hZFJlc291cmNlc2NhdGFsb2cgPSB7XHJcbiAgICAgICAgLy8gXCJ1cmxcIjogeyB0eXBlOiByZXMgdHlwZSwgdXJsOiBcInNhdmUgdXJsXCIgfSxcclxuICAgICAgICAvL+WKoOi9vemfs+S5kOmfs+aViOi1hOa6kFxyXG4gICAgICAgIFwic291bmRzXCI6IHsgdHlwZTogY2MuQXVkaW9DbGlwLCB1cmw6IFwic291bmRzXCIgfSxcclxuICAgICAgICAvL+WKoOi9vemihOWItuS7tui1hOa6kFxyXG4gICAgICAgIFwicHJlZmFic1wiOiB7IHR5cGU6IGNjLlByZWZhYiwgdXJsOiBcInByZWZhYnNcIiB9LFxyXG4gICAgICAgIC8v5Yqg6L295Zu+6ZuG6LWE5rqQXHJcbiAgICAgICAgXCJhdGxhc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUF0bGFzLCB1cmw6IFwiYXRsYXNcIiB9LFxyXG4gICAgICAgIC8v5Yqg6L295Y2V5Liq57K+54G16LWE5rqQXHJcbiAgICAgICAgXCJmcmFtZXNcIjogeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdXJsOiBcImZyYW1lc1wiIH0sXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+aWueazlSBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuW8gOWni+WKqOeUu1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBsYXlMb2dvQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9nb05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuZGVsYXkoMSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5a6i5oi356uv5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YWo6YOo6LWE5rqQ5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEFsbFJlc291cmNlcygpIHtcclxuICAgICAgICBsZXQgcmVzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubG9hZFJlc291cmNlc2NhdGFsb2cpO1xyXG4gICAgICAgIHJlc0tleXMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCB0aGlzLmxvYWRSZXNvdXJjZXNjYXRhbG9nWyd0eXBlJ10sIHRoaXMubG9hZFJlc291cmNlc2NhdGFsb2dbJ3VybCddKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMieexu+WKoOi9vei1hOa6kOWMhVxyXG4gICAgICogQHBhcmFtIHVybCBcclxuICAgICAqIEBwYXJhbSB0eXBlIFxyXG4gICAgICogQHBhcmFtIHNhdmVVcmwgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZFJlc291cmNlcyh1cmwsIHR5cGUsIHNhdmVVcmwpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIodXJsLCB0eXBlLFxyXG5cclxuICAgICAgICAgICAgKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmraPlnKjliqDovb06XCIgKyBpdGVtLnVybCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlByb2dyZXNzVmFsdWUgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vei/m+W6pjogJHtzZWxmLlByb2dyZXNzVmFsdWUgKiAxMDB9JWApO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhg5Yqg6L29JHt0eXBlfeaXtuWPkeeUn+mUmeivr2ApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLlNwcml0ZUF0bGFzKSA/IGRhdGFbaV0ubmFtZS5zbGljZSgwLCAtNikgOiBkYXRhW2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldIGluc3RhbmNlb2YgY2MuSnNvbkFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY1sndnYnXS53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldWydqc29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY1sndnYnXS53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5ri45oiP5paw54mI5pysXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tHYW1lTmV3VmVyc2lvbigpIHtcclxuICAgICAgICAvLyDku4XlhbPms6jlvq7kv6HlubPlj7BcclxuICAgICAgICBpZiAoIShjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSkgcmV0dXJuO1xyXG4gICAgICAgIC8vIOWwneivleiOt+WPluW+ruS/oeabtOaWsOeuoeeQhuWZqFxyXG4gICAgICAgIGxldCB1cGRhdGVNYW5hZ2VyOiBhbnk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKTtcclxuICAgICAgICAgICAgaWYgKCF1cGRhdGVNYW5hZ2VyKSByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluWFqOWxgOWUr+S4gOeahOeJiOacrOabtOaWsOeuoeeQhuWZqO+8jOeUqOS6jueuoeeQhuWwj+eoi+W6j+abtOaWsFxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOebkeWQrOWQkeW+ruS/oeWQjuWPsOivt+axguajgOafpeabtOaWsOe7k+aenOS6i+S7tiBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/lkKbmnInmlrDniYjmnKzvvJpcIiArIHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmhhc1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmnInmlrDniYjmnKwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDlsI/nqIvluo/mnInmlrDniYjmnKzvvIzkvJrkuLvliqjop6blj5HkuIvovb3mk43kvZwgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWujOaIkO+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzljZXlh7vnoa7lrprph43lkK/lsI/nqIvluo8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr+Wwj+eoi+W6jyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2c77yI5peg6ZyA5byA5Y+R6ICF6Kem5Y+R77yJICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5b2T5paw54mI5pys5LiL6L295aSx6LSl77yM5Lya6L+b6KGM5Zue6LCDICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ajgOafpeWIsOacieaWsOeJiOacrO+8jOS9huS4i+i9veWksei0pe+8jOivt+eojeWQjuWwneivlScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v5b6u5L+h5YiG5YyFXHJcbiAgICB3eFN1YnBhY2thZ2UoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHd4LmxvYWRTdWJwYWNrYWdlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3Jlc291cmNlcycsIC8vIG5hbWUg5Y+v5Lul5aGrIG5hbWUg5oiW6ICFIHJvb3RcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295oiQ5Yqf5ZCO6YCa6L+HIHN1Y2Nlc3Mg5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRBbGxSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295aSx6LSl6YCa6L+HIGZhaWwg5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBsb2FkICR7bmFtZX0gZmFpbGAsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
<<<<<<< HEAD
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolClass.js';
=======
                    var __filename = 'preview-scripts/assets/scripts/base/tool/Global.js';
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
<<<<<<< HEAD
cc._RF.push(module, 'ee72aaHLh1Oy6P7kSBGlhwU', 'DevelopersToolClass');
// scripts/base/class/DevelopersToolClass.ts

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
// SIGNPOST 开发工具类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 构造函数
     */
    NewClass.prototype.ctor = function () {
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0JBQWtCO0FBQ1osSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBb0JBLENBQUM7SUFsQkc7O09BRUc7SUFDSCx1QkFBSSxHQUFKO0lBRUEsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFmZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9CNUI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEJxQyxFQUFFLENBQUMsU0FBUyxHQW9CakQ7a0JBcEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU0lHTlBPU1Qg5byA5Y+R5bel5YW357G7IFxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqL1xyXG4gICAgY3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '647f55OXZhBdLaW7gN3603b', 'Global');
// scripts/base/tool/Global.ts

=======
cc._RF.push(module, '647f55OXZhBdLaW7gN3603b', 'Global');
// scripts/base/tool/Global.ts

>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
// SIGNPOST 全局属性cc.vv 
cc['vv'] = cc['vv'] || {};
// import { } from "./Global";
// declare global {
//     interface cc {
//         vv: any;
//     }
// }

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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQVF0QixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUUxQiw4QkFBOEI7QUFFOUIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDlhajlsYDlsZ7mgKdjYy52diBcclxuXHJcbi8qKlxyXG4gKiDlhajlsYDlsZ7mgKfnsbvlnovmjqXlj6NcclxuICovXHJcbmludGVyZmFjZSBJR2xvYmFsIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5jY1sndnYnXSA9IGNjWyd2diddIHx8IHt9O1xyXG5cclxuLy8gaW1wb3J0IHsgfSBmcm9tIFwiLi9HbG9iYWxcIjtcclxuXHJcbi8vIGRlY2xhcmUgZ2xvYmFsIHtcclxuLy8gICAgIGludGVyZmFjZSBjYyB7XHJcbi8vICAgICAgICAgdnY6IGFueTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DiologClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e40dlB3VhHpZtxDnHJiCAW', 'DiologClass');
// scripts/base/class/DiologClass.ts

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
// SIGNPOST 特指对话框类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERpb2xvZ0NsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1CQUFtQjtBQUNiLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOeJueaMh+WvueivneahhuexuyBcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBEZXZlbG9wZXJzVG9vbENsYXNzIGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xDbGFzcyc7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DynaminPanelClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e9343Fhn5JrIr0FJNwrXCX', 'DynaminPanelClass');
// scripts/base/class/DynaminPanelClass.ts

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
// SIGNPOST 动态窗口类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(DevelopersToolClass_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXER5bmFtaW5QYW5lbENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFrQjtBQUNaLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLDZEQUF3RDtBQUV4RDtJQUFzQyw0QkFBbUI7SUFBekQ7O0lBWUEsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVk1QjtJQUFELGVBQUM7Q0FaRCxBQVlDLENBWnFDLDZCQUFtQixHQVl4RDtrQkFab0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOWKqOaAgeeql+WPo+exuyBcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IERldmVsb3BlcnNUb29sQ2xhc3MgZnJvbSAnLi9EZXZlbG9wZXJzVG9vbENsYXNzJztcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBEZXZlbG9wZXJzVG9vbENsYXNzIHtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/ActorClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46888KZgPNL8aOrt2Q2jTGq', 'ActorClass');
// scripts/base/class/ActorClass.ts

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
// SIGNPOST 自定义对象类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEFjdG9yQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUJBQW1CO0FBQ2IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU0lHTlBPU1Qg6Ieq5a6a5LmJ5a+56LGh57G7IFxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PawnClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc67fSOWKpKmZ+mQ1IaB8ME', 'PawnClass');
// scripts/base/class/PawnClass.ts

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
// SIGNPOST 可控制类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhd25DbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7QUFDWCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDlj6/mjqfliLbnsbsgXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQVF0QixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUcsQ0FBQztBQUUzQiw4QkFBOEI7QUFFOUIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDlhajlsYDlsZ7mgKdjYy52diBcclxuXHJcbi8qKlxyXG4gKiDlhajlsYDlsZ7mgKfnsbvlnovmjqXlj6NcclxuICovXHJcbmludGVyZmFjZSBJR2xvYmFsIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5jY1sndnYnXSA9IGNjWyd2diddIHx8IHsgfTtcclxuXHJcbi8vIGltcG9ydCB7IH0gZnJvbSBcIi4vR2xvYmFsXCI7XHJcblxyXG4vLyBkZWNsYXJlIGdsb2JhbCB7XHJcbi8vICAgICBpbnRlcmZhY2UgY2Mge1xyXG4vLyAgICAgICAgIHZ2OiBhbnk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562
//------QC-SOURCE-SPLIT------
