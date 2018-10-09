const maxNodeApiMock = require("./node_dist/MaxNodeApiMock.js");
const main = require("./node_dist/app/Main.js");

new main.Main(new maxNodeApiMock.MaxNodeApiMock(process), process);