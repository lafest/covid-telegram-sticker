import Jimp from 'jimp';
import { sendPhoto } from './src/telegramBot';

const main = async () => {
  const font128 = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
  const font16 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const image = await Jimp.read('images/sample_white_bg.png');

  image.print(
    font128,
    0,
    0,
    {
      text: '3,123',
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
    },
    512,
    512,
  );
  image.print(
    font16,
    0,
    0,
    {
      text: '2021-12-04T00:00:00.000+09:00',
      alignmentX: Jimp.HORIZONTAL_ALIGN_RIGHT,
      alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM,
    },
    502,
    502,
  );
  // await image.writeAsync('test.png');
  const testImage = await image.getBufferAsync(Jimp.MIME_PNG);
  await sendPhoto(testImage);
};

main();