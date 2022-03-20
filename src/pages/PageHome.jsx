import NavigationHeader from '../components/NavigationHeader';
import SectionHero from '../components/SectionHero';
import UtilityTabTitle from '../utilities/UtilityTabTitle';

const PageHome = () => {
	UtilityTabTitle('Home Page | Superior Software Solutions');

	return (
		<div>
			<NavigationHeader />
			<SectionHero />
		</div>
	);
};

export default PageHome;
