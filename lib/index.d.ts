export default EnterFrame;
declare namespace EnterFrame {
    export { add };
    export { todo };
    export { play };
    export { stop };
    export { destory };
    export { undo };
    export { setFPS };
}
declare function add(doSomething: any): void;
declare namespace todo {
    export function _do(): void;
    export { _do as do };
    export const list: never[];
}
declare function play(): void;
declare function stop(): void;
declare function destory(): void;
declare function undo(): void;
declare function setFPS(value?: number): void;
