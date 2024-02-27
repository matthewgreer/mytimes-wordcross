import React from 'react';
import { Redirect } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.submit = this.submit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this)
  }

  update(field) {
    return event => {
      if (this.props.errors != {}) this.props.clearErrors();
      this.setState({
        [field]: event.currentTarget.value
      })
    };
  }

  submit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  loginDemoUser(event) {
    event.preventDefault();
    this.props.loginDemo();
  }

  render() {
    let { errors } = this.props;
    return(
      <div className="session-form-outer-container">
        <div className="session-form-inner-container">
          <h2>{this.props.formTitle} account</h2>
            <a
              className="session-form-demo-login"
              onClick={this.loginDemoUser}
            >
              <img className="demo-logo" src={window.demo_logo} />
              <span className="demo-account-button-text">
                Continue with Demo-ogle
              </span>
              </a>
            <a
              className="session-form-demo-login"
              onClick={this.loginDemoUser}
            >
              <img className="demo-logo" src={window.fake_logo} />
              <span className="demo-account-button-text">
                Continue with Fake-book
                </span>
            </a>
            <a
              className="session-form-demo-login"
              onClick={this.loginDemoUser}
            >
              <img className="banana-logo" src={window.banana_logo} />
              <span className="demo-account-button-text">
                Continue with Banana-nonymous
                </span>
            </a>
              <div className="session-form-separator">
                Or use your email
              </div>
            <form id="session-form" onSubmit={this.submit} >
              <label>Email Address</label>
              <input
              className={errors.errorEmail || errors.errorInvalidUser ? 'error' : null}
                type="text"
                value={errors.errorEmailAddress || this.state.email}
                onChange={this.update("email")}
              />
              <div className="form-field-error-message">
                { errors.errorEmail }
                { errors.errorExistingUser }
              </div>
              <label>Password</label>
              <input
                className={errors.errorPassword || errors.errorInvalidUser ? 'error' : null}
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
              <div className="form-field-error-message">
                {errors.errorPassword}
              </div>
              <div className="checkbox-container">
                <div className="checkbox-text">
                  {/* Pop-up something like "Sorry. You're just so unforgettable." or "13 letters Nat(alie) King Cole album" */}
                  <a >
                    <img className="checkbox-image" src={window.checkbox} />
                  </a>
                  {this.props.checkboxText}
                </div>
                <div className="checkbox-link">
                  {this.props.checkboxLink}
                </div>
              </div>
                <div className="form-field-error-message">
                  {errors.errorInvalidUser}
                </div>
              <a
                className="session-form-submit"
                onClick={this.submit}
              >
                {this.props.formType}
              </a>
              <h4 className="session-form-switch-link" >
                {`${this.props.navLine}have a Times account? `}
                <span className="switch-link" onClick={this.props.clearErrors}>
                  {this.props.navLink}
                </span>
              </h4>
            </form>
        </div>
        {
          errors.errorExistingUser ?
          <Redirect to={
            {
              pathname: "/login",
              state: { email: errors.errorEmailAddress }
            }
          } /> :
          null
        }
      </div>
    );
  }
}

export default SessionForm;
