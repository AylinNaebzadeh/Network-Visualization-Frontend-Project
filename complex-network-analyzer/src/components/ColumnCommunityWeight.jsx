import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = ({data}) => {
    const config = {
        data,
        xField: 'Weight',
        yField: '#Communities',
        label: {
            position: 'middle',
            // 'top', 'bottom', 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            Weight: {
                alias: 'Weight',
        },
            CommunitiesCount: {
                alias: '#Communities',
        },
        },
    };
    return <Column {...config} />;
};

export default DemoColumn;