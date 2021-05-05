const cheerio = require("cheerio")

const puppeteer = require("puppeteer");

const getScoreInfo = async (playerId) => {
    const targetURL = `https://www.nba.com/stats/player/203081/`
    const browser = await puppeteer.launch({
        args: [
            '--window-size=1920,1080',
        ]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1500 })

    // const navigationPromise = page.waitForNavigation({
    //     waitUntil: "domcontentloaded"
    // });

    await page.goto(targetURL);

    // await navigationPromise;

    await page.click("#onetrust-accept-btn-handler");

    await page.screenshot({
        path: "nbaWebsite.png"
    });

    let body = await page.content()

    let $ = await cheerio.load(body);

    const result = [];

    await $("td.first").each((i, newData) => {
        result.push($(newData).text())
    });

    await browser.close();

    console.log(result)

    const formattedData = formatData();
};

const formatData = () => {

};

module.exports = getScoreInfo;
