interface SvgSpriteProps {
  sprite: string
  name: string
  size?: {
    width: number
    height: number
  }
  className?: string
}

const SvgSprite = ({
  sprite,
  name,
  size = { width: 100, height: 50 },
  className = '',
}: SvgSpriteProps) => {
  return (
    <svg
      className={className}
      style={{ width: size?.width, height: size?.height }}
    >
      <use href={`/images/${sprite}.svg#${name}`} />
    </svg>
  )
}

export default SvgSprite
