import * as React from "react"

const PencilIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <g
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.2}
            clipPath="url(#a)"
        >
            <path d="M9.383 2.59c.496-.538.745-.807 1.009-.964a2.07 2.07 0 0 1 2.068-.031c.269.149.525.41 1.037.934.512.523.768.784.914 1.058.352.662.34 1.463-.03 2.113-.154.27-.418.524-.945 1.031L7.167 12.77c-.998.961-1.497 1.442-2.121 1.686-.624.244-1.31.226-2.682.19l-.187-.005c-.418-.011-.626-.017-.748-.154-.121-.138-.105-.35-.071-.776l.018-.231c.093-1.198.14-1.796.373-2.335.234-.538.637-.975 1.444-1.849l6.19-6.706ZM8.667 2.667l4.667 4.666" />
            <path strokeLinecap="round" d="M9.334 14.667h5.333" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default PencilIcon
