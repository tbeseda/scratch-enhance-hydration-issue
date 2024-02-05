import whatev from 'whatev' // this will be missing on AWS and on Begin

export default function MyElement({ html }) {
  return html`
    <h2>Hello, World!</h2>
    <p>${whatev.string}</p>
  `
}
