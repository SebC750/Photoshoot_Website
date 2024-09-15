import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./Components/Home.tsx"
import Contact from "./Components/Contact.tsx"
const routes = createBrowserRouter([{
     path: "/",
     element: <Home/> 
},{
     path:"/Contact",
     element:<Contact/>
}])
function App() {
  

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
