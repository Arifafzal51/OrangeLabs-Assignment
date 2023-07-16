const puppeteer = require('puppeteer');

async function performSwap() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://swap.defillama.com/', { waitUntil: 'networkidle2' });

    await page.type('input[name="chain"]', 'Arbitrum One');
    await page.type('input[name="You Sell"]', '12');
    await page.type('input[name="tokenOut"]', 'WBTC');
    await page.type('input[name="tokenIn"]', 'USDC');

    await page.waitForSelector('.route-wrapper');

    const secondOption = await page.$$('.route-item')[1];
    await secondOption.click();

    await new Promise(() => {});
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    //await browser.close();
  }
}

performSwap();
