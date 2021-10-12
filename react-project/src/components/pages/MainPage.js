import * as React from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "../Header";
import Posts from "../Posts";
import Footer from "../Footer";


export default function MainPage(){
     return(
         <CssBaseline>
             <Grid container direction="column" justifyContent="space-between">
                <Header/>
                <Posts/>
                <Footer/>
             </Grid>
        </CssBaseline>
     );
}