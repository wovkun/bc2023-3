const fs = require('node:fs');
const data = fs.readFile('data.json', (err, data) => {
  if (err === null) {
    console.log(data.toString());
  } else {
    console.log(err);
  }

  const jsonData = JSON.parse(data);

  let outputString = '';

  jsonData.forEach((record) => {
    const stockCode = record.StockCode;
    const valCode = record.ValCode;
    const attraction = record.Attraction;

    outputString += `${stockCode}-${valCode}-${attraction}\n`;
  });

  fs.writeFile('output.txt', outputString, (err) => {
    if (err) {
      console.log('Error!'(err));
      return;
    }
    console.log('Результати були збережені у файлі output.txt');
  });
});
