import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {PostBody, PostButton, PostContainer, PostItem, PostTitle} from "../css/posts";
import {Link} from "react-router-dom";
import {
    PersonalInfo,
    TitleInfoBlock,
    TotalAchievements
} from "../css/profile";
import {PostsList} from "../mocks/PostsList";
import {BodyInput, NewBody, NewPostButton, NewPostWrapper, NewTitle, TitleInput} from "../css/personalPosts";


const postItems = PostsList.map((post)=>{
    return(
    <PostItem item xs={12}>
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
                    <Link to="/post">Edit</Link>
                </p>
            </PostButton>
            <PostButton>
                <p>
                    <Link to="/post">Delete</Link>
                </p>
            </PostButton>
         </Grid>
    </PostItem>
    );
});

function NewPost() {
    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                      <Grid container spacing={4}>
                          <Grid item lg={6} xs={12} className="fixedBlock">
                              <PersonalInfo container>
                                    <TitleInfoBlock container>
                                        <Grid item sm={12} xs={12}><p className="username">Aleria</p></Grid>
                                        <Grid item sm={5} xs={12}><p className="username">Rusakova Valeryia</p></Grid>
                                        <Grid item sm={7} xs={12}><p className="email">valeria.rusakova953@gmail.com</p></Grid>
                                    </TitleInfoBlock>
                                    <TotalAchievements item>
                                        <p>Achievements: 11</p>
                                    </TotalAchievements>
                              </PersonalInfo>
                              <NewPostWrapper item>
                                  <p className="title">Would you like to add a new post?</p>
                                  <NewTitle item>
                                      <TitleInput label="Enter the title" fullWidth="true"/>
                                  </NewTitle>
                                  <NewBody item>
                                      <BodyInput label="What would you like to write?" fullWidth="true" multiline
                                      rows={6}
                                      rowsMax={10}/>
                                  </NewBody>
                                  <NewPostButton>
                                      <p>
                                          <Link to="/post">Post</Link>
                                      </p>
                                  </NewPostButton>
                              </NewPostWrapper>
                          </Grid>
                          <Grid item lg={6} xs={12}>
                             <PostContainer container>
                                 {postItems}
                             </PostContainer>
                          </Grid>
                     </Grid>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default NewPost;