import React from 'react'
import "../../assets/css/Modal/OrderModal.css"
export default function OrderModal() {
    return (
        <div id="orderModal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <h3>🔥 Đặt Món Ngay!</h3>
                <p>Chọn cách thức đặt hàng phù hợp với bạn:</p>
                <div className="modal-buttons">
                    <a href="tel:+84901234567" className="modal-btn primary">📞 Gọi Điện</a>
                    <a href="#menu" className="modal-btn secondary">📋 Xem Menu</a>
                </div>
            </div>
        </div>
    )
}
