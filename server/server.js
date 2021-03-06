const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(static("client/build"));
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
