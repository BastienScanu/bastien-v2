import React, { ReactElement } from "react";
import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {

  render(): ReactElement {
    return(
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}