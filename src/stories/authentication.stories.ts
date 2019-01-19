import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { LoginComponent } from '../app/authentication/login/login.component';
import { SignupComponent } from '../app/authentication/signup/signup.component';

storiesOf('Authentication/Login', module)
  .add(
    'base', () => ({
      component: LoginComponent,
      props: {
        verifyCodeRequired: false
      },
    }))
  .add(
    'with MFA', () => ({
      component: LoginComponent,
      props: {
        verifyCodeRequired: true
      },
    }));

storiesOf('Authentication/Sign-Up', module)
  .add(
    'base', () => ({
      component: SignupComponent,
      props: {
        text: 'Go to Welcome Story'
      },
    }));

storiesOf('Authentication/Forgot Password', module)
  .add(
    'base', () => ({
      component: LoginComponent,
      props: {
        text: 'Go to Welcome Story'
      },
    }));
