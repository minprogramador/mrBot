'use strict';

const bot   = require('../../../lib/bot');
const config = require('../../../config/config');
const infourl = require('../infourl');

module.exports = function(msg, match) {

  const chatId = msg.chat.id;

  infourl(config.url, function(res) {

    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var now = date+' '+time;

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
                            text: '🔄 atualizar',
                            callback_data: 'status'
                        },
                        {
                            text: '🛑 stop',
                            callback_data: 'stop'
                        },
                        {
                            text: '⚠️ restart',
                            callback_data: 'restart'
                        }
                    ]
                ]
            }
    };

    try{

        const resp   = "*Url:*  `"+config.url+"`\n"+
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
                       `\n`+
                       `*Start:*  ${res['start']}\n`+
                       `*Rede total:*  ${res['rede total']}\n`+
                       `*Rede on:*  ${res['rede on']}\n`+
                       `*Rede off:*  ${res['rede off']}\n`+
                       `*Rede max:*  ${res['rede max']}\n`+
                      `\n*Update:*  ${now}`+
                       `\n`;

        bot.sendMessage(chatId, resp, option);
    }catch(e){
        const resp = `Off-line. \n*Update:*  ${now}`;
        bot.editMessageText(resp, option);
        bot.sendMessage(chatId, resp, option);

    }

  });

};
