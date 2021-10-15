const inputElement = document.getElementById("memo-input")
const container = document.getElementById("memo-container")
const addButton = document.getElementById("add-button")
const sortButton = document.getElementById("sort-button")
let memos = []

addButton.onclick = function() {
  memos.push(inputElement.value)
  run()
}

sortButton.onclick = function() {
  memos.sort()
  run()
}

const run = function() {
  container.innerHTML = ""
  inputElement.value = ""
  for (let i = 0; i < memos.length; i++) {
    const contents = memos[i]
    const div = document.createElement("div")
    div.textContent = contents
    container.append(div)
  }
}
