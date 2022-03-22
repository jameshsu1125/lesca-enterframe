"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _window = window,
    requestAnimationFrame = _window.requestAnimationFrame;
var undoMessage = 'There is no funnction to undo.';

var getTime = function getTime() {
  return new Date().getTime();
};

var now = getTime();
var initializeState = {
  enable: false,
  timestamp: now,
  stopTime: now
};

var state = _objectSpread({}, initializeState);

var todo = {
  "do": function _do() {},
  list: []
};

var add = function add(doSomething) {
  todo.list.push(todo["do"]);

  todo["do"] = function (_super) {
    return function () {
      doSomething(arguments[0]);
      return _super.apply(this, arguments);
    };
  }(todo["do"]);
};

var update = function update() {
  if (!state.enable) return;
  var delta = getTime() - state.timestamp;
  todo["do"]({
    delta: delta
  });
  requestAnimationFrame(function () {
    return update();
  });
};

var play = function play() {
  if (state.enable) return;
  state.enable = true;
  var totalStopTime = getTime() - state.stopTime;
  state.timestamp += totalStopTime;
  update();
};

var stop = function stop() {
  state.enable = false;
  state.stopTime = getTime();
};

var destory = function destory() {
  state.enable = initializeState.state;

  todo["do"] = function () {};

  todo.list = [];
};

var undo = function undo() {
  var list = todo.list;

  if (list.length === 0) {
    console.log(undoMessage);
    return;
  }

  todo["do"] = list[list.length - 1];
  list.pop();
};

var EnterFrame = {
  add: add,
  todo: todo,
  play: play,
  stop: stop,
  destory: destory,
  undo: undo
};
var _default = EnterFrame;
exports["default"] = _default;