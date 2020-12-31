/*
                                              _ _                       _                         _   _
                                             | (_)                     | |                       | | | |
   _____  ___ __  _ __ ___  ___ ___ ______ __| |_ ___  ___ ___  _ __ __| |______ ___   __ _ _   _| |_| |__
  / _ \ \/ / '_ \| '__/ _ \/ __/ __|______/ _` | / __|/ __/ _ \| '__/ _` |______/ _ \ / _` | | | | __| '_ \
 |  __/>  <| |_) | | |  __/\__ \__ \     | (_| | \__ \ (_| (_) | | | (_| |     | (_) | (_| | |_| | |_| | | |
  \___/_/\_\ .__/|_|  \___||___/___/      \__,_|_|___/\___\___/|_|  \__,_|      \___/ \__,_|\__,_|\__|_| |_|
           | |
           |_|
 */
//express-discord-oauth for express by HyperDev6969
/*
const expressDiscord = require('express-discord-oauth');
const express = require('express');
const app = new express();
const oauth = new expressDiscord(app, {
    callback: '/auth/callback',
    afterCallback: '/hello/world',
    clientId: 'id',
    clientSecret: 'secret',
    setCookie: true
});
 */
let { EventEmitter } = require('events');
class expressAuth extends EventEmitter {
    constructor(app, options) {
        //======================================= CHECK SETTINGS
        if (!options.callback) return;
        if (!options.afterCallback) return;
        if (!options.clientId) return;
        if (!options.clientSecret) return;
        if (!options.setCookie) return;
        //======================================= CHECK SETTINGS
        this.express = app; //set app var
        this.options = options; //set options var
        if (!app.use) return; //detect app being express
        app.get(callback, (req, res) => {

        });
    }
}