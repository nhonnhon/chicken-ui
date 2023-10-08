import "@/styles/globals.css";
import "@/assets/scss/index.scss";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Markazi_Text } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const markaziText = Markazi_Text({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
  variable: "--font-inter",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClientRef = React.useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          refetchOnWindowFocus: false,
        },
        mutations: {
          useErrorBoundary: false,
        },
      },
    });
  }

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${markaziText.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClientRef.current}>
          <div className={`${markaziText.variable} font-sans`}></div>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}
