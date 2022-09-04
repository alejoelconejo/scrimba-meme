const MemesSelection = ({ url, id, name, setMeme }) => {
  return (
    <img
      src={url}
      className='h-52 w-52 object-cover rounded border-gray-700 cursor-pointer'
      title={name}
      loading='lazy'
      onClick={() => {
        setMeme((prevMeme) => ({
          ...prevMeme,
          name,
          randomImage: url,
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
