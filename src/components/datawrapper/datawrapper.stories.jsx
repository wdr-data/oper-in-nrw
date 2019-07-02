import React from 'react';
import { storiesOf } from '@storybook/react';
import DWChart from 'react-datawrapper-chart';

storiesOf('Datawrapper', module)
    .add('default', () => (
        <DWChart aria-label="Text representation of visual chart" src="//datawrapper.dwcdn.net/rjRUb/7/" />
));