import {Container, Grid, MenuItem, Select} from "@material-ui/core";
import * as React from "react";
import {HabitsList} from "../mocks/HabitsList";
import {AddButton, DropDown, HabitChoice, HabitItem, HabitsItems} from "../css/habits";



const habitItems = HabitsList.map((habit)=>{
    return(
    <Grid item xs={12}>
         <HabitItem container alignItems="center">
             <Grid item xs={12} md={2} className="ImageContainer"><div className="image"><img src={habit.image} alt="habit"/></div></Grid>
             <Grid item xs={12} md={10}>
                 <Grid container justifyContent="space-between">
                     <Grid item className="habitName"><p>{habit.name}</p></Grid>
                     <Grid item><AddButton><p>Add to list</p></AddButton></Grid>
                 </Grid>
                 <Grid item className="habitDescription"><p>{habit.description}</p></Grid>
             </Grid>
         </HabitItem>
    </Grid>
    );
});

function Habits() {
    return (
        <React.Fragment>
            <Grid item>
                 <Container maxWidth="lg">
                     <Grid container justifyContent="flex-end">
                         <DropDown item xs={2}>
                            <HabitChoice fullWidth>
                                      <Select defaultValue={'Healthy'}>
                                        <MenuItem value={'Healthy'}>Healthy</MenuItem>
                                        <MenuItem value={'Helpful'}>Helpful</MenuItem>
                                      </Select>
                            </HabitChoice>
                         </DropDown>
                         <HabitsItems container spacing={4}>
                             {habitItems}
                         </HabitsItems>
                     </Grid>
                 </Container>
            </Grid>
        </React.Fragment>
    );
}

export default Habits;