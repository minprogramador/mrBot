'use strict';

const bot   = require('../../../bot');
const infourl = require('../infourl');

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


  infourl(function(res) {

    const resp   = "*Url:*  `http://191.96.139.176:7544`\n"+
                   `\n*CPF - total contas:*  ${res.cpf.total}\n`+
                   `*CPF - contas ativas:*  ${res.cpf.ativos}\n`+
                   `*CPF - Contas inativas:*  ${res.cpf.inativos}\n`+
                   `*CPF - pendente rede:*  ${res.cpf['pendente rede']}\n`+
                   `*CPF - pendente sessão:*  ${res.cpf['pendente sessao']}\n`+
                   `\n`+
                   `*CNPJ - total contas:*  ${res.cnpj.total}\n`+
                   `*CNPJ - contas ativas:*  ${res.cnpj.ativos}\n`+
                   `*CNPJ - Contas inativas:*  ${res.cnpj.inativos}\n`+
                   `*CNPJ - pendente rede:*  ${res.cnpj['pendente rede']}\n`+
                   `*CNPJ - pendente sessão:*  ${res.cnpj['pendente sessao']}\n`+
                   `*\nData start:*     ${res.start}\n`+
                   `*Load a 1m:*     ${res.serverinfo.load_oneMin}\n`+
                   `*Load a 5m:*     ${res.serverinfo.load_fiveMin}\n`+
                   `*Total tasks:*    ${res.serverinfo.totalTasks}\n`+
                   `*Men total:*       ${res.serverinfo.men_total}\n`+
                   `*Men usada:*    ${res.serverinfo.men_usado}\n`+
                   `*Men livre:*       ${res.serverinfo.men_livre}\n`+
                   `*Data start:*     ${res.start}\n\nFim status.`;
    //console.log(res);

   // resp = `${resp} ${resp2}`;
    return bot.sendMessage(chatId, resp, option);


  });



};
