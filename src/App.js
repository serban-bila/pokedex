
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
// import PokemonDetails from './routes/pokemon-details/pokemon-details.component';

function App({pokemon}) {
  // const {name} = pokemon;

  return (
    <Routes>
      <Route path="/pokedex" element={<Navigation/>}>
        <Route index element={<Home />} />
        {/* <Route path="/*" element={<PokemonDetails/>} /> */}
      </Route>
    </Routes>
  );
};

export default App;
