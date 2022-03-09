import { Switch, Route } from "react-router-dom"

import Home from "../pages/Home"
import Jail from "../pages/Jail"

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/jail">
            <Jail />
        </Route>
    </Switch>
)

export default Routes
