import {Alert, Container, Grid} from "@material-ui/core";
import * as React from "react";
import {
    CommentInput,
    PostAuthor,
    PostBody,
    PostComment,
    PostItem,
    PostItems,
    PostTitle
} from "../css/posts";
import {CommentAuthor, CommentBody, CommentItem, CommentList} from "../css/comments";
import {CommentsList} from "../mocks/CommentsList";
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {get_post} from "../actions/posts";
import {logout} from "../actions/auth";
import {Redirect} from "react-router-dom";

const listItems = CommentsList.slice(0,4).map((comment)=>{
    return(
    <CommentItem>
        <Grid container direction="column">
            <Grid item xs={12}>
                <CommentAuthor>{comment.author}</CommentAuthor>
            </Grid>
            <Grid item xs={12}>
                <CommentBody>{comment.body}</CommentBody>
            </Grid>
        </Grid>
    </CommentItem>
    );
});

const Post = ({match,isAuthenticated}) => {
    const { postId } = match.params
    const post = useSelector(state => state.posts.singlePost);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_post(postId));
    }, [dispatch, postId]);

    if (!isAuthenticated) {
        dispatch(logout());
        return <Redirect to='/login' />
    }

    if(post){
         return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <PostItems container>
                         <PostItem item xs={12}>
                             <PostAuthor item xs={12}>
                                  <p>{post.user}</p>
                             </PostAuthor>
                             <PostTitle item xs={12}>
                                  <p>{post.header}</p>
                             </PostTitle>
                             <PostBody item>
                                  <p>{post.body}</p>
                             </PostBody>
                             <PostComment item xs={12} md={6}>
                                 <CommentInput  label="Comment" fullWidth="true"/>
                             </PostComment>
                         </PostItem>
                     </PostItems>
                     <CommentList>
                         {listItems}
                     </CommentList>
                 </Container>
            </Grid>
        </React.Fragment>
    );
    }else{
        return(
            <Alert severity="info">This post is not available or has been deleted</Alert>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, )(Post);