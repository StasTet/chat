import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Chat from '../Chat';
import Login from '../Login';

import { setUser } from '../../actions/user';
import { MAIN, LOGIN } from '../../constants/routs';

import '../../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
});

const history = createBrowserHistory();

class Root extends Component {
    componentDidMount() {
        if (sessionStorage.getItem('user')) {
            history.push(MAIN);
            this.props.setUser(sessionStorage.getItem('user'));
        } else {
            history.push(LOGIN);
        }
    }

    componentDidUpdate() {
        if (this.props.user.isLogin) {
            sessionStorage.setItem('user', this.props.user.user);
            history.push(MAIN);
        }
    }

    render() {
        return (
            <Router history={history}>
                <div className="main-layout">
                    <Switch>
                        <Route exact path={MAIN} component={Chat} />
                        <Route path={LOGIN} component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

Root.propTypes = {
    user: PropTypes.object,
    setUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(Root));
