import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/Layouts/Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Gắn sự kiện scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Gắn sự kiện click cho các anchor link trong nav
    const anchorLinks = navRef.current?.querySelectorAll('a[href^="#"]') || [];

    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    };

    anchorLinks.forEach((a) => a.addEventListener('click', handleAnchorClick));

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchorLinks.forEach((a) => a.removeEventListener('click', handleAnchorClick));
    };
  }, []);

  return (
    <nav
      id="navbar"
      ref={navRef}
      className={scrolled ? 'scrolled' : ''}
    >
      <div className="container">
        <div className="nav-container">
          <a href="/" className="logo">Hồng Phát</a>

          <ul className="nav-links">
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#about">Giới Thiệu</a></li>
            <li><a href="#menu">Thực Đơn</a></li>
            <li><a href="#testimonials">Đánh Giá</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>

          <a href="tel:+84901234567" className="order-btn">Đặt bàn</a>
        </div>
      </div>
    </nav>
  );
}
