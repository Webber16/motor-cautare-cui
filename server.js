const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const { response } = require("express");
const app = express();
app.use(cors());
app.listen(8080, () => console.log("listening at 8080"));
app.use(express.json({ limit: "10mb" }));
// app.use(express.static(path.join(__dirname, "build")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.post("/", (request, responsing) => {
  // response.send("RASPUNS");

  console.log(request.body);
  fetch("https://webservicesp.anaf.ro/PlatitorTvaRest/api/v4/ws/tva", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.body),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      responsing.send(response);
    });
});
//
