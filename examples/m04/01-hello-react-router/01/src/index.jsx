import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './app'
import { About } from './about'

const root = createRoot(document.querySelector('#root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
