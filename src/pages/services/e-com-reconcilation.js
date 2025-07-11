import React from 'react'
import SEO from "@/common/seo/Seo";
import HeaderOne from "@/common/header/HeaderOne";
import Breadcrumb from "@/common/breadcrumb/Breadcrumb";
import ServiceDetails from "@/components/service/ServiceDetails";
import FooterThree from "@/common/footer/FooterThree";
import EcomReconcilation from '@/components/service/EcomReconcilation';

const Ecomreconcilation = () => {
  return (
  <>
    <SEO pageTitle={"Service Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Ecom Reconcilation"
                currentPage="Ecom Reconcilation" 
            />
			<EcomReconcilation/>
			<FooterThree />
		</>
  )
}

export default Ecomreconcilation
