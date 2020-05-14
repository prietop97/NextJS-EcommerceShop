import React from 'react'
import MainNavigation from "./MainNavigation"

import arrow from "../../assets/icons/arrow.svg"

export default function Hero() {
    return (
        <>
        <MainNavigation hidden />
        <div className="hero-background">
            <div className="logo">
                <h1>RECOR<span>D</span></h1>
            </div>
            <div className="arrow-down-container">
                <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 24 24"><path fill="#fff" d="M12 20a3.482 3.482 0 0 1-2.475-1.025L1.021 9.97A3.475 3.475 0 0 1 0 7.5C0 5.57 1.57 4 3.5 4c.936 0 1.814.364 2.476 1.025L12 11.405l6.015-6.37A3.484 3.484 0 0 1 20.5 4C22.43 4 24 5.57 24 7.5c0 .935-.364 1.814-1.025 2.475l-8.49 8.99A3.49 3.49 0 0 1 12 20z"/><path fill="#fff" d="M3.5 5A2.503 2.503 0 0 0 1 7.5c0 .668.26 1.295.732 1.768l.01.01 8.5 9c.34.338.776.574 1.253.671a2.489 2.489 0 0 0 2.272-.682l8.49-8.99C22.74 8.796 23 8.169 23 7.5a2.503 2.503 0 0 0-4.269-1.768l-6.368 6.744c-.187.2-.539.2-.726 0L5.259 5.722A2.48 2.48 0 0 0 3.5 5z"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0.8815258" y1="4.8342395" x2="21.1907501" y2="14.3045864"><stop offset="0" stop-color="#FFF" stop-opacity="0.2"/><stop offset="1" stop-color="#FFF" stop-opacity="0"/></linearGradient><path fill="url(#SVGID_1_)" d="M12 20a3.482 3.482 0 0 1-2.475-1.025L1.021 9.97A3.475 3.475 0 0 1 0 7.5C0 5.57 1.57 4 3.5 4c.936 0 1.814.364 2.476 1.025L12 11.405l6.015-6.37A3.484 3.484 0 0 1 20.5 4C22.43 4 24 5.57 24 7.5c0 .935-.364 1.814-1.025 2.475l-8.49 8.99A3.49 3.49 0 0 1 12 20z"/></svg>
            </div>
        </div>
        </>
    )
}
