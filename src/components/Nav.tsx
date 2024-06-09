import axios from "axios";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

interface Props {
	path?: string;
}

export default function Navbar({ path }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	let activeMenu = 'text-kashmir-blue';

	// const handleDownload = () => {
	// 	try {
	// 		axios.get('http://localhost:3000/users/download/:id').then((response)=> {
	// 			console.log('response', response)
	// 		})
	// 	} catch (error) {
	// 	console.log('error', error)	
	// 	}
		
	// }

	const handleDownload = () => {
  const downloadUrl = 'https://whale-app-8odnk.ondigitalocean.app/users/download/:id'; 

  axios.get(downloadUrl, { responseType: 'blob' }, ) 
    .then((response) => {
      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: 'application/octet-stream' });

      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor tag and trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'momo.apk'); 
      document.body.appendChild(link);
      link.click();

      // Clean up by revoking the URL object after download
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.log('error', error);
    });
};

	return (
		<div className='w-full flex flex-row justify-between px-10 py-2.5 md:py-0 font-poppins'>
			<div className='my-auto max-w-[150px]'>
				<Link to='/'>
					<StaticImage className="w-[110px] lg:w-full h-full" src='../images/logo-dark.png' alt='Momo Logo' />
				</Link>
			</div>

			<div className='md:flex flex-row gap-x-10 lg:gap-x-20 my-auto text-md lg:text-xl font-semibold hidden'>
				<div className={path === '/' ? activeMenu : ''}>
					<Link to='/'>Home</Link>
				</div>

				<div className={path === '/about' ? activeMenu : ''}>
					<Link to='/about'>About Us</Link>
				</div>

				<div className={path === '/contact' ? activeMenu : ''}>
					<Link to='/contact'>Contact</Link>
				</div>
			</div>

			<div className={path === '/' ? '-mt-40' : '-mt-40 invisible md:hidden lg:block'} id='top_ball'>
				<StaticImage
					src='../images/nav_circle.png'
					alt=''
					width={300}
				/>
			</div>

			<div className='hidden lg:block my-auto font-raleway font-semibold'>
				<a href="https://sportycredit.fra1.cdn.digitaloceanspaces.com/apk/sportycredits.apk" target="_blank">
				<button  className='bg-[#6A49F2] w-[9rem] max-h-[60px] max-w-[271px] whitespace-nowrap lg:w-auto text-xs lg:text-base px-4 lg:px-14 text-white py-2 lg:py-4 rounded-md cursor-pointer transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out'>
					Get Started
				</button>
				</a>
			</div>

			<div className='lg:hidden my-auto'>
				<button
					aria-label='Open Menu'
					title='Open Menu'
					className='focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none'
					onClick={() => setIsMenuOpen(true)}
				>
					<svg
						className='w-5 text-gray-600'
						viewBox='0 0 24 24'
					>
						<path
							fill='currentColor'
							d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
						/>
						<path
							fill='currentColor'
							d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
						/>
						<path
							fill='currentColor'
							d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
						/>
					</svg>
				</button>
				{isMenuOpen && (
					<div className='absolute top-0 left-0 w-full z-[10000]'>
						<div className='rounded border bg-white p-5 shadow-sm'>
							<div className='mb-4 flex items-center justify-between'>
								<div>
								
									<StaticImage className="w-20 lg:w-full h-full" src='../images/logo-dark.png' alt='Momo Logo' />
								</div>
								<div>
									<button
										aria-label='Close Menu'
										title='Close Menu'
										className='focus:shadow-outline -mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none'
										onClick={() =>
											setIsMenuOpen(false)
										}
									>
										<svg
											className='w-5 text-gray-600'
											viewBox='0 0 24 24'
										>
											<path
												fill='currentColor'
												d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
											/>
										</svg>
									</button>
								</div>
							</div>
							<nav>
								<div className='my-auto flex flex-col gap-y-4 font-semibold text-black'>
									<div className={path === '/' ? activeMenu: ''}>
										<Link to='/'>Home</Link>
									</div>

									<div className={path === '/about' ? activeMenu: ''}>
										<Link to='/about'>About Us</Link>
									</div>

									<div className={path === '/contact' ? activeMenu: ''}>
										<Link to='/contact'>Contact</Link>
									</div>
								</div>
							</nav>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
