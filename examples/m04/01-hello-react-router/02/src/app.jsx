import { Link } from 'react-router-dom'

export function App () {
  return (
    <div>
      <h1>Title</h1>
      <ul style={{ fontSize: 30 }}>
        <li><Link to='/about'>Sobre</Link></li>
        <li><Link to='/contact'>Contato</Link></li>
      </ul>
    </div>
  )
}
