import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import dotenv from 'dotenv'
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN ?? "")


bot.command('quit', async (ctx) => {
  await ctx.telegram.leaveChat(ctx.message.chat.id)
  await ctx.leaveChat()
})

bot.on(message('text'), async (ctx) => {
  await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
  await ctx.reply(`Hello ${ctx.state.role}`)
})

bot.on('callback_query', async (ctx) => {
  await ctx.telegram.answerCbQuery(ctx.callbackQuery.id)
  await ctx.answerCbQuery()
})

bot.on('inline_query', async (ctx) => {
  const result: any = []
  await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)
  await ctx.answerInlineQuery(result)
})

bot.launch()
console.log('[+] Bot started')

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))