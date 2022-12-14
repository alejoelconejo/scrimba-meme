import Input from './Input'
import InputButton from './InputButton'
import { ReactComponent as FontIncrease } from '../images/font-increase.svg'
import { ReactComponent as FontDecrease } from '../images/font-decrease.svg'
import { ReactComponent as TextClear } from '../images/text-clear.svg'
import { MemeImg } from '../types'
import React from 'react'

interface Props {
  meme: MemeImg
  setMeme: React.Dispatch<React.SetStateAction<MemeImg>>
  fontSize: number
  setFontSize: React.Dispatch<React.SetStateAction<number>>
}

const Inputs = ({
  meme,
  setMeme,
  fontSize,
  setFontSize,
}: Props): JSX.Element => {
  // Save text input to meme state
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
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
      <div className='flex gap-2'>
        <InputButton
          onClick={() => setFontSize(fontSize + 0.2)}
          buttonImage={<FontIncrease />}
          ariaLabel='Increase Font Size'
        />
        <InputButton
          onClick={() => setFontSize(fontSize - 0.2)}
          buttonImage={<FontDecrease />}
          ariaLabel='Decrease Font Size'
        />
        <InputButton
          onClick={clearText}
          buttonImage={<TextClear />}
          ariaLabel='Clear Text'
        />
      </div>
      {[...Array(meme.box_count)].map((e, i) => (
        <Input
          key={i}
          placeholder={`Text ${i + 1}`}
          onChange={handleChange}
          // @ts-ignore
          value={meme[`text${i + 1}`]}
          name={`text${i + 1}`}
        />
      ))}
    </div>
  )
}

export default Inputs
