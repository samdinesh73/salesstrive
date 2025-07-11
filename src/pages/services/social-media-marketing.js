import React from 'react'
import SEO from "@/common/seo/Seo";
import HeaderOne from "@/common/header/HeaderOne";
import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import ServiceDetails from "@/components/service/ServiceDetails";
import FooterThree from "@/common/footer/FooterThree";
import SocialMediaMarketing from '@/components/service/SocialMediaMarketing';
const SocialMediamarketing = () => {
  return (
    <>
    <SEO pageTitle={"Service Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Social Media Marketing"
                currentPage="Social Media Marketing" 
            />
			<SocialMediaMarketing/>
			<FooterThree />
		</>
  )
}

export default SocialMediamarketing
