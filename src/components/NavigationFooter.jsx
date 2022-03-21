import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const NavigationFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="mt-24 w-full bg-slate-900 py-16 px-2 text-gray-300">
			<div className="mx-auto grid max-w-[1240px] grid-cols-2 border-b-2 border-gray-600 py-8 md:grid-cols-6">
				<div>
					<h6 className="pt-2 font-bold uppercase">Solutions</h6>
					<ul>
						<li className="py-1">Marketing</li>
						<li className="py-1">Analytics</li>
						<li className="py-1">Commerce</li>
						<li className="py-1">Big Data</li>
						<li className="py-1">Cloud</li>
					</ul>
				</div>

				<div>
					<h6 className="pt-2 font-bold uppercase">Support</h6>
					<ul>
						<li className="py-1">Pricing</li>
						<li className="py-1">Documentation</li>
						<li className="py-1">Guides</li>
						<li className="py-1">API Status</li>
					</ul>
				</div>

				<div>
					<h6 className="pt-2 font-bold uppercase">Company</h6>
					<ul>
						<li className="py-1">About</li>
						<li className="py-1">History</li>
						<li className="py-1">Blogs</li>
						<li className="py-1">Jobs</li>
						<li className="py-1">Partners</li>
					</ul>
				</div>

				<div>
					<h6 className="pt-2 font-bold uppercase">Legal</h6>
					<ul>
						<li className="py-1">Privacy Policy</li>
						<li className="py-1">Terms of Trade</li>
					</ul>
				</div>

				<div className="col-span-2 pt-8 md:pt-2">
					<h6 className="pt-2 font-bold uppercase">Subscribe to Our Newsletter</h6>
					<p className="py-4">
						the latest news, articles, and resources, sent to your inbox.
					</p>
					<form className="flex flex-col sm:flex-row">
						<input type="email" className="mr-4 mb-4 w-full rounded-md p-2" />
						<button className="mb-4 p-2">Subscribe</button>
					</form>
				</div>
			</div>
			<div className="mx-auto flex max-w-[1240px] flex-col items-center  justify-between px-2  py-4 text-center text-gray-500 sm:flex-row">
				<p>© Copyright {currentYear} Michael Owuor. All Rights Reserved.</p>
				<div className="flex justify-between space-x-3 text-xl sm:w-[300px]">
					<FaFacebook />
					<FaTwitter />
					<FaInstagram />
					<FaGithub />
				</div>
			</div>
		</div>
	);
};

export default NavigationFooter;
