import {useState} from "react";
import {AccountCircle, Email, Lock} from "@material-ui/icons";
import {East} from "@mui/icons-material";
import {Container, Grid} from "@material-ui/core";
import * as React from "react";
import {Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import {signup} from "../actions/auth";
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
} from "../css/auth";


const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { username, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(username, email, password, re_password);
            setAccountCreated(true);
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    return(
        <Container maxWidth="xs">
            <SignupForm onSubmit={e => onSubmit(e)}>
                <Grid item xs={12}>
                    <HeaderWrapper>
                        Sign up
                    </HeaderWrapper>
                </Grid>
                <Grid item xs={12}>
                    <FormFieldWrapper>
                        <SpanWrapper><AccountCircle/></SpanWrapper>
                        <InputWrapper
                            name='username'
                            value={username}
                            onChange={e => onChange(e)}
                            placeholder=" Enter username"
                            required/>
                    </FormFieldWrapper>
                </Grid>
                <Grid item xs={12}>
                    <FormFieldWrapper>
                        <SpanWrapper><Email/></SpanWrapper>
                        <InputWrapper
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            placeholder=" Enter email"
                            required/>
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
                            placeholder=" Enter password"
                            required/>
                    </FormFieldWrapper>
                </Grid>
                <Grid item xs={12}>
                    <FormFieldWrapper>
                        <SpanWrapper><Lock/></SpanWrapper>
                        <InputWrapper
                            type='password'
                            name='re_password'
                            value={re_password}
                            onChange={e => onChange(e)}
                            placeholder=" Confirm password"
                        />
                    </FormFieldWrapper>
                </Grid>
                <Grid container >
                    <FooterLink item xs={6}>
                        <LinkWrapper>
                            <p>Already have an account?<br/>
                            <Link to="/login"> Sign in</Link>
                            </p>
                        </LinkWrapper>
                    </FooterLink>
                <FooterButton item xs={6}>
                    <SignupButton type='submit'>
                        <p>Sign up</p><East/>
                    </SignupButton>
                </FooterButton>
                </Grid>
            </SignupForm>
        </Container>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);