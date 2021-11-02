require('dotenv').config();
const tmi = require('tmi.js');

 
// define configuration options
const opts = {
    identity:{
      username: process.env.USERNAME,
      password: process.env.TOKEN
    },
  channels: [
    'DaGaugl', 'Smuuuuuuuuurf', 'NymN'
  ]

};
// Create a client with our options
const client = new tmi.client(opts);
 
// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
 
// Connect to Twitch:
client.connect();

let oldmessage = "";
let result = "";
 
// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot
 
  // Remove whitespace from chat message
  const commandName = msg.trim();
  let input = msg.split(" ");

  if (input[0] !== "gb" && input[0] !== "forsen") {return
  }
  // If the command is known, let's execute it
  if (commandName === 'gb Okayge') {
      result = "yo Okayge";
  }
  if (commandName === 'gb Okayeg') {
      result = "Okayeg TeaTime";
  }
  if (commandName === 'gb github') {
      result = "https://github.com/DaGaugl/gauglbot"
  }
  if (commandName === 'forsen') {
      result = "forsen";
  }

  if (result === oldmessage) {
      result = result + " 󠀀 ";
  }
  
  client.say(target, result);
  oldmessage = result; 

}
 
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
