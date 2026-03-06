import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Card, Stack, Typography, Skeleton } from '@mui/material';
import { Item } from "semantic-ui-react";
import axios from "axios";
import DemoLine from './LineDegreeDistribution';
import DemoScatter from './ScatterDegreeDistribution';
import DemoColumn from './ColumnCommunityWeight';


const Charts = () => {
    const [lineData, setLineData] = React.useState([]);
    const [columnData, setColumnData] = React.useState([]);

    React.useEffect(() => {
        asyncFetch();
    }, []);
    
    React.useEffect(() => {
        asyncColumnFetch();
    }, []);


    const asyncFetch = () => {
        fetch('http://127.0.0.1:8000/api/v1/degree_distribution/')
        .then((response) => response.json())
        .then((json) => setLineData(json))
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };

    const asyncColumnFetch = () => {
        fetch('http://127.0.0.1:8000/api/v1/community_weight/')
        .then((response) => response.json())
        .then((json) => setColumnData(json))
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };

    return (
        <div>
            <Container style={{ paddingTop: "3rem", paddingBottom: "2rem", marginLeft: "17rem" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                            
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoLine data={lineData} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    Frequency ∝ Degree Line Chart
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoScatter data={lineData} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    Frequency ∝ Degree Scatter Chart
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{marginBottom:'3vh'}} >
                            <Card sx={{ bgcolor: 'white', height: 'max-content' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Item>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: "0.5rem", justifyContent: 'center', paddingLeft: '5rem' }}>
                                                <DemoColumn data={columnData} />
                                            </Box>
                                        </Item>
                                    </Stack>
                                </Box>
                                <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                                    #Communities ∝ Weight Column Chart
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
            </Container>
        </div>
    )
}

export default Charts
