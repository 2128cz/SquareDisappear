"use strict";
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