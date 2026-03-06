import { Scatter } from '@ant-design/plots';

const DemoScatter = ({data}) => {
    const config = {
        data,
        xField: 'Degree',
        yField: 'Frequency',
        size: 5,
        pointStyle: {
            stroke: '#777777',
            lineWidth: 1,
            fill: '#5B8FF9',
        },
        regressionLine: {
            type: 'exp', // linear, exp, loess, log, poly, pow, quad
        },
    };

    return <Scatter {...config} />;
};

export default DemoScatter;