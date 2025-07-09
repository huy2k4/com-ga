import React from "react";
import "../../assets/css/Layouts/AboutSection.css";
import backgroundImage from "../../assets/images/AboutSectionBGR.jpg";

const AboutSection = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Cơm Ngon Bắt Đầu Từ Tâm</h2>
                        <p>Tại Hồng Phát, chúng tôi tin rằng một phần cơm ngon không chỉ đến từ nguyên liệu, mà từ cả sự tận tâm trong từng bước chế biến. Gà phải giòn đúng điệu, cơm phải dẻo thơm, mỡ hành phải đủ béo mà không ngấy – tất cả đều được thực hiện với sự kỹ lưỡng và yêu nghề.</p>
                        <p>Chúng tôi không cố làm khác đi món ăn truyền thống, mà cố làm đúng hơn, ngon hơn mỗi ngày. Hồng Phát là nơi lưu giữ tinh thần ẩm thực đường phố Việt: mộc mạc, đậm đà và đáng nhớ. Mỗi phần cơm là một cam kết – về chất lượng, sự tử tế, và niềm vui khi ăn ngon.</p>
                        
                    </div>
                    <div className="about-image">
                        <img src={backgroundImage} alt="Quán Cơm Gà Huy Big Cock" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
