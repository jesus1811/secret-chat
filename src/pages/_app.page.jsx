import { ThemeProvider } from "styled-components";
import { GlobalStyled, Theme } from "@/styled-components";
import { Provider } from "react-redux";
import store from "@/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyled />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
