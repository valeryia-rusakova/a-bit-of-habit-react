import styled from "styled-components";
import {Grid, List, ListItem} from "@material-ui/core";

export const CommentItem = styled(ListItem)`
    background: var(--default-white-color);
    padding-block:0.8rem;
`

export const CommentList = styled(List)`
    margin-bottom:3rem;
`

export const CommentBody = styled(Grid)`
    text-align: justify;
    margin-inline: 0.6rem;
    margin-block:0.4rem;
    color: var(--main-dark-color);
    font-family: Montserrat;
    font-weight: 400;
    font-size: 1rem;
`

export const CommentAuthor = styled(Grid)`
    margin-inline: 0.6rem;
    color: var(--main-dark-color);
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1rem;
`