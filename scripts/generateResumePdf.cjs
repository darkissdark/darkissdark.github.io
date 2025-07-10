const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const resumeHtmlPath = path.resolve(__dirname, '../public/resume.html');
    const resumePdfPath = path.resolve(__dirname, '../public/resume.pdf');

    await page.goto('file://' + resumeHtmlPath, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: resumePdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: 24, bottom: 24, left: 24, right: 24 },
    });

    await browser.close();
    console.log('PDF generated at:', resumePdfPath);
})();
