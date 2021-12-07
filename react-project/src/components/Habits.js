import {Container, Grid, MenuItem, Select} from "@material-ui/core";
import * as React from "react";
import {AddButton, DropDown, HabitChoice, HabitItem, HabitsItems} from "../css/habits";
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {add_habit, get_all_habits} from "../actions/habits";
import {logout} from "../actions/auth";
import {Redirect} from "react-router-dom";


function Habits({isAuthenticated}) {
    const [type, setType] = useState('Healthy');
    const habits = useSelector(state => state.habits.allHabits);
    const dispatch = useDispatch();
    const filteredHabits = habits.filter(habit => habit.type === type.toUpperCase());

    const handleChange = (event) => {
        setType(event.target.value);
    };

    useEffect(() => {
        dispatch(get_all_habits());
    }, [dispatch]);

    if (!isAuthenticated) {
        dispatch(logout());
        return <Redirect to='/' />
    }

    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <Grid container justifyContent="flex-end">
                         <DropDown item xs={12} sm={6} md={3} lg={2}>
                             <HabitChoice fullWidth>
                                 <Select
                                     defaultValue={'Healthy'}
                                     value={type}
                                     onChange={handleChange}>
                                     <MenuItem value={'Healthy'}>Healthy</MenuItem>
                                     <MenuItem value={'Helpful'}>Helpful</MenuItem>
                                 </Select>
                             </HabitChoice>
                         </DropDown>
                         <HabitsItems container spacing={4}>
                             {filteredHabits && filteredHabits.map((habit) =>
                                 <Grid item xs={12}>
                                     <HabitItem container alignItems="center">
                                         <Grid item xs={12} md={2} className="ImageContainer">
                                             <div className="image-wrapper">
                                                 <div className="image" dangerouslySetInnerHTML={{ __html: `${habit.image}` }} />
                                             </div>
                                         </Grid>
                                         <Grid item xs={12} md={10}>
                                             <Grid container justifyContent="space-between">
                                                 <Grid item className="habitName"><p>{habit.name}</p></Grid>
                                                 <Grid item><AddButton onClick={() => dispatch(add_habit(habit.id))}><p>Add to list</p></AddButton></Grid>
                                             </Grid>
                                             <Grid item className="habitDescription"><p>{habit.description}</p></Grid>
                                         </Grid>
                                     </HabitItem>
                                </Grid>)}
                         </HabitsItems>
                     </Grid>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,)(Habits);