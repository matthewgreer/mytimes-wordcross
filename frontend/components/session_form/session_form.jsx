import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    };

    this.submit = this.submit.bind(this);
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
            {this.renderErrors()}
            <form onSubmit={this.submit} >
              <label>Email Address:
                <input 
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="session-form-input"
                />
              </label>
              <label>Password:
                <input 
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="session-form-input"
                />
              </label>
              <input
                type="submit"
                value={this.props.formType}
                className="session-form-submit"
              />
            </form>
        </div>
      </div>
    );
  }

}

export default SessionForm;