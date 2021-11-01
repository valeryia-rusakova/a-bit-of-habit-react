import styled from "styled-components";
import {Grid, TextField} from "@material-ui/core";

export const NewPostWrapper = styled(Grid)`
    background: var(--main-light-color);
    .title{
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1rem;
      margin-inline: 0.6rem;
      padding-top: 1rem;
      color: var(--main-dark-color);
    }
`

export const NewBody = styled(Grid)`
    background:var(--white);
    margin-inline: 0.6rem;
    margin-block: 0.6rem;
`
export const NewTitle = styled(Grid)`
    margin-inline: 0.6rem;
    margin-block: 0.6rem;
    background:var(--white);
`

export const NewPostButton = styled.button`
    border-radius: 0.5rem;
    margin-inline: 0.6rem;
    margin-top: 0.3rem;
    margin-bottom: 0.9rem;
    border: none;
    cursor: pointer;
    text-align: center;
    background:var(--main-btn-color);
    font-family: Montserrat;
    font-weight: 400;
    width: 5rem;
    height: 2.375rem;
    font-size: 0.875rem;
    p{
        margin: 0;
        text-align:center;
        a{
          text-decoration: none;
          color:var(--main-light-color);
          font-size: 0.875rem;
        }
    }
    :hover{
        background: var(--button-hover-color);
    }
`

export const TitleInput = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    color: 'var(--main-bg-title-color)',
    'font-family': 'Montserrat',
    'font-weight': '400',
    'font-size': '1rem',
  },
  '& label.Mui-focused': {
    color: 'var(--grey)',
    'font-family': 'Montserrat',
  },
  '& label': {
    color: 'var(--grey)',
    'font-family': 'Montserrat',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--main-bg-title-color)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--white)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--white)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--white)',
    },
  },
});

export const BodyInput = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    color: 'var(--main-bg-title-color)',
    'font-family': 'Montserrat',
    'font-weight': '400',
    'font-size': '1rem',
  },
  '& label.Mui-focused': {
    color: 'var(--grey)',
    'font-family': 'Montserrat',
  },
  '& label': {
    color: 'var(--grey)',
    'font-family': 'Montserrat',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--main-bg-title-color)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--white)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--white)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--white)',
    },
  },
});