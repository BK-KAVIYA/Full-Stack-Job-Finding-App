const Services = () => {
	const servicesList = [
		{
			title: "Resume Writing Service",
			desc: "Are you struggling to create a compelling resume that highlights your skills and experiences effectively? Our professional resume writing service is here to help. ",
		},
		{
			title: "Interview Coaching Service",
			desc: "Navigating the interview process can be daunting, but with our interview coaching service, you'll feel confident and prepared to impress potential employers.",
		},
		{
			title: "Career Counseling Service",
			desc: "Unsure about your career path or feeling stuck in your current job? Our career counseling service offers personalized guidance and support to help you navigate your professional journey.",
		},
	];
	return (
		<div className="w-full flex flex-col items-center gap-8 mt-16 mb-0 md:px-0 px-5">
			<div className="flex flex-col gap-1 text-center">
				<h1 className="font-semibold text-5xl text-indigo-500"><span className="text-black">Our</span> Services</h1>
				<p className="text-[18px] text-gray-600 max-w-[500px] leading-7">
					Elevate your job search with our professionaljob-finding service.
				</p>
			</div>
			<div className="flex md:w-[80%] my-0 mx-auto w-full items-center gap-8 md:flex-row flex-col">
				{servicesList.map((service, index) => {
					return (
						<div
							className="w-full bg-white hover:bg-indigo-50 transition-all duration-300 p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-3 items-start"
							key={index}
						>
							<span className="text-indigo-500 font-semibold">{service.title}</span>
							<p className="text-[15px] leading-7 text-gray-700 text-justify">{service.desc}</p>
							<a
								href="#"
								className="text-indigo-500 text-[15px]"
							>
								Learn More
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
