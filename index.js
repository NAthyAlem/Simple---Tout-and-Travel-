import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/signin", (req, res) => {
  res.render("sign-in.ejs");
});
app.get("/signup", (req, res) => {
  res.render("sign-up.ejs");
});

app.post("/signin", (req, res) => {
  res.render("home.ejs");
});
app.post("/signup", (req, res) => {
  res.render("sign-in.ejs");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
