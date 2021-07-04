const express = require("express");

const app = express();

connectDB();

//init middleware

app.get("/", (req, res) => res.send("API RUNNING"));
// define routes
app.use("/api/index", require("./routes/api/index"));
app.use("/api/homeroutes", require("./routes/api/homeroutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
