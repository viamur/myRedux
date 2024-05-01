import {createStore, MyRedux} from '@/store/myRedux';
import {useSyncExternalStore} from 'react';

type InitialState = {
    text: string;
}

const initialState: InitialState = {
    text: ''
}

const reducer: MyRedux.Reducer<InitialState> = (state, action) => {
    switch(action.type) {
        case 'CHANGE_TEXT':
            return {...state, text: action.payload?.text || '' };
        default:
            return state;
    }
}


const storeText = createStore(reducer, initialState);

export const useText = () => {
    const state = useSyncExternalStore(storeText.subscribe, storeText.getState);
    return [state, storeText.dispatch] as MyRedux.HookReturn<InitialState>;
}
