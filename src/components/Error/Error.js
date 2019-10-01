import React from 'react';
import PropTypes from 'prop-types';
import styles from './error.css';

const Error = ({ children }) => (
    <p className={styles.error_msg}>{children}</p>
);

Error.propTypes = {
    children: PropTypes.node.isRequired
};

export default Error;