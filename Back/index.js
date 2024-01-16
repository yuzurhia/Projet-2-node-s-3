// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("This is my server response!");
// });

// server.listen(process.env.PORT || 3000);

import path from "path";
import fs from "fs";

//--------------------------------------------------------------------
//                  Load modules
//--------------------------------------------------------------------
let modulesPromises = [];
const files = fs.readdirSync(path.resolve("src", "modules"), {
  withFileTypes: true,
});
for (const index in files) {
  const file = files[index];
  if (file.isFile()) {
    const { default: module } = await import("./src/modules/" + file.name);

    if (module.name === "load") {
      console.log("Loading module " + file.name);
      const load = module();
      modulesPromises.push(load);
    }
  }
}
Promise.all(modulesPromises)
  .then(function (values) {
    console.log("Load ended :", values);
  })
  .catch(function (reason) {
    console.error("Error !", reason);
    process.exit();
  });
