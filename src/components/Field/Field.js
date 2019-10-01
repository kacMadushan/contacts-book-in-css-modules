import React from 'react';
import PropTypes from 'prop-types';
import styles from './field.css';

const Field = ({ label, type, value, onChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            className={`form-control ${styles.custom_field}`}
            type={type}
            placeholder={label}
            value={value}
            onChange={onChange}
        />
    </div>
);

Field.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Field;