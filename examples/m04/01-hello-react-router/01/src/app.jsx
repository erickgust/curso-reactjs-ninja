import { Link, Outlet } from 'react-router-dom'

export function App () {
  return (
    <div>
      <h1>Title</h1>
      <Link to='/about'>Sobre</Link>
      <Outlet/>
    </div>
  )
}
