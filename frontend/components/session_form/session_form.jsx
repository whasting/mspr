import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.placeholder === 'Username') {
      this.setState({username: e.target.value});
    } else if (e.target.placeholder === 'Password') {
      this.setState({password: e.target.value});
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>
      );
    }
  }

  clearPasswordAndErrors() {
    this.setState({password: ""});
    this.props.clearErrors();
  }

  renderForm() {
    return (
      <div className="login-signup">
        <div className="input-fields">
          <div className="text-inputs">
            <div className="username-container">
              <input
                type="text"
                className="login-username"
                value={this.state.username}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
                placeholder="Username" />
            </div>
            <div className="password-container">
              <input
                type="password"
                className="login-password"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                value={this.state.password}
                placeholder="Password" />
            </div>
          </div>
          <div className="errors-container">
            <div className="errors">
              {this.renderErrors()}
            </div>
          </div>
          <div className="buttons">
            <button
              type="submit"
              className="log-in-button"
              onKeyPress={this.handleKeyPress}
              onClick={this.handleSubmit}
              value="Log In">Login</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let submit;
    if (this.props.formType === 'signup') {
      submit = 'Sign Up';
    } else {
      submit = 'Log In';
    }

    return (
      <div className="auth-wrapper">
        <div className="auth-form">
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
