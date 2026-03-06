import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Card, Stack, Typography, Skeleton } from '@mui/material';
import { Item } from "semantic-ui-react";
import axios from "axios";
import DemoPie from './LabelsPieChart';
import { Space, Table, Tag } from 'antd';
import DemoScatter from './ScatterDegreeDistribution';

const { Column, ColumnGroup } = Table;

const LabelClassification = () => {
    const [data, setData] = React.useState([]);
    const [tableData, setTableData] = React.useState(null);
    const [degreeTableData, setDegreeTableData] = React.useState(null);
    const [L1, setL1] = React.useState([]);
    const [L2, setL2] = React.useState([]);
    const [L3, setL3] = React.useState([]);
    const [L4, setL4] = React.useState([]);
    const [L5, setL5] = React.useState([]);
    const [L6, setL6] = React.useState([]);
    const [L7, setL7] = React.useState([]);
    const [Unknown, setUnknown] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_clustering/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setTableData(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_values/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setDegreeTableData(response.data);
        });
    }, []);

    React.useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('http://127.0.0.1:8000/api/v1/node_labels/')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_distribution/L1/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setL1(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_distribution/L2/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setL2(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_distribution/L3/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setL3(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_distribution/L4/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setL4(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_distribution/L5/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setL5(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_distribution/L6/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setL6(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_distribution/L7/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setL7(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/label_degree_distribution/Unknown/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setUnknown(response.data);
        });
    }, []);

    return (
        <div>
            <Container style={{ paddingTop: "3rem", paddingBottom: "2rem", marginLeft: "17rem" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Table dataSource={degreeTableData} bordered >
                                    <Column title="Label" dataIndex="label" key="label" />
                                    <Column title="Average" dataIndex="avg" key="avg" sorter={(a, b) => a.avg - b.avg}/>
                                    <Column title="Min" dataIndex="min" key="min" sorter={(a, b) => a.min - b.min}/>
                                    <Column title="Max" dataIndex="max" key="max" sorter={(a, b) => a.max - b.max}/>
                                </Table>

                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    Labels Degree Values Table
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoPie data={data} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    Labels Node Count Pie Chart
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Table dataSource={tableData} bordered >
                                    <Column title="Label" dataIndex="label" key="label" />
                                    <Column title="Clustering Coefficient Average" dataIndex="cc_avg" key="cc_avg" />
                                </Table>

                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    Labels Clustering Coefficients Table
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={L1} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    L1 nodes Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={L2} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    L2 nodes Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={L3} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    L3 nodes Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={L4} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    L4 nodes Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={L5} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    L5 nodes Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={L6} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    L6 nodes Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={L7} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    L7 nodes Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={Unknown} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    Unknown nodes Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
            </Container>
        </div>
    )
}

export default LabelClassification
