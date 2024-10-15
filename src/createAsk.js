const switchgrid = require("@api/switchgrid");
const fs = require("fs");

async function createAsk() {
  switchgrid.auth(process.env.API_TOKEN);

  if (fs.existsSync("output/askId.txt")) {
    return;
  }

  const {
    data: { id: askId, consentCollectionDetails, status },
  } = await switchgrid.ask(
    {
      electricityContracts: [
        {
          prm: "00000000000022",
          address: {
            street: "1 rue de la paix",
            postalCode: "75001",
            city: "Paris",
            country: "France",
          },
          heldBy: {
            genre: "F",
            firstName: "Jeanne",
            lastName: "Dupont",
            email: "joe@domain.com",
          },
        },
      ],
      signer: {
        genre: "F",
        firstName: "Thomas",
        lastName: "Dupont",
        email: "joe@domain.com",
        phone: "+33600000000",
      },
      consentCollectionMedium: {
        service: "WEB_HOSTED",
      },
      consentDuration: "1 week",
      scopesAndPurpose: [
        {
          scopes: [
            {
              id: "ELECTRICITY_TIMESERIES",
              args: {
                types: ["LOADCURVE"],
                directions: ["CONSUMPTION"],
              },
            },
          ],
          purposes: ["ENERGY_PERFORMANCE_STUDY"],
        },
      ],
      options: {
        skipAddressCheck: true,
      },
    },
    {
      "switchgrid-test-env": true,
    }
  );

  if (status === "ADDRESS_CHECK_FAILED") {
    console.error(
      "L'adresse, le nom du titulaire et le PDL ne correspondent pas"
    );
    return;
  }

  fs.writeFileSync("output/askId.txt", askId);
}

exports.createAsk = createAsk;
