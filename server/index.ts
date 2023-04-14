import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/test", (req: Request, res: Response) => {
  console.log("abcd");
});

app.get("/premierleague/scorers", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/PL/scorers",
      {
        headers: {
          "X-Auth-Token": process.env.API_TOKEN,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/premierleague", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/PL/standings",
      {
        headers: {
          "X-Auth-Token": process.env.API_TOKEN,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
