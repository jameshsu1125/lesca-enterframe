const { requestAnimationFrame } = window;

const undoMessage = 'There is no funnction to undo.';

const getTime = () => new Date().getTime();

const now = getTime();

const initializeState = {
  enable: false,
  timestamp: now,
  stopTime: now,
  lastTime: now,
  fps: 0,
};

const state = { ...initializeState };

const todo = {
  do: () => {},
  list: [],
};

const add = (doSomething) => {
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

const destory = () => {
  state.enable = initializeState.state;
  todo.do = () => {};
  todo.list = [];
};

const undo = () => {
  const { list } = todo;
  if (list.length === 0) {
    console.log(undoMessage);
    return;
  }
  todo.do = list[list.length - 1];
  list.pop();
};

const setFPS = (value = 30) => {
  state.fps = value;
};

const EnterFrame = { add, todo, play, stop, destory, undo, setFPS };

export default EnterFrame;
