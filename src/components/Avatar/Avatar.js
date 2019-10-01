import React from 'react';
import PropTypes from 'prop-types';
import styles from './avatar.css';

const Avatar = ({ src, name }) => (
    <img className={styles.avatar} src={src} alt={name} />
);

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Avatar;