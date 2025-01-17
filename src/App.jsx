import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route, useNavigate } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./components/dashboard');
const Landing = React.lazy(() => import('./components/landing');

function App() { //client side routing 

  return (
    <div>   
     <BrowserRouter>
       <Appbar />
       <Routes>
         <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
         <Route path='/' element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
       </Routes>
     </BrowserRouter>
   </div> 
  )
}

function Appbar() {
  const useNavigate = useNavigate(); //when we click on either of the buttons we go to that page 

  return <div>
     <div>
        <button style={{margin:10 , color:"pink"}} onClick={() => {
          navigate("/dashboard");
        }}>Go to Dashboard</button>

        <button style={{margin:10 , color:"pink"}} onClick={() => {
          navigate("/");
        }}>Go to Landing</button>
      </div>
  </div> 
}

export default App
