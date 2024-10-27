import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { getRoutes } from './router/index.tsx';
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter(createRoutesFromElements(getRoutes()));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </Theme>
  </StrictMode>,
)
