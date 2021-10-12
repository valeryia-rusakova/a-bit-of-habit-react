import * as React from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "../Header";
import Profile from "../Profile";
import Footer from "../Footer";



export default function ProfilePage(){
     return(
         <CssBaseline>
             <Grid container direction="column" justifyContent="space-between">
                <Header/>
                <Profile/>
                <Footer/>
             </Grid>
        </CssBaseline>
    );
}