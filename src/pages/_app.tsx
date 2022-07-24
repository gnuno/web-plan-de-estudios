import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@templates/Layout'
import Head from 'next/head'
import { Html, NextScript } from 'next/document'
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (<>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>Plan de Estudios Interactivo</title>
      <link rel='shortcut icon' href='/favicon.ico' type='image/ico' />
    </Head>
        <Layout>
        <Component {...pageProps} />
      </Layout>

  </>)
}

