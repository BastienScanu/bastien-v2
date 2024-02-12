import * as React from 'react'

const AnimatedRectangle = ({
  start,
  stop,
  width,
  x,
  y,
  color,
}: {
  start: number
  stop: number
  width: number
  x: number
  y: number
  color: string
}) => {
  const coeff = 0.7
  width = width * coeff
  return (
    <React.Fragment>
      <style>
        {`
      #rectangle_${x}_${y} {
        animation: rectangle_${x}_${y}_anim 4000ms linear 1 normal forwards;
      }
      @keyframes rectangle_${x}_${y}_anim {
        0% {
            width: 0px;
          }
          ${start}% {
            width: 0px;
          }
          ${stop}% {
            width: ${width}px;
          }
          100% {
            width: ${width}px;
          }
      }`}
      </style>
      <rect
        id={`rectangle_${x}_${y}`}
        width="0"
        height={84 * coeff}
        rx={42 * coeff}
        ry={42 * coeff}
        transform={`translate(${x * coeff} ${y * coeff})`}
        fill={color}
      />
    </React.Fragment>
  )
}

export default AnimatedRectangle
