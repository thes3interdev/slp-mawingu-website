import UtilityTabTitle from '../utilities/UtilityTabTitle';
import NavigationHeader from '../components/NavigationHeader';
import SectionHero from '../components/SectionHero';
import SectionAbout from '../components/SectionAbout';
import SectionSupport from '../components/SectionSupport';
import SectionPlatform from '../components/SectionPlatform';
import SectionPricing from '../components/SectionPricing';
import NavigationFooter from '../components/NavigationFooter';

const PageHome = () => {
	UtilityTabTitle('Home Page | Mawingu Cloud Management');

	return (
		<div name="Home">
			<NavigationHeader />
			<SectionHero />
			<SectionAbout />
			<SectionSupport />
			<SectionPlatform />
			<SectionPricing />
			<NavigationFooter />
		</div>
	);
};

export default PageHome;
