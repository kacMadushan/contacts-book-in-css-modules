import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';

const Button = ({ type, children }) => {
    let showButton = <button className={`btn ${styles.button_border}`}>{children}</button>;
    if (type === "bg") {
        showButton = <button className={`btn ${styles.button_bg}`}>{children}</button>
    }
    return showButton
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;