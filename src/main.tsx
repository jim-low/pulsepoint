import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { getRoutes } from './router/index.tsx';

const router = createBrowserRouter(createRoutesFromElements(getRoutes()));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
)
