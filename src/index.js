import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

import App from "./App.js";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <>
            <App />
            <GlobalStyles />
        </>
    </ThemeProvider>,
    document.getElementById('root'))