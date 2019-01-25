'use strict';

const bot   = require('./bot');
const shild = require("./shild");

exports.stop = (msg, match) => {
    shild.stopPid();
    const chatId = msg.chat.id;
    const resp   = 'Apis paradas...., stop Ok.';
    return bot.sendMessage(chatId, resp);
};
