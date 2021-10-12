import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {
    CheckButton,
    HabitItem,
    HabitsProgress,
    PersonalInfo,
    TitleBlock,
    TitleInfoBlock,
    TotalAchievements
} from "../css/profile";
import SmokingHabit from "../images/smoking.svg";
import Sport from "../images/sport.svg";
import JunkFood from "../images/food.svg";
import Fruits from "../images/fruits.svg";
import Steps from "../images/steps.svg";

function Profile() {
    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <Grid container spacing={4}>
                         <Grid item lg={6} xs={12}>
                            <PersonalInfo container direction="column">
                                <TitleInfoBlock container>
                                    <Grid item sm={12} xs={12}><p className="username">Aleria</p></Grid>
                                    <Grid item sm={5} xs={12}><p className="username">Rusakova Valeryia</p></Grid>
                                    <Grid item sm={7} xs={12}><p className="email">valeria.rusakova953@gmail.com</p></Grid>
                                </TitleInfoBlock>
                                <TotalAchievements item>
                                    <p>Achievements: 11</p>
                                </TotalAchievements>
                            </PersonalInfo>
                        </Grid>
                         <Grid item lg={6} xs={12}>
                             <HabitsProgress container direction="column">
                                 <TitleBlock item>
                                     <p>In progress:</p>
                                 </TitleBlock>
                                 <HabitItem item lg={6} xs={12} alignItems="center" justifyContent="space-evenly">
                                     <Grid item xs={3} md={2} lg={3}><div className="image"><img src={SmokingHabit} alt="habit"/></div></Grid>
                                     <Grid item xs={5} md={6} lg={5}><p className="habitTitle">Smoking cigarettes</p></Grid>
                                     <Grid item xs={4} md={4} lg={4}><CheckButton><p>Daily check-in</p></CheckButton></Grid>
                                 </HabitItem>
                                 <HabitItem item lg={6} xs={12} alignItems="center">
                                     <Grid item xs={3} md={2} lg={3}><div className="image"><img src={Sport} alt="habit"/></div></Grid>
                                     <Grid item xs={5} md={6} lg={5}><p className="habitTitle">Sport</p></Grid>
                                     <Grid item xs={4} md={4} lg={4}><CheckButton><p>Daily check-in</p></CheckButton></Grid>
                                 </HabitItem>
                                 <HabitItem item lg={6} xs={12} alignItems="center">
                                     <Grid item xs={3} md={2} lg={3}><div className="image"><img src={JunkFood} alt="habit"/></div></Grid>
                                     <Grid item xs={5} md={6} lg={5}><p className="habitTitle">Junk food</p></Grid>
                                     <Grid item xs={4} md={4} lg={4}><CheckButton><p>Daily check-in</p></CheckButton></Grid>
                                 </HabitItem>
                                 <HabitItem item lg={6} xs={12} alignItems="center">
                                     <Grid item xs={3} md={2} lg={3}><div className="image"><img src={Fruits} alt="habit"/></div></Grid>
                                     <Grid item xs={5} md={6} lg={5}><p className="habitTitle">Fruits and Vegetables</p></Grid>
                                     <Grid item xs={4} md={4} lg={4}><CheckButton><p>Daily check-in</p></CheckButton></Grid>
                                 </HabitItem>
                                 <HabitItem item lg={6} xs={12} alignItems="center">
                                     <Grid item xs={3} md={2} lg={3}><div className="image"><img src={Steps} alt="habit"/></div></Grid>
                                     <Grid item xs={5} md={6} lg={5}><p className="habitTitle">10000 steps a day</p></Grid>
                                     <Grid item xs={4} md={4} lg={4}><CheckButton><p>Daily check-in</p></CheckButton></Grid>
                                 </HabitItem>
                             </HabitsProgress>
                         </Grid>
                     </Grid>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Profile;