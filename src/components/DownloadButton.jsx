import { saveAs } from "file-saver"

export default function DownloadButton(props) {
  async function downloadImage() {
    await fetch(props.randomImage)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        saveAs(blob, "image")
      })
  }

  return (
    <button className="button-download" onClick={downloadImage}>
      Download
    </button>
  )
}
