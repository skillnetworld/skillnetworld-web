import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="bg-slate-100 border-b border-slate-200 text-slate-600 text-xs py-2 hidden md:block">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <a href="tel:+919793336896" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                        <FaPhoneAlt size={10} /> <span>+91 97933 36896</span>
                    </a>
                    <a href="mailto:skillnetworld@gmail.com" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                        <FaEnvelope size={10} /> <span>skillnetworld@gmail.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <span className="opacity-50">Follow Us:</span>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/share/1CRURqqqZ6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/skillnetworld?igsh=c3d4b3JmYWk2aGZo&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/skillnetworld-firoj-khan-6371a23a5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
