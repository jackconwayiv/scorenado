import dotenv from "dotenv";
import seedDatabase from "./db/seeders/seed";
import app from "./server/app";
dotenv.config();

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
init();
