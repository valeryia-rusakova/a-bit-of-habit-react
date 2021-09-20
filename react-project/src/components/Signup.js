import {Component} from "react";
import {AccountCircle, Email, Lock} from "@material-ui/icons";
import {East} from "@mui/icons-material";
import styled from "styled-components";
import {
    FooterWrapper,
    FormFieldWrapper,
    HeaderWrapper,
    SpanWrapper,
    InputWrapper
} from "../css-common";


const FormWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 409px;
    height: 433px;
    transform: translate(-50%, -50%);
`
const ButtonWrapper = styled.button`
    background-color: #EDA794;
    width: 109px;
    height: 52px;
    float: right;
    display: flex;
    align-items: center;
    margin-block: 5px;
    border-radius: 8px;
    border: none;
    p { 
        display: block;
        margin: 8px;
        text-decoration: none;
        color: #F8F9F9;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    } 
`


export default class Signup extends Component{
    constructor(props) {
        super(props);
            this.handleUsernameChange = this.handleUsernameChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
            username: '',
            email: '',
            password: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render(){
         return(
            <FormWrapper container onSubmit={this.handleSubmit}>
                <HeaderWrapper>
                     Sign up
                </HeaderWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><AccountCircle style={{ color: '#F8F9F9'}}/></SpanWrapper>
                    <InputWrapper type={"text"} placeholder="Enter username"/>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><Email style={{ color: '#F8F9F9'}}/></SpanWrapper>
                    <InputWrapper type={"email"} placeholder="Enter email"/>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><Lock style={{ color: '#F8F9F9' }} /></SpanWrapper>
                    <InputWrapper type={"password"} placeholder="Enter password"/>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><Lock style={{ color: '#F8F9F9' }} /></SpanWrapper>
                    <InputWrapper type={"password"} placeholder="Confirm password"/>
                </FormFieldWrapper>
                <FooterWrapper>
                    <p>Already have an account? <a href={'/login'} style={{color: '#EDA794'}}> Sign in</a></p>
                </FooterWrapper>
                <ButtonWrapper>
                    <p>Sign up</p><East style={{ color: '#F8F9F9' }}/>
                </ButtonWrapper>
            </FormWrapper>
        )
    }
}
