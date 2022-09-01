import Header from './components/Header'
import Meme from './components/Meme'

function App () {
  return (
    <div className='font-sans text-white bg-gray-50 w-full h-full dark:bg-slate-900 transition-colors duration-500'>
      <Header />
      <Meme />
    </div>
  )
}

export default App
