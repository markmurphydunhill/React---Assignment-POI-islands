# ICT Skills 2 Assignment - Single Page app.

Name: ... Mark Murphy ...

## Overview.

...... A statement of the app concept and objectives (about a half-page) ........

The app is designed to display the Islands of Ireland by Region.  To load the app data two calls are
made to my POI API to retrieve all the islands and region.  These are loaded into localCache where the data 
can be accessed and updated.  A list of Regions are display where the user on clicking each region will be able 
to view the islands for that region (I was not able to get he inverse data flow working to allow the switching of 
region).  Each islands being displayed can be edited where the name and description can be updated.  


. . . . . List of user features  . . . .

- Display all Regions
- Display all Islands by Region
- Select Region and display Islands for that region (not working)
- Edit Island to update Name and Description
- Delete Island

## Setup.

. . . . Having cloned the repo, state the steps required to install and run the app . . . . .
You might need to update the displayRegionId in the regionList constructor as the id that is coming from my API 
seems to change (The displayRegionId is the constructor is used as the default region for the initial load. List
of Region is being display in the console log (There is 5 regions)  After that NPM Start

## Data Model Design.

. . . . . A diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

Island:
{
_id: "5d567cc41b0fd90017447099",
name: "Lough Foyle",
lat: 55.19369052,
long: -6.96442359,
description: "Embarkation The logical embarkation point for the outer regions of Lough Foyle is Magilligan Point, by the Martello Tower. Access is by the B202 past the prison and rifle range. Do not block roads. Park by the hotel. The whole region is a security area, frequently patrolled. Especially beware of the military zone on the beach immediately to the E of the point, Benone Beach, on which it’s better not to land (certainly not while firing is going on).",
costalZone: "The North East",
region: "5d567cc21b0fd90017447094",
creator: "5d567cc21b0fd90017447091",
__v: 0
}

Region:
{
geo: {
lat: 54.7,
long: -6.1412
},
_id: "5d58132f010e8100176d755a",
title: "North East",
__v: 0
},


. . . Briefly explain any non-trivial aspects of the model . . . . .

## UI Design.

. . . . . Screenshots of app's views with brief statements of their use (see examples below) . . . . . . .

![][main]

The apps displays all regions with a button for each.  On clicking each region button the islands for that region are displayed 
(not working).  Each Island can be edit and deleted




![][detail]

>> bla bla bla . . . . . 

## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- /login.  Just navigated to a static page
- etc
- etc

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .

![][stories]

. . . . State any Storybook add-ons used and include a screenshot(s) to illustrate.

## Backend.

. . . . . Briefly explain the backend/API used by the app (Stub, JSON-server, Custom Node, Open). For custom Node or Open API, list the endpoints it provides to your app and state the purpose of each
I used my own Custom API POI.
https://rocky-fjord-61678.herokuapp.com/api/regions - Retrieves all regions
https://rocky-fjord-61678.herokuapp.com/api/islands - Retrieves all Islands
These are then loaded into localCached where using custom methods all the data can be used / updated by the app.
## Authentication (if relevant).

. . . . Briefly state the server-side authentication service used by your React app (Mock-auth, Custom Node/JWT, 3rd party(e.g. Firebase) ). Mention test username/passwords used . . . .

## Independent learning.

. . . . . State the non-standard aspects of React or other related technologies that you researched and applied in this assignment . . . . .

[model]: ./model.png
[main]: ./main.PNG
[detail]: ./detail.png
[stories]: ./story.PNG
