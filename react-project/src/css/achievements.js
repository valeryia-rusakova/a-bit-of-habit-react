import styled from "styled-components";
import {Grid} from "@material-ui/core";

export const AchievementsItems = styled(Grid)`
    margin-top: 6rem;
    margin-bottom: 5rem;
`

export const AchievementItem = styled(Grid)`
    display: flex;
    background: var(--default-white-color);
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1rem;
    color:var(--main-dark-color);
    padding-block: 0.6rem;
    .ImageContainer{
        text-align: -webkit-center;
    }
    .image{
        margin-inline-start: 1.4rem;
        position:relative;
        overflow:hidden;
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
    .achievementLevel{
        margin-top: 0;
        margin-bottom: 0.75rem;
    }
    .achievementDescription{
        margin-top: 0;
        margin-bottom: 0.75rem;
    }
    @media (min-width: 531px) and (max-width: 600px) {
        .ImageContainer{
            text-align: -webkit-left;
        }
    }
    @media screen and (max-width: 530px) {
        font-size: 0.75rem;
        .ImageContainer{
            text-align: -webkit-center;
        }
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
        .achievementLevel{
            margin-inline: 0.5rem;
        }
        .achievementDescription{
            margin-inline: 0.5rem;
        }
    }
`