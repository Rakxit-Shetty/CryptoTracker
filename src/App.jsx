//package
import { BrowserRouter, Routes, Route } from "react-router-dom";
//css
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';

//componets
import Header from "../src/componets/Header";
import HomePage from "../src/pages/HomePage";
import CoinPage from "./pages/CoinPage";


//style
const useStyles = makeStyles(()=> ({
  App: {
    backgroundColor: '#14161a',
    color: "white",
    minHeight:"100vh"
  },
}));

function App() {
  const cls = useStyles()


  return (
    <BrowserRouter>
      <div className={cls.App}>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} exact/>
          <Route path="/coins/:id" Component={CoinPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
