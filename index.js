
const asana = require('asana');
const core = require('@actions/core');

console.log("asana-secret: " + core.getInput('asana-secret'));
const ASANA_SECRET = core.getInput('asana-secret')

const client = asana.Client.create().useAccessToken(ASANA_SECRET);
client.users.me().then(function(me) {
  console.log(me);
});
console.log("Hello, World!");