import * as React from 'react';
import "../css/colors.css";
import {AppBar, Container, CssBaseline, Grid} from "@material-ui/core";
import DehazeIcon from '@mui/icons-material/Dehaze';
import {Footer, LogoImage, LogoText, NavMenu} from "../css/common-style";
import {PostAuthor, PostBody, PostButton, PostContainer, PostItem, PostTitle} from "../css/main";


export default function Main(){
         return(
             <CssBaseline>
                 <Grid container direction="column" justifyContent="space-between">
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
                    <Grid item>
                         <Container maxWidth="lg">
                             <PostContainer container>
                                 <PostItem item xs={12}>
                                     <PostAuthor item xs={12}>
                                         <p>Valerya Rusakova</p>
                                     </PostAuthor>
                                     <PostTitle item xs={12}>
                                         <p>
                                             42 healthy habits that won't consume titanic efforts,
                                             but will transform your life
                                         </p>
                                     </PostTitle>
                                     <PostBody item>
                                         <p>
                                             To make your life better, you don't have to move mountains and change
                                             dramatically from Monday. It is enough to acquire good habits that will step by step make your everyday life brighter and more fulfilling.
                                         </p>
                                     </PostBody>
                                     <Grid item>
                                        <PostButton>
                                            <p>
                                                Read more
                                            </p>
                                        </PostButton>
                                     </Grid>
                                 </PostItem>
                                 <PostItem item xs={12}>
                                     <PostAuthor item xs={12}>
                                         <p>Valerya Rusakova</p>
                                     </PostAuthor>
                                     <PostTitle item xs={12}>
                                         <p>
                                             42 healthy habits that won't consume titanic efforts,
                                             but will transform your life
                                         </p>
                                     </PostTitle>
                                     <PostBody item>
                                         <p>
                                             To make your life better, you don't have to move mountains and change
                                             dramatically from Monday. It is enough to acquire good habits that will step by step make your everyday life brighter and more fulfilling.
                                         </p>
                                     </PostBody>
                                     <Grid item>
                                        <PostButton>
                                            <p>
                                                Read more
                                            </p>
                                        </PostButton>
                                     </Grid>
                                 </PostItem>
                                 <PostItem item xs={12}>
                                     <PostAuthor item xs={12}>
                                         <p>Valerya Rusakova</p>
                                     </PostAuthor>
                                     <PostTitle item xs={12}>
                                         <p>
                                             42 healthy habits that won't consume titanic efforts,
                                             but will transform your life
                                         </p>
                                     </PostTitle>
                                     <PostBody item>
                                         <p>
                                             To make your life better, you don't have to move mountains and change
                                             dramatically from Monday. It is enough to acquire good habits that will step by step make your everyday life brighter and more fulfilling.
                                         </p>
                                     </PostBody>
                                     <Grid item>
                                        <PostButton>
                                            <p>
                                                Read more
                                            </p>
                                        </PostButton>
                                     </Grid>
                                 </PostItem>
                             </PostContainer>
                         </Container>
                    </Grid>
                     <Grid item>
                         <Footer>
                             <p>A bit of Habit 2021</p>
                         </Footer>
                     </Grid>
                 </Grid>
            </CssBaseline>
    );
}