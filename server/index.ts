import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/premierleague/scorers", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/PL/scorers",
      {
        headers: {
          "X-Auth-Token": "e626339ce3c945e68bc7e7691ac3b077",
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/premierleague/rank", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/PL/standings",
      {
        headers: {
          "X-Auth-Token": "e626339ce3c945e68bc7e7691ac3b077",
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/premierleague/news", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/news.json?query=%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4%EB%A6%AC%EA%B7%B8&display=10&start=1&sort=sim&startDate=20230101&endDate=20230508",
      {
        headers: {
          "X-Naver-Client-Id": "cAF0lQLJicO9hFcO8ZaG",
          "X-Naver-Client-Secret": "nQ6CSn959Z",
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Interval Server Error");
  }
});

app.get("/laliga/rank", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v2/competitions/PD/standings",
      {
        headers: {
          "X-Auth-Token": "e626339ce3c945e68bc7e7691ac3b077",
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Interval Server Error");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
