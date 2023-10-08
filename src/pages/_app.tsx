import "@/styles/globals.css";
import "@/assets/scss/index.scss";

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Markazi_Text } from "next/font/google";

const markaziText = Markazi_Text({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
  variable: "--font-inter",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${markaziText.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <div className={`${markaziText.variable} font-sans`}></div>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
