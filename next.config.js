const withTypescript = require("@zeit/next-typescript");
const withOffline = require("next-offline");
module.exports = withOffline(withTypescript());
