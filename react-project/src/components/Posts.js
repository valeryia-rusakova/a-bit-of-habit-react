import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {PostAuthor, PostBody, PostButton, PostContainer, PostItem, PostTitle} from "../css/posts";
import {Link} from "react-router-dom";
import {get_all_posts} from "../actions/posts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


const Posts = () => {
    const posts = useSelector(state => state.posts.allPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_posts());
        console.log(posts);
    }, []);

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
                            <PostButton>
                                <p>
                                    <Link to="/post">Read more</Link>
                                </p>
                            </PostButton>
                         </Grid>
                     </PostItem>)}
                     </PostContainer>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Posts;