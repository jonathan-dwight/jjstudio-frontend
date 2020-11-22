import React from "react";
import { Redirect } from "react-router-dom";

import octocat from '../../assets/Octocat.png';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const gitHubLink = (
            <div>
                 <a className="git-link" href="https://github.com/justinchung/jjstudio-java">
                    <img src={octocat} style={{ width: 35, height: 35 }} alt="git repo backend"/>
                </a>
                <a className="git-link" href="https://github.com/jonathan-dwight/jjstudio-frontend">
                    <img src={octocat} style={{ width: 35, height: 35 }} alt="git repo frontend"/>
                </a>
            </div>
           
        );

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
                {gitHubLink}
            </div>
        )
    }
}

export default Home;