'use client';
import {createHookDispatch, createHookSelector, createStore, MyRedux} from '@/store/myRedux';
import {useSyncExternalStore} from 'react';

type InitialState = {
    count: number;
    text: string;
}

const initialState: InitialState = {
    count: 0,
    text: ''
}

const reducer: MyRedux.Reducer<InitialState> = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1 };
        case 'DECREMENT':
            return {...state, count: state.count - 1 };
        case 'ADD':
            return {...state, count: action.payload?.count || 0 };
        default:
            return state;
    }
}


const storeCounter = createStore(reducer, initialState);

export const useCounter = () => {
    const state = useSyncExternalStore(storeCounter.subscribe, storeCounter.getState);
    return [state, storeCounter.dispatch] as MyRedux.HookReturn<InitialState>;
}

export const useCountSelector = createHookSelector(storeCounter);
export const useCountDispatch = createHookDispatch(storeCounter);
