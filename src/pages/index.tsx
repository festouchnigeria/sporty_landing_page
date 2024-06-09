import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Navbar, Footer, Testimonial } from "../components";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

export default function Home({ location }) {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })

    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "new_hero.png" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
        }
    }`);

    const handleScroll = () => {
        const targetElement = document.getElementById('urgent2k');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className='w-full h-screen flex flex-col overflow-x-hidden font-raleway'>
            <title>Sportycredit Home</title>

            <Navbar path={location.pathname} />

            <section className="pb-64 md:pb-96 font-poppins overflow-hidden md:overflow-visible">
                <div className="flex flex-col static h-96">
                    <div className='relative'>
                        <div className="z-0 w-screen absolute">
                            <Img
                                alt="landing page image"
                                fluid={data.file.childImageSharp.fluid}
                                className='w-screen md:max-h-[740px]'
                            />
                        </div>
                    </div>

                    <div className="relative mt-10 mx-auto md:mx-0 inset-0 md:inset-y-1/4 lg:inset-0 lg:my-auto flex justify-center md:justify-start p-10 lg:mr-28 text-dark text-center md:text-left">
                        <div className='flex flex-col inset-y-[-64px] absolute px-10 lg:px-0 lg:w-1/3 gap-y-2 md:gap-y-4'>
                            <div className="md:text-5xl pt-11 lg:pt-0">Loan Up to</div>
                            <div className="md:text-5xl mb-1">5 Hundred Thousand Naira</div>

                            <div className="text-[0.65rem] md:text-base w-screen md:w-auto px-10 md:px-0 mb-16">
                                Loan as low as 10,000 and as high as 500,000 with sportycredit. We specialize in providing Nigerians citizens business loans to build their financial horizon of their businesses.
                            </div>

                            <div className="w-full md:flex -mt-18 md:-mt-14">
                                <div className='flex flex-row gap-x-2'>
                                    <div>
                                        <a href="https://apps.apple.com/ng/app/sporty-credit/id6450298959">
                                            <StaticImage
                                                src='../images/app.svg'
                                                alt='Apple Logo'
                                                width={180}
                                            />
                                        </a>
                                    </div>

                                    <div className='my-auto'>
                                        <a href="https://sportycredit.fra1.cdn.digitaloceanspaces.com/apk/sportycredits.apk" target="_blank">
                                            <StaticImage
                                                src='../images/google-play-badge.png'
                                                alt='Google Store'
                                                width={200}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:flex">
                                <span>Having trouble downloading? </span>
                                <span className='text-blue-600 cursor-pointer' onClick={handleScroll}
                                    onMouseOver={(e) => (e.target as HTMLSpanElement).style.textDecoration = 'underline'}
                                    onMouseOut={(e) => (e.target as HTMLSpanElement).style.textDecoration = 'none'}>
                                    Click here
                                </span>
                            </div>

                            <div className="md:hidden w-full flex flex-col items-center mt-6">
                                <div className='flex flex-row gap-x-2'>
                                    <div>
                                        <a href="https://apps.apple.com/ng/app/sporty-credit/id6450298959">
                                            <StaticImage
                                                src='../images/app.svg'
                                                alt='Apple Logo'
                                                width={90}
                                            />
                                        </a>
                                    </div>

                                    <div className='my-auto'>
                                        <a href="https://sportycredit.fra1.cdn.digitaloceanspaces.com/apk/sportycredits.apk" target="_blank">
                                            <StaticImage
                                                src='../images/google-play-badge.png'
                                                alt='Google Store'
                                                width={110}
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-4 text-center">
                                    <span>Having trouble downloading? </span>
                                    <span className='text-blue-600 cursor-pointer' onClick={handleScroll}
                                        onMouseOver={(e) => (e.target as HTMLSpanElement).style.textDecoration = 'underline'}
                                        onMouseOut={(e) => (e.target as HTMLSpanElement).style.textDecoration = 'none'}>
                                        Click here
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex flex-col-reverse md:flex-row md:pl-0 gap-x-6 md:mt-10' id='twophones1'>
                <div className='flex flex-row px-20 mt-20'>
                    <div className="md:hidden">
                        <StaticImage
                            src='../images/bigiphonexx.png'
                            alt='iPhone1'
                            className='w-[246px] h-[502px]'
                        />
                    </div>
                </div>

                <div className="hidden md:block">
                    <StaticImage
                        src='../images/bigiphonexx.png'
                        alt='iPhone1'
                        className='w-[246px] h-[502px]'
                    />
                </div>

                <div className='hidden md:block mt-28 ml-6'>
                    <StaticImage
                        src='../images/iphonesmalll.png'
                        alt='iPhone2'
                        className='w-[183px] h-[374px]'
                    />
                </div>

                <div className='flex flex-col gap-y-2 md:ml-10 mt-10 px-8 text-center md:text-left md:pr-40'>
                    <div className='capitalize text-2xl md:text-3xl font-medium min-w-[300px]'>
                        Urgent Cash Within 5mins is Guaranteed
                    </div>
                    <div className='text-justify mt-2 text-[#808080]'>
                        You dont need to beg for urgent cash anymore, just apply on sportycredit and get credited instantly.
                    </div>
                </div>

                <div className='hidden md:block relative'>
                    <StaticImage
                        src='../images/redstar.png'
                        alt=''
                        width={110}
                        className="mr-20"
                    />
                </div>

                <div className='md:hidden relative mt-4 ml-4'>
                    <StaticImage
                        src='../images/redstar.png'
                        alt=''
                        width={50}
                        className="mr-20"
                    />
                </div>
            </div>

            <div className='flex flex-col md:px-40 lg:px-40 py-20 px-6'>
                <div className='capitalize text-[#6A49F2] text-center text-2xl md:text-3xl font-medium pb-2'>
                    WHY IS SPORTYCREDIT BETTER THAN LOAN SHARKS
                </div>

                <div className="flex flex-col lg:flex-row -mx-4 overflow-hidden mt-5">
                    <div className="my-4 px-4 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
                        <div className='flex flex-col gap-y-4'>
                            <div className='m-auto'>
                                <StaticImage
                                    src='../images/icon_1.svg'
                                    alt=''
                                    width={45}
                                />
                            </div>

                            <div className='flex flex-col gap-y-2 text-center'>
                                <div className='text-xl md:text-xl text-[#6A49F2] font-semibold'>
                                    FAST LOAN DISBURSEMENT
                                </div>
                                <div className="text-[#808080] text-center">
                                    Get your loan disbursed in 5mins after a quick stress-free application.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-4 px-4 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
                        <div className='flex flex-col gap-y-4'>
                            <div className='m-auto'>
                                <StaticImage
                                    src='../images/icon_2.svg'
                                    alt=''
                                    width={45}
                                />
                            </div>

                            <div className='flex flex-col gap-y-2 text-center'>
                                <div className='text-xl md:text-xl text-[#6A49F2] font-semibold'>
                                    LOANS WITHOUT COLLATERAL
                                </div>
                                <div className="text-[#808080] text-center">
                                    Enjoy loan applications without the hassle of collateral or any security deposits.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-4 px-4 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
                        <div className='flex flex-col gap-y-4'>
                            <div className='m-auto'>
                                <StaticImage
                                    src='../images/icon_3.svg'
                                    alt='secure'
                                    width={45}
                                />
                            </div>

                            <div className='flex flex-col gap-y-2 text-center'>
                                <div className='text-xl md:text-xl text-[#6A49F2] font-semibold'>
                                    CONVENIENT PAYMENT TERMS
                                </div>
                                <div className="text-[#808080] text-center">
                                    Enjoy flexible loan repayment tenure that makes it easy for you.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col md:flex-row w-full mt-10 justify-center md:h-[600px] h-[850px]'
                id='urgent2k'
            >
                <div className='flex flex-col md:flex-row justify-center w-full mx-auto'>
                    <div className='flex flex-col items-center gap-y-4 md:ml-20 md:text-left text-center' id="bounce">
                        <StaticImage
                            src='../images/bouncingiphonexx.png'
                            alt=''
                            width={350}
                        />
                    </div>

                    <div className='flex flex-col items-center gap-y-4 md:ml-20 p-10 md:text-left text-center md:w-1/2 md:min-w-[500px]'>
                        <div className='text-2xl md:text-3xl capitalize font-medium xl:w-[70%]'>
                            {/* Say Goodbye to "Urgent 2K" */}
                            WITH SPORTYCREDIT YOUR URGENT 10K IS ASSURED
                        </div>
                        <div className='md:w-2/3'>
                            {/* With MoMo Credit no more calling anybody to send you "urgent 2k" because MoMo Credit have you covered and just a click away. */}
                            You do not need to go through the embarrassment of begging relatives for money. A simple application process with sportycredit gives you the amount you want with ease.
                        </div>
                        <div className='flex flex-row gap-x-2 -mt-8'>
                            <div>
                                <a href='https://apps.apple.com/ng/app/sporty-credit/id6450298959'>
                                    <StaticImage
                                        src='../images/app.svg'
                                        alt='Apple Logo'
                                        width={180}
                                    />
                                </a>
                            </div>
                            <div className='my-auto'>
                                <a href="https://sportycredit.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
                                    <StaticImage
                                        src='../images/google-play-badge.png'
                                        alt='Google Store'
                                        width={200}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}