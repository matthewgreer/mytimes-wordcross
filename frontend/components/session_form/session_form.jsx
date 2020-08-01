import React from 'react';

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
    return event => this.setState({
      [field]: event.currentTarget.value
    });
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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="session-form-outer-container">
        <div className="session-form-inner-container">
          <h2>{this.props.formTitle} account</h2>
            {/* {this.renderErrors()} */}
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
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              <label>Password</label>
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
              <div className="checkbox-container">
                <div className="checkbox-text">
                  {/* Pop-up "Sorry. You're unforgettable." */}
                  <a >    
                    <img className="checkbox-image" src={window.checkbox} />
                  </a>
                  {this.props.checkboxText}
                </div>
                <div className="checkbox-link">
                  {this.props.checkboxLink}
                </div>
              </div>
              <a
                className="session-form-submit"
                onClick={this.submit}
              >
                {this.props.formType}
              </a>
              <h4 className="session-form-switch-link">
                {`${this.props.navLine}have a Trials account? `}
                <span className="switch-link">
                  {this.props.navLink}
                </span>
              </h4>
            </form>
        </div>
      </div>
    );
  }

}

export default SessionForm;