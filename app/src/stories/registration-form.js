import React from 'react';
import { storiesOf } from '@kadira/storybook';

import RegistrationForm from '../components/registration-form.js';

const mockSubmit = () => {};
const noErrors = [];

storiesOf('Registration Form', module)
  .add('default', () => (
    <RegistrationForm
      onSubmit={mockSubmit}
      errors={noErrors}
      submitting={false}
      submitted={false}
    />
  ))
  .add('submitting', () => (
    <RegistrationForm
      onSubmit={mockSubmit}
      errors={noErrors}
      submitting
      submitted={false}
    />  ))
  .add('submitted', () => (
    <RegistrationForm
      onSubmit={mockSubmit}
      errors={noErrors}
      submitting={false}
      submitted
    />
  ));
