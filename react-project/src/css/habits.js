import styled from "styled-components";
import {FormControl, Grid} from "@material-ui/core";

export const HabitItem = styled(Grid)`
    background: var(--default-white-color);
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1rem;
    color:var(--main-dark-color);
    padding-block: 0.6rem;
    .ImageContainer{
        align-self: center;
    }
    .habitDescription{
        font-weight:400;
        text-align: justify;
        margin-inline-end: 1rem;
    }
    .image-wrapper{
        margin-inline-start: 1.4rem;
        position:relative;
        overflow:hidden;
        border-radius: 6.25rem;
        width: 6.25rem;
        height: 6.25rem;
        background: var(--default-white-color);
        border: 0.25rem solid var(--main-bg-title-color);
        box-sizing: border-box;
        .image{
          position:absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);  
        }
    }    
    
    @media screen and (max-width: 900px) {
        font-size: 0.75rem;
        text-align: -webkit-center;
        .image{
            margin-inline-start: 0;
        }
        .habitName{
         margin-inline: 0.5rem;
         p{
            margin-block: 1.2rem; 
         }
        }
        .habitDescription{
            margin-inline: 0.5rem;
        }
    }
`

export const HabitsItems = styled(Grid)`
    margin-top: 0.1rem;
    margin-bottom: 5rem;
`

export const DropDown = styled(Grid)`
    margin-top: 6rem;
    float: right;
`

export const AddButton = styled.button`
    float: right;
    border-radius: 0.5rem;
    margin-inline: 1rem;
    margin-block: 0.575rem;
    border: none;
    cursor: pointer;
    text-align: center;
    background:var(--main-btn-color);
    color:var(--main-light-color);
    font-family: Montserrat;
    font-weight: 400;
    weight: 7.25rem;
    height: 2.375rem;
    font-size: 0.875rem;
    p{
        margin: 0;
        text-align:center;
    }
    :hover{
        background: var(--button-hover-color);
    }
    @media screen and (max-width: 900px) {
        margin-inline-start: 0;
        margin-inline-end: 0.5rem;
        font-size: 0.75rem;
    }
`

export const HabitChoice = styled(FormControl)({
'& .MuiOutlinedInput-input': {
    backgroundColor: 'var(--extra-bg-title-color)',
    color: 'var(--main-light-color)',
    'font-family': 'Montserrat',
    'font-weight': '400',
    'font-size': '1rem',
  },
  '& label.Mui-focused': {
    color: 'var(--main-bg-title-color)',
    'font-family': 'Montserrat',
  },
  '& label': {
    color: 'var(--main-bg-title-color)',
    'font-family': 'Montserrat',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '0',
    },
    '&:hover fieldset': {
      borderWidth: '0',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '0',
    },
  },
  '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon' :{
    color: 'var(--main-light-color)',
  },
  '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon' :{
    color: 'var(--main-light-color)',
  },
});
