import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import './ScrollToTop.css';

// if someone want to see how to do it
// https://www.youtube.com/watch?v=oszUqCqTGHo
// https://github.com/iAthman83/use-react-to-scroll-to-sections

const ScrollToTop = () => {
        const [showScrollTopButton, setShowScrollTopButton] = useState(false);

        useEffect(() => {
                window.addEventListener("scroll", () => {
                        if (window.scrollY > 100) {
                                setShowScrollTopButton(true);
                        } else {
                                setShowScrollTopButton(false);
                        }
                });
        }, []);

        const scrollTop = () => {
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