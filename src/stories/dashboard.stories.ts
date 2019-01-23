import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { DashboardComponent } from '../app/dashboard/dashboard/dashboard.component';

storiesOf('Dashboard/Home', module)
  .add(
    'base', () => ({
      component: DashboardComponent,
      props: {
        text: 'Go to Welcome Story '
      },
    }));
