import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Introduce from "./pages/introduce";
import TeamRank from "./pages/rank";
import Scorer from './pages/scorer';
import News from './pages/news';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />}></Route>
        <Route path="/rank" element={<TeamRank />}></Route>
        <Route path="/top-scorer" element={<Scorer />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
