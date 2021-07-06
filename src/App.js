import React from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Day15 from "./components/Day15";
import Day16 from "./components/Day16";
import Day17 from "./components/Day17";

function App()
{
    return (

        <Router>
            <Switch>
                 <Route exact path="/day15">
                    <Day15/>
                </Route>
                <Route exact path="/day16">
                    <Day16/>
                </Route>
                <Route exact path="/day17">
                    <Day17/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;