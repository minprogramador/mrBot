'use strict';

const bot   = require('../../../lib/bot');

module.exports = function(msg) {

    const chatId = msg.chat.id;
    const opts   = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: '🔎 status',
                        callback_data: 'status'
                    },
                    {
                        text: '🔥 start',
                        callback_data: 'start'
                    },                    
                    {
                        text: '🛑 stop',
                        callback_data: 'stop'
                    }
                ]
            ]
        }
    };

    return bot.sendMessage(chatId, 'Qual o seu desejo ?', opts);
};
