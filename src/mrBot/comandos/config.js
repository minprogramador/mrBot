'use strict';

const bot   = require('./bot');

exports.config = (msg, match) => {

    const chatId = msg.chat.id;
    const resp   = 'Config????...';
    bot.sendMessage(chatId, resp);

}
