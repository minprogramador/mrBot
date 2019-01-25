'use strict';

const bot      = require('./bot');
const comandos = require('./comandos');

const botinit = require('./src/mrBot/comandos/init');
const botstatus = require('./src/mrBot/comandos/status');

const { spawn } = require('child_process');
const child     = spawn('pwd');

bot.onText(/(\/start|start)/i, comandos.run);

bot.onText(/(\/stop|stop)/i, comandos.stop);

bot.onText(/\/restart/, comandos.restart);

bot.onText(/(\/status|status)/i, botstatus);
//bot.onText(/\/status (.+)/, comandos.status);

bot.onText(/\/config/, comandos.config);

//bot.on('message', botinit);


// Handle callback queries
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };

  
  if (action === 'edit') {
    let text = 'Aguarde..';
  }else if (action === 'start') {
    comandos.run;
    let text = 'start, Aguarde..';
  }else if (action === 'stop') {
    comandos.shutdown();
    bot.editMessageText('apis paradas..', opts);
  }else if (action === 'restart') {
    console.log(comandos.reboot());
    bot.editMessageText('reboot ok.', opts);

  }else{
    let text = '??';
  }

  bot.editMessageText(text, opts);

});

console.log('bot on...');



