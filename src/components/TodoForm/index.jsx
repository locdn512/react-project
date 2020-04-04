import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;

        if (onSubmit) {
            const formValues = {
                value: this.state.value,
            };
            onSubmit(formValues);
            this.setState({ value: '' });
        }
    };

    render() {
        const { value } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input
                    style={{ width: '99.3%' }}
                    value={value}
                    type='text' placeholder='Nhập todoList'
                    onChange={this.handleValueChange}
                />
            </form>
        );
    }
}

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}
export default TodoForm;