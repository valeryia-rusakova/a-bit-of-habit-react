import {Container, Grid} from "@material-ui/core";
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
import {CommentAuthor, CommentBody, CommentContainer, CommentItem} from "../css/comments";

function Post() {
    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <PostItems container>
                         <PostItem item xs={12}>
                             <PostAuthor item xs={12}>
                                 <p>Valerya Rusakova</p>
                             </PostAuthor>
                             <PostTitle item xs={12}>
                                 <p>
                                     What are the effects of smoking?
                                 </p>
                             </PostTitle>
                             <PostBody item>
                                 <p>
                                     Smoking leads to disease and disability and harms nearly every organ of the body.
                                    More than 16 million Americans are living with a disease caused by smoking. For every person who dies because of smoking, at least 30 people live with a serious smoking-related illness. Smoking causes cancer, heart disease, stroke, lung diseases, diabetes, and chronic obstructive pulmonary disease (COPD), which includes emphysema and chronic bronchitis. Smoking also increases risk for tuberculosis, certain eye diseases, and problems of the immune system, including rheumatoid arthritis.

                                    Secondhand smoke exposure contributes to approximately 41,000 deaths among nonsmoking adults and 400 deaths in infants each year. Secondhand smoke causes stroke, lung cancer, and coronary heart disease in adults. Children who are exposed to secondhand smoke are at increased risk for sudden infant death syndrome, acute respiratory infections, middle ear disease, more severe asthma, respiratory symptoms, and slowed lung growth.
                                    How you become addicted

                                    As the nicotine levels in your body fade, your brain craves more dopamine. The longer you have been smoking, the more dopamine you need to feel good. You become dependent on nicotine.

                                    Once you are dependent on nicotine, without it you will have withdrawal symptoms. You may find it difficult to concentrate or feel nervous, restless, irritable or anxious.

                                    These two things — nicotine dependence and nicotine withdrawal — make you want to smoke more. You become addicted to tobacco.
                                 </p>
                             </PostBody>
                             <PostComment item xs={12} md={6}>
                                 <CommentInput  label="Comment" fullWidth="true"/>
                             </PostComment>
                         </PostItem>
                     </PostItems>
                     <CommentContainer>
                         <CommentItem item>
                             <CommentAuthor item>
                                Cameron Williamson
                             </CommentAuthor>
                             <CommentBody>
                                It's not that big a deal.
                             </CommentBody>
                         </CommentItem>
                         <CommentItem item>
                             <CommentAuthor item>
                                Wade Warren
                             </CommentAuthor>
                             <CommentBody>
                                It's not that big a deal.
                             </CommentBody>
                         </CommentItem>
                         <CommentItem item>
                             <CommentAuthor item>
                                Leslie Alexander
                             </CommentAuthor>
                             <CommentBody>
                                It's not that big a deal.
                             </CommentBody>
                         </CommentItem>
                     </CommentContainer>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Post;