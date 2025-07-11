import React from 'react'
import SEO from "@/common/seo/Seo";
import HeaderOne from "@/common/header/HeaderOne";
import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import ServiceDetails from "@/components/service/ServiceDetails";
import FooterThree from "@/common/footer/FooterThree";
import Webdevelopment from '@/components/service/Webdevelopment';

const WebDevelopment = () => {
  return (
    <>
    <SEO pageTitle={"Service Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Web Development"
                currentPage="Web Development" 
            />
			<Webdevelopment/>
			<FooterThree />
		</>
  )
}

export default WebDevelopment
