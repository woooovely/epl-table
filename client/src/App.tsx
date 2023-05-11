import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Introduce from "./pages/introduce";
import PremierRank from "./pages/rank/premier";
import Scorer from "./pages/scorer/premier";
import News from './pages/news/premier/index'
import LaligaRank from './pages/rank/laliga';
import SerieRank from './pages/rank/serie';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />}></Route>
        <Route path="/pl/rank" element={<PremierRank />}></Route>
        <Route path="/laliga/rank" element={<LaligaRank />}></Route>
        <Route path="/serie/rank" element={<SerieRank />}></Route>
        <Route path="/pl/scorer" element={<Scorer />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
