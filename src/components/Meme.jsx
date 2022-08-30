import { useState, useEffect } from "react"

import DownloadButton from "./DownloadButton"
import GetMemeButton from "./GetMemeButton"
import Inputs from "./Inputs"
import MemeImage from "./MemeImage"

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
    name: "",
  })

  const [allMemes, setAllMemes] = useState([])

  const [fontSize, setFontSize] = useState(2)

  const [recommendedMemes, setRecommendedMemes] = useState([])

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  useEffect(() => {
    async function getRecommendedMemes() {
      const allMemesSliced = await shuffle(allMemes).slice(0, 6)
      setRecommendedMemes(allMemesSliced)
    }
    getRecommendedMemes()
  }, [allMemes])

  function handleClickSuggested() {}

  return (
    <main className="max-w-3xl mx-auto">
      <section className="flex flex-col px-12 py-6 gap-6">
        <Inputs
          meme={meme}
          setMeme={setMeme}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
        <GetMemeButton allMemes={allMemes} setMeme={setMeme} />
      </section>
      <section className="flex justify-center flex-col gap-5">
        <MemeImage meme={meme} fontSize={fontSize} />
        <DownloadButton />
      </section>
      <section className="py-8 mx-4">
        <h3 className="text-slate-800 text-2xl font-semibold dark:text-slate-200">
          Recomendados
        </h3>
        <div className="flex flex-wrap gap-4 justify-evenly items-center mt-4">
          {allMemes.length &&
            recommendedMemes.map(({ url, id, name }) => {
              return (
                <img
                  src={url}
                  className="h-52 w-52 object-cover rounded border-gray-700 cursor-pointer"
                  key={id}
                  onClick={() => {
                    setMeme((prevMeme) => ({
                      ...prevMeme,
                      name: name,
                      randomImage: url,
                    }))
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }}
                />
              )
            })}
        </div>
      </section>
    </main>
  )
}
