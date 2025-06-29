const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { initializeConnection } = require("./db/db.connect");
const jobRoutes = require("./routes/job.route");
dotenv.config();

app.use(
  cors({
    origin: "https://phenomenal-meerkat-c7f5d4.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
initializeConnection();

app.use("/job", jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
