import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App