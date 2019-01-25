'use strict';

const bot      = require('./bot');
const comandos = require('./comandos');

const botinit = require('./src/mrBot/comandos/init');

const { spawn } = require('child_process');
const child     = spawn('pwd');

bot.onText(/\/start/, comandos.run);

bot.onText(/\/stop/, comandos.stop);

bot.onText(/\/restart/, comandos.restart);

bot.onText(/\/status/, comandos.status);
//bot.onText(/\/status (.+)/, comandos.status);

bot.onText(/\/config/, comandos.config);

bot.on('message', botinit);


// Handle callback queries
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === 'edit') {
    text = 'Aguarde..';
  }else if (action === 'start') {
    text = 'roda a merenda, Aguarde..';
  }

  bot.editMessageText(text, opts);
});

console.log('bot on...');



