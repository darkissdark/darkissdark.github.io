const puppeteer = require('puppeteer');
const path = require('path');
const { exec } = require('child_process');

const server = exec('npx http-server public -p 8080 -c-1', { stdio: 'ignore' });

setTimeout(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/viktor_medvid_cv.html', { waitUntil: 'networkidle0' });
    await page.pdf({
        path: path.resolve(__dirname, '../public/viktor_medvid_cv.pdf'),
        format: 'A4',
        printBackground: true,
        margin: { top: 24, bottom: 24, left: 24, right: 24 },
    });
    await browser.close();
    server.kill();
    console.log('PDF generated at: public/viktor_medvid_cv.pdf');
}, 2000);
