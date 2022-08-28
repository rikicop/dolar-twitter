//Puppeteer library
const pt = require("puppeteer");
async function getText() {
  //launch browser in headless mode
  const browser = await pt.launch();
  //browser new page
  const page = await browser.newPage();
  //launch URL
  await page.goto("https://www.tutorialspoint.com/about/about_careers.htm");
  //identify element with attribute selector
  let n = [];
  n = await page.$$("h2");
  //obtain text
  const t = await (await n[0].getProperty("textContent")).jsonValue();
  console.log("Obtained text is: " + t);
  //PDF
  //await page.pdf({ path: "hn.pdf", format: "a4" });
  //IMAGE
  //await page.screenshot({ path: "example.png" });
}
getText();
