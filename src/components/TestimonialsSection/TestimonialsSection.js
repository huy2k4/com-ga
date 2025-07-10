// TestimonialsSection.js
import React, { useState, useEffect } from 'react';
import "../../assets/css/Layouts/TestimonialsSection.css";

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const testimonials = [
        {
            rating: '★★★★★',
            text: '"Gà xối mỡ ở đây ngon nhất Sài Gòn! Giòn rụm, thơm phức, ăn hoài không chán. Nhân viên phục vụ nhiệt tình, giao hàng nhanh chóng."',
            author: '- Anh Minh, Quận 1'
        },
        {
            rating: '★★★★★',
            text: '"Từ khi biết quán này, tôi order liên tục. Combo đặc biệt rất đáng tiền, đủ no cho cả gia đình. Gà tươi ngon, nước mắm pha chua ngọt vừa miệng."',
            author: '- Chị Lan, Quận 7'
        },
        {
            rating: '★★★★★',
            text: '"Quán cơm gà enak nhất khu vực! Giá cả phải chăng, chất lượng tuyệt vời. Đặc biệt là gà cánh giòn rụm, ăn một lần là nhớ mãi."',
            author: '- Anh Tùng, Bình Thạnh'
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setCurrentIndex(prev => 
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex(prev => 
            (prev + 1) % testimonials.length
        );
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    // Xử lý touch events cho mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left - next
            goToNext();
        }

        if (touchStart - touchEnd < -50) {
            // Swipe right - prev
            goToPrev();
        }
    };

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="tes-section-header">
                    <h2>Khách Hàng Nói Gì</h2>
                    <p>Những phản hồi chân thực từ khách hàng yêu mến</p>
                </div>
                <div 
                    className="testimonial-carousel"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Thêm navigation arrows */}
                    <button className="carousel-arrow prev" onClick={goToPrev} aria-label="Previous testimonial">
                        &lt;
                    </button>
                    
                    {testimonials.map((item, index) => (
                        <div
                            className={`testimonial ${index === currentIndex ? 'active' : ''}`}
                            key={index}
                            aria-hidden={index !== currentIndex}
                        >
                            <div className="testimonial-rating">{item.rating}</div>
                            <div className="testimonial-text">{item.text}</div>
                            <div className="testimonial-author">{item.author}</div>
                        </div>
                    ))}
                    
                    <button className="carousel-arrow next" onClick={goToNext} aria-label="Next testimonial">
                        &gt;
                    </button>
                </div>
                
                {/* Thêm dot indicators */}
                <div className="carousel-controls">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}