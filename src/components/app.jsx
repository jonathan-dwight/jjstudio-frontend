import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeContainer from "./home/home_container"

const App = () => {
    return (
        <>
            <Route exact path = "/" component={HomeContainer} />
        </>
    )
}

export default App;

//PLACE HOLDER RIGHT NOW NEED TO WORK ON LOGIN AND SIGN UP AND THEN MODAL FOR IT