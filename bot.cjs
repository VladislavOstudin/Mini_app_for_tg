const { Telegraf } = require('telegraf');

// ЗАМЕНИ на свой токен от BotFather
const bot = new Telegraf('7620135302:AAGTvgEU71ZVm2lBVz9n_vybceknWpV2KzQ');

bot.start((ctx) => {
  ctx.reply('Привет! Нажми, чтобы открыть приложение 👇', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Открыть приложение',
          web_app: { url: 'https://mini-app-for-tg.vercel.app/' },
        },
      ]],
    },
  });
});

bot.launch();
console.log('🤖 Бот запущен');
