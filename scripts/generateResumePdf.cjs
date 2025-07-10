const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    const htmlPath = path.resolve(__dirname, '../public/viktor_medvid_cv.html');
    await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
    await page.pdf({
        path: path.resolve(__dirname, '../public/viktor_medvid_cv.pdf'),
        format: 'A4',
        printBackground: true,
        margin: { top: 24, bottom: 24, left: 24, right: 24 },
    });
    await browser.close();
    console.log('PDF generated at: public/viktor_medvid_cv.pdf');
})();
