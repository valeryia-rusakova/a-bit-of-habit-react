import styled from "styled-components";
import "./colors.css";
import {Grid} from "@material-ui/core";

export const TitleBlock = styled(Grid)`
    text-align: left;
    margin-top: 1.125rem;
    margin-bottom: 0.525rem;
    max-width: inherit;
    background:var(--extra-bg-title-color);
    p{
        color: var(--main-light-color);
        font-family: Montserrat;
        font-weight: bold;
        font-size: 1rem;
        margin-left: 0.6rem;
        margin-block: 0.5rem;
    }
    @media screen and (max-width: 510px) {
        p{ font-size: 0.8rem; }
    }
`

export const TitleInfoBlock = styled(Grid)`
    text-align: left;
    margin-top: 1.125rem;
    max-width: inherit;
    background:var(--extra-bg-title-color);
    color: var(--main-light-color);
    font-family: Montserrat;
    font-weight: bold;
    font-size: 1rem;
    .username{
        margin-left: 0.6rem;
        margin-block: 0.2rem;
    }
    .email{
        text-align:end;
        margin-left: 0;
        margin-right: 0.6rem;
        margin-block: 0.2rem;
    }
    @media screen and (max-width: 599px) {
        p{ 
            font-size: 0.85rem; 
        }
        .email{
            margin-left:0.6rem;
            text-align:left;
        }
        .username{
            font-size: 1rem;
        }
    }
`

export const CheckButton = styled.button`
    float: right;
    border-radius: 0.5rem;
    margin-inline-start: 3rem;
    margin-inline-end: 1.4rem;
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
    @media screen and (max-width: 510px) {
        margin-inline-start: 0;
        margin-inline-end: 0.5rem;
        font-size: 0.75rem;
    }

`

export const HabitsProgress = styled(Grid)`
    margin-top: 6rem;
    margin-bottom: 3rem;
    background: var(--default-white-color);
     @media screen and (max-width: 1200px) {
        margin-top: 0.5rem;
    }
`

export const HabitItem = styled(Grid)`
    display: flex;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1rem;
    color:var(--main-dark-color);
    margin-block: 0.6rem;
    .habitTitle{
        text-align:left;
        margin-inline-end: auto;
        margin-inline-start:0.4rem;
    }
    .image{
        position:relative;
        overflow:hidden;
        margin-inline-start: 1.4rem;
        border-radius: 6.25rem;
        width: 6.25rem;
        height: 6.25rem;
        background: var(--default-white-color);
        border: 0.25rem solid var(--main-bg-title-color);
        box-sizing: border-box;
    }    
    img{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);  
    }
    @media screen and (max-width: 510px) {
        font-size: 0.75rem;
        .image{
            margin-inline: 0.5rem;
            max-width:3.5rem;
            width: 3.5rem;
            height: 3.5rem;
            border: 0.15rem solid var(--main-bg-title-color);
        } 
        img{
            width: 2rem;
            height: auto;
        }
        .habitTitle{
            margin-inline-start: 0.6rem;
        }   
    }

`

export const PersonalInfo = styled(Grid)`
    margin-top: 6rem;
    background: var(--default-white-color);
    p{
        fon
    }
    .info{
        display: flex;
        justify-content: space-between;
    }
`

export const TotalAchievements = styled(Grid)`
    color: var(--main-dark-color);
    font-family: Montserrat;
    font-weight: normal;
    font-size: 1rem;
    p{
        margin-left: 0.6rem;
        margin-block: 0.75rem;
    }
`