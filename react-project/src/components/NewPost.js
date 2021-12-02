import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {
    PersonalInfo,
    TitleInfoBlock,
    TotalAchievements
} from "../css/profile";
import {
    BodyInput,
    NewBody,
    NewPostButton,
    NewPostWrapper,
    NewTitle,
    TitleInput
} from "../css/personalPosts";
import {connect, useSelector} from "react-redux";
import {useState} from "react";
import {add_post} from "../actions/posts";
import {Redirect} from "react-router-dom";
import {logout} from "../actions/auth";
import PersonalPostsList from "./PersonalPostsList";



function NewPost({add_post, isAuthenticated}) {
    const currentUser= useSelector(state => state.auth.user);

    const [formData, setFormData] = useState({
        header: '',
        body: ''
    });

    const { header, body } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        let data = {
            header: header,
            body: body
        };
        add_post(data);
        setFormData(previousState => {
          return { ...previousState, header: "", body: "" }
        });
    };

    if (!isAuthenticated) {
        logout();
        return <Redirect to='/login' />
    }
    return (
        <React.Fragment>
            <Grid item>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item lg={6} xs={12} className="fixedBlock">
                            <PersonalInfo container>
                                <TitleInfoBlock container>
                                    <Grid item sm={6} xs={12}><p className="username">{currentUser.username}</p>
                                    </Grid>
                                    <Grid item sm={6} xs={12}><p className="email">{currentUser.email}</p></Grid>
                                </TitleInfoBlock>
                                <TotalAchievements item>
                                    <p>Achievements: 11</p>
                                </TotalAchievements>
                            </PersonalInfo>
                            <NewPostWrapper onSubmit={e => onSubmit(e)}>
                                <p className="title">Would you like to add a new post?</p>
                                <NewTitle item>
                                    <TitleInput
                                        type='text'
                                        name='header'
                                        value={header}
                                        onChange={e => onChange(e)}
                                        label="Enter the title"
                                        fullWidth={true}
                                        required/>
                                </NewTitle>
                                <NewBody item>
                                    <BodyInput
                                        label="What would you like to write?"
                                        fullWidth={true}
                                        name='body'
                                        value={body}
                                        onChange={e => onChange(e)}
                                        required
                                        multiline
                                        rows={6}
                                        rowsMax={10}/>
                                </NewBody>
                                <NewPostButton type='submit'>
                                    <p>Post</p>
                                </NewPostButton>
                            </NewPostWrapper>
                        </Grid>
                        <PersonalPostsList/>
                    </Grid>
                </Container>
            </Grid>
        </React.Fragment>
    );
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { add_post })(NewPost);