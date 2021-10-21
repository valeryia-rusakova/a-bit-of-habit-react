import React from 'react';
import { Route,  Switch} from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Post from "./components/Post";
import {CssBaseline, Grid} from "@material-ui/core";
import Achievements from "./components/Achievements";


export const MainRoutes = () => (
    <CssBaseline>
        <Grid container direction="column" justifyContent="space-between">
            <Header />
            <Switch>
                <Route path="/posts" component={Posts} />
                <Route path="/profile" component={Profile} />
                <Route path="/post" component={Post} />
                <Route path="/achievements" component={Achievements} />
            </Switch>
            <Footer />
        </Grid>
    </CssBaseline>
 )