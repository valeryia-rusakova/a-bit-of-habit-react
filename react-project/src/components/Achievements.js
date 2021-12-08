import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {AchievementItem, AchievementsItems} from "../css/achievements";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {get_user_achievements} from "../actions/achievements";


const Achievements = () => {
    const userAchievements = useSelector(state => state.achievements.userAchievements);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_user_achievements())
    }, [dispatch]);

    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <AchievementsItems container spacing={4}>
                         {userAchievements && userAchievements.map((item) =>
                         <Grid item lg={6} xs={12}>
                             <AchievementItem container alignItems="center" justifyContent="space-around">
                                 <Grid item xs={3} className="ImageContainer">
                                     <div className="image-wrapper">
                                         <div className="image" dangerouslySetInnerHTML={{ __html: `${item.achievement.image}` }} />
                                         </div>
                                 </Grid>
                                 <Grid item xs>
                                     <p className="achievementLevel">{item.achievement.name}</p>
                                     <p className="achievementDescription">{item.description}</p>
                                 </Grid>
                             </AchievementItem>
                        </Grid>)}
                     </AchievementsItems>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Achievements;