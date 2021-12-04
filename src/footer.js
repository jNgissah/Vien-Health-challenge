import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
                <Container>
            <Grid container spacing={2} style={{textAlign:"left"}}>
            <Router>
                    <Grid item xs={12} lg={3} >


                        <div style={{ marginTop: "70px" }}>

                        <Link to="/" >Counter Delivery, Carters Beach </Link> <br />
                        <Link to="/">Post Center, West Port </Link> <br />
                        <ul>
                            <li>
                                <span>  </span>
                            </li>
                        </ul>
</div>
                </Grid>
                    <Grid item xs={12} lg={3}>
                    <h2>About</h2>
                    <Link to="/">Company</Link> <br/>
                        <Link to="/">Team</Link> <br />
                        <Link to="/">Careers</Link> <br />
                        <Link to="/">Blog</Link> <br />

                </Grid>
                    <Grid item xs={12} lg={3}>
                    <h2>Support</h2>

                        <Link to="/">Help Center </Link> <br />
                        <Link to="/">Cancellation Opions </Link> <br />
                        <Link to="/">Neighborhood Support </Link> <br />
                        <Link to="/">Trust & Safty </Link> <br />

                </Grid>
                    <Grid item xs={12} lg={3}>
                    <h2>Address</h2>

                        <Link to="/">Counter Delivery, Carters Beach </Link> <br />
                        <Link to="/">Post Center, West Port </Link> <br />
                    <ul>
                        <li>
                            <span>  </span>
                        </li>
                   </ul>

                </Grid>
               
            </Router>
            </Grid>
            <br/>
            <br/>
            <p style={{ fontSize: 12 }}>  <span style={{ padding: 12 }}> &copy;Udwell, LLC. All rights reserved. </span> <span style={{ padding: 12 }}> Terms & Conditions </span> <span style={{ padding: 12 }}> Privacy Policy</span> <span style={{ padding: 12 }}> Terms & Conditions </span>  </p>
            <br/>
            <br/>
        </Container>
    );
}
