import {useText} from '@/store/storeText';
import React from 'react';

export default function TextComponent() {
    const [state, dispatch] = useText();
    const onChange = (value: string) => {
        dispatch({ type: 'CHANGE_TEXT', payload: {text: value} });
    }

    return (
        <input
            className="border-2 border-red-500"
            placeholder="Enter the text"
            value={state.text}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}
