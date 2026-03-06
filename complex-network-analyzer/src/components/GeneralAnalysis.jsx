import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Card, Stack, Typography, Skeleton } from '@mui/material';
import { Item } from "semantic-ui-react";
import { FcAreaChart,
        FcBarChart,
        FcBearish,
        FcBullish, 
        FcComboChart, 
        FcHeatMap, 
        FcLineChart, 
        FcMindMap, 
        FcRadarPlot, 
        FcScatterPlot, 
        FcWorkflow }
from "react-icons/fc";
import axios from "axios";
import Graph from './Graph';

const GeneralAnalysis = () => {
    const [generalInfo, setGeneralInfo] = React.useState(null);
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/general_statistical_info/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setGeneralInfo(response.data);
        });
    }, []);


    // fetch the data and set the state
    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/convert_graph/')
        .then((res) => res.json())
        .then((data) => setData(data));
        
    }, []);

    
    if (!generalInfo) {
        return (
            <div>
                <Container style={{ paddingTop: "3rem", paddingBottom: "2rem", marginLeft: "17rem" }}>
                    <Grid container spacing={3}>
                    {[...Array(10)].map((_, index) => (
                        <Grid item xs={12} sm={12} md={4} sx={{ marginBottom: '3vh' }} key={index}>
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Stack>
                                <Item>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                    <Skeleton variant="circular" width={75} height={75} style={{ marginRight: 10, marginLeft: 10 }} />
                                    <Skeleton variant="text" width={200} height={40} />
                                </Box>
                                </Item>
                                <Item>
                                <Skeleton variant="text" width={100} height={40} style={{ marginLeft: "5rem" }} />
                                </Item>
                            </Stack>
                            </Box>
                        </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </div>
        );
    }

    if (generalInfo) {
        console.log("THE GENERAL INFO IS ", generalInfo);
    }
    if (data) {
        console.log("THE GRAPH DATA IS ", data);
    }

    return (
        <div>
            <Container style={{ paddingTop: "3rem", paddingBottom: "2rem", marginLeft: "17rem" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcRadarPlot style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Nodes Count: <span style={{ color: "#165a72", fontWeight: 'normal', marginLeft: '5rem' }}>{generalInfo.nodes_count}</span></Typography>
                                        </Box>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcScatterPlot style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Edges Count: <span style={{ color: "#165a72", fontWeight: 'normal' }}>{generalInfo.edges_count}</span></Typography>
                                        </Box>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcMindMap style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Density:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "15rem", color: "#165a72" }}>{generalInfo.density}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcBarChart style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Diameter:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "18rem", color: "#165a72" }}>{generalInfo.diameter}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcComboChart style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Transitivity:</Typography>
                                        </Box>
                                    </Item>
                                    <Item>
                                        <Typography sx={{ fontSize: 30, ml: "12rem", color: "#165a72" }}>{generalInfo.transitivity}</Typography>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcBullish style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Assortiativity Between The Nodes: <span style={{ color: "#165a72", fontWeight: 'normal', marginLeft: "22rem" }}>{generalInfo.assortiativity}</span></Typography>
                                        </Box>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcWorkflow style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Average In-degree & out-degree: <span style={{ color: "#165a72", fontWeight: 'normal', marginLeft: "18rem" }}>{generalInfo.avg_in_degree}, {generalInfo.avg_out_degree}</span></Typography>
                                        </Box>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcLineChart style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Average Shortest Path Length: <span style={{ color: "#165a72", fontWeight: 'normal', marginLeft: "26rem" }}>{generalInfo.avg_shortest_path_length}</span></Typography>
                                        </Box>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcHeatMap style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Average Clustering Coefficient: <span style={{ color: "#165a72", fontWeight: 'normal', marginLeft: "25rem" }}>{generalInfo.avg_cc}</span></Typography>
                                        </Box>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>

                    
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: '#DAEDEB', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <FcAreaChart style={{ fontSize: 75, marginRight: 10, marginLeft: 10 }} />
                                            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>Degree Centralization: <span style={{ color: "#165a72", fontWeight: 'normal' , marginLeft: "33rem"}}>{generalInfo.degree_centralization}</span></Typography>
                                        </Box>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <Item>
                            <h1>My Graph</h1>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Stack>
                                    <Item>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem" }}>
                                            <Graph data={data} />
                                        </Box>
                                    </Item>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default GeneralAnalysis;
