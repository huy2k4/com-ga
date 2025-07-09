import React, { useState, useEffect } from 'react';
import "../../assets/css/Layouts/TestimonialsSection.css";

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval); // Clear on unmount
    }, [testimonials.length]);

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>Khách Hàng Nói Gì</h2>
                    <p>Những phản hồi chân thực từ khách hàng yêu mến</p>
                </div>
                <div className="testimonial-carousel">
                    {testimonials.map((item, index) => (
                        <div
                            className={`testimonial ${index === currentIndex ? 'active' : ''}`}
                            key={index}
                        >
                            <div className="testimonial-rating">{item.rating}</div>
                            <div className="testimonial-text">{item.text}</div>
                            <div className="testimonial-author">{item.author}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
