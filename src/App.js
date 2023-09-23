import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import History from "./Components/History/History";
import Settings from "./Components/Settings/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/menu'} element={<Menu/>}/>
        <Route path={'/history'} element={<History/>}/>
        <Route path={'/settings'} element={<Settings/>}/>
      </Routes>
    </>
  );
}

export default App;
