/*const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  transform: (body) => {
    return cheerio.load(body);
  }
};

const urls = ["https://nodejs.org/ja/"]

const promises = urls.map((url)=> {
  return (async () => {
    try {
      const $ = await rp.get(url, options);
      return $('.home-downloadbutton').text();
    } catch(error) {
      console.error('Error:', error);
    }
  })();
});
Promise.all(promises).then((result) => {
  console.log(result);
});*/


const fetch = require("node-fetch");
const fs = require("fs");
async function main() {
  try {
    const response = await fetch("https://nodejs.org/download/release/index.json");
    let json = await response.text();
    json = JSON.parse(json)
    fs.writeFileSync("now_latest", json[0].version);
    let lts = json.filter((index) => {
      if (index.lts) {
        return true;
      }
    });
    fs.writeFileSync("now_lts", lts[0].version);
  } catch(error) {
    console.log(error)
  }
}

main();
