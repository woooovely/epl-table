import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Introduce from "./pages/introduce";
import PremierRank from "./pages/rank/premier";
import PremierScorer from "./pages/scorer/premier";
import PremierNews from './pages/news/premier/index'
import LaligaRank from './pages/rank/laliga';
import SerieRank from './pages/rank/serie';
import LaligaScorer from './pages/scorer/laliga';
import SerieScorer from './pages/scorer/serie';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />}></Route>
        <Route path="/pl/rank" element={<PremierRank />}></Route>
        <Route path="/laliga/rank" element={<LaligaRank />}></Route>
        <Route path="/serie/rank" element={<SerieRank />}></Route>
        <Route path="/pl/scorer" element={<PremierScorer />}></Route>
        <Route path="/laliga/scorer" element={<LaligaScorer />}></Route>
        <Route path="/serie/scorer" element={<SerieScorer />}></Route>
        <Route path="/pl/news" element={<PremierNews />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
