require('dotenv').config();

const express = require("express");
const router = require('./route/auth-router');
const connectDB = require('./utils/db.js');
const handleError = require("./middlewares/handleError");
const cors = require('cors');
const spamRouter = require('./route/spamRoutes.js');

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",            // local dev
    "https://ztex-web.vercel.app"      // deployed frontend
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.use('/api/spam', spamRouter);

app.use(handleError);

connectDB().then(() => {
  console.log("Database connected");

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

}).catch(err => {
  console.log("DB Connection Error:", err);
});
