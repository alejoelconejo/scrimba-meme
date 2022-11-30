import { useState, useEffect, useRef } from 'react'

import GetMemeButton from './GetMemeButton'
import Inputs from './Inputs'
import MemeImage from './MemeImage'
import Spinner from './Spinner'
import MemesGrid from './MemesGrid'
import shuffleArray from '../services/shuffleArray.js'
import fetchApi from '../services/fetchApi.js'

import { MemeImg, MemeType } from '../types'
import DownloadButton from './DownloadButton'

// Default font size for meme image
const defaultFontSize = 1.8

// Initial value of meme state
const memeInitial = () => {
  return {
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    text5: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg',
    name: 'Game of Thrones',
    id: 132123,
    countBox: 2,
  }
}

const Meme = () => {
  const [meme, setMeme] = useState<MemeImg>(memeInitial)

  const [allMemes, setAllMemes] = useState<MemeType[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const [fontSize, setFontSize] = useState(defaultFontSize)

  const memeRef = useRef(null)

  useEffect(() => {
    setIsLoading(true)
    fetchApi().then(({ data }) => {
      shuffleArray(data.memes)
      setAllMemes(data.memes)
      setIsLoading(false)
    })
  }, [])

  return (
    <main className='max-w-5xl mx-auto px-3 md:px-0 scroll-smooth'>
      <section className='flex flex-col md:flex-row justify-center mt-8'>
        <div className='flex md:w-2/4 justify-start flex-col gap-5 mb-4 md:mb-0'>
          {isLoading ? (
            <Spinner />
          ) : (
            <div
              className='relative w-full overflow-hidden '
              id='meme'
              ref={memeRef}
            >
              <MemeImage meme={meme} fontSize={fontSize} />
            </div>
          )}
        </div>
        <div className='flex flex-1 flex-col gap-6'>
          <GetMemeButton allMemes={allMemes} setMeme={setMeme} />
          <Inputs
            meme={meme}
            setMeme={setMeme}
            fontSize={fontSize}
            setFontSize={setFontSize}
          />
          <DownloadButton meme={meme} />
        </div>
      </section>
      <section className='py-8'>
        <h3 className='text-slate-800 text-2xl font-bold dark:text-slate-200'>
          Other memes
        </h3>
        <div className='grid grid-cols-recommended gap-8 py-4'>
          {isLoading ? (
            <Spinner />
          ) : (
            allMemes.length &&
            allMemes.map(({ url, id, name, box_count: countBox }) => (
              <MemesGrid
                id={id}
                key={id}
                name={name}
                url={url}
                setMeme={setMeme}
                countBox={countBox}
              />
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default Meme
