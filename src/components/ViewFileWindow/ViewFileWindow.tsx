import React from 'react'
import PdfViewerWindow from '../PdfViewerWindow/PdfViewerWindow'
import ImageLightbox from '../Image/ImageLightbox'
import Alert from '../Popups/Alert'
import TextViewer from './components/TextViewer'

export interface FileRecord {
  url: string
  name: string
  mimeType: string
  textContent?: string
}

export interface ViewFileWindowProps {
  file: FileRecord | undefined
  onClose: () => void
}

const ViewFileWindow = (props: ViewFileWindowProps) => {
  const { file, onClose } = props

  if (!file) {
    return null
  }

  if (isImage(file)) {
    return getImageViewer(file, onClose)
  }
  if (isTextDocument(file)) {
    return getTextViewer(file, onClose)
  }
  if (isPdf(file)) {
    return getPdfViewer(file, onClose)
  }

  return (
    <Alert
      open={true}
      close={onClose}
      title={'Failed To Load File Preview'}
      message={`Failed to load preview for file ${file.name}`}
    />
  )
}

function getImageViewer(
  file: FileRecord,
  onClose: () => void
): React.ReactElement {
  return <ImageLightbox open={true} src={file.url} onClose={onClose} />
}

function getTextViewer(
  file: FileRecord,
  onClose: () => void
): React.ReactElement {
  return (
    <TextViewer
      onClose={onClose}
      name={file.name}
      textContent={file.textContent}
    />
  )
}

function getPdfViewer(
  file: FileRecord,
  onClose: () => void
): React.ReactElement {
  return (
    <PdfViewerWindow
      title={file.name}
      url={file.url}
      open={true}
      close={onClose}
    />
  )
}

function isImage(file: FileRecord): boolean {
  return file.mimeType.startsWith('image/')
}

function isPdf(file: FileRecord): boolean {
  return file.mimeType === 'application/pdf'
}

function isTextDocument(file: FileRecord): boolean {
  return !!file.textContent
}

export default ViewFileWindow
