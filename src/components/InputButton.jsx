const InputButton = ({ onClick, text }) => {
  return (
    <>
      <button
        className="font-sans text-base rounded p-2 font-semibold bg-lime-500"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}

export default InputButton
