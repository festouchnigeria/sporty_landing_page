import { StaticImage } from "gatsby-plugin-image";
import React, {useState} from "react";
import { Carousel } from "react-responsive-carousel";
import { Navbar, Footer, Testimonial } from "../components";

export default function About({ location }) {

    const [activeIndex, setActiveIndex] = useState(-1);
    const [activeIndexTwo, setActiveIndexTwo] = useState(-1);

    const toggleAccordionTwo = (index: number) => {
      if (activeIndexTwo === index) {
        setActiveIndexTwo(-1);
      } else {
        setActiveIndexTwo(index);
      }
    };
    const toggleAccordion = (index: number) => {
      if (activeIndex === index) {
        setActiveIndex(-1);
      } else {
        setActiveIndex(index);
      }
    };
  
    const faqData = [
      {
        question: 'What is MoMo Credit?',
        answer:
          'MoMo Credit is a loan app that allows you apply for a short term loan through the MoMo Credit app.',
      },
      {
        question: 'Why should I use MoMo Credit app?',
        answer:
          'MoMo Credit gives you access to soft loan, business loan and education loan. With Momo Credit you are just a click away from accessing that urgent funds to finance your urgent needs.',
      },
      {
        question: 'Is there interest or any charges on using the MoMo Credit loan?',
        answer:
          'MoMo Credit loan is an interest free loan, but there is a service fee charge for the usage of the platform.',
      },
      {
        question: 'Who can apply for loan on MoMo Credit app?',
        answer:
          'Only salary earners with proof of their monthly salaries can apply for loans on MoMo Credit app. MoMo Credit is strictly for salary earners',
      },
      {
        question: 'Who can stand as a guarantor?',
        answer:
          'A guarantor must be a salary earner.',
      },
      {
        question: 'How much can I apply as a first time customer?',
        answer:
          'First time customers can apply for a loan from N10,000 to N50,000',
      },
      
     
    ];
    const secondFaq = [
        {
            question: 'Do I need a guarantor to apply for the loan?',
            answer:
              'Yes, you are required to fill in two guarantors information to be eligible to apply for the loan on the MoMo Credit app',
          },
      {
        question: 'What is the duration of MoMo Credit loan?',
        answer:
          '7 days for new customers.',
      },
      {
        question: 'As a returning customer can my loan duration be increased if yes, how many days?',
        answer:
          'Returning customers who have good repayment history can have their loan duration extended to 14 days.',
      },
      {
        question: 'How do I register on the MoMo Credit app?',
        answer:
          'Simply download the MoMo Credit app from android or ios playstore, install and register.',
      },
      {
        question: 'Will I pay late penalty charges if I am unable to repay my loan within the loan duration?',
        answer:
          'Yes, there is a penalty charge on daily basis if you fail to make repayment at the expiration of the loan duration.',
      },
      {
        question: 'What is the benefits of using MoMo Credit app?',
        answer:
          'MoMo Credit app is safe, secure and reliable. It is easy to use and it is customer friendly',
      },

      
    ];
    return (
        <main className='w-full h-screen  font-poppins'>
            <div className="flex flex-col">
            <title>Contact MoMo</title>

            <Navbar path={location.pathname} />

            {/* Hero */}
            <div className="flex">
                <div className="flex flex-col lg:flex-row relative mb-40 md:mb-10 lg:mb-2.5 h-[100vh] 2xl:h-[1170px] w-full">
                    <div className="absolute">
                        <StaticImage src="../images/touch.png" alt="" className="z-[-100] h-screen md:h-auto w-screen" />
                    </div>

                    <div className='flex flex-col gap-y-2 px-10 md:px-0 md:pl-20 mt-10 md:mt-40 z-50'>
                        <div className="text-[#111111] font-medium text-3xl">Get In Touch</div>
                        <div className="text-[#686868] md:w-1/2">
                        Need support? Have a question? Our support team is ready to assist you with swift responses to your ticket.
                        </div>

                        <div className='flex flex-row gap-x-4 my-2 text-[#686868]'>
                            <div className="my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div><a href="tel:PHONE_NUM">+234 {"("}814{")"} 696 7250</a></div>
                        </div>
                        <div className='flex flex-row gap-x-4 my-2 text-[#686868]'>
                            <div className="my-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill w-6 h-6" viewBox="0 0 16 16"> <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/> </svg>
                            </div>

                            <div><a href="mailto:info@momocredits.com">info@momocredits.com</a></div>
                        </div>


                        <div className='flex flex-row gap-x-10 mt-4'>
                            <div>
                                <StaticImage src="../images/fb.svg" alt="" />
                            </div>

                            <a href="https://instagram.com/momocreditsng?igshid=ZWIzMWE5ZmU3Zg==">
                                <div>
                                    <StaticImage src="../images/ig.svg" alt="" />
                                </div>
                            </a>

                            {/* <div>
                                <StaticImage src="../images/ig.svg" alt="" />
                            </div> */}

                            <div>
                                <StaticImage src="../images/twitter.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col bg-kashmir-blue rounded-xl mt-20 md:mt-44 lg:mt-20 px-10 md:px-16 py-10 justify-center md:w-4/5 2xl:w-1/2 md:mx-auto md:mr-16 h-4/5 gap-y-4 z-50'>
                        <input type="text" name="" id="" className="rounded-xl p-4" placeholder="Full Name" />

                        <input type="phone" name="" id="" className="rounded-xl p-4" placeholder="Phone number" />

                        <input type="email" name="" id="" className="rounded-xl p-4" placeholder="Email address" />

                        <textarea placeholder="How can we help you?" className="rounded-xl p-4 overflow-hidden" name="" id="" cols={30} rows={10}></textarea>

                        <button type="submit" className="bg-white p-4 w-2/3 rounded-xl text-kashmir-blue">Send Message</button>
                    </div>
                 
                </div>
             
            </div>
          
    </div>
      {/* Faq goes here */}
      <div className="max-w-full mx-auto ml-5 mr-5 mb-10 mt-20 sm:mt-40 flex justify-center items-center">
        <div>
      <h2 className="text-2xl font-bold my-8">Frequently Asked Questions</h2>
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-3">
      <div className="space-y-4  w-full sm:w-1/2 ">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded p-4 h-auto">
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => toggleAccordionTwo(index)}
            >
              <h3 className="text-sm font-medium h-auto sm:h-12 text-left">{faq.question}</h3>
              <svg
                className={`w-5 h-5 transition-transform duration-300 transform ${
                  activeIndexTwo === index ? 'rotate-180' : 'rotate-0'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndexTwo === index && (
              <div className="mt-4 ">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-4 w-full sm:w-1/2 mt-4 sm:mt-0">
        {secondFaq.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded p-4 h-auto">
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-sm font-medium h-auto sm:h-12 text-left">{faq.question}</h3>
              <svg
                className={`w-5 h-5 transition-transform duration-300 transform ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="mt-4">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
    {/* Faq Ends here */}
            <Footer />
        </main>
    );
}
