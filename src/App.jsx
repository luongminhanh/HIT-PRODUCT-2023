// import Home from "./pages/Home"
// import Contact from "./pages/Contact"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LayoutPage from "./layouts/LayoutPage";
import Register from "./pages/Register";
function App() {


  return (
 
      <div className="App">
        <Register/>
        {/* <Routes>
        <Route element={<LayoutPage/>}>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/contact" element= {<Contact></Contact>} />
        </Route>
      </Routes> */}
      </div>
  )
}

export default App
