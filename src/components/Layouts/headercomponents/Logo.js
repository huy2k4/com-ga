import React from 'react'
import '../../../assets/css/Layouts/Logo.css'
import AppLogo from '../../../assets/images/HBClogo.png'
export default function Logo() {
    return (
        <div className="app-title">
                <img src={AppLogo} alt="Logo" className="logo" />
        </div>
    )
}
