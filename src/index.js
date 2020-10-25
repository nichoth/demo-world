import { render } from 'preact'
import { html } from 'htm/preact'

render(html`<a href="/">Hello!</a>`, document.getElementById('content'))

console.log('ok')

