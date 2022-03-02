const axios = require('axios');

async function getServerName(url) {
  const response = await axios.get(url);
  const serverName = response.headers["server"];
  return serverName;
}

module.exports = getServerName;