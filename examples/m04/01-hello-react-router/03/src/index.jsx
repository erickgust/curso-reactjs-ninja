import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './app'
import { About } from './about'
import { Contact } from './contact'
import { Blog } from './blog'
import { Post } from './post'

const root = createRoot(document.querySelector('#root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}>
        <Route index element={
          <main>
            <p>Select a post</p>
          </main>
        }/>
        <Route path=':post' element={<Post/>}/>
      </Route>
      <Route path='*' element={
        <main>
          <p>There&apos;s nothing here to see</p>
        </main>
      }/>
    </Routes>
  </BrowserRouter>
)
