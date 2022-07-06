import { Link, Outlet } from 'react-router-dom'

export function Blog () {
  return (
    <div>
      <h1>Blog</h1>

      <ul>
        <li><Link to='/blog/post-1'>Post 1</Link></li>
        <li><Link to='/blog/post-2'>Post 2</Link></li>
      </ul>

      <Outlet/>
    </div>
  )
}
