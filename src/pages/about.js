import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import AboutThree from "../components/about/AboutThree";
import SkillsOne from "../components/skills/SkillsOne";
import TestimonialSix from "../components/testimonial/TestimonialSix";
import IntegrationsOne from "../components/integrations/IntegrationsOne";
import FooterThree from "../common/footer/FooterThree";
import TestimonialOne from "@/components/testimonial/TestimonialOne";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";
import TestimonialThree from "@/components/testimonial/TestimonialThree";
import TestimonialFour from "@/components/testimonial/TestimonialFour";

export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About Us"} />
			<HeaderOne />
			<AboutThree />
			<SkillsOne />
			<TestimonialOne/>
			<TestimonialTwo/>
			<TestimonialThree/>
			{/* <TestimonialFour/> */}
			{/* <TestimonialSix/> */}
			{/* <TestimonialSix /> */}
			<IntegrationsOne />
			<FooterThree />
		</>
	);
}