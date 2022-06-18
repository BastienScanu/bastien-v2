import * as React from 'react'
import { useParallax } from 'react-scroll-parallax'

interface ParallaxProps {
  speed: number
  className?: string
  children: JSX.Element
}

const ParallaxElement = ({
  speed,
  className = '',
  children,
}: ParallaxProps) => {
  const { ref }: { ref: React.LegacyRef<HTMLDivElement> } = useParallax({
    speed: speed,
  })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default ParallaxElement
