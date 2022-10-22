import React from 'react'

interface Params {
  onClick: () => void
  buttonImage: React.ReactNode
}

const InputButton = ({ onClick, buttonImage }: Params) => {
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
