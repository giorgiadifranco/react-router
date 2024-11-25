import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Posts from './pages/Posts.jsx'

import About from './pages/About.jsx'
import DefaultLayout from './pages/DefaultLayout.jsx'

import './App.css'



function App() {


 

  return (
    <>

      <BrowserRouter>

      <Routes >
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />}> Home</Route>
          <Route path="/posts" element={<Posts />}> Posts</Route>
          <Route path="/about" element={<About />}> Chi Siamo</Route>
        </Route>
      </Routes>



</BrowserRouter>
      
      
      
    </>
  )
}

export default App
