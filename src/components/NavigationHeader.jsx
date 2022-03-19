import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const NavigationHeader = () => {
	const [navigation, setNavigation] = useState(false);

	const handleClick = () => setNavigation(!navigation);

	return (
		<div className="fixed z-10 h-[80px] w-screen bg-zinc-200 drop-shadow-lg">
			<div className="flex h-full w-full items-center justify-between px-2">
				<div className="flex items-center">
					<h1 className="mr-4 text-2xl font-semibold uppercase sm:text-3xl">Mawingu</h1>
					<ul className="hidden md:flex">
						<li>Home</li>
						<li>About</li>
						<li>Support</li>
						<li>Platform</li>
						<li>Pricing</li>
					</ul>
				</div>
				<div className="hidden pr-4 md:flex">
					<button className="mr-4 border-none bg-transparent text-black">Sign In</button>
					<button className="px-5 py-3">Sign Up</button>
				</div>
				<div className="md:hidden" onClick={handleClick}>
					{!navigation ? <XIcon className="h6 w-6" /> : <MenuIcon className="h-6 w-6" />}
				</div>
			</div>

			<ul className={navigation ? 'hidden' : 'absolute w-full bg-zinc-200 px-8'}>
				<li className="w-full border-b-2 border-zinc-300">Home</li>
				<li className="w-full border-b-2 border-zinc-300">About</li>
				<li className="w-full border-b-2 border-zinc-300">Support</li>
				<li className="w-full border-b-2 border-zinc-300">Platform</li>
				<li className="w-full border-b-2 border-zinc-300">Pricing</li>
				<div className="my-4 flex flex-col">
					<button className="mb-4 bg-transparent px-5 py-3 text-indigo-600">
						Sign In
					</button>
					<button className="px-5 py-3">Sign Up</button>
				</div>
			</ul>
		</div>
	);
};

export default NavigationHeader;
