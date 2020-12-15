import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

export interface ImageLightboxProps {
  src: string
  open: boolean
  onClose: () => void
}

const ImageLightbox = (props: ImageLightboxProps) => {
  if (!props.open) return null

  return <Lightbox mainSrc={props.src} onCloseRequest={props.onClose} />
}

export default ImageLightbox
