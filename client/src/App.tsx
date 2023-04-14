import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Introduce from "./pages/introduce";
import TeamRank from "./pages/rank";
import Scorer from './pages/scorer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />}></Route>
        <Route path="/rank" element={<TeamRank />}></Route>
        <Route path="/top-scorer" element={<Scorer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
