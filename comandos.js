'use strict';

process.env.NTBA_FIX_319 = 1;
const config = require('./config');
const shild = require("./shild");
const bot   = require('./bot');
const infourl = require('./src/mrBot/infourl');

exports.run = (msg, match) => {


  shild.runPid(config.filerun);
  
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
    shild.runPid(config.filerun);
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

exports.status = function(chatId, message_id) {

  infourl(function(res) {
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
                            text: '🔄 atulizar',
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

    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var now = date+' '+time;
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
                      `\n*Update:*  ${now}`+
                       `\n`;
                       // "*Load a 1m:*     "+res.serverinfo.load_oneMin+"\n"+
                       // "*Load a 5m:*     "+res.serverinfo.load_fiveMin+"\n";
                       // "*Total tasks:*    "+res.serverinfo.totalTasks+"\n"+
                       // "*Men total:*       "+res.serverinfo.men_total+"\n"+
                       // "*Men usada:*    "+res.serverinfo.men_usado+"\n"+
                       // "*Men livre:*       "+res.serverinfo.men_livre+"\n"+
                       // "*Data start:*     "+res.start+"\n\nFim status.";

        bot.editMessageText(resp, option);
    }catch(e){
        const resp = 'merda';
        bot.editMessageText(resp, option);

    }

  });

}

exports.reboot = function() {
  shild.stopPid();

  setTimeout(function() {
    shild.runPid(config.filerun);
  }, 1000);
  return true;
}

exports.config = (msg, match) => {

  const chatId = msg.chat.id;
  //const resp   = match[1];
  const resp   = 'Config????...';

  bot.sendMessage(chatId, resp);

}

exports.init = function(msg) {


// bot.sendMessage(chatId, 'Qual o seu desejo ?', opts);


// //  bot.sendMessage(chatId, 'Aguarde...');
};

