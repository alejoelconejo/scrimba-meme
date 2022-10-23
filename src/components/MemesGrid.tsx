import { MemeImg } from '../types'

interface Params {
  url: string
  id: number
  name: string
  countBox: number
  setMeme: React.Dispatch<React.SetStateAction<MemeImg>>
}

const MemesGrid = ({
  url,
  id,
  name,
  countBox,
  setMeme,
}: Params): JSX.Element => {
  return (
    <a href='#'>
      <img
        src={url}
        className='h-52 w-full shadow-md shadow-gray-600 dark:shadow-black object-cover rounded border-gray-700 cursor-pointer'
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

export default MemesGrid
