import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import '../assets/css/ScrollToTop.css';

// if someone want to see how to do it
// https://www.youtube.com/watch?v=oszUqCqTGHo
// https://github.com/iAthman83/use-react-to-scroll-to-sections

const ScrollToTop = () => {
        const [showScrollTopButton, setShowScrollTopButton] = useState(false);

        useEffect(() => {
                window.addEventListener("scroll", () => {
                        // scrollY = the number of pixels that the document is currently scrolled vertically
                        if (window.scrollY > 100) {
                                setShowScrollTopButton(true);
                        } else {
                                setShowScrollTopButton(false);
                        }
                });
        }, []);

        const scrollTop = () => {
                // scrollTo = scrolls the document to right location
                window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                });
        };

        return (
                <div>
                        {showScrollTopButton && (
                                <FaAngleDoubleUp
                                        className="top-btn-position top-btn-style"
                                        onClick={scrollTop}
                                />
                        )}
                </div>
        );
};

export default ScrollToTop;