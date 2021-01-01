import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
