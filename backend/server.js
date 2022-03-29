// Import Modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;

// Serve static files
const root = require("path").join(__dirname, "../frontend", "build");
app.use(express.static(root));

// Load Main Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

// Set port for site to run on
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
