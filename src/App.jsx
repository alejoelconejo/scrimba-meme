import Header from './components/Header'
import Meme from './components/Meme'
import Footer from './components/Footer'

function App() {
    return (
        <div className='font-sans text-white bg-gray-100 w-full min-h-screen dark:bg-slate-900 transition-colors duration-500'>
            <Header />
            <Meme />
            <Footer />
        </div>
    )
}

export default App
