import React from 'react'

interface Props {
  onClick: () => void
  buttonImage: React.ReactNode
  ariaLabel: string
}

const InputButton = ({ onClick, buttonImage, ariaLabel }: Props) => {
  return (
    <>
      <button
        className='h-10 w-10 flex justify-center items-center rounded p-2 bg-amber-500 hover:bg-amber-400'
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {buttonImage}
      </button>
    </>
  )
}

export default InputButton
