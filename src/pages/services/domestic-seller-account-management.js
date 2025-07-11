import React from 'react'
import SEO from "@/common/seo/Seo";
import HeaderOne from "@/common/header/HeaderOne";
import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import ServiceDetails from "@/components/service/ServiceDetails";
import FooterThree from "@/common/footer/FooterThree";
import DomesticSellerAccountManagement from '@/components/service/DomesticSellerAccountManagement';

const DomesticSelleraccountManagement = () => {
  return (
    <>
    <SEO pageTitle={"Service Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Domestic Seller Account Management"
                currentPage="Domestic Seller Account Management" 
            />
			<DomesticSellerAccountManagement/>
			<FooterThree />
		</>
  )
}

export default DomesticSelleraccountManagement
