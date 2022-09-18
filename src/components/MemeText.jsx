import { Rnd } from 'react-rnd'

const MemeText = ({ fontSize, memeText, vertical }) => {
  return (
    <Rnd
      className='font-meme hover:border-gray-400 border-dashed border-transparent border-2 break-words text-center [-webkit-text-stroke:2px_#000] uppercase text-white'
      style={{ fontSize: `${fontSize}em` }}
      bounds='parent'
      default={{
        x: 0,
        y: vertical * 50,
      }}
      maxWidth='100%'
      maxHeight='100%'
    >
      {memeText}
    </Rnd>
  )
}

export default MemeText
