import { useState } from 'react';

export default function useInputHandler(initialState = {}) {
    const [inputState, setInputState] = useState(initialState);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputState(prevState => ({ ...prevState, [id]: value }));
    };

    return [inputState, handleInputChange, setInputState];
};