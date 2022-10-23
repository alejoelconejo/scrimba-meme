import Input from './Input'
import InputButton from './InputButton'
import { ReactComponent as FontIncrease } from '../images/font-increase.svg'
import { ReactComponent as FontDecrease } from '../images/font-decrease.svg'
import { ReactComponent as TextClear } from '../images/text-clear.svg'
import { MemeImg } from '../types'
import React from 'react'
import DownloadButton from './DownloadButton'

interface Params {
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
}: Params): JSX.Element => {
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
        />
        <InputButton
          onClick={() => setFontSize(fontSize - 0.2)}
          buttonImage={<FontDecrease />}
        />
        <InputButton onClick={clearText} buttonImage={<TextClear />} />
      </div>
      {[...Array(meme.countBox)].map((e, i) => (
        <Input
          key={i}
          placeholder={`Text ${i + 1}`}
          onChange={handleChange}
          // @ts-ignore
          value={meme[`text${i + 1}`]}
          name={`text${i + 1}`}
        />
      ))}
      <DownloadButton meme={meme} />
    </div>
  )
}

export default Inputs
