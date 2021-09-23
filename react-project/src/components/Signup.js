import {Component} from "react";
import {AccountCircle, Email, Lock} from "@material-ui/icons";
import {East} from "@mui/icons-material";
import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {
    FormFieldWrapper,
    HeaderWrapper,
    SpanWrapper,
    InputWrapper,
    FooterLink,
    LinkWrapper,
    FooterButton,
    SignupButton,
    SignupForm
} from "../css-common";



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
            <Container maxWidth="xs">
                <SignupForm container>
                    <Grid item xs={12}>
                        <HeaderWrapper>
                            Sign up
                        </HeaderWrapper>
                    </Grid>
                    <Grid item xs={12}>
                        <FormFieldWrapper>
                            <SpanWrapper><AccountCircle/></SpanWrapper>
                            <InputWrapper type={"text"} placeholder=" Enter username"/>
                        </FormFieldWrapper>
                    </Grid>
                    <Grid item xs={12}>
                        <FormFieldWrapper>
                            <SpanWrapper><Email/></SpanWrapper>
                            <InputWrapper type={"email"} placeholder=" Enter email"/>
                        </FormFieldWrapper>
                    </Grid>
                    <Grid item xs={12}>
                        <FormFieldWrapper>
                            <SpanWrapper><Lock/></SpanWrapper>
                            <InputWrapper type={"password"} placeholder=" Enter password"/>
                        </FormFieldWrapper>
                    </Grid>
                    <Grid item xs={12}>
                        <FormFieldWrapper>
                            <SpanWrapper><Lock/></SpanWrapper>
                            <InputWrapper type={"password"} placeholder=" Confirm password"/>
                        </FormFieldWrapper>
                    </Grid>
                    <Grid container >
                        <FooterLink item xs={6}>
                            <LinkWrapper>
                                <p>Already have an account?<br/>
                                <a href={'/login'}> Sign in</a>
                                </p>
                            </LinkWrapper>
                        </FooterLink>
                    <FooterButton item xs={6}>
                        <SignupButton>
                            <p>Sign up</p><East/>
                        </SignupButton>
                    </FooterButton>
                    </Grid>
                </SignupForm>
            </Container>
        )
        }
    }