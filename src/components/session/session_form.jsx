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
    }

    render() {
        return (
            <>
                <div>Hello World</div>
            </>

        )
    }
}

export default withRouter(SessionForm)