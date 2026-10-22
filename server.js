
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({
    name: "Slime AFK Client",
    status: "Hazır",
    bots: []
  });
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Slime AFK Client: http://localhost:3000");
});
