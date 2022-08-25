import { useState, useEffect, useCallback } from "react"
import DownloadButton from "./DownloadButton"
import downloadjs from "downloadjs"
import html2canvas from "html2canvas"

export default function Meme() {
  const handleCaptureClick = useCallback(async () => {
    const canvas = await html2canvas(document.querySelector(".meme"), {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
    })
    const dataURL = canvas.toDataURL("image/png")
    downloadjs(dataURL, "meme.png", "image/png")
  }, [])

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

  const [fontSize, setFontSize] = useState(2)

  return (
    <main>
      <section className="form">
        <div className="form-inputs">
          <input
            placeholder="Top text"
            onChange={handleChange}
            value={meme.topText}
            name="topText"
            type="text"
          />
          <input
            placeholder="Bottom text"
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
            type="text"
          />
          <div className="font-buttons">
            <button
              className="font-button"
              onClick={() => setFontSize(fontSize + 0.2)}
            >
              +
            </button>
            <button
              className="font-button"
              onClick={() => setFontSize(fontSize - 0.2)}
            >
              -
            </button>
            <button className="font-button" onClick={clearText}>
              Clear
            </button>
          </div>
        </div>

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </section>
      <section className="meme-section">
        <div className="meme">
          <img className="meme-img" src={meme.randomImage} alt={meme.name} />
          <h2 className="meme--text top" style={{ fontSize: `${fontSize}em` }}>
            {meme.topText}
          </h2>
          <h2
            className="meme--text bottom"
            style={{ fontSize: `${fontSize}em` }}
          >
            {meme.bottomText}
          </h2>
        </div>
        {/* <DownloadButton randomImage={meme.randomImage} /> */}
        <button onClick={handleCaptureClick}>Download</button>
      </section>
    </main>
  )
}
