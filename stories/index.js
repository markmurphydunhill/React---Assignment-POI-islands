import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Island from '../src/components/island/'
import IslandList from '../src/components/islandList/'


const samples = {request.get('https://rocky-fjord-61678.herokuapp.com/api/islands')},




storiesOf("Island List App/Island", module).add("default", () => (
    <Island island={sample}/>
));

storiesOf("Island List App/Island List", module).add("default", () => {
    //const samples = [sample, sample, sample, sample, sample]
    //const samples = request.get('https://rocky-fjord-61678.herokuapp.com/api/islands')

    return <IslandList islands={samples}/>
});