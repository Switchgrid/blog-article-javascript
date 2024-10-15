const switchgrid = require("@api/switchgrid");
const fs = require("fs");
const { userPressEnter } = require("./userPressEnter");

async function signAsk() {
  switchgrid.auth(process.env.API_TOKEN);

  const askId = fs.readFileSync("output/askId.txt", "utf8");

  const {
    data: { consentCollectionDetails, status },
  } = await switchgrid.getAsk(
    {
      askId,
    },
    {
      "switchgrid-test-env": true,
    }
  );

  if (status === "ACCEPTED") {
    console.log("The ask is already signed");
    return;
  }

  if (consentCollectionDetails) {
    console.log(
      `Opening the consent in your browser: ${consentCollectionDetails.userUrl}`
    );
    const { default: open } = await import("open");
    await open(consentCollectionDetails.userUrl);
  }
  await userPressEnter("Sign the consent and press Enter to continue");
}

exports.signAsk = signAsk;
