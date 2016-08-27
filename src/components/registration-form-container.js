import React, {Component} from 'react';
import RegistrationForm from './registration-form.js';

class RegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted : false,
      submitting: false,
      errors : []
    }
  }

  hideMessage() {
    //Hide After X secondes
    setTimeout(() => this.setState({submitting: false, submitted: false}), 2000);
  }

  showMessage() {
    setTimeout(() => this.setState({submitting: false, submitted: true}, this.hideMessage), 2000);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    this.setState({submitting: true});

    //Fake HTTP Request + Message
    this.showMessage();
  }

  render() {
    const {submitting, submitted} = this.state;
    return (
      <div className="box">
        <RegistrationForm
          submitted={submitted}
          submitting={submitting}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default RegistrationFormContainer;
