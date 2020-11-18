import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password2: "",
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

    render() {

        const firstName = (this.props.formType === 'signup') ? (
            <label>
                <input type="text" value={this.state.firstname}/>
            </label>
        ) : ( null )

        const lastName = (this.props.formType === 'signup') ? (
            <label>
                <input type="text" value={this.state.lastname} />
            </label>
        ) : (null)

        const secondPassword = (this.props.formType === 'signup') ? (
            <label>
                <input type="text" value="" />
            </label>
        ) : (null)
        
        // figure out where to autofocus

        return (
            <>
                <div className="login-form-container">
                    <form className="login-form-box">
                        <div>
                            <h1>JJ Studio</h1>
                            <p>Make beats</p>
                        </div>
                        {firstName}
                        {lastName}
                        <label> Email:
                            <input  type="text" onChange={this.handleInput('email')}/>
                        </label>
                    </form>
                </div>
            </>

        )
    }
}

export default withRouter(SessionForm)