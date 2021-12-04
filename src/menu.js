import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
//import Chip from './chip';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Drawer from './drawer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';


export default function PrimarySearchAppBar() {
    let data = <Chip icon={<FaceIcon />} label="With Icon" />



    return (
        <div style={{ backgroundColor: "#FDFDFD" }}>
            <div className="largescreen">
            <Grid container spacing={2} >
                <Grid item lg={8} xs={10}>

                        <FormControl sx={{ m: 1, width: '40%' }} variant="outlined">
                           
                        <OutlinedInput
                            id="outlined-adornment-weight"
                              
                            endAdornment={<InputAdornment position="end"><button type="submit" text="search" style={{ height: "56px", Bottom: 10, marginTop: 0, width: 50, marginRight: "-18px", zIndex:2, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderBottomRightRadius: 5, borderTopRightRadius: 5, border: "none", backgroundColor: "#016450", color: "white" }} ><SearchIcon /></button></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            />

                    </FormControl>


                    
                        
              
                </Grid>
                <Grid item lg={4} xs={2}>
                    <Router>
                    <ul>
                        <li>
                            <Link to="/">Udwell Now </Link>
                        </li>
                        <li>
                           <Link to="/"> Sell a Property </Link>
                            </li>

                            <li>
                                <Drawer />

                            </li>
                        </ul>
                    </Router>

                  
                </Grid>
                
                </Grid>

            </div>







            <div className="smallscreen">
            <Grid container spacing={2} >
                <Grid item lg={8} xs={9}>

                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                                
                            endAdornment={<InputAdornment position="end"><button type="submit" text="search" style={{ height: "56px", Bottom: 10, marginTop: 0, width: 50, marginRight: "-18px", zIndex:2, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderBottomRightRadius: 5, borderTopRightRadius: 5, border: "none", backgroundColor: "#016450", color: "white" }} ><SearchIcon /></button></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>


                    
                        
              
                </Grid>
                <Grid item lg={4} xs={3}>
                    <Router>
                    <ul>
                        

                            <li>
                                <Drawer />

                            </li>
                        </ul>
                    </Router>

                  
                </Grid>
                
            </Grid>
            </div>
           
        </div>

    );
}
