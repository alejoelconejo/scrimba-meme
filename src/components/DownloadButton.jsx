import { saveAs } from "file-saver";

export default function DownloadButton(props) {
  function downloadImage() {
    fetch(props.randomImage)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        saveAs(blob, "image");
      });
  }
  return <button onClick={downloadImage}>Save as</button>;
}
