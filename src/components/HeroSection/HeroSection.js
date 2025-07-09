import React from 'react'
import '../../assets/css/Layouts/HeroSection.css'


export default function HeroSection() {

    return (
        <section className="hero" id="home" aria-label="Hero Section">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Cơm Gà <span className="highlight">Hồng Phát</span>
                    </h1>
                    <p className="hero-subtitle">
                        Giòn Tận Tâm, Đậm Vị Việt
                    </p>
                    <p className="hero-subtitle" id='p2'>
                        Trải Nghiệm Ẩm Thực Đường Phố Chính Hiệu
                    </p>
                    <a href="#order" className="cta-button" id="orderNowBtn">
                        Đặt Món Ngay
                    </a>
                </div>
            </div>
        </section>
    )
}
