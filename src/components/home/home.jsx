import React from "react";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const sessionLinks = (
            <nav className="login-signup">
                <button onClick={() => this.props.openModal('login')}
                    className="login-splash">SIGN IN</button>

                <button onClick={() => this.props.openModal('signup')}
                    className="signup-splash" >CREATE AN ACCOUNT</button>
            </nav>
        );
        return (
            <div>
                {sessionLinks}
            </div>
        )
    }
}

export default Home;