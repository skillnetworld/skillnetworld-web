import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="bg-slate-100 border-b border-slate-200 text-slate-600 text-xs py-2 hidden md:block">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                        <FaPhoneAlt size={10} /> <span>+91 98765 43210</span>
                    </a>
                    <a href="mailto:hello@skillnetworld.in" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                        <FaEnvelope size={10} /> <span>hello@skillnetworld.in</span>
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <span className="opacity-50">Follow Us:</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
                        <a href="#" className="hover:text-sky-400 transition-colors"><FaTwitter /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-600 transition-colors"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
