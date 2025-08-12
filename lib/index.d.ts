type Todo = {
    do: Function;
    list: Function[];
};
declare const EnterFrame: {
    add: (doSomething: (e: {
        delta: number;
    }) => void) => void;
    todo: Todo;
    play: () => void;
    stop: () => void;
    destroy: () => void;
    undo: () => void;
    setFPS: (value?: number) => void;
    reset: () => void;
};
export default EnterFrame;
