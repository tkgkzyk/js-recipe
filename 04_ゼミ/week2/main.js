const memoInput = document.getElementById("memo-input")
const memoContainer = document.getElementById("memo-container")
const addButton = document.getElementById("add-button")

/*addButton.onclick = function() {
  console.log(memoInput.value)
  // タグ名を指定して要素をつくる
  const memo = document.createElement("div") // <div></div>
  memo.textContent = memoInput.value // <div class="card>こんばんは</div>
  memoContainer.append(memo)
}*/

/*addButton.onclick = function () {
    console.log(memoInput.value);
    // タグ名を指定して要素をつくる
    const memo = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    memo.textContent = memoInput.value; // <div class="card>こんばんは</div>
    memoContainer.append(memo);
    memo.append(deleteButton);
    memoInput.value = "";
    deleteButton.onclick = function () {
      memo.remove();
    };
  };*/

addButton.onclick = function() {
  const memo = document.createElement("div")
  const deleteButton = document.createElement("button")
  tsuika(memo, deleteButton)
  sakujo(memo, deleteButton)
}

//上の引数を再定義
/*const sakujo = function(memo, deleteButton) {
  deleteButton.textContent = "削除"
  deleteButton.onclick = function() {
    memo.remove()
  }
}

//上の引数を再定義
const tsuika = function(memo, deleteButton) {
  memo.textContent = memoInput.value
  memoContainer.append(memo)
  memo.append(deleteButton)
  memoInput.value = ""
}*/

//上の引数を再定義
const sakujo = function(m, d) {
  d.textContent = "削除"
  d.onclick = function() {
    m.remove()
  }
}

//上の引数を再定義
const tsuika = function(m, d) {
  m.textContent = memoInput.value
  memoContainer.append(m)
  m.append(d)
  memoInput.value = ""
}
