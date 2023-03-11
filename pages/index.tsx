import Head from 'next/head'
import { Col } from '../components/base';
import 'twin.macro';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>Ryan Barrs / Home</title>
    </Head>
    <Col tw="h-full justify-center items-center space-y-8 md:space-y-12">
      <p tw="w-fit text-center text-white font-serif text-3xl md:text-5xl lg:text-6xl drop-shadow-[2px 2px 2px black]">I am fixing broken hearts with bioengineering.</p>
      <p tw="w-fit text-center text-white font-serif text-3xl md:text-5xl lg:text-6xl drop-shadow-[2px 2px 2px black]">Let's work together.</p>
    </Col>
  </>
)

export default Home