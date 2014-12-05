# Marker

This is an educational project that demonstrates how to build a practical application with the Lateralus JavaScript framework and the Spread CSS grid system.

The application itself is deliberately simple and light on features; the focus is to show how Lateralus components are built and used.  The best way to understand how Marker works is to follow along the code (there are plenty of comments to explain things).  You may want to take a look at `app/main.js` first and follow the code along from there.

At a high level, Marker is composed of three components: One container component and two subcomponents under that.  It is suggested that you use a similar pattern in your applications in order to manage complexity.  The two subcomponents work together by emitting and responding to widely-broadcast messages, rather than directly interacting with each other.  This allows them to remain loosely coupled, which is necessary for keeping an application scalable.

__Note__: Marker and its components were generated with the `generator-lateralus` tool that comes bundled with Lateralus.

## Installing

Clone this repo and run:

````
npm install && bower install
````

## Running locally

Assuming you have [Grunt](http://gruntjs.com/) and [Compass](http://compass-style.org/install/) installed:

````
grunt serve
````
