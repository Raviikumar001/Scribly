
import { Login,Register } from './components/pages';
import Home from './components/Home';
import {Routes,Route } from 'react-router-dom'



function App() {


  return (
   
      <Routes>
          
            <Route path='/' element={ <Home />}/>
            <Route path='/login' element={ <Login />} />
            <Route path='/register' element={<Register />} />

  

      </Routes>

    
    
  )
}

export default App


