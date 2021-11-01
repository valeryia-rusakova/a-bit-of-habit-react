import * as React from 'react';
import {Component} from "react";
import {Container, Grid} from "@material-ui/core";
import {AccountCircle, Lock} from "@material-ui/icons";
import {East} from "@mui/icons-material";
import {
    FooterButton, FooterLink,
    FormFieldWrapper,
    HeaderWrapper,
    InputWrapper,
    LinkWrapper,
    LoginButton,
    LoginForm,
    SpanWrapper
} from "../css/auth";
import {Link} from "react-router-dom";


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
            <Container maxWidth="xs">
                <LoginForm container>
                    <Grid item xs={12}>
                        <HeaderWrapper>
                            Sign in
                        </HeaderWrapper>
                    </Grid>
                    <Grid item xs={12}>
                        <FormFieldWrapper>
                            <SpanWrapper><AccountCircle/></SpanWrapper>
                            <InputWrapper type={"text"} placeholder="    Enter username"/>
                        </FormFieldWrapper>
                    </Grid>
                    <Grid item xs={12}>
                        <FormFieldWrapper>
                            <SpanWrapper><Lock/></SpanWrapper>
                            <InputWrapper type={"password"} placeholder="     Enter password"/>
                        </FormFieldWrapper>
                    </Grid>
                    <Grid container >
                        <FooterLink item xs={8}>
                            <LinkWrapper>
                                <p>New in A bit of Habit? <Link to="/signup"> Create account</Link></p>
                            </LinkWrapper>
                        </FooterLink>
                        <FooterButton item xs={4}>
                            <LoginButton>
                                    <Link to="/signup"><East/></Link>
                            </LoginButton>
                        </FooterButton>
                    </Grid>
                </LoginForm>
            </Container>
        )
    }
}