import styled from "styled-components";
import {Grid, TextField} from "@material-ui/core";

export const PostItem = styled(Grid)`
    margin-block: 2rem;
    background: var(--default-white-color);
`
export const PostContainer = styled(Grid)`
    margin-top: 4rem;
    margin-bottom:3rem;
`

export const PostItems = styled(Grid)`
    margin-top: 4rem;
`

export const PostTitle = styled(Grid)`
    text-align: justify;
    background:var(--extra-bg-title-color);
    p{
        color: var(--main-light-color);
        font-family: Montserrat;
        font-weight: bold;
        font-size: 1rem;
        margin-inline: 0.6rem;
        margin-block: 0.6rem;
        padding-block:0.6rem;
    }
`
export const PostComment = styled(Grid)`
  color: red;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 0.875rem;
  padding-block: 0.5rem;
  margin-inline: 0.6rem;
  margin-block: 0.6rem;
  background:var(--white);
`

export const CommentInput = styled(TextField)({
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

export const PostBody = styled(Grid)`
    text-align: justify;
    margin-top: 1.125rem;
    margin-bottom: 0.525rem;
    p{
        color: var(--main-bg-title-color);
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1rem;
        margin-inline: 0.6rem;
        margin-block: 0.6rem;
    }
`

export const PostAuthor = styled(Grid)`
    text-align: left;
    p{
        color: var(--main-dark-color);
        font-family: Montserrat;
        font-weight: 600;
        font-style: normal;
        font-size: 1rem;
        margin-left: 0.6rem;
        margin-top: 0.5rem;
        margin-bottom: 0;
    }
`

export const PostButton = styled.button`
    float: left;
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
    width: 6.5rem;
    height: 2.375rem;
    font-size: 0.875rem;
    p{
        margin: 0;
        text-align:center;
        a{
          text-decoration: none;
          color:var(--main-light-color);
        }
    }
    :hover{
        background: var(--button-hover-color);
    }

`