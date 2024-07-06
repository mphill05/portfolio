import Head from 'next/head';
import { Home as HomeComponent } from '@/components/Home/page';

export default function Home() {
  const faviconUrl = `https://markphillips.vercel.app/favicon.ico`;
  return (
    <>
      <Head>
        <title>Mark Phillips | Software Developer</title>
        <meta
          name="description"
          content="Mark Phillips - A passionate Software Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" area-label="Favicon" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markphillips.vercel.app/" />
        <meta
          property="og:title"
          content="Mark Phillips | Software Developer"
        />
        <meta
          property="og:description"
          content="Mark Phillips - A passionate Software Developer."
        />
        <meta property="og:image" content={faviconUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://markphillips.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Mark Phillips | Software Developer"
        />
        <meta
          property="twitter:description"
          content="Mark Phillips - A passionate Software Developer."
        />
        <meta property="twitter:image" content={faviconUrl} />
      </Head>
      <HomeComponent />
    </>
  );
}
