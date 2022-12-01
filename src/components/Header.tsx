import { useEffect } from 'react'
import trollFace from '../images/troll-face.png'
import { ReactComponent as DarkIcon } from '../images/dark-icon.svg'
import { ReactComponent as LightIcon } from '../images/light-icon.svg'
import { themeIcons } from '../utils/themeIcons'
import { themeToggle } from '../utils/themeToggle'

const Header = () => {
  useEffect(() => {
    themeIcons()
  }, [])

  return (
    <header className='flex justify-between items-center pt-4 px-6 pb-3 max-w-5xl mx-auto rounded rounded-t-none shadow-slate-600 shadow-sm dark:shadow-pink-500 bg-gradient-to-r from-indigo-500 to-pink-500'>
      <div className='flex flex-1 justify-center items-center gap-2'>
        <img className='w-8' src={trollFace} />
        <div className='flex gap-2 items-baseline flex-1'>
          <a href='/'>
            <h1 className='font-bold text-3xl tracking-tight'>Memardo</h1>
          </a>
          <p className=' sm:block hidden'>another meme generator</p>
        </div>
        <button
          id='theme-toggle'
          type='button'
          onClick={() => themeToggle()}
          className='text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5'
        >
          <DarkIcon className='hidden w-5 h-5' />
          <LightIcon className='hidden w-5 h-5' />
        </button>
      </div>
    </header>
  )
}

export default Header
