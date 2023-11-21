import * as React from "react"
const ChevronDown = (props) => (
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
            d="m6 9 5.293 5.293c.333.333.5.5.707.5.207 0 .374-.167.707-.5L18 9"
        />
    </svg>
)
export default ChevronDown
