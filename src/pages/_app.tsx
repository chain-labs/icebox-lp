import { LOGO } from "@/constants";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={LOGO} />
        <title>
          Icebox | Instantly lend and borrow bitcoin against high
          value-ordianls.
        </title>
      </Head>
      <AnimatePresence initial={false} mode="popLayout">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
