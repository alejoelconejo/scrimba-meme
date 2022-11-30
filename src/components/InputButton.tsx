import React from 'react'

interface Props {
  onClick: () => void
  buttonImage: React.ReactNode
}

const InputButton = ({ onClick, buttonImage }: Props) => {
  return (
    <>
      <button
        className='h-10 w-10 flex justify-center items-center rounded p-2 bg-amber-500 hover:bg-amber-400'
        onClick={onClick}
      >
        {buttonImage}
      </button>
    </>
  )
}

export default InputButton
