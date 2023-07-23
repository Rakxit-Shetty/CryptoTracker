//package
import { BrowserRouter, Routes, Route } from "react-router-dom";
//css
import "./App.css";
import { makeStyles } from "@material-ui/core";

//componets
import Header from "../src/componets/Header";
import HomePage from "../src/pages/HomePage";
import CoinPage from "./pages/CoinPage";

//style
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
    marginBottom:"25px",
  },
}));

function App() {
  const cls = useStyles();
  return (
    <BrowserRouter>
      <div className={cls.App}>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} exact />
          <Route path="/coins/:id" Component={CoinPage} />
        </Routes>
      </div>
      <footer className="footer">
        <div>
           {new Date().getFullYear()} to Learn React JS components by
          <a href="https://rakshithshetty.vercel.app"> &nbsp; Rakxit-Shetty</a>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
