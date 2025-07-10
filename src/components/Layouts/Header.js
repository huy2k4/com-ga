import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/Layouts/Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  const navRef = useRef(null);

  // Theo dõi thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const anchorLinks = navRef.current?.querySelectorAll('a[href^="#"]') || [];

    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    };

    anchorLinks.forEach((a) => a.addEventListener('click', handleAnchorClick));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchorLinks.forEach((a) =>
        a.removeEventListener('click', handleAnchorClick)
      );
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="navbar" ref={navRef} className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-container">
          <a href="/" className="logo">Hồng Phát</a>

          {/* Desktop Nav */}
          <ul className="nav-links desktop-nav">
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#about">Giới Thiệu</a></li>
            <li><a href="#menu">Thực Đơn</a></li>
            <li><a href="#testimonials">Đánh Giá</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>

          {/* Desktop Order Button */}
          <a href="tel:+8494175410" className="order-btn desktop-order">
            Đặt bàn
          </a>

          {/* Mobile Hamburger Menu */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li><a href="#home">Trang Chủ</a></li>
              <li><a href="#about">Giới Thiệu</a></li>
              <li><a href="#menu">Thực Đơn</a></li>
              <li><a href="#testimonials">Đánh Giá</a></li>
              <li><a href="#contact">Liên Hệ</a></li>
            </ul>

            <div className="mobile-order-section">
              <a href="tel:+84941754109" className="mobile-order-btn">
                📞 Đặt bàn ngay
              </a>
              <p className="mobile-phone">📱 0941 754 109</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
