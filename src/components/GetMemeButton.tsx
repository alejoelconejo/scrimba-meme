import getMemeImage from '../services/getMemeImage'
import { ReactComponent as GetMemeIcon } from '../images/get-meme-button.svg'
import { MemeImg, MemeType } from '../types'
import React from 'react'

interface Props {
  allMemes: MemeType[]
  setMeme: React.Dispatch<React.SetStateAction<MemeImg>>
}

const GetMemeButton = ({ allMemes, setMeme }: Props) => {
  return (
    <button
      className='rounded focus:ring-2 ring-violet-800 font-bold text-lg p-2 font-sans  bg-violet-500 hover:bg-violet-400 w-fit mx-auto px-4 flex gap-2 items-end'
      onClick={() => {
        getMemeImage(allMemes, setMeme)
      }}
    >
      Get a new meme image
      <GetMemeIcon className='h-6' />
    </button>
  )
}

export default GetMemeButton
