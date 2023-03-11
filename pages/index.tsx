import Head from 'next/head'
import { Col } from '../components/base';
import 'twin.macro';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>Ryan Barrs / Home</title>
      <meta charSet="utf-8"/>
      <meta name="theme-color" content="#212121"/>
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=yes, viewport-fit=cover"/>
    </Head>
    <Col tw="h-full justify-center items-center space-y-8 md:space-y-12">
      <p tw="w-fit text-center text-white font-serif text-3xl md:text-6xl drop-shadow-[2px 2px 2px black]">I am fixing broken hearts with bioengineering.</p>
      <p tw="w-fit text-center text-white font-serif text-3xl md:text-6xl drop-shadow-[2px 2px 2px black]">Let's work together.</p>
    </Col>
  </>
)

export default Home