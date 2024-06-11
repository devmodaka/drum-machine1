import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
    const sound = useSelector(state => state.sound);

    return (
        <div id="display">
            {sound ? `Playing: ${sound}` : 'Press a pad'}
        </div>
    );
}

export default Display;
