import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.tsx'
import Post from './routes/Post/Post.tsx'
import Edition from './routes/Edition/Edition.tsx'
import './App.css';
import PageNotFound from './routes/PageNotFound/PageNotFound.tsx'
import ViewMore from './routes/ViewMore/ViewMore.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/read',
        children:[{
          path: ':id',
          element: <ViewMore />
        }]
      },
      {
        path: '/new-post',
        element: <Post />
      },
      {
        path: '/edition',
        children: [{
          path: ':id',
          element: <Edition />
        }]
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
