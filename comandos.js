'use strict';

process.env.NTBA_FIX_319 = 1;

const bot   = require('./bot');
const shild = require("./shild");

exports.run = (msg, match) => {


  shild.runPid('/Users/bruno/Desktop/public/demo/main.php');
  
  const chatId = msg.chat.id;
  //const resp   = match[1];
  const resp   = 'rodando gambiarras, start Ok.';

  return bot.sendMessage(chatId, resp);
};

exports.stop = (msg, match) => {

  shild.stopPid();
  
  const chatId = msg.chat.id;
  //const resp   = match[1];
  const resp   = 'Apis paradas...., stop Ok.';
  return bot.sendMessage(chatId, resp);
};

exports.restart = (msg, match) => {
  shild.stopPid();

  setTimeout(function() {
    shild.runPid('/Users/bruno/Desktop/public/demo/main.php');
    const chatId = msg.chat.id;
    //+match[1]
    const resp   = 'Pronto ze mane, restart Ok.';
    bot.sendMessage(chatId, resp);

  }, 1500);
};

exports.shutdown = function() {
  shild.stopPid();
  return true;
}

exports.reboot = function() {
  shild.stopPid();

  setTimeout(function() {
    shild.runPid('/Users/bruno/Desktop/public/demo/main.php');
  }, 1000);
  return true;
}

exports.status = (msg, match) => {

  const chatId = msg.chat.id;
  //const resp   = match[1];
  const resp   = 'qual status??....';


const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🔥 start',
            callback_data: 'start'
          },
          {
            text: '🔄 restart',
            callback_data: 'restart'
          },
          {
            text: '🛑 stop',
            callback_data: 'stop'
          },
          {
            text: '🚧 status',
            callback_data: 'status'
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, 'Qual o seu desejo ?', opts);



//  bot.sendMessage(chatId, resp);
};

exports.config = (msg, match) => {

  const chatId = msg.chat.id;
  //const resp   = match[1];
  const resp   = 'Config????...';

  bot.sendMessage(chatId, resp);

}

exports.init = function(msg) {

    const chatId = msg.chat.id;
    const opts   = {
        reply_markup: {
            inline_keyboard: [
            [
                {
                    text: '🔥 start',
                    callback_data: 'start'
                },
                {
                    text: '🔄 restart',
                    callback_data: 'restart'
                },
                {
                    text: '🛑 stop',
                    callback_data: 'stop'
                },
                {
                    text: '🚧 status',
                    callback_data: 'status'
                }
            ]
        ]
    }
};

bot.sendMessage(chatId, 'Qual o seu desejo ?', opts);


//  bot.sendMessage(chatId, 'Aguarde...');
};

