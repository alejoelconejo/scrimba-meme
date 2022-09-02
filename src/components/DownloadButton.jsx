import { useCallback } from 'react'

import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'

const DownloadButton = ({ meme }) => {
  const handleCaptureClick = useCallback(async () => {
    const canvas = await html2canvas(document.querySelector('#meme'), {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
    })
    const dataURL = canvas.toDataURL('image/png')
    downloadjs(dataURL, `${meme.id}.png`, 'image/png')
    // console.log(meme.id)
  }, [meme])

  return (
    <button
      className='rounded w-fit self-center p-2 text-sm bg-lime-500 font-semibold'
      onClick={handleCaptureClick}
    >
      Download
    </button>
  )
}

export default DownloadButton
