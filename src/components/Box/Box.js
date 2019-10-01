import React from 'react';
import styles from './box.css';

const Box = ({ children }) => (
    <div className={styles.box}>{children}</div>
);

export default Box;