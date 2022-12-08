import { MemeImg } from '../types'
import MemeText from './MemeText'

interface Props {
  meme: MemeImg
  fontSize: number
}

const MemeImage = ({ meme, fontSize }: Props) => {
  return (
    <>
      <img
        className='w-full object-contain max-h-[80vh]'
        src={meme.url}
        alt={meme.name}
        title={meme.name}
      />
      {[...Array(meme.box_count)].map((_, i) => (
        <MemeText
          key={i}
          vertical={i}
          fontSize={fontSize}
          // @ts-ignore
          memeText={meme[`text${i + 1}`]}
        />
      ))}
    </>
  )
}

export default MemeImage
