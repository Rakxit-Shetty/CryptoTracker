
import { useState, useEffect } from "react";
import { CoinList } from "../config/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryproContext";
import {
  makeStyles,
  Container,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  LinearProgress,
  TableRow,
  TableCell,
  
} from "@material-ui/core";
import {Pagination} from '@material-ui/lab';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const useStyle = makeStyles(() => ({
  row:{
    backgroundColor:"#16171a",
    cursor:"pointer",
   "&:hover":{
    backgroundColor:"#131111"
   },
   pagination:{
    "& .MuiPaginationItem-root":{
      color:"gold",
    },
   }

  }
}));

const CoinsTable = () => {
  const cls = useStyle();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const[page,setPage]=useState(1)
  const navigate = useNavigate();
  const { cur, symbol } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(cur));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [cur]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ margin: 20, fontWeight: "bold" }}>
          CryptoCurrency Prices by Market Cap
        </Typography>

        <TextField
          label="Seach for crypto"
          variant="outlined"
          style={{ width: "100%", marginBottom: 20 }}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableContainer>
          {loading ? (
            <>
              <LinearProgress style={{ backgroundColor: "gold" }} />
            </>
          ) : (
            <TableContainer>
              <Table>
                <TableHead
                  style={{ backgroundColor: "#EEBC1D", width: "100%" }}
                >
                  <TableRow>
                    {["Coin", "Price", "24h Change", "Market Cap"].map(
                      (head) => (
                        <TableCell
                          style={{
                            color: "black",
                            fontWeight: "700",
                            fontFamily: "Montserrat",
                          }}
                          align={head !="Coin"? "right":"left"}
                          key={head}
                          //  align={head === "Coin" ? "" : "right"}
                        >
                          {head}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {handleSearch().slice((page-1)*10,(page-1)*10+10).map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        key={row.name}
                        className={cls.row}
                        onClick={() => navigate(`/coins/${row.id}`)}
                      >
                        <TableCell
                          component={"th"}
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgoldenrod" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>

                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "green" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>

                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </TableContainer>
        <Pagination
        style={{
          padding:20,
          width:"100%",
          display:"flex",
          justifyContent:"center"
        }}
        classes={{ul:cls.pagination}}
        count={Number(Number(handleSearch()?.length/10).toFixed())}
        onChange={(_,val)=>{
          setPage(val);
          window.scroll(0,500);
        }}
        ></Pagination>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
