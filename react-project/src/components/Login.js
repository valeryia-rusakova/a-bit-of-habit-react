import * as React from 'react';
import {Component, useState} from "react";

import { connect } from 'react-redux';

import {Redirect} from "react-router-dom";
import { login } from '../actions/auth';
import {
    FooterButton,
    FooterLink,
    FormFieldWrapper,
    HeaderWrapper,
    InputWrapper,
    LinkWrapper, LoginButton,
    LoginForm,
    SpanWrapper
} from "../css/auth";
import {Container, Grid} from "@material-ui/core";
import {AccountCircle, Lock} from "@material-ui/icons";
import {East} from "@mui/icons-material";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to='/profile' />
    }

    return(
        <Container maxWidth="xs">
            <LoginForm onSubmit={e => onSubmit(e)}>
                <Grid item xs={12}>
                    <HeaderWrapper>
                        Sign in
                    </HeaderWrapper>
                </Grid>
                <Grid item xs={12}>
                    <FormFieldWrapper>
                        <SpanWrapper><AccountCircle/></SpanWrapper>
                        <InputWrapper
                            type='email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                            placeholder="    Enter username"/>
                    </FormFieldWrapper>
                </Grid>
                <Grid item xs={12}>
                    <FormFieldWrapper>
                        <SpanWrapper><Lock/></SpanWrapper>
                        <InputWrapper
                            type='password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                            placeholder="     Enter password"/>
                    </FormFieldWrapper>
                </Grid>
                <Grid container >
                    <FooterLink item xs={8}>
                        <LinkWrapper>
                            <p>New in A bit of Habit? <a href={'/signup'}> Create account</a></p>
                        </LinkWrapper>
                    </FooterLink>
                    <FooterButton item xs={4}>
                        <LoginButton type='submit'><East/></LoginButton>
                    </FooterButton>
                </Grid>
            </LoginForm>
        </Container>
)

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);