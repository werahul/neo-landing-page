import React, { useState } from "react";
import { FaqArrow, FaqArrowGreen } from "../assets/images";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const initialVisibleCount = 5;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const faqData = [
    {
      q_no: "01",
      question: "Can I trade directly from NeoTrader?",
      answer:
        "Yes, we have a click trade execution feature with leading brokers. All you need to do is log in once a day, and then you can place your trades into your demat account directly from NeoTrader software.",
    },
    {
      q_no: "02",
      question:
        "Do I need to know Algorithmic/Algo Trading to work with NeoTrader?",
      answer:
        "Not at all! Even a complete novice in the markets with access to a computer can use NeoTrader effectively. The design and the output have made any knowledge of algorithms, etc., unnecessary as it delivers completely processed information to the user.",
    },
    {
      q_no: "03",
      question: "Do I need to know Technical analysis to work with NeoTrader?",
      answer:
        "Not necessary. NeoTrader delivers the outputs of the crunching of technical variables using different sets of technical analysis-based strategies designed by us in a ready-to-use format. So, even a layperson with limited knowledge of the markets can also use NeoTrader. That said, it is to be added here that NeoTrader’s value can be considerably enhanced if the user knows or is familiar with technical analysis. There are features that can be tweaked to individual preferences so as to design a trading system of one’s own. For those who are interested, we also provide extensive training in technical analysis. Contact us for details on this.",
    },
    {
      q_no: "04",
      question: "Do I get charts in NeoTrader?",
      answer:
        "Yes, it offers embedded charts from third-party providers. We also have charts from Trading View, one of the best charting platforms in the world. We also provide live data-based charts full of Futures, Options, etc, supported through our broking partners.",
    },
    {
      q_no: "05",
      question: "Are the strategies shown on the charts in NeoTrader?",
      answer:
        "No. Trading View is an independent service provider whose EOD charting facilities are integrated into NeoTrader. It does not currently permit us to feature our strategies on their charts.",
    },
    {
      q_no: "06",
      question: "Why don’t you have your own charts in NeoTrader?",
      answer:
        "This is a development under consideration at the moment. However, there are so many choices available currently for charting that loading the program with a chart module makes it heavier and delays processing some. However, we are certainly looking at some light charting solutions that may be included in future updates of NeoTrader.",
    },
    {
      q_no: "07",
      question: "Can I save the data for later use and study?",
      answer: "No. At the moment, this feature is not available.",
    },
    {
      q_no: "08",
      question: "Will you take requests for customisation of the product?",
      answer:
        "Certainly. Feedback from users is the best way, we believe, to improve the program. The ones that are feasible can certainly be incorporated.",
    },
    {
      q_no: "09",
      question: "Can I use NeoTrader on my mobile or tablet?",
      answer:
        "While NeoTrader is designed to best work with desktops and laptops, it also works on tablets and mobiles. A more definitive version for these devices is currently under testing.",
    },
    {
      q_no: "10",
      question: "Is there a NeoTrader app?",
      answer:
        "Currently we are working on delivering the contents of NeoTrader through a mobile application. It should be ready in the near future.",
    },
    {
      q_no: "11",
      question: "Can I use NeoTrader on different devices at the same time?",
      answer:
        "One subscription allows you to log in from anywhere and on any device only once. Logging in elsewhere will log out the current user. For multiple logins, you will have to purchase additional subscriptions.",
    },
    {
      q_no: "12",
      question: "What if my system crashes? Will I get a reinstallation?",
      answer:
        "No Problem. There is no program to install since this is cloud-based. Hence, it is independent of the working of your individual machine. You can simply log in from anywhere you want.",
    },
    {
      q_no: "13",
      question: "What is the support that I can get for NeoTrader usage?",
      answer:
        "When you join as a member, you get full training on the usage of the program, its many features and how to use them effectively. We have technology support via dedicated Phone lines and a WhatsApp helpdesk standing by during normal working hours every day. We also have market experts standing by to help you through difficulties in understanding the methods and technical analysis issues. Support is available through email, chat as well as phone.",
    },
    {
      q_no: "14",
      question: "Where can I get more information on NeoTrader?",
      answer:
        "You can go to neotrader.in to find out more details about the program, see details on different features, take a small demo tour or check out some of the videos we have on the program. Pricing, support, subscription details, etc., are also on the site. You can also call us at +91-8779800688/8169111411 or email at support@neotrader.in to get an executive to demo the program if you are a corporate client. Our support team at the office is standing by to answer all the queries you may have.",
    },
    // Add more FAQ items as needed
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleViewAll = () => {
    setShowAll(!showAll);
    setVisibleCount(showAll ? initialVisibleCount : faqData.length);
  };

  return (
    <div className="max-container lg:px-[96px] px-[20px] 2xl:mx-auto xxl:px-[156px] pt-[33px]">
      <div className="text-white text-center lg:text-5xl text-[28px] font-semibold font-['Poppins'] lg:leading-[62.40px] leading-9 lg:mb-[40px] mb-[20px]">
        FAQ’s
      </div>
      <div className="grid grid-cols-1 gap-y-8">
        {faqData.slice(0, visibleCount).map((faq, index) => (
          <div key={index} className="">
            <div
              className="flex justify-around items-start cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div
                className={` lg:text-2xl text-base font-semibold font-['Poppins'] lg:leading-[31.20px] lg:tracking-wide tracking-tight ${
                  activeIndex === index ? "text-white" : "text-zinc-400"
                }`}
              >
                {faq.q_no}
              </div>
              <div className="lg:w-[90%] w-[70%]">
                <div
                  className={`lg:text-2xl text-[18px] font-bold font-['Aileron'] lg:leading-[31.20px] leading-relaxed tracking-[4%] ${
                    activeIndex === index ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {faq.question}
                </div>
                <div
                  className={`text-white lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-snug tracking-tight lg:mt-4 ${
                    activeIndex === index ? "text-teal-400" : ""
                  }`}
                >
                  {activeIndex === index && faq.answer}
                </div>
              </div>
              <div
                className={`flex justify-center items-center lg:w-[40.16px] lg:h-[40.06px] w-7 h-7 rounded-full border ${
                  activeIndex === index ? "border-teal-400" : "border-zinc-400"
                }`}
              >
                {activeIndex === index ? (
                  <img src={FaqArrowGreen} alt="" />
                ) : (
                  <img src={FaqArrow} alt="" />
                )}
              </div>
            </div>
            <div className="border-b border-zinc-400 mt-5"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          className="mx-auto lg:w-[146px] lg:h-[58px] w-[122px] h-[47px] lg:px-8 lg:py-4  px-6 py-3 rounded-[50px] border border-white hover:border-teal-400 hover:text-teal-400 text-white text-xl font-semibold font-['Poppins'] leading-relaxed tracking-tight justify-center items-center gap-2.5 inline-flex whitespace-nowrap"
          onClick={handleViewAll}
        >
          {showAll ? "View less" : "View all"}
        </button>
      </div>
    </div>
  );
};

export default Faq;
