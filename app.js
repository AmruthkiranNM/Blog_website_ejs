import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Temporary in-memory post storage
let posts = [];

// Home route - show all posts
app.get("/", (req, res) => {
  res.render("home.ejs", { posts });
});

// Compose route - render form
app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

// Handle new post submission
app.post("/compose", (req, res) => {
  const post = {
    id: Date.now().toString(),
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  res.redirect("/");
});

// Edit route
app.get("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  res.render("edit.ejs", { post });
});

// Handle edit form
app.post("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  post.title = req.body.postTitle;
  post.content = req.body.postBody;
  res.redirect("/");
});

// Delete route
app.post("/delete/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== req.params.id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
