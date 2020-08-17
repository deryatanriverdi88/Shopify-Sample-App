import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charset="utf-8" />
                </Head>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;