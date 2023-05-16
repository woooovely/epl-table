import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// 프리미어리그 득점왕 프록시 서버
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

// 프리미어리그 팀 순위 프록시 서버
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

// 프리미어리그 관련 뉴스 프록시 서버
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

// 라리가 팀 순위 프록시 서버
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

// 세리에A 팀 순위 프록시 서버
app.get("/serie/rank", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/SA/standings",
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

// 라리가 득점왕 순위 프록시 서버
app.get("/laliga/scorer", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/PD/scorers",
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

// 세리에A 득점왕 순위 프록시 서버
app.get("/serie/scorer", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/SA/scorers",
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

app.get("/laliga/news", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/news.json?query=라리가&display=10&start=1&sort=sim&startDate=20230101&endDate=20230508",
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
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
