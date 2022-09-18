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
      {[...Array(meme.countBox)].map((e, i) => (
        <MemeText
          key={i}
          vertical={i}
          fontSize={fontSize}
          memeText={meme[`text${i + 1}`]}
        />
      ))}
    </div>
  )
}

export default MemeImage
