import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, AppProps } from './App.tsx'


declare global {
  interface Window {
    renderWidget(props: AppProps): void
  }
}

function renderWidget({
  name,
  buttonCallback
}:AppProps) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App name={name} buttonCallback={buttonCallback}/>
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