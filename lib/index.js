var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var requestAnimationFrame = window.requestAnimationFrame;
    var undoMessage = 'There is no funnction to undo.';
    var getTime = function () { return new Date().getTime(); };
    var now = getTime();
    var initializeState = {
        enable: false,
        timestamp: now,
        stopTime: now,
        lastTime: now,
        fps: 0,
    };
    var state = __assign({}, initializeState);
    var todo = {
        do: function () { },
        list: [],
    };
    var add = function (doSomething) {
        todo.list.push(todo.do);
        todo.do = (function (_super) {
            return function () {
                doSomething(arguments[0]);
                return _super.apply(this, arguments);
            };
        })(todo.do);
    };
    var update = function () {
        if (!state.enable)
            return;
        var now = getTime();
        var fpsTime = state.fps ? 1000 / state.fps : 0;
        var fpsFrame = now - state.lastTime;
        if (fpsFrame < fpsTime) {
            requestAnimationFrame(function () { return update(); });
            return;
        }
        state.lastTime = now;
        var delta = now - state.timestamp;
        todo.do({ delta: delta });
        requestAnimationFrame(function () { return update(); });
    };
    var play = function () {
        if (state.enable)
            return;
        state.enable = true;
        var totalStopTime = getTime() - state.stopTime;
        state.timestamp += totalStopTime;
        update();
    };
    var stop = function () {
        state.enable = false;
        state.stopTime = getTime();
    };
    var destory = function () {
        state.enable = initializeState.state;
        todo.do = function () { };
        todo.list = [];
    };
    var undo = function () {
        var list = todo.list;
        if (list.length === 0) {
            console.log(undoMessage);
            return;
        }
        todo.do = list[list.length - 1];
        list.pop();
    };
    var setFPS = function (value) {
        if (value === void 0) { value = 30; }
        state.fps = value;
    };
    var EnterFrame = { add: add, todo: todo, play: play, stop: stop, destory: destory, undo: undo, setFPS: setFPS };
    exports.default = EnterFrame;
});
