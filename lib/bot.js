'use strict';

const config      = require('../config/config');
const TelegramBot = require('node-telegram-bot-api');

const bot   = new TelegramBot(config.token, {polling: true});

module.exports = bot;