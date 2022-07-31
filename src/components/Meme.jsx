import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevState) => {
      return { ...prevState, randomImage: url };
    });
  }

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
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
        </div>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme-img" src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
