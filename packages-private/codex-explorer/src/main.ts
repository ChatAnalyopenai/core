// Import the generateCodeFrame function directly
import { generateCodeFrame } from '../../../packages/shared/src/codeframe'

// Get DOM elements
// eslint-disable-next-line no-restricted-globals
const sourceEl = document.getElementById('source') as HTMLTextAreaElement
// eslint-disable-next-line no-restricted-globals
const startEl = document.getElementById('start') as HTMLInputElement
// eslint-disable-next-line no-restricted-globals
const endEl = document.getElementById('end') as HTMLInputElement
// eslint-disable-next-line no-restricted-globals
const outputEl = document.getElementById('output') as HTMLPreElement
// eslint-disable-next-line no-restricted-globals
const generateBtn = document.getElementById('generate') as HTMLButtonElement

// Generate and display code frame
function generateFrame() {
  const source = sourceEl.value
  const start = parseInt(startEl.value, 10)
  const end = parseInt(endEl.value, 10)

  try {
    const frame = generateCodeFrame(source, start, end)
    outputEl.textContent = frame || '(Empty code frame)'
  } catch (error) {
    outputEl.textContent = `Error: ${error instanceof Error ? error.message : String(error)}`
  }
}

// Add event listeners
generateBtn.addEventListener('click', generateFrame)
sourceEl.addEventListener('input', generateFrame)
startEl.addEventListener('input', generateFrame)
endEl.addEventListener('input', generateFrame)

// Generate initial frame
generateFrame()
