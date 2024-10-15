require("dotenv").config();
const fs = require("fs");

const { createAsk } = require("./src/createAsk");
const { getData } = require("./src/getData");
const { placeOrder } = require("./src/placeOrder");
const { signAsk } = require("./src/signAsk");
const { userPressEnter } = require("./src/userPressEnter");

async function program() {
  try {
    fs.mkdirSync("output", { recursive: true });

    await createAsk();
    await signAsk();
    await placeOrder();
    await userPressEnter("press Enter to try to collect the data");
    await getData();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    if (error.data) {
      console.error(error.data);
    }
  }
}

program();
