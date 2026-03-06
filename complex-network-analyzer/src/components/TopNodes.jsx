import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Card, Stack, Typography, Skeleton } from '@mui/material';
import { Item } from "semantic-ui-react";
import axios from "axios";
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;


const TopNodes = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/top_5_nodes_based_on_several_measures/").then((response) => {
            console.log(`THE RESPONSE IS ${JSON.stringify(response.data)}`)
            setData(response.data);
        });
    }, []);

    if (data) {
        console.log("THE DATA IN IF IS: ", data)
    }
    return (
        <div>
            <Container style={{ paddingTop: "3rem", paddingBottom: "2rem", marginLeft: "17rem" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{marginBottom:'3vh'}} >
                        <Table dataSource={data} bordered scroll={{ x: 1500 }}>
                            <Column title="Centrality Measure" dataIndex="feature" key="feature" />

                            <ColumnGroup title="1st">
                                <Column title="ID" dataIndex="id1" key="id1" />
                                <Column title="value" dataIndex="value1" key="value1" />
                            </ColumnGroup>

                            <ColumnGroup title="2nd">
                                <Column title="ID" dataIndex="id2" key="id2" />
                                <Column title="Value" dataIndex="value2" key="value2" />
                            </ColumnGroup>

                            <ColumnGroup title="3rd">
                                <Column title="ID" dataIndex="id3" key="id3" />
                                <Column title="Value" dataIndex="value3" key="value3" />
                            </ColumnGroup>

                            <ColumnGroup title="4th">
                                <Column title="ID" dataIndex="id4" key="id4" />
                                <Column title="value" dataIndex="value4" key="value4" />
                            </ColumnGroup>

                            <ColumnGroup title="5th">
                                <Column title="ID" dataIndex="id5" key="id5" />
                                <Column title="value" dataIndex="value5" key="value5" />
                            </ColumnGroup>

                        </Table>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default TopNodes
