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

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

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
    </main>
  )
}
