import React, { memo } from 'react';
import './App.css'

import { Handle } from 'react-flow-renderer';

export default memo(({ data, isConnectable }) => {
    return (
        <>
            <div style={data.style}>
                <p>{data.name}</p>
                <Handle
                    type="source"
                    position="right"
                    id="b"
                    // style={{ top: 20, background: '#555' }}
                    isConnectable={isConnectable}
                />
                <Handle
                    type="target"
                    position="right"
                    id="a"
                    // style={{ top: 90, background: '#555' }}
                    isConnectable={isConnectable}
                />
            </div>
        </>
    );
});