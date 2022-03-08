import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


/**
 * Routes for the DogFinder App.
 * 
 * Props: dogs (list of dog objects)
 * state: none
 */
function Routes({ dogs }) {
    return (
            <Switch>
                <Route exact path="/dogs">
                    <DogList dogs={dogs} />
                </Route>
                <Route exact path="/dogs/:name">
                    <DogDetails dogs={dogs} />
                </Route>
                <Redirect to="/dogs" />
            </Switch>
    )
}

export default Routes;