import GlobalStyled from "../styled-components/GlobalStyled";
import { ThemeProvider } from "styled-components";
import Theme from "../styled-components/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
