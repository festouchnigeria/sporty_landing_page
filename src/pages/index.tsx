import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
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
            # Specify the image processing specifications right in the query.
            fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
        }
    }`);

    const handleScroll = () => {
        const targetElement = document.getElementById('urgent2ks');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className='w-full h-screen flex flex-col overflow-x-hidden font-raleway'>
            <title>Sportycredit Home</title>

            <Navbar path={location.pathname} />

            {/* Hero */}
            <section className="pb-80 md:pb-96 font-poppins overflow-hidden md:overflow-visible">
                <div className="flex flex-col static h-96">
                    <div className='relative'>
                        <div className="z-0 w-screen absolute">
                            {/* <StaticImage
                                src='../images/background_1.png'
                                alt='Hero image'
                                // width={450}
                                // height={800}
                                className='w-screen max-h-[740px]'
                            /> */}

                            <Img
                                alt="landing page image"
                                fluid={data.file.childImageSharp.fluid}
                                className='w-screen md:max-h-[740px]'
                            />
                        </div>
                    </div>

                    <div className="relative mt-10 mx-auto md:mx-0 inset-0 md:inset-y-1/4 lg:inset-0 lg:my-auto flex justify-center md:justify-start p-10 lg:mr-28 text-dark text-center md:text-left">
                        <div className='flex flex-col inset-y-[-64px] absolute px-10 lg:px-0 lg:w-1/3 gap-y-2 md:gap-y-4'>
                            <div className="md:text-5xl   pt-11 lg:pt-0">Loan Up to</div>
                            <div className="md:text-5xl  mb-1">5 Hundred Thousand Naira</div>

                            <div className="text-[0.65rem] md:text-base w-screen md:w-auto px-10 md:px-0 mb-16">
                                Loan as low as 10,000 and as high as 500,000 with sportycredit. We specialzie in providing Nigerians citizens business loans to build their financial horizone of their businesses.
                               ` {/* Get up to 5 million Naira with MoMo Credit. It's easy and with no collateral. You can build your credit worthiness to 5,000,000. With MoMo Credit you are just a click away from getting that money to sort out your pressing needs.’` */}
                            </div>

                            <div className="hidden w-full md:flex -mt-18 md:-mt-14">
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

                            <div className="md:hidden w-full flex -mt-6 justify-center">
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
                            </div>

                            <div className="w-full text-[0.65rem] md:text-base">
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
            </section>


            <div className='flex flex-col-reverse md:flex-row md:pl-0 gap-x-6 md:mt-10' id='twophones1'>

                <div className='flex flex-row px-20 mt-20'>
                    <div className="md:hidden">
                        <StaticImage
                            src='../images/bigiphonexx.png'
                            alt='iPhone1'
                            // width={550}
                            className='w-[246px] h-[502px]'
                        />
                    </div>

                    {/* <div className='md:hidden mt-6'>
                        <StaticImage
                            src='../images/iPhone 1 Pro.png'
                            alt='iPhone2'
                        // width={500}
                        // className='w-[183px] h-[374px]'
                        />
                    </div> */}
                </div>



                <div className="hidden md:block">
                    <StaticImage
                        src='../images/bigiphonexx.png'
                        alt='iPhone1'
                        // width={550}
                        className='w-[246px] h-[502px]'
                    />
                </div>

                <div className='hidden md:block mt-28 ml-6'>
                    <StaticImage
                        src='../images/iphonesmalll.png'
                        alt='iPhone2'
                        // width={500}
                        className='w-[183px] h-[374px]'
                    />
                </div>

                <div className='flex flex-col gap-y-2 md:ml-10 mt-10 px-8 text-center md:text-left md:pr-40'>
                    <div className='capitalize text-2xl md:text-3xl font-medium min-w-[300px]'>
                        {/* With MoMo you can quickly sort out urgent bills */}
                        Urgent Cash Within 5mins is Guaranteed
                    </div>
                    <div className='text-justify mt-2 text-[#808080]'>
                        You dont need to beg for urgent cash anymore, just apply on sportycredit and get credited instantly.
                        {/* MoMo Credit offers loan for your urgent bills.
                        With MoMo Credit you can get loan to pay for your DSTV subscription, pay for your light bill, etc... */}
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
                    {/* Benefits of using the Momo Credit App */}
                    WHY IS SPORTYCREDIT BETTER THAN LOAN SHARKS
                </div>

                {/* <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-x-6'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='m-auto'>
                            <StaticImage
                                src='../images/icon_1.svg'
                                alt=''
                                width={45}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2 text-center'>
                            <div className='text-xl md:text-2xl text-kashmir-blue font-semibold'>
                                No Hidden Charges
                            </div>
                            <div className="text-[#808080] text-center">
                                With Momo Credit there is no hidden charges, no collateral.
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <div className='m-auto'>
                            <StaticImage
                                src='../images/icon_2.svg'
                                alt=''
                                width={45}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2 text-center'>
                            <div className='text-xl md:text-2xl text-kashmir-blue font-semibold'>
                                Secure and Safe
                            </div>
                            <div className="text-[#808080] text-center">
                                MoMo Credit is safe, secure and easy to use.
                                <div className="invisible">This is just a placeholder</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <div className='m-auto'>
                            <StaticImage
                                src='../images/icon_4.svg'
                                alt=''
                                width={45}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2 text-center'>
                            <div className='text-xl md:text-2xl text-kashmir-blue font-semibold'>
                                Flexible Terms
                            </div>
                            <div className="text-[#808080] text-center">
                                MoMo Credit has the most customer friendly terms and conditions any customer can ask for.
                            </div>
                        </div>
                    </div>
                </div> */}

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
                                    {/* No Hidden Charges */}
                                    FAST LOAN DISBURSEMENT
                                </div>
                                <div className="text-[#808080] text-center">
                                    {/* With Momo Credit there is no hidden charges, no collateral. */}
                                    Get your loan disbursed in 5mins after a quick stressfree application.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-4 px-4 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
                        <div className='flex flex-col gap-y-4'>
                            <div className='m-auto'>
                                <StaticImage
                                    src='../images/icon_2.svg'
                                    alt='secure'
                                    width={45}
                                />
                            </div>

                            <div className='flex flex-col gap-y-2 text-center'>
                                <div className='text-xl md:text-xl text-[#6A49F2] font-semibold'>
                                   BUSINESS LOAN OPPORTUNITY
                                </div>
                                <div className="text-[#808080] text-center">
                                    Gain access to our high business loan offer of over 200,000 by repaying before due date.
                                    {/* MoMo Credit is safe, secure and easy to use. */}
                                    <div className="invisible">This is just a placeholder</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-4 px-4 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-[35%]">
                    <div className='flex flex-col gap-y-4'>
                        <div className='m-auto'>
                            <StaticImage
                                src='../images/icon_4.svg'
                                alt=''
                                width={45}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2 text-center'>
                            <div className='text-xl md:text-xl text-[#6A49F2] font-semibold'>
                                GOOD LOAN COLLECTION ETHICS
                            </div>
                            <div className="text-[#808080] text-center">
                                {/* MoMo Credit has the most customer friendly terms and conditions any customer can ask for. */}
                                We are dedicated to servcie of our customers as we are binded by Nigerian laws to carry out our loan collection using ethical method.
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
                    <div className='flex flex-col items-center gap-y-4 md:ml-20  md:text-left text-center ' id="bounce">
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
                            You do not need to go through the embarrsasment of begging relatives for money. A simple application processs with sportycredit gives you the amount you want with ease.
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
                            <div className='my-auto' id='urgent2ks'>
                            <a href="https://sportycredit.fra1.cdn.digitaloceanspaces.com/apk/sportycredits_all.apk" target="_blank">
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

            {/* <div
                className='flex flex-col py-28 px-6  lg:px-60 gap-y-6 text-center'
                id='testimonial'
            >
                <div className='text-3xl font-bold'>What our customers say</div>

                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={2000}
                    swipeable
                    showStatus={false}
                >
                    <div className=''>
                        <Testimonial
                            name='Olayinka Adebayo'
                            text="I am content and appreciative of the help I have gotten from you all. Without you guys, I can't imagine how quickly and easily my personal loan application went through. Thank you so much for all the services."
                        />
                    </div>

                    <div className=''>
                        <Testimonial
                            name='Bisi Phillips'
                            text="I've had no issues with payments from the initial request. There whenever I needed assistance. Service that has helped me through many difficult times. came through for me every time. I greatly appreciate it."
                        />
                    </div>

                    <div className=''>
                        <Testimonial
                            name='Ngozi Ogbu'
                            text="MoMo Credit is a top-notch lender. The approval procedure was quick and painless, making it a wonderful experience. I sincerely appreciate your assistance and amazing service."
                        />
                    </div>
                </Carousel>
            </div> */}

            <Footer />
        </main >
    );
}
