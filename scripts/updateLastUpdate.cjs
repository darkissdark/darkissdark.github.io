const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const lastCommitDate = execSync('git log -1 --format=%cd --date=short').toString().trim();

const content = `export default '${lastCommitDate}';\n`;

fs.writeFileSync(path.join(__dirname, '../lastUpdate.js'), content);
console.log('lastUpdate.js updated:', lastCommitDate);
