import type { AppProps } from 'next/app'
import Layout from '@templates/Layout'
import Head from 'next/head'
import { Html, NextScript } from 'next/document'
import { ColorScheme, MantineProvider } from '@mantine/core';
import { GetServerSidePropsContext } from 'next';
import { getCookie, setCookie } from 'cookies-next';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (<>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>Plan de Estudios Interactivo</title>
      <link rel='shortcut icon' href='/favicon.ico' type='image/ico' />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
    </Head>
    <Layout colorScheme={props.colorScheme}>
      <Component {...pageProps} />
    </Layout>

  </>)
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
