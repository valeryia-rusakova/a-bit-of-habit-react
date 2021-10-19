import styled from "styled-components";
import {Grid} from "@material-ui/core";

export const CommentItem = styled(Grid)`
    background: var(--default-white-color);
    padding-block:0.8rem;
`

export const CommentContainer = styled(Grid)`
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