import {createTheme} from "@mui/material";
import {blue, purple} from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            main: purple[900]
        },
        secondary: {
            main: blue[100]
        }
    }
})

export default theme