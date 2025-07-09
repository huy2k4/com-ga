import React from 'react';
import "../../assets/css/Layouts/ContactSection.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Liên Hệ & Đặt Hàng</h2>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <strong>Địa chỉ:</strong><br />
                123 Đường Nguyễn Văn Cừ, Quận 1, TP.HCM
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <div>
                <strong>Hotline:</strong><br />
                <a href="tel:+84901234567" style={{ color: '#f39c12' }}>
                  0901 234 567
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaClock />
              <div>
                <strong>Giờ mở cửa:</strong><br />
                Thứ 2 - Chủ nhật: 10:00 - 22:00
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <strong>Email:</strong><br />
                info@comgahuybigcock.com
              </div>
            </div>

            <div className="delivery-links">
              <a href="#" className="delivery-btn">GrabFood</a>
              <a href="#" className="delivery-btn">ShopeeFood</a>
              <a href="#" className="delivery-btn">Baemin</a>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4032395044606!2d106.6823172759055!3d10.778743859055804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edb85971b45%3A0x83c98e3b3b4efc5e!2zMTIzIE5ndXnhu4VuIFbEg24gQ8awLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjDoCBDaMOidSwgSOG7kyBDaMOtbmggTWluaCwgVFAuIEjDoCBDaMOtbmggTWluaA!5e0!3m2!1sen!2s!4v1624172237416!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
