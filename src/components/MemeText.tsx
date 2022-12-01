import { Rnd } from 'react-rnd'

interface Props {
  fontSize: number
  memeText: string
  vertical: number
}

const MemeText = ({ fontSize, memeText, vertical }: Props) => {
  return (
    <Rnd
      className='font-meme font-bold active:border-gray-400 md:hover:border-gray-400 border-dashed border-transparent border-2 break-words text-center [-webkit-text-stroke:2px_#000] uppercase text-white'
      style={{ fontSize: `${fontSize}em` }}
      bounds='parent'
      default={{
        x: 0,
        y: vertical * 50,
        width: 200,
        height: 50,
      }}
      maxWidth='100%'
      maxHeight='100%'
    >
      {memeText}
    </Rnd>
  )
}

export default MemeText
