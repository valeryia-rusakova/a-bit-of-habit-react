import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {PostAuthor, PostBody, PostButton, PostContainer, PostItem, PostTitle} from "../css/posts";
import {Link} from "react-router-dom";
import {PostsList} from "../mocks/PostsList";


const postItems = PostsList.map((post)=>{
    return(
    <PostItem item xs={12}>
         <PostAuthor item xs={12}>
             <p>{post.author}</p>
         </PostAuthor>
         <PostTitle item xs={12}>
             <p>
                 {post.title}
             </p>
         </PostTitle>
         <PostBody item>
             <p>
                 {post.body}
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
    );
});

function Posts() {
    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <PostContainer container>
                         {postItems}
                     </PostContainer>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Posts;