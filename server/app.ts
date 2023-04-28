import express, { Request, Response } from "express";
import { Category, Game, Score, Template } from "../db";
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Configure Express to use EJS
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// static file-serving middleware
// app.use(express.static(path.join(__dirname, "..", "public")));

//feels incorrect to re-include Game at the deepest nest level but this produces the desired data shape (for now)
app.get("/api/games/:id", async (req: Request, res: Response) => {
  try {
    const gameId: number = parseInt(req.params.id);
    const myGame = await Game.findByPk(gameId, {
      include: [
        {
          model: Template,
          as: "template",
          include: [
            {
              model: Category,
              as: "categories",
              include: [
                {
                  model: Score,
                  as: "scores",
                  include: [
                    {
                      model: Game,
                      as: "game",
                      where: { id: gameId },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    res.status(201).send(myGame);
  } catch (error: unknown) {
    console.error(
      `Sorry, we encountered an error while trying to load game #${req.params.id}: `,
      error,
    );
  }
});

app.post("/api/score", async (req: Request, res: Response) => {
  try {
    const newScore = await Score.create(req.body);
    res.send(newScore);
  } catch (error: unknown) {
    console.error(
      "Sorry, we encountered an error while trying to save that score: ",
      error,
    );
  }
});
app.put("/api/score", async (req: Request, res: Response) => {
  try {
    const { categoryId, gameId } = req.body;
    if (!categoryId || !gameId) {
      throw new Error("Your update request is missing required fields.");
    }
    const [rowsUpdated, [updatedScore]] = await Score.update(req.body, {
      where: {
        categoryId,
        gameId,
      },
      returning: true, // ensure that updated record is returned
    });
    if (rowsUpdated === 0) {
      throw new Error("No scores were updated.");
    }
    res.send(updatedScore);
  } catch (error: unknown) {
    console.error(
      "Sorry, we encountered an error while trying to update that score: ",
      error,
    );
    res.status(500).send({ message: "Internal server error." });
  }
});

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
