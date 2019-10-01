import React from 'react';
import PropTypes from 'prop-types';
import styles from './select_field.css';

const SelectField = ({ groups, label, value, onChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <select className={`form-control ${styles.custom_field}`} value={value} onChange={onChange}>
            <option>{label}</option>
            {groups.map(({ id, groupName }) => (
                <option key={id} value={id}>{groupName}</option>
            ))}
        </select>
    </div>
);

SelectField.propTypes = {
    groups: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SelectField;