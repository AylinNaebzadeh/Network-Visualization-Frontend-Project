import React from 'react';
import G6 from '@antv/g6';
import ReactDOM from 'react-dom';

const Graph = ({ data }) => {
    const container = React.useRef(null);
    let graph = null;
    const graphRef = React.useRef(null);
    const mapNodeSize = (nodes, propertyName, visualRange) => {
        let minp = 9999999999;
        let maxp = -9999999999;
        nodes.forEach((node) => {
        node[propertyName] = Math.pow(node[propertyName], 1 / 3);
        minp = node[propertyName] < minp ? node[propertyName] : minp;
        maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
        });
        const rangepLength = maxp - minp;
        const rangevLength = visualRange[1] - visualRange[0];
        nodes.forEach((node) => {
        node.size = ((node[propertyName] - minp) / rangepLength) * rangevLength + visualRange[0];
        });
    };


    React.useEffect(() => {
        if (!graphRef.current) {
            graphRef.current = new G6.Graph({
                container: ReactDOM.findDOMNode(container.current),
                width: 1200,
                height: 800,
                fitCenter: true,
                defaultNode: {
                    size: 2,
                    style: {
                        fill: '#C6E5FF',
                        stroke: '#5B8FF9',
                        lineWidth: 0.3,
                    },
                    labelCfg: {
                        style: {
                        fontSize: 3,
                        },
                        position: 'right',
                        offset: 1,
                    },
                },
                defaultEdge: {
                    size: 0.1,
                    color: '#333',
                },
                nodeStateStyles: {
                    selected: {
                        fill: 'steelblue',
                        stroke: '#000',
                        lineWidth: 1,
                    },
                },
                modes: {
                    default: [
                        {
                        type: 'zoom-canvas',
                        enableOptimize: true,
                        optimizeZoom: 0.7,
                        },
                        {
                        type: 'drag-canvas',
                        enableOptimize: true,
                        },
                        'drag-node',
                        'brush-select',
                    ],
                },
            });
            }
            if (data) {
                data.nodes.forEach((node) => {
                    node.label = node.olabel;
                    node.degree = 0;
                    data.edges.forEach((edge) => {
                    if (edge.source === node.id || edge.target === node.id) {
                        node.degree++;
                    }
                    });
                });
                mapNodeSize(data.nodes, 'degree', [1, 10]);
                graphRef.current.data(data);
                graphRef.current.render();
            }
        }, [data]);

    return <div ref={container}></div>;
};

export default Graph
