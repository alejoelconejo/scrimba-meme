import { MemeImg } from '../types'
import MemeText from './MemeText'

interface Params {
  meme: MemeImg
  fontSize: number
}

const MemeImage = ({ meme, fontSize }: Params) => {
  return (
    <div className='relative w-full overflow-hidden ' id='meme'>
      <img
        className='w-full object-contain max-h-[80vh]'
        src={meme.randomImage}
        alt={meme.name}
        title={meme.name}
      />
      {[...Array(meme.countBox)].map((e, i) => (
        <MemeText
          key={i}
          vertical={i}
          fontSize={fontSize}
          // @ts-ignore
          memeText={meme[`text${i + 1}`]}
        />
      ))}
    </div>
  )
}

export default MemeImage
