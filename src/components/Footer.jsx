import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/ourlogo.png" alt="" />
            </Link>
            <p className="my-8 text-gray/75">
            Ku soo dhawaaw Shaka E-mall, Alaabta dalka iyo mida dibada ku hel si fudud.
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">NOOCYADA ALABTA</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Dharka iyo Kabaha
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Maacuunta
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Alaabta Gurigga
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Alaabta Caruurta
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Jiifka
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-black">
            <h4 className="font-semibold mb-3">MACLUUMAAD DHEERI AH</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Track Your Order
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">NALA SOO XIRIIR</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Mobile: 0617459600
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Address: Mogadishu - Somalia
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Email: info@sharkae-maill.so
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
      <p className="text-white text-center items-center py-3">© {currentYear} Sharka E-Mall - Xuquuqdu Wey Dhowrantahay..</p>
      </div>
    </footer>
  );
};

export default Footer;
