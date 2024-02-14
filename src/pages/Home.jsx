import {
    Author,
    AutoScroll,
    Expertise,
    FixedButton,
    Footer,
    Header,
    Information,
    Navbar,
    Partners,
    Performance,
    TestimonialComponent,
    TradingExperience,
    TradeWinRepeat,
    Strategies,
    WhyNeo,
    SmartTrading,
    ScrollComponent,
    Faq,
    Scroll,
    MobileScroller,
  } from "../components";
  import {
    f1img,
    f2img,
    f3img,
    f4img,
    f5img,
    a1,
    a2,
    a3,
    a4,
  } from "../assets/images";
  
  import React, { useState, useEffect } from "react";
  import ContactComponent from "../components/ContactComponent";
  
  function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const images = [f1img, f2img, f3img, f4img, f5img];
    return (
      <div className="background h-auto">
        <Navbar />
        <Header />
        <AutoScroll images={images} title="Featured in" />
        <Author />
        {isMobile ? <MobileScroller /> : <Scroll />}
  
        <TradeWinRepeat />
        <Strategies />
        <WhyNeo />
  
        <Information />
        <Expertise />
        <Performance />
        <SmartTrading />
  
        <TestimonialComponent />
        <Partners />
        <Faq />
  
        <ContactComponent />
        <TradingExperience />
        <Footer />
        {/* To be Merged  */}
  
        {/* Till here  */}
        <FixedButton />
      </div>
    );
  }
  
  export default Home;
  