import React from 'react'
import SEO from "@/common/seo/Seo";
import HeaderOne from "@/common/header/HeaderOne";
import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import ServiceDetails from "@/components/service/ServiceDetails";
import FooterThree from "@/common/footer/FooterThree";
import DigitalMarketing from '@/components/service/DigitalMarketing';
const Digitalmarketing = () => {
  return (
 <>
    <SEO pageTitle={"Service Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Digital Marketing"
                currentPage="Web Development" 
            />
			<DigitalMarketing/>
			<FooterThree />
		</>
  )
}

export default Digitalmarketing
