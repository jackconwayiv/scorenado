import express, { Request, Response } from "express";
import { Category, Game, Score, Template } from "../db";
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

//can I remove "Game" from deepest level and still get Scores only by game?
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

//fetch all games - for load game page - eventually should only return YOUR incomplete games
app.get("/api/games", async (req: Request, res: Response) => {
  try {
    const allGames = await Game.findAll({
      include: [
        {
          model: Template,
          as: "template",
        },
      ],
    });
    res.send(allGames);
  } catch (error: unknown) {
    console.error(
      `Sorry, we encountered an error while trying to load your games: `,
      error,
    );
  }
});

//fetch all templates - for landing / new game page
app.get("/api/templates", async (req: Request, res: Response) => {
  try {
    const allTemplates = await Template.findAll();
    res.send(allTemplates);
  } catch (error: unknown) {
    console.error(
      `Sorry, we encountered an error while trying to load game templates: `,
      error,
    );
  }
});

//creates a new template, then attaches all categories to that template (hopefully in sequence)
app.post("/api/templates", async (req: Request, res: Response) => {
  try {
    const newTemplateData = req.body.newTemplate;
    const newTemplate = await Template.create({ ...newTemplateData });
    const categories = req.body.categories;
    categories.forEach(
      async (category: any) =>
        await Category.create({ ...category, templateId: newTemplate.id }),
    );
    res.status(201).send(newTemplate);
  } catch (error: unknown) {
    console.error(
      `Sorry, we encountered an error while trying to create a new game template and its corresponding scoring categories: `,
      error,
    );
  }
});

//creates a new instance of a game by template
app.post("/api/templates/:id", async (req: Request, res: Response) => {
  try {
    const templateId: number = parseInt(req.params.id);
    const newGame = await Game.create({
      playerName1: "Player1",
      playerName2: "Player2",
      playerName3: "Player3",
      playerName4: "Player4",
      playerName5: "Player5",
      playerName6: "Player6",
      playerName7: "Player7",
      playerName8: "Player8",
      templateId,
    });
    res.send(newGame);
  } catch (error: unknown) {
    console.error(
      "Sorry, we encountered an error while trying to create that game: ",
      error,
    );
  }
});

//create initial score records
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

//update existing score records
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
      returning: true,
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

export default app;
