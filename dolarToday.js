//Puppeteer library
const pt = require("puppeteer");
const fs = require("fs");

async function getText() {
  try {
    const browser = await pt.launch();
    const [page] = await browser.pages();

    await page.goto("https://twitter.com/DolarToday", {
      waitUntil: "networkidle0",
    });
    const data = await page.evaluate(
      () =>
        document.querySelector("main > div > div > div > div > div").innerHTML
    );
    //console.log(data);
    //REGEX For MATCHING
    //let expresion = /cotiza a Bs.(.+?)/g;
    //hallado = data.match(expresion);
    //console.log(hallado);

    fs.writeFile("cotizacion.txt", data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    await browser.close();
  } catch (err) {
    console.error(err);
  }
}
getText();

//https://twitter.com/DolarToday
