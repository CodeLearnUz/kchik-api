const express = require("express");
const cors = require("cors");

const app = express();

// Blog post
app.use(express.json());

app.use(cors());

// Rout init
app.use("/posts", require("./routes/post.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});