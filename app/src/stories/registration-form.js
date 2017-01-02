import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import RegistrationForm from '../components/registration-form.js';

const mockSubmit = (e) => {
  e.preventDefault();
  const submitAction = action('submitted');
  submitAction(e);
};

storiesOf('Registration Form', module)
  .add('default', () => (
    <RegistrationForm
      onSubmit={mockSubmit}
      submitting={false}
      submitted={false}
    />
  ))
  .add('submitting', () => (
    <RegistrationForm
      onSubmit={mockSubmit}
      submitting
      submitted={false}
    />  ))
  .add('submitted', () => (
    <RegistrationForm
      onSubmit={mockSubmit}
      submitting={false}
      submitted
    />
  ));
