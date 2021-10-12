import styled from "styled-components";
import {Grid} from "@material-ui/core";

export const PostItem = styled(Grid)`
    margin-block: 2rem;
    background: var(--default-white-color);
`
export const PostContainer = styled(Grid)`
    margin-top: 4rem;
    margin-bottom:3rem;
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

export const PostBody = styled(Grid)`
    text-align: justify;
    margin-top: 1.125rem;
    margin-bottom: 0.525rem;
    p{
        color: var(--main-bg-title-color);
        font-family: Montserrat;
        font-weight: 400;
        font-size: 0.875rem;
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
        margin-block: 0.5rem;
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

`