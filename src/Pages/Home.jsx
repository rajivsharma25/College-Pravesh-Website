import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Features from "../Components/Features";
import Updates from "../Components/Updates";
import Footer from "../Components/Footer";
import TopColleges from "../Components/TopColleges";
import FacebookFollow from "../Components/FacebookFollow";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="px-4 sm:px-6 bg-custom-pattern bg-cover bg-center text-white">
        <Navbar />
        <Header />
      </div>
      <FacebookFollow />
      <Features />
      <Updates />
      <TopColleges/>
      <Footer />

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-lg bg-[#CE5F48] text-white shadow-md hover:bg-[#b84f3c] transition-colors"
        >
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;
