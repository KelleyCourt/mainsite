import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { resetPassword } from '../../actions/auth';
import PropTypes from 'prop-types';

const form = reduxForm({
  form: 'resetPassword',
  validate,
});

function validate(formProps) {
  const errors = {};

  if (!formProps.password) {
    errors.password = 'Please enter a new password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please confirm new password';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

const renderField = field => (
  <div>
    <input className="form-control" {...field.input} />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

class ResetPassword extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  componentWillMount() {
    if (this.props.authenticated) {
      this.context.router.history.push('/portal');
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated) {
      this.context.router.history.push('/portal');
    }
  }

  handleFormSubmit({ password }) {
    const resetToken = this.props.match.params.resetToken;
    this.props.resetPassword(resetToken, { password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    } else if (this.props.message) {
      return (
        <div className="alert alert-success">
          <strong>Success!</strong> {this.props.message}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>New Password:</label>
          <Field name="password" component={renderField} type="password" />
        </fieldset>

        <fieldset className="form-group">
          <label>Confirm New Password:</label>
          <Field name="passwordConfirm" component={renderField} type="password" />          
        </fieldset>

        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Change Password</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error, message: state.auth.message };
}

export default connect(mapStateToProps, { resetPassword })(form(ResetPassword));
