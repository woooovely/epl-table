import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Introduce from './introduce';
import TeamRank from './rank';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce />}></Route>
        <Route path="/rank" element={<TeamRank />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;