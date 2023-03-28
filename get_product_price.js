import { load } from "cheerio";
import puppeteer from "puppeteer";

async function getAmazonPrice(item) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1000,
      height: 1000,
    },
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: false,
  });

  const page = await browser.newPage();

  // go to amazon.in
  await page.goto("https://www.amazon.in/");

  // Type the item name in the search box and press search
  await page.type("input#twotabsearchtextbox", item);
  await page.click("input#nav-search-submit-button");

  // Wait for the results to load
  await page.waitForSelector("span.a-price-whole", {
    visible: true,
  });

  await page.screenshot({ path: "amazon_screenshot.png" });

  // Get the HTML for cheerio
  const htmlContent = await page.content();
  // use cheerio to interact with the HTML
  const $ = load(htmlContent);

  // get the price
  const price = $("span.a-price-whole").first().text();

  // get the link of the product
  const link = $("a.a-link-normal.s-no-outline").first().attr("href");

  await browser.close();

  return {
    link: "https://amazon.in" + link,
    price: price,
  };
}

async function getMyntraPrice(item) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1000,
      height: 1000,
    },
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: false,
  });

  const page = await browser.newPage();

  // go to myntra.com
  await page.goto("https://www.myntra.com/");

  // Type the item name in the search box and press search
  await page.type("input.desktop-searchBar", item);
  await page.click("a.desktop-submit");

  // Wait for the results to load
  await page.waitForSelector(".product-discountedPrice", {
    visible: true,
  });

  await page.screenshot({ path: "myntra_screenshot.png" });

  // Get the HTML for cheerio
  const htmlContent = await page.content();
  // use cheerio to interact with the HTML
  const $ = load(htmlContent);

  // get the price
  const price = $(".product-discountedPrice").first().text();

  // get the first product
  const prod = $(".product-imageSliderContainer").first();
  // get the link of the product
  const link = prod.parent().attr("href");

  await browser.close();

  return {
    link: "https://myntra.com/" + link,
    price: price.split("Rs. ")[1],
  };
}

async function getPrices(item) {
  return {
    amazon: await getAmazonPrice(item),
    myntra: await getMyntraPrice(item),
  };
}

(async () => {
  const item = "white tshirt";
  const result = await getPrices(item);
  console.log(result);
})();
