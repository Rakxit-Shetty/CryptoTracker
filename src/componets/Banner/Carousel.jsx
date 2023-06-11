/* eslint-disable no-unused-vars */
import { makeStyles, Container, Typography } from "@material-ui/core";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryproContext";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItem: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));


const Carousel = () => {
  const cls = useStyle();

  const [trending, setTrendng] = useState([]);
  const { cur = "INR", symbol } = CryptoState();

  const fetchTrendCoins = async () => {
    const { data } = await axios.get(TrendingCoins(cur), { crossDomain: true });
    setTrendng(data);
  };

  const numberWithCommas=(x) =>{
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
  }
  
  useEffect(() => {
    fetchTrendCoins();
  }, [cur]);

  const item = trending.map((coin, idx) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link key={idx} className={cls.carouselItem} to={`/coin/${coin.id}`}>
        <img src={coin?.image} height="80" style={{ marginBottom: 10 }} />

        <span>
          {coin?.symbol}
          &nbsp;
          <span 
           style={{
            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
            fontWeight: 800,
          }}
          >
            {profit && "+"}{" "}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol + " "}
          {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const respons = {
    0: {
      items: 1,
    },
    512: {
      items: 3,
    },
  };
  return (
    <div className={cls.Carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={2000}
        disableDotsControls
        disableButtonsControls
        responsive={respons}
        // responsive={responsive}
        autoPlay
        items={item}
      />
    </div>
  );
};

export default Carousel;
