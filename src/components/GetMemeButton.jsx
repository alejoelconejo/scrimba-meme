import getMemeImage from '../services/getMemeImage'
import { ReactComponent as GetMemeImage } from '../images/get-meme-button.svg'

const GetMemeButton = ({ allMemes, setMeme }) => {
  return (
    <button
      className='rounded font-bold text-lg p-2 font-sans  bg-violet-500 w-fit mx-auto px-4 flex gap-2 items-end'
      onClick={() => {
        getMemeImage({ allMemes, setMeme })
      }}
    >
      Get a new meme image
      <GetMemeImage className='h-6' />
    </button>
  )
}

export default GetMemeButton
