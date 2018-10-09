const maxNodeApi = require("max-api");

maxNodeApi.addHandler("hoge", (...args) => {
  maxNodeApi.outlet("fuga");
});