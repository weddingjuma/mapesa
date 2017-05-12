var bleno = require('bleno');
var util = require('util');
require('dotenv').config()

var options = {
    sandbox: true,                  // true/false to use/not sandbox
    apiKey: process.env.APIKEY,         // Use sandbox username and API key if you're using the sandbox
    username: process.env.USERNAME,      //
    format: 'json'                  // or xml
};
var AfricasTalking = require('africastalking')(options);
var LoadAverageCharacteristic = require('./characteristics/loadaverage');
var UptimeCharacteristic = require('./characteristics/uptime');
var MemoryCharacteristic = require('./characteristics/memory');

function SystemInformationService() {

  bleno.PrimaryService.call(this, {
    uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb07',
    characteristics: [
      new LoadAverageCharacteristic(),
      new UptimeCharacteristic(),
      new MemoryCharacteristic()
    ]
  });
};

util.inherits(SystemInformationService, bleno.PrimaryService);
module.exports = SystemInformationService;
