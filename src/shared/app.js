import React from 'react';
import routes from './routes';
import {Link, Route, Switch} from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/error">about</Link>
                <Switch>
                    {
                        routes.map((route, index) => <Route path={route.path} component={route.component} exact={route.exact} key={index}></Route>)
                    }
                </Switch>
            </div>
        );
    }
}
