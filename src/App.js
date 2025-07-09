// src/App.js
import "./assets/css/App.css"
import React from "react";
import Header from "./components/Layouts/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import MenuSection from "./components/MenuSection/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import OrderModal from "./components/Modal/OrderModal";

function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <MenuSection />
            <TestimonialsSection />
            <ContactSection />
            <OrderModal />
        </>
    );
}

export default App;
