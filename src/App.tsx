import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Navigation from "./navigation";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <React.Suspense fallback={null}>
          <Navigation />
        </React.Suspense>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
