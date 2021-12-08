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
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {daily_check, get_user_habits} from "../actions/habits";
import {get_user_achievements} from "../actions/achievements";


function Profile({user}) {
    const habits = useSelector(state => state.habits.userHabits);
    const achievements = useSelector(state => state.achievements.userAchievements);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_user_habits());
        dispatch(get_user_achievements());
    }, [dispatch]);


    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <Grid container spacing={4}>
                         <Grid item lg={6} xs={12}>
                            <PersonalInfo container direction="column">
                                <TitleInfoBlock container>
                                    <Grid item sm={6} xs={12}><p className="username">{user.username}</p></Grid>
                                    <Grid item sm={6} xs={12}><p className="email">{user.email}</p></Grid>
                                </TitleInfoBlock>
                                <TotalAchievements item>
                                    <p>Achievements: {achievements.length}</p>
                                </TotalAchievements>
                            </PersonalInfo>
                         </Grid>
                         <Grid item lg={6} xs={12}>
                             <HabitsProgress container direction="column">
                                 <TitleBlock item>
                                     <p>In progress:</p>
                                 </TitleBlock>
                                 {habits && habits.map((habit) =>
                                 <HabitItem item lg={6} xs={12} alignItems="center" justifyContent="space-evenly">
                                     <Grid item xs={3} md={2} lg={3}>
                                         <div className="image-wrapper">
                                             <div className="image" dangerouslySetInnerHTML={{ __html: `${habit.image}` }} />
                                         </div>
                                     </Grid>
                                     <Grid item xs={5} md={6} lg={5}><p className="habitTitle">{habit.name}</p></Grid>
                                     <Grid item xs={4} md={4} lg={4}><CheckButton onClick={() => dispatch(daily_check(habit.id))}><p>Daily check-in</p></CheckButton></Grid>
                                 </HabitItem>)}
                             </HabitsProgress>
                         </Grid>
                     </Grid>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps,)(Profile);