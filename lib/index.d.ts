type FrameEvent = {
    delta: number;
};
type TodoFn = (e: FrameEvent) => void;
type Todo = {
    do: TodoFn;
    list: TodoFn[];
};
declare const EnterFrame: {
    add: (doSomething: TodoFn) => void;
    addStatic: (doSomething: TodoFn) => void;
    todo: Todo;
    staticTodo: Todo;
    play: () => void;
    stop: () => void;
    destroy: () => void;
    undo: () => void;
    setFPS: (value?: number) => void;
    reset: () => void;
    getState: () => {
        enable: boolean;
        timestamp: number;
        stopTime: number;
        lastTime: number;
        fps: number;
    };
};
export default EnterFrame;
