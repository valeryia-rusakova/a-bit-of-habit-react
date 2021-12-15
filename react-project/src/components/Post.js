import {Alert, Container, Grid} from "@material-ui/core";
import * as React from "react";
import {
    CommentButton,
    CommentInput,
    PostAuthor,
    PostBody,
    PostComment,
    PostItem,
    PostItems,
    PostTitle
} from "../css/posts";
import {CommentAuthor, CommentBody, CommentItem, CommentList} from "../css/comments";
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {get_post} from "../actions/posts";
import {logout} from "../actions/auth";
import {Redirect} from "react-router-dom";
import {add_comment, get_all_comments} from "../actions/comments";

const Post = ({match,isAuthenticated, add_comment}) => {
    const [formData, setFormData] = useState({
        body: ''
    });
    const { postId } = match.params
    const post = useSelector(state => state.posts.singlePost);
    const comments = useSelector(state => state.comments.allComments);
    const postComments = comments.filter(comment => comment.post === postId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_post(postId));
        dispatch(get_all_comments());
    }, [dispatch, postId]);

    const { body } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        let data = {
            post: postId,
            body: body
        };
        add_comment(data);
        setFormData(previousState => {
          return { ...previousState,  body: "" }
        });
    };

    if (!isAuthenticated) {
        dispatch(logout());
        return <Redirect to='/' />
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
                                 <form onSubmit={e => onSubmit(e)}>
                                    <CommentInput
                                        type='text'
                                        fullWidth={true}
                                        name='body'
                                        value={body}
                                        onChange={e => onChange(e)}
                                        label="Comment"
                                        required/>
                                    <CommentButton type="submit"><p>Comment</p></CommentButton>
                                 </form>
                             </PostComment>
                         </PostItem>
                     </PostItems>
                     <CommentList>
                         {postComments && postComments.map((comment) =>
                             <CommentItem>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <CommentAuthor>{comment.user}</CommentAuthor>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CommentBody>{comment.body}</CommentBody>
                                    </Grid>
                                </Grid>
                            </CommentItem>
                         )}
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

export default connect(mapStateToProps, { add_comment })(Post);