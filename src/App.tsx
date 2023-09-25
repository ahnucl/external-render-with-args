export interface AppProps {
  name: string
  buttonCallback?: () => void
}

export function App(props: AppProps) {

  console.log('render')

  /** 
   * TODO: Add some navigation
   */

  return (
    <div>

      <h1>Hello</h1>

      <p>The app's name is <strong>{props.name || 'not passed'}</strong></p>

      <button onClick={props.buttonCallback}>Click me</button>
    </div>

  )
}
