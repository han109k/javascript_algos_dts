async function getStockInfo(date) {
  const http = require("https");
  const url = "https://jsonmock.hackerrank.com/api/stocks?date=" + date;
  return new Promise(function (resolve, reject) {
    const req = http.request(url, (res) => {
      // on bad status, reject
      req.on("error", (error) => {
        console.error(error);
        reject(error);
      });

      // on response data, cumulate it
      let output = "";
      res.on("data", (chunk) => {
        output += chunk;
      });

      // on end, parse and resolve
      res.on("end", () => {
        let obj = JSON.parse(output);

        if(!obj.data[0]) {
          resolve("")
        } else {
          const keys = Object.keys(obj.data[0]);
          for(let i = 1; i < keys.length; i++){
            process.stdout.write(`${keys[i]}: ${obj.data[0][keys[i]]}\n`);
            // console.log(keys[i], obj.data[0][keys[i]]);
          }
        }
      });
    });

    req.end();
  });
}

getStockInfo("5-January-2000");
