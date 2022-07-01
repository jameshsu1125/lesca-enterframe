declare type Todo = {
    do: Function;
    list: Function[];
};
declare const EnterFrame: {
    add: (doSomething: Function) => void;
    todo: Todo;
    play: () => void;
    stop: () => void;
    destory: () => void;
    undo: () => void;
    setFPS: (value?: number) => void;
};
export default EnterFrame;
