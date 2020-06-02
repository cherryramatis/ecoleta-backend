import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("listagem de usuarios");

  res.json(["Daniel", "Cherry"]);
});

app.listen(3333);
