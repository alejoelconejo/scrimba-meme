import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={trollFace} />
        <h1 className="logo-txt">Meme Generator</h1>
      </div>
    </div>
  );
}
