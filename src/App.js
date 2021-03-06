import React from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Day15 from "./components/Day15/Day15";
import Day16 from "./components/Day16/Day16";
import Day17 from "./components/Day17/Day17";
import Day18 from "./components/Day18/Day18";
import Day19 from "./components/Day19/Day19";
import Day20 from "./components/Day20/Day20";
import Day21 from "./components/Day21/Day21";
import Day22 from "./components/Day22/Day22";
import Day24 from "./components/Day24/Day24";
import Day24Home from "./components/Day24/Day24Home";
import Day24About from "./components/Day24/Day24About";
import Day25 from "./components/Day25/Day25";
import Day26 from "./components/Day26/Day26";
import Day27 from "./components/Day27/Day27";
import Day28 from "./components/Day28/Day28";
import Day29 from "./components/Day29/Day29";
import Day30 from "./components/Day30&31/Day30";
import Day33 from "./components/Day33/Day33";
import Day34 from "./components/Day34/index";

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
                <Route exact path="/day18">
                    <Day18/>
                </Route>
                <Route exact path="/day19">
                    <Day19/>
                </Route>
                <Route exact path="/day20">
                    <Day20/>
                </Route>
                <Route exact path="/day21">
                    <Day21/>
                </Route>
                <Route exact path="/day22">
                    <Day22/>
                </Route>
                <Route exact path="/day24">
                    <Day24/>
                </Route>
                <Route exact path="/day24/home">
                    <Day24Home/>
                </Route>
                <Route exact path="/day24/about">
                    <Day24About/>
                </Route>
                <Route exact path="/day25">
                    <Day25/>
                </Route>
                <Route exact path="/day26">
                    <Day26/>
                </Route>
                <Route exact path="/day27">
                    <Day27/>
                </Route>
                <Route exact path="/day28">
                    <Day28/>
                </Route>
                <Route exact path="/day29">
                    <Day29/>
                </Route>
                <Route exact path="/day30">
                    <Day30/>
                </Route>
                <Route exact path="/day33">
                    <Day33/>
                </Route>
                
            </Switch>
        </Router>
    );
}

export default App;