import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import Island from '../src/components/island/'
import IslandList from '../src/components/islandList/'
import Region from '../src/components/region/'
import RegionList from '../src/components/regionList/'
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";
//import PublicProfile from '../src/components/contactPublic/publicProfile';
//import ContactPrivateDetails from '../src/components/contactPrivate/';



const sample = {
    _id: "5d5409dd9401b600171f45ca",
    name: "Lough Foyle",
    lat: 55.19369052,
    long: -6.96442359,
    description: "Embarkation The logical embarkation point for the outer regions of Lough Foyle is Magilligan Point, by the Martello Tower. Access is by the B202 past the prison and rifle range. Do not block roads. Park by the hotel. The whole region is a security area, frequently patrolled. Especially beware of the military zone on the beach immediately to the E of the point, Benone Beach, on which it’s better not to land (certainly not while firing is going on).",
    costalZone: "The North East",
    region: "5d5409dc9401b600171f45c5",
    creator: "5d5409db9401b600171f45c2",
    __v: 0

}

const sample1 = {

    geo: {
        lat: 54.7,
            long: -6.1412
    },
    _id: "5d5409dc9401b600171f45c5",
        title: "North East",
    __v: 0
}

storiesOf("Island List App/Header", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => <Header />);

storiesOf("Island List App/Contact", module)


    .add("default", () => (
        <Island island={sample} deleteHandler={action('Delete confirmed') }/>
    ));

storiesOf("Island List App/Contact List", module)

    .add("default", () => {
        const samples = [sample, sample, sample, sample, sample]
        return <IslandList islands={samples}/>
    });

storiesOf("Island List App/Region", module)

    .add("default", () => (
        <Region region={sample1} deleteHandler={action('Delete confirmed') }/>
    ));

storiesOf("Island List App/Region List", module)

    .add("default", () => {
        const sample1s = [sample1,sample1,sample1,sample1,sample1]
        return <RegionList regions={sample1s}/>
    });
