import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoMultiLine = ({data}) => {
    const config = {
        data,
        xField: 't',
        yField: 'count',
        seriesField: 'name',
        yAxis: {
        // label: {
        //     formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
        // },
        },
        legend: {
        position: 'top',
        },
        smooth: true,
        animation: {
        appear: {
            animation: 'path-in',
            duration: 5000,
        },
        },
    };

    return (
        <div style={{ width: 1100, height: 400 }}>
            <Line {...config} />
        </div>
    );
};

export default DemoMultiLine;