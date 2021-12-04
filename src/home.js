import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import CommentIcon from '@mui/icons-material/Comment';
import CardTravel from '@mui/icons-material/CardTravel';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import PersonOutline from '@mui/icons-material/PersonOutline';
import Barchart1 from './barchart1';
import Peichart from './peichart';
import Peichart2 from './peichart2';
import Arial from './arial';
import Arial2 from './arial2';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import Imglist from './images/Listing.png';
import Imghome from './images/Saved-homes.png';
import Imgsave from './images/Saved-search.png';
import Imgmessage from './images/Messages.png';
import Imgnoti from './images/Notifications.png';
import Imgbill from './images/Billing.png';
import Imganalytic from './images/Analytics.png';
import Imgblog from './images/Blog.png';
import Imguser from './images/User.png';
import Person from './images/Ellipse77.png';
import Imgdone from './images/bx-copy.png';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#016450' : '#308fe8',
    },
}));


export default function BasicGrid() {
    return (
        <Container style={{marginTop:20}}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                    <Grid item lg={3} xs={12}>

                        <Item>


                            <div style={{ width: "100%" }}>

                                <div direction="row" spacing={4}>
                                    
                                    <Badge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        badgeContent={
                                            <PhotoCameraOutlinedIcon style={{ backgroundColor:"#016450", padding:6, borderRadius:"100%", color:"white",fontSize:"15px" }}/>
                                        }
                                    >
                                        <Avatar style={{width:100, height:100}} alt="Travis Howard" src={Person} />

                                    </Badge>
                                    <h4>Alex Assenmacher</h4>
                                    <p style={{ marginTop: "-8px" }}>Home Buyer</p>

                                    <button style={{ padding: " 7px 20px 7px 20px", backgroundColor:"#016450", border:"none", color:"white", borderRadius:"5px"}}>
                                        Edit Profile
                                    </button>
                                </div>

                        </div>


                            <div style={{ width: "100%", alignItems: "left", backgroundColor: "white" }}>
                                <br/>
                                <Divider>
                                </Divider>
                                <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imguser} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <Divider>
                                    </Divider>
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="Profile" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider>
                                </Divider>
                                <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imglist} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="My Listing" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider>
                                </Divider>
                                 <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imgsave} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="Saved Search" />
                                    </ListItemButton>
                                </ListItem>


                                <Divider>
                                </Divider>

                                 <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imghome} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="Saved Homes" />
                                    </ListItemButton>
                                </ListItem>

                                <Divider>
                                </Divider>

                                <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imgmessage} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="Messages" />
                                    </ListItemButton>
                                </ListItem>
                                
                                <Divider>
                                </Divider>


                                <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imgnoti} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="Notifications" />
                                    </ListItemButton>
                                </ListItem>
                                
                                <Divider>
                                </Divider>

                                <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imgbill} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="Billing" />
                                    </ListItemButton>
                                </ListItem>
                                
                                <Divider>
                                </Divider>

                                <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imganalytic} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="Analytics" />
                                    </ListItemButton>
                                </ListItem>

                                <Divider>
                                </Divider>

                                <ListItem
                                  
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <img src={Imgblog} />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton >
                                       
                                        <ListItemText  primary="Blog" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider>
                                </Divider>
                                <br/>
                                <FormControl sx={{ m: 1,  width: '94%' }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        defaultValue="https://www.udwell.com/p."
                                        endAdornment={<InputAdornment position="end"><button type="submit" text="search" style={{ height: "52px", Bottom: 10, marginTop: 0, width: 50, marginRight: "-12px", zIndex: 2, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderBottomRightRadius: 5, borderTopRightRadius: 5, border: "none"}} ><img src={Imgdone} /></button></InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                    />
                                </FormControl>

                            </div>

                        </Item>
                </Grid>
                    <Grid item lg={9} xs={12} >
                        <Item style={{ padding: 20, backgroundColor: "#FDFDFD"}}>



                            <Grid container spacing={2}>
                                <Grid item lg={4} xs={12}>
                                    <div style={{ backgroundColor: "white", padding: 10, border: "solid", height: "100%", borderWidth: "1px", borderColor: "#EAEDF3", borderRadius: "5px" }}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={6} style={{ textAlign: "left" }}>
                                            <b >
                                                Sales
                                                </b>
                                            </Grid>
                                            <Grid item xs={6} style={{ textAlign: "right" }}>
                                            <span>
                                                Monthly Goal
                                            </span>
                                        </Grid>
                                        
                                            <Grid item xs={6} style={{ textAlign: "left" }}>
                                          
                                                <h1> 98.1%</h1>
                                                
                                                
                                            </Grid>

                                            <Grid item xs={6} style={{ textAlign: "right" , marginTop:"14% ", color:"#016450" }}>

                                            <span>
                                               +6.9%
                                            </span>
                                        </Grid>
                                            </Grid>

                                        <BorderLinearProgress variant="determinate"  value={89}  />

                                        <div style={{ textAlign: "left", marginTop: "6% " }}>

                                            <small>
                                                Yearly Goal
                                            </small>
                                        </div>

                                    </div>
                                </Grid>

                              
                                <Grid item lg={4} xs={12}>
                                    <div style={{ backgroundColor: "white", padding: 10, border: "solid", height: "100%", borderWidth: "1px", borderColor: "#EAEDF3", borderRadius: "5px" }}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={6} style={{ textAlign: "left" }}>
                                                <b >
                                                    Revenue
                                                </b>
                                            </Grid>
                                            <Grid item xs={6} style={{ textAlign: "right" }}>
                                                <small>
                                                    Total Profit
                                                </small>
                                            </Grid>

                                            <Grid item xs={6} style={{ textAlign: "left" }}>

                                                <h1> $13,893</h1>


                                            </Grid>

                                            <Grid item xs={6} style={{ textAlign: "right", marginTop: "14% ", color: "#FF8433" }}>

                                                <span>
                                                    +11.3%
                                                </span>
                                            </Grid>
                                        </Grid>
                                        
                                        <Barchart1 />


                                    </div>
                                </Grid>



                                 <Grid item lg={4} xs={12}>
                                    <div style={{ backgroundColor: "white", padding:10, border: "solid", height: "100%", borderWidth: "1px", borderColor: "#EAEDF3", borderRadius: "5px" }}>
                                        <Grid container spacing={0} >
                                            <Grid item xs={6} style={{ textAlign: "left" }}>
                                            <b >
                                                Clients
                                                </b>
                                            </Grid>
                                            <Grid item xs={6} style={{ textAlign: "right" }}>
                                            <small>
                                                Subscribed
                                            </small>
                                        </Grid>
                                        
                                            <Grid item xs={6} style={{ textAlign: "left" }}>
                                          
                                                <h1> 1,232</h1>
                                                
                                                
                                            </Grid>

                                            <Grid item xs={6} style={{ textAlign: "right" , marginTop:"14% ", color:"#016450" }}>

                                            <span>
                                               +3.2%
                                            </span>
                                        </Grid>
                                            </Grid>

                                        <BorderLinearProgress variant="determinate"  value={80}  />

                                        <div style={{ textAlign: "left", marginTop: "6% " }}>

                                            <small>
                                               Yearly Goal
                                            </small>
                                        </div>

                                    </div>
                                </Grid>

       
                              
                            </Grid>


                            <br />
                            <br />
                            <br />

                              <Grid container spacing={2}>
                                <Grid item lg={4} xs={12}>
                                    <div style={{ backgroundColor: "white", border: "solid", height: "100%", borderWidth: "1px", borderColor: "#EAEDF3", borderRadius: "5px" }}>

                                        <Grid container spacing={2} style={{padding:10}}>
                                            <Grid item xs={3} style={{ textAlign: "center" }}>
                                                
                                                    <CardTravel style={{ backgroundColor: "#016450", color:"white", padding:"5px", borderRadius:"5px"}}/>
                                              
                                            </Grid>

                                            <Grid item xs={6} style={{ textAlign: "left" }}>
                                                <b> Total Sales </b> <br />

                                                <div style={{ textAlign: "left", color:"#016450"}}>

                                                    <small>
                                                        +$985.85
                                                    </small>
                                                </div>


                                            </Grid>

                                            <Grid item xs={3} style={{ textAlign: "Right" }}>

                                                <MoreHoriz/>


                                            </Grid>

                                           
                                        </Grid>

                                        <Divider>
                                        </Divider>

                                        <Grid container spacing={2}>
                                            <Grid item lg={8} xs={12}>

                                        <Peichart />
<br/>
                                            </Grid>

                                            <Grid item lg={4} xs={12}>

                                                <h2 style={{marginBottom:"-4px", marginTop:"40px"}}> $2,595 </h2>
                                                <span > Invoiced </span>
                                                <br/>
                                                <Divider style={{ marginTop: "10px" }}>
                                                </Divider>
                                                <h2 style={{ marginBottom: "-4px", marginTop: "4px" }}> 23 </h2>
                                                <span> Invoices </span>

                                            </Grid>


                                                </Grid>

                                    </div>
                                </Grid>

                                 <Grid item lg={8} xs={12}>
                                    <div style={{ backgroundColor: "white", border: "solid", height: "100%", borderWidth: "1px", borderColor:"#EAEDF3", borderRadius:"5px" }}>

                                        <Grid container spacing={0} style={{padding:10}}>
                                            <Grid item xs={9} style={{ textAlign: "left", padding:"10px" }}>

                                                <b>Daily Profit </b>

                                            </Grid>

                                          

                                            <Grid item xs={3} style={{ textAlign: "Right" }}>

                                                <MoreHoriz />


                                            </Grid>


                                        </Grid>

                                        <Divider>
                                        </Divider>



                                       <Arial/>

                                       
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                </Grid>
                              
                                

                               
                            </Grid>

                        <br/>
                        <br/>
                        <br/>
                            <Grid container spacing={2}>
                                <Grid item lg={8} xs={12}>
                                    <div style={{ backgroundColor: "white", border: "solid", height: "100%", borderWidth: "1px", borderColor: "#EAEDF3", borderRadius: "5px" }}>

                                        <Grid container spacing={0} style={{padding:10}}>
                                            <Grid item xs={9} style={{ textAlign: "left", padding: "10px" }}>

                                                <b>Daily Active Clients </b>

                                            </Grid>



                                            <Grid item xs={3} style={{ textAlign: "Right" }}>

                                                <MoreHoriz />


                                            </Grid>


                                        </Grid>

                                        <Divider>
                                        </Divider>


                                        <div>
                                            
                                            <Arial2  />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
                                        </div>

                                    </div>

                                </Grid>


                                <Grid item lg={4} xs={12}>
                                    <div style={{ backgroundColor: "white", border: "solid", height: "100%", borderWidth: "1px", borderColor: "#EAEDF3", borderRadius: "5px" }}>

                                        <Grid container spacing={0} style={{padding:10}}>
                                            <Grid item xs={3} style={{ textAlign: "center" }}>
                                                
                                                <PersonOutline style={{ backgroundColor: "#FACF55", color:"white", padding:"5px", borderRadius:"5px"}}/>
                                              
                                            </Grid>

                                            <Grid item xs={6} style={{ textAlign: "left" }}>
                                                <b> User Onboarding </b> <br />

                                                <div style={{ textAlign: "left", color:"grey"}}>

                                                    <small>
                                                        Q3 Goal: 8,000 User
                                                    </small>
                                                </div>


                                            </Grid>

                                            <Grid item xs={3} style={{ textAlign: "Right" }}>

                                                <MoreHoriz/>


                                            </Grid>

                                           
                                        </Grid>

                                        <Divider>
                                        </Divider>

                                        <Grid container spacing={2}>
                                            <Grid item lg={8} xs={12} >

                                        <Peichart2 />

                                            </Grid>

                                            <Grid item lg={4} xs={12}>



                                                <h2 style={{ marginBottom: "-4px", marginTop: "60px" }}> 2,452  </h2>
                                                <small > ONBOARDED </small>
                                                <br />
                                                <Divider style={{ marginTop: "10px" }}>
                                                </Divider>
                                             




                                            
                                            </Grid>


                                                </Grid>


                                        <br />
                                       
                                    </div>
                                </Grid>

                                <br />
                                <br />
                                <br />

                               
                            </Grid>





                        </Item>
                </Grid>
                
                </Grid>





            </Box>
        </Container>
    );
}
