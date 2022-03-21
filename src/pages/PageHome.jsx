import UtilityTabTitle from '../utilities/UtilityTabTitle';
import NavigationHeader from '../components/NavigationHeader';
import SectionHero from '../components/SectionHero';
import SectionAbout from '../components/SectionAbout';
import SectionSupport from '../components/SectionSupport';

const PageHome = () => {
	UtilityTabTitle('Home Page | Superior Software Solutions');

	return (
		<div>
			<NavigationHeader />
			<SectionHero />
			<SectionAbout />
			<SectionSupport />
		</div>
	);
};

export default PageHome;
