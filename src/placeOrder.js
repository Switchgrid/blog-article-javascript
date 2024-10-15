const switchgrid = require("@api/switchgrid");
const fs = require("fs");

async function placeOrder() {
  switchgrid.auth(process.env.API_TOKEN);

  // Take the first consentId to do the order
  if (!fs.existsSync("output/askId.txt")) {
    throw new Error("No ask Id found");
  }

  if (fs.existsSync("output/orderId.txt")) {
    console.log("Order already placed");
    return;
  }

  const askId = fs.readFileSync("output/askId.txt", "utf8");

  const {
    data: { consentIds, status },
  } = await switchgrid.getAsk({
    askId,
  });

  if (status !== "ACCEPTED") {
    signConsent();
  }

  const consentIdsArray = Object.values(consentIds);

  if (consentIdsArray.length === 0) {
    throw new Error(`Consent is not yet available (ask status is ${status})`);
  }

  const consentId = consentIdsArray[0];

  const {
    data: { orderId },
  } = await switchgrid.order({
    consentId,
    requests: [
      {
        type: "LOADCURVE",
        direction: "CONSUMPTION",
      },
    ],
  });

  fs.writeFileSync("output/orderId.txt", orderId);
}

exports.placeOrder = placeOrder;
