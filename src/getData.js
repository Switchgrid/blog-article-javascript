const switchgrid = require("@api/switchgrid");
const fs = require("fs");

async function getData() {
  const orderId = fs.readFileSync("output/orderId.txt", "utf8");

  const {
    data: { requests, status },
  } = await switchgrid.getOrder({
    orderId,
  });

  if (status === "PENDING_REQUESTS") {
    console.error(
      "🟠 The data is not yet available, please retry in a couple of minutes"
    );
    return;
  }

  if (status === "SOME_REQUESTS_FAILED") {
    console.error("❌ Some requests have failed.");
    return;
  }

  if (requests[0] === undefined) {
    console.error("No request found");
    return;
  }

  try {
    const { data } = await switchgrid.getRequestData({
      period: "1h",
      format: "csv",
      requestId: requests[0].id,
    });

    const fileName = "output/data.csv";
    fs.writeFileSync(`./${fileName}`, data);
    console.log(`✅ Data saved in ${fileName}`);
  } catch (error) {
    throw new Error(`Error while getting data: ${error.message}`);
  }
}

exports.getData = getData;
