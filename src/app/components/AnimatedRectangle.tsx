import * as React from 'react'
import Rectangle from '../models/Rectangle'

const AnimatedRectangle = ({ data }: { data: Rectangle }) => {
  let { start, stop, width, height, x, y, color } = data
  const id = `rectangle_${Math.round(x)}_${Math.round(y)}`
  return (
    <React.Fragment>
      <style>
        {`
      #${id} {
        animation: ${id}_anim 4000ms linear 1 normal forwards;
      }
      @keyframes ${id}_anim {
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
        id={id}
        width="0"
        height={height}
        rx={height / 2}
        ry={height / 2}
        transform={`translate(${x} ${y})`}
        fill={color}
      />
    </React.Fragment>
  )
}

export default AnimatedRectangle
