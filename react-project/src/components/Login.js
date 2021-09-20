import * as React from 'react';
import {Component} from "react";
import {AccountCircle, Lock} from "@material-ui/icons";
import {East} from "@mui/icons-material";
import "../css-common";
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
    width: 411px;
    height: 268px;
    transform: translate(-50%, -50%);
`
const ButtonWrapper = styled.button`
    background-color: #EDA794;
    width: 45px;
    height: 45px;
    float: right;
    border-radius: 8px;
    border: none;
    margin-top: 5px;
`


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
            <FormWrapper container onSubmit={this.handleSubmit}>
                <HeaderWrapper>
                     Sign in
                </HeaderWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><AccountCircle style={{ color: '#F8F9F9'}}/></SpanWrapper>
                    <InputWrapper type={"text"} placeholder="Enter username"/>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><Lock style={{ color: '#F8F9F9' }} /></SpanWrapper>
                    <InputWrapper type={"password"} placeholder="Enter password"/>
                </FormFieldWrapper>
                <FooterWrapper>
                    <p>New in A bit of Habit? <a href={'/signup'} style={{color: '#EDA794'}}> Create account</a></p>
                </FooterWrapper>
                <ButtonWrapper>
                        <East style={{ color: '#F8F9F9' }}/>
                </ButtonWrapper>
            </FormWrapper>
        )
    }
}

