'use strict';

const bot   = require('../../../bot');

module.exports = function(msg) {

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
                        text: '🛑 stop',
                        callback_data: 'stop'
                    },
                    {
                        text: '🔎 status',
                        callback_data: 'status'
                    }
                ]
            ]
        }
    };

    return bot.sendMessage(chatId, 'Qual o seu desejo ?', opts);
};
