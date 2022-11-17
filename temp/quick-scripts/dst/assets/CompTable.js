
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CompTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52f3dJ91phJFY2wQEHPFTO0', 'CompTable');
// CompTable.ts

'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.ready = exports.update = exports.template = exports.$ = void 0;
exports.$ = {
    'test': '.test',
};
exports.template = "\n<ui-prop>\n    <ui-label slot=\"label\">Test</ui-label>\n    <ui-checkbox slot=\"content\" class=\"test\"></ui-checkbox>\n</ui-prop>\n";
function update(assetList, metaList) {
    this.assetList = assetList;
    this.metaList = metaList;
    this.$.test.value = metaList[0].userData.test || false;
}
exports.update = update;
;
function ready() {
    var _this = this;
    this.$.test.addEventListener('confirm', function () {
        _this.metaList.forEach(function (meta) {
            // 修改对应的 meta 里的数据
            meta.userData.test = !!_this.$.test.value;
        });
        // 修改后手动发送事件通知，资源面板是修改资源的 meta 文件，不是修改 dump 数据，所以发送的事件和组件属性修改不一样
        _this.dispatch('change');
    });
}
exports.ready = ready;
;
function close(his) {
}
exports.close = close;
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tcFRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVksQ0FBQzs7O0FBcUNBLFFBQUEsQ0FBQyxHQUFHO0lBQ2IsTUFBTSxFQUFFLE9BQU87Q0FDbEIsQ0FBQztBQUVXLFFBQUEsUUFBUSxHQUFHLDBJQUt2QixDQUFDO0FBSUYsU0FBZ0IsTUFBTSxDQUFrQixTQUFrQixFQUFFLFFBQWdCO0lBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7QUFDM0QsQ0FBQztBQUpELHdCQUlDO0FBQUEsQ0FBQztBQUVGLFNBQWdCLEtBQUs7SUFBckIsaUJBU0M7SUFSRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7UUFDcEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFTO1lBQzVCLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsZ0VBQWdFO1FBQ2hFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVEQsc0JBU0M7QUFBQSxDQUFDO0FBRUYsU0FBZ0IsS0FBSyxDQUFDLEdBQWM7QUFFcEMsQ0FBQztBQUZELHNCQUVDO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmludGVyZmFjZSBBc3NldCB7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgZmlsZTogc3RyaW5nO1xyXG4gICAgaW1wb3J0ZWQ6IGJvb2xlYW47XHJcbiAgICBpbXBvcnRlcjogc3RyaW5nO1xyXG4gICAgaW52YWxpZDogYm9vbGVhbjtcclxuICAgIGlzRGlyZWN0b3J5OiBib29sZWFuO1xyXG4gICAgbGlicmFyeToge1xyXG4gICAgICAgIFtleHRuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB1dWlkOiBzdHJpbmc7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuO1xyXG4gICAgc3ViQXNzZXRzOiB7XHJcbiAgICAgICAgW2lkOiBzdHJpbmddOiBBc3NldDtcclxuICAgIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBNZXRhIHtcclxuICAgIGZpbGVzOiBzdHJpbmdbXTtcclxuICAgIGltcG9ydGVkOiBib29sZWFuO1xyXG4gICAgaW1wb3J0ZXI6IHN0cmluZztcclxuICAgIHN1Yk1ldGFzOiB7XHJcbiAgICAgICAgW2lkOiBzdHJpbmddOiBNZXRhO1xyXG4gICAgfTtcclxuICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICAgIHV1aWQ6IHN0cmluZztcclxuICAgIHZlcjogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFNlbGVjdG9yPCQ+ID0geyAkOiBSZWNvcmQ8a2V5b2YgJCwgYW55IHwgbnVsbD4gfSAmIHsgZGlzcGF0Y2goc3RyOiBzdHJpbmcpOiB2b2lkLCBhc3NldExpc3Q6IEFzc2V0W10sIG1ldGFMaXN0OiBNZXRhW10gfTtcclxuXHJcbmV4cG9ydCBjb25zdCAkID0ge1xyXG4gICAgJ3Rlc3QnOiAnLnRlc3QnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gYFxyXG48dWktcHJvcD5cclxuICAgIDx1aS1sYWJlbCBzbG90PVwibGFiZWxcIj5UZXN0PC91aS1sYWJlbD5cclxuICAgIDx1aS1jaGVja2JveCBzbG90PVwiY29udGVudFwiIGNsYXNzPVwidGVzdFwiPjwvdWktY2hlY2tib3g+XHJcbjwvdWktcHJvcD5cclxuYDtcclxuXHJcbnR5cGUgUGFuZWxUaGlzID0gU2VsZWN0b3I8dHlwZW9mICQ+O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSh0aGlzOiBQYW5lbFRoaXMsIGFzc2V0TGlzdDogQXNzZXRbXSwgbWV0YUxpc3Q6IE1ldGFbXSkge1xyXG4gICAgdGhpcy5hc3NldExpc3QgPSBhc3NldExpc3Q7XHJcbiAgICB0aGlzLm1ldGFMaXN0ID0gbWV0YUxpc3Q7XHJcbiAgICB0aGlzLiQudGVzdC52YWx1ZSA9IG1ldGFMaXN0WzBdLnVzZXJEYXRhLnRlc3QgfHwgZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZHkodGhpczogUGFuZWxUaGlzKSB7XHJcbiAgICB0aGlzLiQudGVzdC5hZGRFdmVudExpc3RlbmVyKCdjb25maXJtJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWV0YUxpc3QuZm9yRWFjaCgobWV0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOS/ruaUueWvueW6lOeahCBtZXRhIOmHjOeahOaVsOaNrlxyXG4gICAgICAgICAgICBtZXRhLnVzZXJEYXRhLnRlc3QgPSAhIXRoaXMuJC50ZXN0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOS/ruaUueWQjuaJi+WKqOWPkemAgeS6i+S7tumAmuefpe+8jOi1hOa6kOmdouadv+aYr+S/ruaUuei1hOa6kOeahCBtZXRhIOaWh+S7tu+8jOS4jeaYr+S/ruaUuSBkdW1wIOaVsOaNru+8jOaJgOS7peWPkemAgeeahOS6i+S7tuWSjOe7hOS7tuWxnuaAp+S/ruaUueS4jeS4gOagt1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2goJ2NoYW5nZScpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2UoaGlzOiBQYW5lbFRoaXMsKSB7XHJcblxyXG59OyJdfQ==