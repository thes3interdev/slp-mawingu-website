import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavigationHeader = () => {
	const [navigation, setNavigation] = useState(false);

	const handleClick = () => setNavigation(!navigation);
	const handleClose = () => setNavigation(!navigation);

	return (
		<div className="fixed z-10 h-[80px] w-screen bg-zinc-200 drop-shadow-lg">
			<div className="flex h-full w-full items-center justify-between px-2">
				<div className="flex items-center">
					<h1 className="mr-4 text-2xl font-semibold uppercase sm:text-3xl">Mawingu</h1>
					<ul className="hidden hover:cursor-pointer md:flex">
						<li>
							<Link to="Home" smooth={true} duration={500} onClick={handleClose}>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="About"
								smooth={true}
								offset={-200}
								duration={500}
								onClick={handleClose}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="Support"
								smooth={true}
								offset={-50}
								duration={500}
								onClick={handleClose}
							>
								Support
							</Link>
						</li>
						<li>
							<Link
								to="Platform"
								smooth={true}
								offset={-100}
								duration={500}
								onClick={handleClose}
							>
								Platform
							</Link>
						</li>
						<li>
							<Link
								to="Pricing"
								smooth={true}
								offset={-50}
								duration={500}
								onClick={handleClose}
							>
								Pricing
							</Link>
						</li>
					</ul>
				</div>
				<div className="hidden pr-4 md:flex">
					<button className="px-5 py-3">Sign Up</button>
				</div>
				<div className="mr-4 md:hidden" onClick={handleClick}>
					{!navigation ? <MenuIcon className="h-6 w-6" /> : <XIcon className="h6 w-6" />}
				</div>
			</div>

			<ul className={!navigation ? 'hidden' : 'absolute w-full bg-zinc-200 px-8'}>
				<li className="w-full border-b-2 border-zinc-300">
					<Link to="Home" spy={true} smooth={true} offset={500} duration={500}>
						Home
					</Link>
				</li>
				<li className="w-full border-b-2 border-zinc-300">
					<Link to="About" spy={true} smooth={true} offset={-200} duration={500}>
						About
					</Link>
				</li>
				<li className="w-full border-b-2 border-zinc-300">
					<Link to="Support" spy={true} smooth={true} offset={-50} duration={500}>
						Support
					</Link>
				</li>
				<li className="w-full border-b-2 border-zinc-300">
					<Link to="Platform" spy={true} smooth={true} offset={-100} duration={500}>
						Platform
					</Link>
				</li>
				<li className="w-full border-b-2 border-zinc-300">
					<Link to="Pricing" spy={true} smooth={true} offset={-50} duration={500}>
						Pricing
					</Link>
				</li>
				<div className="my-4 flex flex-col">
					<button className="px-5 py-3">Sign Up</button>
				</div>
			</ul>
		</div>
	);
};

export default NavigationHeader;
