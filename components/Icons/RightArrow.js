import React from "react";

function RightArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                stroke="url(#paint0_radial_761_472)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11.5 15l4.293-4.293c.333-.333.5-.5.5-.707 0-.207-.167-.374-.5-.707L11.5 5"
            ></path>
            <path
                stroke="url(#paint1_radial_761_472)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M3 14l3.434-3.434c.267-.267.4-.4.4-.566 0-.166-.133-.299-.4-.566L3 6"
            ></path>
            <defs>
                <radialGradient
                    id="paint0_radial_761_472"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(4.71635 0 0 3.77484 15.207 10.012)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#523FD7"></stop>
                    <stop offset="1" stopColor="#FF7DFF"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1_radial_761_472"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(3.77308 0 0 3.01987 5.965 10.01)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#523FD7"></stop>
                    <stop offset="1" stopColor="#FF7DFF"></stop>
                </radialGradient>
            </defs>
        </svg>
    );
}

export default RightArrowIcon;
