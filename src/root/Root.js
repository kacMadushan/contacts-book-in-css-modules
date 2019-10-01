import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AppRouter from '../routers/AppRouter';
import Header from '../components/Header/Header';
import Box from '../components/Box/Box';
import styles from './root.css';

export const history = createHistory();

const Root = ({ store }) => (
    <Provider store={store}>
        <div className={styles.wrapper}>
            <Router history={history}>
                <Header />
                <Box>
                    <AppRouter />
                </Box>
            </Router>
        </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;