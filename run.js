'use strict';

const botinit   = require('./src/mrBot/comandos/init');
const botstatus = require('./src/mrBot/comandos/status');
const bot       = require('./lib/bot');
const comandos  = require('./lib/comandos');
const { spawn } = require('child_process');

const child     = spawn('pwd');

bot.onText(/(\/init|init)/i, comandos.run);

bot.onText(/(\/stop|stop|kill|break|para)/i, comandos.stop);

bot.onText(/(\/restart|reboot|reiniciar)/i, comandos.restart);

bot.onText(/(\/start|start)/i, botinit);

bot.onText(/(\/status|status)/i, botstatus);

bot.onText(/\/config/, comandos.config);

//bot.on('message', botinit);


// Handle callback queries
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
        one_time_keyboard: true,
        resize_keyboard: true,
        disable_web_page_preview: true,
        remove_keyboard: true,
        reply_markup: {
            inline_keyboard: []
        }
  };

  //console.log(action);
  
  if (action === 'edit') {
    let text = 'Aguarde..';
    bot.editMessageText(text, opts);

  }else if (action === 'start') {
    opts.reply_markup.inline_keyboard.push([
                        {
                            text: 'status 🔎',
                            callback_data: 'status'
                        },
                        {
                            text: 'restart 🔄',
                            callback_data: 'restart'
                        },
                        {
                            text: 'stop 🛑',
                            callback_data: 'stop'
                        }
]);
    comandos.reboot();
    let text = 'start, ok.';
    bot.editMessageText(text, opts);

  }else if (action === 'stop') {
    comandos.shutdown();
    opts.reply_markup.inline_keyboard.push([{
                            text: '🔥 start',
                            callback_data: 'start'
                        },{
                            text: 'status 🔎',
                            callback_data: 'status'
                        }
]);
    bot.editMessageText('apis paradas..', opts);
  }else if (action === 'restart') {
    opts.reply_markup.inline_keyboard.push([
                        {
                            text: 'status 🔎',
                            callback_data: 'status'
                        },
                        {
                            text: 'stop 🛑',
                            callback_data: 'stop'
                        }
                    
    ]);

    comandos.reboot();
    bot.editMessageText('reboot ok.', opts);

  }else if (action === 'status') {
    
    comandos.status(msg.chat.id, msg.message_id);

  }else{
    let text = '??';
bot.editMessageText(text, opts);

  }

  
});

console.log('bot on...');



