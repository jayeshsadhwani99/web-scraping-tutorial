import puppeteer from "puppeteer";

async function takeScreenshot(url) {
  // When using puppeteer, the first step
  // is to launch the browser

  // We can set default options
  // like the size of the browser we want to open
  // if we want the interaction, we can toggle headless: false
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 500,
      height: 500,
    },
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: false,
  });

  // Next step is to open a new page
  // Basically like you would do yourself
  // when visiting a webpage
  const page = await browser.newPage();

  // We just visit the website now
  await page.goto(url);

  // A generic function to get the website name from the url
  const getWebsiteName = (url) => {
    return url.split("://")[1].split(".")[0];
  };

  // Take the screenshot
  await page.screenshot({
    path: `./${getWebsiteName(url)}_screenshot.png`,
  });

  // Get the pdf
  await page.pdf({ path: `./${getWebsiteName(url)}_pdf.pdf`, format: "A4" });

  // Always close the browser when done,
  // Just like in real life
  await browser.close();
}

(async () => {
  const url = "https://google.com";
  await takeScreenshot(url);
})();
