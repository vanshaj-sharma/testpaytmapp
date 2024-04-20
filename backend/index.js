const express = require("express");
const rootRouter = require("./routes/index");
var cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log("Backend currently active at " + PORT);
});
