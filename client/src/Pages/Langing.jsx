import React from "react";
import Knowsec from "../Components/LandingComps/Knowsec";
import Contact from "../Components/LandingComps/Contact";
import Navbar from "../Components/LandingComps/Navbar";
import Hero from "../Components/LandingComps/Hero";
import Footer from "../Components/LandingComps/Footer";

const Landing = () => {
  return (
    <div className="" >
      <Navbar/>
      <Hero />
      <Knowsec />
      <div className="flex justify-center gap-4 mt-[50px] mx-auto p-8" >
        <Contact />
        <div className=" rounded-2xl overflow-hidden " >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14493.47901495175!2d92.78794984999999!3d24.7485085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723584696682!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
