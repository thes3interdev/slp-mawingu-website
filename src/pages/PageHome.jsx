import UtilityTabTitle from '../utilities/UtilityTabTitle';
import NavigationHeader from '../components/NavigationHeader';
import SectionHero from '../components/SectionHero';
import SectionAbout from '../components/SectionAbout';
import SectionSupport from '../components/SectionSupport';
import SectionPlatform from '../components/SectionPlatform';
import SectionPricing from '../components/SectionPricing';

const PageHome = () => {
	UtilityTabTitle('Home Page | Mawingu Cloud Management');

	return (
		<div>
			<NavigationHeader />
			<SectionHero />
			<SectionAbout />
			<SectionSupport />
			<SectionPlatform />
			<SectionPricing />
		</div>
	);
};

export default PageHome;
