import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Navigation from "./navigation";
import { theme } from "./styles";

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={null}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
