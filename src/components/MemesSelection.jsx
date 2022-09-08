const MemesSelection = ({ url, id, name, countBox, setMeme }) => {
  return (
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
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}
    />
  )
}

export default MemesSelection
