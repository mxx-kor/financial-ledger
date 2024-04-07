import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="mx-auto md:container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
