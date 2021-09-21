import * as React from 'react';
import {Component} from "react";
import {AccountCircle, Lock} from "@material-ui/icons";
import {East} from "@mui/icons-material";
import "../css-common";
import {
    FooterWrapper,
    FormFieldWrapper,
    HeaderWrapper,
    SpanWrapper,
    InputWrapper, LoginButton, LoginForm
} from "../css-common";


export default class Login extends Component{
    constructor(props) {
        super(props);
            this.handleUsernameChange = this.handleUsernameChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
            username: '',
            password: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render(){
         return(
            <LoginForm container onSubmit={this.handleSubmit}>
                <HeaderWrapper>
                     Sign in
                </HeaderWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><AccountCircle/></SpanWrapper>
                    <InputWrapper type={"text"} placeholder="Enter username"/>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><Lock/></SpanWrapper>
                    <InputWrapper type={"password"} placeholder="Enter password"/>
                </FormFieldWrapper>
                <FooterWrapper>
                    <p>New in A bit of Habit? <a href={'/signup'}> Create account</a></p>
                </FooterWrapper>
                <LoginButton>
                        <East/>
                </LoginButton>
            </LoginForm>
        )
    }
}