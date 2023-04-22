"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/premierleague", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const response = yield axios_1.default.get(
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
      res.status(500).send("Interval Server Error");
    }
  })
);
app.get("/premierleague/scorers", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const response = yield axios_1.default.get(
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
      res.status(500).send("Interval Server Error");
    }
  })
);

app.get("/news", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const response = yield axios_1.default.get(
        "https://openapi.naver.com/v1/search/news.json?query=%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4%EB%A6%AC%EA%B7%B8&display=10&start=1&sort=sim&startDate=20230101&endDate=20230421",
        {
          headers: {
            "X-Naver-Client-Id": "cAF0lQLJicO9hFcO8ZaG",
            "X-Naver-Client-Secret": "nQ6CSn959Z"
          },
        }
      );
      res.send(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Interval Server Error");
    }
  })
);



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
