import React from "react";
import { ThemeProvider } from "styled-components";
import { OriginTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import PayoutsPage from "./pages/PayoutsPage";

function App() {
  return (
    <ThemeProvider theme={OriginTheme}>
      <GlobalStyles />
      <PayoutsPage />
    </ThemeProvider>
  );
}

export default App;
