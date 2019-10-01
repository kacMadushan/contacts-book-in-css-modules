import React from 'react';
import { connect } from 'react-redux'
import SelectField from '../SelectField/SelectField';
import Field from '../Field/Field';
import Error from '../Error/Error';
import Button from '../Button/Button';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.contact ? props.contact.fullName : '',
            mobile: props.contact ? props.contact.mobile : '',
            email: props.contact ? props.contact.email : '',
            groupBy: props.contact ? props.contact.groupBy : '',
            groups: this.props.groups,
            error: '',
        }
    }

    onChangeGroup = (e) => {
        const groupBy = e.target.value;
        this.setState(({ groupBy }))
    };

    onChangeName = (e) => {
        const name = e.target.value;
        this.setState(({ name }))
    };

    onChangeMobile = (e) => {
        const mobile = e.target.value;
        this.setState(({ mobile }))
    };

    onChangeEmail = (e) => {
        const email = e.target.value;
        this.setState(({ email }))
    };

    onSubmitContactForm = (e) => {
        e.preventDefault();

        if (!this.state.name || !this.state.mobile) {
            // set error
            this.setState(() => ({ error: 'Enter full name and mobile number' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                fullName: this.state.name,
                mobile: this.state.mobile,
                email: this.state.email,
                groupBy: this.state.groupBy,
            })
        }
    };

    render() {
        const { groupBy, groups, name, mobile, email, error } = this.state;
        return (
            <form onSubmit={this.onSubmitContactForm}>
                {error && <Error>{error}</Error>}
                <SelectField
                    label="Select Group"
                    groups={groups}
                    value={groupBy}
                    onChange={this.onChangeGroup}
                />
                <Field
                    label="Full Name"
                    type="text"
                    value={name}
                    onChange={this.onChangeName}
                />
                <Field
                    label="Mobile Number"
                    type="text"
                    value={mobile}
                    onChange={this.onChangeMobile}
                />
                <Field
                    label="Email Address"
                    type="text"
                    value={email}
                    onChange={this.onChangeEmail}
                />
                <div>
                    <Button>Add Contact</Button>
                </div>
            </form>
        );
    }
};

const mapStateToProps = (state) => ({
    groups: state.groups
});

export default connect(mapStateToProps)(ContactForm);