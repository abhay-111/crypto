import Homepage from "./Pages/Homepage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coinpage from "./Pages/Coinpage";
import Header from "./Components/Header";
// import { makeStyles } from "@mui/styles";


function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}  exact/>
          <Route path="/coins/:id" element={<Coinpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;