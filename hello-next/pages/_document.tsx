
import Document, {Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    console.log('HEllo from _document- logs in server');
    
    return( 
      <Html>
        <Head>
          <meta property="custom" content="custom-value"/>
        </Head>
        <body>
          <Main></Main>
        </body>

        <NextScript />

      </Html>
    )
  }
}




