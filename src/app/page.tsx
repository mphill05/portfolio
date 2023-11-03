import Head from 'next/head';
import { Home as HomeComponent } from '@/components/Home/page';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mark Phillips | Software Developer</title>
        <meta name="description" content="Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </>
  );
}
