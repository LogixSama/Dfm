import React, { memo } from 'react';
import './App.css'

import { Handle } from 'react-flow-renderer';

export default memo(({ data, isConnectable }) => {
    return (
        <>
            <div style={data.style}>
                <div>
                    <p>{data.name}</p>
                </div>
            </div>
        </>
    );
});