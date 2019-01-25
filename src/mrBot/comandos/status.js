'use strict';

const bot   = require('../../../bot');

module.exports = function(msg, match) {
    const chatId = msg.chat.id;
    //const resp   = match[1];
  const option = {
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

//bot.sendMessage(msg.chat.id, "*Some* message here.", option);

    const resp   = "*Url:*  `http://191.96.139.176:7544`\n"+
                   "*Total contas:*         10\n"+
                   "*Contas ativas:*        4\n"+
                   "*Contas inativas:*     1\n"+
                   "*Pendente rede:*      5\n"+
                   "*Pendente sessão:*  5\n"+
                   "*Data start:*   2019-01-25 15:35\n"+
                   "";
   // resp = `${resp} ${resp2}`;
    return bot.sendMessage(chatId, resp, option);



};
