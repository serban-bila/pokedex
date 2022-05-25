import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
      <Routes>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/:pokemon" element={<Home />} />
          {/* <Route path="/:pokemon" element={<PokemonDetails/>} /> */}
        </Route>
        </BrowserRouter>
      </Routes>
  );
};

export default App;
