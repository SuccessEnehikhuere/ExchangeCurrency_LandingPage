import React from 'react'

const ExchangeSvg = () => {
  return (
    <svg width="32" height="32" fill="none">
      <mask
        id="a"
        height="30"
        maskUnits="userSpaceOnUse"
        width="30"
        x="1"
        y="1"
      >
        <rect
          fill="#c4c4c4"
          height="28"
          rx="3"
          stroke="#f5a250"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          width="28"
          x="2"
          y="2"
        ></rect>
      </mask>
      <g mask="url(#a)" stroke="#0c6cf2" strokeWidth="2">
        <g strokeLinecap="round">
          <rect
            fill="#fff"
            height="28"
            rx="3"
            strokeLinejoin="round"
            width="28"
            x="2"
            y="2"
          ></rect>
          <path
            d="m27 7 3-1v24h-28v-5l3-7 4 1 7-8 7-1z"
            fill="#0c6cf2"
            fillOpacity=".36"
            strokeLinejoin="round"
          ></path>
          <path d="m16 16v14"></path>
          <path d="m9 22v8"></path>
          <path d="m16 2v4"></path>
          <path d="m23 14v16"></path>
        </g>
        <circle cx="16" cy="11" fill="#fff" r="2"></circle>
      </g>
    </svg>
  )
}

export default ExchangeSvg