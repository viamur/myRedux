import {useSyncExternalStore} from 'react';

export namespace MyRedux {
    export type Action<Payload extends object> = {type: string, payload?: Partial<Payload>};
    export type Reducer<State extends object> = (state: State, action: Action<State>) => State;
    export type Listener = () => void;
    export type HookReturn<State extends object> = [State, (action: Action<State>) => void];
    export type Store<State extends object> = (reducer: Reducer<State>, initialState: State) => {
        getState: () => State;
        dispatch: (action: Action<State>) => void;
        subscribe: (onStoreChange: Listener) => () => void;
    };
}

export function createStore<State extends object>(reducer: MyRedux.Reducer<State>, initialState: State): ReturnType<MyRedux.Store<State>> {
    let state = initialState;
    let listeners: MyRedux.Listener[] = [];

    const getState = () => state;

    const dispatch = (action: MyRedux.Action<State>) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    const subscribe = (listener: MyRedux.Listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    }

    return { getState, dispatch, subscribe };
}

export function createHookSelector<State extends object>(
    store: ReturnType<MyRedux.Store<State>>
) {
    return function<Selected>(selector: (state: State) => Selected) {
        return useSyncExternalStore(
            store.subscribe,
            () => selector(store.getState())
        );
    }
}

export function createHookDispatch<State extends object>(
    store: ReturnType<MyRedux.Store<State>>
): () => (action: MyRedux.Action<State>) => void {
    return () => store.dispatch;
}
