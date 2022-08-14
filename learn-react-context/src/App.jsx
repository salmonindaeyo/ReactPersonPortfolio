import { useState , useEffect , createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { Routes , Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'

export const DataContext = createContext(); //เป็นตัวที่เอาไว้เก็บ stage ทั้งหมดในแอพ

function App() {

  const [data , setData] = useState([])

    useEffect(()=> {
        axios.get('https://gitconnected.com/v1/portfolio/salmonindaeyo')
        .then(res => setData(res.data))
    },[])

 
  return (
    <DataContext.Provider value={data}>
     <NavBar/>
     <Routes>
        <Route path="/" element={<Home />} / >
          <Route path="/about" element={<About />} />
     </Routes>
    </DataContext.Provider>
  )
}

export default App
