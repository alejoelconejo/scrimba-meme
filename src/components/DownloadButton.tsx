import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'
import { dataURLtoFile } from '../utils/dataURLtoFile'
import { shareFile } from '../utils/shareFile'
import { MemeImg } from '../types'

interface Props {
  meme: MemeImg
  memeRef: React.MutableRefObject<HTMLElement | null>
}

const DownloadButton = ({ meme, memeRef }: Props) => {
  const getCanvas = async () => {
    const canvas = await html2canvas(memeRef.current!, {
      logging: true,
      allowTaint: false,
      useCORS: true,
    })
    const imageURL = await canvas.toDataURL('image/png')
    return imageURL
  }

  const handleClickShare = async () => {
    const imageURL = await getCanvas()
    const imageFile = await dataURLtoFile(imageURL, `${meme.id}.png`)
    shareFile(imageFile, `${meme.name}`, '')
  }

  const handleClickDownload = async () => {
    const imageURL = await getCanvas()
    downloadjs(imageURL, `${meme.id}.png`, 'image/png')
  }

  return (
    <div className='flex justify-center gap-4'>
      <button
        className='rounded w-fit self-center p-2 text-sm bg-lime-600 hover:bg-lime-500 font-semibold'
        onClick={handleClickShare}
      >
        Share
      </button>
      <button
        className='rounded w-fit self-center p-2 text-sm bg-lime-600 hover:bg-lime-500 font-semibold'
        onClick={handleClickDownload}
      >
        Download
      </button>
    </div>
  )
}

export default DownloadButton
