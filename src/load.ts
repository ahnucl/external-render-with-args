import './main.tsx'

const searchParams = new URLSearchParams(window.location.search)

const name = searchParams.get('name') || undefined

window.renderWidget({
  name
})