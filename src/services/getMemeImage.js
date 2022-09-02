export default function getMemeImage({ allMemes, setMeme }) {
  const randomNumber = Math.floor(Math.random() * allMemes.length)
  const { url, name, id } = allMemes[randomNumber]
  setMeme((prevMeme) => {
    return { ...prevMeme, randomImage: url, name, id }
  })
}
