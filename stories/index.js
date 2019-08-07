import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Island from '../src/components/island/'
import IslandList from '../src/components/islandList/'

const sample = {

    _id: "5cfa35de9a96f20017a0661a",
    name: "Lough Foyle",
    lat: 55.19369052,
    long: -6.96442359,
    description: "Embarkation The logical embarkation point for the outer regions of Lough Foyle is Magilligan Point, by the Martello Tower. Access is by the B202 past the prison and rifle range. Do not block roads. Park by the hotel. The whole region is a security area, frequently patrolled. Especially beware of the military zone on the beach immediately to the E of the point, Benone Beach, on which it’s better not to land (certainly not while firing is going on).",
    costalZone: "The North East",
    region: "5cfa35dd9a96f20017a06615",
    creator: "5cfa35dd9a96f20017a06612",
    __v: 0

}


storiesOf("Island List App/Island", module).add("default", () => (
    <Island island={sample}/>
));

storiesOf("Island List App/Island List", module).add("default", () => {
    const samples = [sample, sample, sample, sample, sample]
    return <IslandList islands={samples}/>
});