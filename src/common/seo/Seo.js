import Head from "next/head";

const SEO = ({ pageTitle }) => (
    <>
        <Head>
            <title>
                {pageTitle && `${pageTitle} || Sales Strive a marketig Agency `}
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="Sales Strive - E-commerce & Digital Marketing Agency " />
            <meta name="robots" content="noindex, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
    </>
);

export default SEO;