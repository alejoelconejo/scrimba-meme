const MemeImage = ({ meme, fontSize }) => {
  return (
    <div className='relative w-full' id='meme'>
      <img
        className=' w-full object-contain h-[350px] md:h-[500px]'
        src={meme.randomImage}
        alt={meme.name}
        title={meme.name}
      />
      <h2
        className='font-meme absolute -translate-x-1/2 w-2/3 text-center select-none left-1/2 my-4 mx-0 py-0 px-1 [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,2px_2px_5px_#000] uppercase text-white top-0'
        style={{ fontSize: `${fontSize}em` }}
      >
        {meme.text1}
      </h2>
      <h2
        className='font-meme absolute -translate-x-1/2 w-2/3 text-center select-none left-1/2 my-4 mx-0 py-0 px-1 [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,2px_2px_5px_#000] uppercase text-white bottom-0'
        style={{ fontSize: `${fontSize}em` }}
      >
        {meme.text2}
      </h2>
    </div>
  )
}

export default MemeImage
