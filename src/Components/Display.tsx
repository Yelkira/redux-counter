import React from 'react';

type DisplayPropsType = {
    startValue: number
}
const Display = ({startValue}:DisplayPropsType) => {
    return (
        <div>
            <span>Value</span>: <span>{startValue}</span>
        </div>
    );
};

export default Display;