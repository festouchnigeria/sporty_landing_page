import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-wrap md:flex-row bg-[#6A49F2]  min-h-[550px] sm:min-h-[400px] md:min-h-[290px] w-full items-center justify-around overflow-hidden text-white relative padding">
      <div className="flex flex-col gap-y-[10px] text-sm px-5">
        <div className="text-lg font-bold">Company</div>
        <div className="flex-1" />
        <Link to="/about">
          <div>About Us</div>
        </Link>

        <Link to="/contact">
          <div>Contact</div>
        </Link>

        {/* <Link to='/'>
					<div>Interest Breakdown</div>
				</Link> */}
      </div>

      <div className="flex flex-col gap-y-[10px] text-sm">
        <div className="text-lg font-bold">Our Services</div>
        <div className="flex-1" />

        <div>Soft Loan</div>

        <div>Business Loan</div>

        <div>Educational Loan</div>
      </div>

      <div className="flex flex-col gap-y-[10px] text-sm px-5">
        <div className="text-lg font-bold">Legal</div>
        <div className="flex-1" />
        <Link to="/terms">
          <div>Terms of Use</div>
        </Link>
        {/* <Link to='/'>
				<div>Operation Guide</div>
				</Link> */}
        <Link to="/privacy">
          <div>Privacy Policy</div>
        </Link>

        <Link to="/return">
          <div>Return Policy</div>
        </Link>
      </div>

      <StaticImage
        src="../images/white_star.svg"
        alt=""
        className="absolute top-[36px] right-10"
      />
      <div className="flex text-sm px-5 text-center">
        {" "}
        &copy; {currentYear} NEWCREDAGE NIGERIA LIMITED is a digital money
        lending company provided by NEWCREDAGE NIGERIA LIMITED (RC 7185334),
        licensed and regulated under Section 5(2) of the Money Lender’s Act
        (Cap.252) LFN 1990. We empower individuals with credit and micro loan
        solutions personal and business use. Our operations are based in
        Nigeria.
      </div>
    </div>
    // <div
    // 	className='flex flex-col text-center md:text-left gap-y-10 md:flex-row px-10 md:px-10 justify-items-start py-6 gap-x-10 w-full bg-kashmir-blue text-white'
    // >
    // 	<div className='flex flex-row gap-x-10 justify-between w-full'>

    // 		<div className='flex flex-col'>
    // 			<div>
    // 			<StaticImage src="../images/logo_old copy.png" alt="Momo Logo" className="text-white" />
    // 			</div>

    // 			<span className='text-gray-300 text-xs -mt-4 mx-auto'>All rights reserved © {new Date().getFullYear()}</span>
    // 		</div>

    // 		<div className='flex flex-col lg:flex-row gap-x-10 text-sm my-auto col-span-2'>
    // 			<div className="hover:underline mb-2">
    // 				<Link to='/'>Home</Link>
    // 			</div>
    // 			<div className="hover:underline mb-2">
    // 				<Link to="/about">About</Link>
    // 			</div>
    // 			<div className="hover:underline mb-2">
    // 				<Link to="/contact">Contact</Link>
    // 			</div>
    // 			<div className="hover:underline mb-2">
    // 				<Link to="/terms">Terms & Conditions</Link>
    // 			</div>
    // 			<div className="hover:underline mb-2">
    // 				<Link to="/privacy">Privacy Policy</Link>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
}
