import {
  AppBar,
  makeStyles,
  Container,
  Toolbar,
  MenuItem,
  Typography,
  Select,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointr",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {

  const cls = useStyles();
  const navigate = useNavigate();
  const [cur, setCur] = useState("INR");
console.log(cur)
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography className={cls.title} onClick={() => navigate("/")}>
              Crypto Traker{" "}
            </Typography>
            <Select
              variant="outlined"
              value={cur}
              defaultValue={""}
              onChange={(e) => setCur(e.target.value)}
              style={{
                width: 100,
                height: 40,
                marginLeft: "auto",
              }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
