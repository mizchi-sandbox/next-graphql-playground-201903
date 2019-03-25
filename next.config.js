const withTypescript = require("@zeit/next-typescript");
const withOffline = require("next-offline");

const IS_PROD = process.env.NODE_ENV === "production";

const config = {
  target: IS_PROD ? "serverless" : "server",
  workboxOpts: {
    swDest: "static/service-worker.js"
  }
};

module.exports = withOffline(withTypescript(config));
