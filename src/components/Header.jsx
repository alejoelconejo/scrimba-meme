import trollFace from "../images/troll-face.png"

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-6 max-w-3xl mx-auto rounded bg-gradient-to-r from-indigo-500 to-pink-500">
      <div className="flex justify-center items-center gap-2">
        <img className="w-8" src={trollFace} />
        <h1 className="font-bold text-xl leading-6 tracking-tight">
          Meme Generator
        </h1>
      </div>
    </div>
  )
}
