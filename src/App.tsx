import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"

function App() {
  return (
  <Router>
    <div>
      <Header/>
    </div>
  </Router>
  )
}

export default App
