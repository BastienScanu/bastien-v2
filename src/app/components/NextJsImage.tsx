import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
  RenderFunction,
  RenderSlideProps,
  SlideImage,
  ContainerRect,
} from 'yet-another-react-lightbox'

export default function NextJsImage({
  slide,
  offset,
  rect,
}: {
  slide: SlideImage
  offset: number
  rect: ContainerRect
}): React.ReactNode {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps()

  const { currentIndex } = useLightboxState()

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

  const isNextJsImage =
    isImageSlide(slide) &&
    typeof slide.width === 'number' &&
    typeof slide.height === 'number'

  if (!isNextJsImage) return undefined

  const width = !cover
    ? Math.round(
        Math.min(
          rect.width,
          (rect.height / (slide.height || 1)) * (slide.width || 1)
        )
      )
    : rect.width

  const height = !cover
    ? Math.round(
        Math.min(
          rect.height,
          (rect.width / (slide.width || 1)) * (slide.height || 1)
        )
      )
    : rect.height

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=""
        src={slide as StaticImport}
        loading="eager"
        draggable={false}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  )
}
