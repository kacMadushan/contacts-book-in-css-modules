import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeContact } from '../../../actions/contacts';
import Avatar from '../../Avatar/Avatar';
import Icon from '../../Icon/Icon';
import styles from './contact-list-item.css';

const ContactListItem = ({ id, avatar, fullName, mobile, dispatch }) => (
    <li className={styles.contact_list_item}>
        <Avatar src={avatar} name={fullName} />
        <div className={styles.contact_list_item_body}>
            <h5 className={styles.contact_name}>{fullName}</h5>
            <p className={styles.contact_mobile}>{mobile}</p>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link className={styles.edit_link} to={`/edit-contact/${id}`}>
                        <Icon name="pencil"></Icon>
                    </Link>
                </li>
                <li className="list-inline-item">
                    <span className={styles.remove_link} onClick={() => dispatch(removeContact({ id: id }))}>
                        <Icon name="trash"></Icon>
                    </span>
                </li>
            </ul>
        </div>
    </li>
);

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect()(ContactListItem);