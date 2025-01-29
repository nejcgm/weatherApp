import './index.css'
import bgImage from './assets/bg.png'
import Home from  './templates/home'

function App() {
  return (
    <>
    <div className='flex-col justify-center items-center flex'>
    <div className='max-w-[450px] h-[850px] custom-bg w-full border-black border-[5px] rounded-2xl'
    style={{ backgroundImage: `url(${bgImage})` }}>
      <Home/>

    
    </div>
    </div>
    </>
  )
}

export default App
