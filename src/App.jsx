import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NoPage from "./containers/NoPage";
import PokemonList from "./containers/PokemonList";
import TeamList from "./containers/TeamList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<PokemonList />} />
          <Route path="team" element={<TeamList />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
