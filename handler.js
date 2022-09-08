const {createTransaction} = require('./dynamo');
const cheerio = require('cheerio');
const axios = require('axios');



exports.hello = async (event) => {
  const test = axios.get('https://www.allaccess.com.ar/event/harry-styles-2022').then(urlResponse => {
    const $ = cheerio.load(urlResponse.data);
    //console.log($('div.event_info').text());
    return $('div.event_info').text()
    });
    const tuki = await test;
    await createTransaction(tuki)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:  "test"
      },
      null,
      2
    ),
  };
};
