import trollFace from "../images/troll-face.png"

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-6 max-w-3xl mx-auto rounded bg-gradient-to-r from-indigo-500 to-pink-500">
      <div className="flex justify-center items-center gap-2">
        <img className="w-8" src={trollFace} />
        <div className="flex gap-2 items-baseline">
          <h1 className="font-bold text-3xl tracking-tight">Memardo</h1>
          <p className=" sm:block hidden">another meme generator</p>
        </div>
      </div>
    </div>
  )
}
