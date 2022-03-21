import { CheckIcon } from '@heroicons/react/solid';

const SectionPricing = () => {
	return (
		<div name="Pricing" className="my-24 w-full text-white">
			<div className="absolute h-[800px] w-full bg-slate-900 mix-blend-overlay"></div>
			<div className="mx-auto max-w-[1240px] py-12">
				<div className="py-8 text-center text-slate-300">
					<h2 className="text-3xl uppercase">Pricing</h2>
					<h3 className="py-8 text-5xl font-bold text-white">
						The Right Price for Your Research
					</h3>
					<p className="text-center text-2xl">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolor
						repellat aliquid tenetur fugiat unde esse autem tempora, necessitatibus animi
						quo?
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="relative m-4 rounded-xl bg-white p-8 text-slate-900 shadow-2xl">
						<span className="rounded-2xl bg-indigo-200 px-3 py-1 text-sm uppercase text-indigo-900">
							Standard
						</span>
						<div>
							<p className="flex py-4 text-6xl font-bold">
								$49
								<span className="flex flex-col justify-end text-xl text-slate-500">
									/month
								</span>
							</p>
						</div>
						<p className="py-8 text-2xl text-slate-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
						<div className="text-2xl">
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<button className="my-4 w-full py-4">Get Started</button>
						</div>
					</div>

					<div className="relative m-4 rounded-xl bg-white p-8 text-slate-900 shadow-2xl">
						<span className="rounded-2xl bg-indigo-200 px-3 py-1 text-sm uppercase text-indigo-900">
							Professional
						</span>
						<div>
							<p className="flex py-4 text-6xl font-bold">
								$99
								<span className="flex flex-col justify-end text-xl text-slate-500">
									/month
								</span>
							</p>
						</div>
						<p className="py-8 text-2xl text-slate-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
						<div className="text-2xl">
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<p className="flex py-4">
								<CheckIcon className="mr-5 h-8 w-8 text-green-600" />
								Lorem ipsum dolor sit amet.
							</p>
							<button className="my-4 w-full py-4">Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionPricing;
