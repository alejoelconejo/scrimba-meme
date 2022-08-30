import getMemeImage from "../services/getMemeImage"

const GetMemeButton = ({ allMemes, setMeme }) => {
  return (
    <button
      className="rounded font-bold text-lg p-2 font-sans  bg-violet-500 w-fit mx-auto px-4"
      onClick={() => {
        getMemeImage({ allMemes, setMeme })
      }}
    >
      Get a new meme image 🖼️
    </button>
  )
}

export default GetMemeButton
