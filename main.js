import express from "express";
import movieRoutes from "./routes/movies.route.js";

const app = express();
const PORT = 6969;
app.get("/", (req, res) => {
  res.json({ msg: "Hello students!" });
});

//CRUD functionalities of movies
app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

//DRY principle - Don't Reapeat Yourself
//KISS Priniciple - Keep it Simple, Stupid
