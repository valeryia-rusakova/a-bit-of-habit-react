import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {PostAuthor, PostBody, PostLink, PostContainer, PostItem, PostTitle} from "../css/posts";
import {get_all_posts} from "../actions/posts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


const Posts = () => {
    const posts = useSelector(state => state.posts.allPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_posts());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <PostContainer container>
                         {posts && posts.map((post) =>
                         <PostItem item xs={12}>
                         <PostAuthor item xs={12}>
                             <p>{post.user}</p>
                         </PostAuthor>
                         <PostTitle item xs={12}>
                             <p>
                                 {post.header}
                             </p>
                         </PostTitle>
                         <PostBody item>
                             <p>
                                 {post.body}
                             </p>
                         </PostBody>
                         <Grid item>
                             <PostLink to={`/posts/${post.id}`}><p>Read more</p></PostLink>
                         </Grid>
                     </PostItem>)}
                     </PostContainer>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Posts;