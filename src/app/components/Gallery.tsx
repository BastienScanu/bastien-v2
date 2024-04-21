'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import NextJsImage from '../components/NextJsImage'

import dynergie from '../../../public/images/design/dynergie.png'
import kata from '../../../public/images/design/kata.png'
import lamp from '../../../public/images/design/lampe-ballon.png'
import sweat from '../../../public/images/design/sweat.png'
import { useTranslation } from 'react-i18next'

const Gallery = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('design')

  return (
    <div>
      <p className="arrowLink">
        <a onClick={() => setOpen(true)}>
          {t('examples')} <span className="arrow">➜</span>
        </a>
      </p>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[dynergie, kata, lamp, sweat]}
        render={{ slide: NextJsImage }}
      />
    </div>
  )
}

export default Gallery
