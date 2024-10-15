# starter-javascript
Start Repo to get started with Switchgrid

This project uses https://github.com/readmeio/api


## Getting Started
- Clone this repo
- Run `npm install`
- Create an .env file at the root containing `API_TOKEN=<your api token>`
- Run `npm run start` and follow instructions

If you want to erase all the data and start fresh, run `npm run reset`

## To use this API in your own project


1. Install the API SDK
    - run `npx api install https://app.switchgrid.tech/openapi-spec/json -y -i switchgrid -l js-cjs`
    - Follow instructions



## To update the API in this project 
Run `npm run update-api`. This will erase the .api folder and re-install the Switchgrid API SDK, from the latest version of the API spec.