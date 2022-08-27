import Input from "./Input"
import InputButton from "./InputButton"

export const Inputs = ({ meme, setMeme, fontSize, setFontSize }) => {
  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  const clearText = () => {
    setMeme((prevMeme) => {
      return { ...prevMeme, topText: "", bottomText: "" }
    })
  }

  return (
    <div className="flex gap-4 flex-wrap items-center justify-center">
      <Input
        placeholder="Top text"
        onChange={handleChange}
        value={meme.topText}
        name="topText"
      />
      <Input
        placeholder="Bottom text"
        onChange={handleChange}
        value={meme.bottomText}
        name="bottomText"
      />
      <div className="flex gap-2">
        <InputButton onClick={() => setFontSize(fontSize + 0.2)} text="+" />
        <InputButton onClick={() => setFontSize(fontSize - 0.2)} text="-" />
        <InputButton onClick={clearText} text="Clear" />
      </div>
    </div>
  )
}

export default Inputs
