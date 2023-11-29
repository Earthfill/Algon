import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App