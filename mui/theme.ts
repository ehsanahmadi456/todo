import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Rubik',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    fontFamily: 'Rubik',
                    minWidth: '0',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    fontFamily: 'Rubik'
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#0F172A",
            contrastText: "#E2E8F0",
        },
        secondary: {
            main: "#FFF",
            contrastText: "#C165DD",
        },
        success: {
            main: "#F97316",
            contrastText: "#FFFFFF",
        }
    }
});

export default theme;