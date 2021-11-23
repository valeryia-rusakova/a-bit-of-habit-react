import styled from "styled-components";
import {Grid} from "@material-ui/core";
import "./colors.css";
import "./general.css";

export const HeaderWrapper = styled.header`
    font-family: Montserrat;
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--main-bg-title-color);
    text-align: center;
    margin-block: 0.5rem;
`

export const FormFieldWrapper = styled(Grid)`
    background: var(--main-bg-title-color);
    border-radius: 1.5625rem;
    margin-block: 0.875rem;
    text-align: center;

`

export const InputWrapper = styled.input`
    font-family: Montserrat;
    font-size: 0.875rem;
    color: var(--main-light-color);;
    background: var(--main-bg-title-color);
    padding: 0.5rem;
    margin: 0.5rem;
    border: none;
    outline:none;
    ::placeholder{
    color: var(--main-light-color);;
    align-text: center;};
`

export const LinkWrapper = styled.div`
    font-family: Montserrat;
    font-size: 0.75rem;
    color: var(--main-dark-color);;
    p a{
    color: var(--main-btn-color);
    }
`

export const SpanWrapper = styled.span`
    vertical-align: middle;
    svg{
    color: var(--main-light-color);
    }
`

export const LoginForm = styled.form`
     margin-block: 12rem;
`

export const FooterLink = styled(Grid)`
    text-align: left;
    margin-top: 0.3125rem;
`

export const FooterButton = styled(Grid)`
    text-align: right;
    margin-block: 0.3125rem;
`

export const LoginButton = styled.button`
    background-color: var(--main-btn-color);
    width: 2.8125rem;
    height: 2.8125rem;
    cursor: pointer;
    float: right;
    border-radius: 0.5rem;
    border: none;
    svg{
    color: var(--main-light-color);
    }
    :hover{
        background: var(--button-hover-color);
    }
`

export const SignupButton = styled.button`
    background-color: var(--main-btn-color);
    width: 6.8125rem;
    height: 3.25rem;
    align-items: center;
    display: flex;
    float: right;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    p { 
        display: block;
        margin: 0.5rem;   
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        a{
            text-decoration: none;
            color: var(--main-light-color);
        }
    }
    :hover{
        background: var(--button-hover-color);
    }
    svg{
    color: var(--main-light-color);
    } 
`

export const SignupForm = styled(Grid)`
     margin-block: 9rem;
`