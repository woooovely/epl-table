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

app.get('/news', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://openapi.naver.com/v1/search/news.json?query=%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4%EB%A6%AC%EA%B7%B8&display=10&start=1&sort=sim&startDate=20230101&endDate=20230421', 
    {
      headers: {
        'X-Naver-Client-Id': process.env.CLIENT_ID,
        'X-Naver-Client-Secret': process.env.CLIENT_SECRET
      }
    }
    )
    res.send(response.data);
  } catch (error) {
    console.error(error)
    res.status(500).send("Interval Server Error")
  }
})

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
