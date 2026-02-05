const express = require("express");
const router = require('./route/auth-router');
const connectDB = require('./utils/db.js');
const handleError = require("./middlewares/handleError");
const cors = require('cors');
const spamRouter = require('./route/spamRoutes.js');

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.use('/api/spam', spamRouter);





//error handleer
app.use(handleError);
//connectDB
connectDB().then(async () => {
  console.log("Database connected");
  app.listen(8080, () => {
    console.log("Server is running on port 8080");
  });
}).catch(err => {
  console.log(" DB Connection Error:", err);
});
