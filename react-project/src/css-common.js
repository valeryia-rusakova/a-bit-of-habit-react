import styled from "styled-components";


export const HeaderWrapper = styled.header`
    font-family: Montserrat;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #868AA7;
    text-align: center;
`

export const FormFieldWrapper = styled.div`
    background: #868AA7;
    text-align: center;
    margin-block: 28px;
    border-radius: 25px;
`

export const InputWrapper = styled.input`
    font-family: Montserrat;
    font-size: 14px;
    color: #F8F9F9;
    background: #868AA7;
    padding: 8px;
    margin: 8px;
    border: none;
    outline:none;
    ::placeholder{
    color: #F8F9F9;};
`

export const FooterWrapper = styled.div`
    font-family: Montserrat;
    font-size: 12px;
    color: #4F4B6D;
    float: left;
    margin-top: 11px;
    p a{
    color: #EDA794;
    }
`

export const SpanWrapper = styled.span`
    margin-left: 33px;
    margin-right: 10px;
    vertical-align: middle;
    svg{
    color: #F8F9F9;
    }
`

export const LoginButton = styled.button`
    background-color: #EDA794;
    width: 45px;
    height: 45px;
    float: right;
    border-radius: 8px;
    border: none;
    margin-top: 5px;
    svg{
    color: #F8F9F9;
    }
`

export const LoginForm = styled.div`
    width: 27%;
    padding: 10px;
    margin: auto;
    margin-block: 15%;
`