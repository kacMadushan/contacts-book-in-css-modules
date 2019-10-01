import React from 'react';
import PropTypes from 'prop-types';
import styles from './heading.css';

const Heading = ({ name }) => (
    <div className={styles.heading}>
        <h2 className={styles.heading_name}>{name}</h2>
    </div>
);

Heading.propTypes = {
    name: PropTypes.string.isRequired
};

export default Heading;