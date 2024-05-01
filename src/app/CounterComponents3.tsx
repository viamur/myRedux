import {useCountDispatch, useCounter, useCountSelector} from '@/store/storeCounter';
import React from 'react';

export default function CounterComponents3() {
    const dispatch = useCountDispatch();
    const count = useCountSelector((state) => state.count);
    const state = useCountSelector((state) => state);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'ADD', payload: {count: +e.target.value}});
    }

    return (
        <>
            <span className="text-amber-700">{`State --> ${JSON.stringify(state)}`}</span>
            <input
                className="border-2 border-red-500"
                type="number"
                placeholder="Enter the number"
                value={count ? count.toString() : ''}
                onChange={onChange}
            />
        </>
    )
}
