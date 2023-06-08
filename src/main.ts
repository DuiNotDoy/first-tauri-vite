import './style.css'
import { invoke } from '@tauri-apps/api'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app-container">
    <label for="input">Enter Name:</label>
    <input type="text" class="input" id="input" />
    <button class="button" id="button">Click Me</button>
    <div class="output" id="output">
    </div>
  </div>
`


document.getElementById('button')?.addEventListener('click', () => {
    const input = document.getElementById('input') as HTMLInputElement

    invoke('greet', { name: input.value }).then(response => {
        document.querySelector<HTMLDivElement>('#output')!.innerHTML = `
            <p>${response}</p>
        `
        input.value = ''
    })
})
