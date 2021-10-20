import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {PostAuthor, PostBody, PostButton, PostContainer, PostItem, PostTitle} from "../css/posts";
import {Link} from "react-router-dom";

function Posts() {
    return (
        <React.Fragment>
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
                                        <Link to="/post">Read more</Link>
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
                                         <Link to="/post">Read more</Link>
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
                                         <Link to="/post">Read more</Link>
                                    </p>
                                </PostButton>
                             </Grid>
                         </PostItem>
                     </PostContainer>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Posts;