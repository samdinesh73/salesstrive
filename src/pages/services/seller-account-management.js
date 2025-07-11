import React from 'react'
import SEO from "@/common/seo/Seo";
import HeaderOne from "@/common/header/HeaderOne";
import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import ServiceDetails from "@/components/service/ServiceDetails";
import FooterThree from "@/common/footer/FooterThree";
import SellerAccountManagement from '@/components/service/SellerAccountManagement';
const SellerAccountmanagement = () => {
  return (
    <>
    <SEO pageTitle={"Service Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Web Development"
                currentPage="Web Development" 
            />
			<SellerAccountManagement/>
			<FooterThree />
		</>
  )
}

export default SellerAccountmanagement
