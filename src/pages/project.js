import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
// import ProjectOne from "../components/project/ProjectOne";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
// import SEO from "../common/seo/Seo";
// import HeaderOne from "../common/header/HeaderOne";
import CaseStudyTwo from "../components/case-study/CaseStudyTwo";
import PortfolioOne from "../components/portfolio/PortfolioOne";
import CaseStudyOne from "../components/case-study/CaseStudyOne";
import ServiceFour from "../components/service/ServiceFour";
import FooterThree from "../common/footer/FooterThree";

export default function ProjectPage() {
	return (
		<>
			<SEO pageTitle={"Projects Page"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Projects"
                currentPage="Projects" 
            />
			<CaseStudyTwo />
			<PortfolioOne />
			<CaseStudyOne />
			{/* <ServiceFour /> */}
			<FooterThree />
		</>
	);
}