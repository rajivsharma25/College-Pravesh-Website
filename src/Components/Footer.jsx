import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#242F42] text-gray-300">
      <div className="flex flex-col items-center mx-auto px-6 py-12 pt-16">
        <div className="hidden xs:flex flex-col items-center gap-12 sm:grid sm:grid-cols-3 md:grid-cols-5 sm:items-start sm:gap-20 px-8">

            <div className="text-center sm:text-left">
                <h3 className="text-sm text-white font-semibold mb-4">COLLEGE</h3>
                <ul className="space-y-4 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Explore All IITs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Explore All NITs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Explore All IIITs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Explore All IISERs</a></li>
                </ul>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-sm text-white font-semibold mb-4">STATEWISE COLLEGES</h3>
                <ul className="space-y-4 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Colleges in Delhi NCR</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Colleges in Maharashtra</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Colleges in Karnataka</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Colleges in Uttar Pradesh</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Colleges in Andhra Pradesh</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Colleges in Telangana</a></li>
                </ul>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-sm text-white font-semibold mb-4">EXAM</h3>
                <ul className="space-y-4 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">JEE (Main)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JEE (Advanced)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">BITSAT</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MHT-CET</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UPSEE</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WBJEE</a></li>
                </ul>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-sm text-white font-semibold mb-4">TOOLS</h3>
                <ul className="space-y-4 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">College Finder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JEE (Main) Rank Predictor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JEE (Main) College Predictor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JEE (Advanced) College Predictor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">BITSAT College Predictor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JAC Delhi College Predictor</a></li>
                </ul>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-sm text-white font-semibold mb-4">COMPANY</h3>
                <ul className="space-y-4 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div className="xs:hidden flex flex-col items-center gap-12">
             <div className="text-center sm:text-left">
                <ul className="space-y-4 text-xs">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
            </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <img src="/src/assets/footer-logo.png" className="w-16" alt="Logo" />

          <div className="mt-6 flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram size={20} /></a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            College Pravesh © Copyright 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
