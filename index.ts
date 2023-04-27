import dotenv from "dotenv";
import express, { Express } from "express";
import seedDatabase from "./script/seed";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const init = async () => {
  try {
    await seedDatabase();
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (ex) {
    console.log(ex);
  }
};

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server is running");
// });

init();
