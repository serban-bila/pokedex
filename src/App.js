
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function App({pokemon}) {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route exact index element={<Home />} />
        {/* <Route path="/*" element={<PokemonDetails/>} /> */}
      </Route>
    </Routes>
  );
};

export default App;
