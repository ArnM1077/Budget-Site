import {ThemeProvider} from "@mui/material";
import theme from "./components/theme";


const App = () => {
  return (
      <ThemeProvider theme={theme}>

      </ThemeProvider>
  )
}
export default App;
