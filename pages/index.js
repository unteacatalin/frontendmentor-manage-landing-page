import Head from 'next/head';

import Layout from '../components/ui/layout';
import HeroBlock from '../components/home/hero-block';
import AboutBlock from '../components/home/about-block';
import TestimonialBlock from '../components/home/testimonial-block';
import CallToActionBlock from '../components/home/call-to-action-block';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Manage Landing Page</title>
        <meta name='description' content='Manage Landing Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <HeroBlock />
      <AboutBlock />
      <TestimonialBlock />
      <CallToActionBlock />
    </Layout>
  );
}
