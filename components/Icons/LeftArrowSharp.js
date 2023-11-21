import * as React from "react"

const LeftArrowSharp = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12h15M9 7l-4.293 4.293c-.333.333-.5.5-.5.707 0 .207.167.374.5.707L9 17"
        />
    </svg>
)
export default LeftArrowSharp
