import React, {useEffect} from 'react';
import { animationCreate } from "../../utils/utils";
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from 'react-icons/fa';
import Head from "next/head";
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        setTimeout(() => {
          animationCreate();
        }, 500);
      }, []);
    return (
        <>
          <Head>
                
            </Head>
            {/* <div id="smooth-wrapper">
         <div id="smooth-content">
<Component {...pageProps} />

         </div>
         </div> */}
            <div className="page-wrapper">
              <Component {...pageProps} />
            </div>
             {/* <SmoothScrollProvider>
      <Component {...pageProps} />
    </SmoothScrollProvider> */}
            <ScrollToTop className="scroll-to-top" smooth component={<FaAngleUp />}  />
        </>
    );
}

export default MyApp;