import React, { useState, useEffect, useRef } from 'react';
import "../../assets/css/Layouts/MenuSection.css";
import Menu1 from "../../assets/images/Menu1.png";

export default function MenuSection() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [isLoaded, setIsLoaded] = useState(false);
    const observerRef = useRef(null);

    // Menu data for better management
    const menuItems = [
        {
            id: 1,
            image: Menu1,
            title: "Gà Đùi Xối Mỡ",
            description: "Đùi gà nướng than hoa, xới mỡ thơm lừng, ăn kèm cơm dẻo và nước mắm pha chua ngọt đặc biệt.",
            price: "45.000₫",
            popular: true
        },
        {
            id: 2,
            image: Menu1,
            title: "Gà Cánh Giòn Rụm",
            description: "Cánh gà tẩm ướp gia vị 24h, chiên giòn vàng ươm, thịt mềm ngọt, da giòn tan.",
            price: "35.000₫",
            popular: false
        },
        {
            id: 3,
            image: Menu1,
            title: "Combo Đặc Biệt",
            description: "Gà đùi + gà cánh + cơm + canh + nước ngọt. Phù hợp cho 2-3 người, tiết kiệm và ngon miệng.",
            price: "120.000₫",
            popular: true
        },
        {
            id: 4,
            image: Menu1,
            title: "Cơm Gà Trộn Bộ",
            description: "Cơm trắng dẻo, gà tươi nhiều bộ phận, rau sống, dưa chua và nước mắm pha đặc biệt.",
            price: "38.000₫",
            popular: false
        },
        {
            id: 5,
            image: Menu1,
            title: "Gà Nướng Muối Ớt",
            description: "Gà ta nướng lá chuối, tẩm muối ớt xanh đặc biệt, thơm nức mũi, cay nồng quyến rũ.",
            price: "55.000₫",
            popular: true
        },
        {
            id: 6,
            image: Menu1,
            title: "Chân Gà Niêu Tiêu",
            description: "Chân gà hầm mềm trong niêu đất, nước dùng đậm đà, tiêu thơm, ăn kèm bánh mì nướng.",
            price: "42.000₫",
            popular: false
        }
    ];

    useEffect(() => {
        // Handle window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        let resizeTimer;
        const debouncedResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 150);
        };

        window.addEventListener('resize', debouncedResize);

        // Intersection Observer for animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = parseInt(entry.target.dataset.id);
                        setVisibleItems(prev => new Set([...prev, id]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '-50px' }
        );

        // Section loaded observer
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsLoaded(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const menuSection = document.getElementById('menu');
        if (menuSection) {
            sectionObserver.observe(menuSection);
        }

        return () => {
            window.removeEventListener('resize', debouncedResize);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            if (menuSection) {
                sectionObserver.unobserve(menuSection);
            }
        };
    }, []);

    useEffect(() => {
        // Observe menu items
        const menuItemElements = document.querySelectorAll('.menu-item');
        menuItemElements.forEach(item => {
            if (observerRef.current) {
                observerRef.current.observe(item);
            }
        });

        return () => {
            if (observerRef.current) {
                menuItemElements.forEach(item => {
                    observerRef.current.unobserve(item);
                });
            }
        };
    }, []);

    // Responsive breakpoints
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    const isDesktop = windowWidth >= 1024;

    // Get items to display based on screen size
    const getItemsToShow = () => {
        if (isMobile) return menuItems.slice(0, 4);
        if (isTablet) return menuItems.slice(0, 6);
        return menuItems;
    };

    return (
        <section className={`menu ${isLoaded ? 'loaded' : ''}`} id="menu">
            <div className="container">
                <header className="section-header">
                    <h2>Thực Đơn Nổi Bật</h2>
                    <p>Những món ăn được yêu thích nhất</p>
                    {isMobile && (
                        <div className="menu-stats">
                            <span className="stat-item">6 món đặc biệt</span>
                            <span className="stat-divider">•</span>
                            <span className="stat-item">Giá từ 35k</span>
                        </div>
                    )}
                </header>

                <div className="menu-grid">
                    {getItemsToShow().map((item, index) => (
                        <article 
                            key={item.id}
                            className={`menu-item ${visibleItems.has(item.id) ? 'visible' : ''} ${item.popular ? 'popular' : ''}`}
                            data-id={item.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item.popular && (
                                <div className="popular-badge">
                                    <span>Phổ biến</span>
                                </div>
                            )}
                            
                            <div className="menu-item-image">
                                <picture>
                                    <source 
                                        media="(max-width: 767px)" 
                                        srcSet={`${item.image}?w=300&h=200&fit=crop`}
                                    />
                                    <source 
                                        media="(max-width: 1023px)" 
                                        srcSet={`${item.image}?w=400&h=250&fit=crop`}
                                    />
                                    <img 
                                        src={item.image} 
                                        alt={`${item.title} - Quán Cơm Gà Hồng Phát`}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
                                <div className="image-overlay">
                                    <button className="quick-view" aria-label={`Xem chi tiết ${item.title}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="menu-item-content">
                                <header className="menu-item-header">
                                    <h3>{item.title}</h3>
                                    <div className="price">{item.price}</div>
                                </header>
                                
                                <p className="menu-item-description">{item.description}</p>
                                
                                <footer className="menu-item-footer">
                                    <div className="rating">
                                        <span className="stars">★★★★★</span>
                                        <span className="rating-text">(4.8)</span>
                                    </div>
                                    
                                    {!isMobile && (
                                        <button className="order-btn" aria-label={`Đặt món ${item.title}`}>
                                            <span>Đặt món</span>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    )}
                                </footer>
                            </div>
                        </article>
                    ))}
                </div>

                {(isMobile || isTablet) && menuItems.length > getItemsToShow().length && (
                    <div className="view-more-container">
                        <button className="view-more-btn">
                            <span>Xem thêm món</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                )}

                {isDesktop && (
                    <div className="menu-navigation">
                        <div className="nav-dots">
                            {Array.from({ length: Math.ceil(menuItems.length / 3) }).map((_, index) => (
                                <button 
                                    key={index}
                                    className={`nav-dot ${index === 0 ? 'active' : ''}`}
                                    aria-label={`Xem nhóm món ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Background decorative elements */}
            <div className="menu-decorations">
                <div className="decoration-circle decoration-1"></div>
                <div className="decoration-circle decoration-2"></div>
                <div className="decoration-circle decoration-3"></div>
            </div>
        </section>
    );
}