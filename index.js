const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 720
    });
    const website_url = 'https://www.bannerbear.com/blog/how-to-convert-html-into-pdf-with-node-js-and-puppeteer/';
    await page.goto(website_url, {
      waitUntil: 'networkidle0'
    });
    await page.screenshot({
      path: 'screenshot.jpg',
    });

    await browser.close();

  } catch (error) {
    context.error(error);

  }
})();

context.log('done');
