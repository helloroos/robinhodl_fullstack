import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, withRouter } from 'react-router-dom';

// import LogInFormContainer from "./session/log_in_form_container";
import log_in_form from "./session/log_in_form";
// import SignUpFormContainer from "./session/sign_up_form_container";
import sign_up_form from "./session/sign_up_form";
// import SplashContainer from "./splash/splash_container";
import splash from "./splash/splash";
import portfolio from "./portfolio/portfolio";
import TokenContainer from "./token/token_index_container";
// import TokenShowContainer from "./token/token_show_container";
import TokenShow from './token/token_show'
import NavBarContainer from "./navbar/navbar_container";
import TokenIndexContainer from "./token/token_index_container";
// import CashContainer from "./cash/cash_container";
import Cash from './cash/cash'
import Contact from "./contact/contact";

const App = () => {
    const NavBarContainerWithRouter = withRouter(NavBarContainer);
    const TokenContainerWithRouter = withRouter(TokenShow);

    return(
    <div id="app">
        <NavBarContainerWithRouter/>
        {/* <Route exact path="/" component={NavBarContainer } /> */}
        <Switch>
            <AuthRoute path="/login" component={log_in_form} />
            <AuthRoute path="/signup" component={sign_up_form} />
            <AuthRoute path="/contact" component={Contact} />
            <ProtectedRoute path="/portfolio" component={portfolio} />
            <ProtectedRoute exact path="/tokens" component={TokenIndexContainer} />
                <ProtectedRoute exact path="/cash" component={Cash} />
            {/* <Route path="/tokens" component={TokenContainer} /> */}
            <ProtectedRoute path="/tokens/:tokenId" component={TokenShow} /> {/** Add in tokenId */}
                <Route exact path="/" component={splash} />
        </Switch>
    </div>
    )
}

export default App;
