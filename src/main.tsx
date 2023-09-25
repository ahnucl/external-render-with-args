import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { 
  // App,
  AppProps } from './App.jsx'
import { action as rootAction, Root, loader as rootLoader } from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import Contact, {
  loader as contactLoader,
  action as contactAction
} from './routes/contact.jsx';
import EditContact, { action as editAction} from './routes/edit.jsx';
import { action as destroyAction } from "./routes/destroy.jsx";
import Index from "./routes/index.jsx";

declare global {
  interface Window {
    renderWidget(props: AppProps): void
    AppWidget: {
      render(elementId: string, props: AppProps): void
    }
  }
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          }
        ]
      }
    ]
  }, 
])

function renderWidget(
  // {name, buttonCallback}: AppProps
  ) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      {/* <App name={name} buttonCallback={buttonCallback}/> */}
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )

  // window.renderWidget = () => console.log('already called') // Maybe not needed - just re-renders
}

window.renderWidget = renderWidget


/**
 * On NextJS it would probably be this: 
 * 
 * <Script src="https://example.org/script.js"
 *   onLoad={() => {
 *       console.log('script has loaded')
 *   }
 * />
 * 
 */