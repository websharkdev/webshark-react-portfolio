import { Head, Html, Main, NextScript } from 'next/document'

import { fonts } from '@/config/constants'

const Document = () => (
  <Html lang="en">
    <Head>
      {fonts.map((item: string, index: number) => (
        <link href={item} rel="stylesheet" key={item} />
      ))}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
