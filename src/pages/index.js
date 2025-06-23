import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AboutOne from "../components/about/AboutOne";

import BrandOne from "../components/brand/BrandOne";
import FaqTwo from "../components/faq/FaqTwo";
import FaqThree from "../components/faq/FaqThree";
import IntegrationsOne from "../components/integrations/IntegrationsOne";
import BlogTwo from "../components/blog/BlogTwo";
import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";
import AboutTwo from "@/components/about/AboutTwo";
import AboutThree from "@/components/about/AboutThree";
import BlogThree from "@/components/blog/BlogThree";
import HeaderTwo from "@/common/header/HeaderThree";
import HeaderFour from "@/common/header/HeaderFour";
import BrandTwo from "@/components/brand/BrandTwo";
import ServiceTwo from "@/components/service/ServiceTwo";
import ServiceThree from "@/components/service/ServiceThree";
import ServiceFour from "@/components/service/ServiceFour";
import ServiceFive from "@/components/service/ServiceFive";
import ServiceOne from "@/components/service/ServiceOne";
import FooterThree from "@/common/footer/FooterThree";

export default function Home() {
	return (
		<>
			<SEO pageTitle={"Home"} />
			<HeaderOne />
			{/* <HeaderTwo></HeaderTwo> */}
			{/* <HeaderFour></HeaderFour> */}
			
      		<HeroOne />
			<AboutOne />
			<ServiceOne/>
			
			
			
			<AboutThree/>
			<BrandOne />
			
			<FaqTwo />
			<FaqThree />
			{/* <IntegrationsOne /> */}
			<AboutTwo/>
			<BlogTwo />
			{/* <BlogThree /> */}
			<CtaOne />
			{/* <FooterOne /> */}
			<FooterThree/>
		</>
	);
}