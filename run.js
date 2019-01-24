

process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');

const token = '714388705:AAH8z02IcJrwAdWZNN8GPvE6gfG7-XU03Qo';
const bot   = new TelegramBot(token, {polling: true});

bot.onText(/\/start (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp   = match[1];
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/stop (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp   = match[1];
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/restart (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp   = match[1];
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/status (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp   = match[1];
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/config (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp   = match[1];
  bot.sendMessage(chatId, resp);

});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});

console.log('bot on...');