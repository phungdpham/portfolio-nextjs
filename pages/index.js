import Head from 'next/head';
import About from '../src/components/about';
import Banner from '../src/components/banner';
import Header from '../src/components/header';
import Layout from '../src/components/layout';
import Technologies from '../src/components/technologies';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Phung Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

      </Head>
      {/* <Header 
        title="About Me"
        content=""
      /> */}
      <Banner />
      <About />
      <Technologies />
    </Layout>
  );
}
