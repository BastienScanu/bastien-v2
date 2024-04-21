import AnimatedRectangle from './AnimatedRectangle'
import Rectangle from '../models/Rectangle'
import logoData from '../../../public/data/logoData'

const AnimatedLogo = ({ size }: { size: number }) => {
  const originalLogoWidth = 159
  const sizeFactor = size / originalLogoWidth
  const rectangleHeight = 10 * sizeFactor
  const spaceBetweenRectangles = 2.5 * sizeFactor
  const spaceBetweenLines = 2 * sizeFactor

  const generateAnimatedRectangle = (
    previousRectangle: Rectangle | undefined,
    rectangleData: {
      width: number
      color: string
    },
    pixelSpeed: number,
    isNewline: boolean
  ): Rectangle => {
    if (!previousRectangle) {
      return {
        start: 0,
        stop: rectangleData.width * pixelSpeed,
        width: rectangleData.width * sizeFactor,
        height: rectangleHeight,
        x: 0,
        y: 0,
        color: rectangleData.color,
      }
    }

    const start = previousRectangle.stop
    const stop = start + rectangleData.width * pixelSpeed
    const width = rectangleData.width * sizeFactor
    const height = rectangleHeight
    const x = isNewline
      ? 0
      : previousRectangle.x + previousRectangle.width + spaceBetweenRectangles
    const y = isNewline
      ? previousRectangle.y + rectangleHeight + spaceBetweenLines
      : previousRectangle.y
    const color = rectangleData.color
    return { start, stop, width, height, x, y, color }
  }

  const generateAnimationData = (
    logoData: { width: number; color: string }[][]
  ): Rectangle[] => {
    const animatedRectangles: Rectangle[] = []
    let previousRectangle: Rectangle | undefined
    const fullLength = logoData.reduce(
      (prevLine, currLine) =>
        prevLine +
        currLine.reduce((prevRect, currRect) => prevRect + currRect.width, 0),
      0
    )
    // We need to reach the 'fullLength px' at 100%, so each pixel represents 100/fullLength
    const pixelSpeed = 100 / fullLength

    for (let line of logoData) {
      let isNewLine = true
      for (const rectangleData of line) {
        const animatedRectangle = generateAnimatedRectangle(
          previousRectangle,
          rectangleData,
          pixelSpeed,
          isNewLine
        )
        animatedRectangles.push(animatedRectangle)
        previousRectangle = animatedRectangle
        isNewLine = false
      }
    }

    return animatedRectangles
  }

  const animationData = generateAnimationData(logoData)

  return (
    <svg
      height={size * 1.22}
      width={size}
      id="animatedLogo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      {animationData.map((data: Rectangle) => {
        return <AnimatedRectangle data={data} key={data.start} />
      })}
    </svg>
  )
}

export default AnimatedLogo
