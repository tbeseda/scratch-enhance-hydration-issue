import whatev from 'whatev' // this will be missing on AWS but available on Begin
// probably a difference in hydrate versions between local and Begin deploy env

export default function MyElement({ html }) {
  return html`
    <h2>Hello, World!</h2>
    <p>${whatev.string}</p>
  `
}
