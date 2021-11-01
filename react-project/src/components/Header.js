import {AppBar, Container, Grid, List} from "@material-ui/core";
import {HeaderItems, LogoImage, LogoText} from "../css/header";
import DehazeIcon from "@mui/icons-material/Dehaze";
import * as React from "react";
import {Link} from "react-router-dom";
import {ListItem} from "@mui/material";

function Header() {
    return (
            <Grid item>
                 <AppBar position="fixed" style={{background: 'var(--main-bg-title-color)'}}>
                     <Container maxWidth="lg">
                             <LogoImage item >
                                <div>
                                <p>BH</p>
                                </div>
                             </LogoImage>
                             <LogoText item >
                                <Link to="/main"><p>A bit of Habit</p></Link>
                             </LogoText>
                             <HeaderItems>
                                <input type="checkbox" name="menu" id="btn-menu"/>
                                <label htmlFor="btn-menu"><DehazeIcon/></label>
                                <List>
                                 <ListItem id="firstItem" className="menuItem"><Link to="/habits">Habits</Link></ListItem>
                                 <ListItem className="menuItem"><Link to="/posts">My posts</Link></ListItem>
                                 <ListItem className="menuItem"><Link to="/achievements">My achievements</Link></ListItem>
                                 <ListItem className="menuItem">
                                     <Link to="/profile">Account</Link>
                                     <List>
                                        <ListItem><Link to="/login">Settings</Link></ListItem>
                                        <ListItem><Link to="/signup">Log out</Link></ListItem>
                                     </List>
                                 </ListItem>
                                </List>
                             </HeaderItems>
                     </Container>
                 </AppBar>
            </Grid>
    );
}

export default Header;