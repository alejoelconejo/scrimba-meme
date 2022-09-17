import { Rnd } from 'react-rnd'

// TODO: fix text position according to parent div height

const MemeText = ({ meme, fontSize }) => {
  return (
    <>
      <Rnd
        className='font-meme hover:border-gray-400 border-dashed border-transparent border-2
         break-all text-center [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,2px_2px_5px_#000] uppercase text-white'
        style={{ fontSize: `${fontSize}em` }}
        bounds='parent'
        default={{
          x: 0,
          y: 0,
        }}
        maxWidth='100%'
        maxHeight='100%'
      >
        {meme.text1}
      </Rnd>
      <Rnd
        className='font-meme hover:border-gray-400 border-dashed border-transparent border-2
        break-all text-center [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,2px_2px_5px_#000] uppercase text-white'
        style={{ fontSize: `${fontSize}em` }}
        bounds='parent'
        default={{
          x: 0,
          y: 150,
        }}
        maxWidth='100%'
        maxHeight='100%'
      >
        {meme.text2}
      </Rnd>
    </>
  )
}

export default MemeText
