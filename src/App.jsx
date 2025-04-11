import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Components/Home'
import Create from './Components/Create'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/create' element={ <Create/>}></Route>
        </Route>
    </Route>
    )
  )
  return <RouterProvider router={router} />
}
export default App
