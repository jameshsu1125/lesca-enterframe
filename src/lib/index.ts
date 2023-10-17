const { requestAnimationFrame } = window;

type Todo = {
  do: Function;
  list: Function[];
};

const getTime = () => new Date().getTime();
const undoMessage = 'There is nothing to undo.';
const now = getTime();

const initializeState = {
  enable: false,
  timestamp: now,
  stopTime: now,
  lastTime: now,
  fps: 0,
};

const state = { ...initializeState };

const todo: Todo = {
  do: () => {},
  list: [],
};

const add = (doSomething: Function) => {
  todo.list.push(todo.do);
  todo.do = (function (_super) {
    return function () {
      doSomething(arguments[0]);
      return _super.apply(this, arguments);
    };
  })(todo.do);
};

const update = () => {
  if (!state.enable) return;

  const now = getTime();
  const fpsTime = state.fps ? 1000 / state.fps : 0;
  const fpsFrame = now - state.lastTime;

  if (fpsFrame < fpsTime) {
    requestAnimationFrame(() => update());
    return;
  }
  state.lastTime = now;

  const delta = now - state.timestamp;
  todo.do({ delta });

  requestAnimationFrame(() => update());
};

const play = () => {
  if (state.enable) return;
  state.enable = true;

  const totalStopTime = getTime() - state.stopTime;
  state.timestamp += totalStopTime;

  update();
};

const stop = () => {
  state.enable = false;
  state.stopTime = getTime();
};

const destroy = () => {
  state.enable = initializeState.enable;
  todo.do = () => {};
  todo.list = [];
};

const undo = () => {
  const { list } = todo;
  if (list.length === 0) {
    console.warn(undoMessage);
    return;
  }
  todo.do = list[list.length - 1];
  list.pop();
};

const setFPS = (value = 30) => {
  state.fps = value;
};

const reset = () => {
  state.timestamp = getTime();
  state.stopTime = getTime();
  state.lastTime = getTime();
};

const EnterFrame = { add, todo, play, stop, destroy, undo, setFPS, reset };

export default EnterFrame;
