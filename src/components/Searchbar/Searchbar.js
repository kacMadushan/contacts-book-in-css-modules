import React from 'react';
import { connect } from 'react-redux';
import { setContactFilter } from '../../actions/filters';
import styles from './searchbar.css';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
    };

    onChangeText = (e) => {
        this.props.setContactFilter(e.target.value)
    };

    render() {
        return (
            <div>
                <div className="form-group">
                    <input
                        className={`form-control ${styles.searchbar}`}
                        type="text"
                        placeholder="Search contacts"
                        value={this.props.filters.text}
                        onChange={this.onChangeText}
                    />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setContactFilter: (text) => dispatch(setContactFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);