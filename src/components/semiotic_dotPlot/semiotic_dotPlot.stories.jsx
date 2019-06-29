import React from 'react';
import { storiesOf } from '@storybook/react';
import SemioticDotPlot from './@semiotic_dotPlot.jsx';

storiesOf('Components / Semiotic_dotPlot', module)
    .add('default', () => (
        <SemioticDotPlot/>
));