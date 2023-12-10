import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>DoubleB</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Double B - tienda online con remeras básicas y talles inclusivos"
        />
        <meta name="keywords" content="Tienda, Tienda online, remeras" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
