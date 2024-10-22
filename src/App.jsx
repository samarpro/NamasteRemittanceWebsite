import { useState } from 'react'

import FallBack from './components/FallBack'
import Home from './components/Home'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter(
    [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'upcoming/',
        element: < FallBack />
      }
    ]
  )

  return (
    <RouterProvider router={route} />
  )
}

export default App;
