---
layout: post
title: Trump Soundboard using Cordova.
---
It's easy to make android apps with [Cordova](https://cordova.apache.org),
a tool allowing developers to bundle any single page web app into
an android and ios application. I thought I'd test it out by making
a simple soundboard app. Here's how it turned out:

<img src="/assets/img/soundboard_screen_shot.png"
    style="width: 300px; height: 550px;
    margin: 0 auto; display: block;" />

Cordova simply embeds the application code into a WebView. For
applications as simple as this, performance gains from a native
implementation aren't noticeable. I'm looking forward to saving
time in the future by writing my apps once and building
for multiple platforms with Cordova.

The soundboard client was writte in [Vue.js](https://vuejs.org/).
A framework really wasn't needed for a web app this simple, but I
was interested in seeing I'd run into any difficulties in integrating
Vue.js with a webpack build into the Cordova environment -- which I
thankfully did not.