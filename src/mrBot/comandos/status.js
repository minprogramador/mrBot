'use strict';

const bot   = require('./bot');

exports.status = (msg, match) => {
    const chatId = msg.chat.id;
    
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
};