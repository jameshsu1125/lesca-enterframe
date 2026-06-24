const { requestAnimationFrame } = window;

type FrameEvent = {
  delta: number;
};

type TodoFn = (e: FrameEvent) => void;

type Todo = {
  do: TodoFn;
  list: TodoFn[];
};

const getTime = () => new Date().getTime();
const undoMessage = "There is nothing to undo.";
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

const staticTodo: Todo = {
  do: () => {},
  list: [],
};

const add = (doSomething: TodoFn) => {
  todo.list.push(todo.do);
  const previous = todo.do;
  todo.do = (e) => {
    doSomething(e);
    previous(e);
  };
};

const addStatic = (doSomething: TodoFn) => {
  staticTodo.list.push(staticTodo.do);
  const previous = staticTodo.do;
  staticTodo.do = (e) => {
    doSomething(e);
    previous(e);
  };
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
  staticTodo.do({ delta });

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

const getState = () => {
  return state;
};

const EnterFrame = {
  add,
  addStatic,
  todo,
  staticTodo,
  play,
  stop,
  destroy,
  undo,
  setFPS,
  reset,
  getState,
};

export default EnterFrame;
