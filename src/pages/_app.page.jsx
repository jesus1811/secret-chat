import { ThemeProvider } from "styled-components";
import { GlobalStyled, Theme } from "@/styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
