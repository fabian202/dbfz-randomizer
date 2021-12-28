import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:url" content="https://dbfz-randomizer.vercel.app" key="ogurl" />
          <meta property="og:image" content="https://dbfz-randomizer.vercel.app/card.jpg" key="ogimage" />
          <meta property="og:site_name" content="Dragon Ball FighterZ Randomizer" key="ogsitename" />
          <meta property="og:title" content="Dragon Ball FighterZ Randomizer" key="ogtitle" />
          <meta property="og:description" content="Create a session for you and a friend and pick some random characters" key="ogdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
