import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./views/routes/home/home.index";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;