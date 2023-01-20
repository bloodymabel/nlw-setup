const form = document.querySelector("#form-habits")
const nwlSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nwlSetup.dayExists(today)

  if (dayExists) {
    alert("dia já incluso")
    return
  }

  alert("adicionado com sucesso")
  nwlSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nwlSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nwlSetup.setData(data)
nwlSetup.load()
