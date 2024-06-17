import dotenv from 'dotenv'
dotenv.config();

import bot from './bot';

bot.launch().then(() => {
  console.log('[+] Bot started')
}).catch((err) => {
  console.error(err)
  process.exit(1)
})



