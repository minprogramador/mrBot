'use strict';

const bot   = require('./bot');
const shild = require("./shild");

exports.restart = (msg, match) => {
    shild.stopPid();
    setTimeout(function() {
        shild.runPid('/Users/bruno/Desktop/public/demo/main.php');
        const chatId = msg.chat.id;
        const resp   = 'Pronto ze mane, restart Ok.';
        bot.sendMessage(chatId, resp);
    }, 1500);
};
