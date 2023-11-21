import * as React from "react"
const ChevronUp = (props) => (
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
            d="m18 15-5.293-5.293c-.333-.333-.5-.5-.707-.5-.207 0-.374.167-.707.5L6 15"
        />
    </svg>
)
export default ChevronUp
