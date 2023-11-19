import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import React from 'react';
import PrivateRoute from './PrivateRoute';
import Page404 from './containers/Page404/PageNotFound';
import Home from './containers/Home/Home';
import Action from './containers/Action/Action';

function Routes({
}) {
    console.log('Rotes')

    return (
        <div className="clearFix">
            {/* {status && <WarningModal defaultSettings={defaultSettings} deleteToken={deleteToken} />} */}
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => {
                        const page = <Home />
                        return page;
                    }}
                />
                <PrivateRoute path="/action" component={Action} exact />
                {/* <Route path="/auth/callback" exact render={() => <CallbackComponent mid={mid} />} /> */}
                <Route component={Page404} />
            </Switch>
        </div>
    );
}

// const stateToProps = {
// };

// const dispatchToProps = {
// };

export default Routes;
