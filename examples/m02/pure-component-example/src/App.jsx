import { PureComponent } from 'react'
import './App.css'

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: 'purple'
    }

    this.handleClick = () => {
      this.setState({color: 'black'})
    }
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <span>Color name: {this.state.color}</span>
        <br />
        <button onClick={this.handleClick}>
          Change color to black
        </button>
    </div>
    )
  }
}

// function App() {
//   const [color, setColor] = useState('purple')

//   console.log('render')
//   return (
//     <div className="App">
//       <span>Color name: {color}</span>
//       <button onClick={() => setColor('black')}>Change color to black</button>
//     </div>
//   )
// }

export default App
