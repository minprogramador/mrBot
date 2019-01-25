'use strict';

const bot   = require('./bot');
const shild = require("./shild");

exports.run = (msg, match) => {

  shild.runPid('/Users/bruno/Desktop/public/demo/main.php');
  const chatId = msg.chat.id;
  const resp   = 'rodando gambiarras, start Ok.';
  return bot.sendMessage(chatId, resp);
};
