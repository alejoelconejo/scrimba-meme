import { useState, useEffect, useCallback } from "react"
import DownloadButton from "./DownloadButton"
import downloadjs from "downloadjs"
import html2canvas from "html2canvas"

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
    name: "",
  })

  const [allMemes, setAllMemes] = useState([])

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const { id, url, name } = allMemes[randomNumber]
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url, name: name }
    })
  }

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  const clearText = () => {
    setMeme((prevMeme) => {
      return { ...prevMeme, topText: "", bottomText: "" }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  const handleCaptureClick = useCallback(async () => {
    const canvas = await html2canvas(document.querySelector("#meme"), {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
    })
    const dataURL = canvas.toDataURL("image/png")
    downloadjs(dataURL, "meme.png", "image/png")
  }, [])

  const [fontSize, setFontSize] = useState(2)

  return (
    <main className="max-w-3xl mx-auto">
      <section className="flex flex-col px-12 py-8 gap-4">
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <input
            className="font-sans text-lg text-slate-800 flex-1 rounded p-2 border-gray-300 border-2"
            placeholder="Top text"
            onChange={handleChange}
            value={meme.topText}
            name="topText"
            type="text"
          />
          <input
            className="font-sans text-lg text-slate-800 flex-1 rounded p-2 border-gray-300 border-2"
            placeholder="Bottom text"
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
            type="text"
          />
          <div className="flex gap-2">
            <button
              className="font-sans text-base rounded p-2 font-semibold bg-lime-500"
              onClick={() => setFontSize(fontSize + 0.2)}
            >
              +
            </button>
            <button
              className="font-sans text-base rounded p-2 font-semibold bg-lime-500"
              onClick={() => setFontSize(fontSize - 0.2)}
            >
              -
            </button>
            <button
              className="font-sans text-base rounded p-2 font-semibold bg-lime-500"
              onClick={clearText}
            >
              Clear
            </button>
          </div>
        </div>

        <button
          className="rounded font-bold text-lg p-2 font-sans bg-gradient-to-r from-indigo-500 to-pink-500"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼️
        </button>
      </section>
      <section className="flex justify-center flex-col gap-5">
        <div className="relative w-fit mx-auto my-0" id="meme">
          <img
            className=" max-w-full mx-auto my-0 object-cover max-h-[450px]"
            src={meme.randomImage}
            alt={meme.name}
          />
          <h2
            className="font-meme absolute -translate-x-1/2 w-2/3 text-center select-none left-1/2 my-4 mx-0 py-0 px-1 [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,2px_2px_5px_#000] uppercase text-white top-0"
            style={{ fontSize: `${fontSize}em` }}
          >
            {meme.topText}
          </h2>
          <h2
            className="font-meme absolute -translate-x-1/2 w-2/3 text-center select-none left-1/2 my-4 mx-0 py-0 px-1 [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,2px_2px_5px_#000] uppercase text-white bottom-0"
            style={{ fontSize: `${fontSize}em` }}
          >
            {meme.bottomText}
          </h2>
        </div>
        {/* <DownloadButton randomImage={meme.randomImage} /> */}
        <button
          className="rounded w-fit self-center p-2 text-sm bg-lime-500 font-semibold"
          onClick={handleCaptureClick}
        >
          Download
        </button>
      </section>
    </main>
  )
}
