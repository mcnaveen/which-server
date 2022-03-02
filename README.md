# Which Web Server is running?
:unicorn: Simple utility to find which webserver is running.

![Build](https://github.com/mcnaveen/which-server/workflows/Build/badge.svg)

### :package: Requirements
- Node.js 12X LTS or 14X LTS 📦

### :sparkles: Installation

- Install the NPM Package with the below command:
```
npm install which-server --save
``` 

 (or)

- Install with Yarn:
```
yarn add which-server
```

### :pen: Usage

- Import the module in your project:

```javascript
import getServerName from "which-server";
```

### :bulb: Example

- Import the module in your project
- Pass the URL of the website to get the server name
- Make sure to use Async/Await function

```javascript
import getServerName from "which-server";

async function getdata(){
    let url = "https://google.com";
    const data = await getServerName(url);
    console.log("This website uses: " + data);
}

getdata();
```

### :ballot_box_with_check: Example Output
```
This website uses: gws
```
---


#### :green_heart: Message

I hope you find this useful. If you have any questions, please create an issue.


import getServerName from "which-server";

async function getdata(){
    let url = "https://google.com";
    const data = await getServerName(url);
    console.log("This website uses: " + data);
}

getdata();