import React, { useRef, useState, useEffect } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const TopColleges = () => {
    const colleges = [
        { title: "IIT BOMBAY", img: "./src/assets/iit_bombay.webp" },
        { title: "IIT DELHI", img: "./src/assets/iit_delhi.jpg" },
        { title: "IIT (BHU) VANARASI", img: "./src/assets/iit_bhu.webp" },
        { title: "NIT WARANGAL", img: "./src/assets/nit_warangal.webp" },
        { title: "IISC BANGALORE", img: "./src/assets/iisc.webp" },
        { title: "DTU DELHI", img: "./src/assets/dtu.webp" },
        { title: "BIT MESRA", img: "./src/assets/bit_mesra.webp" },
        { title: "NIT TIRUCHIRAPPALLI", img: "./src/assets/nit_tir.webp" },
        { title: "IIIT ALLAHABAD", img: "./src/assets/iiit_allahabad.webp" },
    ];

    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const updateScrollButtons = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            updateScrollButtons();
            ref.addEventListener("scroll", updateScrollButtons);
            return () => ref.removeEventListener("scroll", updateScrollButtons);
        }
    }, []);

    return (
        <div className="px-2 sm:px-6 flex flex-col items-center justify-center gap-4 mb-10">
            <div className="flex flex-col items-center justify-center gap-2 w-full mt-2 text-center">
                <h2 className="text-2xl sm:text-[30px]">TOP COLLEGES</h2>
                <hr className="bg-red-700 w-16 h-[3px]" />
            </div>

            <div className="relative w-full">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    disabled={isAtStart}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 z-10 bg-transparent transition-opacity ${isAtStart ? "opacity-30 pointer-events-none" : "opacity-100 hover:opacity-80"
                        }`}
                >
                    <MdArrowBackIos className="text-4xl md:text-5xl text-red-500" />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-3 sm:gap-4 mx-8 sm:mx-16 overflow-x-auto space-x-4 p-4 scrollbar-hide"
                >
                    {colleges.map((college, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[300px] md:w-[430px] border rounded-md"
                        >
                            <img
                                src={college.img}
                                className="w-full h-56 object-cover rounded-t-md"
                                alt={college.title}
                            />
                            <div className="p-6">
                                <a href="#" className="text-lg tracking-wider block hover:text-blue-500 transition">{college.title}</a>
                                <hr className="bg-red-700 w-16 h-[2px] my-2" />
                                <ul className="text-sm space-y-1">
                                    <li><a href="#" className="hover:text-red-500 transition">How to reach</a></li>
                                    <li><a href="#" className="hover:text-red-500 transition">Courses</a></li>
                                    <li><a href="#" className="hover:text-red-500 transition">Seats</a></li>
                                    <li><a href="#" className="hover:text-red-500 transition">Cutoff</a></li>
                                    <li><a href="#" className="hover:text-red-500 transition">Fee Structure</a></li>
                                    <li><a href="#" className="hover:text-red-500 transition">Placements</a></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    disabled={isAtEnd}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 z-10 bg-transparent transition-opacity ${isAtEnd ? "opacity-30 pointer-events-none" : "opacity-100 hover:opacity-80"
                        }`}
                >
                    <MdArrowForwardIos className="text-4xl md:text-5xl text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default TopColleges;
