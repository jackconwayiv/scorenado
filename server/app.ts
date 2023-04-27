import express, { Request, Response } from "express";
import { Game } from "../db";
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Configure Express to use EJS
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// auth and api routes
// app.use("/auth", require("./auth"));
// app.use("/api", require("./api"));

// static file-serving middleware
// app.use(express.static(path.join(__dirname, "..", "public")));

//fetch a full game object -- is there a way to exclude the scores associated with the game, and only have it associated with the category?
//i.e. will i run into trouble when there are multiple games with the same template and categories? will it aggressively load all scores for that category?
app.get("/api/games/:id", async (req: Request, res: Response) => {
  try {
    const gameId: number = parseInt(req.params.id);
    console.log("gameId is ", gameId);
    const myGame = await Game.findByPk(gameId, {
      // include: { model: Template, as: "template" },
      include: { all: true, nested: true },
    });
    console.log("myGame is ", myGame);
    res.send(myGame);
  } catch (error: unknown) {
    console.error("Sorry, we encountered an error: ", error);
  }
});

// // define a route handler for the default home page
// app.get(
//   "/",
//   (error: unknown, req: Request, res: Response, next: NextFunction) =>
//     res.send("base uri"),
// );

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
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public/index.html"));
// });

// error handling endware
// app.use((err, req, res, next) => {
//   console.error(err);
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || "Internal server error.");
// });

export default app;
