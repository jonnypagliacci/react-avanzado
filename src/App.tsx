import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups"; 
import FavoritePage from "./pages/favorites";
import NewMeetupsPage from "./pages/NewMeetups";




function App() {
  return <div> 
    <Routes>
      <Route path="/" element = {<AllMeetupsPage />}></Route>
      <Route path="/favorites" element = {<FavoritePage />}></Route>
      <Route path="/NewMeetups" element = {<NewMeetupsPage />}></Route>
    </Routes>
  </div>;
}

export default App;
