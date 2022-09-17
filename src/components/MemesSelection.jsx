const MemesSelection = ({ url, id, name, countBox, setMeme }) => {
  return (
    <a href='#'>
      <img
        src={url}
        className='h-52 w-full object-cover rounded border-gray-700 cursor-pointer'
        title={name}
        loading='lazy'
        onClick={() => {
          setMeme((prevMeme) => ({
            ...prevMeme,
            name,
            randomImage: url,
            id,
            countBox,
          }))
        }}
      />
    </a>
  )
}

export default MemesSelection
