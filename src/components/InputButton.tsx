const InputButton = ({ onClick, buttonImage }) => {
  return (
    <>
      <button
        className='h-10 w-10 flex justify-center items-center rounded p-2 bg-amber-500'
        onClick={onClick}
      >
        {buttonImage}
      </button>
    </>
  )
}

export default InputButton
