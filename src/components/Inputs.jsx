import Input from './Input'
import InputButton from './InputButton'

const Inputs = ({ meme, setMeme, fontSize, setFontSize }) => {
  // Save text input to meme state
  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  // Clear input text
  const clearText = () => {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
      }
    })
  }

  return (
    <div className='flex flex-col gap-4 flex-wrap items-center justify-center'>
      {[...Array(meme.countBox)].map((e, i) => (
        <Input
          key={i}
          placeholder={`Text ${i + 1}`}
          onChange={handleChange}
          value={meme[`text${i + 1}`]}
          name={`text${i + 1}`}
        />
      ))}

      {/* <Input
        placeholder='Top text'
        onChange={handleChange}
        value={meme.topText}
        name='topText'
      />
      <Input
        placeholder='Bottom text'
        onChange={handleChange}
        value={meme.bottomText}
        name='bottomText'
      /> */}
      <div className='flex gap-2'>
        <InputButton onClick={() => setFontSize(fontSize + 0.2)} text='+' />
        <InputButton onClick={() => setFontSize(fontSize - 0.2)} text='-' />
        <InputButton onClick={clearText} text='Clear' />
      </div>
    </div>
  )
}

export default Inputs
