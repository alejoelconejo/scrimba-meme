import React, { SetStateAction } from 'react'
import { MemeImg, MemeType } from '../types'

interface GetMemeImage {
  (allMemes: MemeType[], setMeme: React.Dispatch<SetStateAction<MemeImg>>): void
}

const getMemeImage: GetMemeImage = (allMemes, setMeme) => {
  const randomNumber = Math.floor(Math.random() * allMemes.length)
  const { url, name, id, box_count: countBox } = allMemes[randomNumber]
  setMeme((prevMeme) => {
    return { ...prevMeme, randomImage: url, name, id, countBox }
  })
}

export default getMemeImage
