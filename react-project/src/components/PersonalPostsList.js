import {Dialog, DialogActions, DialogContent, Grid} from "@material-ui/core";
import {PostBody, PostButton, PostContainer, PostItem, PostTitle} from "../css/posts";
import {delete_post, get_all_posts, update_post} from "../actions/posts";
import {BodyInput, DialogTitleWrapper, NewBody, NewTitle, TitleInput} from "../css/personalPosts";
import * as React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";


function PersonalPostsList({update_post}) {
    const [formData, setFormData] = useState({
        header: '',
        body: ''
    });
    const [id, setId] = useState({
        id: ''
    });
    const { header, body } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        let data = {
            header: header,
            body: body
        };
        update_post(id, data);
        setFormData(previousState => {
          return { ...previousState, header: "", body: "" }
        });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_posts());
        // eslint-disable-next-line
    }, []);

    const currentUser= useSelector(state => state.auth.user);
    const posts = useSelector(state => state.posts.allPosts);
    const personalPosts = posts.filter(post => post.user === currentUser.username);

    const [open, setOpen] = useState(false);

    const handleClickOpen = id => {
        setId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Grid item lg={6} xs={12}>
                <PostContainer container>
                    {personalPosts && personalPosts.map((post) =>
                        <PostItem item xs={12} key={post.id}>
                            <PostTitle item xs={12}>
                                <p>{post.header}</p>
                            </PostTitle>
                            <PostBody item>
                                <p>{post.body}</p>
                            </PostBody>
                            <Grid item>
                                <PostButton onClick={() => handleClickOpen(post.id)}>
                                    <p>Edit</p>
                                </PostButton>
                                <PostButton onClick={() => dispatch(delete_post(post.id))}>
                                    <p>Delete</p>
                                </PostButton>
                            </Grid>
                        </PostItem>)}
                </PostContainer>
            </Grid>
            <Dialog open={open} onClose={handleClose} fullWidth={'sm'}>
                <form onSubmit={e => onSubmit(e)}>
                    <DialogTitleWrapper>Edit post</DialogTitleWrapper>
                    <DialogContent>
                        <NewTitle item>
                            <TitleInput
                                type='text'
                                name='header'
                                value={header}
                                onChange={e => onChange(e)}
                                label="Enter the title"
                                fullWidth="true"/>
                        </NewTitle>
                        <NewBody item>
                            <BodyInput
                                label="What would you like to write?"
                                fullWidth="true"
                                name='body'
                                value={body}
                                onChange={e => onChange(e)}
                                multiline
                                rows={6}
                                rowsMax={10}/>
                        </NewBody>
                    </DialogContent>
                    <DialogActions>
                        <PostButton onClick={handleClose}><p>Cancel</p></PostButton>
                        <PostButton onClick={handleClose} type='submit' ><p>Post</p></PostButton>
                        <ToastContainer />
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}

export default connect(null, { update_post })(PersonalPostsList);