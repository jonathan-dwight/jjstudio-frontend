import React from "react"; 
import { withRouter } from "react-router-dom";
import "./session.css"

const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password2: "",
            emailError: false,
            passwordError: false,
            password2Error: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;

        this.props.processForm(user).then(
            () => {
                this.props.closeModal();
                this.props.history.push('/beats') // need to figure out what route to go to
            }
        )
        // persist if something happens
        this.setState({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: "",
            password2: ""
        })
    }

    handleOnBlur(field) {
        return (e) => {
            if (e.currentTarget === e.target) {
                console.log('unfocused self');
                switch( field) {
                    case "password":
                        this.setState({ passwordError: this.state.password.length < 3 })
                        break;
                    case "password2":
                        this.setState({ password2Error: this.state.password != this.state.password2 })
                        break;
                    case "email":
                        this.setState({ emailError: !this.state.email.match(VALID_EMAIL_REGEX)})
                    default:
                        // Do nothing
                        return;
                }
            }
            
        }
    }

    render() {
        const firstName = (this.props.formType === 'signup') ? (
            <label>First Name:
                <input type="text" 
                onChange={this.handleInput('firstname')}
                value={this.state.firstname}/>
            </label>
        ) : ( null )

        const lastName = (this.props.formType === 'signup') ? (
            <label>Last Name:
                <input type="text" 
                onChange={this.handleInput('lastname')} 
                value={this.state.lastname} />
            </label>
        ) : (null)

        const secondPassword = (this.props.formType === 'signup') ? (
            <label>Confirm Password:
                <input type="password" 
                onChange={this.handleInput('password2')}
                onBlur={this.handleOnBlur('password2')}
                value={this.state.password2} 
                style={(this.state.password2Error) ? { border: '2px solid red' } : {}}/>
            </label>
        ) : (null)

        
        // figure out where to autofocus

        return (
            <>
                <div className="login-form-container">
                    <form className="login-form-box" onSubmit={this.handleSubmit}>
                        <div>
                            <h1>JJ Studio</h1>
                            <p>Make beats</p>
                        </div>
                        {firstName}
                        {lastName}
                        <label> Email:
                            <input  type="text" 
                            onChange={this.handleInput('email')} 
                            onBlur={this.handleOnBlur('email')}
                            style={(this.state.emailError) ? { border: '2px solid red' } : {}}/>
                        </label>

                        <label> Password:
                            <input type="password" 
                            onChange={this.handleInput('password')} 
                            onBlur={this.handleOnBlur('password')}
                            style={(this.state.passwordError) ? { border: '2px solid red' } : {}}/>
                        </label>
                        
                        {secondPassword}

                        {this.props.otherForm}

                        <input type="submit" value={this.props.formType} id=""/>    
                    </form>
                </div>
            </>

        )
    }
}

export default withRouter(SessionForm)