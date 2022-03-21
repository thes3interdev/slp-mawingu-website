import {
	CloudUploadIcon,
	DatabaseIcon,
	PaperAirplaneIcon,
	ServerIcon,
} from '@heroicons/react/solid';
import bgHeroImage from '../assets/cyber-bg.png';

const SectionHero = () => {
	return (
		<div className="flex h-screen w-full flex-col justify-between bg-zinc-200">
			<div className="m-auto grid max-w-[1240px] md:grid-cols-2">
				<div className="flex w-full flex-col justify-center px-2 py-8 md:items-start">
					<p className="text-2xl">Unique Sequencing & Production</p>
					<h1 className="py-3 text-5xl font-bold md:text-7xl">Cloud Management</h1>
					<p className="text-2xl">This is our Tech brand</p>
					<button className="my-4 py-2 px-5 sm:w-[60%]">Get Started</button>
				</div>
				<div>
					<img src={bgHeroImage} alt="Hero Image" className="w-full" />
				</div>
				<div className="absolute bottom-[5%] mx-1 flex transform flex-col rounded-xl border border-slate-300 bg-zinc-200 py-8 text-center shadow-xl md:left-1/2 md:min-w-[760px] md:-translate-x-1/2">
					<p className="font-semibold">Data Services</p>
					<div className="flex flex-wrap justify-between px-4">
						<p className="flex px-4 py-2 text-slate-500">
							<CloudUploadIcon className="h-6 text-indigo-600" /> App Security
						</p>
						<p className="flex px-4 py-2 text-slate-500">
							<DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
						</p>
						<p className="flex px-4 py-2 text-slate-500">
							<ServerIcon className="h-6 text-indigo-600" /> Cloud Data
						</p>
						<p className="flex px-4 py-2 text-slate-500">
							<PaperAirplaneIcon className="h-6 text-indigo-600" /> API
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionHero;
