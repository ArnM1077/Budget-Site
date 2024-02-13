import {Drawer, ThemeProvider} from "@mui/material";
import theme from "./components/theme";
import Header from "./components/header";


const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
  )
}
export default App;
