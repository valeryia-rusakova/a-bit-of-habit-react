import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {AchievementsList} from "../mocks/AchievementsList";
import {AchievementItem, AchievementsItems} from "../css/achievements";


const achievementItems = AchievementsList.map((achievement)=>{
    return(
    <Grid item lg={6} xs={12}>
         <AchievementItem container alignItems="center" justifyContent="space-around">
             <Grid item xs={3} className="ImageContainer"><div className="image"><img src={achievement.image} alt="habit"/></div></Grid>
             <Grid item xs>
                 <p className="achievementLevel">{achievement.level}</p>
                 <p className="achievementDescription">{achievement.description}</p>
             </Grid>
         </AchievementItem>
    </Grid>
    );
});

function Achievements() {
    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <AchievementsItems container spacing={4}>
                         {achievementItems}
                     </AchievementsItems>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Achievements;