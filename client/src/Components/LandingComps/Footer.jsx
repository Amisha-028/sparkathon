import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiWalmart } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center bg-[#F8F9FA] pt-[20px] pb-[20px] gap-3" id="footer">
            <SiWalmart className="text-[150px]" height={10}/>
            <div className="nav-links p-0">
                <ul className="flex justify-center items-center">
                    <li className="p-2"><a href="#Hero">Home</a></li>
                    <li className="p-2"><a href="#About">About</a></li>
                    <li className="p-2"><a href="#Service">Sevices</a></li>
                    <li className="p-2"><a href="#ContactUs">ContactUs</a></li>
                </ul>
            </div>
            <div className="socials flex justify-center items-center gap-4 text-[30px] pt-5 pb-5">
                <FaLinkedin />
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
            </div>
            <hr className="bg-[#76AEFF] w-[90vw] h-[2px]"/>
            <p className="p-5">Copyright &#169; Walmart Store - Connect</p>
        </footer>
    )
};

export default Footer;