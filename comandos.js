'use strict';

process.env.NTBA_FIX_319 = 1;

const shild = require("./shild");
const bot   = require('./bot');

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

exports.status = function(chatId, message_id, bot) {

    const option = {
            chat_id: chatId,
            message_id: message_id,
            parse_mode: "Markdown",
            one_time_keyboard: true,
            resize_keyboard: true,
            disable_web_page_preview: true,
            remove_keyboard: true,
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '🔄 restart',
                    callback_data: 'restart'
                  },
                  {
                    text: '🛑 stop',
                    callback_data: 'stop'
                  },
                  {
                    text: '⚠️ reset',
                    callback_data: 'reset'
                  }                  
                ]
              ]
            }

        };    

    const resp1   = "*Url:*  `http://191.96.139.176:7544`\n"+
                   "*Total contas:*         10\n"+
                   "*Contas ativas:*        4\n"+
                   "*Contas inativas:*     1\n"+
                   "*Pendente rede:*      5\n"+
                   "*Pendente sessão:*  5\n"+
                   "*Data start:*   2019-01-25 15:35\n"+
                   "";

    return bot.editMessageText(resp1, option);
}

exports.reboot = function() {
  shild.stopPid();

  setTimeout(function() {
    shild.runPid('/Users/bruno/Desktop/public/demo/main.php');
  }, 1000);
  return true;
}

// exports.status = function(id, bot) {

//     const chatId = id;
//     //const resp   = match[1];
// };

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

// bot.sendMessage(chatId, 'Qual o seu desejo ?', opts);


// //  bot.sendMessage(chatId, 'Aguarde...');
};

