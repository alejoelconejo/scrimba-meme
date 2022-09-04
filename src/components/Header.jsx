import { useEffect } from 'react'
import trollFace from '../images/troll-face.png'
import { ReactComponent as DarkIcon } from '../images/dark-icon.svg'
import { ReactComponent as LightIcon } from '../images/light-icon.svg'

const localStorage = window.localStorage
const $ = (element) => document.querySelector(element)

const Header = () => {
  // Change the icons inside the button based on previous settings

  useEffect(() => {
    const themeToggleDarkIcon = $('#theme-toggle-dark-icon')
    const themeToggleLightIcon = $('#theme-toggle-light-icon')

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      themeToggleLightIcon.classList.remove('hidden')
    } else {
      themeToggleDarkIcon.classList.remove('hidden')
    }
  }, [])

  const handleClickDark = () => {
    const themeToggleDarkIcon = $('#theme-toggle-dark-icon')
    const themeToggleLightIcon = $('#theme-toggle-light-icon')

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden')
    themeToggleLightIcon.classList.toggle('hidden')

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      }
    }
  }

  return (
    <header className='flex justify-between items-center py-4 px-6 max-w-3xl mx-auto rounded bg-gradient-to-r from-indigo-500 to-pink-500'>
      <div className='flex flex-1 justify-center items-center gap-2'>
        <img className='w-8' src={trollFace} />
        <div className='flex gap-2 items-baseline flex-1'>
          <h1 className='font-bold text-3xl tracking-tight'>Memardo</h1>
          <p className=' sm:block hidden'>another meme generator</p>
        </div>
        <button
          id='theme-toggle'
          type='button'
          onClick={handleClickDark}
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
