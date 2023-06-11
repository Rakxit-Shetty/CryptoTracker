/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { CoinList } from "../config/api";
import axios from "axios";
import { CryptoState } from "../CryproContext";
import {
  AppBar,
  makeStyles,
  Container,
  TextField,
  Toolbar,
  MenuItem,
  Typography,
  Select,
  createTheme,
  ThemeProvider,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  LinearProgress,
  TableRow,
  TableCell,
//   Pagination,
} from "@material-ui/core";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { cur } = CryptoState();

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

  console.log("coin", coins);

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
                <TableHead style={{ backgroundColor: "#EEBC1D", width:"100%" }}>
                  <TableRow>
                    {["Coin", "Price", "24h Change", "Market Cap"].map(
                      (head) => (
                        <TableCell
                          style={{
                            color: "black",
                            fontWeight: "700",
                            fontFamily: "Montserrat",
                          }}
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
{handleSearch().map((rows)=>{})}

                </TableBody>
                </Table>
              </TableContainer>
            
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
