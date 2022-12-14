import { MemeImg, MemeType } from '../types'

interface GetMemeImage {
  (
    allMemes: MemeType[],
    setMeme: React.Dispatch<React.SetStateAction<MemeImg>>
  ): void
}

const getMemeImage: GetMemeImage = (allMemes, setMeme) => {
  const randomNumber = Math.floor(Math.random() * allMemes.length)
  const { url, name, id, box_count } = allMemes[randomNumber]
  setMeme((prevMeme) => {
    return { ...prevMeme, url, name, id, box_count }
  })
}

export default getMemeImage
