import {Routes, Route} from "react-router-dom"
import AddProduct from "./pages/AddProduct"
import ListProduct from "./pages/ListProduct"


function App() {

  return (
    <Routes>
      <Route path="/" element={<ListProduct />}/>
      <Route path="/add-product" element={<AddProduct />}/>
    </Routes>
  )
}

export default App
