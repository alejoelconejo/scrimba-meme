import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'
import { dataURLtoFile } from '../actions/dataURLtoFile'
import { shareFile } from '../actions/shareFile'
import { MemeImg } from '../types'

interface Params {
  meme: MemeImg
}

const DownloadButton = ({ meme }: Params) => {
  const handleClickShare = async () => {
    // @ts-ignore
    const canvas = await html2canvas(document.querySelector('#meme'), {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
    })
    const imageURL = await canvas.toDataURL('image/png')
    const imageFile = await dataURLtoFile(imageURL, `${meme.id}.png`)
    shareFile(imageFile, `${meme.name}`, '')
  }

  const handleClickDownload = async () => {
    // @ts-ignore
    const canvas = await html2canvas(document.querySelector('#meme'), {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
    })
    const imageURL = canvas.toDataURL('image/png')
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
