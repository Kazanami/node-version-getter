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
