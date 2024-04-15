import React from 'react'
import BG from '../../../public/images/bg.jpg'

const Hero = () => {
	return (
		<div
			className="w-full h-[100vh] flex items-center md:justify-between justify-center md:px-24 px-5 bg-coer bg-no-repeat bg-center relative"
			style={{ backgroundImage: `url(${BG})` }}
		>
			<div className="flex flex-col gap-8 z-50">
				<span className="text-5xl font-semibold text-indigo-100"> Welcome to <span className='text-yellow-300'>NiceJob</span></span>
				<p className="text-gray-200 max-w-[600px] leading-7 text-justify">
				Our app revolutionizes the job search process by leveraging advanced algorithms to match you with the perfect opportunities. Whether you're a seasoned professional or just starting your career journey, our platform caters to individuals of all backgrounds and experiences.
				</p>
				<button className="text-white rounded-full bg-indigo-500 w-40 p-3">
					Find Jobs Now
				</button>
			</div>
			<div className="w-full h-[100vh] z-10 bg-indigo-900 opacity-60 absolute left-0"></div>
		</div>
	);
};

export default Hero;
