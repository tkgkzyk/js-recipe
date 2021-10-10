/*const inputElement = document.getElementById("input-todo")
  const container = document.getElementById("cards-container")
  const addButton = document.getElementById("add-button")

  // 追加ボタンを押したら
  addButton.onclick = function() {
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = inputElement.value

  // card を作成
  const card = document.createElement("div")
  card.className = "card"

  // todo を作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  // todo を card の中に追加する
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}*/

const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// 追加ボタンを押したときの処理を登録
addButton.onclick = function() {
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function(text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
