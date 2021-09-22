import {Component} from "react";
import {AccountCircle, Email, Lock} from "@material-ui/icons";
import {East} from "@mui/icons-material";
import {
    FooterWrapper,
    FormFieldWrapper,
    HeaderWrapper,
    SpanWrapper,
    InputWrapper,
    SignupForm,
    SignupButton
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
            <SignupForm container onSubmit={this.handleSubmit}>
                <HeaderWrapper>
                     Sign up
                </HeaderWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><AccountCircle/></SpanWrapper>
                    <InputWrapper type={"text"} placeholder="Enter username"/>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><Email/></SpanWrapper>
                    <InputWrapper type={"email"} placeholder="Enter email"/>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><Lock/></SpanWrapper>
                    <InputWrapper type={"password"} placeholder="Enter password"/>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <SpanWrapper><Lock/></SpanWrapper>
                    <InputWrapper type={"password"} placeholder="Confirm password"/>
                </FormFieldWrapper>
                <FooterWrapper>
                    <p>Already have an account? <a href={'/login'}> Sign in</a></p>
                </FooterWrapper>
                <SignupButton>
                    <p>Sign up</p><East/>
                </SignupButton>
            </SignupForm>
        )
    }
}
