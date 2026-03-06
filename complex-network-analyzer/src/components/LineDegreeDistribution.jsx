import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = ({data}) => {
    const config = {
        data,
        padding: 'auto',
        xField: 'Degree',
        yField: 'Frequency',
        xAxis: {
        // type: 'timeCat',
            tickCount: 10,
        },
        smooth: true,
        annotations: [
            {
                type: 'text',
                position: ['50%', '100%'],
                content: 'Degree',
                offsetY: 40,
                style: {
                    fontSize: 14,
                    fill: '#8c8c8c',
                    textBaseline: 'bottom',
                    textAlign: 'center',
                },
            },
            {
                type: 'text',
                position: ['5%', '50%'],
                offsetX: -20,
                style: {
                    fontSize: 14,
                    fill: '#8c8c8c',
                    textBaseline: 'top',
                    textAlign: 'center',
                },
            },
        ],
    };

    return <Line {...config} />;
};

export default DemoLine;

// ReactDOM.render(<DemoLine />, document.getElementById('container'));

