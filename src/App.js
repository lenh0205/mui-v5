import { Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Create from './pages/create'
import { CustomerProvider } from './context/CustomerContext'
import Summery from './pages/summery'

function App() {
  return (
    <CustomerProvider>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/summery' element={<Summery/>}/>
      </Routes>
    </CustomerProvider>
  )
}
export default App