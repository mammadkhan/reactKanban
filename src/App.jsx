import './App.css'

import Header from "./components/Header"
import Board from "./components/Board"
import SideMenu from './components/SideMenu'

const App = () => {
  return (
    <div className="App dark">
      <Header/>
      <SideMenu/>
      <Board/>
    </div>
  )
}

export default App