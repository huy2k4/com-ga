import React from 'react'
import "../../assets/css/Layouts/MenuSection.css"
import Menu1 from "../../assets/images/Menu1.png"

export default function MenuSection() {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="section-header">
                    <h2>Thực Đơn Nổi Bật</h2>
                    <p>Những món ăn được yêu thích nhất</p>
                </div>
                <div className="menu-grid">
                    <div className="menu-item">
                        <img src={Menu1} alt="" />
                        <div className="menu-item-content">
                            <h3>Gà Đùi Xối Mỡ</h3>
                            <p>Đùi gà nướng than hoa, xới mỡ thơm lừng, ăn kèm cơm dẻo và nước mắm pha chua ngọt đặc biệt.</p>
                            <div className="price">45.000₫</div>

                        </div>
                    </div>
                    <div className="menu-item">
                        <img src={Menu1} alt="" />
                        <div className="menu-item-content">
                            <h3>Gà Cánh Giòn Rụm</h3>
                            <p>Cánh gà tẩm ướp gia vị 24h, chiên giòn vàng ươm, thịt mềm ngọt, da giòn tan.</p>
                            <div className="price">35.000₫</div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src={Menu1} alt="" />
                        <div className="menu-item-content">
                            <h3>Combo Đặc Biệt</h3>
                            <p>Gà đùi + gà cánh + cơm + canh + nước ngọt. Phù hợp cho 2-3 người, tiết kiệm và ngon miệng.</p>
                            <div className="price">120.000₫</div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src={Menu1} alt="" />
                        <div className="menu-item-content">
                            <h3>Cơm Gà Trộn Bộ</h3>
                            <p>Cơm trắng dẻo, gà tươi nhiều bộ phận, rau sống, dưa chua và nước mắm pha đặc biệt.</p>
                            <div className="price">38.000₫</div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src={Menu1} alt="" />
                        <div className="menu-item-content">
                            <h3>Gà Nướng Muối Ớt</h3>
                            <p>Gà ta nướng lá chuối, tẩm muối ớt xanh đặc biệt, thơm nức mũi, cay nồng quyến rũ.</p>
                            <div className="price">55.000₫</div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src={Menu1} alt="" />
                        <div className="menu-item-content">
                            <h3>Chân Gà Niêu Tiêu</h3>
                            <p>Chân gà hầm mềm trong niêu đất, nước dùng đậm đà, tiêu thơm, ăn kèm bánh mì nướng.</p>
                            <div className="price">42.000₫</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
