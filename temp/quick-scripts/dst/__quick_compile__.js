
(function () {
var scripts = [{"deps":{"./assets/CompTable":1,"./assets/load/Loading":2,"./assets/scripts/game/GameLevel":29,"./assets/scripts/game/MenuLevel":6,"./assets/scripts/game/Setting":30,"./assets/scripts/game/deprecated-Block":32,"./assets/scripts/game/deprecated-GameLevel":3,"./assets/scripts/game/Block":12,"./assets/scripts/game/effect/GetGameScroe":8,"./assets/scripts/game/effect/IceEffectDextory":16,"./assets/scripts/game/effect/PlayDraAniAndDestory":17,"./assets/scripts/game/effect/ButtonSkill":13,"./assets/scripts/base/class/DevelopersToolClass":9,"./assets/scripts/base/class/DevelopersToolGlobal":5,"./assets/scripts/base/class/DiologClass":11,"./assets/scripts/base/class/DynamicPanelClass":15,"./assets/scripts/base/class/PawnClass":14,"./assets/scripts/base/class/SoundPlayerClass":10,"./assets/scripts/base/class/AudioClass":26,"./assets/scripts/base/core/RigorousType":19,"./assets/scripts/base/core/UObject":20,"./assets/scripts/base/core/UObjectBaseUtility":28,"./assets/scripts/base/core/RigorousLibrary":4,"./assets/scripts/base/tool/GridAdsorb":21,"./assets/scripts/base/tool/NoRootTree":22,"./assets/scripts/base/tool/PanelTool":23,"./assets/scripts/base/tool/PawnMovement":7,"./assets/scripts/base/tool/SoundListener":24,"./assets/scripts/base/tool/SoundPlayer":25,"./assets/scripts/base/tool/EventReflect":27,"./assets/scripts/base/class/ActorClass":18,"./assets/scripts/game/BlockGroup":31},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/CompTable.js"},{"deps":{"../scripts/base/class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/load/Loading.js"},{"deps":{"../base/class/DevelopersToolGlobal":5,"../base/tool/PawnMovement":7,"../base/tool/GridAdsorb":21,"../base/tool/NoRootTree":22},"path":"preview-scripts/assets/scripts/game/deprecated-GameLevel.js"},{"deps":{"../class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/scripts/base/core/RigorousLibrary.js"},{"deps":{},"path":"preview-scripts/assets/scripts/base/class/DevelopersToolGlobal.js"},{"deps":{"./Setting":30,"../base/tool/SoundPlayer":25,"../base/class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/scripts/game/MenuLevel.js"},{"deps":{"../class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/scripts/base/tool/PawnMovement.js"},{"deps":{"../Setting":30},"path":"preview-scripts/assets/scripts/game/effect/GetGameScroe.js"},{"deps":{},"path":"preview-scripts/assets/scripts/base/class/DevelopersToolClass.js"},{"deps":{"./AudioClass":26},"path":"preview-scripts/assets/scripts/base/class/SoundPlayerClass.js"},{"deps":{"./DynamicPanelClass":15},"path":"preview-scripts/assets/scripts/base/class/DiologClass.js"},{"deps":{"./Setting":30,"../base/class/DevelopersToolGlobal":5,"../base/tool/PawnMovement":7},"path":"preview-scripts/assets/scripts/game/Block.js"},{"deps":{"../Setting":30},"path":"preview-scripts/assets/scripts/game/effect/ButtonSkill.js"},{"deps":{"./ActorClass":18},"path":"preview-scripts/assets/scripts/base/class/PawnClass.js"},{"deps":{"./DevelopersToolClass":9},"path":"preview-scripts/assets/scripts/base/class/DynamicPanelClass.js"},{"deps":{"../Setting":30},"path":"preview-scripts/assets/scripts/game/effect/IceEffectDextory.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game/effect/PlayDraAniAndDestory.js"},{"deps":{"./DevelopersToolClass":9},"path":"preview-scripts/assets/scripts/base/class/ActorClass.js"},{"deps":{},"path":"preview-scripts/assets/scripts/base/core/RigorousType.js"},{"deps":{"./UObjectBaseUtility":28},"path":"preview-scripts/assets/scripts/base/core/UObject.js"},{"deps":{"../class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/scripts/base/tool/GridAdsorb.js"},{"deps":{"../core/RigorousLibrary":4,"../class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/scripts/base/tool/NoRootTree.js"},{"deps":{"../class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/scripts/base/tool/PanelTool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/base/tool/SoundListener.js"},{"deps":{"../class/AudioClass":26},"path":"preview-scripts/assets/scripts/base/tool/SoundPlayer.js"},{"deps":{"./SoundPlayerClass":10},"path":"preview-scripts/assets/scripts/base/class/AudioClass.js"},{"deps":{"../core/UObject":20},"path":"preview-scripts/assets/scripts/base/tool/EventReflect.js"},{"deps":{},"path":"preview-scripts/assets/scripts/base/core/UObjectBaseUtility.js"},{"deps":{"./Setting":30,"../base/tool/SoundPlayer":25,"../base/tool/PawnMovement":7,"../base/tool/GridAdsorb":21,"../base/class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/scripts/game/GameLevel.js"},{"deps":{"../base/tool/GridAdsorb":21,"../base/class/DevelopersToolGlobal":5},"path":"preview-scripts/assets/scripts/game/Setting.js"},{"deps":{"../base/tool/GridAdsorb":21,"../base/tool/SoundPlayer":25,"./Setting":30},"path":"preview-scripts/assets/scripts/game/BlockGroup.js"},{"deps":{"../base/class/DevelopersToolGlobal":5,"../base/class/PawnClass":14,"../base/tool/GridAdsorb":21,"../base/tool/NoRootTree":22},"path":"preview-scripts/assets/scripts/game/deprecated-Block.js"},{"deps":{},"path":"preview-scripts/assets/scripts/base/ config/wxconfig.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    