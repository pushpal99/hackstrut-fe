import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import Loader from './components/Loader';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ component: Component, path, exact }) {
    console.log(Component)
    const primaryComp = <Route
        exact={exact}
        path={path}
        render={props => (
            <Suspense>
                <Component {...props} />
            </Suspense>
        )}
/>
    const route = true ? primaryComp : <Route render={() => <Redirect to="/" />} />;
    return route;
}

PrivateRoute.defaultProps = {
    exact: false,
};

PrivateRoute.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
};
