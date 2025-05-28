import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/core/theme";
import Layout from "@/components/Layout";
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
