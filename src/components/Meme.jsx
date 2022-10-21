import { useState, useEffect } from 'react'

import DownloadButton from './DownloadButton'
import GetMemeButton from './GetMemeButton'
import Inputs from './Inputs'
import MemeImage from './MemeImage'
import Spinner from './Spinner'
import MemesSelection from './MemesSelection'
import shuffleArray from '../services/shuffleArray.js'
import fetchApi from '../services/fetchApi.js'
// import getMemeImage from '../services/getMemeImage.js'

// Default font size for meme image
const defaultFontSize = 1.8

// Amount of memes in recommended memes section
const recommendedMemesLength = 8

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
    const [meme, setMeme] = useState(memeInitial)

    const [allMemes, setAllMemes] = useState([])

    const [recommendedMemes, setRecommendedMemes] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const [fontSize, setFontSize] = useState(defaultFontSize)

    // Fetch from API and save the response to allMemes state
    useEffect(() => {
        setIsLoading(true)
        fetchApi().then((dataApi) => {
            setAllMemes(dataApi.data.memes)
            setIsLoading(false)
        })
    }, [])

    // Shuffle allMemes array, slice it and save to recommendedMemes
    useEffect(() => {
        async function getRecommendedMemes() {
            const allMemesSliced = await shuffleArray(allMemes).slice(
                0,
                recommendedMemesLength
            )
            setRecommendedMemes(allMemesSliced)
        }
        getRecommendedMemes()
    }, [allMemes])

    return (
        <main className='max-w-5xl mx-auto px-3 md:px-0 scroll-smooth'>
            <section className='flex flex-col md:flex-row justify-center mt-8'>
                <div className='flex md:w-2/4 justify-start flex-col gap-5 mb-4 md:mb-0'>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <MemeImage meme={meme} fontSize={fontSize} />
                    )}
                    <DownloadButton meme={meme} />
                </div>
                <div className='flex flex-1 flex-col gap-6'>
                    <GetMemeButton allMemes={allMemes} setMeme={setMeme} />
                    <Inputs
                        meme={meme}
                        setMeme={setMeme}
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                    />
                </div>
            </section>
            <section className='py-8'>
                <h3 className='text-slate-800 text-2xl font-bold dark:text-slate-200'>
                    Recommended
                </h3>
                <div className='grid grid-cols-recommended gap-8 py-4'>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        allMemes.length &&
                        recommendedMemes.map(
                            ({ url, id, name, box_count: countBox }) => (
                                <MemesSelection
                                    id={id}
                                    key={id}
                                    name={name}
                                    url={url}
                                    setMeme={setMeme}
                                    countBox={countBox}
                                />
                            )
                        )
                    )}
                </div>
            </section>
        </main>
    )
}

export default Meme
