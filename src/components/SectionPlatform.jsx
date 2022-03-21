import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';

const SectionPlatform = () => {
	return (
		<div className="my-32 w-full">
			<div className="mx-auto max-w-[1240px] px-2">
				<h2 className="text-center text-5xl font-bold">All-in-One Platform</h2>
				<p className="py-8 text-center text-2xl text-gray-500">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum
					doloremque odit fugiat, consequatur magnam, sint sequi, vel repellat assumenda
					ipsam?
				</p>

				<div className="grid gap-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
					<div className="flex">
						<div>
							<CheckIcon className="mr-4 h-7 w-7 text-green-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold">Notifications</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum
								velit illo ipsam.
							</p>
						</div>
					</div>

					<div className="flex">
						<div>
							<CheckIcon className="mr-4 h-7 w-7 text-green-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold">Billing</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum
								velit illo ipsam.
							</p>
						</div>
					</div>

					<div className="flex">
						<div>
							<CheckIcon className="mr-4 h-7 w-7 text-green-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold">Sales</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum
								velit illo ipsam.
							</p>
						</div>
					</div>

					<div className="flex">
						<div>
							<CheckIcon className="mr-4 h-7 w-7 text-green-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold">Cancellations</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum
								velit illo ipsam.
							</p>
						</div>
					</div>

					<div className="flex">
						<div>
							<CheckIcon className="mr-4 h-7 w-7 text-green-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold">Funnels</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum
								velit illo ipsam.
							</p>
						</div>
					</div>

					<div className="flex">
						<div>
							<CheckIcon className="mr-4 h-7 w-7 text-green-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold">Call To Action</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum
								velit illo ipsam.
							</p>
						</div>
					</div>

					<div className="flex">
						<div>
							<CheckIcon className="mr-4 h-7 w-7 text-green-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold">Contracts</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum
								velit illo ipsam.
							</p>
						</div>
					</div>

					<div className="flex">
						<div>
							<CheckIcon className="mr-4 h-7 w-7 text-green-600" />
						</div>
						<div>
							<h3 className="text-lg font-bold">Budgets</h3>
							<p className="pt-2 pb-4 text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum
								velit illo ipsam.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionPlatform;
