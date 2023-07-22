const express = require("express");
const adminRoutes = require("./src/admin/routes");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/admin", adminRoutes);

app.listen(port, () => console.log(`app listen on port ${[port]}`));
