import TelegramBot from 'node-telegram-bot-api';

const token = process.env.API_TOKEN as string;
const bot = new TelegramBot(token, { polling: false });

const chatId = process.env.CHAT_ID as TelegramBot.ChatId;

export const updateStickers = async () => {
  // const res = await bot.getStickerSet('koreacovid');
  // const prevFiles = res.stickers.forEach(v => v.file_unique_id);
};

export const sendPhoto = async (buffer: Buffer) => {
  await bot.sendPhoto(chatId, buffer);
};