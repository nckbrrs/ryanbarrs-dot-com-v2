import Head from 'next/head'
import { Col, Row } from '../components/base';
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
    <Col tw="h-full justify-center items-center">
      <Col tw="w-full h-fit lg:h-full my-8 lg:my-20 max-w-[1300px] px-12 lg:px-20 space-y-10 lg:space-x-8 lg:flex-row">
        {/* headshot */}
        <Row tw="h-full lg:w-2/5 justify-center items-center">
          <img src="headshot.png" tw="aspect-square rounded-full border-4 shadow-md shadow-black lg:max-h-96"/>
        </Row>

        {/* about */}
        <Col tw="justify-center lg:w-3/5">
          <p tw="font-serif text-white text-2xl md:text-3xl font-[400] drop-shadow-[1px 1px 1px black]">
          I am a PhD Candidate in Bioengineering living in Charleston, SC.<br/><br/>
          My research focuses on cardiovascular tissue engineering and cardiac regeneration, and I am currently supported by an NIH F31 Predoctoral Fellowship.<br/><br/>
          Outside of the lab, I enjoy cooking, roasting coffee, discovering new music, and playing the ancient Irish sport of hurling with the Charleston Hurling Club.<br/><br/>
          </p>
        </Col>
      </Col>
    </Col>
  </>
)

export default Home