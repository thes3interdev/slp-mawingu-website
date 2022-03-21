import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';
import SupportBgImage from '../assets/support.jpg';

const SectionSupport = () => {
	return (
		<div className="mt-24 w-full">
			<div className="absolute h-[700px] w-full bg-gray-900/90">
				<img
					src={SupportBgImage}
					alt="Support Image"
					className="h-full w-full object-cover mix-blend-overlay"
				/>
			</div>

			<div className="relative mx-auto max-w-[1240px] text-white">
				<div className="px-4 py-12">
					<h2 className="pt-8 text-center text-3xl uppercase text-slate-300">Support</h2>
					<h3 className="py-6 text-center text-5xl font-bold">Finding the Right Team</h3>
					<p className="py-4 text-3xl text-slate-300">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis hic nulla
						aliquam qui perspiciatis quasi quos vitae. Iste fuga quaerat temporibus
						excepturi, sapiente quia rerum mollitia fugiat expedita aliquid earum
						eligendi praesentium assumenda ut.
					</p>
				</div>

				<div className="relative grid grid-cols-1 gap-x-8 gap-y-16 px-4 pt-12 text-black sm:pt-20 lg:grid-cols-3">
					<div className="rounded-xl bg-white shadow-2xl">
						<div className="p-8">
							<PhoneIcon className="mt-[-4rem] w-16 rounded-lg bg-indigo-600 p-4 text-white" />
							<h3 className="my-6 text-2xl font-bold">Sales</h3>
							<p className="text-xl text-gray-600">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni eius
								laboriosam ipsam. Assumenda sint maxime nobis voluptatibus! Mollitia,
								consequuntur inventore.
							</p>
						</div>
						<div className="bg-slate-100 py-4 pl-8">
							<p className="flex items-center text-indigo-600">
								Contact Us <ArrowSmRightIcon className="ml-2 w-5" />
							</p>
						</div>
					</div>

					<div className="rounded-xl bg-white shadow-2xl">
						<div className="p-8">
							<ChipIcon className="mt-[-4rem] w-16 rounded-lg bg-indigo-600 p-4 text-white" />
							<h3 className="my-6 text-2xl font-bold">Media Inquiries</h3>
							<p className="text-xl text-gray-600">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni eius
								laboriosam ipsam. Assumenda sint maxime nobis voluptatibus! Mollitia,
								consequuntur inventore.
							</p>
						</div>
						<div className="bg-slate-100 py-4 pl-8">
							<p className="flex items-center text-indigo-600">
								Contact Us <ArrowSmRightIcon className="ml-2 w-5" />
							</p>
						</div>
					</div>

					<div className="rounded-xl bg-white shadow-2xl">
						<div className="p-8">
							<SupportIcon className="mt-[-4rem] w-16 rounded-lg bg-indigo-600 p-4 text-white" />
							<h3 className="my-6 text-2xl font-bold">Technical Support</h3>
							<p className="text-xl text-gray-600">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni eius
								laboriosam ipsam. Assumenda sint maxime nobis voluptatibus! Mollitia,
								consequuntur inventore.
							</p>
						</div>
						<div className="bg-slate-100 py-4 pl-8">
							<p className="flex items-center text-indigo-600">
								Contact Us <ArrowSmRightIcon className="ml-2 w-5" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionSupport;
