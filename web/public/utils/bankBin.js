const fs = require('fs');
const path = require('path');

const bankBinsJson = {};

let bankBins = fs.readFileSync(path.join(__dirname, 'bankData.json'), { flag: 'r', encoding: 'utf-8' });

bankBins = bankBins.trim();
bankBins = JSON.parse(bankBins);

for (let bankBin of bankBins) {
  let [bankName, cardType, cardCategory] = bankBin.bankName.split('-');
  bankBinsJson[bankBin.bin] = {
    name: bankName,
    type: cardType,
    category: cardCategory
  }
}

bankBins = undefined;

module.exports = bankBinsJson;
