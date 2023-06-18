import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../store/";
import Link from "next/link";

import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/Theme";
import createEmotionCache from "../src/createEmotionCache";
const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  // const { store, props } = wrapper.useWrappedStore(rest);
  // const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
        <CssBaseline />
        <Component {...pageProps} />

        {/* </Provider> */}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
