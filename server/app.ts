import express from "express";
import path from "path";

const app = express();

// const morgan = require("morgan");

// logging middleware
// app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

// define a route handler for the default home page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html")),
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error("Not found");
//     err.status = 404;
//     next(err);
//   } else {
//     next();
//   }
// });

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
// app.use((err, req, res, next) => {
//   console.error(err);
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || "Internal server error.");
// });

export default app;
