import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Card, Stack, Typography, Skeleton } from '@mui/material';
import { Item } from "semantic-ui-react";
import axios from "axios";
import DemoMultiLine from './MultiLineChart';

const EpidemicModels = () => {
    const [dataSIS, setDataSIS] = React.useState([]);
    const [dataSIR, setDataSIR] = React.useState([]);

    React.useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('http://127.0.0.1:8000/api/v1/sis_epidemic/')
        .then((response) => response.json())
        .then((json) => setDataSIS(json))
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };

    React.useEffect(() => {
        asyncFetchSIR();
    }, []);

    const asyncFetchSIR = () => {
        fetch('http://127.0.0.1:8000/api/v1/sir_epidemic/')
        .then((response) => response.json())
        .then((json) => setDataSIR(json))
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };

    return (
        <div>
            <Container style={{ paddingTop: "3rem", paddingBottom: "2rem", marginLeft: "17rem" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <DemoMultiLine data={dataSIS}/>
                        <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                            SIS Model Simulation (at first all the nodes with L1 label were supposed to be infected)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <DemoMultiLine data={dataSIR}/>
                        <Typography variant='body2' align='center' sx={{ color: 'gray' }}>
                            SIR Model Simulation (at first all the nodes with L1 label were supposed to be infected)
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default EpidemicModels
