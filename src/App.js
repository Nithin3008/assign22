import logo from "./logo.svg";
import "./App.css";
import Events from "./pages/Events";
import Volunteer from "./pages/Volunteer";
import { Route, Routes } from "react-router";
import Summary from "./pages/Summary";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Volunteer />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Summary" element={<Summary />}></Route>
      </Routes>
    </div>
  );
}

export default App;
