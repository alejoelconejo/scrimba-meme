import { useState, useEffect } from "react";
import DownloadButton from "./DownloadButton";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  };

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  const clearText = () => {
    setMeme((prevMeme) => {
      return { ...prevMeme, topText: "", bottomText: "" };
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const [fontSize, setFontSize] = useState(2);

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
          <img className="meme-img" src={meme.randomImage} />
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
        <DownloadButton randomImage={meme.randomImage} />
      </section>
    </main>
  );
}
