import React from 'react';
import Head from 'next/head';
import { H1Element, Layout, ReturnHome } from '../components';
import { PageProps } from '../types/PageProps';
import { GlobalStyles } from '../../styles';

type AppProps = {
    Component: any;
    pageProps: PageProps;
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>{pageProps.pageTitle}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com " />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <React.Fragment>
                <GlobalStyles />
            </React.Fragment>
            <Layout>
                {pageProps.returnHome ? (
                    <ReturnHome>
                        <H1Element>{pageProps.pageHeading}</H1Element>
                    </ReturnHome>
                ) : (
                    <H1Element>{pageProps.pageHeading}</H1Element>
                )}
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default App;
