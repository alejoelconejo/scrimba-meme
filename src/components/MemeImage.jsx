import MemeText from './MemeText'

const MemeImage = ({ meme, fontSize }) => {
  return (
    <div className='relative w-full overflow-hidden' id='meme'>
      <img
        className='w-full object-contain max-h-[350px] md:max-h-[450px]'
        src={meme.randomImage}
        alt={meme.name}
        title={meme.name}
      />
      <MemeText meme={meme} fontSize={fontSize} />
    </div>
  )
}

export default MemeImage
