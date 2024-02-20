import express from "express";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json({
      message: "Hey there",
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

app.listen(PORT, (err) => {
  if (err) console.error(`Error running server: ${err.message}`);
  console.log(`Server is running on port ${PORT}`);
});
