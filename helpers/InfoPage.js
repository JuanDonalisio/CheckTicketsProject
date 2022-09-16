const cheerio = require("cheerio");
const axios = require("axios");

module.exports = function getPageInformation() {
  axios.get(process.env.ENDPOINT_FLYB).then((urlResponse) => {
    const $ = cheerio.load(urlResponse.data);
    return $("div.jsx-989261841").text();
  });
};
