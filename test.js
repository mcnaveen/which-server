var whichServer = require("./index");

async function getdata() {
  let url = "https://google.com";
  const data = await whichServer(url);
  console.log("This website uses: " + data);
}

getdata();
