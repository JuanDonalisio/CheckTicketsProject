const cheerio = require("cheerio");
const axios = require("axios");

module.exports = async function getPageInformation() {
  const information = await axios.get("https://flybondi.com/ar/search/results?adults=2&children=0&currency=ARS&departureDate=2022-10-27&fromCityCode=BUE&infants=0&toCityCode=COR").then((urlResponse) => {
    const $ = cheerio.load(urlResponse.data);
    return $("div.jsx-989261841").text();
  });
  return information;
};
