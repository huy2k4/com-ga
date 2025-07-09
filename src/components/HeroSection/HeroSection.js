import React, { useState, useEffect } from 'react';
import '../../assets/css/Layouts/HeroSection.css';

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Trigger animations after component mount
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => {
            window.removeEventListener('resize', checkMobile);
            clearTimeout(timer);
        };
    }, []);

    const handleOrderClick = (e) => {
        e.preventDefault();
        const orderSection = document.querySelector('#menu');
        if (orderSection) {
            orderSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section className="hero" id="home" aria-label="Hero Section">
            <div className="hero-background-overlay"></div>
            <div className="hero-particles"></div>
            
            <div className="container">
                <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
                    <h1 className="hero-title">
                        {isMobile ? (
                            <>
                                Cơm Gà<br />
                                <span className="highlight">Hồng Phát</span>
                            </>
                        ) : (
                            <>
                                Cơm Gà <span className="highlight">Hồng Phát</span>
                            </>
                        )}
                    </h1>
                    
                    <p className="hero-subtitle">
                        Giòn Tận Tâm, Đậm Vị Việt
                    </p>
                    
                    <p className="hero-subtitle" id="p2">
                        Trải Nghiệm Ẩm Thực Đường Phố Chính Hiệu
                    </p>
                    
                    <div className="hero-cta-wrapper">
                        <a 
                            href="#menu" 
                            className="cta-button" 
                            id="orderNowBtn"
                            onClick={handleOrderClick}
                            aria-label="Đặt món ngay"
                        >
                            🍗 Đặt Món Ngay
                        </a>
                        
                        {isMobile && (
                            <a 
                                href="tel:+84901234567" 
                                className="cta-button-secondary"
                                aria-label="Gọi điện đặt bàn"
                            >
                                📞 Gọi Ngay
                            </a>
                        )}
                    </div>
                    
                    {/* Mobile quick info */}
                    {isMobile && (
                        <div className="hero-quick-info">
                            <div className="quick-info-item">
                                <span className="info-icon">⏰</span>
                                <span className="info-text">7:00 - 22:00</span>
                            </div>
                            <div className="quick-info-item">
                                <span className="info-icon">🚚</span>
                                <span className="info-text">Giao nhanh 30p</span>
                            </div>
                            <div className="quick-info-item">
                                <span className="info-icon">⭐</span>
                                <span className="info-text">4.8/5 đánh giá</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}