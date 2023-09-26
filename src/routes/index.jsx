import { useEffect } from "react";
import { redirect } from "react-router-dom";

export function loader({ request }) {
  const url = new URL(request.url)
  const queryParams = new URLSearchParams(window.location.search)
  const q = queryParams.get('q')

  console.log('request', request)
  console.log('url', url)
  console.log('queryParams', queryParams)
  console.log('q', q)

  console.log('window.location.search', window.location.search)

  if (!q) {
    console.log('No q.')
    return null
  }

  console.log('q: ', q)
  return redirect('/contacts/r3iki30') // Before render
}


export default function Index() {
  return (
    <p id="zero-state">
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com">
        the docs at reactrouter.com
      </a>
      .
    </p>
  );
}