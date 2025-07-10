import React, { useState, useEffect } from "react";
import "../../assets/css/Layouts/AboutSection.css";
import backgroundImage from "../../assets/images/AboutSectionBGR.jpg";

const AboutSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Optimized resize listener with debounce
        let resizeTimer;
        const debouncedResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 150);
        };

        window.addEventListener('resize', debouncedResize);

        // Intersection Observer for lazy loading animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsLoaded(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const aboutElement = document.getElementById('about');
        if (aboutElement) {
            observer.observe(aboutElement);
        }

        return () => {
            window.removeEventListener('resize', debouncedResize);
            if (aboutElement) {
                observer.unobserve(aboutElement);
            }
        };
    }, []);

    // Responsive breakpoints
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    const isDesktop = windowWidth >= 1024;

    return (
        <section className={`about ${isLoaded ? 'loaded' : ''}`} id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <header className="about-header">
                            <h2>
                                Cơm <span id="ngon">Ngon</span> Bắt Đầu Từ <span id="tam" >Tâm</span>
                            </h2>
                        </header>
                        <div className="about-description">
                            <p>
                                Tại Hồng Phát, chúng tôi tin rằng một phần cơm ngon không chỉ đến từ nguyên liệu,
                                mà từ cả sự tận tâm trong từng bước chế biến. Gà phải giòn đúng điệu, cơm phải dẻo thơm,
                                mỡ hành phải đủ béo mà không ngấy – tất cả đều được thực hiện với sự kỹ lưỡng và yêu nghề.
                            </p>
                            <p>
                                Chúng tôi không cố làm khác đi món ăn truyền thống, mà cố làm đúng hơn, ngon hơn mỗi ngày.
                                Hồng Phát là nơi lưu giữ tinh thần ẩm thực đường phố Việt: mộc mạc, đậm đà và đáng nhớ.
                                Mỗi phần cơm là một cam kết – về chất lượng, sự tử tế, và niềm vui khi ăn ngon.
                            </p>
                        </div>
                        {isMobile && (
                            <div className="about-stats">
                                <div className="stat-item">
                                    <strong>10+</strong>
                                    <span>Năm kinh nghiệm</span>
                                </div>
                                <div className="stat-item">
                                    <strong>100%</strong>
                                    <span>Nguyên liệu tươi</span>
                                </div>
                                <div className="stat-item">
                                    <strong>1000+</strong>
                                    <span>Khách hàng hài lòng</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="about-media">
                        <div className="about-image">
                            <picture>
                                <source
                                    media="(max-width: 767px)"
                                    srcSet={`${backgroundImage}?w=400&h=300&fit=crop`}
                                />
                                <source
                                    media="(max-width: 1023px)"
                                    srcSet={`${backgroundImage}?w=600&h=400&fit=crop`}
                                />
                                <img
                                    src={backgroundImage}
                                    alt="Quán Cơm Gà Hồng Phát - Không gian ấm cúng"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <span className="overlay-text">Anh Võ Quốc Huy - Bếp trưởng </span>
                                </div>
                            </div>
                        </div>

                        {(isDesktop || isTablet) && (
                            <div className="about-stats-desktop">
                                <div className="stat-item">
                                    <strong>10+</strong>
                                    <span>Năm kinh nghiệm</span>
                                </div>
                                <div className="stat-item">
                                    <strong>1000+</strong>
                                    <span>Khách hàng hài lòng</span>
                                </div>
                                <div className="stat-item">
                                    <strong>100%</strong>
                                    <span>Nguyên liệu tươi</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="decorative-elements">
                    <div className="decoration decoration-1"></div>
                    <div className="decoration decoration-2"></div>
                    <div className="decoration decoration-3"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;