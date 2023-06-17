/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CryptoState } from "../CryproContext";
import { SingleCoin } from "../config/api";
import { LinearProgress, Typography, makeStyles } from "@material-ui/core";
import CoinInfo from "../componets/CoinInfo";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    margin:10
    // backgroundColor:"red",
  },
  sidebar: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignitems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    width: "100%",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 0,
    textAlign: "justify",
    borderRadius:"1px solid red"
  },
  marketData:{
    alignSelf:"start",
    padding:25,
    paddingTop:10,
    width:"100%",
    //responsive
    [theme.breakpoints.down("md")]:{
      display:"flex",
      justifyContent:"space-around",
    },
    [theme.breakpoints.down("sm")]:{
      display:"column",
      alignItems:"center"
    },
    [theme.breakpoints.down("xs")]:{
      alignItems:"start"
    }

  }
}));

const CoinPage = () => {
  const cls = useStyles();
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { cur, symbol } = CryptoState();

  const fetchCoin = async () => {
    // setLoading(true);
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  if(!coin) return <LinearProgress />
  return (
    <div className={cls.container}>
      <div style={{backgroundColor:"red"}}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={cls.heading}>
          {coin?.name}
        </Typography>

      </div>

      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
