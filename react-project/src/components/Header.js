import {AppBar, Container, Grid} from "@material-ui/core";
import {LogoImage, LogoText, NavMenu} from "../css/header";
import DehazeIcon from "@mui/icons-material/Dehaze";
import * as React from "react";

function Header() {
    return (
        <React.Fragment>
            <Grid item>
                 <AppBar position="fixed" style={{background: 'var(--main-bg-title-color)'}}>
                     <Container maxWidth="lg">
                             <LogoImage item >
                                <div>
                                <p>BH</p>
                                </div>
                             </LogoImage>
                             <LogoText item >
                                <p>A bit of Habit</p>
                             </LogoText>
                             <NavMenu>
                                <input type="checkbox" name="menu" id="btn-menu"/>
                                <label htmlFor="btn-menu"><DehazeIcon/></label>
                             <ul>
                                 <li id="firstItem" className="menuItem"><a href="/login">Habbits</a></li>
                                 <li className="menuItem"><a href="/login">My posts</a></li>
                                 <li className="menuItem"><a href="/login">My achievements</a></li>
                                 <li className="menuItem">
                                     <a href="/profile">Account</a>
                                     <ul>
                                        <li><a href="/login">Settings</a></li>
                                        <li><a href="/login">Log out</a></li>
                                     </ul>
                                 </li>
                             </ul>
                             </NavMenu>
                     </Container>
                 </AppBar>
            </Grid>
        </React.Fragment>
    );
}

export default Header;